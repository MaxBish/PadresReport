function initReport(report) {
const COMMENTS_STORAGE_KEY = "padresReportComments.v1";

function loadCommentsStore() {
  try {
    const raw = localStorage.getItem(COMMENTS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCommentsStore(store) {
  try {
    localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Ignore storage failures (private mode/quota); page should still work.
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getEntryId(entry) {
  const away = entry.away && entry.away.abbr ? entry.away.abbr : "";
  const home = entry.home && entry.home.abbr ? entry.home.abbr : "";
  return [
    entry.type || "",
    entry.gameLabel || "",
    entry.gameDate || entry.offDaySub || "",
    entry.venue || "",
    away,
    home,
  ].join("|");
}

function formatCommentTime(ts) {
  try {
    return new Date(ts).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

function renderCommentList(comments) {
  if (!comments.length) {
    return '<div class="comment-empty">No comments yet.</div>';
  }

  return comments.map((c) => `
    <div class="comment-item">
      <div class="comment-meta">
        <span class="comment-author">${escapeHtml(c.name)}</span>
        <span class="comment-time">${escapeHtml(formatCommentTime(c.ts))}</span>
      </div>
      <div class="comment-text">${escapeHtml(c.text)}</div>
    </div>
  `).join("");
}

const commentsStore = loadCommentsStore();

function initializeCommentSections(rootEl) {
  if (!rootEl) return;

  const sections = rootEl.querySelectorAll(".comments");
  sections.forEach((section) => {
    const entryId = section.getAttribute("data-entry-id");
    const listEl = section.querySelector(".comment-list");
    const formEl = section.querySelector(".comment-form");
    const nameInput = section.querySelector(".comment-name");
    const textInput = section.querySelector(".comment-text-input");

    if (!entryId || !listEl || !formEl || !textInput) return;

    const existing = Array.isArray(commentsStore[entryId]) ? commentsStore[entryId] : [];
    listEl.innerHTML = renderCommentList(existing);

    if (formEl.dataset.bound === "true") return;
    formEl.dataset.bound = "true";

    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = textInput.value.trim();
      if (!text) return;

      const name = nameInput && nameInput.value.trim()
        ? nameInput.value.trim().slice(0, 32)
        : "Anonymous";

      const nextComment = { name, text: text.slice(0, 400), ts: Date.now() };
      const current = Array.isArray(commentsStore[entryId]) ? commentsStore[entryId] : [];
      commentsStore[entryId] = [...current, nextComment].slice(-100);
      saveCommentsStore(commentsStore);

      listEl.innerHTML = renderCommentList(commentsStore[entryId]);
      textInput.value = "";
    });
  });
}

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

  const entryId = escapeHtml(getEntryId(e));

  const commentsBlock = `
    <div class="comments" data-entry-id="${entryId}">
      <div class="comments-title">Comments</div>
      <form class="comment-form">
        <input class="comment-name" type="text" maxlength="32" placeholder="Name (optional)" />
        <textarea class="comment-text-input" maxlength="400" rows="3" placeholder="Add a comment..."></textarea>
        <button class="comment-submit" type="submit">Post</button>
      </form>
      <div class="comment-list"></div>
    </div>
  `;

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
      ${commentsBlock}
    </article>`;
}

function getSeriesKey(entry) {
  if (entry.type !== "recap" || !entry.away || !entry.home) return null;
  const isHome = entry.home.abbr === "SD";
  const opponent = isHome ? entry.away.abbr : entry.home.abbr;
  return `${isHome ? "H" : "A"}-${opponent}`;
}

function splitEntriesByRecentSeries(entriesList, maxSeries) {
  const visible = [];
  const older = [];
  let currentSeriesKey = null;
  let seriesSeen = 0;
  let useVisibleBucket = true;

  for (const entry of entriesList) {
    const seriesKey = getSeriesKey(entry);
    if (seriesKey && seriesKey !== currentSeriesKey) {
      currentSeriesKey = seriesKey;
      seriesSeen += 1;
      if (seriesSeen > maxSeries) {
        useVisibleBucket = false;
      }
    }

    if (useVisibleBucket) {
      visible.push(entry);
    } else {
      older.push(entry);
    }
  }

  return { visible, older };
}

const entries = document.getElementById("entries");
if (entries && Array.isArray(report.entries)) {
  const split = splitEntriesByRecentSeries(report.entries, 2);
  entries.innerHTML = split.visible.map(renderCard).join("");
  initializeCommentSections(entries);

  const olderWrap = document.getElementById("older-wrap");
  const olderToggle = document.getElementById("older-toggle");
  const olderEntries = document.getElementById("older-entries");

  if (olderWrap && olderToggle && olderEntries && split.older.length) {
    olderWrap.hidden = false;
    let olderRendered = false;

    olderToggle.addEventListener("click", () => {
      const expanded = olderToggle.getAttribute("aria-expanded") === "true";
      if (!expanded && !olderRendered) {
        olderEntries.innerHTML = split.older.map(renderCard).join("");
        initializeCommentSections(olderEntries);
        olderRendered = true;
      }
      olderToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      olderEntries.hidden = expanded;
      olderToggle.textContent = expanded ? "View Older Series" : "Hide Older Series";
    });
  }
}
}

if (typeof REPORT === "undefined") {
  console.error("REPORT data is missing. Ensure report-data.js loads before report.js.");
} else {
  initReport(REPORT);
}