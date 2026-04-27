const BETLOG_URL = 'csv/betlog.csv';

let allBets = [];
let currentSort = 'newest';
let currentSearch = '';

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
        if (normalized.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(normalized.toLowerCase())) {
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
    return `<div class="match"><span class="team-side">${homeImg} ${home}</span><span class="vs">vs</span><span class="team-side">${away} ${awayImg}</span></div>`;
}

function parseCSV(text) {
    const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = normalizedText.trim().split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return [];

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const obj = {};
        let current = '';
        let inQuotes = false;
        let colIndex = 0;

        for (let j = 0; j < line.length; j++) {
            const char = line[j];
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
        result.push(obj);
    }

    return result.filter(row => row.date && row.date.trim() !== '');
}

function createHistoryCard(bet) {
    const resultClass = bet.results.toLowerCase();
    const oddsDisplay = bet.market ? bet.market + ' @ ' + bet.odds : bet.odds;
    return `<div class="bet-card ${resultClass}"><div class="date">${bet.date}</div>${getMatchHTML(bet.match)}${bet.analysis ? `<div class="analysis">${bet.analysis}</div>` : ''}<div class="odds-line"><span class="odds">${oddsDisplay}</span><span class="result ${resultClass}">${bet.results.toUpperCase()} ${bet.units}</span></div></div>`;
}

function filterBets(bets, searchTerm) {
    if (!searchTerm) return bets;
    const term = searchTerm.toLowerCase();
    return bets.filter(b => b.match && b.match.toLowerCase().includes(term));
}

function sortBets(bets, sortType) {
    let filtered = [...bets];

    if (sortType.startsWith('league-')) {
        const league = sortType.split('-')[1].toUpperCase();
        filtered = filtered.filter(b => b.league && b.league.toUpperCase() === league);
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    switch (sortType) {
        case 'newest':
            return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'odds-high':
            return filtered.sort((a, b) => parseFloat(b.odds) - parseFloat(a.odds));
        case 'odds-low':
            return filtered.sort((a, b) => parseFloat(a.odds) - parseFloat(b.odds));
        default:
            return filtered;
    }
}

function applyFadeIn(gridId) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.classList.remove('fade-in');
        void grid.offsetWidth;
        grid.classList.add('fade-in');
    }
}

function updateStats(bets) {
    const total = bets.length;
    const wins = bets.filter(b => b.results && b.results.toLowerCase() === 'win').length;
    const winPct = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;
    const units = bets.reduce((sum, b) => sum + (parseFloat(b.units) || 0), 0);
    const roi = total > 0 ? ((units / total) * 100).toFixed(1) : 0;

    const totalEl = document.getElementById('stat-total');
    const winsEl = document.getElementById('stat-wins');
    const pctEl = document.getElementById('stat-pct');
    const unitsEl = document.getElementById('stat-units');
    const roiEl = document.getElementById('stat-roi');
    const countEl = document.getElementById('results-count');

    if (totalEl) totalEl.textContent = total;
    if (winsEl) winsEl.textContent = wins;
    if (pctEl) pctEl.textContent = winPct + '%';

    if (unitsEl) {
        unitsEl.textContent = (units >= 0 ? '+' : '') + units.toFixed(2);
        unitsEl.className = 'stat-top ' + (units >= 0 ? 'win' : 'loss');
    }

    if (roiEl) {
        roiEl.textContent = (units >= 0 ? '+' : '') + roi + '%';
        roiEl.className = 'stat-top ' + (units >= 0 ? 'win' : 'loss');
    }

    if (countEl) {
        if (currentSort.startsWith('league-')) {
            const leagueName = currentSort === 'league-pl' ? 'Premier League' : 
                               currentSort === 'league-cl' ? 'Champions League' : 'Europa League';
            if (currentSearch) {
                countEl.textContent = `Showing ${total} result${total !== 1 ? 's' : ''} for "${currentSearch}" in ${leagueName}`;
            } else {
                countEl.textContent = `Showing ${total} bets in ${leagueName}`;
            }
        } else if (currentSearch) {
            countEl.textContent = `Showing ${total} result${total !== 1 ? 's' : ''} for "${currentSearch}"`;
        } else {
            countEl.textContent = `Showing all ${total} bets`;
        }
    }
}

function renderBets() {
    const logGrid = document.getElementById('log-grid');
    if (!logGrid) return;

    let filtered = filterBets(allBets, currentSearch);
    let sorted = sortBets(filtered, currentSort);

    logGrid.innerHTML = sorted.length ? sorted.map(createHistoryCard).join('') : 
        '<p style="color:#555;text-align:center;padding:40px;">No bets found</p>';

    applyFadeIn('log-grid');
    updateStats(sorted);
}

function loadBetLog() {
    const logGrid = document.getElementById('log-grid');
    if (logGrid) {
        logGrid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';
    }

    fetch(BETLOG_URL + '?t=' + Date.now())
        .then(r => {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.text();
        })
        .then(text => {
            allBets = parseCSV(text);
            renderBets();
        })
        .catch(err => {
            console.error('Error loading betlog.csv:', err);
            const totalEl = document.getElementById('stat-total');
            if (totalEl) totalEl.textContent = 'ERR';
            const logGrid = document.getElementById('log-grid');
            if (logGrid) logGrid.innerHTML = '<p style="color:#555;text-align:center;padding:40px;">Failed to load bets</p>';
        });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.trim();
            renderBets();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            currentSort = e.target.value;
            renderBets();
        });
    }

    loadBetLog();
});