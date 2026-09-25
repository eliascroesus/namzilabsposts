# 35 · How Namzilabs works (the pinned carousel)

| | |
|---|---|
| **For** | Everyone. This is the one to pin: it explains the whole product in seven slides. |
| **Job** | The nurture post. Anyone who lands on the profile understands what Namzilabs does in 20 seconds. |
| **Format** | Instagram carousel (7 slides), pinned · X single image, pinned · LinkedIn PDF document · Facebook album |
| **Files** | `ig-01.png` … `ig-07.png` (1080×1350) · `x-01.png` (1600×900) · `linkedin-carousel.pdf` (7 pages) |

Pair it with the pinned video, [`videos/11-all-your-data`](../../videos/11-all-your-data/): pin the video on Instagram, TikTok and Facebook Reels, and this carousel on Instagram as a second pin.

## Instagram caption

> Your business runs on 12 tools.
> None of them sees the whole customer. 📍
>
> Leads in Typeform.
> Calls in Calendly.
> Deals in your CRM.
> Money in Stripe.
>
> So every number you look at is a guess.
>
> Namzilabs puts all of it in one place:
>
> 1️⃣ Connect your tools. 33 of them, no code, and we never edit your data.
> 2️⃣ Every customer is matched across every tool, so each person counts once.
> 3️⃣ Build any metric: show rate, revenue per lead, cost per held meeting.
> 4️⃣ See exactly where your funnel breaks.
> 5️⃣ Coming soon: your AI sees all of it too.
>
> Swipe through all 7 slides. That's the whole product.
>
> Free to start, no card. Link in bio 👆
>
> (Example data.)
>
> #founders #salesteam #businessmetrics #funnel #saas

## X

**Post** (image `x-01.png`), pin it:

> all your data. one place.
>
> connect every tool you use
> → every customer matched across all of them
> → build any metric
> → see exactly where your funnel breaks
>
> true numbers, not blurry ones.

**First reply:**

> 33 tools, no code, and it never edits your data. free to start, no card: namzilabs.co

## LinkedIn (document post)

Upload `linkedin-carousel.pdf` as a document, titled "How Namzilabs works", with:

> Most businesses don't have a data problem.
> They have a scattered data problem.
>
> Leads in one tool. Calls in another. Payments in a third. And a spreadsheet trying to hold it all together.
>
> Every tool shows you a slice, so every number is a guess.
>
> We built Namzilabs to put all of it in one place:
>
> → Connect your tools (33 of them, no code, and we never edit your data)
> → Match the same person across every tool, so each customer counts once
> → Build any metric you need, from show rate to revenue per lead
> → See exactly where your funnel breaks
>
> 7 slides on how it works below 👇
>
> Free to start, no card: namzilabs.co

## Alt text

- **ig-01:** "All your data. One place. Any metric, across every tool you use. The whole funnel. The true numbers." Electric blue, with the Namzilabs mark.
- **ig-02:** Step 1, Connect: "Every tool, in one place." Twelve tool tiles, including Calendly, Stripe, Shopify, Close, Klaviyo, Analytics, Typeform, Aircall, Whop, Sheets and Fathom, each with a live dot, plus 22 more. "Read-only: it never edits your data. No code, no SQL, no spreadsheet."
- **ig-03:** Step 2, Cross-reference: "True numbers, not blurry ones." Three records (dave@example.com, Dave M., +44 7700 900123) become one person. Each tool alone shows a blurred $51,9??; cross-referenced, it's $46,180.
- **ig-04:** Step 3, Calculate: "Build any metric, across any tools." Stripe revenue ÷ Typeform leads = $49.60 revenue per lead. Plus show rate 64%, speed to lead 6 min, revenue from your list $29.4k and cost per held meeting $103.
- **ig-05:** Step 4, Find the leak: "See exactly where your funnel breaks." Leads 1,240 (Typeform), booked 412 (Calendly), held 263 (Fathom), paid 64 (Stripe). Between booked and held: 36% no-show, "fix this first".
- **ig-06:** Step 5, Ask: "Give your AI the whole picture." An AI assistant, marked "coming soon", answers "Where's our funnel breaking?": between booked and held, 149 of 412 calls didn't happen. "Stop building blind."
- **ig-07:** "See your whole business, clearly." 1. Connect your tools. 2. Build the metrics you need. 3. Fix the leak. Start free at namzilabs.co, no card.
- **x-01:** "All your data. One place." Four steps: connect every tool, cross-reference, build any metric, find where the funnel breaks.

## Claims check

- Example data throughout. "33 tools", "read-only / never edits your data" and "no code" are true today.
- **The AI slide says "coming soon".** When the AI connection (MCP) is live in production, remove the badge and re-render: `node tools/render-stills.mjs posts/35-how-it-works/post.html posts/35-how-it-works`, then rebuild the PDF with `node tools/render-pdf.mjs posts/35-how-it-works posts/35-how-it-works/linkedin-carousel.pdf`.
- "Build any metric" means any metric the flow builder can express across connected tools. Don't promise metrics from ad platforms until those connectors are live.
