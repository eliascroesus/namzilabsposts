# Transparent logo files

The Namzilabs logo with nothing behind it, for the website, decks, docs and partner pages. Every file is cropped tight to the artwork, so size it with CSS and add your own spacing (keep clear space of at least half the symbol's height around it).

| | White | Black | Blue |
|---|---|---|---|
| Colour | `#FFFFFF` | `#14141C` (the brand's ink) | `#2F5FD8` |
| Use it on | dark or photo backgrounds | light backgrounds | white or very light backgrounds |
| Symbol (the two rings) | `namzilabs-symbol-white.svg` · 512 · 2048 PNG | `namzilabs-symbol-black.svg` · 512 · 2048 | `namzilabs-symbol-blue.svg` · 512 · 2048 |
| Lockup (rings + name) | `namzilabs-lockup-white.svg` · 1200 · 2400 PNG | `namzilabs-lockup-black.svg` · 1200 · 2400 | `namzilabs-lockup-blue.svg` · 1200 · 2400 |
| Wordmark (name only) | `namzilabs-wordmark-white.svg` · 1200 PNG | `namzilabs-wordmark-black.svg` · 1200 | `namzilabs-wordmark-blue.svg` · 1200 |

The PNG sizes are widths in pixels; heights follow the artwork. The space between the two rings is empty, so the background shows through: that's the logo, not a missing fill.

- **SVG first.** It's sharp at any size and a few hundred bytes. The wordmark is outlined, so no font is needed.
- **On the website:** `<img src="/namzilabs-lockup-black.svg" alt="Namzilabs" height="28">` in a light header, `-white` in a dark one.
- **Don't** recolour the rings separately, add a fill between them, outline or shadow them, or stretch the files.

Favicons and home-screen icons are in [`../web/`](../web/). Re-render: `node tools/build-logos.mjs && node tools/render-stills.mjs brand/logos/transparent.html brand/logos --ss 2 --alpha`.
