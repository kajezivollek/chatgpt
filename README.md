# Green City – Trilingual City Website (CZ / DE / EN)

CZ–DE Project Week (Bielefeld) · Pair Assignment 5: Digital, Web & City Identity.

## Pages
1. `index.html` – Home & Vision: name, motto, welcome, 5 Golden Rules, crest, flag, floor plan
2. `landmarks.html` – Landmarks & Life: Town Hall, Signature Landmark, School & Hospital
3. `green.html` – Green & Mobility: clean transit, solar/wind energy, parks, Eco-Balance
4. `team.html` – Making-Of & Team: Day 1/Day 2 diary, 10 team members, photo gallery
- `print.html` – printable L-shaped QR signs (6 stations), station planner and the Golden Rules card

Language buttons (CZ / DE / EN) are in the top bar.

## How to edit
- **All texts, city name, team names:** `js/content.js`
- **Crest & flag:** `photos/crest.png`, `photos/flag.png`
- **Photos:** `photos/` (see `photos/README.md`)
- **Audio guides:** `media/audio/` (see `media/audio/README.md`)

## Put it online (needed for the QR codes)
GitHub Pages: repository *Settings → Pages → Deploy from a branch*, choose the branch and `/ (root)`.
Then open `print.html` on the live site (or enter the live address in the box), check every link in the planner, and print at 100 % scale.

## QR stations
| QR | Model location | Opens |
|---|---|---|
| 1 | Town Hall / Main Plaza | `index.html#welcome` |
| 2 | Signature Landmark | `landmarks.html#landmark` |
| 3 | School / Hospital | `landmarks.html#school-hospital` |
| 4 | Transit Hub / Bridge | `green.html#transit` |
| 5 | Central Park / Wind Farm | `green.html#energy-parks` |
| 6 | Board Front Edge | `team.html#gallery` |
