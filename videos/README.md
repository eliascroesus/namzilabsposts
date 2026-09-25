# Videos

Smooth product-style motion videos, built in HTML and rendered **frame by frame at 60fps** to H.264 MP4. Every frame is computed rather than screen-recorded, so nothing stutters. They're silent by design: most social video is watched muted. On Reels and TikTok, add a trending instrumental in the app, because licensed audio can't be baked in.

| # | Video | Length | For | File |
|---|---|---|---|---|
| 01 | **Three tools. Three answers.** Calendly, Close and a sheet disagree; Namzilabs matches them into one number with a receipt. | 17s | Coaching / sales teams | [`01-three-answers/three-answers-9x16.mp4`](01-three-answers/three-answers-9x16.mp4) |
| 02 | **Show-up rate, in three steps.** A cursor builds Get data → Match → Calculate, tests each step, publishes, and the tile lands on the board. | 19s | Everyone (demo) | [`02-three-steps/three-steps-9x16.mp4`](02-three-steps/three-steps-9x16.mp4) |
| 03 | **Monday, 9:07 am.** A question, 14 tabs, the clock racing to 11:48, then one tab with the answer. | 16s | Everyone (relatable) | [`03-monday-907/monday-907-9x16.mp4`](03-monday-907/monday-907-9x16.mp4) |
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

Written to stop the scroll in the first line, say what Namzilabs does in one more, and ask for one thing. The voice and every bio are in [`../brand/COPY.md`](../brand/COPY.md).

**01 · Three answers**
- **Reels / TikTok:**
  > Calendly says 41. Close says 38. The sheet says 44. 👀
  >
  > Which one are you paying your setter on?
  >
  > None of them is wrong. Each tool only sees its own slice. Namzilabs matches the same person across all three and counts every meeting once, with the working shown.
  >
  > Comment SHOWUP and I'll send you the setup.
  >
  > (Example data.)
  >
  > #showrate #highticketsales #salesteam #appointmentsetting
- **X:**
  > calendly: 41. close: 38. the sheet: 44.
  >
  > same week. same team. three answers.

  Put the link in the first reply.

**02 · Three steps**
- **Reels / TikTok:**
  > Your show rate, built from 2 tools that have never met. 🛠️
  >
  > Step 1: pull bookings from Calendly and outcomes from your sheet.
  > Step 2: match every lead by email, so each person counts once.
  > Step 3: divide. Done. It stays live.
  >
  > No SQL. No VLOOKUP.
  >
  > Comment SHOWUP and I'll send you the setup.
  >
  > #salesops #highticketsales #nocode #showrate
- **X:**
  > watch me build show rate from two tools that have never met.
  >
  > 3 steps. no code. it stays live.

**03 · Monday 9:07**
- **Reels / TikTok:**
  > POV: it's 9:07 on a Monday and someone asks for last week's show-up rate. 🫠
  >
  > 14 tabs open. The clock hits 11:48. Still no number.
  >
  > Or: one tab, with the answer already in it.
  >
  > Tag the person who does this every Monday.
  >
  > #founderlife #mondaymood #salesops #spreadsheets
- **X:**
  > pov: someone asks for last week's show-up rate at 9:07
  >
  > (you find it at 11:48)

**04 · Receipts**
- **Reels / TikTok:**
  > Nice number. Where's it from? 🧾
  >
  > Every number in Namzilabs prints its receipt: what it read, what it matched, and what it left out (refunds and test payments included).
  >
  > A number without a receipt is an opinion.
  >
  > Free to start, no card. Link in bio.
  >
  > #founders #businessmetrics #kpis #saas
- **X:**
  > a number without a receipt is an opinion.

**05 · Ask your AI**: the launch-day caption is in [`../posts/12-ask-your-ai-HOLD/post.md`](../posts/12-ask-your-ai-HOLD/post.md).

**06 · Logo sting**: use it as the first 2 seconds of longer videos, or post it alone on day 1 with "Namzilabs. All your data, one place."

**11 · All your data. One place. (the pinned explainer)**

Pin it everywhere: 9:16 on Instagram, TikTok, Facebook Reels and YouTube Shorts; 16:9 on X, LinkedIn, YouTube (as the channel trailer) and the website. Post the "coming soon" cuts now. When the AI connection is live, swap in the `-ai-live` cuts.

- **Instagram / TikTok / Facebook Reels:**
  > Your business runs on 12 tools.
  > Each one sees a slice. None of them sees the customer. 📍
  >
  > Namzilabs puts all of it in one place:
  > → connects 33 tools, no code, never edits your data
  > → matches the same person across every tool
  > → lets you build any metric you want
  > → shows exactly where your funnel breaks
  >
  > True numbers, not blurry ones.
  >
  > Free to start, no card. Link in bio.
  >
  > #founders #salesteam #businessmetrics #funnel #saas
