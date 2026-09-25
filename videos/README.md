# Videos

Smooth product-style motion videos, built in HTML and rendered **frame by frame at 60fps** to H.264 MP4. Every frame is computed rather than screen-recorded, so nothing stutters. They're silent by design: most social video is watched muted. On Reels and TikTok, add a trending instrumental in the app, because licensed audio can't be baked in.

| # | Video | Length | For | File |
|---|---|---|---|---|
| 01 | **Three tools. Three answers.** Calendly, Close and a sheet disagree; Namzilabs matches them into one number with a receipt. | 17s | Coaching / sales teams | [`01-three-answers/three-answers-9x16.mp4`](01-three-answers/three-answers-9x16.mp4) |
| 02 | **Show-up rate, in three steps.** A cursor builds Get data → Match → Calculate, tests each step, publishes, and the tile lands on the board. | 19s | Everyone (demo) | [`02-three-steps/three-steps-9x16.mp4`](02-three-steps/three-steps-9x16.mp4) |
| 03 | **Monday, 9:07 am.** A question, 14 tabs, the clock racing to 11:48 — then one tab with the answer. | 16s | Everyone (relatable) | [`03-monday-907/monday-907-9x16.mp4`](03-monday-907/monday-907-9x16.mp4) |
| 04 | **Every number shows its working.** A revenue number prints its own receipt; refunds and test payments get thrown out. | 16s | Everyone (brand) | [`04-receipts/receipts-9x16.mp4`](04-receipts/receipts-9x16.mp4) |
| 05 | **Ask your AI.** ⚠️ HOLD until the AI connection (MCP) is live in production. | 17s | Everyone | [`05-ask-your-ai/ask-your-ai-9x16.mp4`](05-ask-your-ai/ask-your-ai-9x16.mp4) |
| 06 | **Logo sting.** Two rings meet, the space between them glows, and the name slides out. | 6s | Intro / outro | [`06-logo-sting/logo-sting-1x1.mp4`](06-logo-sting/logo-sting-1x1.mp4) |
| 07 | **Meet Namzi.** The logo's rings meet, the space between them lights up, and Namzi steps out of it: it lives between your tools, counts everyone once, and brings receipts. | 14s | Everyone (mascot intro) | [`07-meet-namzi/meet-namzi-9x16.mp4`](07-meet-namzi/meet-namzi-9x16.mp4) |
| 08 | **If your tools had a group chat.** Shopify celebrates, Klaviyo takes credit, GA disagrees, and Namzi peeks in, then answers with a receipt. | 16s | E-commerce | [`08-group-chat/group-chat-9x16.mp4`](08-group-chat/group-chat-9x16.mp4) |
| 09 | **The EOD report vs the receipts.** A setter's end-of-day report, checked line by line against Aircall and Calendly. | 14s | Sales teams | [`09-eod-report/eod-report-9x16.mp4`](09-eod-report/eod-report-9x16.mp4) |
| 10 | **The launch screenshot vs the receipt.** $20,140 with a rocket, then the receipt prints and the total steps down to $17,780. | 16s | Creators | [`10-launch-receipt/launch-receipt-9x16.mp4`](10-launch-receipt/launch-receipt-9x16.mp4) |
| 11 ⭐ | **All your data. One place.** The pinned explainer: 12 tools, 12 slices, blurry numbers; then one place, cross-referenced and sharp, any metric, the funnel leak across tools, and your AI with the whole picture. Four cuts: 9:16 and 16:9, each with the AI scene marked "coming soon" (post now) or live (swap in at launch). | 46s | Everyone · **pin it** | [`11-all-your-data/all-your-data-9x16.mp4`](11-all-your-data/all-your-data-9x16.mp4) · [`16x9`](11-all-your-data/all-your-data-16x9.mp4) · [`9x16 AI live`](11-all-your-data/all-your-data-9x16-ai-live.mp4) · [`16x9 AI live`](11-all-your-data/all-your-data-16x9-ai-live.mp4) |
| 12 | **See where your funnel breaks.** A 13-second cut of 11: five funnel steps across five tools, the leak (booked → held) lights up red, then the end card. | 13s | Sales teams, everyone | [`12-funnel-breaks/funnel-breaks-9x16.mp4`](12-funnel-breaks/funnel-breaks-9x16.mp4) |
| 13 | **True numbers, not blurry ones.** A 26-second cut of 11: 12 tools, 12 slices, a blurry guess; then one place, the same person matched across tools, and the number comes into focus. | 26s | Everyone | [`13-true-numbers/true-numbers-9x16.mp4`](13-true-numbers/true-numbers-9x16.mp4) |

