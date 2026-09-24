# Namzilabs content

Research, positioning, logos, posts and motion videos for [Namzilabs](https://namzilabs.co), *the numbers between your tools, with the working shown.*

Everything here is made from code: HTML designs rendered to exact-size PNGs and 60fps MP4s. Edit a word, re-render, and it's still on-brand.

| Start here | What it is |
|---|---|
| [**STRATEGY.md**](STRATEGY.md) | The plan: positioning, who we talk to (in order), pillars, cadence, hooks, CTAs, the first 30 days, and the claims rules |
| [**research/**](research/) | Four deep-research reports (about 45,000 words, 400+ sources): Framer & Base44, Attio & Mochi & premium SaaS, growth playbooks, and customers & competitors |
| [**brand/**](brand/) | Five logo concepts (SVG and PNG), the recommended mark, and the [brand kit](brand/BRAND_KIT.md) |
| [**posts/**](posts/) | 12 ready-to-post pieces for Instagram and X. Each has its images, captions, X copy, alt text and a claims check |
| [**videos/**](videos/) | 6 smooth motion videos at 60fps, with captions ([videos/README](videos/README.md)) |

---

## Logos

<img src="brand/logos/boards/00-overview.png" width="100%" alt="Five logo concepts. Recommended: Between.">

**Recommended: 01 · Between.** Two tools, and the number in the overlap. See the [boards](brand/logos/boards/) and the [brand kit](brand/BRAND_KIT.md).

---

## Posts

| | | | |
|---|---|---|---|
| <a href="posts/01-three-answers/post.md"><img src="posts/01-three-answers/ig-01.png" width="200"></a><br>**01** Three tools. Three answers.<br><sub>Carousel · sales teams</sub> | <a href="posts/02-seven-numbers/post.md"><img src="posts/02-seven-numbers/ig-01.png" width="200"></a><br>**02** 7 numbers none of your tools can show you<br><sub>Carousel · everyone</sub> | <a href="posts/03-monday-pov/post.md"><img src="posts/03-monday-pov/ig-01.png" width="200"></a><br>**03** POV: Monday, 9:07<br><sub>Meme · everyone</sub> | <a href="posts/04-held-not-booked/post.md"><img src="posts/04-held-not-booked/ig-01.png" width="200"></a><br>**04** Booked is a vanity metric<br><sub>Single · agencies</sub> |
| <a href="posts/05-creators-no-total/post.md"><img src="posts/05-creators-no-total/ig-01.png" width="200"></a><br>**05** Three dashboards. No total.<br><sub>Carousel · creators</sub> | <a href="posts/06-ecom-credit/post.md"><img src="posts/06-ecom-credit/ig-01.png" width="200"></a><br>**06** Every tool takes credit<br><sub>Single · e-commerce</sub> | <a href="posts/07-speed-to-lead/post.md"><img src="posts/07-speed-to-lead/ig-01.png" width="200"></a><br>**07** Your speed to lead is probably wrong<br><sub>Carousel + thread · sales</sub> | <a href="posts/08-receipt/post.md"><img src="posts/08-receipt/ig-01.png" width="200"></a><br>**08** Every number should come with a receipt<br><sub>Single · brand thesis</sub> |
| <a href="posts/09-four-ways/post.md"><img src="posts/09-four-ways/ig-01.png" width="200"></a><br>**09** Four ways to get your show rate<br><sub>Single · conversion</sub> | <a href="posts/10-build-receipt/post.md"><img src="posts/10-build-receipt/ig-01.png" width="200"></a><br>**10** I built it in ten weeks. The receipt.<br><sub>Founder · approve first</sub> | <a href="posts/11-sources-wall/post.md"><img src="posts/11-sources-wall/ig-01.png" width="200"></a><br>**11** 33 tools, read directly<br><sub>Pinned</sub> | <a href="posts/12-ask-your-ai-HOLD/post.md"><img src="posts/12-ask-your-ai-HOLD/ig-01.png" width="200"></a><br>**12** Your AI can only see what you paste<br><sub>⚠️ Hold until AI is live</sub> |

Each post folder contains:
- `ig-XX.png` at 1080×1350
- `x-01.png` at 1600×900
- `post.md` with the Instagram caption, the X post plus first reply or thread, alt text and a claims check
- `post.html`, the source

---

## Videos

| | | |
|---|---|---|
| <a href="videos/01-three-answers/three-answers-9x16.mp4"><img src="videos/01-three-answers/poster.jpg" width="200"></a><br>**01** Three tools. Three answers. · 17s | <a href="videos/02-three-steps/three-steps-9x16.mp4"><img src="videos/02-three-steps/poster.jpg" width="200"></a><br>**02** Show-up rate, in three steps · 19s | <a href="videos/03-monday-907/monday-907-9x16.mp4"><img src="videos/03-monday-907/poster.jpg" width="200"></a><br>**03** Monday, 9:07 am · 16s |
| <a href="videos/04-receipts/receipts-9x16.mp4"><img src="videos/04-receipts/poster.jpg" width="200"></a><br>**04** Every number shows its working · 16s | <a href="videos/05-ask-your-ai/ask-your-ai-9x16.mp4"><img src="videos/05-ask-your-ai/poster.jpg" width="200"></a><br>**05** Ask your AI · 17s · ⚠️ hold | <a href="videos/06-logo-sting/logo-sting-1x1.mp4"><img src="videos/06-logo-sting/poster.jpg" width="200"></a><br>**06** Logo sting · 6s |

All six are rendered frame by frame at 60fps (1080×1920; the sting is 1080×1080) and are silent by design. Add a trending instrumental in-app. Captions are in [videos/README](videos/README.md).

---

## Before you post

1. Read the **claims rules** in [STRATEGY.md §11](STRATEGY.md#11-claims-rules-read-before-posting-anything):
   - no invented proof
   - label demo data
   - nothing about the AI connection or ad platforms until they're live
2. Set up the **comment-keyword DMs** (SHOWUP, METRICS, SPEED, LAUNCH, FIRST10), with ManyChat or by hand.
3. Use the recommended logo as the **profile picture** on X and Instagram, and pin post 08 (X) and post 11 (Instagram).
4. Follow the **30-day calendar** in [STRATEGY.md §9](STRATEGY.md#9-the-first-30-days), plus 30–50 replies a day in the niche.

---

## Edit and re-render

You need Node 20+ and Python 3.

```bash
npm install                                   # Playwright, fonts, opentype.js
pip install imageio-ffmpeg                    # a static ffmpeg (or set $FFMPEG)
npx playwright install chromium               # skip if you set $CHROMIUM_PATH

node tools/render-stills.mjs posts/01-three-answers/post.html posts/01-three-answers
node tools/render-video.mjs videos/02-three-steps/video.html videos/02-three-steps/three-steps-9x16.mp4 --ss 1
node tools/build-logos.mjs && node tools/render-stills.mjs brand/logos/board.html brand/logos/boards
```

| Folder | Contents |
|---|---|
| `lib/brand.css` | Tokens: colour, type, the three surfaces (paper, sky, ink) and shared components |
| `lib/post.css` | The post frame and post pieces |
| `lib/motion.js` | The deterministic 60fps motion engine: bezier and spring easing, seekable timelines, a live player (R, F, Space) |
| `assets/` | Vendored OFL fonts and connector marks (nominative use) |
| `tools/` | Render stills, render video, sample frames, build logos |

Open any `video.html` in a browser to watch it live. Every number shown in posts and videos is **example data**.
