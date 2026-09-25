# Growth content playbook: how fast-growing startups used content, and what converts on X and Instagram now

*Research file 03 for the Namzilabs content engine. Compiled September 2026. Scope: 2024 to 2026.*

> **How to read this document**
> - Every figure, quote and date has a numbered source `[n]`. The list is in section 9.
> - Anything marked **Inference** is our own reading or recommendation and was not reported by a source.
> - Sources are tagged *primary*: company posts, official announcements, source code. Others are *secondary*: third-party analyses and summaries. Secondary figures are directionally useful. Treat them with more caution.
> - **Method:**
>   - About 45 targeted web searches.
>   - Direct reads of primary sources hosted on GitHub: X's open-sourced ranking code [53][54][55], Twitter's 2023 ranking README [59], Supabase's "How we launch" post [39] and n8n's README [41].
>   - Most other sites blocked direct page fetches. Many figures therefore come from search-engine extracts of the cited page.
> - **Before republishing any figure or quote, open the source and check it.**
> - Engagement-rate definitions differ between studies: per follower, per reach or per impression. Do not compare numbers across sources.
> - Namzilabs examples that contain numbers are **illustrative demo data**. They are not results, and must be labelled as demo data if posted.

## Contents

1. [Executive summary](#1-executive-summary)
2. [Startup content engines](#2-startup-content-engines)
3. [Platform mechanics: X, Instagram, TikTok/Shorts](#3-platform-mechanics-x-instagram-tiktokshorts)
4. [Hook library (41 hooks)](#4-hook-library-41-hooks)
5. [Format templates](#5-format-templates)
6. [CTA and conversion mechanics](#6-cta-and-conversion-mechanics)
7. [Zero-follower distribution plan (30 days)](#7-zero-follower-distribution-plan-30-days)
8. [Lessons for Namzilabs](#8-lessons-for-namzilabs)
9. [Sources](#9-sources)

---

## 1. Executive summary

1. **The fastest growers made the product the content.**
   - Bolt launched with a single tweet and a demo in which a typed prompt became a working website within seconds [9][10].
   - Lovable, Gamma and Granola spread through things users made and shared: apps, decks and meeting notes [2][13][16].
   - **Inference:** Namzilabs' natural shareable object is a metric that "shows its working" (records read, matched and excluded). It is proof and demo in one screenshot.
2. **Founder-led, high-frequency "we shipped this" posting beat campaigns.**
   - Lovable's head of growth calls building in public its top growth strategy: the CEO posts updates constantly and engineers announce what they ship [3][4].
   - Beehiiv's CEO turns each newsletter into several X and LinkedIn posts. He started with roughly 3,000 followers [48].
3. **Creators and communities multiply a message that already works. They don't replace it.**
   - Gamma's CEO made content himself first and onboarded creators personally. About 10% of creators drove 90% of conversions [13][15].
   - n8n and Clay grew creator and template ecosystems that compound [41][42][21][23].
   - Triple Whale rode "DTC Twitter" [50][51].
4. **"Clipping" is now a paid distribution channel you can buy by the view.**
   - Whop's Content Rewards pays anyone per 1,000 verified views of clips [28][29]. A third-party guide puts typical rates at $0.20 to $6 per 1,000 views, averaging about $1 [30].
   - Whop's CEO posted that Whop was "spending 90K / month on content rewards" [31].
   - **Inference:** it is cheap to test, but it only works once there is source footage worth clipping and strict brand rules.
5. **X's ranking code (open-sourced January 2026) weights conversation and sharing far above likes.**
   - In the current published parameters, a like is 0.5. A reply, a quote and a share-by-DM are each 5, following the author is 4, and a copy-link share is 20.
   - Replies between mutual follows get an extra +15.
   - Negative actions are heavy: "not interested" −43.2, mute −58.8, block −31.2, report −234 [53][54][55].
   - The weights multiply *predicted probabilities*, so read them as priorities, not points.
6. **On X, Premium is close to a requirement for reach.**
   - Buffer's analysis of 18.8M posts found Premium accounts get about 10× the reach of free accounts.
   - Median engagement for free accounts fell to 0% in 2025, and link posts from free accounts had a 0% median since March 2025 [66][67].
   - **Inference:** the data is observational, but the gap is too large to ignore.
7. **Instagram: Reels for reach, carousels for depth, sends for discovery.**
   - Mosseri named watch time, likes per reach and sends per reach as the top signals. Sends matter more for reaching non-followers [77][78].
   - Buffer's 2026 data shows Reels reaching the most people and carousels earning the most engagement [70][71].
   - Reels insights now show *skip rate*: the share of viewers who leave in the first 3 seconds [79][80].
8. **Instagram now penalizes volume hacks and rewards searchable, original posts.**
   - Hashtags are capped at five [85][86].
   - Accounts that repost others' content 10+ times in 30 days lose recommendations [88].
   - Public professional-account posts are indexed by Google [87].
9. **No public data shows what converts; measure it yourself and publish the receipts.**
   - This research found no reliable 2025 to 2026 public data on view-to-signup conversion for B2B SaaS on X or Instagram.
   - **Inference:** instrument the funnel yourself (UTMs → GA4 → signups → Stripe). Build the funnel dashboard *in Namzilabs*, and post the weekly numbers as "receipts" content.
10. **With zero followers, replies are the engine for the first 30 days.** **Inference**, grounded in [53][54][55][88]:
    - Reply daily to operators in e-com, coaching/info and the creator economy, and turn repliers into mutual follows.
    - Post 1 to 2 originals a day, spaced hours apart, because of author-diversity decay [53].
    - Publish daily vertical video, exported clean and cut natively for each platform.

---

## 2. Startup content engines

### 2.0 Pattern overview

| Company | Growth reference points | Main content engine | Tactics |
|---|---|---|---|
| Lovable | $10M ARR in 60 days [1]; ~$100M ARR in ~8 months [2][5] | Founder and team building in public; community | Build in public, generous free usage, community |
| Cursor | Past $500M ARR by June 2025 [6] | Developer word of mouth [7][8] | Product-led; no formal content engine found |
| Bolt | ~$0.7M → $40M ARR in ~5 months [9][11] | One launch tweet plus demo; user build stories | Demo-first launch, community showcases |
| Replit | ~$10M → $100M ARR in ~6 months (2025) [12] | Little sourced detail found |  |
| Gamma | $100M ARR, ~50M users, ~50 staff [13][14] | Founder as creator, then a creator program | UGC creators, agencies, word of mouth |
| Granola | ~10%/week user growth (May 2025) [17] | Shared notes; "Crunched" year-in-review | Viral artifact, niche beta, seasonal moment |
| Clay | $1M → $100M ARR in two years [19] | Category creation, creators and agencies, templates, Clay Clubs | Templates, community events, education |
| Cal.com | Launch "broke" Product Hunt, HN, Reddit [25][26] | Open source, launch moments, monthly updates | Launches, "alternative to X" positioning |
| Whop | Annualized revenue $56M → $142M (end-2024 → Oct 2025) [33] | Clipping marketplace plus founder posts | Pay-per-view clipping, UGC |
| Supabase | 47% MoM database growth over 18 months [39] | Launch Weeks written by the engineers who built each feature | Launch weeks, re-launching |
| n8n | ~$40M ARR mid-2025 [43] → reported $100M ARR Apr 2026 [42] | Community creators plus 9,000+ templates [41] | Templates, creator flywheel |
| OpusClip | 5M users in 7 months [45]; 12M+ creators and brands in 2 years [44] | Outputs are content; SEO explainers on adjacent trends | Trend-jacking, creator-native product |
| Beehiiv |  | CEO newsletter repurposed to X and LinkedIn; lead magnets | Founder-led, referral |
| Triple Whale | 1,400% YoY growth, 5,000+ brands (2023) [50] | DTC Twitter community | Founder-led, influencer playbook |

### 2.1 Lovable

**Numbers**
- $10M ARR in 60 days with 15 people [1].
- Third-party analyses report ~$20M ARR in about two months and ~$100M ARR in about eight months [2][5].
- Lovable grew out of the open-source GPT Engineer. It reportedly reached 50,000 GitHub stars in two months and built a 27,000-person waitlist for a commercial version [2].

**Content engine**
- **Build in public as the #1 lever.** Head of growth Elena Verna describes building in public as Lovable's top growth strategy [3][4]:
  - the CEO tweets updates constantly;
  - engineers ship features and announce them on social;
  - she argues the resulting "noise" drives re-engagement better than newsletters did.
- **Generous free usage treated as marketing.** Lovable gives the product away generously and treats the AI cost as marketing spend [2][97].
- **Community as infrastructure** [2].

**Borrow (Inference)**
- A daily "shipped today" post from the founder: a screen recording, what changed, and why it matters to one named audience.
- Each source, metric or fix is a post.

### 2.2 Cursor

**Numbers.**
- TechCrunch reported Cursor passing $500M ARR in June 2025 [6].
- Secondary analyses report ~$100M ARR by January 2025, attributed almost entirely to developer word of mouth rather than marketing spend [7][8].

**Content engine.** This research found no evidence of a formal content program behind that growth [7][8].

**Borrow (Inference).** Word of mouth needs a moment users want to screenshot. For Namzilabs, that is the first time a user sees one number reconciling calendar, CRM and payments data, with the exclusions listed.

### 2.3 Bolt (bolt.new)

**Numbers**
- StackBlitz had stalled at about $0.7M ARR and was weeks from shutting down.
- It launched Bolt on 3 October 2024 with a single tweet, and Bolt took off immediately [9].
- Sacra reports ~$4M ARR within four weeks, ~$20M in about two months and $40M ARR by March 2025 [11].

**Content engine**
- **Demo-first launch.** A user types a prompt such as "build a directory of great products", and a working, designed site appears within seconds [10].
- **User-generated proof.**
  - Users posted build stories on social media, blogs and YouTube, for example "I built our startup's MVP in a weekend on Bolt.new".
  - A Reddit community (r/boltnewbuilders) formed, and the team amplified user-made projects [10].

**Borrow (Inference).** A 10 to 20-second "input → result" demo. For Namzilabs: pick two sources → match → a number appears with its working shown.

### 2.4 Replit

**Numbers.** Replit went from ~$10M ARR at the end of 2024 to $100M ARR in June 2025 after its AI agent launched [12].

**Content engine.** This research found little sourced detail.

**Inference (unverified):** the pattern matches Bolt and Lovable, with frequent founder posting on X and users sharing the apps they built.

### 2.5 Gamma

**Numbers.** $100M ARR, ~50M users and ~600,000 paying subscribers, with a team of about 50, and profitable [13][14].

**Content engine**
- **Founder as first creator.** CEO Grant Lee made content himself before running creator marketing. His reasoning: you cannot coach creators through something you have never done [13][15].
- **Hand-held onboarding.** He personally onboarded creators so they would like the tool before telling their audience about it [13][15].
- **Power law.** About 10% of creators drove 90% of conversions. Gamma now works with 6 agencies and 150+ creators across TikTok, Instagram, LinkedIn and YouTube [13][15].
- **Word of mouth.** More than half of signups come from word of mouth [13][15].

**Borrow (Inference)**
- Founder posts daily for the first 30 to 60 days.
- Later, recruit 5 to 10 micro-creators in coaching, e-com and the creator economy, and onboard each one personally.
- Expect one or two of them to matter.

### 2.6 Granola

**Numbers.** User base reported growing ~10% per week in May 2025 [17].

**Content engine**
- **Tight beta niche.** A year-long, hands-on beta started with venture capitalists and then expanded to founders [16].
- **The output is the ad.** People receive polished meeting notes from a user and ask how they were made [16].
- **A shareable moment.** "Crunched", a 2025 year-in-review, generated personalized summaries from users' meeting histories. It was built to be shared, and spread on X and LinkedIn [17][18].

**Borrow (Inference).** A monthly or year-end "your funnel, crunched" card users can choose to post, e.g. "My Q4: 1,204 booked · 61% held · $X per held call". This is a **product idea**, not an existing feature.

### 2.7 Clay

**Numbers.** $1M → $100M ARR in two years, after six years of foundational product work ("an eight-year overnight success") [19].

**Content engine**
- **Category creation.** Clay popularized "GTM engineering" as a role and discipline, with content and courses around it [22].
- **Creator and agency ecosystem.** Independent experts publish tutorials, workflow teardowns and LinkedIn posts [23]. Third-party analyses list reverse demos, agencies, community, LinkedIn and SEO among Clay's channels [24].
- **Templates** [21] and **Clay Clubs** (local, community-run meetups with public channels) [20].

**Borrow (Inference)**
- Name the job Namzilabs does for a specific person, e.g. "the person who owns sales numbers in a coaching business".
- Publish metric "recipes" as copyable templates.

### 2.8 Cal.com

**Numbers.** Cal.com went from open-source side project to one of the fastest-growing commercial open-source companies within nine months. At launch it "broke" Product Hunt, Hacker News and Reddit, and trended on GitHub for weeks [25][26].

**Content engine**
- "Open-source Calendly alternative" positioning [26].
- In 2024, product updates shipped on the 15th of each month [27].
- This research did not find detail on specific launch-week content.

**Borrow (Inference)**
- "Alternative to X" positioning works when there is a clear incumbent. For Namzilabs the incumbent is *the spreadsheet*, e.g. "your sales sheet, except it knows the same person across tools".
- A fixed public changelog day creates a recurring post.

### 2.9 Whop and the clipping economy

**Numbers.** Annualized revenue was reported at $142M in October 2025, up from $56M at the end of 2024 [33].

**How Content Rewards works** [28][29]
- A brand, agency or creator sets a budget and a rate per 1,000 views.
- Anyone can join without an audience and post clips that meet the brief.
- Clippers are paid on verified views while the budget lasts.
- A third-party guide puts typical rates at $0.20 to $6 per 1,000 views, averaging about $1 [30].

**Whop uses it on itself**
- CEO Steven Schwartz posted: "Whop is spending 90K / month on content rewards. Glad to see that it is working for other people as well." [31]
- He has described clipping as effective for "people who don't necessarily have huge budgets but have a lot of micro fans" [32].

**Scale and caveats**
- 2026 coverage reports the product relaunched in late 2025 with Daniel Bitton's clipping marketplace. It reportedly pays out more than $40,000 a day across nearly a million videos a month, for clients including Polymarket and ElevenLabs [34].
- Press coverage ties clipping to music promotion, fintech and crypto gambling [32][34][35][36].
- **Inference:** expect brand-safety and quality-control work.

**Borrow (Inference)**
1. Clipping needs source footage. Build a library of founder long-form first: live demos, podcast appearances, teardown streams.
2. Then test a small campaign with a strict brief:
   - approved claims only;
   - demo data labelled;
   - no promised results;
   - disclosure required.
3. Whop is one of Namzilabs' live sources. "Did your clipping campaign produce held calls and revenue, or just views?" is a natural series for Whop sellers. It only works where lead source or UTM data is captured at booking or checkout.

### 2.10 Supabase (primary source [39])

**Cadence.** A three-month cycle ends in a **Launch Week**, with one feature or announcement shipped every day for a week. The team built it to recreate YC's Demo Day internally.

**Who writes.** "The person who implemented the code will be the same person who writes the marketing content." They also pick the channel:
- UI components go to design communities and Product Hunt;
- infrastructure goes to Hacker News.

**Re-launching.** "You can launch a new feature many times over and always manage to reach people who either forgot, ignored, or just plain missed it the first few times."

**Operations.** Ship to production a week before Launch Week. Start press work three weeks ahead.

**Result.** 47% month-on-month database growth over 18 months.

The format spread across developer tools; Resend and Linear also run launch weeks [40].

**Borrow (Inference).** A five-day Namzilabs launch week every 6 to 8 weeks, one concrete capability per day. Re-launch the winners in new formats later.

### 2.11 n8n

**Numbers**
- ~$40M ARR by mid-2025 [43]. A later report says $100M ARR in April 2026, up from $70M at the end of 2025 [42].
- The GitHub README lists "1500+ integrations and 9,000+ workflow templates". The repository showed ~205.9k stars when read on 24 Sep 2026 [41].

**Content engine**
- Community members made YouTube and LinkedIn content about building AI workflows on n8n. As described in [42]: "the more content people create, the more other people want to create content, the better it gets ranked, and then everything started to explode."
- Templates give creators something concrete to demo, and viewers something to copy [41][42].

**Borrow (Inference).** Every Namzilabs "metric recipe", e.g. show-up rate from Calendly + Close, should exist in three forms: a template, a short video and a search-optimized page. That also hands creators a ready-made tutorial topic.

### 2.12 OpusClip

**Numbers**
- 5M users within 7 months [45].
- Reportedly $1M ARR within about two weeks [46].
- At its second anniversary, the co-founder posted that 12M+ creators and brands had used it [44].
- It pivoted from a livestreaming tool that had about 200 users after three months [47].

**Content engine**
- The product's output (short clips) is itself distribution.
- The founding team came from creator management, running an agency with 500+ influencers [47].
- OpusClip publishes explainers on adjacent trends, such as "What Is Whop Content Rewards?" [29].
- **Inference:** that captures search demand created by the clipping boom.

**Borrow (Inference).** Write the explainer for each trend your buyers are searching, and end it with how to measure the effect on booked calls and revenue. Examples: "Instagram's 5-hashtag cap", "what X's open-sourced algorithm rewards", "Whop Content Rewards".

### 2.13 Beehiiv [48][49]

- **Founder-led.** CEO Tyler Denk openly shares revenue numbers and product decisions, including through his newsletter *Big Desk Energy*.
- **Repurposing.** Each newsletter becomes several posts on X and LinkedIn. He started this with roughly 3,000 Twitter followers.
- **Lead magnets from real artifacts.**
  - beehiiv's actual seed deck is used as a lead magnet.
  - Its Series B deck is the reward for sharing the newsletter with one person.
- **Referral heritage.** He previously built Morning Brew's referral program, credited with over a million subscribers.

**Borrow (Inference)**
- One weekly long-form piece (a "Receipts" email or an X long post), cut into 5 to 7 short posts.
- A lead magnet made of real internal artifacts, e.g. the exact metric definitions Namzilabs uses.

### 2.14 Triple Whale

**Numbers**
- 1,400% year-over-year growth and 5,000+ brands at its February 2023 raise [50].
- A later teardown reports 60,000+ brands [51].

**Content engine**
- Growth rode "DTC Twitter", attribution thought leadership and agency partnerships [51].
- Co-founder AJ Orbach has described taking the D2C influencer-marketing playbook and applying it to the influential D2C community on Twitter [50][51].
- His X display name carries the whale emoji [52]. **Inference:** a small tribe marker.

**Borrow (Inference).** E-com operators still gather on X and reward useful, numbers-first posts about attribution and margins. A product whose promise is "every number shows its working" fits a crowd that is sceptical of dashboard numbers.

### 2.15 Also relevant: Cluely (what not to copy)

- TechCrunch framed Cluely's marketing as a "ragebait strategy" [37].
- A third-party teardown reports that, at peak, up to 50 interns and 700 clippers produced about 200 videos a day. Pay was $20 to 40 per video plus $1,000 bonuses for million-view hits [38].
- **Inference:** volume and provocation can buy views. For a product that sells *trustworthy numbers*, provocation carries a cost:
  - it invites "not interested", mutes and reports, which carry large negative weights on X [54];
  - it contradicts a "receipts" brand.

### 2.16 Tactic index for Namzilabs

| Tactic | Who used it | Fit for Namzilabs now (Inference) |
|---|---|---|
| Founder-led content | Lovable, Gamma, Beehiiv, Whop, Triple Whale | **High.** The core engine for the next 90 days |
| Build in public | Lovable, Beehiiv | **High.** Ship notes plus weekly funnel receipts |
| Launch weeks | Supabase; Cal.com (monthly updates) | **High.** Every 6 to 8 weeks |
| Trend-jacking | OpusClip (SEO explainers), Granola (year-end moment) | **High.** Platform changes, BFCM, the clipping boom |
| Templates / programmatic SEO | n8n, Clay | **Medium to high.** Metric recipes per pair of sources |
| Community showcases | Bolt, Clay Clubs, n8n | **Low for now.** Showcase your own builds on demo data until users opt in |
| UGC creator programs | Gamma, n8n | **Later.** After the message is proven organically |
| Clipping (pay per view) | Whop, Cluely | **Later.** Needs a footage library and guardrails |
| Referral loops | Beehiiv | **High.** Already exists: invite one person, get a month free |
| Paid creator whitelisting | Not researched in depth | **Later.** Needs ad budget and a proven creative |
| Memes | DTC Twitter culture | **Medium.** Kind, situation-based memes only |

**Paid creator whitelisting (unverified here).** This means running ads through a creator's handle (Meta partnership ads, TikTok Spark Ads). No 2025 to 2026 performance data was gathered for this report. Revisit once there is budget and an organic post that has already proven itself.

---

## 3. Platform mechanics: X, Instagram, TikTok/Shorts

### 3.1 X

#### What changed

- X open-sourced its new For You algorithm on 20 January 2026. It is described as "powered by the same transformer architecture as xAI's Grok model", and X said it would update the repository every four weeks [56][57][58].
- In October 2025, Elon Musk said the aim was to delete all heuristics, with "Grok … literally read[ing] every post and watch[ing] every video (100M+ per day)" to match users with content [60][62].
- He has described the objective as maximizing "probable long-term user-seconds" [61].

#### How ranking works, per the README [53]

- Candidates come from two places:
  - accounts the viewer follows (in-network);
  - retrieval over accounts the viewer doesn't follow (out-of-network).
- A model ("Phoenix") predicts, for each viewer and post, the probability of each action. The actions are grouped as engagement, clicks, attention, follow, and negative actions.
- **Score = Σ (weight × predicted probability).**
- "Posts from accounts the viewer does not follow are multiplied by a factor below 1."
- "Each post after an author's first is multiplied by a decaying factor, down to a floor."
- Filters remove muted keywords, previously seen posts, and blocked or muted authors.

#### Current weights

Source: `home-mixer/params/param.rs`, read 24 Sep 2026 [54].

| Predicted action | Weight | Relative to a like |
|---|---|---|
| Share via copy link | 20.0 | 40× |
| Reply | 5.0, **+15.0 when viewer and author follow each other** [55] | 10× (40× between mutuals) |
| Quote | 5.0 | 10× |
| Share via DM | 5.0 | 10× |
| Follow author | 4.0 | 8× |
| Share (generic) | 2.0 | 4× |
| Repost | 1.0 | 2× |
| Like | 0.5 | 1× |
| Click | 0.4 | 0.8× |
| Open link | 0.2 | 0.4× |
| Video open / photo expand / dwell | 0.07 / 0.05 / 0.05 | tiny |
| Continuous dwell time | 0.004 | tiny |
| Profile click / video quality view | 0.0 | none |
| Not dwelled | −0.02 | |
| Block author | −31.2 | |
| Not interested | −43.2 | |
| Mute author | −58.8 | |
| Report | −234.0 | |

The same file sets a minimum video duration parameter of 10,000 ms [54].

**Caveats**
- **Weights multiply predicted probabilities, not raw counts** [53]. A rare action with a high weight, such as a copy-link share, contributes only as much as its likelihood.
- **Parameters can change.** Each parameter is declared with a named config key, so **Inference:** production values may differ from the file, and X says it updates the repository every four weeks [58]. Re-check before relying on specifics.
- **A lot of circulating advice is from 2023.** Claims like "an author reply is worth 75" and "a reply is worth 13.5" come from Twitter's April 2023 weights [59]. Those specific weights do not appear in the 2026 parameter file [54].

#### What the code implies for Namzilabs

**Inference**, grounded in [53][54][55]:
- **Write for replies, quotes and forwarding, not likes.** Reference-grade posts get copied into a team's Slack or WhatsApp. Examples: a formula, a definitions table, a checklist.
- **Build mutual follows inside your niche.** Replies between mutuals get +15. A small circle of operators who reliably talk with you outweighs a large passive audience.
- **Space your posts.** Author-diversity decay down-weights your second and third posts in the same viewer session.
- **Avoid "not interested", mutes and reports.** One irritated viewer's predicted negative action outweighs many likes. That rules out ragebait and aggressive self-promotion.
- **Video is not automatically favored in the current parameters.** The video-quality-view weight is 0.0, so a clip has to earn replies, shares, follows and dwell like any other post. Keep product clips at 10 seconds or longer, given the 10,000 ms parameter. Its exact use is undocumented.
- **Tone scoring is unverified.** Third-party guides claim Grok scores a post's tone. This research could not verify that. The verifiable part is the heavy negative weight on negative feedback.

#### Links

- In October 2025, X head of product Nikita Bier explained why link posts get lower reach: the in-app browser covers the post, so people forget to like or reply. X began testing a collapsing link view [63][64].
- He denied links are "deboosted" [64][65].
- Buffer's data shows free-account link posts at 0% median engagement since March 2025 [67].
- In the current weights, opening a link is +0.2 [54].
- X has also tested native, autoplaying YouTube embeds in the timeline [68].

**Inference:** make the post self-contained, with the value inside the post. Put the URL in the first reply or the profile. Accept lower reach on posts whose only job is the click.

#### Premium

Buffer analyzed 18.8M posts from 71,000 accounts [66][67].

| Account type | Median impressions per post | Reach vs. free |
|---|---|---|
| Free | under 100 |  |
| Premium | ~600 | ~10× |
| Premium+ | over 1,550 | ~15× |

- Free accounts' median engagement fell to 0% in 2025.
- Premium text posts neared 0.9% median engagement by mid-2025, and Premium video stayed above 0.7%.

**Inference:**
- The data is observational: Premium buyers also tend to be more active.
- The open-sourced scoring code shows no explicit Premium multiplier [53].
- Even so, for a founder relying on X, the gap makes Premium the default choice.

#### Long posts vs threads

**Inference.** No controlled 2025 to 2026 test results were found.
- Dwell weights are small next to reply, quote and share weights (0.05 and 0.004 vs 5 to 20). The format matters less than whether the piece earns replies and forwards.
- Use a single long post (Premium) for a teardown people will save and forward.
- Use a short thread when each step needs its own screenshot.
- Either way, the first two lines must work as a standalone post.

#### Best formats for B2B / prosumer SaaS on X

**Inference**, using [54][66][69]:
1. **Text posts built on a specific number or formula.** In Buffer's 2026 data, text leads X engagement with a 3.56% median, and images trail it by only about 5% [69].
2. **Screenshot "receipts".** A dashboard or calculation with the working visible.
3. **Native 15 to 45-second demo clips.** Upload directly, 10 seconds or longer, with burned-in captions.
4. **Quote-posts of industry news with added analysis.** A quote is weighted 5.
5. **Replies under larger accounts in your niche.** See section 7.

### 3.2 Instagram

#### Ranking signals, as stated by Instagram

- In January 2025, Adam Mosseri said the most important signals are **watch time, likes per reach and sends per reach**. Likes matter slightly more for followers (connected content); sends matter slightly more for non-followers (unconnected) [77].
- He has also said: "One of the most important signals we use in ranking is sends per reach … think about creating something people want to send to a friend." [78]
- **Inference (B2B translation):** design posts one operator sends to another, e.g. "send this to your setter" or "send this to whoever runs your ads".

#### Format roles

| Format | Best at | Evidence |
|---|---|---|
| Reels | Reach to non-followers | **Buffer 2026:** highest reach rate, 30.81%. That is 1.36× carousels and 2.25× single images [70][71]. **Metricool/HypeAuditor** (700M posts): Reels lead reach across follower tiers [76][100]. **Socialinsider:** Reels lead reach for accounts up to ~50K followers [99]. |
| Carousels | Depth: engagement, saves, sends | **Buffer 2026:** carousels have the highest median engagement rate, 6.90%, and ~12% more engagement than Reels [70][71]. **Socialinsider Q2 2026** (engagement by followers): carousels 0.50%, Reels 0.48%, images 0.33% [73]. |
| Single images | Simple announcements, quotes | Lowest engagement in Socialinsider's data [73] |

#### Reel length

- Reels can run up to 3 minutes (announced January 2025) [81][82].
- Before that change, Instagram advised that Reels of 90 seconds or less are the ones recommended to unconnected audiences [81][82].
- Socialinsider finds 30 to 60-second Reels get the highest average reach rate, 5.60%. Reels over two minutes fall to 3.50% [74].

#### The first 3 seconds

- In August 2025, Instagram added **skip rate** to Reels insights: the share of viewers who scroll past within the first 3 seconds. A high skip rate means the opening did not hold people [79][80].
- A third-party rule of thumb: under ~30 to 40% is healthy, and over ~50% means the hook is not working [98].
- **Inference:** put the claim, number or visual payoff in the first frame. Use on-screen text as the headline, and skip logo intros and greetings.

#### Trial Reels

- Introduced December 2024: a Reel is shown to non-followers first [83].
- It can auto-share to followers if it performs well within 72 hours [84]. Eligibility has varied by account.
- **Inference:** use Trial Reels to A/B test hooks. Post the same body with two different first 3 seconds.

#### Sizing

- Profile grid thumbnails moved to **3:4** in January 2025 [82].
- **1080×1440 (3:4)** fills the grid uncropped. **1080×1350 (4:5)** remains the safe, universal size for feed posts and carousels [90][91].
- Reels are **1080×1920 (9:16)** [90][91].
- **Inference:** keep key text in the central area so it survives the 3:4 grid crop.

#### Captions, on-screen text and SEO

- Since 10 July 2025, public posts from professional accounts can appear in Google and Bing results, including their captions and alt text [87].
- **Inference:**
  - Write the first caption line like a search title, e.g. "Show-up rate formula for booked sales calls".
  - Repeat the keyword in on-screen text.
  - Add alt text.

#### Hashtags

- Capped at **five** per post and Reel since December 2025 [85][86].
- Mosseri: "a few specific tags actually perform better than a long list of generic ones". Hashtags can help search, but don't necessarily increase reach [86].
- **Inference:** use 3 to 5 precise tags, or none.

#### Originality and cross-posting

- Accounts that repeatedly (10+ times in 30 days) post other people's content without material enhancement are left out of recommendation surfaces. In April 2026 this was extended from Reels to photos and carousels [88].
- **Inference:** cross-posting your own videos is fine if you upload clean masters with no other platform's watermark, and give each platform its own first frame and caption.

#### Reposts and the Friends tab

- Since August 2025, users can repost public Reels and posts. Reposts show on a profile tab and in friends' feeds [89].
- **Inference:** "Repost this for your team" is a legitimate share call to action.

### 3.3 TikTok and YouTube Shorts (short notes)

- **TikTok search** reads captions, hashtags, on-screen text and spoken words (via auto-captions). Completion rate and watch time are central ranking inputs [92][93].
  - **Inference:** say the keyword in the first seconds and show it on screen.
- **Same master, three platforms.** One clean 1080×1920 export can go to TikTok, Reels and Shorts without watermarks, given Instagram's originality rules [88].
- **YouTube Shorts views** count every play or replay since 31 March 2025. The old definition survives as "engaged views" and still drives monetization metrics [94][95].
  - **Inference:** judge Shorts on engaged views, not raw views.
- **Benchmarks:**
  - Rival IQ's 2025 all-industry median engagement is 1.73% per post on TikTok vs 0.36% on Instagram [75].
  - On TikTok, video's median engagement (3.39%) is 77% higher than carousels and photo posts [70].

### 3.4 Engagement benchmarks

Different studies use different definitions. Compare rows only within one source.

| Platform / format | Metric | Value | Source |
|---|---|---|---|
| X: text posts | Median engagement rate (2026 report) | 3.56%; images ~5% behind | Buffer [69] |
| X: all posts | Year-on-year engagement change | +44%, the largest rise of 10 platforms | Buffer, via [72] |
| X: free / Premium / Premium+ | Median impressions per post | <100 / ~600 / >1,550 | Buffer [66] |
| X: Premium text / video | Median engagement (mid-2025) | ~0.9% / >0.7% | Buffer [66] |
| Instagram: all posts | Year-on-year engagement change | −26%, the largest drop | Buffer, via [72] |
| Instagram: Reels | Reach rate | 30.81% (1.36× carousels; 2.25× images) | Buffer [70][71] |
| Instagram: carousels | Median engagement rate | 6.90% | Buffer [70][71] |
| Instagram: Reels / carousels / images | Engagement by followers, Q2 2026 | 0.48% / 0.50% / 0.33% (overall 0.45%) | Socialinsider [73] |
| Instagram: Reels 30 to 60 s vs >2 min | Average reach rate | 5.60% vs 3.50% | Socialinsider [74] |
| Instagram: all industries | Median engagement per post (2025) | 0.36% | Rival IQ [75] |
| TikTok: all industries | Median engagement per post (2025) | 1.73% | Rival IQ [75] |
| TikTok: video | Median engagement rate | 3.39%, 77% above carousels/photos | Buffer [70] |
| LinkedIn: carousels (PDF) | Median engagement rate | 21.77%, ~3× video and images | Buffer [69][72] |
| Threads: video / images / text | Median engagement rate | 5.55% / 4.55% / 2.79% | Buffer [69] |

### 3.5 What the evidence does not tell us

This research found no reliable public 2025 to 2026 data on:
- view-to-signup conversion for B2B SaaS on X or Instagram;
- conversion from comment-keyword DM automation;
- link-in-bio click-through.

Vendors make claims about all three, but none was verified here.

**Inference:** treat conversion as Namzilabs' own experiment:
1. Tag every link with UTMs.
2. Pipe GA4, signups and Stripe into Namzilabs.
3. Publish the weekly receipts (see 6.7).

---

## 4. Hook library (41 hooks)

**How to use this library**
- `[brackets]` are variables.
- Namzilabs examples with numbers are **demo data** and must say so if posted.
- "Real" rows quote public posts or titles from the sources.
- "Signal" is the ranking behavior each hook is designed to trigger. **Inference**, based on [54][77][78].

### A. Receipts and numbers

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 1 | `[Big number]. [Smaller]. [Smallest]. Where did the rest go?` | "40 booked. 23 held. 6 paid. Where did the other 34 go? (demo data)" |  | Replies, sends |
| 2 | `I'm spending [amount] on [channel]. Here's what it's producing.` | "Building Namzilabs in public: every signup traced back to the post that sent it. Week [N] receipts ↓" | "Whop is spending 90K / month on content rewards. Glad to see that it is working for other people as well." [31] | Replies, follows |
| 3 | `Your [tool A] says [X]. Your [tool B] says [Y]. Both are right.` | "Calendly says 52 meetings. Your CRM says 38 leads. Both are right: they count different people. (demo)" |  | Replies, quotes |
| 4 | `Here's the exact math behind [metric].` | "Show-up rate isn't just held ÷ booked. Here's the math that survives reschedules and duplicates." |  | Saves, copy-link shares |
| 5 | `[Metric] is the number nobody on your team owns.` | "Speed to lead is the number nobody on a sales team owns. Here's how to see it in 4 steps." |  | Sends |

### B. Mechanism: "here's why"

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 6 | `A common complaint is [problem]. This is because [mechanism].` | "A common complaint: 'our closers close 30% but revenue is flat.' Often it's because show-up rate is sliding underneath them." | "For creators, a common complaint is that posts with links tend to get lower reach. This is because the web browser covers the post…" [63] | Replies |
| 7 | `[Tool] can't tell you [metric]. Here's why.` | "Stripe can't tell you revenue per lead. It has never seen your leads." |  | Replies, sends |
| 8 | `The [N]-step recipe for [metric]` | "The 4-step recipe for cost per held meeting: Get data → Match → Calculate → Publish." |  | Saves |
| 9 | `What actually happens to a [lead] in the first [N] minutes` | "What happens to a Typeform lead in the first 5 minutes: a timeline." |  | Watch time |
| 10 | `I read [primary source] so you don't have to.` | "I read X's open-sourced ranking code. The 5 weights that matter for founders:" | "I read the X (Twitter) algorithm source for 4 days…" [96] | Copy-link shares |

### C. Contrarian

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 11 | `Stop tracking [vanity metric]. Track [real metric].` | "Stop celebrating booked calls. Track held calls." |  | Replies |
| 12 | `Unpopular opinion: [claim].` | "Unpopular opinion: your closer isn't the problem. Your show-up rate is." |  | Replies, quotes |
| 13 | `"[Common advice]" is wrong if [condition].` | "'Book more calls' is bad advice if 4 in 10 don't show. Check yours first." |  | Replies |
| 14 | `An [N]-year overnight success` | "The 'overnight' fix to our funnel numbers took [3] tools, [2] spreadsheets and one matching rule." | "Clay reaches $100M ARR: an eight-year overnight success" [19] | Follows |
| 15 | `"[Harsh quote]" → [result]` (only with a true quote) | "'[Quote someone said about your idea]' → [what happened]" | "'Dumbest idea I've heard' to $100M ARR" [14] | Curiosity, replies |

### D. Audience call-outs

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 16 | `If you run [business type], you've seen this:` | "If you run a coaching offer with setters and closers, you've seen this: the setter's sheet and the closer's sheet never match." |  | Sends |
| 17 | `[Audience]: your [dashboard] is missing one column.` | "Shopify founders: your email dashboard is missing one column: revenue per lead, matched to real orders." |  | Replies, sends |
| 18 | `[Audience]: you have [N] tools and no idea which [X] made money.` | "Creators: Whop, Stripe, Calendly, Mailchimp, and still no single view of which leads became paying clients." |  | Replies |
| 19 | `[N] numbers every [role] should see every Monday` | "3 numbers every sales manager should see every Monday: show-up rate, speed to lead, cost per held meeting." |  | Saves, sends |
| 20 | `Send this to your [role].` (as the opener) | "Send this to your setter before tomorrow's calls." |  | Sends |

### E. Before and after

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 21 | `Before: [painful process]. After: [simple result].` | "Before: 6 tabs, 2 exports, 1 VLOOKUP. After: one number, with receipts." |  | Watch time |
| 22 | `Monday morning: before vs after` | Split screen: spreadsheet scramble vs one live dashboard (demo) |  | Sends |
| 23 | `What [A] shows vs what [B] shows` | "What your booking tool shows vs what your bank shows." |  | Replies |

### F. Demo: "watch me"

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 24 | `Watch me build [metric] from [tool] + [tool] in [N] seconds.` | "Watch me build show-up rate from Calendly + Close in 20 seconds. No code." | Bolt's launch demo: prompt → working site in seconds [10] | Watch time, follows |
| 25 | `This number shows its working.` | "This number shows its working: 412 records read, 260 matched, 18 excluded, and why. (demo)" |  | Copy-link shares |
| 26 | `No code. [N] steps. [Outcome].` | "No code. 4 steps. Cost per held meeting." |  | Watch time |
| 27 | `I asked [AI] [question] about my [data].` | "I asked Claude, 'What was my cost per held meeting last week?' It read the published metric." (**Only once the MCP connection is live.**) |  | Replies |

### G. Curiosity and lists

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 28 | `[N] ways [metric] gets miscounted (#[k] is the sneaky one)` | "5 ways show-up rate gets miscounted (#3 is reschedules)." |  | Saves |
| 29 | `The number [a good manager] asks about first` | "The number a good sales manager asks about before close rate." |  | Watch time |
| 30 | `Save this before [event].` | "Save this before BFCM: the 4 numbers to check every day." |  | Saves |
| 31 | `How [company] did [result] in [time]` | "How Supabase launches: 5 rules any solo founder can copy." | "How bolt.new hit $40M ARR in 5 months" [9] | Copy-link shares, follows |

### H. Build in public and founder

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 32 | `Day [N] of building [product] in public: [receipt]` | "Day [N]: shipped [the custom webhook source]. Here's the matching rule that took [3 days]." | Pattern: Lovable's constant "shipped" posts [3] | Replies, follows |
| 33 | `I'm a solo founder. This week I shipped [X] and broke [Y].` | Honest weekly recap, including what didn't work |  | Replies |
| 34 | `[Milestone]. Since [start], [N] [people] have [done thing].` | "33 sources live. Here's the full list and what each one unlocks." | "🎉 @OpusClip just turned 2! … over 12 million creators and brands have used it…" [44] | Reposts, follows |
| 35 | `Here's the [real artifact] we used to [result].` | "Here are the exact metric definitions Namzilabs uses. Copy them." | beehiiv's seed and Series B decks used as lead magnets [48] | Saves, DMs |

### I. Trend-jacking

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 36 | `[Platform] just changed [X]. Here's what it means for [audience].` | "Instagram now caps hashtags at 5. What it means if your coaching funnel runs on Reels." | "Premium on X isn't just features anymore, it shapes who gets seen on the platform. From our analysis of 18.8M posts…" [67] | Copy-link shares |
| 37 | `Everyone's doing [trend]. Almost nobody measures [outcome].` | "Everyone's paying clippers per 1,000 views. Almost nobody measures cost per held meeting from those views." |  | Replies, quotes |
| 38 | `[Big company] built [X]. Here's the one-person version.` | "Clay built a whole job title, GTM engineer. Here's the one-person version for a coaching business." |  | Copy-link shares |

### J. Participation

| # | Template | Namzilabs example | Real example | Signal |
|---|---|---|---|---|
| 39 | `Reply with your [number]; I'll [useful thing].` | "Reply with your show-up rate and your #1 no-show reason. I'll compile the answers, anonymized, into a public sheet." (This builds *real* benchmark data with consent.) |  | Replies |
| 40 | `Guess the number:` | "Guess: in this demo funnel, what % of booked calls actually happened? Answer tomorrow." |  | Replies |
| 41 | `A or B?` | "Which would you rather know every Monday: show-up rate or speed to lead?" |  | Replies |

**Hook rules (Inference)**
- Put a number, a named tool or a named role in the first line.
- Keep the first line under about 12 words.
- One idea per post.
- Never promise results. Show the working instead.

---

## 5. Format templates

### 5.1 Carousels that get saved and sent

**Design rules (Inference)**
- 7 to 10 slides at 1080×1350 or 1080×1440 [90][91].
- One idea per slide, at most about 25 words.
- Slide 1 is the hook plus the visual payoff. Slide 2 is the stakes.
- The last slide has a single call to action.
- Big numbers, consistent layout, and a "demo data" label where relevant.
- Export the same slides as a PDF for LinkedIn, where carousels post a 21.77% median engagement rate [69].

**Template A: "The metric recipe"** (saves and sends)
1. "Your show-up rate is probably wrong. Here's a recipe that survives reschedules."
2. The usual math, held ÷ booked, and three ways it breaks: reschedules, duplicate bookings, test bookings.
3. Ingredients: booking tool (Calendly/Cal.com/SavvyCal), CRM (Close/Pipedrive/Attio), call record (Fathom/Google Calendar).
4. Step 1, Get data: bookings plus CRM leads.
5. Step 2, Filter/Match: the same person across tools. Exclude tests and duplicates, and write down the rule.
6. Step 3, Calculate: state the formula you chose, in plain words.
7. Step 4, Publish: one number plus its working (records read, matched, excluded, and why).
8. Result card: "61% · 412 read · 260 matched · 18 excluded (demo data)".
9. "Send this to whoever owns your calendar."
10. CTA: "Comment SHOWUP and I'll DM you the formula sheet." Or: "Free to start, no card. Link in bio."

**Template B: "Myth vs math"** (replies)
1. "5 sales-metric myths coaching businesses still believe."
2 to 6. One myth per slide. The myth sits on top and the math underneath.
7. "Which one did you believe?" plus the CTA.

**Template C: "The leak map"** (sends)
1. "Where 100 leads go (demo funnel)."
2. Lead → contacted: speed to lead.
3. Contacted → booked.
4. Booked → held: show-up rate.
5. Held → closed: close rate.
6. Closed → paid: refunds and failed payments.
7. "Fix the biggest leak first. Here's how to find it."
8. CTA.

**Template D: "Cheat sheet"** (saves)
1. "7 fields your booking form needs if you want to measure speed to lead."
2 to 8. One field per slide, with why it matters.
9. CTA to the checklist.

**Template E: "Teardown"** (follows from a growth-curious audience)
1. "How Supabase launches: 5 rules" [39].
2 to 6. One rule per slide.
7. "How I'm applying it to Namzilabs this month."
8. Follow CTA.

### 5.2 X thread or long post

```
1/ (hook + image; first two lines must stand alone)
Your Calendly says 52 meetings. Your CRM says 38 leads. Stripe says 9 customers. (demo)
All three are right. Here's how to get one honest number, in 4 steps, no code:

2/ Why they disagree: each tool counts a different "person". [screenshot]
3/ Step 1, Get data: the fields you actually need from each tool.
4/ Step 2, Match: the same person across tools. What to exclude, and why.
5/ Step 3, Calculate: the formula, as copyable text.
6/ Step 4, Publish: show the working (records read / matched / excluded). [screenshot]
7/ Which metric in your stack do you trust least? Reply and I'll say how I'd rebuild it.

First reply (the link lives here, not in 1/):
I'm building this as Namzilabs: namzilabs.co. Free to start, no card.
Invite one person and get a month free.
```

**Long-post variant (Premium).** Same structure with section headers. The first two lines are the hook, and the formula sits in a copyable block.

**After posting (Inference, grounded in [53][54][55])**
- Stay for the first hour and reply to every reply.
- Don't post another original for at least 3 hours.
- Quote-post the thread's best line two days later.

### 5.3 Product video scripts (9:16, burned-in captions, 10+ seconds)

**Script 1: "Where did 34 calls go?" (20 s)**

| Time | Visual | On-screen text | Voiceover |
|---|---|---|---|
| 0 to 2 s | Large numbers on a plain background: 40 → 23 → 6 | "40 booked. 6 paid." | "Forty calls booked. Six paid." |
| 2 to 6 s | Split screen of a calendar app and a payments app (demo accounts) | "Your tools never met" | "Your calendar and your payments tool have never met." |
| 6 to 14 s | Screen recording: Get data → Match → Calculate | "4 steps · no code" | "Pull both in, match the same people, calculate show-up and close rate." |
| 14 to 18 s | Result card with its working | "61% held · 18 excluded (duplicates) · demo" | "And every number shows its working." |
| 18 to 20 s | Logo and URL | "Free to start · no card" | "Namzilabs. Link in bio." |

**Script 2: "Speed-to-lead stopwatch" (15 s)**

| Time | Visual | On-screen text | Voiceover |
|---|---|---|---|
| 0 to 2 s | A stopwatch running | "How fast do you call new leads?" | "How fast do you actually call new leads?" |
| 2 to 6 s | A form tool and a dialer side by side (demo) | "The form knows. The dialer knows." | "Your form knows when they signed up. Your dialer knows when you called." |
| 6 to 12 s | Flow: Typeform + Aircall → Match → Calculate | "Median: 3h 12m (demo)" | "Match them and you get your real speed to lead." |
| 12 to 15 s | CTA card | "Comment SPEED for the checklist" | "Comment SPEED and I'll send the checklist." |

**Script 3: "Founder receipts" (30 s, talking head plus screen)**

| Time | Visual | Script |
|---|---|---|
| 0 to 3 s | Face to camera, dashboard behind | "I'm building a tool where every number shows its working. So here are my own numbers." |
| 3 to 20 s | Screen: this week's content funnel (views → profile visits → site sessions → signups), **real numbers only** | "This week: [X] views, [Y] visits, [Z] signups. The post that worked was [A]. The one that flopped was [B]." |
| 20 to 27 s | The "excluded" panel | "Here's what I excluded and why: [e.g., my own test signups]." |
| 27 to 30 s | Face | "Follow for next week's receipts." |

**Script 4: "Ask your metrics" (20 s).** Only once the MCP connection is live.
- Hook: "I asked Claude about last week's sales calls."
- Screen: the question, then the answer citing the published metric.
- CTA.
- Do not publish before launch.

### 5.4 Meme templates

All meme templates are **Inference**.

1. **"Three tools, three truths."** Three panels: calendar ("52 meetings"), CRM ("38 leads"), payments ("9 customers"). Caption: "the Monday meeting".
2. **Two-button dilemma.** "Book more calls" vs "find out why 40% don't show".
3. **Expanding brain.** Booked calls → held calls → cost per held meeting → revenue per lead, matched across tools.
4. **Starter pack: "coaching sales ops".** Three Google Sheets, a setter who swears they called, a close rate based on vibes, and zero shared definitions.
5. **"Nobody: / Every dashboard:"** Every dashboard says "Great month!" while the bank account disagrees.
   - Don't imply ad-platform integrations until they are live.

**Rules**
- Target situations, not people or competitors.
- 1080×1350 images.
- Follow every meme with a genuinely useful post within 24 hours.

### 5.5 Production spec cheat sheet

| Asset | Size | Length | Notes |
|---|---|---|---|
| Reel / TikTok / Short | 1080×1920 [90][91] | 15 to 45 s; 30 to 60 s for explainers [74] | Payoff in the first 3 s [79]; burned-in captions; clean master with no watermark [88] |
| Instagram carousel | 1080×1350 or 1080×1440 [90][91] | 7 to 10 slides | ~25 words per slide; key text survives the 3:4 grid crop [82] |
| X video | Native upload, vertical or square | 10+ s [54] | Text-first framing in the post; captions |
| X post | Text, or text plus one screenshot | First two lines stand alone | Link in the first reply [63][67] |

---

## 6. CTA and conversion mechanics

### 6.1 The CTA ladder (Inference)

Use one call to action per post, matched to intent:

| Intent | Post types | CTA |
|---|---|---|
| Low | Memes, trend posts | "Follow for weekly funnel receipts", or "Send this to your [role]" |
| Medium | Recipes, carousels | Comment keyword → DM with the asset |
| High | Demos | "Free to start, no card. Link in bio / first reply." |
| After signup |  | "Invite one person, get a month free." |

### 6.2 Link in bio and profile (Inference)

- **One link, segmented.** A landing page with three doors (coaches with sales teams, e-com brands, creators), or separate pages.
  - Each gets its own UTM, e.g. `utm_source=instagram&utm_medium=bio&utm_campaign=coaches`.
- **Bio formula: who + outcome + proof style + CTA.** For example: "Show-up rate, speed to lead & cost per held meeting, from the tools you already use. Every number shows its working. Free, no card ↓"
- **Pinned content.** The best demo Reel or post, plus a "start here" carousel.

### 6.3 Comment-keyword DM automation

**How it works.** A viewer comments a keyword, and a Meta-approved automation tool sends them a DM with the promised asset.
- ManyChat and similar tools do this on Instagram.
- Current Meta messaging-API rules, such as reply windows, were **not verified in this research**. Check the tool's current documentation.

**Rules (Inference)**
- Deliver immediately and exactly what was promised.
- One keyword per asset.
- Don't gate the asset behind a follow.
- The DM contains the asset plus one soft next step (a UTM'd signup link).
- Reply publicly to comments as well; comments are engagement.

**Namzilabs keywords (Inference)**

| Keyword | Asset |
|---|---|
| SHOWUP | Show-up rate formula sheet |
| SPEED | Speed-to-lead checklist |
| HELD | Cost-per-held-meeting calculator |
| RECIPES | The 5 metric recipes |
| SOURCES | All 33 sources and what each one unlocks |

**On X.** Use "Reply 'SHEET' and I'll DM it", done by hand at first. Doubling as customer research is the point. Check X's current automation rules before automating; they were not verified here.

### 6.4 Link placement and pinned replies on X

- Put the value in the post and the link in the first reply or the profile. Bier's explanation of link-post reach [63][64] and Buffer's 0% median for free-account link posts [67] support this. **Inference.**
- Pin a "start here" post: a 20-second demo plus the link in its first reply.
- For link-only announcements, accept lower reach and schedule them sparingly.

### 6.5 Lead magnets that upgrade into the product (Inference)

- **Google Sheets calculators** for show-up rate, speed to lead and cost per held meeting. Google Sheets is a live Namzilabs source, so the next step is natural: "tired of pasting? connect the sheet".
- **A metric definitions doc.** Plain-language formulas with edge cases (reschedules, duplicates, refunds).
- **A booking-form fields checklist** for measuring speed to lead.
- **Notion and Airtable templates.** Both are live sources.
- **Later: an anonymized benchmark report** built only from consenting users' data. Never invent benchmark figures.

### 6.6 The referral loop

- Namzilabs' referral program: **invite one person, get one month free**.
- **Inference:** where to place it:
  - the post-signup success screen;
  - the follow-up message after a lead magnet;
  - the pinned first reply on X;
  - role-based content ("bring your sales manager", "invite your closer").
- Beehiiv's referral-led growth heritage is the precedent [48][49].
- Describe only the benefit that actually exists.

### 6.7 Measure it in Namzilabs and publish the receipts (Inference)

1. **Tag** every link with UTMs: source, medium, campaign, and content = post ID.
2. **Build a flow:** GA4 (sessions) + the signup event (custom webhook) + Stripe (paid) → match → publish metrics: signups per 1,000 views by post type, activation rate (first source connected) and referral invites.
3. **Publish a weekly "Receipts" post:** views, profile visits, clicks, signups, activations and invites, with the working shown.

This is measurement, build-in-public content (the Lovable and Beehiiv patterns [3][48]) and a product demo at once.

### 6.8 Guardrails (Inference)

- No testimonials, customer logos or "results" until they are real. Label all demo data.
- Only claim what's live:
  - list only live sources, and don't advertise ad-platform sources until they are approved and live;
  - mention the Claude/ChatGPT (MCP) connection only once it's switched on.
- Paid creators and clippers get:
  - an approved-claims list;
  - required ad disclosure (disclosure law was not researched here, so check current FTC and local rules);
  - review before payout where the platform allows it [28].
- No ragebait. Negative feedback carries heavy weights on X [54], and it breaks the "receipts" brand.

---

## 7. Zero-follower distribution plan (30 days)

### 7.1 Principles and why

| Principle | Grounding |
|---|---|
| Borrow audiences before building one: reply where your buyers already read | Posts shown to non-followers are discounted [53], so early reach comes from conversations (Inference) |
| Turn repliers into mutual follows | +15 reply weight between mutual follows [55] |
| Space posts hours apart | Author-diversity decay [53] |
| Earn sends and shares, not likes | Instagram sends per reach [77][78]; X copy-link 20, DM share 5, like 0.5 [54] |
| Native, original, clean files | Instagram originality rules [88] |
| Buy reach where it's cheap | X Premium data [66] |
| Receipts over claims | Negative-feedback weights [54]; brand fit (Inference) |

### 7.2 Niche map

**Inference.** List people by role; choose specific accounts during setup.

| Niche | Who to follow and reply to | What they care about | Namzilabs angles (live sources only) |
|---|---|---|---|
| E-com X ("DTC Twitter") | DTC founders, Shopify/WooCommerce operators, email/SMS marketers, agency owners | Margins, attribution, email revenue, refunds, BFCM | Klaviyo + Shopify: revenue per lead/subscriber matched to orders; Typeform/Tally quiz leads to orders; Stripe/Paddle refunds |
| Coaching / "info" X | High-ticket coaches, sales managers, setters and closers, info-product operators | Show-up rate, speed to lead, close rate, cost per held call, setter accountability | Calendly/Cal.com + Close/Pipedrive/Attio + Stripe/ThriveCart/Whop; Aircall/JustCall for speed to lead; Fathom for held calls |
| Creator economy | Creators selling courses and communities (Whop, Thinkific), newsletter operators, creator agencies, clipping-campaign runners | Which offers sell, revenue per subscriber, clipping ROI | Whop + Stripe + Mailchimp/Customer.io; "views → held calls → revenue" (with UTMs) |

**Setup:** create one private X List per niche with about 50 accounts. Mix large accounts, mid-size operators and peers at your level.

### 7.3 The reply-guy playbook (Inference)

**Volume**
- 30 to 50 replies a day across the three Lists, in 2 to 3 sessions.
- Favor fresh posts, where replies are still being read.

**Replies that add value**
- A specific number or formula.
- A 3-line mini-example.
- A reasoned counterpoint.
- A question the author will want to answer.
- A screenshot on demo data that makes the point.

**Never**
- "Great post!"
- Links in replies.
- Pitching Namzilabs under someone else's post. It invites "not interested" and mutes [54].

**Grow the circle**
- Follow peers who engage, and reply to their posts too. Mutual follows compound [55].
- The profile must convert the curious: a clear bio, a pinned demo, and a banner that says what Namzilabs does.
- Every week, turn your best reply into a standalone post.

**Instagram equivalent**
- 15 to 20 thoughtful comments a day on niche creators' posts.
- Reply to every comment on your own posts.
- Peer DMs that are conversations, not pitches.

### 7.4 Cross-posting pipeline (Inference)

One 60 to 90-minute recording session each week yields:
- 5 to 7 vertical clips;
- 2 carousels;
- 7 to 10 X posts;
- 1 long post or newsletter.

| Output | Adaptation |
|---|---|
| Master file | 1080×1920, exported clean (no watermark) |
| Instagram Reel | Native caption with the keyword in the first line; 3 to 5 precise hashtags [85][86][87] |
| TikTok | Keyword spoken in the first seconds and shown on screen [92] |
| YouTube Short | Keyword in the title; judge on engaged views [94] |
| X | Native upload with a text-first framing |
| LinkedIn (optional) | Carousels as PDFs [69] |

**Stagger:** Instagram first, then the others within 24 to 48 hours.

### 7.5 Content pillars (Inference)

| Pillar | Share of posts | Purpose |
|---|---|---|
| Metric recipes | ~30% | Saves, sends, SEO |
| Receipts / build in public | ~20% | Trust, follows |
| Operator pain call-outs by niche | ~20% | Sends, replies |
| Trend explainers | ~15% | Discovery, copy-link shares |
| Product demos | ~15% | Signups |

### 7.6 The 30 days (Inference)

**Days 1 to 3: setup and warm-up**
- **X**
  - Subscribe to Premium [66].
  - Write the bio (formula in 6.2), add a banner, and pin a demo post.
  - Build the three Lists.
  - Reply only for two days, 30+ replies a day, with no links.
- **Instagram**
  - Set up a professional account with a keyword-rich name field and bio, plus a UTM'd link.
  - Before promoting anything, publish 6 foundation posts:
    - 3 carousels: Template A for show-up rate, speed to lead and cost per held meeting;
    - 3 Reels: Scripts 1 to 3.
- **Systems**
  - Lead magnets: the SHOWUP sheet and the metric definitions.
  - DM automation for two keywords.
  - UTMs.
  - Your own content-funnel dashboard in Namzilabs.

**Days 4 to 10: find the voice**
- **X:** 2 originals a day, spaced 3+ hours apart (one numbers or receipts post, one recipe or mechanism post). 30 to 50 replies a day.
- **Day 7:** a teardown thread, e.g. "How Supabase launches, and how I'm copying it".
- **Instagram:** 5 to 7 Reels and 2 carousels. Use Trial Reels to A/B test hooks if your account has them [83][84].
- **TikTok/Shorts:** cross-post each Reel.
- **Day 10:** Receipts #1, real numbers only.

**Days 11 to 17: series and lead magnets**
- **"33 sources" series:** one source pair a day. Examples: Calendly × Stripe, Typeform × Aircall, Klaviyo × Shopify, Whop × Stripe. Each pair gets an X post, a Reel and, later, a search page.
- Push the SHOWUP and SPEED keyword calls to action.
- Post a data request (hook 39), the start of a consented, anonymized community benchmark.
- **Day 17:** Receipts #2.

**Days 18 to 24: communities and trend-jacks**
- One trend explainer per platform per week, e.g. a platform change, BFCM prep for e-com, or clipping ROI for creators.
- Offer 3 to 5 free "funnel teardowns" to operators you've met in replies.
  - Their data stays private; publish only with written consent.
  - This is founder-led onboarding, the Gamma pattern [13].
- Ask 5 micro-creators in coaching and e-com for honest product feedback. Don't pay for promotion yet.
- **Day 24:** Receipts #3.

**Days 25 to 30: mini launch week (Supabase format [39])**

| Day | Launch |
|---|---|
| 25 | The flow builder: Get data → Filter/Match → Summarize/Calculate → Publish |
| 26 | "Shows its working": sources read, records matched, records excluded and why |
| 27 | 33 live sources: the full list and what each unlocks |
| 28 | Referral: invite one person, get a month free |
| 29 | The Claude/ChatGPT (MCP) connection *if it is live*; otherwise an honest "what's next" post |
| 30 | Recap, Receipts #4, and a long post: "30 days of building in public: what worked, what didn't" |

**After day 30:** re-launch the top performers in new formats. Supabase's principle: "you can launch a new feature many times over" [39].

**Daily time budget (about 2.5 hours)**

| Block | X | Instagram | TikTok/Shorts |
|---|---|---|---|
| Morning (45 min) | 15 replies + 1 original | Reply to comments; 5 niche comments |  |
| Midday (45 min) | 15 replies | Publish a Reel or carousel | Cross-post |
| Evening (45 min) | 15 replies + 1 original | 10 niche comments; DMs |  |
| Weekly (2 to 3 h) | Record batch; write the long post; Receipts | Design 2 carousels |  |

### 7.7 Scorecard and decision rules (Inference)

**Leading indicators**
- Replies received
- Profile visits
- New follows per day
- Instagram sends and saves per reach
- Reels skip rate [79]
- X link clicks
- Keyword DM requests

**Lagging indicators**
- UTM-attributed signups
- Activation (first source connected)
- Referral invites

**Rules**
- **After 10 posts of a format:** keep the top 20% of hooks and rewrite the rest.
- **Skip rate over ~50%** [98]: rewrite the first 3 seconds, not the whole video.
- **A post that draws unusual replies:** turn it into a carousel and a thread within 48 hours.
- **Weekly review:** judge by signups and activations per post type, not by views.

### 7.8 How early tools reached their first users through content

Most sources report early *traction moves* rather than the exact moment a company passed 1,000 users.

| Company | First-traction move | Content lesson (Inference) |
|---|---|---|
| Bolt | One launch tweet plus an instant demo [9][10] | One irresistible demo beats a campaign |
| Lovable | Open-source GPT Engineer: 50K stars → a 27K waitlist [2] | Give something useful away in public first |
| Cal.com | Open-source launch topping Product Hunt, HN and Reddit [25][26] | "Alternative to X" positioning plus a launch moment |
| Granola | Year-long beta with VCs; shared notes did the rest [16] | Seed a tight niche whose outputs travel |
| Beehiiv | CEO content from about 3,000 followers, plus lead magnets [48] | You don't need an audience to start |
| OpusClip | Founders from creator management; outputs are posts [45][47] | Know the niche; make outputs shareable |
| Supabase | Launch weeks and re-launching [39] | Launch repeatedly |
| Triple Whale | DTC Twitter community [50][51] | Pick one dense community and serve it |
| Gamma | Founder as creator, then hand-onboarded creators [13][15] | Do it yourself before paying others |

---

## 8. Lessons for Namzilabs

**Namzilabs in one line.** Namzilabs connects a business's tools (33 live sources, including Calendly, Cal.com, Close, Pipedrive, Stripe, Whop, Shopify, Klaviyo, Typeform, Aircall, Fathom, Google Sheets, GA4 and a custom webhook). It matches the same person across tools, and builds metrics no single tool can: show-up rate, speed to lead, cost per held meeting, revenue per lead and close rate. Every number "shows its working".

All lessons below are **Inference**, mapped to the sourced patterns above.

1. **Your viral artifact is a number with receipts.**
   - A screenshot of a metric plus "records read / matched / excluded and why" is native proof content. That is the Bolt, Gamma and Granola pattern of output-as-marketing [10][13][16].
   - Product idea: an opt-in, privacy-safe shareable metric card with a small "made with Namzilabs" mark.
2. **33 sources are a content calendar and an SEO surface.**
   - Each source pair that produces a metric is a recipe: a template, a 20-second video and a search page. That is the n8n and Clay template pattern [41][21].
   - Start with the ~20 pairs your three audiences actually use.
3. **Lead with the five metrics buyers already argue about:** show-up rate, speed to lead, cost per held meeting, revenue per lead, close rate. Each gets a recipe carousel, a demo and a calculator.
4. **Build in public with Namzilabs' own funnel as the dataset.** Weekly receipts built *in Namzilabs* (GA4 + webhook + Stripe) are honest and on-brand, and teach the product [3][48].
5. **Founder first, creators later.** Gamma's founder did it himself before scaling creators, and found a 10/90 power law [13][15]. Run 30 to 60 days of founder content before paying creators or clippers [28][31].
6. **Three niches, one promise, three landing pages.**
   - E-com: Klaviyo/Shopify/Stripe.
   - Coaching sales teams: Calendly/Close/Stripe/Whop.
   - Creators: Whop/Thinkific/Mailchimp.
7. **Design for sends and copy-link shares.** Use "send this to your setter", copy-paste formulas and reference tables. These are the most heavily weighted positive actions [54][77][78].
8. **Remove friction in every CTA.** Put "Free to start, no card" everywhere. Put "Invite one person, get a month free" right after signup.
9. **Run a launch week every 6 to 8 weeks and re-launch** [39].
10. **Trend-jack with measurement.**
    - Topics: platform changes, clipping ROI (Whop is a live source), BFCM for e-com.
    - The AI/MCP angle only once it is live.
11. **Don't copy ragebait.** It buys views at the cost of heavy negative feedback [54] and trust [37].
12. **Keep claims disciplined.**
    - No testimonials until they're real.
    - Label demo data.
    - Advertise only live sources; ad platforms not yet approved stay off the list.
    - Mention MCP only once it's on.

**Evidence gaps to close later**
- Conversion rates for social → signup (measure your own).
- Comment-to-DM automation performance.
- Paid creator whitelisting benchmarks.
- A controlled test of X long posts vs threads.
- Current Meta and X automation policies.

---

## 9. Sources

1. Lenny's Newsletter, "Building Lovable: $10M ARR in 60 days with 15 people | Anton Osika." https://www.lennysnewsletter.com/p/building-lovable-anton-osika (primary interview)
2. nrich.io, "Lovable: PLG-first, community-forward playbook." https://nrich.io/challenger-brand-gtm-library/lovable (secondary)
3. Growth Talent, "Elena Verna: Growth innovation vs optimization at Lovable." https://www.growthtalent.org/insights/elena-verna-on-why-95-of-growth-is-now-innovation-not-optimization (secondary summary of interview)
4. Lenny's Newsletter, "The new AI growth playbook for 2026 | Elena Verna." https://www.lennysnewsletter.com/p/the-new-ai-growth-playbook-for-2026-elena-verna (primary interview)
5. High Output Work, "How Lovable went from $0 to $100M ARR in 8 months." https://highoutputwork.com/p/how-lovable-went-from-0-to-100m-arr-in-8-months (secondary)
6. TechCrunch (5 Jun 2025), "Cursor's Anysphere nabs $9.9B valuation, soars past $500M ARR." https://techcrunch.com/2025/06/05/cursors-anysphere-nabs-9-9b-valuation-soars-past-500m-arr/
7. Panto, "Cursor AI statistics 2026." https://www.getpanto.ai/blog/cursor-ai-statistics (secondary)
8. Digidai (Nov 2025), "Michael Truell: Cursor." https://digidai.github.io/2025/11/21/michael-truell-cursor-anysphere-fastest-growing-saas-deep-analysis/ (secondary)
9. Growth Unhinged, "How bolt.new hit $40M ARR in 5 months." https://www.growthunhinged.com/p/boltnew-growth-journey
10. Product Growth, "From near-shutdown to $40M ARR: how Bolt.new hacked its growth." https://www.productgrowth.blog/p/how-bolt-new-hacked-its-growth (secondary)
11. Sacra, "Bolt.new revenue, funding & growth rate." https://sacra.com/c/bolt-new/ (secondary)
12. Growth Unhinged, "Inside Replit's path to $100M ARR." https://www.growthunhinged.com/p/replit-growth-journey
13. SaaStr, "How Gamma hit $100M ARR with a team of 50: Grant Lee's top 4 lessons." https://www.saastr.com/how-gamma-hit-100m-arr-with-a-team-of-50-grant-lees-4-lessons-at-saastr-ai-2026/
14. Lenny's Newsletter, "'Dumbest idea I've heard' to $100M ARR: Inside the rise of Gamma | Grant Lee." https://www.lennysnewsletter.com/p/how-50-people-built-a-profitable-ai-unicorn (primary interview)
15. Runnax (May 2026), "How Gamma went from 'worst idea ever' to $100M ARR with 50 people." https://www.runnax.com/2026/05/10/gamma-content-growth-breakdown/ (secondary)
16. Adam Fishman, "How Granola grows." https://www.fishmanafnewsletter.com/p/how-granola-ai-grows
17. Startup Riders, "Granola's growth playbook." https://www.startupriders.com/p/granola-growth-playbook (secondary)
18. Product Marketing Adventures, "Go viral with customers like a Granola PMM." https://www.productmarketingadventures.com/podcast/granola
19. Clay, "Clay reaches $100M ARR: an eight-year overnight success." https://www.clay.com/blog/100m-arr (primary)
20. Clay Community, "Introducing Clay Clubs." https://community.clay.com/x/announcements/4ecni52vppu2/introducing-clay-clubs-your-hub-for-events--commun (primary)
21. Clay, Templates. https://www.clay.com/templates (primary)
22. Clay, "GTM engineering: what it is and how to hire." https://www.clay.com/blog/gtm-engineering (primary)
23. GTM Engineering, "Best Clay experts to follow & hire (2026)." https://gtm-engineering.io/blog/best-clay-experts (secondary)
24. Startup Riders, "Clay's growth playbook: 0 → $100M ARR in 36 months." https://www.startupriders.com/p/clay-growth-playbook-0-to-100m-arr (secondary)
25. Cal.com, "Series A memo." https://cal.com/blog/series-a-memo (primary)
26. Product Hunt, "How this open-source Calendly alternative rocketed to Product of the Day." https://www.producthunt.com/stories/how-this-open-source-calendly-alternative-rocketed-to-product-of-the-day
27. Cal.com, "2024 product recap." https://cal.com/blog/2024-recap (primary)
28. Whop Docs, "Content Rewards." https://docs.whop.com/memberships-and-access/third-party-apps/content-rewards (primary)
29. OpusClip, "What is Whop Content Rewards?" https://www.opus.pro/blog/whop-content-rewards (secondary)
30. Ascynd, "Whop clipping: what it is & what it pays (2026)." https://ascynd.io/en/blog/whop-clipping (secondary)
31. Steven Schwartz (@cultured) on X, "Whop is spending 90K / month on content rewards…" https://x.com/cultured/status/1909007308593811487 (primary)
32. Variety (2026), "What is 'clipping,' the viral marketing strategy that's taking over the music biz?" https://variety.com/2026/music/news/clipping-marketing-tool-took-over-music-industry-1236699705/
33. RockWater, "Tether invests $200M in Whop." https://wearerockwater.com/tether-invests-in-whop/ (secondary)
34. Forbes (26 Apr 2026), "The 'creator of clipping' who powers crypto gambling's viral machine." https://www.forbes.com/sites/boazsobrado/2026/04/26/the-creator-of-clipping-who-powers-stakes-viral-machine/
35. Forbes (11 Feb 2026), "Inside the 'clipping farms' driving fintech's marketing boom." https://www.forbes.com/sites/boazsobrado/2026/02/11/inside-the-clipping-farms-driving-fintechs-marketing-boom/
36. NPR (12 May 2026), "The clipping economy: how short-form video 'clippers' are overrunning the internet." https://www.npr.org/2026/05/12/nx-s1-5794670/influencers-creators-video-clips
37. TechCrunch (29 Oct 2025), "Cluely's Roy Lee on the ragebait strategy for startup marketing." https://techcrunch.com/2025/10/29/cluelys-roy-lee-on-the-ragebait-strategy-for-startup-marketing
38. Manyloud, "How Cluely built a $20M UGC machine." https://manyloud.com/blog/how-cluely-built-20m-ugc-machine (secondary)
39. Supabase (26 Nov 2021), "How we launch at Supabase." https://supabase.com/blog/supabase-how-we-launch. Read via its source file: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-11-26-supabase-how-we-launch.mdx (primary)
40. daily.dev, "How to run a developer tool launch week: lessons from Resend, Linear, and Supabase." https://business.daily.dev/resources/developer-tool-launch-week-run-lessons-resend-linear-supabase/ (secondary)
41. n8n, GitHub repository README (read 24 Sep 2026). https://github.com/n8n-io/n8n (primary)
42. Startup Riders, "n8n's growth playbook: 0 to $100M ARR." https://www.startupriders.com/p/n8n-growth-playbook (secondary)
43. Sacra, "n8n revenue, valuation & funding." https://sacra.com/c/n8n/ (secondary)
44. Young Zhao (@opusyoung) on X, "@OpusClip just turned 2!…" https://x.com/opusyoung/status/1934669166184943759 (primary)
45. daily.dev, "How I gained 5M users in just 7 months | OpusClip, Young Zhao." https://app.daily.dev/posts/how-i-gained-5m-users-in-just-7-months-opusclip-young-zhao-gvesxuex0 (secondary)
46. Startup Spells, "How OpusClip became the fastest growing AI video editing tool: $1M ARR in 14 days." https://startupspells.com/p/opusclip-ai-video-editing-tool-1m-arr-14-days (secondary)
47. Startup Founder Stories, "Opus Clip: $1M ARR in its first month after beta launch." https://startupfounderstories.com/stories/young-zhao-opus-clip (secondary)
48. Newsletter Operator, "Beehiiv's CEO breaks down his exact newsletter growth playbook." https://www.newsletteroperator.com/p/beehiiv-ceo-newsletter-growth-playbook
49. Marketer Gems, "beehiiv's founder-led growth marketing strategy." https://www.marketergems.com/p/beehiiv-founder-led-growth-marketing-strategy (secondary)
50. TechCrunch (2 Feb 2023), "Triple Whale raises $25M for its smart Shopify data platform." https://techcrunch.com/2023/02/02/triple-whale-raises-25m-for-its-shopify-data-platform/
51. Teardown, "Triple Whale: business model, traction, and outlook." https://www.teardown.ai/companies/triple-whale (secondary)
52. AJ Orbach (@AY_Orbach) on X, profile. https://x.com/AY_Orbach (primary)
53. xai-org/x-algorithm, README (open-sourced 20 Jan 2026; read 24 Sep 2026). https://github.com/xai-org/x-algorithm (primary)
54. xai-org/x-algorithm, `home-mixer/params/param.rs` (read 24 Sep 2026). https://github.com/xai-org/x-algorithm/blob/main/home-mixer/params/param.rs (primary)
55. xai-org/x-algorithm, `xai-value-model/scoring.rs` (read 24 Sep 2026). https://github.com/xai-org/x-algorithm/blob/main/xai-value-model/scoring.rs (primary)
56. X Engineering (@XEng) on X, "We have open-sourced our new 𝕏 algorithm…" https://x.com/XEng/status/2013471689087086804 (primary)
57. TechCrunch (20 Jan 2026), "X open sources its algorithm while facing a transparency fine and Grok controversies." https://techcrunch.com/2026/01/20/x-open-sources-its-algorithm-while-facing-a-transparency-fine-and-grok-controversies
58. PPC Land, "X's algorithm source code drops: what it reveals about the platform's feed mechanics." https://ppc.land/xs-algorithm-source-code-drops-what-it-reveals-about-the-platforms-feed-mechanics/
59. twitter/the-algorithm-ml, Heavy Ranker README (weights as of 5 Apr 2023). https://github.com/twitter/the-algorithm-ml/blob/main/projects/home/recap/README.md (primary)
60. Elon Musk on X (Oct 2025), "…Grok will literally read every post and watch every video (100M+ per day)…" https://x.com/elonmusk/status/1979217645854511402 (primary)
61. Elon Musk on X, "Another way of putting it is that the algorithm is trying to maximize probable long-term user-seconds." https://x.com/elonmusk/status/1872471275073085902 (primary)
62. Social Media Today, "X's algorithm is shifting to a Grok-powered AI model." https://www.socialmediatoday.com/news/x-formerly-twitter-switching-to-fully-ai-powered-grok-algorithm/803174/
63. Nikita Bier on X (Oct 2025), new link experience. https://x.com/nikitabier/status/1979994223224209709 (primary)
64. Nieman Lab (Oct 2025), "X makes overtures to journalists with new feature designed to improve reach for links." https://www.niemanlab.org/2025/10/x-makes-overtures-to-journalists-with-new-feature-designed-to-improve-reach-for-links/
65. Free Press Journal, "X product head Nikita Bier confirms link penalty removed over a year ago." https://www.freepressjournal.in/tech/x-product-head-nikita-bier-confirms-link-penalty-removed-over-a-year-ago-tells-mark-zuckerberg-he-can-post-them-directly
66. Buffer, "Does X Premium really boost your reach? An analysis of 18M+ posts." https://buffer.com/resources/x-premium-review/
67. Buffer on Threads, summary of the X Premium analysis. https://www.threads.com/@buffer/post/DPTkkf_iAa-/
68. Quasa, "X tests inline YouTube video playback in the feed." https://quasa.io/media/musk-s-quixotic-quest-against-external-links-draws-to-a-close-x-tests-inline-youtube-video-playback-in-the-feed (secondary)
69. Buffer, "The state of social media engagement in 2026: 52M+ posts analyzed." https://buffer.com/resources/state-of-social-media-engagement-2026/
70. Buffer, "Best content format on social platforms in 2026: 45M+ posts analyzed." https://buffer.com/resources/data-best-content-format-social-media/
71. Buffer, "Data shows Instagram Reels are best for reach, but not engagement." https://buffer.com/resources/instagram-reach-engagement-analysis/
72. Matt Navarra on Threads, summary of Buffer's 2026 engagement report. https://www.threads.com/@mattnavarra/post/DVigTdoCqZo/ (secondary)
73. Socialinsider, "2026 Instagram organic engagement benchmarks." https://www.socialinsider.io/social-media-benchmarks/instagram
74. Socialinsider, "Instagram Reels performance statistics for 2026." https://www.socialinsider.io/blog/instagram-reels-statistics/
75. Rival IQ, "2025 Social Media Industry Benchmark Report." https://www.rivaliq.com/blog/social-media-industry-benchmark-report/
76. Metricool, "Metricool and HypeAuditor unveil 2025 Instagram Content Playbook." https://metricool.com/press-release-instagram-content-playbook/
77. Social Media Today (Jan 2025), "Instagram shares algorithm insights to inform strategy." https://www.socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/
78. Influencer Marketing Hub, "Instagram 'sends per reach' playbook." https://influencermarketinghub.com/instagram-sends-per-reach-playbook/
79. Metricool, "Instagram Reel analytics: retention & skip rate explained." https://metricool.com/instagram-reel-analytics/
80. Inro, "Instagram insights update." https://www.inro.social/blog/instagram-insights-update-2025
81. MediaNama (Jan 2025), "Instagram extends Reels to 3 minutes as US TikTok ban looms." https://www.medianama.com/2025/01/223-instagram-reels-3-minutes-us-tiktok-ban/
82. Net Influencer (Jan 2025), "Instagram announces updates: 3-minute Reels and vertical grids." https://www.netinfluencer.com/instagram-announces-3-minute-reels-and-vertical-grids/
83. Meta Newsroom (Dec 2024), "Test content with non-followers using trial reels." https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/ (primary)
84. Storrito, "How Instagram trial reels work (72 hours)." https://storrito.com/resources/how-instagram-trial-reels-work-72-hours/ (secondary)
85. Social Media Today (Dec 2025), "Instagram implements new limits on hashtag use." https://www.socialmediatoday.com/news/instagram-implements-new-limits-on-hashtag-use/808309/
86. Digital Trends (Dec 2025), "Instagram now limits you to five hashtags per post." https://www.digitaltrends.com/social-media/instagram-now-limits-you-to-five-hashtags-per-post/
87. PPC Land (2025), "Instagram content becomes searchable on Google starting July 10." https://ppc.land/instagram-content-becomes-searchable-on-google-starting-july-10/
88. Tubefilter (30 Apr 2026), "Instagram has a new penalty for unoriginal content aggregators: no recommendations." https://www.tubefilter.com/2026/04/30/instagram-removes-algorithm-recommendations-repost-content-aggregator/
89. Instagram (Aug 2025), "New Instagram features: connect & share easily" (reposts, map, Friends tab). https://about.instagram.com/blog/announcements/instagram-new-features-connect-friends (primary)
90. Buffer, "Instagram post size guide 2026." https://buffer.com/resources/instagram-image-size/
91. Influencer Marketing Hub, "Instagram image sizes in 2026." https://influencermarketinghub.com/instagram-image-sizes/
92. Hootsuite, "How the TikTok algorithm works in 2026." https://blog.hootsuite.com/tiktok-algorithm/
93. Sotrender (Aug 2025), "8 strategies to navigate the TikTok algorithm changes in 2025." https://www.sotrender.com/blog/2025/08/tiktok-algorithm/
94. Sprout Social, "YouTube Shorts view count update, March 2025." https://support.sproutsocial.com/hc/en-us/articles/35874991211533-YouTube-Shorts-View-Count-Update-March-2025
95. PPC Land, "YouTube changes how Shorts views are counted from March 31." https://ppc.land/youtube-changes-how-shorts-views-are-counted-from-march-31/
96. DEV Community, "I read the X (Twitter) algorithm source for 4 days and built a Claude Code sub-agent that scores drafts before posting." https://dev.to/septim_labs/i-read-the-x-twitter-algorithm-source-for-4-days-and-built-a-claude-code-sub-agent-that-scores-1ipb
97. Growth Talent, "Elena Verna's growth machine: how Lovable broke every rule." https://www.growthtalent.org/insights/elena-verna-profile (secondary)
98. BabbleBoxx, "What's a good Instagram skip rate? 2026 benchmarks & fixes." https://www.babbleboxx.com/post/instagram-adds-reels-retention-skip-rate-what-influencer-marketers-should-do-next (secondary)
99. Socialinsider, "Social media reach statistics 2026: Instagram & Facebook." https://www.socialinsider.io/blog/social-media-reach/
100. Metricool, "Metricool's 2026 Instagram study reveals Reels and carousels are reshaping platform strategy." https://metricool.com/press-release-instagram-study-2026/