Each folder has `poster.jpg` (a still for thumbnails) and `video.html`. Open the HTML in a browser to watch it live: **R** replays, **F** goes fullscreen, **Space** pauses.

12 and 13 are short cuts of 11 for Reels, TikTok and Shorts. They use 11's `video.html`, re-timed with `?cut=funnel` and `?cut=short`:

```bash
node tools/render-video.mjs videos/11-all-your-data/video.html videos/12-funnel-breaks/funnel-breaks-9x16.mp4 --ss 1 --query cut=funnel
node tools/render-video.mjs videos/11-all-your-data/video.html videos/13-true-numbers/true-numbers-9x16.mp4 --ss 1 --query cut=short
```

## Captions

**01 · Three answers**
- **Reels / TikTok:**
  > Calendly says 41. Close says 38. The sheet says 44. Which one do you pay your setter on? 👀
  >
  > Namzilabs matches the same person across your tools and counts each meeting once, with the working shown. Free to start → link in bio.
  >
  > #showrate #highticketsales #salesteam
- **X:**
  > Three tools. Three answers. One real number.

  Put the link in the first reply.

**02 · Three steps**
- **Reels / TikTok:**
  > Show-up rate from Calendly + Google Sheets in three steps. No SQL, no spreadsheet. Build it once, it stays live.
  >
  > Comment SHOWUP for the flow.
  >
  > #nocode #salesops #kpis
- **X:**
  > Watch me build show-up rate from two tools that have never met. Three steps, no code.

**03 · Monday 9:07**
- **Reels / TikTok:**
  > POV: someone asks for last week's show-up rate at 9:07. Tag the person who does this every Monday.
  >
  > #mondaymotivation #founderlife #spreadsheets
- **X:**
  > POV: someone asks for last week's show-up rate at 9:07

**04 · Receipts**
- **Reels / TikTok:**
  > Nice number. Where's it from? Every number in Namzilabs prints its receipt: what it read, what it matched, and what it left out and why.
  >
  > #businessmetrics #founders #kpis
- **X:**
  > A number without a receipt is an opinion.

**05 · Ask your AI** — launch-day caption is in [`../posts/12-ask-your-ai-HOLD/post.md`](../posts/12-ask-your-ai-HOLD/post.md).

**06 · Logo sting** — use it as the first 2 seconds of longer videos, or post it alone on day 1 with "Namzilabs. All your data, one place."

**11 · All your data. One place. (the pinned explainer)**

Pin it everywhere: 9:16 on Instagram, TikTok, Facebook Reels and YouTube Shorts; 16:9 on X, LinkedIn, YouTube (as the channel trailer) and the website. Post the "coming soon" cuts now. When the AI connection is live, swap in the `-ai-live` cuts.

- **Instagram / TikTok / Facebook Reels:**
  > All your data. One place. 📍
  >
  > Your business runs on a dozen tools, and each one sees a slice. Namzilabs connects them all (33 tools, read-only, no code), cross-references the same person across every one, and lets you build any metric, so you can see exactly where your funnel breaks.
  >
  > True numbers, not blurry ones. Free to start → link in bio.
  >
  > #saas #founders #businessmetrics #datadriven #funnel
- **X (pin it):**
  > all your data. one place.
  >
  > 12 tools, 12 slices, 12 different numbers → one place, cross-referenced, any metric you want, and the exact step where your funnel breaks.
  >
  > (first reply: namzilabs.co · free to start)
- **LinkedIn (featured, and pinned to the company page):**
  > Your funnel doesn't break in one tool. It breaks between them.
  >
  > Leads in a form tool, calls in a calendar, outcomes in a CRM, money in Stripe. Every dashboard shows its own slice, so nobody sees where the drop-off really is.
  >
  > Namzilabs puts all of it in one place: connect your tools, match the same person across them, build any metric, and see exactly where the funnel breaks. 46 seconds on how it works 👇
