function initReport(report) {
// ── RECORD ──
const computedRecord = report.entries.reduce((acc, e) => {
  if (e.result === "W") acc.w += 1;
  if (e.result === "L") acc.l += 1;
  return acc;
}, { w: 0, l: 0 });

const displayRecord = report.record && Number.isFinite(report.record.w) && Number.isFinite(report.record.l)
  ? report.record
  : computedRecord;

const recordDisplay = document.getElementById("record-display");
if (recordDisplay) {
  recordDisplay.textContent = `${displayRecord.w}-${displayRecord.l}`;
}

// ── RENDER UP NEXT ──
const upNext = document.getElementById("up-next");
if (upNext) {
  upNext.innerHTML = report.nextGames.map(g => `
    <div class="up-next-game">
      <div class="game-date-badge">${g.date}</div>
      <div class="game-matchup">${g.matchup}</div>
      <div class="game-meta">${g.venue}<br>${g.time}</div>
    </div>`).join("");
}

// ── RENDER ENTRIES ──
function renderLinescore(ls, away, home) {
  const innings = ls.innings.map(i => `<th>${i}</th>`).join("");
  const totals  = `<th class="total-col">R</th><th class="total-col">H</th><th class="total-col">E</th>`;
  const awayRow = ls.away.map(r => `<td>${r}</td>`).join("");
  const homeRow = ls.home.map(r => `<td>${r}</td>`).join("");
  return `
    <div class="linescore-wrap" aria-label="Box score by inning">
      <table class="linescore">
        <thead><tr><th class="team-col"></th>${innings}${totals}</tr></thead>
        <tbody>
          <tr>
            <td class="team-col">${away.abbr}</td>${awayRow}
            <td class="total-col">${ls.awayTotals.R}</td>
            <td class="total-col">${ls.awayTotals.H}</td>
            <td class="total-col">${ls.awayTotals.E}</td>
          </tr>
          <tr>
            <td class="team-col">${home.abbr}</td>${homeRow}
            <td class="total-col">${ls.homeTotals.R}</td>
            <td class="total-col">${ls.homeTotals.H}</td>
            <td class="total-col">${ls.homeTotals.E}</td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderStats(stats) {
  if (!stats || !stats.length) return "";
  const pills = stats.map(s =>
    `<span class="pill ${s.type}"><span class="pill-label">${s.label}:</span>${s.value}</span>`
  ).join("");
  return `<div class="stats-row">${pills}</div>`;
}

function renderCard(e) {
  const isOff = e.type === "offday";
  const resultClass = e.result === "W" ? "win" : e.result === "L" ? "loss" : "off";
  const badge = isOff ? "OFF" : (e.seriesResult || e.result);
  const dateStr = isOff ? (e.offDaySub || "") : `${e.gameDate || ""}${e.venue ? " · " + e.venue : ""}`;

  const scoreBlock = isOff ? "" : `
    <div class="score-row">
      <div class="team-block">
        <div class="team-abbr">${e.away.abbr}</div>
        <div class="team-name">${e.away.city}<br>${e.away.name}</div>
      </div>
      <div class="score-center">
        <div class="score-num ${!e.winnerIsHome ? "winner" : ""}">${e.awayScore}</div>
        <div class="score-dash">–</div>
        <div class="score-num ${e.winnerIsHome ? "winner" : ""}">${e.homeScore}</div>
      </div>
      <div class="team-block right">
        <div class="team-abbr">${e.home.abbr}</div>
        <div class="team-name">${e.home.city}<br>${e.home.name}</div>
      </div>
    </div>`;

  const paras = e.paragraphs.map(p => `<p>${p}</p>`).join("");

  const photoBlock = e.photo ? `
    <img class="card-photo" src="${e.photo}" alt="Game photo" loading="lazy" decoding="async" />
    ${e.photoCaption ? `<div class="card-photo-caption">${e.photoCaption}</div>` : ""}
  ` : "";

  return `
    <article class="card ${resultClass}">
      <div class="card-header">
        <div>
          <div class="card-label">${e.gameLabel}</div>
          ${dateStr ? `<div class="card-date">${dateStr}</div>` : ""}
        </div>
        <div class="card-result ${resultClass}">${badge}</div>
      </div>
      ${scoreBlock}
      ${e.linescore ? renderLinescore(e.linescore, e.away, e.home) : ""}
      ${renderStats(e.stats)}
      <div class="card-body">${paras}</div>
      ${photoBlock}
    </article>`;
}

const entries = document.getElementById("entries");
if (entries) {
  entries.innerHTML = report.entries.map(renderCard).join("");
}
}

if (typeof REPORT === "undefined") {
  console.error("REPORT data is missing. Ensure report-data.js loads before report.js.");
} else {
  initReport(REPORT);
}