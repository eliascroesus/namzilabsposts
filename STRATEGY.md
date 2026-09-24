# Namzilabs content strategy

The operating plan for Namzilabs social content. It's built from four research reports (about 45,000 words, 400+ sources) in [`research/`](research/). This page is the short version; each section links to the report behind it.

---

## 1. Positioning, in one line

> **Namzilabs: the numbers between your tools, with the working shown.**

- **Category:** *cross-tool metrics.* Not "a dashboard", which is a crowded word, and not "BI", which scares the buyer. ([research/04 §8](research/04-icp-and-competitor-positioning.md))
- **Promise:** the one number your tools each only see a slice of, built by matching the same person across them.
- **Proof, and the thing nobody else leads with:** every number shows its working — sources read, records matched, what was left out, and why. Trust is this category's core problem, so this is the wedge. ([04](research/04-icp-and-competitor-positioning.md), [02](research/02-attio-mochi-premium-saas.md))
- **Supporting, never leading:** no SQL, no warehouse, AI can read it. Competitors already ship "AI analytics", so it doesn't differentiate. ([04](research/04-icp-and-competitor-positioning.md))

The tone is plain, specific and a little dry. The brand sells **relief backed by proof** ("get your Mondays back"), never hype. ([02 §6](research/02-attio-mochi-premium-saas.md))

---

## 2. Who we talk to, in this order

| # | Who | Their stack (live today) | Hero metric | Their words | Where they are |
|---|---|---|---|---|---|
| **1** | **Coaching & info-product sales teams** (setters, closers, booked calls) | Calendly / Cal.com + Close / Pipedrive / Attio + Stripe / Whop / ThriveCart + Aircall / Fathom | **Show rate** | booked, held, no-show, show rate, setter, closer, EOD report, cash collected, speed to lead | Instagram (where Mochi sells to them), coaching X, YouTube |
| **2** | **Outbound & appointment-setting agencies** | Instantly / Smartlead / lemlist + calendars + Fathom | **Cost per held meeting** | booked vs held, client reporting, reply rate, meetings | X, LinkedIn |
| **3** | **Creators** (courses, communities, newsletters) | Whop / Stripe / Thinkific / ThriveCart + Mailchimp / Klaviyo | **Revenue per subscriber** | launch, cart open, list, "three dashboards and no total" | Instagram, X |
| **4** | **E-commerce brands** — phase 2 | Shopify / WooCommerce + Klaviyo + GA4 | **Revenue from your list**. MER/ROAS only once the ad connectors go live | "numbers don't match", attribution, Klaviyo vs Shopify | DTC X, Instagram |

Why this order: group 1 feels the cross-tool pain hardest and has no good tool for it. Hyros and Cometly trace ad clicks, and GoHighLevel and iClosed only report on themselves. E-commerce is loud but crowded, and its killer metric needs the ad connectors, which are still awaiting approval. ([04 §1, §5](research/04-icp-and-competitor-positioning.md))

**Borrow the coaching vocabulary, never its unverifiable claims.** Say "booked, held, no-show". Never say "3× your close rate". ([02 §4](research/02-attio-mochi-premium-saas.md))

---

## 3. What we say (message hierarchy)

1. **Category:** cross-tool metrics.
2. **Promise:** the real number when your tools disagree.
3. **Proof:** every number shows its working.
4. **Reasons to believe:** 33 tools read directly · matches the same person by email or phone · no SQL · stays live · read-only on your data · free to start, no card.

### Objections, answered honestly (full table in [04 §7](research/04-icp-and-competitor-positioning.md))

| They say | We say | Never say |
|---|---|---|
| "I have Triple Whale / Hyros." | Keep it. They trace ad clicks; we measure what happens after — held, closed, paid — across your other tools. | "Replace X" |
| "My VA does a spreadsheet." | Keep the sheet as a source. Your VA reviews the exceptions instead of retyping. | "Fire your VA" |
| "GHL has reports." | GHL reports on GHL. Send its events by webhook, and we match them with Stripe, Fathom and your calendar. | "Native GHL integration" |
| "Your number doesn't match Calendly." | Right — and it shows you exactly why. | "Our number is the truth" |
| "Is it free?" | Free to start, no card. Invite one person, get a month free. | "Free forever" |

---

## 4. Content pillars

