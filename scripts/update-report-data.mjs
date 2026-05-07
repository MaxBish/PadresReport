#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const TEAM_ID = 135; // Padres
const SEASON = Number(process.argv[2]) || new Date().getFullYear();
const REPORT_PATH = new URL('../report-data.js', import.meta.url);

function normalizeName(name) {
  return String(name || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function fmt3(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '-';
  return num.toFixed(3).replace(/^0/, '');
}

function fmt2(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '-';
  return num.toFixed(2);
}

function asNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function renderJsObject(value, level = 0) {
  const pad = '  '.repeat(level);
  const nextPad = '  '.repeat(level + 1);

  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    const items = value.map((item) => `${nextPad}${renderJsObject(item, level + 1)}`);
    return `[\n${items.join(',\n')}\n${pad}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length) return '{}';
    const props = entries.map(([k, v]) => {
      const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return `${nextPad}${safeKey}: ${renderJsObject(v, level + 1)}`;
    });
    return `{\n${props.join(',\n')}\n${pad}}`;
  }

  return JSON.stringify(value);
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'PadresReport/1.0 (+https://github.com/maxbish/PadresReport)'
    }
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}) for ${url}`);
  }
  return res.json();
}

function getNested(object, path, fallback = undefined) {
  return path.reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), object) ?? fallback;
}

async function getTeamRecord() {
  const standingsUrl = `https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=${SEASON}`;
  const data = await fetchJson(standingsUrl);
  const records = (data.records || []).flatMap((r) => r.teamRecords || []);
  const padres = records.find((r) => getNested(r, ['team', 'id']) === TEAM_ID);
  if (!padres) return { w: 0, l: 0 };
  return { w: asNumber(padres.wins), l: asNumber(padres.losses) };
}

async function getTeamOpsAndRuns() {
  const teamStatsUrl = `https://statsapi.mlb.com/api/v1/teams/${TEAM_ID}/stats?stats=season&group=hitting&season=${SEASON}`;
  const data = await fetchJson(teamStatsUrl);
  const split = getNested(data, ['stats', 0, 'splits', 0], {});
  const stat = split.stat || {};
  return {
    teamOps: stat.ops ? fmt3(stat.ops) : '-',
    seasonRuns: asNumber(stat.runs, 0)
  };
}

async function getWeekSummary() {
  const end = new Date();
  const start = new Date(end);
  start.setDate(end.getDate() - 6);
  const toDate = (d) => d.toISOString().slice(0, 10);

  const scheduleUrl = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${TEAM_ID}&startDate=${toDate(start)}&endDate=${toDate(end)}`;
  const data = await fetchJson(scheduleUrl);
  const games = (data.dates || []).flatMap((d) => d.games || []);
  const finals = games.filter((g) => {
    const state = getNested(g, ['status', 'detailedState'], '').toLowerCase();
    return state.includes('final') && g.teams && g.teams.home && g.teams.away;
  });

  let wins = 0;
  let losses = 0;
  let runsScored = 0;
  let runsAllowed = 0;

  for (const g of finals) {
    const isHome = getNested(g, ['teams', 'home', 'team', 'id']) === TEAM_ID;
    const homeScore = asNumber(getNested(g, ['teams', 'home', 'score']), 0);
    const awayScore = asNumber(getNested(g, ['teams', 'away', 'score']), 0);
    const scored = isHome ? homeScore : awayScore;
    const allowed = isHome ? awayScore : homeScore;

    runsScored += scored;
    runsAllowed += allowed;

    if (scored > allowed) wins += 1;
    if (allowed > scored) losses += 1;
  }

  const notes = [
    `Auto-updated from MLB Stats API for games ${toDate(start)} to ${toDate(end)}.`,
    finals.length
      ? `Padres outscored opponents ${runsScored}-${runsAllowed} over ${finals.length} finalized game(s).`
      : 'No finalized games in the selected 7-day window.'
  ];

  return {
    record: `${wins}-${losses}`,
    runsScored,
    runsAllowed,
    notes
  };
}

async function getRosterLookup() {
  const rosterUrl = `https://statsapi.mlb.com/api/v1/teams/${TEAM_ID}/roster?rosterType=active&season=${SEASON}`;
  const data = await fetchJson(rosterUrl);
  const lookup = new Map();

  for (const entry of data.roster || []) {
    const personId = getNested(entry, ['person', 'id']);
    const fullName = getNested(entry, ['person', 'fullName']);
    if (!personId || !fullName) continue;
    lookup.set(normalizeName(fullName), {
      id: personId,
      fullName,
      position: getNested(entry, ['position', 'abbreviation']) || '-',
      isPitcher: (getNested(entry, ['position', 'type']) || '').toLowerCase() === 'pitcher'
    });
  }

  return lookup;
}

