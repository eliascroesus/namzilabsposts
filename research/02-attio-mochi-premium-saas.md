# Attio, Mochi and the premium-SaaS content formula

*Research file 02 for the Namzilabs content engine. Compiled September 2026.*

> **How to read this document**
> - Every figure, quote and date has a numbered source `[n]`. The list is in section 9.
> - Anything marked **Inference** is our own reading and was not reported by a source.
> - **Source types.** *Primary* sources are a company's own pages, posts or recorded interviews. *Secondary* sources are press, analysts and newsletters. *Third-party design teardowns* are public DESIGN.md files that reverse-engineer a site's CSS (colours, type, spacing); they give a useful signal but are not official brand guidance.
> - **Method:** the research combined web search, public podcast transcripts and public GitHub mirrors of company pages. The research environment blocked direct page fetches for most company sites. Claims that rest only on a search-engine extract are marked "(search extract)". Quotes from podcast transcripts were checked word for word against the transcript text. Dates for X and LinkedIn posts were decoded from the post IDs.
> - **Before republishing any figure or quote, open the source and check it.** Follower and engagement counts are snapshots from the time of research. Mochi's landing-page visuals could not be viewed directly (see 4.2).

## Contents

1. [Executive summary](#1-executive-summary)
2. [Name check: "Trackio" and "Mochi"](#2-name-check-trackio-and-mochi)
3. [Attio teardown](#3-attio-teardown)
4. [Mochi teardown](#4-mochi-teardown-themochiapp)
5. [Premium SaaS benchmarks](#5-premium-saas-benchmarks)
6. [The premium formula: a design and copy playbook](#6-the-premium-formula-a-design-and-copy-playbook)
7. [Lessons for Namzilabs](#7-lessons-for-namzilabs)
8. [What we could not verify](#8-what-we-could-not-verify)
9. [Sources](#9-sources)

---

## 1. Executive summary

- **"Trackio" is almost certainly Attio.**
  - No fast-growing SaaS brand called Trackio with a notable content engine turned up.
  - The name belongs to Hugging Face's open-source ML experiment tracker, to website templates and to a GPS app [1][2][3].
  - Attio sounds alike, is famous for design and content, and is one of Namzilabs' 33 live sources.
- **"Mochi" is themochi.app,** an Instagram DM sales workspace for setter teams: "Turn Instagram DMs into revenue" [4][5].
  - It is not Mochi Health, the Mochi flashcards app or the other Mochis.
  - Its buyers, coaches and creators with setters and closers, are one of Namzilabs' core segments.
- **Attio used taste as a weapon while it was behind on features.**
  - Analysts call its design a "strategic equaliser": it gave buyers a reason to choose Attio while it was still closing the feature gap with incumbents [6].
  - It paired design with building in public ("post even the smallest stuff") [7].
  - It frames itself as a new era of CRM rather than naming rivals: "new era", "next generation", then "agentic revenue" [8][9][10].
  - From late 2025 it added outdoor ads and brand campaigns [11][12].
- **Premium B2B brands run a steady rhythm, not one-off campaigns.**
  - Linear's head of product describes "50-ish weeks to say something" each year, plus 12 monthly and 4 quarterly moments [13].
  - Raycast's CEO calls it a "compound effect" of tweets, releases and bug fixes [14].
  - A third-party tracker of launch videos logged about two official product clips a week from both Notion and Linear on X in August and September 2026. Each showed one feature, and Notion's ran about 5 to 40 seconds [15].
- **The changelog doubles as marketing.**
  - Linear writes each entry as a short product story with a headline, a narrative and a visual [16]. Its launch pages embed wide videos of the real product [17].
  - Raycast posts "the changelog, the visual stuff" on X [14].
  - Mochi merges product updates with customer results: "Product Updates & Customer Wins" [18].
- **They sell a feeling, not a database.**
  - Arc aims for "surprise or joy" so that users share screenshots [19].
  - Attio's 2026 campaign centres on celebrating a win (search extract) [12].
  - Granola's founder says it wins because "it's a thing that doesn't get in your way and that people like spending time in" [20].
- **Restraint follows rules.** Each brand keeps its interface neutral, uses one accent colour sparingly, prefers thin lines to shadows, and uses a serif face in at most one place [21][22][23][24][25]. Namzilabs' single Instrument Serif word per headline already follows this pattern.
- **Data products look premium when the data supplies the colour and every number can be opened.**
  - The pattern: a single number, a chart or a table, each with a comparison, and a click-through to the records behind it [26][27][21].
  - Namzilabs' "shows its working" goes further than any benchmark here.
- **The premium look is now easy to copy.**
  - A GitHub collection of reverse-engineered design systems for Linear, Notion, Raycast and others has more than 117,000 stars [28].
  - **Inference:** looking like Linear no longer sets a brand apart. A point of view and proof still do, and Namzilabs' receipts provide both.
- **Instagram is an open lane.**
  - We found no evidence that any of the premium B2B benchmarks treats Instagram as a main channel.
  - Mochi sells software to coaches through Instagram [5][29].
  - **Inference:** Namzilabs must translate the premium formula into Reels and carousels, not only X threads.

---

## 2. Name check: "Trackio" and "Mochi"

### 2.1 "Trackio"

| Candidate | What it is | Content brand? |
|---|---|---|
| Hugging Face **Trackio** | Free, local-first, open-source Python library for tracking ML experiments. GitHub repo created May 2025; about 1.7K stars at the time of research [1][30] | A developer tool. No sign of a marketing or content engine |
| **Trackio** templates | Website templates sold on UI8 and Webflow template sites [2][31] | A demo brand for a template, not a company |
| **TRACKIO** GPS | GPS tracking app for vehicles and assets on Google Play [3] | A niche utility app |

**Conclusion.** The founder almost certainly meant **Attio**. It sounds similar, it is a fast-growing SaaS brand known for design and content, and it is one of Namzilabs' live sources. Confidence: high.

### 2.2 "Mochi" / themochi.app

| Candidate | What it is | Fit with the brief |
|---|---|---|
| **Mochi (themochi.app)** | "One Workspace for Instagram DM Sales": a smart inbox, AI follow-ups and team tracking for setter teams. It calls itself an Official Meta Business Partner [4][5] | **Exact domain match**, and the same audience as Namzilabs (coaches with setters and closers) |
| Mochi (flashcards) | Flashcards and notes app [32] | Different domain and audience |
| Mochi Health | Telehealth for GLP-1 weight care [33][34] | Consumer health; different domain |
| MOCHI (mochi.global) | Growth software and an AI studio for SMEs, based in Malaysia [35] | Different market |
| MOCHI (get-mochi.com) | "AI Soul Companion" consumer app [36] | Consumer AI companion |

**Conclusion.** The brief pointed to themochi.app, and that domain belongs to the Instagram DM sales workspace. Confidence: high.

We could not confirm that its landing page is well known outside the setter and coaching niche. **Inference:** its pull comes from being highly relevant to that niche, not from design-press fame.

---

## 3. Attio teardown

### 3.1 Snapshot and milestones

| Date | Milestone | Source |
|---|---|---|
| 2019 | Founded in London. Nicolas Sharp is CEO and co-founder; Alexander Christie is CTO and co-founder (search extract) | [37][12][7] |
| About 3 years before launch | Built a new data model heads-down; "weren't in stealth but also weren't doing marketing" (search extract) | [38] |
| Before launch | The waitlist "ballooned to several thousand" (search extract) | [39] |
| Mar 2023 | $23.5M Series A. The press release was headlined as ushering "in a New Era of CRM" | [40][8] |
| Aug 26, 2025 | $52M Series B led by GV; 5,000 customers including Lovable, Granola, Modal and Replicate; "on track to 4x ARR"; $116M raised to date. Attio dated its launch to "two years ago" | [41][42] |
| Oct 1, 2025 | First outdoor ads in London, shared by the founder | [11] |
| Feb 4, 2026 | Launch of Ask Attio, a chat assistant that can answer questions and act on everything in the CRM. Same day, a third party reported the customer base had tripled to 7,000+ in a year | [43][44][45][46] |
| First half of 2026 | Fast AI releases: an MCP server (so outside AI assistants can connect), a web research agent, natural-language actions and AI-agent workflows (third-party review) | [47] |
| 2026 | Homepage positioning: "The CRM for agentic revenue" | [10] |
| 2026 | Brand campaign "What AI can't change" (search extract) | [12] |

**Customer counts differ by source.**
- How They Grow reported growth "from 2,000 to 10,000 customers since their public launch, including OpenAI" (search extract) [38].
- Attio's own Series B post says 5,000 customers [41].
- The two probably count different things, for example workspaces versus paying customers. Quote Attio's own figure.

### 3.2 Positioning against Salesforce and HubSpot

- **Era language instead of attacking rivals.** Attio's framing has moved in steps, and it hints at incumbents with words like "next", "new" and "modern" instead of naming them:
  - 2023: "a New Era of CRM" (Series A release) [8];
  - "next generation" landing pages [9][48], and "The new era of CRM" on its demo page [49];
  - 2025: "the AI-native CRM for the next era of companies" [42][41];
  - 2026: "The CRM for agentic revenue" [10].
- **Paid ads are openly challenger.** A study of 248 Attio ad creatives summed up the positioning as "We are taking on the old guards" and "Switch to modern CRM for the AI era". The ads aimed at competitors' users used social proof: logos of fast-growing startups, user praise and headlines that call out Attio's stand [50].
- **The product design is the argument.** The founder's thesis: "CRM needed to be rebuilt around unstructured data. Not structured fields or rigid schemas, but the messy reality of how GTM works" [43].
- **The incumbent noticed.** HubSpot publishes its own "HubSpot vs Attio" comparison page [51]. **Inference:** this shows Attio became a recognised alternative.
- **Customer logos stand in for enterprise proof.** The Series B post names AI-era companies (Lovable, Granola, Modal, Replicate) [41].
  - **Inference:** "the CRM the next generation of companies picks" does the positioning work. The incumbents are left to look like the previous generation.

### 3.3 A design-led brand

- **Design as strategy.** Strategy Breakdowns describes several parts (search extract) [6][52]:
  - "world-building", which creates "a desire to spend time in the platform";
  - design as a "strategic equaliser" while Attio closed the feature gap;
  - screens that reveal more as you click or hover;
  - one design system, with the same buttons, menus and hover effects everywhere.
- **Guidelines.** Attio publishes brand guidelines and a press kit, and uses the wordmark as the default form of the logo (search extract) [53].
- **A witty tagline.** "Customer relationship magic." turns the letters CRM into something with feeling [54]. A trademark listing for Attio Limited includes the phrase (search extract) [55].
- **Visual system (third-party teardown; a signal, not official guidance)** [21]:
  - **Type:** Inter Display for headings with tight letter spacing, Inter for the interface, and **Tiempos Text, an editorial serif, used sparingly**.
  - **Colour:** near-white and near-black greys, and one electric blue kept for links, selection and focus.
  - **Status and data:** green, red and yellow only for status, thin lines rather than shadows, typed cells on 1px grids, and a small four-segment "connection strength" meter.
  - **Guiding rule:** "let the data be the color."
- **Data screens are designed, not just built.** Attio shipped "Reporting 2.0" with "beautiful refreshed designs" (search extract) [56].
- **Moments of craft.**
  - Attio's February 2026 changelog describes a new Ask Attio page with sound design and an animated library of example prompts (search extract) [57].
  - Attio posts motion design from the product, such as onboarding animations, on Dribbble [37].

### 3.4 Launch films, launches and brand campaigns

- **We could not find "Attio 2.0".** No release with that name turned up; the nearest match was "Reporting 2.0" [56]. The "next era" framing appears in funding announcements and landing pages [42][48]. Ask the founder for the exact film link before quoting it.
- **How the Ask Attio launch was built (Feb 2026):**
  1. A founder post on X and LinkedIn, calling it "one of the biggest moments in our company's history" and restating the founding bet [43].
  2. A blog post [44].
  3. A dedicated product page with sound design and animated example prompts [57].
  4. Same-day coverage by others carrying the growth milestone (customers tripled to 7,000+) [45].
- **Outdoor ads.** The founder shared the first London ads: "Proud to see @attio ads in London, the city I love and I'm lucky to call home" [11].
- **2026 brand campaign.** "What AI can't change" (search extract) [12]:
  - It avoids adding to AI hype. Instead it asks what stays the same, and centres on celebrating a win.
  - Line: "The work changes. The celebration doesn't." (as quoted in the search extract).
  - Marketing and Attio's in-house Studio team wrote the copy and made the visuals together, working through more than 250 iterations.
  - The aim was to express ambition without trying to explain the whole product on a billboard.

### 3.5 How Attio posts on X and LinkedIn

- **Building in public.** Attio turns the by-products of building (its "sawdust": chats, requests, feedback) into public posts. Strategy Breakdowns quotes its CTO: "We post even the smallest stuff because every update counts. The more you inform, the more 'compound interest' you create." (search extract) [7]
- **The founder tells the story.** CEO Nicolas Sharp posts milestone and launch stories on X and LinkedIn [43][11][58][59]:
  - the Series B, Ask Attio and the London ads;
  - nostalgic posts such as "We launched Attio in this office…";
  - a founder Q&A with a strategy newsletter.
  - Investors amplify him too; GV featured him on LinkedIn in April 2026 [60].
- **The company LinkedIn page** announces launches plainly: "This week we launched…" (for example, Call Intelligence in April 2025) [61].
- **Paid social at volume.** By December 2024, 248 ad creatives had been analysed, built from 4 templates. They included social proof aimed at competitors' users, and ads driving traffic to landing pages with in-depth thought-leadership resources [50].
  - **Inference:** the organic posts look calm and premium, but heavy, systematic ad testing runs behind them.
- **Where growth came from.** In 2024, Aakash Gupta interviewed 14 people. He reported that Attio grew mainly through inbound: organic search and partnerships with creators. About half of revenue was self-serve and half sales-assisted (search extract) [62][63].

### 3.6 Content pillars (Inference, based on the evidence above)

| Pillar | What it looks like at Attio | Evidence |
|---|---|---|
| Product releases | Changelog, launch pages, founder launch posts | [57][43][61] |
| Point of view | "AI & the next generation"; the unstructured-data thesis; "new era" framing | [48][43] |
| Education | Attio Academy videos, a templates library, a help centre | [64][65] |
| Ecosystem | Creator Program; Experts directory (Core, Advanced and Elite tiers); app partners | [66][67][68] |
| Social proof | Logos of AI-era customers; analyst deep dives | [41][62] |
| Brand | Outdoor campaigns, the tagline, craft from the in-house Studio | [11][12][54] |

### 3.7 How Attio demos the product

**What we could verify:**
- Demos show the real product, as in the Attio Academy tours [64].
- Motion pieces focus on flows such as onboarding [37].
- Launches add sensory craft, such as sound and animated example prompts [57].

**Inference:** demos reveal the product one layer at a time: one record, then one view, then one automation. This matches Attio's rule of showing more only as you click or hover [6].

### 3.8 Community, templates and creators

- **Templates:** a library covering sales, customer success, recruiting and fundraising (search extract) [65].
- **Creator Program:** for "leading GTM voices". It offers a free workspace, content promotion and co-marketing (search extract) [66][68].
- **Experts Program:** partners move through Core, Advanced and Elite tiers, with revenue share and a public directory [67].

### 3.9 What to take from Attio, and what not to copy yet

**Take:**
- the "new era" framing, without naming competitors;
- building in public, including small updates;
- a founder story for every launch;
- an in-house standard for craft: sound, motion, prompt libraries;
- templates and creator programmes as distribution.

**Don't copy yet:** logo walls and ads aimed at competitors' users. Namzilabs has no customer logos. Show proof from the product itself instead (see section 7).

---

## 4. Mochi teardown (themochi.app)

### 4.1 What it is

- **The pitch.** Mochi gives a team one workspace to "manage Instagram conversations, prioritize buyers, follow up faster and see what is actually happening in your inbox" [4].
- **The docs** (search extract) say it turns the Instagram DM inbox into "a managed, tracked sales operation". Every conversation, lead and booked call sits in one place, "with an AI setter helping your team reply faster and a dashboard showing exactly where deals are won or lost" [69].

**What the product does (from search extracts of Mochi's own pages and docs):**
- **Inbox:** the AI suggests the next reply. The team decides when AI assists and when it takes over [4].
- **Voice notes:** a setter types a message and Mochi sends it as a voice note in the founder's voice. The "Scenes" feature adds matching background sound, such as a restaurant, a car or a gym [4][70].
- **Automations:** DMs triggered by comments, keywords, stories and ads, with scripts that can be split-tested [4].
- **Lead Management, a "control center":**
  - filter by date, setter, tag or payment status;
  - reassign or update leads in bulk [71].
- **Team Chat:** the context for each lead lives in one thread [72].
- **Dashboards:**
  - top-line counts (new leads, qualified, booked calls, won) and a funnel;
  - a performance view per team member;
  - views by role for creators, managers, setters and closers [69].
- **Built for AI assistants:**
  - A read-only connection to Claude through MCP, exposing setter and closer KPIs, funnel tracking and team comparisons. "Raw message transcripts are never exposed" (search extract) [73].
  - A read-only command-line tool for Mochi's public API, published on GitHub in August 2026. It covers analytics (response times, reply rate, funnel, messages, team, links, benchmarks), revenue and bookings [74].
- **Platforms and extras:**
  - web, plus an iOS app in beta (search extract) [4];
  - a Zapier integration [75];
  - an affiliate programme [76].

### 4.2 Landing page and messaging

**What we could verify (copy and structure):**
- **Page title:** "Mochi | One Workspace for Instagram DM Sales" [4].
- **Instagram bio:** "Turn Instagram DMs into revenue. Smart inbox, AI follow-ups & team tracking". It carries an "Official Meta Business Partner" badge and offers a free trial (search extract) [5].
- **Pricing page headline:** "Simple pricing for your DM sales flow." [77].
- **Demo page title:** "Mochi Application Form". Visitors apply rather than just book, a gate that is common in high-ticket sales [78].
- **Blog framing:** "Product Updates & Customer Wins" [18].

**What we could not verify:** the visual design itself (colours, type, layout, motion), because the site could not be fetched.
- **Recommendation:** capture full-page screenshots of themochi.app on desktop and mobile, and add a visual teardown to this file.
- Record the hero layout, how product shots are treated, the section order, the proof shown and the call-to-action pattern.

**Inference: why the page lands with its audience.**
- It uses the audience's own words: setters, closers, booked calls, DMs.
- It promises one outcome: revenue from DMs.
- It replaces many tools with "one workspace".
- It shows the product doing the job: inbox, voice notes, dashboards.
- Namzilabs needs the same moves.

### 4.3 Content and growth tactics

1. **A founder origin story.** The essay is titled "Why I Built Mochi (And Why You're Probably Leaving $500K in Your DMs)" (search extract) [79].
   - It tells a pain story about "Airtable forms, screenshots, and end-of-day updates".
   - It describes a system that collapsed when a setter quit.
   - The author describes running "an 8-figure operation with tools that felt like duct tape".
2. **The changelog as proof.** Feature posts include a customer result. For example, the first client to try Lead Management "reassigned 183 leads in eight minutes" (company claim) [71].
3. **Named, sensory features.** "Scenes" gives voice cloning a story (restaurant, car, gym). Mochi calls it the most-requested feature in its history (company claim) [70].
4. **Distribution led by a creator.** Third-party sources link Mochi to Nik Setting, who teaches Instagram selling [80][81][82][83]:
   - A competitor's page says Mochi comes "packaged with monthly coaching from Nik Setting".
   - A Forbes contributor article frames the product around his "Profile Funnel" method.
   - Search indexes showed about 3,000 followers on the brand's Instagram and about 191,000 on his account. Both are snapshots; verify them live [5][29].
   - **Inference:** Mochi reaches people mainly through the creator's audience and community (a Skool group is linked to him too [84]), not through its brand account.
5. **Coverage in a business outlet.** A Forbes contributor article (Feb 2026) reports Mochi customer anecdotes. They are not independently checked (search extract) [80]:
   - moving a calendar link raised bookings by 30%;
   - reworked follow-ups raised reply rates by 60%;
   - emojis went with lower conversion.
6. **A YouTube explainer:** "Mochi: Infrastructure SaaS for Setter Teams" [85][86].
7. **Sales-led gating.** Competitor pages claim Mochi requires a demo call and starts around $997 a month, with 6- and 12-month prepaid tiers. These claims come from competitors and are unverified; we could not read Mochi's own pricing page [81][77].

### 4.4 What makes Mochi distinctive

- **It speaks the audience's language.** Words like setters, closers, booked calls and DMs make it feel like infrastructure for this exact job, not a generic CRM.
- **Money comes first.** The headline outcome is revenue, and the pain is given a number ("rotting in their DMs") [79].
- **It is ready for AI assistants.** A read-only MCP connection, a command-line tool and an API, all described in privacy-conscious terms [73][74]. This compares directly with Namzilabs' MCP plans.

### 4.5 Cautions for a "receipts" brand

- **Unverifiable headline numbers clash with the Namzilabs tone.** "$500K in your DMs", "3x" and "$40K rotting" are the company's own claims [79][70]. Namzilabs should never use this device without its own receipts.
- **Tying a product to a creator cuts both ways.** It brings reach, but it links the software brand's reputation to one personality. **Inference.**

### 4.6 What this means for Namzilabs

**Inference:**
- **Different scope.** Mochi manages and measures the **DM conversation**. Namzilabs measures the **whole funnel across tools**: booking, show-up, call and payment.
- **Overlap.** The two share an audience (coaches with setter teams), and both lean on MCP.
- **The opening.** Namzilabs can be the neutral "receipts layer" across calendars, CRMs, dialers and payments, which a DM tool alone can't see.
- **Caution.** Mochi is not one of the 33 live sources, so keep any talk of an integration hypothetical.

---

## 5. Premium SaaS benchmarks

### 5.1 Linear

**Signature formats**

- **The Linear Method,** a public set of practices for building products [87].
  - Karri Saarinen (co-founder and CEO): "my design mantra is always design something for someone".
  - The product aims to "provide this good default or good opinions", so teams "don't have to think about it" [88].
- **The changelog.**
  - Each entry is written like a short blog post, with a headline, a story and a visual, not a list of changes [16].
  - One practitioner calls it "a product-marketing surface with a design team behind it" [89].
  - Launch pages embed wide videos of the real interface. The linear.app/next page embeds a 1920×960 "Ask Linear" changelog video, and links to the Linear Agent changelog entry and a YouTube film [17][90].
- **Manifesto launch pages.** linear.app/next opens with "Issue tracking is dead." It argues that "Overhead kept growing, and the process became the work" and that "the best systems remove overhead so teams can focus on building" [91][17].
- **Design essays on its "Now" blog.** A mirror of the blog's feed lists, among others [92]:
  - "A design reset (part I)" (Mar 2024);
  - "Design for the AI age" (Apr 2025);
  - "A Linear spin on Liquid Glass" (Oct 2025);
  - "Best practices for designing Linear Dashboards" (Oct 2025);
  - "Design is more than code" (Dec 2025);
  - "A calmer interface for a product in motion" (Mar 2026);
  - "Output isn't design" (Apr 2026).
- **Short launch clips on X.** A third-party tracker logged about two official clips a week in August and September 2026 [15], for example:
  - Loops scheduling;
  - Customer Requests;
  - Agent reactions;
  - a customer story with Ramp;
  - a rebuild of its sync engine, with a technical explainer.

**Why the demos feel premium**

- **They show the real product.** Clips are wide and sharp, one feature each.
- **Launches keep a deliberate rhythm.** Nan Yu, head of product: "you get to have 50-ish weeks to say something to your audience once a week, or you get to have 12 months to say something really big or four quarters to say something huge. If you miss one of those opportunities, you don't get it back again." [13]
- **Brand is built by behaviour.** Karri: "you create it over time by the things you do, the things you say, how you say them and how do you approach things, how do you treat customers, how do you build the website or the product" [88].
- **Good design is the minimum.** Karri: "you need pretty high level design for people to even pay attention or consider you seriously" [88].
- **Linear hires for taste.** Karri wants marketers who are "a good storyteller or they have this appreciation for writing or stories or they have a taste of what's interesting and what's not" [88].

**Motion and visual language**

- **Design tokens (third-party teardown, checked July 2026)** [25]:
  - a dark-first background (#08090a) with near-white text and a narrow range of greys;
  - one indigo brand colour (#5e6ad2);
  - Inter Variable with tight negative letter spacing;
  - fully rounded, pill-shaped main buttons.
  - The teardown sums it up as "precision as atmosphere".
- **The 2026 redesign,** "A calmer interface for a product in motion", as summarised by third-party design notes [93][94][95]:
  - navigation steps back;
  - fewer icons and borders;
  - warmer neutral greys;
  - elements shouldn't compete for attention they haven't earned;
  - structure should be felt rather than seen.

**Channel mix**
- **X:** frequent official product clips, about two a week in the tracker's logs [15].
- **Owned hubs:** the changelog and the "Now" blog [96][92].
- **YouTube:** hosts launch films; the linear.app/next launch page links to one [17].
- We found no evidence on Instagram or LinkedIn.

**Lesson for data products**
- Linear's dashboards combine data "into a single view", using "charts, tables, or single-number metrics".
- Per Linear, more than half of enterprise workspaces were using at least one within months of the July launch [26][97].
- A third-party note sums up Linear's guidance [27]:
  - give each dashboard a clear purpose;
  - match it to its audience;
  - show a comparison;
  - keep daily dashboards compact.
- The same note says you can click a data point to see the underlying issues, already filtered [27].

### 5.2 Arc / The Browser Company

**Signature formats**

- **YouTube as a central brand channel,** including building in public "uncomfortably so".
  - Lenny describes cameras brought into board meetings and a half-hour design meeting shared publicly.
  - The company's best-performing video at the time was "a reaction video in classic YouTube form to MKBHD talking about our product for the first time" [19].
- **Unusual teams built around stories.** Josh Miller (CEO): "We have a membership team and we have a storytelling team." Lenny ties the storytelling team to how good the videos are [19].
- **Makers get the credit.**
  - "whenever we ship something, we go out of our way to celebrate the people that worked on it publicly."
  - Even a new designer joining was treated as news: "That's a product launch. That is the product launch." [19]
- **Release notes as a way to build in public** [98].
- **A values page written as "a manual for how to take a road trip"** [19].

**Why it felt premium**

- Josh Miller: "Don't optimize for metrics, don't optimize for graphs… We're there to make people feel something." [19]
- On choosing the feeling: "if you pick the right feeling, it typically tracks pretty closely with the metric you care about" [19].
- At the time (2023), Arc had no growth team. Features aimed for "surprise or joy", and people then "start telling their friends and family about it, and they start dropping a screenshot in Slack" [19].
- Josh framed building in public as "radical trust building" [19].

**Visual language (third-party teardown, July 2026)** [23]
- Warm cream backgrounds (#FFFCEA) and dark mode in an indigo-tinted near-black.
- One indigo main colour (#3139FB).
- Rainbow gradients kept for "Spaces", Arc's colour-themed workspaces.
- A rounded display font (Marlin Soft), with Inter for the interface.
- Tone: "warm, human, a little whimsical", and "not a corporate blue".

**Outcome** [99][100]
- Arc launched invite-only. Scarcity and word of mouth drove early adoption (secondary source).
- Atlassian agreed to buy The Browser Company (maker of Arc and Dia) for about $610M in cash, announced September 4, 2025.

**Channel mix**
- **YouTube:** a central brand channel.
- **X:** team members get tagged and credited, as in "Sherry made that, Sherry's incredible" [19].
- We found no evidence on Instagram or LinkedIn.

### 5.3 Raycast

**Signature formats**

- **Changelog visuals on X.** Thomas Paul Mann (CEO): "I think the easiest is just Twitter. That's where we're most active… that's where we put out the changelog, the visual stuff." [14]
- **YouTube through a team called "Hype".** "a mix of a marketing and growth team… YouTube became a big part of the strategy" [14].
- **An open-source extension store on GitHub.** The raycast/extensions repo had 7,769 stars and 6,958 forks at the time of research [101][14].
- **Customer care in the open.** "We answer every email we get… Even though sometimes the answer is 'Yes, thanks for the feedback. We're not building it.'" [14]

**Why the rhythm matters**
- "I'm a huge fan of compound effect. Every tweet you put out, every release you do, every bug fix you do, every podcast appearance you do… when you release every two weeks, when you tweet multiple times a week… those things will make a difference." [14]

**Visual language (third-party teardown, checked May to June 2026)** [22]
- A near-black background (#07080a).
- One "Raycast Red" accent (#FF6363) that "functions as punctuation": hero stripes and error states.
- Inter as the typeface.
- Layered, macOS-style shadows and 3D-looking keyboard keys.
- Hover states that change opacity over about 150 milliseconds.

Raycast also publishes its redesigns as blog posts: "A fresh look and feel" and "The New Raycast" [102][103].

**Channel mix**
- **X:** the main channel.
- **YouTube:** growing.
- **GitHub:** home of the extension community [14][101].
- We found no evidence on Instagram or LinkedIn.

### 5.4 Notion

**Signature formats**

- **Community and creators drive growth.**
  - The ambassador programme started in 2019 with "just 20 people", "the 20 people who we happened to see be the most vocal already across Twitter and a couple of other social media platforms".
  - New members were later added "20 people at a time every month" to keep the community healthy [104].
- **A template economy.**
  - Camille Ricketts (former head of marketing): "probably mid 2021 we heard of one creator who had made $35,000 in four months selling one template" [104].
  - Ivan Zhao (CEO): "people in our community can create a living selling Notion template, Notion apps" [105].
  - Notion runs its own template marketplace [106].
- **Influencer and YouTube partnerships, plus communities run by users** [104]:
  - influencer sponsorships were "incredibly measurable": "we know that people came from that content directly to the Notion website";
  - a Notion Vietnam Facebook group with about 250,000 members;
  - a subreddit with about 210,000 members (figures as of the December 2022 interview).
- **Short official clips on X in 2026.** A third-party tracker logged about two a week in August and September 2026. They ran about 5 to 40 seconds with one feature each, for example Skills, moving AI memory across tools with MCP, and AI Meeting Notes [15].
- **Content-market fit.** Camille: "The way that you think about product market fit, you have to think about content market fit." The brand team's key metric was "net new visitors to the Notion website" [104].

**Why it feels like a consumer brand**
- **"Sugar-coated broccoli."** Ivan Zhao: "People don't want to eat the broccoli but people like sugar, so give them the sugar then hide the broccoli inside of it."
  - The broccoli is a deep capability, "a Lego for software", wrapped in a familiar productivity tool [105].
- **Personal use leads to work use.** Notion calls this strategy "B2C2B". Ivan: "Half our B2B customers coming from prior personal users" [105].

**Visual language (third-party teardown, July 2026)** [107]
- Stripped back: a white background, near-black type and one blue for actions (#0075de).
- Flat cards with 1px borders.
- The teardown's summary, "white canvas, near-black type", lets users' own content carry the personality.

**Channel mix**
- **X:** short clips and community.
- **YouTube:** creator partnerships.
- **Community:** groups, the subreddit and templates [104][15].
- In this research pass we found no direct evidence on Instagram or LinkedIn.

### 5.5 Granola

**Signature formats**

- **Founder podcasts and essays.** On one podcast, host Peter Yang summarised a principle of Chris Pedregal, Granola's CEO, as "you should build products that feel like they have a soul" [20].
- **A long closed beta, then launch.** Chris: "we were in closed beta for a year… by the end it was like 100 people that we were building with but we started off with three" [20].
- **Organic launch first.** A third-party compilation citing Granola's own posts and podcasts says it launched through Product Hunt and the founder's own X account in May 2024. Paid social came later [108].
- **Contrast with meeting bots.** "there's not a bot that joins your meeting… it's an app on your computer… it looks like Apple notes" [20].

**Why it feels premium**
- Chris: "it's a thing that doesn't get in your way and that people like spending time in" [20].
- **Hidden craft makes it feel simple.** "we had to like roll our own Echo cancellation", work that "has nothing to do with… the core like note writing" but "had all everything to do with granola just being the seamless thing you don't have to think about" [20].
- **Retention.** Chris said in January 2025: "70% of people come back the next week" [20].

**Visual language (third-party teardown)** [24]
- Warm, paper-like off-white (#f7f7f2).
- Olive and lime accents.
- A display serif (Quadrant) used only for large headlines and quotes.
- A humanist text face (Melange).
- Barely any shadows.
- Mood: "Calm, organic, analogue-adjacent."

**Connections**
- Granola is an Attio customer [41].
- Granola, Linear and Raycast have all been part of the free-product bundle for Lenny's paid newsletter subscribers, a way to reach buyers through a creator [109].

**Channel mix**
- **X:** founder-led.
- **Podcasts** and, later, **paid social** [108].
- We found no direct evidence on Instagram, or of YouTube as a main channel.

### 5.6 Side-by-side comparison

| Brand | Signature format | How demos feel | Visual and motion language | X | Instagram | LinkedIn | YouTube |
|---|---|---|---|---|---|---|---|
| Attio | Founder launch posts, building in public, templates, outdoor ads | Real product, revealed a layer at a time; sound and animated prompts | Neutral greys, one blue, lines over shadows, a serif used sparingly | Founder and brand posts | No evidence | Launch posts, founder posts, heavy ads | Academy tutorials |
| Mochi | Founder essay, updates as customer wins, named features | The product doing the specific job (inbox, dashboards) | Not observed (verify) | No evidence | **Central** (brand and creator) | No evidence | Explainer |
| Linear | The Method, changelog films, manifestos, design essays | Wide clips of the real product, one feature each | Dark, narrow greys, one indigo, calm | Frequent official clips (about two a week logged) | No evidence | No evidence | Launch films |
| Arc | Building-in-public videos, credit for makers, release notes | Driven by personality and people | Warm cream, indigo, gradients only for Spaces | Tags the maker | No evidence | No evidence | **Central** |
| Raycast | Visual changelog, YouTube from the "Hype" team, open extension store | Keyboard-first, feels native to the Mac | Near-black, red used sparingly, tactile keys | **Main channel** | No evidence | No evidence | Growing |
| Notion | Ambassadors, templates, creators, short clips | A familiar tool hiding deep power | White background, near-black type, one blue | Clips and community | No evidence (this pass) | No evidence (this pass) | Creator partnerships |
| Granola | Founder podcasts, "soul", contrast with meeting bots | "Looks like Apple notes" | Warm paper, olive, a display serif | Founder-led | No evidence | No evidence | No evidence |

Sources for every cell are cited in sections 3 to 5.

---

## 6. The premium formula: a design and copy playbook

### 6.1 What makes B2B software content feel like a consumer brand

1. **Pick a feeling, then make every post produce it.**
   - Arc found that the right feeling tracks the business metric [19].
   - Attio built a campaign around celebrating a win, not around the workflow (search extract) [12].
   - **Namzilabs (Inference):** the feeling to aim for is relief backed by proof: "finally, a number I can trust".
2. **Give the brand real people.**
   - Founders tell the story of each launch [43][79].
   - The people who built a feature are named [19].
   - Every email gets an answer [14].
3. **Build one consistent world.**
   - Attio uses one design system everywhere [6].
   - Brand is built by "the things you do, the things you say, how you say them" [88].
4. **Replace campaigns with a rhythm.**
   - Small weekly releases, bigger monthly ones and major quarterly ones [13].
   - Small, frequent posts that add up [14][7].
   - Short clips: Notion's logged X clips ran 5 to 40 seconds [15].
5. **Name the philosophy.** The Linear Method [87], "Lego for software" [105], a product with a "soul" [20], "Issue tracking is dead." [91].
6. **Show craft in details people don't expect.**
   - Sound design and animated example prompts [57].
   - A values page written as a road-trip manual [19].
7. **Let the community earn status or income.** Templates, creator programmes, expert directories and extensions [104][67][101].

### 6.2 How to show a data product beautifully

1. **Keep the interface neutral and let the data carry the colour.**
   - Use colour only for status and direction: "let the data be the color" [21].
   - Keep a narrow range of greys [25].
2. **Use three building blocks: a single number, a chart and a table.** Choose the one that fits the question [26].
3. **Always show a comparison** (against last period, target or another group), and keep daily views compact [27].
4. **Let every number open.** Click through from a total to the records behind it [27].
   - This is already Namzilabs' core behaviour ("shows its working"). Make it the hero shot.
5. **Use typed cells on thin grids, colour-coded tags and small meters,** not heavy cards and shadows [21].
6. **Show the real product in marketing:** wide, sharp clips with one feature each [17][15].
7. **Use motion to show cause and effect (Inference).** Sources arrive, records match, excluded records drop away with their reasons, and the number appears last. The viewer watches the metric being earned.
8. **Use honest demo data (Inference, and a brand requirement).** Label it "Demo workspace". Never imply customer results.

### 6.3 How they use restraint

- **One accent colour, used sparingly:**
  - Raycast's red [22];
  - Attio's blue, kept for focus and selection [21];
  - Arc's single indigo, with gradients only for Spaces [23].
- **One serif moment.**
  - Attio uses Tiempos sparingly [21].
  - Granola keeps its serif for large headlines and quotes [24].
  - Namzilabs' one-italic-word rule fits the same pattern.
- **Fewer borders, icons and containers.** Navigation steps back so the work comes first [93][94].
- **Don't explain the whole product in one asset.** Attio's billboards express ambition, not features (search extract) [12].
- **Short, flat statements instead of adjectives,** as in "Issue tracking is dead." [91].
- **Say no.** Strong defaults, and "design something for someone" [88].

### 6.4 How they make "boring" categories desirable

1. **Rename what the category promises.**
   - "Customer relationship magic." [54]
   - "Turn Instagram DMs into revenue" [5]
   - Granola: a notepad, not a bot [20]
2. **Declare a new era, without naming the incumbents:** "new era", "next generation", "agentic revenue", "…is dead" [8][9][10][91].
3. **Hide the broccoli.** Put the powerful engine (the data model, record matching, agents) behind a simple, familiar surface [105][20].
4. **Find the human moment that doesn't change,** like celebrating a win (search extract) [12].
5. **Make it an identity:** "GTM builders" [42], "Setter Teams" [85].
6. **Treat design as the minimum, not the edge** [88].
   - The look is widely copied now [28].
   - **Inference:** what sets a brand apart is a point of view plus proof.

### 6.5 Copy patterns, with Namzilabs-safe versions

| Pattern | Benchmark example | Namzilabs-safe version (Inference) |
|---|---|---|
| Declare an era | "Issue tracking is dead." [91] | "Screenshotting five dashboards is *over*." |
| What stays the same | "The work changes. The celebration doesn't." (search extract) [12] | "Your tools change. The questions *don't*." |
| Lead with an outcome verb | "Turn Instagram DMs into revenue" [5] | "Turn five tools into one *honest* number." |
| A named philosophy | The Linear Method [87] | "Show your *working*." (the Namzilabs rule) |
| Founder origin story | "Why I Built Mochi…" [79] | "Why no tool you own can tell you your *show-up rate*." |
| Contrast with the usual thing | "there's not a bot that joins your meeting… it looks like Apple notes" [20] | "Not another dashboard. The *receipts* behind one." |

Words in *italics* mark the single Instrument Serif accent word.

### 6.6 Motion patterns (mostly Inference; sources where available)

- **Wide screen recordings of the real product for changelog entries.** Linear used 1920×960 [17]. Recut them to 1:1, 4:5 and 9:16 for social (Inference).
- **One feature per clip, 5 to 40 seconds,** as in Notion's logged X clips [15].
- **Calm micro-interactions:** hover states that change opacity over about 150 milliseconds [22]. No bouncy easing (Inference).
- **Optional sound design on launch pages** [57].
- **One camera move per shot,** such as a slow push-in on the number. No spinning 3D devices (Inference, in line with Linear's "calmer" direction [94]).

### 6.7 Publishing rhythm

| Rhythm | Benchmark | Namzilabs version (Inference) |
|---|---|---|
| Weekly | "50-ish weeks to say something" [13]; about two official clips a week from Notion and Linear [15] | One changelog clip and one "Receipt" post |
| Every two weeks | Raycast releases every two weeks [14] | A product release-notes page |
| Monthly | "12 months to say something really big" [13] | One source-spotlight film or one metric essay |
| Quarterly | "four quarters to say something huge" [13] | The MCP launch once it is switched on; the ad sources once the platforms approve them |

---

## 7. Lessons for Namzilabs

Each lesson says what to do, which product fact it maps to, and why (with evidence). Some add a guardrail.

1. **Make "shows its working" the signature format, called "Receipts".**
   - **Do:** pair every post's metric with its working: the sources read, the records matched, and the records excluded and why.
   - **Maps to:** numbers that can be audited.
   - **Why:** clicking through to the underlying records is the premium data pattern [27]. Building trust in public is a proven brand strategy [19][7].
   - **Guardrail:** use a clearly labelled demo workspace, never real customer data.
2. **Publish an opinionated metric glossary, "The Namzilabs Method".**
   - **Do:** define show-up rate, speed to lead, cost per held meeting, revenue per lead and close rate. Say what counts, what is excluded, and how edge cases are handled (reschedules, the same person appearing in several tools).
   - **Maps to:** the five cross-tool metrics and record matching.
   - **Why:** the Linear Method, and Notion's content-market fit [87][104].
3. **Run a 33-part series, "One source, one question".**
   - **Do:** one episode per live source (Calendly, Close, Stripe, Shopify, Typeform, Aircall and the rest). Show what that tool alone can't answer, and what Namzilabs adds by matching records across tools.
   - **Maps to:** the 33 live sources.
   - **Why:** Attio and Notion turned templates and integrations into distribution [65][104].
   - **Guardrail:** say "connects to", never "partnered with". Follow each brand's logo rules.
4. **Ship and show every week.**
   - **Do:** a 5 to 40 second clip of the real product for each changelog entry, cut to 16:9, 4:5 and 9:16. Add a three-line caption: what it is, why it matters, and the working.
   - **Maps to:** the flow builder (Get data → Filter/Match → Summarize/Calculate → Publish) and the live dashboard.
   - **Why:** see [13], [14] and [15].
5. **Replace testimonials with proof from the product itself.**
   - **Do:** show exclusions as a feature (demo example: "14 records excluded: no email match"). Make "Free to start, no card" the only call to action, and keep a public build log.
   - **Maps to:** free-to-start pricing, and an early stage with no testimonials or logos yet.
   - **Why:** Attio used design to compete while it lacked features [6]. High-level design earns attention [88].
   - **Guardrail:** no invented numbers, logos or quotes.
6. **Write down the visual rules.**
   - **Do:**
     - Keep the background neutral, and use #568CFF only for the live number or the active state.
     - Save the deep-blue gradient panels for hero and proof moments, the way Arc saves gradients for Spaces.
     - Use one Instrument Serif italic word per headline, and make it the emotional word.
     - Use thin grids and typed cells, and colour only to show direction.
   - **Maps to:** the brand kit.
   - **Why:** see [22], [21], [23] and [24].
7. **Own one motion signature: "the receipt resolves".**
   - **Do:** a left-to-right animation of the pipeline. Source chips land, match counts tick up, excluded records drop away with their reasons, and the metric appears last, in blue. A soft sound on that final moment is optional.
   - **Maps to:** the flow builder and the trail of working.
   - **Why:** Attio's launch craft with sound and animation [57]. The rest is Inference.
8. **Plan channels by audience, not by benchmark habit (Inference).**
   - **Instagram:** Reels and carousels for coaches, setters and closers, and for e-commerce and brand owners. Mochi shows this buyer is there [5][29].
   - **X:** building in public and changelog films [14].
   - **LinkedIn:** founder essays and carousels for operators [43][61].
   - **YouTube:** 5 to 10 minute tutorials that take a real funnel apart, with receipts [19][64].
9. **Make MCP a launch moment, but only once it is live.**
   - **Do:** at switch-on, launch with an animated library of example questions ("What was my cost per held meeting in August?"), where every answer comes back with its working. Until then, only build in public: "being switched on", never "available now".
   - **Maps to:** Claude and ChatGPT reading published metrics through MCP.
   - **Why:** the Ask Attio launch and Attio's MCP positioning [57][47], and Mochi's read-only MCP [73].
10. **Borrow Mochi's audience language, not its claims.**
    - **Do:** use the audience's words: booked, held, no-show, speed to lead, setter, closer. Replace "$X rotting in your DMs" hooks with "find *your* number" hooks that viewers can check themselves.
    - **Maps to:** the coach and setter segment.
    - **Why:** see [4] and [79].
11. **Position against dashboard sprawl, not against tools.**
    - **Do:** "Your tools each know part of the story. Namzilabs matches the records and shows the *working*."
    - **Why:** Attio's "new era" framing works without naming incumbents [8][10].
    - **Guardrail:** never criticise the source tools; they are also the integrations.
12. **Grow a small community in cohorts.**
    - **Do:**
      - Invite "founding operators" in small monthly groups; Notion added about 20 at a time [104].
      - Let them publish metric recipes (flow templates), credited by name, the way Arc credits makers [19].
      - Later, add a directory of experts for agencies [67].
    - **Maps to:** the no-code flow builder.
    - **Guardrail:** credit people only with their permission.
13. **Give the founder a weekly note.**
    - **Do:** what shipped, what we learned, and what we excluded and why.
    - **Maps to:** a founder-led brand with a plain, honest tone.
    - **Why:** founder stories drive launches [43][79], and "every update counts" [7].
14. **Treat taste as the minimum.**
    - **Do:** keep the look premium, but make every asset carry a point of view and a receipt.
    - **Why:** the premium look is now widely copied [28]. Inference.

### 7.1 Starter slate: 12 post ideas

| # | Format | Channel | Hook (one serif word in *italics*) | Proof shown |
|---|---|---|---|---|
| 1 | Manifesto carousel | Instagram and LinkedIn | "Every number should show its *working*." | What a receipt contains |
| 2 | 20-second product clip | X and Instagram Reels | "Your show-up rate, *actually*." | Pipeline animation, demo data |
| 3 | Glossary card | Instagram carousel and blog | "What counts as a *held* meeting?" | Definition and exclusions |
| 4 | Source spotlight | X and LinkedIn | "Calendly can't see your *Stripe*." | Match count |
| 5 | Build log | X | "Ads sources: built, *waiting*." | Honest status, with no claim that it is available |
| 6 | Founder essay | LinkedIn and blog | "Why no tool you own knows your *close rate*." | Founder story, no invented statistics |
| 7 | Speed-to-lead explainer | Instagram Reels | "The *minutes* between form and first call." | Demo example: a Typeform or Tally form to a first call in Aircall or Close |
| 8 | Exclusion spotlight | X and Instagram | "We threw out 14 *records*. Here's why." | The reasons for each exclusion (demo data) |
| 9 | Changelog film | X and YouTube Shorts | "New: *published* metrics." | The real product |
| 10 | Tutorial | YouTube | "Build cost per held meeting in *five* steps." | Walkthrough of the flow builder |
| 11 | MCP teaser, before launch | X | "Soon: ask Claude, get the *receipt*." | Framed as building in public only |
| 12 | Free-start call-to-action card | All | "Free to start. *No* card." | The pricing fact |

For #7, speed to lead needs a source that timestamps the first contact. Confirm which source combination the product supports before filming.

### 7.2 Guardrails for a "receipts" brand

- No invented statistics, testimonials, logos, follower counts or quotes. Always label demo data.
- Don't present Meta Ads, TikTok Ads or Google Ads as live until each platform approves them.
- Don't present MCP as live until it is switched on.
- Don't imply partnership with, or endorsement by, any of the 33 tools.
- Don't borrow competitors' unverifiable ROI claims, such as "3x" or "$500K" [79][70].

---

## 8. What we could not verify

1. **Attio's launch films.** Get the exact links the founder had in mind ("Attio 2.0", "next era"). We could not find a release named "Attio 2.0" [56].
2. **Mochi's visuals and video style.** Capture desktop and mobile screenshots of themochi.app for a visual teardown (see 4.2). Also review the last 30 posts on @themochi.app and the Mochi YouTube channel: formats, lengths, hooks and on-screen text. Their pages and videos could not be viewed in this research [5][86].
3. **Follower and engagement counts.** Check them live before quoting.
4. **Mochi's founding team and pricing.** Confirm both from Mochi's own pages. Current references are third-party or competitor pages [80][81].
5. **Namzilabs demo scripts.** Before scripting a demo, confirm which source combinations power each of the five metrics.

---

## 9. Sources

1. Hugging Face blog, "Introducing Trackio: A Lightweight Experiment Tracking Library from Hugging Face": https://huggingface.co/blog/trackio
2. UI8, "Trackio - Modern SaaS Website Template for Startups & Agencies": https://ui8.net/usarion/products/trackio--modern-saas-website-template-for-startups--agencies
3. Google Play, "TRACKIO" (GPS tracking app): https://play.google.com/store/apps/details?id=com.trackiogps.app
4. Mochi homepage, "Mochi | One Workspace for Instagram DM Sales": https://themochi.app/
5. Mochi on Instagram (@themochi.app): https://www.instagram.com/themochi.app/
6. Strategy Breakdowns, "Attio's design-first strategy": https://strategybreakdowns.com/p/how-attio-does-design
7. Strategy Breakdowns, "How Attio builds-in-public": https://strategybreakdowns.com/p/attio-build-in-public
8. PR Newswire, "Attio Raises $23.5 Million Series A to Usher in a New Era of CRM that Combines Modern Data Architecture with a Cutting-Edge User Experience" (2023): https://www.prnewswire.com/news-releases/attio-raises-23-5-million-series-a-to-usher-in-a-new-era-of-crm-that-combines-modern-data-architecture-with-a-cutting-edge-user-experience-301760342.html
9. Attio landing page, "CRM for the next generation of teams.": https://attio.com/p/crm-1707-25
10. Attio homepage, "Attio: The CRM for agentic revenue": https://attio.com/
11. Nicolas Sharp on X, "Proud to see @attio ads in London..." (Oct 1, 2025; date decoded from post ID): https://x.com/nicolasosharp/status/1973382608684814348
12. Attio blog, "What AI can't change: Behind Attio's latest brand campaign": https://attio.com/blog/behind-attios-latest-brand-campaign
13. Lenny's Podcast, "Linear's secret to building beloved B2B products | Nan Yu", public transcript mirror: https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/nan-yu/transcript.md
14. The Changelog #587 with Thomas Paul Mann (Raycast), public transcript: https://raw.githubusercontent.com/thechangelog/transcripts/master/podcast/the-changelog-587.md
15. whatships.com repository, "Product Launch Videos: curated product launch films from X/Twitter" (daily logs in docs/discovery and discoveries, Aug-Sep 2026): https://github.com/dingyi/whatships.com
16. Keep a Changelog repository, docs/2.0.0-history.md (practitioner note on Linear's changelog format): https://github.com/olivierlacan/keep-a-changelog/blob/main/docs/2.0.0-history.md
17. Public copy of linear.app/next including the embedded changelog video reference (GitHub): https://raw.githubusercontent.com/dcvii/brainspew/main/Issue%20tracking%20is%20dead.md
18. Mochi, "Product Updates & Customer Wins": https://themochi.app/updates
19. Lenny's Podcast, "Competing with Giants: An Inside Look at How The Browser Company Builds Product" (Josh Miller), public transcript mirror: https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/josh-miller/transcript.md
20. Behind the Craft (Peter Yang), "The 5 Hidden Rules Behind Successful AI Products | Chris Pedregal (Granola)" (Jan 19, 2025), public transcript: https://raw.githubusercontent.com/petergyang/behind-the-craft-transcripts/main/transcripts/2025/046-the-5-hidden-rules-behind-successful-ai-products-chris-pedregal-granola.md
21. Third-party DESIGN.md teardown of Attio's site (design-md-hub, GitHub): https://raw.githubusercontent.com/dhananjay6561/design-md-hub/main/brands/attio/DESIGN.md
22. Third-party DESIGN.md teardown of raycast.com (oh-my-design, GitHub; states DOM verification May 2026): https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/design-md/raycast/DESIGN.md
23. Third-party DESIGN.md teardown of arc.net (design-md-hub, GitHub; states live fetch July 2026): https://raw.githubusercontent.com/dhananjay6561/design-md-hub/main/brands/arc/DESIGN.md
24. Third-party DESIGN.md teardown of granola.ai (design-bites, GitHub): https://raw.githubusercontent.com/educlopez/design-bites/main/design-mds/granola.ai/DESIGN.md
25. Third-party DESIGN.md teardown of linear.app (oh-my-design, GitHub; states verification on 2026-07-12): https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/design-md/linear.app/DESIGN.md
26. Linear, "Best practices for designing Linear Dashboards" (Oct 7, 2025): https://linear.app/now/dashboards-best-practices
27. Third-party dashboard research note summarizing Linear Insights and Linear's dashboard guidance (kuma-loong/Constella, GitHub): https://github.com/kuma-loong/Constella/blob/main/docs/profile-dashboard-research-zh.md
28. GitHub, VoltAgent/awesome-design-md, "A collection of DESIGN.md files analysis by popular brand design systems" (117,695 stars at research time): https://github.com/VoltAgent/awesome-design-md
29. Nik Setting on Instagram (@niksetting): https://www.instagram.com/niksetting/
30. GitHub, gradio-app/trackio (repo created May 8, 2025; ~1.7K stars at research time): https://github.com/gradio-app/trackio
31. Webflow template demo, "Trackio": https://trackio-tnc.webflow.io/
32. Google Play, "Mochi - Flashcards and notes": https://play.google.com/store/apps/details?id=cards.mochi.app
33. App Store, "Mochi Health: Weight Loss App": https://apps.apple.com/us/app/mochi-health-online-care/id6479331846
34. HLTH, "Building Affordable, Transparent Consumer Healthcare with Dr. Myra Ahmad, CEO of Mochi Health": https://hlth.com/insights/podcasts/building-affordable-transparent-consumer-healthcare-with-dr-myra-ahmad-ceo-of-mochi-health
35. MOCHI, "Agentic AI Growth Solution for SMEs" (Malaysia): https://www.mochi.global/
36. MOCHI, "Your AI Soul Companion": https://get-mochi.com/
37. Attio on Dribbble: https://dribbble.com/attio
38. How They Grow (Jaryd Hermann), "How Attio Grows: The playbook for disrupting a $280B giant": https://www.howtheygrow.co/p/how-attio-grows
39. June, "The Epic Story of Attio - The Long Journey to Competing in a $63.8bn Market": https://www.june.so/blog/the-epic-story-of-attio
40. TechCrunch, "Attio raises $23.5M to build a next-gen CRM platform" (Mar 2, 2023): https://techcrunch.com/2023/03/02/attio-raises-23-5m-to-build-a-next-gen-crm-platform/
41. Attio blog, "Attio raises $52m Series B": https://attio.com/blog/attio-raises-52m-series-b
42. PR Newswire, "Attio Raises $52M Series B to Scale the First AI-Native CRM for Go-to-Market Builders" (Aug 26, 2025): https://www.prnewswire.com/news-releases/attio-raises-52m-series-b-to-scale-the-first-ai-native-crm-for-go-to-market-builders-302538357.html
43. Nicolas Sharp on X, Ask Attio launch post (Feb 4, 2026; date decoded from post ID): https://x.com/nicolasosharp/status/2019084435035967516
44. Attio blog, "Introducing Ask Attio": https://attio.com/blog/introducing-ask-attio
45. Seb Johnson on LinkedIn, post on Attio tripling its customer base to 7,000+ (Feb 4, 2026; date decoded from post ID): https://www.linkedin.com/posts/seb-johnson_breaking-attio-has-tripled-its-customer-activity-7424852790428016640-vpX5
46. Scaling Europe podcast, "How Attio 3x'ed its customers in the last year, with CEO Nicolas Sharp" (Spotify): https://open.spotify.com/episode/2hYn4PfHTs3NJrYUVQb6Ul
47. MarketBetter, "Attio CRM Review 2026: G2 Feedback, Real Pricing & Verdict" (third-party review): https://marketbetter.ai/blog/attio-crm-review-2026/
48. Attio, "AI & the next generation": https://attio.com/next-gen
49. Attio landing page, "The new era of CRM": https://attio.com/p/demo
50. Okerosi Davis on LinkedIn, "I have analyzed Attio's 248 ad creatives..." (Dec 17, 2024; date decoded from post ID): https://www.linkedin.com/posts/okerosidavis_i-have-analyzed-attios-248-ad-creatives-activity-7274758997730086912-P7N7
51. HubSpot, "HubSpot vs Attio" comparison page: https://www.hubspot.com/comparisons/attio-vs-hubspot
52. The B2B Vault, "Summary of: Attio's design-first strategy": https://www.theb2bvault.com/resources/attios-design-first-strategy
53. Attio, "Brand guidelines and press kit": https://attio.com/brand
54. Product Hunt, "Attio: Customer relationship magic.": https://www.producthunt.com/products/attio
55. Justia Trademarks, "ATTIO LIMITED Trademarks": https://trademark.justia.com/owners/attio-limited-4741806
56. Attio blog, "Reporting 2.0: Powerful new features are here": https://attio.com/blog/reporting-2-0
57. Attio changelog, "Changelog (February 25, 2026)": https://attio.com/changelog/2026/changelog-february-25-2026
58. Nicolas Sharp on LinkedIn, "We launched Attio in this office..." (Jan 22, 2026; date decoded from post ID): https://www.linkedin.com/posts/nicolas-sharp-a92726b1_we-launched-attio-in-this-office-and-grew-activity-7420051814596710400-7B7U
59. Strategy Breakdowns, "Attio x Strategy Breakdowns (with founder Nicolas Sharp)": https://strategybreakdowns.com/p/10-questions-with-attio
60. GV on LinkedIn, post featuring Nicolas Sharp (Apr 6, 2026; date decoded from post ID): https://www.linkedin.com/posts/googleventures_nicolas-sharp-ceo-and-co-founder-of-attio-activity-7446919697683378177-H3Gd
61. Attio on LinkedIn, "This week we launched Call Intelligence..." (Apr 4, 2025; date decoded from post ID): https://www.linkedin.com/posts/attio_this-week-we-launched-call-intelligence-activity-7313943181446844416-1frT
62. Aakash Gupta, "The Attio Deep Dive: How it Builds Product, Does PLG, and is Challenging Salesforce": https://www.news.aakashg.com/p/the-attio-deep-dive-how-it-builds
63. Aakash Gupta on X, "I interviewed 14 people working at and using Attio..." (Jun 14, 2024; date decoded from post ID): https://x.com/aakashg0/status/1801471954672828688
64. Attio Academy (YouTube playlist): https://www.youtube.com/playlist?list=PLdI3fFmZEoitQVmpFN6qI9mxgJCHVwky4
65. Attio, "Automation Templates": https://attio.com/templates
66. Attio, "Creator Program": https://attio.com/partners/creator-partners
67. Attio, "Experts Partner Program": https://attio.com/partners/expert-partners
68. Attio Community, "Introducing the Attio Creator Program": https://www.attio.community/c/announcements/introducing-the-attio-creator-program
69. Mochi Documentation, "What Mochi is & how to get around": https://themochi-app.gitbook.io/documentation/module-1-getting-started/what-mochi-is-and-how-to-get-around
70. Mochi, "Why Voice Messages Convert 3x Better Than Text (And How Mochi Made Them Actually Work at Scale)" (Nov 1, 2025): https://themochi.app/updates/voice-messages-convert-3x-better-mochi-scenes
71. Mochi, "We Just Built the Control Center for Your DMs": https://themochi.app/updates/we-just-built-the-control-center-for-your-dms
72. Mochi, "Your team's context. Finally in one place.": https://themochi.app/updates/team-chat
73. Mochi, "Mochi MCP": https://themochi.app/mcp
74. GitHub, TheMochiApp/mochi-cli, "Secure Mochi Public API CLI for customers, operators, and AI agents" (created Aug 25, 2026): https://github.com/TheMochiApp/mochi-cli
75. Mochi, "Automate Your Sales Pipeline with Zapier + Mochi": https://themochi.app/zapier
76. Mochi, affiliate program page: https://themochi.app/affiliate
77. Mochi, "Simple pricing for your DM sales flow.": https://themochi.app/pricing
78. Mochi, "Mochi Application Form": https://themochi.app/demo
79. Mochi, "Why I Built Mochi (And Why You're Probably Leaving $500K in Your DMs)": https://themochi.app/updates/mochi-is-born
80. Forbes (contributor Kolawole Samuel Adebayo), "How AI Is Helping Creators Scale Sales Without Losing The Personal Touch" (Feb 13, 2026): https://www.forbes.com/sites/kolawolesamueladebayo/2026/02/13/how-ai-is-helping-creators-scale-sales-without-losing-the-personal-touch/
81. Flowgent (competitor page), "The Best Mochi Alternative for Instagram DM Automation": https://flowgent.ai/themochi-alternative
82. Sapt (competitor page), "Sapt vs The Mochi App: AI Setter or Meta Ads Performance": https://sapt.ai/insights/sapt-vs-mochi-ai-setter-meta-ads
83. Nik Setting website: https://niksetting.com/
84. Skool, "Grow Acquisition AI" community: https://www.skool.com/grow-acquisition-ai-7093
85. YouTube, "Mochi: Infrastructure SaaS for Setter Teams": https://www.youtube.com/watch?v=Fl3FH7YKVN4
86. YouTube, The Mochi App channel: https://www.youtube.com/@themochi-app
87. Linear, "The Linear Method": https://linear.app/method
88. Lenny's Podcast, "Inside Linear: Building with taste, craft, and focus | Karri Saarinen", public transcript mirror: https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/karri-saarinen/transcript.md
89. life-itself/changelog, EXEMPLARS.md (practitioner note on Linear's changelog): https://github.com/life-itself/changelog/blob/main/EXEMPLARS.md
90. Linear changelog, "Introducing Linear Agent" (Mar 24, 2026): https://linear.app/changelog/2026-03-24-introducing-linear-agent
91. Linear, "Issue tracking is dead." (Mar 24, 2026): https://linear.app/next
92. RSS mirror of Linear's "Now" blog posts (titles and dates), api-evangelist/linear-app (GitHub): https://github.com/api-evangelist/linear-app/tree/main/blogs
93. Linear, "A calmer interface for a product in motion" (Mar 12, 2026): https://linear.app/now/behind-the-latest-design-refresh
94. Third-party design research note summarizing Linear's March 2026 refresh (The-Vibe-Company/companion, GitHub): https://github.com/The-Vibe-Company/companion/blob/main/docs/research/frontend-visual-direction-2026-09-07.md
95. Third-party design note citing Linear's 2026 refresh (JustinGamer191/Holo, DESIGN.md, GitHub): https://github.com/JustinGamer191/Holo/blob/main/DESIGN.md
96. Linear, "Changelog": https://linear.app/changelog
97. RSS mirror excerpt of Linear's dashboards post (api-evangelist/linear-app, GitHub): https://raw.githubusercontent.com/api-evangelist/linear-app/main/blogs/2025-10-07-best-practices-for-designing-linear-dashboards.md
98. Strategy Breakdowns, "Arc's build-in-public playbook": https://strategybreakdowns.com/p/arc-release-notes
99. Refine blog, Arc browser journey (Oct 8, 2025), source file: https://raw.githubusercontent.com/refinedev/refine/main/documentation/blog/2025-10-08-arc-browser-journey.md
100. ZDNet, "How Atlassian's $610 million AI browser acquisition puts knowledge workers first" (Sep 5, 2025): https://www.zdnet.com/article/how-atlassians-610-million-ai-browser-acquisition-puts-knowledge-workers-first/
101. GitHub, raycast/extensions, "Everything you need to extend Raycast." (7,769 stars and 6,958 forks at research time): https://github.com/raycast/extensions
102. Raycast blog, "A fresh look and feel": https://www.raycast.com/blog/a-fresh-look-and-feel
103. Raycast blog, "The New Raycast": https://www.raycast.com/blog/the-new-raycast
104. Lenny's Podcast, "How Notion leveraged community to build a $10B business | Camille Ricketts", public transcript mirror: https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/camille-ricketts/transcript.md
105. Lenny's Podcast, Ivan Zhao (Notion) episode, public transcript mirror: https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/ivan-zhao/transcript.md
106. Notion, template marketplace: https://www.notion.com/templates
107. Third-party DESIGN.md teardown of notion.com (oh-my-design, GitHub; states capture on July 13, 2026): https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/design-md/notion/DESIGN.md
108. Third-party compilation on Granola's launch and growth, citing Granola posts and podcasts (OpenCMO, GitHub): https://raw.githubusercontent.com/About-Intelligence/OpenCMO/main/references/experts/chris-pedregal-granola.md
109. Lenny's Podcast, Howie Liu episode intro listing the newsletter's product bundle (public transcript mirror): https://raw.githubusercontent.com/ChatPRD/lennys-podcast-transcripts/main/episodes/howie-liu/transcript.md
