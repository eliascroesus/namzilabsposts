# Namzilabs content

Research, positioning, logos, banners, a mascot, posts and motion videos for [Namzilabs](https://namzilabs.co): *all your data in one place. Any metric, the whole funnel, the true numbers.*

Everything here is made from code: HTML designs rendered to exact-size PNGs and 60fps MP4s. Edit a word, re-render, and it's still on-brand.

| Start here | What it is |
|---|---|
| [**preview.html**](preview.html) | The preview and download page: every post, video, logo, banner and sticker, with copy-caption buttons and ZIP downloads (see [below](#the-preview-page)) |
| **Pin these** 📌 | [Video 11, the explainer](videos/11-all-your-data/) (9:16 and 16:9) and [post 35, the how-it-works carousel](posts/35-how-it-works/post.md) (with a LinkedIn PDF). Banners for every platform are in [brand/banners/](brand/banners/) |
| [**STRATEGY.md**](STRATEGY.md) | The plan: positioning, who we talk to (in order), pillars, cadence, hooks, CTAs, the first 90 days, what to pin, and the claims rules |
| [**research/**](research/) | Four deep-research reports (about 45,000 words, 400+ sources): Framer & Base44, Attio & Mochi & premium SaaS, growth playbooks, and customers & competitors |
| [**brand/**](brand/) | The primary mark (01 Between, mono), ten more logo concepts, [banners for every platform](brand/banners/), [Namzi the mascot](brand/mascot/) and the [brand kit](brand/BRAND_KIT.md) |
| [**posts/**](posts/) | 35 ready-to-post pieces for Instagram, X and LinkedIn. Each has its images, captions, X copy, alt text and a claims check |
| [**videos/**](videos/) | 11 smooth motion videos at 60fps (the explainer in four cuts), with captions ([videos/README](videos/README.md)) |

---

## Logos

<img src="brand/logos/boards/01-between-mono.png" width="100%" alt="The primary mark: 01 Between, mono, with no blue lens.">

**Primary: 01 · Between, mono.** Two tools and the overlap between them, in one colour, with no blue lens. It works on blue, ink, sky or paper and stays clear at 24px. Profile pictures in four colourways, plus the eclipse alternate, are in [`brand/logos/01-between-mono/`](brand/logos/01-between-mono/).

<img src="brand/logos/boards/00-overview.png" width="100%" alt="Five logo concepts. Recommended: Between.">

<img src="brand/logos/boards/00-overview-2.png" width="100%" alt="Five more concepts: Namzi, Hash, Wire, Pillars and Tittle.">

**06 · Namzi** is the social twin: the same lens with a face, for avatars and stickers. Every concept has SVGs (colour, white, ink, app icons, lockups) and a 1024px profile picture. See the [boards](brand/logos/boards/) and the [brand kit](brand/BRAND_KIT.md).

---

## Banners

<img src="brand/banners/mockups/x-electric.png" width="49%" alt="The Electric banner on an X profile"> <img src="brand/banners/mockups/x-funnel.png" width="49%" alt="The Funnel banner on an X profile">

Five designs (Electric, Funnel, Sources, Namzi, Minimal), each at every size:
- X
- LinkedIn company and profile
- Facebook page and group
- YouTube
- the link-preview card
- an email signature

There are also Instagram highlight covers. Sizes, safe areas, which kit to use where, and bio copy for every platform are in [brand/banners/README.md](brand/banners/README.md).

---

## Namzi, the mascot

<img src="brand/mascot/boards/01-character.png" width="100%" alt="Meet Namzi: the blue lens from the logo, with a face.">

Namzi is the blue lens from the logo: the overlap where two tools see the same person, given eyes, noodle arms and a stack of receipts. It counts everyone once, carries receipts, is deadpan but never mean, and is allergic to vanity metrics.

- **Drawn in code:** [`lib/mascot.js`](lib/mascot.js) takes `NZ.mascot({ mood, pose, prop, fx })`. It has 11 moods, 12 poses and 5 props, and videos redraw it every frame.
- **Stickers:** 18 die-cut stickers (PNG + SVG) and 3 avatars in [`brand/mascot/`](brand/mascot/), ready for Instagram Stories, replies and GIPHY.
- **Rules:** social only (never in the product or on the landing page), in at most 1 post in 4, and it reacts while the numbers do the talking.

<img src="brand/mascot/boards/02-expressions.png" width="100%" alt="Namzi's moods, poses and props.">

---

## Posts

| | | | |
|---|---|---|---|
| <a href="posts/01-three-answers/post.md"><img src="posts/01-three-answers/ig-01.png" width="200"></a><br>**01** Three tools. Three answers.<br><sub>Carousel · sales teams</sub> | <a href="posts/02-seven-numbers/post.md"><img src="posts/02-seven-numbers/ig-01.png" width="200"></a><br>**02** 7 numbers none of your tools can show you<br><sub>Carousel · everyone</sub> | <a href="posts/03-monday-pov/post.md"><img src="posts/03-monday-pov/ig-01.png" width="200"></a><br>**03** POV: Monday, 9:07<br><sub>Meme · everyone</sub> | <a href="posts/04-held-not-booked/post.md"><img src="posts/04-held-not-booked/ig-01.png" width="200"></a><br>**04** Booked is a vanity metric<br><sub>Single · agencies</sub> |
| <a href="posts/05-creators-no-total/post.md"><img src="posts/05-creators-no-total/ig-01.png" width="200"></a><br>**05** Three dashboards. No total.<br><sub>Carousel · creators</sub> | <a href="posts/06-ecom-credit/post.md"><img src="posts/06-ecom-credit/ig-01.png" width="200"></a><br>**06** Every tool takes credit<br><sub>Single · e-commerce</sub> | <a href="posts/07-speed-to-lead/post.md"><img src="posts/07-speed-to-lead/ig-01.png" width="200"></a><br>**07** Your speed to lead is probably wrong<br><sub>Carousel + thread · sales</sub> | <a href="posts/08-receipt/post.md"><img src="posts/08-receipt/ig-01.png" width="200"></a><br>**08** Every number should come with a receipt<br><sub>Single · brand thesis</sub> |
| <a href="posts/09-four-ways/post.md"><img src="posts/09-four-ways/ig-01.png" width="200"></a><br>**09** Four ways to get your show rate<br><sub>Single · conversion</sub> | <a href="posts/10-build-receipt/post.md"><img src="posts/10-build-receipt/ig-01.png" width="200"></a><br>**10** I built it in ten weeks. The receipt.<br><sub>Founder · approve first</sub> | <a href="posts/11-sources-wall/post.md"><img src="posts/11-sources-wall/ig-01.png" width="200"></a><br>**11** 33 tools, read directly<br><sub>Pinned</sub> | <a href="posts/12-ask-your-ai-HOLD/post.md"><img src="posts/12-ask-your-ai-HOLD/ig-01.png" width="200"></a><br>**12** Your AI can only see what you paste<br><sub>⚠️ Hold until AI is live</sub> |
| <a href="posts/13-meet-namzi/post.md"><img src="posts/13-meet-namzi/ig-01.png" width="200"></a><br>**13** Meet Namzi (and its dating profile)<br><sub>Carousel · everyone · Namzi</sub> | <a href="posts/14-group-chat/post.md"><img src="posts/14-group-chat/ig-01.png" width="200"></a><br>**14** If your tools had a group chat<br><sub>Single · e-commerce · Namzi</sub> | <a href="posts/15-launch-bingo/post.md"><img src="posts/15-launch-bingo/ig-01.png" width="200"></a><br>**15** Launch week bingo<br><sub>Single · creators</sub> | <a href="posts/16-red-flags/post.md"><img src="posts/16-red-flags/ig-01.png" width="200"></a><br>**16** Red flags in a dashboard<br><sub>Single · brand owners · Namzi</sub> |
| <a href="posts/17-where-monday-goes/post.md"><img src="posts/17-where-monday-goes/ig-01.png" width="200"></a><br>**17** Agency owners: where Monday goes<br><sub>Single · agencies</sub> | <a href="posts/18-crm-believes/post.md"><img src="posts/18-crm-believes/ig-01.png" width="200"></a><br>**18** Things your CRM currently believes<br><sub>Single · sales teams</sub> | <a href="posts/19-red-string/post.md"><img src="posts/19-red-string/ig-01.png" width="200"></a><br>**19** Where our revenue number comes from<br><sub>Single · brand owners</sub> | <a href="posts/20-screenshot-vs-receipt/post.md"><img src="posts/20-screenshot-vs-receipt/ig-01.png" width="200"></a><br>**20** The launch screenshot vs the receipt<br><sub>Carousel · creators</sub> |
| <a href="posts/21-how-many-showed/post.md"><img src="posts/21-how-many-showed/ig-01.png" width="200"></a><br>**21** How many showed?<br><sub>Meme · sales teams · Namzi</sub> | <a href="posts/22-dictionary/post.md"><img src="posts/22-dictionary/ig-01.png" width="200"></a><br>**22** The Namzilabs dictionary<br><sub>Carousel · everyone</sub> | <a href="posts/23-eod-report/post.md"><img src="posts/23-eod-report/ig-01.png" width="200"></a><br>**23** The EOD report vs the receipts<br><sub>Single · sales teams</sub> | <a href="posts/24-reply-rate/post.md"><img src="posts/24-reply-rate/ig-01.png" width="200"></a><br>**24** 42 replies. 9 meetings.<br><sub>Carousel · agencies</sub> |
| <a href="posts/25-horror-stories/post.md"><img src="posts/25-horror-stories/ig-01.png" width="200"></a><br>**25** Two-sentence horror stories<br><sub>Carousel · founders</sub> | <a href="posts/26-monday-scorecard/post.md"><img src="posts/26-monday-scorecard/ig-01.png" width="200"></a><br>**26** 5 numbers to check every Monday<br><sub>Single · sales teams</sub> | <a href="posts/27-namzi-never-says/post.md"><img src="posts/27-namzi-never-says/ig-01.png" width="200"></a><br>**27** Things Namzi will never say<br><sub>Single · everyone · Namzi</sub> | <a href="posts/28-tier-list/post.md"><img src="posts/28-tier-list/ig-01.png" width="200"></a><br>**28** Sources of truth, ranked<br><sub>Tier list · everyone</sub> |
| <a href="posts/29-how-many-members/post.md"><img src="posts/29-how-many-members/ig-01.png" width="200"></a><br>**29** How many members do you actually have?<br><sub>Single · creators</sub> | <a href="posts/30-list-vs-buyers/post.md"><img src="posts/30-list-vs-buyers/ig-01.png" width="200"></a><br>**30** 1,269 customers you can't email<br><sub>Single · e-commerce</sub> | <a href="posts/31-cost-per-held/post.md"><img src="posts/31-cost-per-held/ig-01.png" width="200"></a><br>**31** It's not $71 a meeting<br><sub>Single · agencies</sub> | <a href="posts/32-book-sooner/post.md"><img src="posts/32-book-sooner/ig-01.png" width="200"></a><br>**32** The easiest show-rate fix<br><sub>Chart · sales teams</sub> |
| <a href="posts/33-three-hours-later/post.md"><img src="posts/33-three-hours-later/ig-01.png" width="200"></a><br>**33** Three hours later<br><sub>Meme · brand owners</sub> | <a href="posts/34-namzi-first-week/post.md"><img src="posts/34-namzi-first-week/ig-01.png" width="200"></a><br>**34** Namzi's first week on the job<br><sub>Comic · everyone · Namzi</sub> | <a href="posts/35-how-it-works/post.md"><img src="posts/35-how-it-works/ig-01.png" width="200"></a><br>**35** 📌 How Namzilabs works<br><sub>Pinned carousel + LinkedIn PDF</sub> | |

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
| <a href="videos/07-meet-namzi/meet-namzi-9x16.mp4"><img src="videos/07-meet-namzi/poster.jpg" width="200"></a><br>**07** Meet Namzi · 14s | <a href="videos/08-group-chat/group-chat-9x16.mp4"><img src="videos/08-group-chat/poster.jpg" width="200"></a><br>**08** If your tools had a group chat · 16s | <a href="videos/09-eod-report/eod-report-9x16.mp4"><img src="videos/09-eod-report/poster.jpg" width="200"></a><br>**09** The EOD report vs the receipts · 14s |
| <a href="videos/10-launch-receipt/launch-receipt-9x16.mp4"><img src="videos/10-launch-receipt/poster.jpg" width="200"></a><br>**10** The launch screenshot vs the receipt · 16s | <a href="videos/11-all-your-data/all-your-data-9x16.mp4"><img src="videos/11-all-your-data/poster.jpg" width="200"></a><br>**11** 📌 All your data. One place. · 46s<br><sub>The pinned explainer: 9:16 and 16:9, with the AI scene as "coming soon" or live</sub> | |

All eleven are rendered frame by frame at 60fps (1080×1920; the sting is 1080×1080) and are silent by design. Add a trending instrumental in-app. Captions are in [videos/README](videos/README.md).

---

## The preview page

[`preview.html`](preview.html) shows everything in one place:
- Every post, with its slides, captions (with copy buttons), alt text and claims check
- The videos, playable inline
- The logos and Namzi's stickers
- The docs

You can download single files, a whole post, a whole section, or everything as one ZIP.

- **Published copies:** the page is published as two private Artifacts, so each fits in one version:
  - the **Content Kit**: posts and videos. Post images are visually lossless JPGs; videos are web-compressed copies (CRF 23).
  - the **Brand Kit**: logos, banners and Namzi.

  The full-quality PNG and MP4 masters are here in the repo.
- **Locally:** run `npx serve .` (or `python3 -m http.server`) in the repo root and open `/preview.html`. ZIP downloads need a server, not `file://`.
- **After adding content:** rebuild with `node tools/build-preview.mjs`. It reads the captions from each `post.md`, and the sizes and lengths from the files.

---

## Before you post

1. Read the **claims rules** in [STRATEGY.md §11](STRATEGY.md#11-claims-rules-read-before-posting-anything):
   - no invented proof
   - label demo data
   - nothing about the AI connection or ad platforms until they're live
2. Set up the **comment-keyword DMs** (SHOWUP, METRICS, SPEED, LAUNCH, FIRST10), with ManyChat or by hand.
3. Use the recommended logo as the **profile picture** on X and Instagram (`brand/logos/01-between/profile-1024.png`). Pin post 08 on X and post 11 on Instagram.
4. Follow the **calendar** in [STRATEGY.md §9](STRATEGY.md#9-the-first-30-days), plus 30–50 replies a day in the niche.

---

## Edit and re-render

You need Node 20+ and Python 3.

```bash
npm install                                   # Playwright, fonts, opentype.js
pip install imageio-ffmpeg                    # a static ffmpeg (or set $FFMPEG)
npx playwright install chromium               # skip if you set $CHROMIUM_PATH

node tools/render-stills.mjs posts/13-meet-namzi/post.html posts/13-meet-namzi
node tools/render-video.mjs videos/07-meet-namzi/video.html videos/07-meet-namzi/meet-namzi-9x16.mp4 --ss 1
node tools/build-logos.mjs && node tools/render-stills.mjs brand/logos/board.html brand/logos/boards
node tools/render-stills.mjs brand/logos/profiles.html brand/logos --ss 1      # 1024px profile pictures
node tools/render-stills.mjs brand/mascot/sheet.html brand/mascot/boards        # Namzi's character sheet
node tools/export-mascot.mjs                                                   # stickers + avatars
node tools/render-stills.mjs brand/banners/banners.html brand/banners --ss 1    # banners, every platform size
node tools/render-video.mjs videos/11-all-your-data/video.html videos/11-all-your-data/all-your-data-16x9.mp4 --ss 1 --query "fmt=wide"
node tools/render-pdf.mjs posts/35-how-it-works posts/35-how-it-works/linkedin-carousel.pdf   # LinkedIn PDF carousel
node tools/build-preview.mjs                                                   # preview.html
```

| Folder | Contents |
|---|---|
| `lib/brand.css` | Tokens: colour, type, the three surfaces (paper, sky, ink) and shared components |
| `lib/post.css` | The post frame and post pieces |
| `lib/motion.js` | The deterministic 60fps motion engine: bezier and spring easing, seekable timelines, a live player (R, F, Space) |
| `lib/mascot.js` | Namzi, drawn in code: moods, poses, props and effects, as one SVG |
| `assets/` | Vendored OFL fonts and connector marks (nominative use) |
| `tools/` | Render stills, video and PDFs, sample frames, build logos, export the mascot, build the preview page |

Open any `video.html` in a browser to watch it live. Every number shown in posts and videos is **example data**.
