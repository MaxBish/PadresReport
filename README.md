# Dads Report

**Classic reporting on your San Diego Padres.**

Game-by-game recaps with linescores, key stats, and unfiltered takes — written by yours truly, MaxBish. No frameworks, no backend. Just HTML, CSS, and vanilla JavaScript hosted on GitHub Pages.

Live site: https://maxbish.github.io/PadresReport/

---

## How it works

Each recap lives in `report-data.js` as an entry object. After a game, add a new entry at the top of the `entries` array with the linescore, stats, and writeup. Push to `main` and the site updates.

```bash
git add .
git commit -m "Game recap: [opponent]"
git push
```

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Page shell and script/style includes |
| `styles.css` | All site styling |
| `report-data.js` | Report content — record, next games, entries |
| `report.js` | Rendering logic, recent/older split, comments |
| `pictures/` | Image assets |

## Security

Protected `main` branch, secret scanning and push protection enabled. `report-data.js` is fully public — do not include sensitive personal information in any entry content.

## Contributing

PRs require 1 approval before merging. The repo owner can push directly.