async function getPersonSeasonStats(personId) {
  const url = `https://statsapi.mlb.com/api/v1/people/${personId}?hydrate=stats(group=[hitting,pitching],type=[season],season=${SEASON})`;
  const data = await fetchJson(url);
  const person = getNested(data, ['people', 0], {});
  const battingSide = getNested(person, ['batSide', 'code']) || '-';
  const pitchHand = getNested(person, ['pitchHand', 'code']) || '-';

  const groups = getNested(person, ['stats'], []);
  const hitting = groups.find((g) => getNested(g, ['group', 'displayName']) === 'hitting');
  const pitching = groups.find((g) => getNested(g, ['group', 'displayName']) === 'pitching');
  const hitStat = getNested(hitting, ['splits', 0, 'stat'], {});
  const pitStat = getNested(pitching, ['splits', 0, 'stat'], {});

  return { battingSide, pitchHand, hitStat, pitStat };
}

function buildHitterStats(stat) {
  return {
    G: asNumber(stat.gamesPlayed),
    AVG: stat.avg ? fmt3(stat.avg) : '-',
    OBP: stat.obp ? fmt3(stat.obp) : '-',
    SLG: stat.slg ? fmt3(stat.slg) : '-',
    OPS: stat.ops ? fmt3(stat.ops) : '-',
    HR: asNumber(stat.homeRuns),
    RBI: asNumber(stat.rbi),
    SB: asNumber(stat.stolenBases)
  };
}

function buildPitcherStats(stat) {
  return {
    G: asNumber(stat.gamesPlayed),
    GS: asNumber(stat.gamesStarted),
    W: asNumber(stat.wins),
    ERA: stat.era ? fmt2(stat.era) : '-',
    WHIP: stat.whip ? fmt2(stat.whip) : '-',
    IP: stat.inningsPitched || '-',
    K: asNumber(stat.strikeOuts),
    BB: asNumber(stat.baseOnBalls),
    SV: asNumber(stat.saves),
    HLD: asNumber(stat.holds),
    BS: asNumber(stat.blownSaves)
  };
}

async function updateReportData() {
  const source = await readFile(REPORT_PATH, 'utf8');
  const report = vm.runInNewContext(`${source}\nREPORT;`, {}, { timeout: 1000 });

  if (!report || typeof report !== 'object') {
    throw new Error('Could not parse REPORT from report-data.js');
  }

  const [record, teamAgg, weekSummary, rosterLookup] = await Promise.all([
    getTeamRecord(),
    getTeamOpsAndRuns(),
    getWeekSummary(),
    getRosterLookup()
  ]);

  const originalRoster = Array.isArray(report.roster) ? report.roster : [];
  const updatedRoster = [];

  for (const player of originalRoster) {
    const match = rosterLookup.get(normalizeName(player.name));
    if (!match) {
      updatedRoster.push(player);
      continue;
    }

    const person = await getPersonSeasonStats(match.id);
    const isPitcher = match.isPitcher;
    const hand = `${person.battingSide || '-'}${person.pitchHand ? `/${person.pitchHand}` : '/-'}`;

    updatedRoster.push({
      id: player.id,
      name: match.fullName,
      position: match.position || player.position,
      hand,
      stats: isPitcher ? buildPitcherStats(person.pitStat) : buildHitterStats(person.hitStat)
    });
  }

  const updatedWeekSummary = {
    ...weekSummary,
    teamOps: teamAgg.teamOps
  };

  const recordText = `record: { w:${record.w}, l:${record.l} },`;
  const weekText = `weekSummary: ${renderJsObject(updatedWeekSummary, 1)},`;
  const rosterText = `roster: ${renderJsObject(updatedRoster, 1)},`;

  const recordStart = source.indexOf('record:');
  const weekStart = source.indexOf('weekSummary:');
  const rosterStart = source.indexOf('roster:');
  const nextGamesStart = source.indexOf('nextGames:');

  if ([recordStart, weekStart, rosterStart, nextGamesStart].some((x) => x === -1)) {
    throw new Error('Expected keys not found in report-data.js (record/weekSummary/roster/nextGames).');
  }

  const beforeRecord = source.slice(0, recordStart);
  const betweenRecordWeek = '\n  ';
  const betweenWeekRoster = '\n  ';
  const beforeNextGames = source.slice(nextGamesStart);

  const output = `${beforeRecord}${recordText}${betweenRecordWeek}${weekText}${betweenWeekRoster}${rosterText}\n  ${beforeNextGames}`;

  await writeFile(REPORT_PATH, output, 'utf8');

  const updatedAt = new Date().toISOString();
  console.log(`Updated report-data.js for season ${SEASON}.`);
  console.log(`Record: ${record.w}-${record.l}`);
  console.log(`Week: ${updatedWeekSummary.record}, Runs ${updatedWeekSummary.runsScored}-${updatedWeekSummary.runsAllowed}, OPS ${updatedWeekSummary.teamOps}`);
  console.log(`Roster players updated: ${updatedRoster.length}`);
  console.log(`Updated at: ${updatedAt}`);
}

updateReportData().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
