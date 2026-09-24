# Namzilabs brand kit — for content

Everything a post or video needs so the brand reads as one brand. The source of truth in code is [`lib/brand.css`](../lib/brand.css).

![Logo concepts](logos/boards/00-overview.png)

## Logo

**Recommended: 01 · Between.** Your tools are the circles; the number you need lives in the overlap. The blue lens is literally "the number between your tools". It also reads as matching: the same person, seen by two tools at once. It holds up as a 24px avatar, which is where social logos live.

| Concept | Idea | Board |
|---|---|---|
| **01 Between** ⭐ | Two tools, one overlap | [board](logos/boards/01-between.png) |
| 02 Converge | Many sources in, one number out | [board](logos/boards/02-converge.png) |
| 03 Receipt | Every number shows its working | [board](logos/boards/03-receipt.png) |
| 04 Bridge | An "n" standing on two tools | [board](logos/boards/04-bridge.png) |
| 05 Merge | Today's two-dot mark, touching | [board](logos/boards/05-merge.png) |

Each concept folder in [`logos/`](logos/) contains:
- `symbol-color.svg` for light backgrounds
- `symbol-white.svg` for dark backgrounds
- `symbol-ink.svg`, one colour
- `app-icon.svg` (ink tile) and `app-icon-sky.svg` (blue tile)
- `lockup-light.svg` and `lockup-dark.svg`

The wordmark is outlined from Inter 800, so no file needs a font installed. Rebuild with `node tools/build-logos.mjs`.

**Profile pictures:** use `01-between/app-icon.svg` (the ink tile), exported square at 400×400 or larger. X and Instagram crop to a circle, and the mark sits comfortably inside it.

**Don't:** recolour the lens anything but blue, add effects, put the ink tile on a busy photo, or stretch it.

## Colour

| Role | Hex | Use |
|---|---|---|
| Ink | `#14141C` | Headlines, body, the logo tile |
| Paper | `#F6F7FB` | Light canvas (with soft blue glows and a faint 88px grid) |
| Card | `#FFFFFF` | Cards, receipts |
| Hairline | `#E7E8F0` | Borders |
| Muted | `#5C5C6B` | Secondary text |
| **Blue (action)** | `#2F5FD8` | Buttons, links, the **one** accent per image |
| Brand blue | `#568CFF` | The product's own blue; the logo's lens on dark |
| Sky gradient | `#16305E → #22438F → #2B53AE` | Dark "sky" panels, i.e. a published number |
| Live green | `#34C759` | "Live / recomputed" dots only |
| Signal red | `#F0553D` | A disagreement, a no-show, something excluded |

**Rule:** colour carries meaning. Blue means the answer, red means something is wrong or left out, green means live. Never decorative.

## Type

- **Inter** (variable, optical sizes) for everything. Headlines use weight 800 with tight tracking (−0.045 to −0.05em); body uses weight 450.
- **Instrument Serif italic** for **exactly one word per headline**, the word that carries the meaning: "Three *answers.*", "shows its *working.*"
- Numbers always use tabular figures.
- Both fonts are OFL-licensed and vendored in [`assets/fonts/`](../assets/fonts/).

## Layout

| Format | Size | Notes |
|---|---|---|
| Instagram feed | 1080×1350 (4:5) | 88px side margins; brand mark top-left; slide count top-right |
| Reels / TikTok / Shorts | 1080×1920 (9:16) | Keep the story between y=240 and y=1500. The top ~220px and bottom ~420px sit under the app's UI. |
| X image | 1600×900 (16:9) | Headline left, proof right |
| Logo sting | 1080×1080 | Profile intro / outro |

Every image with example numbers says **"Example data"** in small type.

## Motion (the "Framer-smooth" spec)

These come from [research/01 §4](../research/01-framer-and-base44.md) and are implemented in [`lib/motion.js`](../lib/motion.js).

- **60fps, rendered frame by frame**, never screen-recorded.
- **Entries:** rise and fade with `cubic-bezier(0.16, 1, 0.3, 1)` over 450–750ms. Headlines rise word by word from behind a mask, 60–70ms apart.
- **Objects with weight:** a spring (about 10% overshoot) over 0.9–1.2s.
- **Exits:** faster than entries (250–450ms), accelerating out, with a little blur.
- **Numbers count up;** they never just appear.
- **Camera:** a slow push of about 1–2% over the whole video; the grid drifts; the end card's glow breathes.
- **One idea per scene, 2–4s each.** Hook in the first 1.5s. End on the logo plus "Start free · namzilabs.co".

## Voice

- Plain, specific, a little dry. Short sentences, second person.
- Show the working: say what's counted and what isn't.
- Lead with the number or the argument, never with "Introducing…".
- Say "booked, held, no-show, setter, closer" to sales teams and "launch, list, cart" to creators, in their words.
- No hype words ("revolutionary", "game-changing"), no emoji walls, no invented urgency.
