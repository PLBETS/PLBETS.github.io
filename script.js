const BETS_URL = 'csv/bets.csv';
const BETLOG_URL = 'csv/betlog.csv';

function parseCSV(text) {
    const lines = text.trim().split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    return lines.slice(1).map(line => {
        const obj = {};
        let current = '';
        let inQuotes = false;
        let colIndex = 0;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                obj[headers[colIndex]] = current.trim();
                current = '';
                colIndex++;
            } else {
                current += char;
            }
        }
        
        obj[headers[colIndex]] = current.trim();
        return obj;
    }).filter(row => row.date && row.date.trim() !== '');
}

function createUpcomingCard(bet) {
    const oddsDisplay = bet.market ? bet.market + ' @ ' + bet.odds : bet.odds;
    
    return `
        <div class="bet-card pending">
            <div class="date">${bet.date}</div>
            <div class="match">${bet.match}</div>
            ${bet.analysis ? `<div class="analysis">${bet.analysis}</div>` : ''}
            <div class="odds-line">
                <span class="odds">${oddsDisplay}</span>
                <a href="https://duel.com/r/HarryBarri" class="duel-link" target="_blank">BET</a>
            </div>
        </div>
    `;
}

function createHistoryCard(bet) {
    const resultClass = bet.results.toLowerCase();
    const oddsDisplay = bet.market ? bet.market + ' @ ' + bet.odds : bet.odds;
    
    return `
        <div class="bet-card ${resultClass}">
            <div class="date">${bet.date}</div>
            <div class="match">${bet.match}</div>
            ${bet.analysis ? `<div class="analysis">${bet.analysis}</div>` : ''}
            <div class="odds-line">
                <span class="odds">${oddsDisplay}</span>
                <span class="result ${resultClass}">${bet.results.toUpperCase()} ${bet.units}</span>
            </div>
        </div>
    `;
}

function loadBets() {
    // Ladda kommande bets
    fetch(BETS_URL + '?t=' + Date.now())
        .then(r => r.text())
        .then(text => {
            const bets = parseCSV(text);
            
            const plGrid = document.getElementById('pl-grid');
            const clGrid = document.getElementById('cl-grid');
            const elGrid = document.getElementById('el-grid');
            
            if (plGrid) {
                const plBets = bets.filter(b => b.league.toUpperCase() === 'PL');
                plGrid.innerHTML = plBets.length ? plBets.map(createUpcomingCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No upcoming PL bets</p>';
            }
            
            if (clGrid) {
                const clBets = bets.filter(b => b.league.toUpperCase() === 'CL');
                clGrid.innerHTML = clBets.length ? clBets.map(createUpcomingCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No upcoming CL bets</p>';
            }
            
            if (elGrid) {
                const elBets = bets.filter(b => b.league.toUpperCase() === 'EL');
                elGrid.innerHTML = elBets.length ? elBets.map(createUpcomingCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No upcoming EL bets</p>';
            }
        })
        .catch(err => console.error('Error loading bets.csv:', err));

    // Ladda historik
    fetch(BETLOG_URL + '?t=' + Date.now())
        .then(r => r.text())
        .then(text => {
            const bets = parseCSV(text);
            const logGrid = document.getElementById('log-grid');
            
            if (logGrid) {
                const sorted = bets.sort((a, b) => new Date(b.date) - new Date(a.date));
                logGrid.innerHTML = sorted.length ? sorted.map(createHistoryCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No bets logged yet</p>';
            }
        })
        .catch(err => console.error('Error loading betlog.csv:', err));
}

loadBets();