| Pillar | What it is | Share of posts | Examples in this repo |
|---|---|---|---|
| **Receipts** | A number that unfolds into its working. The brand's signature visual. | 25% | Post 08, video 04, post 01 slide 4 |
| **Recipes: "Tool A + Tool B = metric"** | One cross-tool metric: formula, why it matters, example. A series with a post for every useful source pair. | 30% | Post 02, 04, 05, 06, 07 |
| **Relatable pain** | POV, memes, Monday-morning chaos. Made to be sent. | 20% | Post 03, video 03 |
| **Watch me build** | 15–30s product demos: Get data → Match → Calculate → Publish. | 15% | Video 02, video 01 |
| **Build in public** | Founder receipts: numbers first, one honest admission, then what's next. | 10% | Post 10 |

Why these: Framer and Base44 prove the product by using it in the content ([01 §6](research/01-framer-and-base44.md)). Linear and Notion ship a steady rhythm of single-feature clips ([02 §5](research/02-attio-mochi-premium-saas.md)). n8n and Clay turn every integration pair into a template ([03 §2](research/03-growth-content-playbook.md)).

---

## 5. How each platform ranks (what we optimise for)

- **X:** write for **replies, quotes and link copies**, not likes. In X's published weights a like is worth 0.5, a reply or DM share 5, and a copied link 20. Mutes and reports are heavily negative. ([03 §3](research/03-growth-content-playbook.md))
  - **Links go in the first reply**, never in the post.
  - Formulas, checklists and honest hot takes beat announcements.
  - Space posts hours apart; repeated posts from one author are down-weighted.
  - X Premium is worth it: Buffer's study of 18.8M posts found roughly 10× reach, though the data is correlational.
- **Instagram:**
  - **Reels for reach, carousels for saves.**
  - **Sends per reach** decides whether non-followers see you, so every caption carries a "send this to your…" line.
  - The first 3 seconds show up as skip rate.
  - Use 5 hashtags at most, and write the first caption line as a search title; captions are indexed.
  - Upload clean, original files: no watermarks, no reposts.
- **TikTok and Shorts:** cross-post the same vertical videos. Put the keyword in the on-screen text and the caption.

---

## 6. Cadence

| | X (brand + founder) | Instagram | TikTok / Shorts |
|---|---|---|---|
| **Every day** | 30–50 useful replies in the niche Lists; 1–2 posts | 15–20 thoughtful comments on niche creators; stories | — |
| **Each week** | 7–10 posts: 2 recipes, 1 receipt, 1 pain/meme, 1 demo, 1 build-in-public | 3 Reels + 2 carousels | The same 3 Reels |
| **Monthly** | "Month in receipts": our own signups, traced to the posts that sent them — zeros included | A carousel of the month's receipts | — |
| **Every 6–8 weeks** | A **launch week**: one feature a day for 5 days, Supabase-style | Same | Same |

One 60–90-minute recording session a week feeds all of it: 5–7 clips, 2 carousels and 7–10 X posts. ([03 §7.4](research/03-growth-content-playbook.md))

---

## 7. Hooks bank (adapted from the 41 in [research/03 §4](research/03-growth-content-playbook.md))

1. "Calendly says 41. Close says 38. The sheet says 44. Which one do you pay your setter on?"
2. "[Tool A] says [X]. [Tool B] says [Y]. Both are right."
3. "Stop celebrating booked calls. Track held calls."
4. "Unpopular opinion: your closer isn't the problem. Your show rate is."
5. "'Book more calls' is bad advice if 4 in 10 don't show."
6. "Stripe can't tell you revenue per lead. It has never seen your leads."
7. "A number without a receipt is an opinion."
8. "Here's the exact math behind show rate — the version that survives reschedules."
9. "5 ways show rate gets miscounted (#3 is reschedules)."
10. "3 numbers every sales manager should see every Monday."
11. "Send this to your setter before tomorrow's calls."
12. "If you run an offer with setters and closers, you've seen this: their sheets never match."
13. "Creators: three dashboards and no total."
14. "Every tool takes credit."
15. "POV: someone asks for last week's show-up rate at 9:07."
16. "Before: 6 tabs, 2 exports, 1 VLOOKUP. After: one number, with receipts."
17. "Watch me build show rate from Calendly + Close. No code."
18. "This number shows its working: 412 records read, 260 matched, 18 excluded."
19. "Day [N] of building Namzilabs in public: [receipt]."
20. "I'm a solo founder. This week I shipped [X] and broke [Y]."

---

## 8. Turning views into signups

