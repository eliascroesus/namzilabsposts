# Banners and profile kits

Fifteen banner designs, each exported at the exact size every platform asks for, and each with the profile picture made to go with it. Ten are for every day and lead with the core message: **all your data in one place, any metric, where the funnel breaks, the true numbers.** Five are memes, for launch weeks and a playful profile. There are also Instagram highlight covers.

![Electric on an X profile](mockups/x-electric.png)

## Pick a kit

Each kit is a banner and the avatar that goes with it. There's a mock-up of each on an X profile in [`mockups/`](mockups/).

**Everyday**

| Kit | Headline | Profile picture | Use it for |
|---|---|---|---|
| **Electric** ⭐ | Brand blue, the mark big: "All your data. One *place.*" | `../logos/01-between-mono/profile-blue-1024.png` | The main account on every platform |
| **Funnel** | Ink, a cross-tool funnel with the leak: "See where your funnel *breaks.*" | `../logos/01-between-mono/profile-ink-1024.png` | LinkedIn and the founder's profile |
| **Sources** | Paper, 12 tool marks around the logo: "33 tools. One *place.*" | `../logos/01-between-mono/profile-ink-1024.png` | Explaining the product in one look |
| **Namzi** | Sky, the mascot: "True numbers, not *blurry* ones." | `../mascot/avatars/namzi-avatar-sky.png` | Launch weeks and a playful account |
| **Minimal** | Ink, just the lockup and the line | `../logos/variants/midnight-1024.png` | A quiet profile |
| **Formula** | Paper, two formulas across tools: "Build any metric, across any *tool.*" | `../logos/variants/hairline-1024.png` | Founders and ops people who think in metrics |
| **Glass** | A frosted card sharpening a blurry number: "See your business *clearly.*" | `../logos/variants/glass-1024.png` | A softer, premium look |
| **Neon** | Dark, glowing rings: "Stop building *blind.*" | `../logos/variants/neon-1024.png` | Builders, indie hackers, late-night X |
| **Big type** | The words are the picture: "Every tool. One *place.*" | `../logos/variants/bold-1024.png` | Maximum clarity from across a feed |
| **Blueprint** | A technical drawing of two tools and one person: "Built to count everyone *once.*" | `../logos/variants/blueprint-1024.png` | Technical buyers, agencies |

**Memes**

| Kit | Headline | Profile picture | Use it for |
|---|---|---|---|
| **Precious** | Two gold rings glowing in the dark: "One place to rule them *all.*" | `../logos/variants/precious-1024.png` | Launch week, a nerdy crowd |
| **Wedding** | Gold and platinum rings: "Your Stripe and your CRM, finally *married.*" | `../logos/variants/wedding-1024.png` | Announcing a new integration |
| **Galaxy brain** | Four levels, each ring brighter: checking Stripe → 14 tabs → a spreadsheet → all of it, one place | `../logos/variants/cosmic-1024.png` | Meme weeks on X |
| **Starter pack** | 14 tabs, #REF!, "quick question…", a VLOOKUP, three answers, Monday 11:48 am | `../logos/variants/sticker-1024.png` | Relatable, shareable |
| **Expectation vs reality** | A tidy funnel next to a tangle of tools | `../logos/variants/sketch-1024.png` | Sales and ops audiences |

"One place to rule them all" plays on a famous line. It's parody wording only: no film or book names, art, fonts or quotes beyond the common phrase. If you'd rather not borrow it, use the Wedding or Neon kit instead.

## Every size

| File | Size | Where | Safe area |
|---|---|---|---|
| `*/x.png` | 1500×500 | X header | The profile picture covers the bottom-left, so the words sit top-left. |
| `*/linkedin.png` | 1128×191 | LinkedIn company page cover | A thin strip, one line of text. |
| `*/linkedin-profile.png` | 1584×396 | LinkedIn personal profile | The photo sits bottom-left, so the words start at x=560. |
| `*/facebook.png` | 1640×624 | Facebook page cover | Phones crop the sides, so the words start at x=300. |
| `*/facebook-group.png` | 1640×856 | Facebook group cover | Same side crop as the page cover. |
| `*/youtube.png` | 2560×1440 | YouTube channel art | Everything important sits in the middle 1546×423, the only part phones show. |
| `*/og.png` | 1200×630 | Link preview when someone shares namzilabs.co (X, LinkedIn, Facebook, Slack, iMessage) | Set it as the site's `og:image`. |
| `*/email.png` | 1200×300 | Email-signature banner | Display it at 600×150. |
| `highlights/blue/*.png`, `highlights/ink/*.png` | 1080×1920 | Instagram highlight covers: Start here, Metrics, Funnels, 33 tools, Namzi, FAQ | The icon sits inside the centre circle Instagram shows. |

The memes come in the first six sizes only: the link preview and email signature should stay on-brand, so use an everyday design for those.

Instagram, TikTok and Threads don't have banners. On those, the profile picture, the highlight covers and the pinned post (video 11 and post 35) do the job.

## The logo

**01 Between, mono** is the mark: two tools as two rings, overlapping, in one colour, with the space between them left empty. Profile pictures (1024×1024, full-bleed; platforms crop them to a circle) are in `brand/logos/01-between-mono/`:
- `profile-{blue,ink,sky,paper}-1024.png`
- the eclipse alternate: `eclipse-profile-*.png`
- app icons: `app-icon-*.svg`
- lockups: `lockup-ink.svg` and `lockup-white.svg`

The 24 variants (neon, glass, gold, wedding rings, donuts and more) are in `brand/logos/variants/`, each as an SVG and a 1024px PNG. The tables above say which one goes with which banner.

## Bio copy

**X (160 characters)**
> All your data in one place. Connect 33 tools, build any metric, and see exactly where your funnel breaks. True numbers, cross-referenced. Free to start.

**Instagram (150 characters)**
> All your data in one place 📍
> Any metric · the whole funnel
> True numbers, not blurry ones
> Free to start ↓

**LinkedIn tagline**
> All your data in one place. Connect your tools, build any metric, and see exactly where your funnel breaks, with true, cross-referenced numbers.

**Facebook "About"**
> Namzilabs connects the tools your business runs on (33 of them, read-only, no code), matches the same person across all of them, and lets you build any metric, so you can see exactly where your funnel breaks. Free to start at namzilabs.co.

**YouTube channel description**
> All your data in one place. Namzilabs connects your tools, cross-references the same person across them, and lets you build any metric and see exactly where your funnel breaks. Short videos on metrics that actually matter, funnel leaks and building with true numbers. Free to start: namzilabs.co

## Re-render

```bash
node tools/render-stills.mjs brand/banners/banners.html brand/banners --ss 1                  # every banner, every size
node tools/render-stills.mjs brand/banners/banners.html brand/banners --ss 1 --query only=neon  # one design
node tools/render-stills.mjs brand/banners/highlights.html brand/banners --ss 1               # Instagram highlight covers
node tools/render-stills.mjs brand/banners/kits.html brand/banners --ss 1                     # X profile mock-ups
```

Each banner is built from one config in `banners.html`: the platform's size, where its words go, and where its picture goes. Change a line there and re-render.
