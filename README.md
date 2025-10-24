# Il Ristorante — Minimal Italian Menu (Vignelli style)

A small static site demonstrating Italian food menu styling inspired by Massimo Vignelli: strict typography, limited palette, and strong grid-based layout.

Files
- `index.html` — main page
- `styles.css` — styling (responsive)
- `script.js` — simple interactivity: menu filters, random suggestion, mobile nav

How to run
1. Open `index.html` in any browser (double-click or `xdg-open index.html`).

Design notes
- Typography uses system sans-serif stack to approximate Helvetica.
- Palette: black/white with a single strong red accent.
- Layout uses CSS Grid and generous whitespace to echo Vignelli's clarity.

Poster-style update
- The site now includes a colorful hero inspired by Massimo Vignelli posters: stacked color blocks with a bold typographic overlay.
- Palette expanded to a small, deliberate set: deep navy, vivid red, warm yellow, and teal — used as geometric swatches for strong visual hierarchy.

Logo, spacing & palette
- Added a small geometric logo in `assets/logo.svg` (stacked rectangles + wordmark) to echo Vignelli's mark systems. It now uses the Italian flag colors (green/white/red) plus black.
- Implemented a strict spacing system in `styles.css` using a base unit (`--unit: 8px`) and named multiples (`--space-sm`, `--space-md`, etc.). This ensures consistent rhythm and easier adherence to a grid.
- The site palette was updated to use only the Italian flag colors plus black/white: `--green`, `--red`, `--white`, and `--black`. All accent colors were removed to keep strict consistency.

Next steps (optional)
- Add real images and svg marks with strict spacing.
- Replace system fonts with licensed Helvetica or a close alternative.
- Add ARIA improvements and more keyboard interactions.