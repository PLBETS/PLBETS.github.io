const BETS_URL = 'csv/bets.csv';
const BETLOG_URL = 'csv/betlog.csv';

const teamLogos = {
    'Arsenal': 'https://resources.premierleague.com/premierleague/badges/t3.png',
    'Aston Villa': 'https://resources.premierleague.com/premierleague/badges/t7.png',
    'Bournemouth': 'https://resources.premierleague.com/premierleague/badges/t91.png',
    'Brentford': 'https://resources.premierleague.com/premierleague/badges/t94.png',
    'Brighton': 'https://resources.premierleague.com/premierleague/badges/t36.png',
    'Burnley': 'https://resources.premierleague.com/premierleague/badges/t90.png',
    'Chelsea': 'https://resources.premierleague.com/premierleague/badges/t8.png',
    'Crystal Palace': 'https://resources.premierleague.com/premierleague/badges/t31.png',
    'Everton': 'https://resources.premierleague.com/premierleague/badges/t11.png',
    'Fulham': 'https://resources.premierleague.com/premierleague/badges/t54.png',
    'Ipswich': 'https://resources.premierleague.com/premierleague/badges/t40.png',
    'Leicester': 'https://resources.premierleague.com/premierleague/badges/t13.png',
    'Liverpool': 'https://resources.premierleague.com/premierleague/badges/t14.png',
    'Man City': 'https://resources.premierleague.com/premierleague/badges/t43.png',
    'Manchester City': 'https://resources.premierleague.com/premierleague/badges/t43.png',
    'Man United': 'https://resources.premierleague.com/premierleague/badges/t1.png',
    'Manchester United': 'https://resources.premierleague.com/premierleague/badges/t1.png',
    'Newcastle': 'https://resources.premierleague.com/premierleague/badges/t4.png',
    'Nottingham Forest': 'https://resources.premierleague.com/premierleague/badges/t17.png',
    'Forest': 'https://resources.premierleague.com/premierleague/badges/t17.png',
    'Southampton': 'https://resources.premierleague.com/premierleague/badges/t20.png',
    'Spurs': 'https://resources.premierleague.com/premierleague/badges/t6.png',
    'Tottenham': 'https://resources.premierleague.com/premierleague/badges/t6.png',
    'Sunderland': 'https://resources.premierleague.com/premierleague/badges/t56.png',
    'West Ham': 'https://resources.premierleague.com/premierleague/badges/t21.png',
    'Wolves': 'https://resources.premierleague.com/premierleague/badges/t39.png',
    'Sheffield United': 'https://resources.premierleague.com/premierleague/badges/t49.png',
    'Leeds': 'https://resources.premierleague.com/premierleague/badges/t2.png',
    'West Brom': 'https://resources.premierleague.com/premierleague/badges/t35.png',
    'Norwich': 'https://resources.premierleague.com/premierleague/badges/t45.png',
    'Watford': 'https://resources.premierleague.com/premierleague/badges/t57.png',
    'Barcelona': 'https://media.api-sports.io/football/teams/529.png',
    'Real Madrid': 'https://media.api-sports.io/football/teams/541.png',
    'Atletico Madrid': 'https://media.api-sports.io/football/teams/530.png',
    'Bayern Munich': 'https://media.api-sports.io/football/teams/157.png',
    'Dortmund': 'https://media.api-sports.io/football/teams/165.png',
    'PSG': 'https://media.api-sports.io/football/teams/85.png',
    'Inter': 'https://media.api-sports.io/football/teams/505.png',
    'AC Milan': 'https://media.api-sports.io/football/teams/489.png',
    'Juventus': 'https://media.api-sports.io/football/teams/496.png',
    'Napoli': 'https://media.api-sports.io/football/teams/492.png',
    'Roma': 'https://media.api-sports.io/football/teams/497.png',
    'Lazio': 'https://media.api-sports.io/football/teams/487.png',
    'Atalanta': 'https://media.api-sports.io/football/teams/499.png',
    'Leverkusen': 'https://media.api-sports.io/football/teams/168.png',
    'Leipzig': 'https://media.api-sports.io/football/teams/173.png',
    'Frankfurt': 'https://media.api-sports.io/football/teams/169.png',
    'Wolfsburg': 'https://media.api-sports.io/football/teams/161.png',
    'Stuttgart': 'https://media.api-sports.io/football/teams/172.png',
    'Porto': 'https://media.api-sports.io/football/teams/581.png',
    'Benfica': 'https://media.api-sports.io/football/teams/211.png',
    'Sporting': 'https://media.api-sports.io/football/teams/228.png',
    'Brugge': 'https://media.api-sports.io/football/teams/551.png',
    'Celtic': 'https://media.api-sports.io/football/teams/247.png',
    'Rangers': 'https://media.api-sports.io/football/teams/257.png',
    'Ajax': 'https://media.api-sports.io/football/teams/194.png',
    'PSV': 'https://media.api-sports.io/football/teams/197.png',
    'Feyenoord': 'https://media.api-sports.io/football/teams/209.png',
    'Galatasaray': 'https://media.api-sports.io/football/teams/645.png',
    'Fenerbahce': 'https://media.api-sports.io/football/teams/611.png',
    'Besiktas': 'https://media.api-sports.io/football/teams/600.png',
    'Lyon': 'https://media.api-sports.io/football/teams/80.png',
    'Marseille': 'https://media.api-sports.io/football/teams/81.png',
    'Lille': 'https://media.api-sports.io/football/teams/79.png',
    'Rennes': 'https://media.api-sports.io/football/teams/94.png',
    'Monaco': 'https://media.api-sports.io/football/teams/91.png',
    'Nice': 'https://media.api-sports.io/football/teams/84.png',
    'Sevilla': 'https://media.api-sports.io/football/teams/559.png',
    'Villarreal': 'https://media.api-sports.io/football/teams/533.png',
    'Real Sociedad': 'https://media.api-sports.io/football/teams/548.png',
    'Betis': 'https://media.api-sports.io/football/teams/543.png',
    'Valencia': 'https://media.api-sports.io/football/teams/532.png',
    'Celta Vigo': 'https://media.api-sports.io/football/teams/538.png',
    'Athletic Bilbao': 'https://media.api-sports.io/football/teams/531.png',
    'Union Berlin': 'https://media.api-sports.io/football/teams/182.png',
    'Bodo Glimt': 'https://media.api-sports.io/football/teams/327.png',
    'Molde': 'https://media.api-sports.io/football/teams/328.png',
    'Copenhagen': 'https://media.api-sports.io/football/teams/400.png'
    'Braga': 'https://media.api-sports.io/football/teams/217.png',
    'Freiburg': 'https://media.api-sports.io/football/teams/160.png',
};

