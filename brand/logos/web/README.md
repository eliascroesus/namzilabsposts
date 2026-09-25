# Website icons

Drop these files in your site's root (the folder that serves `/`), then paste this into `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#2F5FD8">
```

| File | Size | What it is |
|---|---|---|
| `favicon.svg` | any | The browser-tab icon: white rings on the rounded blue tile. Sharp at every size. |
| `favicon.ico` | 32×32 | The same, for browsers and tools that still ask for `/favicon.ico`. |
| `favicon-32.png` | 32×32 | The same as a PNG. |
| `apple-touch-icon.png` | 180×180 | The iPhone and iPad home-screen icon (full-bleed; iOS rounds the corners). |
| `icon-192.png`, `icon-512.png` | 192, 512 | Android home-screen and install icons, listed in `site.webmanifest`. The mark sits well inside the safe area, so they also work as maskable icons. |
| `site.webmanifest` | | Name, colours and icons for "Add to home screen". |

For the logo itself on a page (header, footer, a partner strip), use the transparent files in [`../transparent/`](../transparent/): the SVGs first, the PNGs where SVG isn't accepted.

Re-render: `node tools/build-logos.mjs && node tools/render-stills.mjs brand/logos/transparent.html brand/logos --ss 2 --alpha`, then `ffmpeg -i brand/logos/web/favicon-32.png brand/logos/web/favicon.ico`.
