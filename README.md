# Dads Report

**Classic reporting on your San Diego Padres.**

Game-by-game recaps with linescores, key stats, and unfiltered takes — written by yours truly, MaxBish. No frameworks, no backend. Just HTML, CSS, and vanilla JavaScript hosted on GitHub Pages.

Live site: https://maxbish.github.io/PadresReport/

---

## How it works

Each recap lives in `report-data.js` as an entry object. After a game, submit the finished recap here. Copilot adds the entry, refreshes MLB facts locally, and validates the report before you choose when to push it.

```bash
git add .
git commit -m "Game recap: [opponent]"
git push
```

## Updating A Report

When you submit a new recap, Copilot runs this local refresh after adding your entry:

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 node scripts/update-report-data.mjs 2026
node scripts/validate-report-data.mjs
```

The refresh updates current MLB facts while preserving the authored `entries` array, including your paragraphs and embeds. The validation confirms the report parses and contains a record, weekly summary, roster, six complete upcoming games, and at least one authored recap.

Review the changes, then publish when you are ready:

```bash
git add .
git commit -m "Game recap: [opponent]"
git push
```

## Keeping Stats Accurate

Roster and weekly summary stats can be refreshed from MLB Stats API (no backend required):

```bash
node scripts/update-report-data.mjs
```

Optional season override:

```bash
node scripts/update-report-data.mjs 2026
```

This updates the following in `report-data.js`:
- `record`
- `weekSummary`
- `roster`
- `nextGames`

The repository workflow in `.github/workflows/update-stats.yml` is an optional manual fallback. It has no timed trigger, so local recap updates remain the source of truth.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Page shell and script/style includes |
| `styles.css` | All site styling |
| `report-data.js` | Report content — generated facts and authored entries |
| `report.js` | Rendering logic, recent/older split, comments |
| `scripts/update-report-data.mjs` | On-demand MLB factual data refresh |
| `scripts/validate-report-data.mjs` | Local report data validation |
| `pictures/` | Image assets |

## Security

Protected `main` branch, secret scanning and push protection enabled. `report-data.js` is fully public — do not include sensitive personal information in any entry content.

## Contributing

PRs require 1 approval before merging. The repo owner can push directly.