- **X (pin it):**
  > all your data. one place.
  >
  > 12 tools, 12 slices, 12 different numbers
  > → one place, every customer matched once, any metric, and the exact step where your funnel breaks.
  >
  > (first reply: namzilabs.co, free to start)
- **LinkedIn (featured, and pinned to the company page):**
  > Your funnel doesn't break in one tool. It breaks between them.
  >
  > Leads in a form tool. Calls in a calendar. Outcomes in a CRM. Money in Stripe.
  >
  > Every dashboard shows its own slice, so nobody sees where people actually drop off.
  >
  > Namzilabs puts all of it in one place. Connect your tools, match the same person across them, build any metric, and see exactly where the funnel breaks.
  >
  > 46 seconds on how it works 👇
  >
  > Free to start, no card: namzilabs.co
- **YouTube (channel trailer, 16:9):** title *Namzilabs in 46 seconds: all your data in one place*; description = the LinkedIn text.
- **Alternate hook** for X and LinkedIn: "Zapier connects your apps. Namzilabs connects your numbers." Using Zapier's name for comparison is fine; never use their logo.

**12 · See where your funnel breaks (a 13-second cut of 11)**
- **Reels / TikTok / Shorts:**
  > Your funnel doesn't break in one tool. It breaks between them. 🔍
  >
  > Form in Typeform. Call booked in Calendly. Call held in Fathom. Deal in Close. Money in Stripe.
  >
  > Namzilabs lines up every step for every person, so you see exactly where they drop off. In this example, 36% of booked calls never happen.
  >
  > Comment LEAK and I'll send you the setup.
  >
  > (Example data.)
  >
  > #funnel #highticketsales #salesteam #founders
- **X:**
  > your funnel doesn't break in one tool.
  >
  > it breaks between them.
  >
  > (first reply: namzilabs.co, free to start)
- **YouTube Shorts title:**
  > Where does your funnel actually break?

**13 · True numbers, not blurry ones (a 26-second cut of 11)**
- **Reels / TikTok / Shorts:**
  > 12 tools. 12 different numbers. Which one is true? 🤔
  >
  > None of them, on its own. Each tool only sees a slice.
  >
  > Namzilabs puts all your data in one place and matches the same person across every tool, so everyone counts once and the real number comes into focus.
  >
  > True numbers, not blurry ones. Free to start, no card. Link in bio.
  >
  > #founders #businessmetrics #saas #startup
- **X:**
  > 12 tools. 12 slices. 12 different numbers.
  >
  > one place, every customer matched once: one true number.
  >
  > (first reply: namzilabs.co, free to start)
- **YouTube Shorts title:**
  > Why your numbers never match

**07 · Meet Namzi**
- **Reels / TikTok:**
  > Meet Namzi. 👋
  >
  > It lives in the space between your tools. It counts everyone once. It never leaves home without a receipt.
  >
  > Namzilabs reads 33 of your tools, matches the same person across all of them and shows the working behind every number.
  >
  > Free to start, no card. Link in bio.
  >
  > #saas #startup #founders
- **X:**
  > meet namzi. 👋
  >
  > lives between your tools. counts everyone once. brings receipts.

**08 · Group chat**
- **Reels / TikTok:**
  > If your tools had a group chat 📱
  >
  > Shopify celebrates. Klaviyo takes the credit. GA disagrees. Then Namzi walks in with the receipt.
  >
  > Namzilabs matches Shopify orders to Klaviyo profiles by email, leaves refunds out and shows the working.
  >
  > Send this to your email person. 👀
  >
  > #shopify #klaviyo #ecommerce #dtc
- **X:**
  > if your tools had a group chat 📱

**09 · EOD report**
- **Reels / TikTok:**
  > The EOD report vs the receipts. 🧾
  >
  > "Dials: 120." Aircall: 87.
  > "Conversations: 34." Aircall: 21 over two minutes.
  > "Booked: 11." Calendly: 5 new, plus 2 reschedules counted once.
  > "Energy: 🔥🔥🔥." No receipt for that one.
  >
  > Nobody's lying. EOD reports are written from memory. Namzilabs reads Aircall and Calendly directly.
  >
  > Comment SHOWUP and I'll send you the setup.
  >
  > (Example data.)
  >
  > #salesteam #setter #highticketsales #appointmentsetting
- **X:**
  > the EOD report vs the receipts.
  >
  > energy is not a column. yet.

**10 · Launch receipt**
- **Reels / TikTok:**
  > The launch screenshot: $20,140 🚀
  > The launch receipt: $17,780 🧾
  >
  > Refunds out. The same payment counted in two tools, out. Test purchases, out.
  >
  > Still a great launch. Now it's a true one.
  >
  > Comment LAUNCH and I'll send you the setup.
  >
  > (Example data.)
  >
  > #courselaunch #creatoreconomy #digitalproducts
- **X:**
  > the launch screenshot: $20,140 🚀
  > the launch receipt: $17,780 🧾
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
