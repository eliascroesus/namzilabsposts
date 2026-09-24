# Namzilabs brand kit — for content

Everything a post or video needs so the brand reads as one brand. The source of truth in code is [`lib/brand.css`](../lib/brand.css).

![Logo concepts](logos/boards/00-overview.png)

![Logo concepts, round two](logos/boards/00-overview-2.png)

## Logo

**Primary: 01 · Between, mono** ([board](logos/boards/01-between-mono.png)). It's the same mark with no blue lens: the two tools and their overlap in one colour, so it works on blue, ink, sky or paper and stays clear at 24px. Use `01-between-mono/profile-blue-1024.png` as the profile picture everywhere. The eclipse alternate (`eclipse-*`), with the overlap knocked out, is the boldest at tiny sizes.

**The original concept: 01 · Between.** Your tools are the circles; the number you need lives in the overlap. The blue lens is literally "the number between your tools". It also reads as matching: the same person, seen by two tools at once. It holds up as a 24px avatar, which is where social logos live.

| Concept | Idea | Board |
|---|---|---|
| **01 Between** ⭐ | Two tools, one overlap | [board](logos/boards/01-between.png) |
| 02 Converge | Many sources in, one number out | [board](logos/boards/02-converge.png) |
| 03 Receipt | Every number shows its working | [board](logos/boards/03-receipt.png) |
| 04 Bridge | An "n" standing on two tools | [board](logos/boards/04-bridge.png) |
| 05 Merge | Today's two-dot mark, touching | [board](logos/boards/05-merge.png) |
| **06 Namzi** · social twin | The lens from 01 with a face: the mascot as a mark | [board](logos/boards/06-namzi.png) |
| 07 Hash | # is the number; the blue square is the space between the lines | [board](logos/boards/07-hash.png) |
| 08 Wire | A flow wire from a tool to the answer, bent into a Z | [board](logos/boards/08-wire.png) |
| 09 Pillars | An N: two tools apart, and the blue line that connects them | [board](logos/boards/09-pillars.png) |
| 10 Tittle | Lowercase wordmark; the i is dotted with the Between mark | [board](logos/boards/10-tittle.png) |

Each concept folder in [`logos/`](logos/) contains:
- `symbol-color.svg` for light backgrounds
- `symbol-white.svg` for dark backgrounds
- `symbol-ink.svg`, one colour
- `app-icon.svg` (ink tile) and `app-icon-sky.svg` (blue tile)
- `lockup-light.svg` and `lockup-dark.svg` (for 10 Tittle, the lockups are the lowercase wordmark itself)
- `profile.svg` and `profile-1024.png`: a full-bleed square for profile pictures

The wordmark is outlined from Inter 800, so no file needs a font installed. Rebuild with `node tools/build-logos.mjs`.

**Profile pictures:** use `01-between/profile-1024.png`. It's the ink square at 1024×1024, and the mark sits comfortably inside the circle crop X and Instagram apply. For a friendlier account, such as a "Namzi" reply persona, use `06-namzi/profile-1024.png` or one of the mascot avatars in [`mascot/avatars/`](mascot/avatars/).

**Don't:** add a coloured lens back, add effects, put the ink tile on a busy photo, or stretch it. The mark is one colour: white on dark and blue, ink on light.

**Banners:** five designs (Electric, Funnel, Sources, Namzi, Minimal), each at every platform size: X, LinkedIn company and personal, Facebook page and group, YouTube, a link-preview card and an email signature. There are also Instagram highlight covers. See [`banners/README.md`](banners/README.md).

## Mascot: Namzi

![Namzi](mascot/boards/01-character.png)

**Namzi is the blue lens from the logo, with a face.** It's the overlap where two tools see the same person, the number between them, given eyes, noodle arms and a stack of receipts. It gives the brand a character people remember and send to each other, without changing the logo.

**Personality**
- Counts everyone once: Dave, dave@ and Dave M. are one Dave.
- Carries receipts, and shows the working behind every number.
- Deadpan, never mean. It teases the number, never the person.
- Allergic to vanity metrics: "booked" isn't "held", and refunds aren't revenue.

**Rules**
- **Social only.** Never use Namzi in the product UI or on the landing page. The landing page's own design rules keep it mascot-free.
- **At most 1 post in 4.** Namzi is a recurring guest, not the host. In this batch it appears in posts 13, 14, 16 and 21 and videos 07 and 08.
- **Namzi reacts; the numbers do the talking.** It never states a claim the brand couldn't, and the claims rules apply to it too.
- Keep its colours: the blue body gradient, ink limbs on light surfaces, light limbs on dark (`dark: true`).

**In code:** [`lib/mascot.js`](../lib/mascot.js) draws Namzi as one SVG. Posts use `<div class="namzi" data-mood="…" data-pose="…" data-prop="…">`, and videos call `NZ.mascot({…})` every frame. The full range is shown on the [expressions board](mascot/boards/02-expressions.png).

| Moods | Poses | Props | Effects |
|---|---|---|---|
| neutral, happy, joy, suspicious, sideeye, shocked, smug, sleepy, sad, stern, nervous | down, wave, up, hip, shrug, point, hold, holdL, think, facepalm, sign, carry | receipt, magnifier, redflag, greenflag, coffee | zzz, sweat, sparkle, exclaim, question, anger, hearts |

**Exports:** [`mascot/stickers/`](mascot/stickers/) has 18 die-cut stickers (1024px PNG + SVG), and [`mascot/avatars/`](mascot/avatars/) has 3 square avatars. Rebuild them with `node tools/export-mascot.mjs`.

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

## Message

Lead with **all your data in one place**, then **any metric**, then **where the funnel breaks across tools**, then **true numbers, cross-referenced, not blurry**. Receipts ("every number shows its working") are the proof, not the headline. The AI line ("give your AI the whole picture") waits for the AI connection to be live, or carries "coming soon".

## Voice

- Plain, specific, a little dry. Short sentences, second person.
- Show the working: say what's counted and what isn't.
- Lead with the number or the argument, never with "Introducing…".
- Say "booked, held, no-show, setter, closer" to sales teams and "launch, list, cart" to creators, in their words.
- No hype words ("revolutionary", "game-changing"), no emoji walls, no invented urgency.