- **YouTube (channel trailer, 16:9):** title *Namzilabs in 46 seconds: all your data, one place*; description = the LinkedIn text + namzilabs.co.
- **Alternate hook** for X and LinkedIn: "Zapier connects your apps. Namzilabs connects your numbers." Using Zapier's name for comparison is fine; never use their logo.

**12 · See where your funnel breaks (a 13-second cut of 11)**
- **Reels / TikTok / Shorts:**
  > Your funnel doesn't break in one tool. It breaks between them. 🔍
  >
  > Leads in Typeform, calls in Calendly, the call itself in Fathom, the deal in Close, the money in Stripe. Namzilabs lines up every step across your tools, so you see exactly where people drop off. (In this example, 36% of booked calls never happen.)
  >
  > Free to start → link in bio.
  >
  > #funnel #highticketsales #salesteam #founders
- **X:**
  > your funnel doesn't break in one tool. it breaks between them.
  >
  > (first reply: namzilabs.co · free to start)
- **YouTube Shorts title:**
  > Where does your funnel actually break?

**13 · True numbers, not blurry ones (a 26-second cut of 11)**
- **Reels / TikTok / Shorts:**
  > 12 tools. 12 different numbers. Which one's true? 🤔
  >
  > Namzilabs puts all your data in one place (33 tools, read-only, no code) and matches the same person across every tool, so everyone is counted once and the number comes into focus.
  >
  > True numbers, not blurry ones. Free to start → link in bio.
  >
  > #saas #founders #businessmetrics #datadriven
- **X:**
  > 12 tools, 12 slices, 12 different numbers.
  >
  > one place, cross-referenced: one true number.
  >
  > (first reply: namzilabs.co · free to start)
- **YouTube Shorts title:**
  > Why your numbers never match

**07 · Meet Namzi**
- **Reels / TikTok:**
  > Meet Namzi. 👋 It lives between your tools, counts everyone once, and carries receipts everywhere.
  >
  > Namzilabs reads 33 of your tools, matches the same person across them, and shows the working behind every number. Free to start → link in bio.
  >
  > #saas #startup #founders
- **X:**
  > meet Namzi. it lives between your tools, counts everyone once, and brings receipts.

**08 · Group chat**
- **Reels / TikTok:**
  > If your tools had a group chat 📱 Shopify celebrates, Klaviyo takes credit, GA disagrees… and Namzi brings the receipt.
  >
  > Namzilabs matches Shopify orders to Klaviyo profiles by email, leaves refunds out, and shows the working. Send this to your email person. 👀
  >
  > #shopify #klaviyo #ecommerce
- **X:**
  > if your tools had a group chat

**09 · EOD report**
- **Reels / TikTok:**
  > The EOD report vs the receipts. 🧾 Nobody's lying: EOD reports are written from memory. Namzilabs reads Aircall and Calendly directly.
  >
  > Comment METRICS for the setup, and tag a sales manager.
  >
  > #salesteam #setter #highticketsales
- **X:**
  > the EOD report vs the receipts. energy is not a column. yet.

**10 · Launch receipt**
- **Reels / TikTok:**
  > The launch screenshot vs the launch receipt. 🚀🧾 $20,140 before refunds, $17,780 after. Still a great launch, and now it's a true one.
  >
  > Comment LAUNCH and I'll send you the setup.
  >
  > #courselaunch #creatoreconomy #digitalproducts
- **X:**
  > the launch screenshot: $20,140 🚀
  >
  > the launch receipt: $17,780.
  >
  > still a great launch. now it's a true one.

## Re-render

```bash
node tools/render-video.mjs videos/01-three-answers/video.html videos/01-three-answers/three-answers-9x16.mp4 --ss 1
```

- `--ss 2` supersamples for extra-crisp edges, at about 5× the render time.
- `node tools/render-frames.mjs <video.html> <outDir> 2.5 7 11` samples single frames for review.
- All numbers in the videos are example data.
- Namzi (07, 08) is redrawn every frame from [`lib/mascot.js`](../lib/mascot.js), so its expressions, poses and props are all editable in code.