function getLogo(teamName) {
    const normalized = teamName.trim();
    if (teamLogos[normalized]) return teamLogos[normalized];

    for (const [key, url] of Object.entries(teamLogos)) {
        if (normalized.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(normalized.toLowerCase())) {
            return url;
        }
    }
    return null;
}

function getMatchHTML(match) {
    const teams = match.split(' vs ');
    if (teams.length !== 2) return `<div class="match">${match}</div>`;

    const home = teams[0].trim();
    const away = teams[1].trim();
    const homeLogo = getLogo(home);
    const awayLogo = getLogo(away);

    const homeImg = homeLogo ? `<img src="${homeLogo}" class="team-logo" alt="" onerror="this.style.display='none'">` : '';
    const awayImg = awayLogo ? `<img src="${awayLogo}" class="team-logo" alt="" onerror="this.style.display='none'">` : '';

    return `
        <div class="match">
            <span class="team-side">${homeImg} ${home}</span>
            <span class="vs">vs</span>
            <span class="team-side">${away} ${awayImg}</span>
        </div>
    `;
}

function parseCSV(text) {
    const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = normalizedText.trim().split('\n').filter(line => line.trim() !== '');
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
            ${getMatchHTML(bet.match)}
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
            ${getMatchHTML(bet.match)}
            ${bet.analysis ? `<div class="analysis">${bet.analysis}</div>` : ''}
            <div class="odds-line">
                <span class="odds">${oddsDisplay}</span>
                <span class="result ${resultClass}">${bet.results.toUpperCase()} ${bet.units}</span>
            </div>
        </div>
    `;
}

function setLoading(gridId) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';
    }
}

function applyFadeIn(gridId) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.classList.remove('fade-in');
        void grid.offsetWidth; // trigger reflow
        grid.classList.add('fade-in');
    }
}

function loadBets() {
    setLoading('pl-grid');
    setLoading('cl-grid');
    setLoading('el-grid');
    setLoading('log-grid');

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
                applyFadeIn('pl-grid');
            }

            if (clGrid) {
                const clBets = bets.filter(b => b.league.toUpperCase() === 'CL');
                clGrid.innerHTML = clBets.length ? clBets.map(createUpcomingCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No upcoming CL bets</p>';
                applyFadeIn('cl-grid');
            }

            if (elGrid) {
                const elBets = bets.filter(b => b.league.toUpperCase() === 'EL');
                elGrid.innerHTML = elBets.length ? elBets.map(createUpcomingCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No upcoming EL bets</p>';
                applyFadeIn('el-grid');
            }
        })
        .catch(err => console.error('Error loading bets.csv:', err));

    fetch(BETLOG_URL + '?t=' + Date.now())
        .then(r => r.text())
        .then(text => {
            const bets = parseCSV(text);
            const logGrid = document.getElementById('log-grid');

            if (logGrid) {
                const sorted = bets.sort((a, b) => new Date(b.date) - new Date(a.date));
                logGrid.innerHTML = sorted.length ? sorted.map(createHistoryCard).join('') : '<p style="color:#555;text-align:center;padding:40px;">No bets logged yet</p>';
                applyFadeIn('log-grid');
            }
        })
        .catch(err => console.error('Error loading betlog.csv:', err));
}

loadBets();