- **CTA:** "Start free at namzilabs.co — no card." Always "free, no card"; never "free forever".
- **Comment keywords → DM:** SHOWUP, METRICS, SPEED, LAUNCH, FIRST10. Set up ManyChat, or answer by hand while volume is low. Each DM delivers the exact 3-step flow for that metric plus the link.
- **Send prompts:** "Send this to your setter / the agency owner who still reports booked calls / the person who does this every Monday."
- **Links:** first reply on X; link in bio on Instagram. Tag every link with UTMs, e.g. `?utm_source=x&utm_campaign=post-01`.
- **After signup:** "Invite one person → get a month free" (the product's referral loop).
- **Design partners:** the founder's "first 10 teams" post (post 10). Every design partner who agrees becomes a real receipt. Their numbers are shared only with written permission.

---

## 9. The first 30 days

| Day | X | Instagram | Video |
|---|---|---|---|
| 1 | Post 08 (receipt), pinned | Post 11 (33 tools), pinned | Logo sting as the profile intro |
| 2 | Post 10 (founder receipt), from the founder account | Post 01 carousel | — |
| 3 | Post 01 + thread | — | Video 01 (three answers) |
| 5 | Post 04 (booked is vanity) | Post 03 (POV) | — |
| 7 | Post 07 thread (speed to lead) | — | Video 03 (Monday 9:07) |
| 9 | Post 03 (POV) | Post 02 carousel (7 numbers) | — |
| 11 | Post 02 thread | — | Video 02 (three steps) |
| 13 | Post 09 (four ways) | Post 07 carousel | — |
| 15 | Build in public: week 2 receipt | Post 09 | Video 04 (receipts) |
| 17 | Post 05 (creators) | Post 05 carousel | — |
| 19 | Post 06 (e-commerce) | Post 06 | — |
| 21 | Recipe #8 (new) | Post 04 | Recut: video 01, new hook |
| 23 | Build in public: first design partners | Post 08 | — |
| 25 | Recipe #9 (new) | Carousel: "5 ways show rate gets miscounted" (new) | Recut: video 02 |
| 28 | "Month in receipts" | "Month in receipts" | — |
| When live | **Post 12 + video 05** (AI connection launch) | Same | Same |

Every day, alongside the calendar: 30–50 replies on X and 15–20 comments on Instagram in the niche Lists. That's where the first 1,000 followers come from. ([03 §7](research/03-growth-content-playbook.md))

---

## 10. Measure it with the product (dogfooding)

- UTM-tagged links go through GA4 and the custom webhook into a Namzilabs workspace.
- Publish our own funnel as a receipt every month: views → profile visits → site → signups. Show the zeros; that's the brand.
- Track per post: sends/shares, saves, replies, profile visits and signups, not likes.

---

## 11. Claims rules (read before posting anything)

1. **No invented proof.** No testimonials, logos or "trusted by" until they're real and permitted. No fake follower or customer counts.
2. **Label demo data.** Every example number carries "Example data" on the image or in the caption.
3. **Don't announce what isn't live.**
   - The AI connection (MCP): post 12 and video 05 wait until it's switched on in production.
   - Meta, TikTok and Google Ads: "coming soon" only. No ROAS, MER or ad-spend claims until they're approved and live.
4. **"Read-only" wording:** say "never edits your data". Don't say "can't change anything in your tools". Some connectors register a webhook in your account so updates arrive instantly.
5. **"33 tools":** these are the live, connectable sources. 36 exist in code, but 3 await platform approval.
6. **Never show a real customer's numbers** without written permission. Use example workspaces.
7. **Free:** "free to start, no card" is true today; there are no paid plans. Update everything when pricing launches.

---

## 12. Backlog: what to make next

- **The Recipes series.** One post and one 20-second video per useful source pair. A few to start:
  - Calendly × Close (show rate)
  - Typeform × Aircall (speed to lead)
  - Instantly × Calendly (reply-to-meeting)
  - Stripe × Close (revenue per lead)
  - Whop × Mailchimp (revenue per subscriber)
  - Shopify × Klaviyo (revenue from your list)
  - Fathom × Calendly (held vs booked)
  - Tally × Stripe (quiz-to-purchase)
  - Help Scout × Stripe (support load per customer)
  - Retell AI × Calendly (AI calls to booked meetings)
- **"The Namzilabs Method":** firm, published definitions of the five core metrics, in the spirit of the Linear Method ([02 §7](research/02-attio-mochi-premium-saas.md)). Every recipe links to it.
- **Launch week #1** in weeks 6–8: sources, the receipt panel, sharing a metric, the AI connection (if live), and design-partner stories.
- **Creators and clippers,** later: pay per 1,000 views only once the product converts. Give them strict claim rules and source footage. ([03 §2](research/03-growth-content-playbook.md))
