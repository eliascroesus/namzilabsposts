# Framer and Base44: how they do content and growth

*Research file 01 for the Namzilabs content engine. Compiled September 2026.*

> **How to read this document**
> - Every figure, quote and date has a numbered source `[n]`. The list is in section 8.
> - Anything marked **Inference** is our own reading and was not reported by a source.
> - **Method:** the research ran on web search (about 55 queries). The research environment blocked direct page fetches for most domains. As a result, facts and quotes come from search-engine extracts of the cited pages. Dates for X and LinkedIn posts were decoded from the post IDs.
> - **Before republishing any figure or quote, open the source and check it.** Where sources disagree, both figures are shown.
> - No view counts or follower counts appear here unless a source states them.

## Contents

1. [Executive summary](#1-executive-summary)
2. [Framer teardown](#2-framer-teardown)
3. [Base44 teardown](#3-base44-teardown)
4. [Motion and video craft: a "Framer-smooth" spec](#4-motion-and-video-craft-a-framer-smooth-spec)
5. [Formats and hooks library](#5-formats-and-hooks-library)
6. [Lessons for Namzilabs](#6-lessons-for-namzilabs)
7. [What we could not verify](#7-what-we-could-not-verify)
8. [Sources](#8-sources)

---

## 1. Executive summary

- **Two different engines.**
  - **Framer** grows through **craft and creators**:
    - product films that show off the product's own strength, which is motion;
    - a steady stream of launches;
    - a marketplace where thousands of creators earn money when they bring in users [4][5][6][20][28].
  - **Base44** grew through **the founder and his proof**:
    - one founder posting plain, number-led updates on LinkedIn and X [42][57][59][60];
    - after Wix bought it, paid media at national-TV scale [69][77].
- **Framer's scale:**
  - $100M Series D at a $2B valuation in August 2025 [1][2].
  - 10.5M sites published and 5.3B views in 2025 [5].
  - $6.5M paid to creators in 2025 [5].
  - 188,000 companies in 200 countries and 7,000+ Marketplace creators by June 2026 [6].
  - Third-party trackers estimate about $50M ARR in August 2025 [3][100].
- **Why Framer's videos feel smooth:**
  - Motion is the product's DNA. Its animations run on Motion, an open-source library that began as Framer Motion [23][99], and animation effects are core features [24][25].
  - Framer hires motion designers who "capture the Framer UI and, when needed, animate it by hand" in After Effects [21].
  - The same designers make versions that test "design, motion, pacing, or message" [21].
  - Analysts point to bezier-curved cursor paths and kinetic type set against an empty background [22].
  - Tella named Framer's 2023 AI launch film the year's best promo video and credits Framer with inventing the format [20].
- **Base44's founder posts visibly moved signups.**
  - On 6 March 2025 Maor Shlomo wrote: *"Wow this post blew up. Added 5k users and 1/3 of Base44's revenue in 24 hours."* [59] **Inference from the dates:** "this post" is most likely his 5 March journey post [57][58].
  - He reports going from $0 to $1M ARR in three weeks "once things started clicking" [60].
  - Wix bought the six-month-old, bootstrapped company for $80M cash in June 2025 [42][43][44].
- **Base44 after Wix:**
  - A 30-second Super Bowl LX spot, "It's App to You", made in-house. iSpot counted 69.4M TV impressions [69][73][77].
  - The 8th-most-viewed US brand on YouTube in Q1 2026, with 679M+ views (Tubular Labs data via Marketing Brew) [77].
  - Reported ARR: $100M in early March 2026, about $150M in May 2026, then past $200M "5 months after hitting $100M" [50][52].
- **Patterns both companies share:**
  1. One idea per post, with a concrete number or verb up front.
  2. Shipped updates are packaged as launches [8][11][19].
  3. Users are paid to share: credits at Base44, 50% of first-year referral revenue at Framer [28][61][82].
  4. Public galleries, awards and contests turn users into content [31][70][82].
- **For Namzilabs:**
  - Copy Base44's **voice**: first person, real numbers, failures included.
  - Copy Framer's **craft**: UI rebuilt in motion, disciplined easing, a demo in four beats.
  - "Every number shows its working" does for Namzilabs what motion does for Framer. It is true of the product, and it can be the visual signature.
  - Namzilabs is pre-traction with no testimonials yet, so its receipts are **build receipts**, not customer proof.

| | Framer | Base44 |
|---|---|---|
| Core growth engine | Product-led growth, a creator marketplace, and a referral revenue share [28] | Founder building in public, then word of mouth [42]; after the acquisition, mass paid media [77] |
| Signature content | Polished launch films and "Introducing…" posts [8][11][12][20] | Founder milestone posts and threads [57][60]; later TV and YouTube ads [69][77] |
| Community loop | Marketplace, Awards, gallery, meetups, Academy [4][5][7][31] | Launchpad voting, Discord, ambassadors, contests [82][83][84][91] |
| Reason for users to share | 50% of a referred customer's first-year payments [28] | Extra credits for sharing creations [61][65]; Launchpad credit prizes [82] |
| Cadence | 100+ feature releases in 2025; seasonal keynote events [5][14][17] | Frequent founder posts; campaign bursts such as the Super Bowl [59][60][69] |

---

## 2. Framer teardown

### 2.1 Snapshot

| Metric | Value | As of | Source type |
|---|---|---|---|
| Funding | $100M Series D at a $2B valuation. Led by Meritech; Atomico and Accel took part | Aug 2025 | Press [1][2][102] |
| ARR | About $50M, up from about $25M in 2024. Goal: $100M ARR | Aug 2025 | **Third-party estimate** [3][100][101] |
| Sites published and views | 10.5M sites; 5.3B views | 2025 | Company [5] |
| Feature releases | 100+ | 2025 | Company [5] |
| Paid to creators | $6.5M | 2025 | Company [5] |
| Creator earnings | $4M through the Partner Program, plus $4M through Framer jobs on Contra | 2024 | Company [4] |
| Marketplace size | 1,700+ templates; 100+ plugins | 2024 | Company [4] |
| Marketplace creators | 7,000+ selling templates and components | Jun 2026 | Company [6] |
| Companies on Framer | 188,000 in 200 countries. Framer says this grew 14x in 12 months | Jun 2026 | Company [6] |
| Sites and traffic | 4M+ published sites; about 364M monthly active visitors | Jun 2026 | Company [6] |
| Social audience | 154.7K followers on X; 100K on Instagram; 11M YouTube viewers; 189.4K hours watched | 2024 | Company [4] |
| Community events | 83 meetups in 26 countries (2024). 48 events in 18 countries plus 12 student events (2025) | 2024 to 2025 | Company [4][5] |

**Named customers:** Perplexity, Miro, Cal.com, Bilt, Superhuman, Dribbble and Zapier [6].

### 2.2 How Framer shows up on social

**Announcement grammar on X.** Framer's launch posts follow a tight template:

1. an emoji;
2. "Introducing [feature]";
3. one sentence saying what it does;
4. a short contrast line or a forward-looking line;
5. the product film attached.

Real examples (dates decoded from the post IDs):

- **21 May 2025.** *"🪄 Introducing Wireframer, a new way to kickstart your next site. It generates clear, purpose-built layouts that focus on structure, not style, so you can move fast while keeping full control over the aesthetics. Wireframer is just getting started."* [12]
- **6 Aug 2025.** *"✍️ Introducing On-Page Editing for Framer. Edit text, replace images, and create new CMS pages, all directly on your site. No canvas. No CMS. The next chapter of editing and publishing begins."* [11]
- **16 Jun 2026.** *"Introducing Framer 3.0 with Agents, Branching, Community, and an all-new design. See everything that's new below."* [8]

**Inference: why the template works.**
- The first words name the new thing.
- The next sentence describes the job in the user's own verbs ("edit text, replace images").
- The last line is a contrast ("No canvas. No CMS.") or a sign of momentum ("just getting started").
- There are no hype adjectives and no statistics. The video does the persuading.

**Changelog entries treated as launches.**
- ProductLift's review of changelogs says Framer "treats major changelog entries like mini product launches". Each significant feature gets "a beautifully designed page with videos, examples, and use case suggestions" [19].
- The same review says users share these entries on social media because they "look and feel like product launches" [19].
- The hub is Framer Updates [18].

**Community spotlights.**
- Framer uses LinkedIn and X to feature Site of the Month winners [34] and the Framer Awards judges (#FramerAwards, November 2023) [33].
- The Framer Awards include a Best Interactions category [27][31].
- Site of the Year 2023 drew 250+ submissions. Over the preceding year of Site of the Month awards, 576 sites were submitted and 29 became winners or runners-up [32].

**Year-in-review microsites.**
- Framer publishes annual stats pages (framer.com/2024 and framer.com/2025). They cover sites published, creator payouts, events and audience [4][5].
- **Inference:** each page works as a proof-of-scale asset people can share, in the spirit of Spotify Wrapped.

**Instagram.**
- Framer reported 100K Instagram followers in 2024 [4].
- Our sources did not describe what Framer posts there. **Inference:** most likely the same motion clips and showcase reposts as on X, cropped square or vertical.

**Founder voice.**
- CEO Koen Bok has long posted plain shipping notes, for example *"Live preview just shipped in Framer X beta 3"* (September 2018) [98].
- **Inference, from limited examples:** the brand account carries the polish, and the founder account carries short "just shipped" notes.

### 2.3 Why Framer is known for smooth motion

Five reasons, each with a source.

1. **Motion is the product.**
   - Framer's animations run on Motion, an open-source library that began as Framer Motion. It uses hardware-accelerated animation where it can [23][99].
   - Animation effects are core features: Appear, Hover, Press, Loop, Drag, Scroll Animation, Scroll Speed, Scroll Transform and Scroll Variant [24][25].
   - The Academy teaches everything from hover effects to "fully choreographed transitions" [26].
   - The Awards have a Best Interactions category [27].
   - **Inference:** a company that sells motion has to prove it in its own ads.
2. **Motion design is an in-house craft.** Framer's Motion Designer job post says the role:
   - takes "ads and videos from brief through concept, design, animation, editing, sound, and final export";
   - will "capture the Framer UI and, when needed, animate it by hand to show the product clearly and make it look its best";
   - needs "deep command of After Effects" and "an editor's sense of rhythm, timing, sound, and story";
   - makes "distinct versions that test meaningful changes in design, motion, pacing, or message" [21].

   So the smooth look is more than a raw screen recording. The UI is captured and, where needed, animated by hand, and versions are tested the way performance ads are.
3. **Years spent on one format.** Tella named the Framer AI launch video 2023's best promo video and praised its story, timing, editing and animation. It wrote:
   - *"Framer actually invented this kind of video format, and with every product update since they were just a CoffeeScript editor, Framer has optimized this video format to perfection."*
   - Framer's *"signature video style triggered a tidal wave of half-assed imitations"* [20].
4. **Techniques analysts can name.** An advids teardown of SaaS launch teasers says:
   - *"Framer utilized an impossibly smooth, bezier-curved cursor pathing to signal effortless design"*;
   - by contrast, Supabase used *"rigid, linear snap-to-grid cursor jumps"*;
   - *"Raycast and Framer used rapid, kinetic typography suspended in an abstract void to build tension"*.

   Its advice: *"Use fluid curves for creatives (signaling flow) and rigid snaps for developers (signaling efficiency)."* [22]
5. **Launches staged like keynotes.** Framer runs seasonal online events:
   - Fall Event, 2 October 2024 [17];
   - Spring Event, 10 April 2025 [14][41];
   - the Framer 3.0 event, June 2026 [10].

   One agency recap likened the Spring 2025 keynote to an Apple keynote [15][16].

**The techniques you see in a Framer-style film.** **Inference:** this list is built from the sources above plus common motion-design practice. Section 4 turns it into a spec.

- The UI is captured and, where needed, animated by hand [21]. In practice that usually means rebuilding screens as layered vectors so each element can move on its own.
- Demos are driven by a cursor that moves on curved paths [22].
- Easing is springy: a fast start, a soft settle, and a small overshoot on elements that pop in.
- Transitions use blur and masks: elements come into focus out of a blur, and text wipes in.
- Kinetic type is set against an empty "void" between UI beats [22].
- The camera moves across one big canvas (pan, zoom, slight tilt) instead of cutting hard.
- **Length, pacing and music:** no source we reached states durations or music choices for Framer's films. **Inference:**
  - feature clips run about 10 to 30 seconds;
  - launch films run about 1 to 2 minutes on YouTube;
  - the music is electronic, with cuts on the beat.

### 2.4 Community and creator engine

- **Marketplace.**
  - 1,700+ templates and 100+ plugins in 2024 [4].
  - 7,000+ creators selling templates and components by June 2026 [6].
- **Creator Program: who qualifies.**
  - Anyone who publishes a Template, Plugin, Component or Vector Set, or becomes a verified Framer Expert.
  - Others can apply. Applications are judged on the "quality of your work, audience relevance, and how you plan to promote Framer" [28].
- **Creator Program: what it pays.**
  - Referrers get 50% of what a referred customer pays in their first year, tracked through Dub.
  - The commission applies when someone upgrades through a creator's link, such as a template remix link [28][40].
  - The help article says plugins, components and vectors don't earn referral commissions, and Enterprise subscriptions are excluded [28].
- **Creator Program: tools and pitch.**
  - A creator earnings dashboard launched in March 2025 [30].
  - The recruitment page is titled "Get paid to create with Framer" [29].
- **Money reaching creators.**
  - 2024: $4M through the Partner Program and $4M through Framer jobs on Contra [4].
  - 2025: $6.5M paid to creators [5].
- **Experts and client work.** Verified Framer Experts sit inside the Creator Program [28]. Client jobs flow through Contra [4].
- **Independent teachers.**
  - Framer University calls itself the "#1 Place to Learn Framer" [36]. It publishes lessons such as using Framer in place of After Effects [25].
  - **Inference:** the 50% referral share gives tutorial creators a direct money reason to teach Framer. That turns influential designers on X into a distribution channel.
- **Showcase.**
  - Site of the Month, Site of the Year and the Framer Awards [31][32][34].
  - Framer 3.0 folded the marketplace, gallery, awards and a social feed into one Community [7].
- **In-person events.**
  - 83 meetups in 26 countries in 2024 [4].
  - 48 events in 18 countries plus 12 student events in 2025 [5].

**The flywheel.** **Inference**, assembled from [4][5][6][28]:

1. Creators publish templates.
2. Those templates show up in search, on social and in the Marketplace.
3. New users start in Framer through a remix link.
4. The creator earns the template sale plus 50% of the first-year subscription.
5. Creators make more templates and tutorials.
6. That gives Framer more showcase content for its own channels, and the loop repeats.

### 2.5 Launch cadence and education

- **Continuous shipping:** "100+ feature releases" in 2025 [5]. By our arithmetic, that averages about two a week.
- **Seasonal keynote events:**
  - **Fall Event, 2 October 2024, 7PM CET.** Features, community highlights and announcements, including Plugins, CMS references, the Awards and Academy [17].
  - **Spring Event, 10 April 2025.** Wireframer, Workshop, Vectors 2.0, and analytics with funnels and A/B testing [13][14][41].
  - **Framer 3.0, 16 June 2026.** Agents, Branching and the new Community, described as Framer's biggest release [7][8][9][10].
- **No standalone conference found.**
  - We found no Config-style conference.
  - **Inference:** the online keynotes plus the global meetups fill that role [4][5][17].
- **Education.**
  - Framer Academy runs free courses, for example on animation and on the new Agents [26][35].
  - Framer's YouTube reached 11M viewers and 189.4K watch hours in 2024 [4].
- **Press and enterprise proof.** Wire releases for the funding round and for launches [2][6], with named enterprise customers [6].

### 2.6 Growth mechanics: what visibly drives signups

- **Freemium, product-led onboarding.**
  - A third-party analysis says Framer's onboarding lets users copy any website design into Framer. It adds that users start immediately "with no side distraction and no 'upgrade to paid plan' CTA" [37].
  - Another third-party piece says Framer relied on design communities, content and product-led growth rather than mainly on paid ads [38].
  - Treat both as opinion. The first may describe an older onboarding flow.
- **Templates plus a referral share.** Remix links pay creators 50% of first-year revenue [28], and creator payouts are growing [4][5].
- **Paid video.** The Motion Designer role covers "ads", and variant testing is part of the job [21]. **Inference:** Framer runs paid video creative, at a scale we don't know.
- **Audience-specific landing pages.** For example, the startups page is titled "The fastest way to launch your startup site" [39].

### 2.7 Posts and videos that performed well

- **Framer AI launch film (2023).** Tella's best promo video of 2023 [20]. We found no view count.
- **Wireframer (May 2025) and On-Page Editing (August 2025).** Standard examples of the announcement template [11][12]. We found no engagement numbers.
- **Framer 3.0 (June 2026).** A launch covering five channels [6][7][8][9][10]:
  - an X post;
  - a launch film on YouTube;
  - a recorded event on YouTube;
  - a blog post;
  - a wire press release.
- **Year-in-review pages** for 2024 and 2025 [4][5].

**Honest note:** none of the sources we could reach gave view or engagement counts for individual Framer posts, so this report doesn't give any.

---

## 3. Base44 teardown

### 3.1 The growth story, with verified figures

| Date | Milestone | Source |
|---|---|---|
| Late 2024 or early 2025 | Founded and bootstrapped by Maor Shlomo. Reports differ on timing: one says "launched in 2024", another says "founded six months ago" in June 2025 | [44][75] |
| First three weeks | 10,000 users | [42] |
| 5 Mar 2025 | LinkedIn: *"Yesterday, Base44 crossed 20k users and became profitable."* | [57] |
| 5 Mar 2025 | Base44 on X: *"Sharing some of our journey so far:"* | [58] |
| 6 Mar 2025 | X: *"Wow this post blew up. Added 5k users and 1/3 of Base44's revenue in 24 hours…"* | [59] |
| 14 Apr 2025 | X thread: $0 to $1M ARR in three weeks "once things started clicking", and 140K users in seven weeks | [60] |
| May 2025 | $189K profit in the month, after covering LLM token costs | [42][45] |
| 18 Jun 2025 | Wix acquires Base44 for about $80M cash. Payments can rise if revenue targets are met by 2029. Fewer than 10 employees; Shlomo was the sole shareholder | [42][43][44] |
| At acquisition | Users: 250K+ per Wix and TechCrunch, 100K+ per Calcalist. ARR described as "a few million"; one third-party estimate is about $3.5M. Partners included eToro and SimilarWeb | [42][44][45][47][66] |
| Jul 2025 | Lenny's Podcast: $1M ARR three weeks after launch, 400K+ users, no outside funding ever raised | [61][62] |
| Late 2025 | 2M users, seven times the June figure. ARR expected to reach $40 to 50M by year-end. Wix CEO Avishai Abrahami: *"a supersonic level of growth in just a matter of weeks"* | [48][49] |
| 8 Feb 2026 | Super Bowl LX spot, "It's App to You" | [69][71] |
| Early Mar 2026 | $100M ARR, disclosed with Wix's Q4 2025 results | [50][51][93] |
| Q1 2026 | 8th-most-viewed US brand by YouTube views: 679M+ views, per Tubular Labs | [77] |
| May 2026 | About $150M ARR | [47][52][54] |
| Aug 2026 (Q2 results) | Gross margin to go from near zero at the start of 2026 to about 60% in the second half. Base44's own model, Base1, is a key driver. The gain will be reinvested in sales and marketing | [53][54][55][94] |
| 2026 | Shlomo: *"We just blew past $200M ARR at Base44"*, *"5 months after hitting $100M"* | [52] |
| 2026 | Calcalist: Shlomo "set to receive $90 million in cash after hitting milestones with Wix" (headline) | [46] |

### 3.2 The founder's build-in-public playbook

**What he did.**

- **One channel.** Early "spray and pray" marketing failed, so Shlomo focused on LinkedIn, where results were easier to measure. He also mentions influencer experiments that failed [60][63][64]. (These points come from summaries of his April 2025 thread.)
- **Numbers, lessons and setbacks.**
  - TechCrunch says Base44 spread mostly by word of mouth as Shlomo shared his building journey on LinkedIn and Twitter. That included posting profit figures after LLM costs [42].
  - His milestone post opened a series on the 0→1 phase: how he got his first users [57].
- **A serialized story.** The follow-up post promised the next episodes: *"Will be posting more on the journey, next up - failed launches and going from 1 to 50 users. But for now - back to doing support."* [59]
- **Written for builders, not buyers.** Coverage describes posts that didn't pitch Base44 but left readers curious about what he was building [61][63].
- **Rewards for sharing.**
  - Lenny's episode summary lists "incentivizing users to share their creations" as a core tactic [61].
  - Another write-up says users got extra credits for sharing what they built [65].
- **Paying users first.** He moved his focus from total users to paying users. By the episode summary's account, everything else grew too after that [61].
- **Other people amplified him.**
  - Lenny Rachitsky: *"In his first interview since the acquisition, Maor Shlomo (@maorshlomo) shares the behind-the-scenes story of bootstrapping @base44 from zero to an $80M exit in 6 months."* [62]
  - 20VC [68].
  - A Calcalist interview headlined *"I achieved the Holy Grail: I built software that builds software"* [67].
  - Inc. [95].

**Evidence that it drove signups.**

- The "blew up" post: 5K users and a third of revenue in 24 hours [59].
- TechCrunch credits word of mouth [42].
- Lenny's episode summary says growth relied on word of mouth, but a launch or viral posts were needed to get it started [61].

**About spend.**
- Lenny's episode says the growth came without marketing spend [61].
- Summaries of the thread mention paid influencer tests that failed [63].
- **Inference:** both can be true if the tests were small and dropped quickly.

**Anatomy of his posts.** **Inference**, based on the quotes above.

1. **First line:** one fact with a number ("crossed 20k users and became profitable").
2. **Time anchor:** "Yesterday", "3 weeks", "7 weeks", "5 months after".
3. **Turn to vulnerability:** "But before that, I failed miserably at marketing."
4. **Promise of detail:** "Here's a long thread of what worked and what didn't 🧵".
5. **Humble close:** "back to doing support".
6. **Style:** plain text, no design polish. The specific numbers make it credible.

### 3.3 Product-led loops

- **Launchpad showcase.**
  - Builders submit published apps.
  - Signed-in users can upvote each app once a day.
  - Top apps compete for 200, 100 or 50 message credits and a featured spot.
  - A submission can include up to 5 screenshots or a short demo video (MP4 or WebM, up to 50MB) [82].
- **Templates marketplace** [86] and a community board of top apps [96].
- **Discord.**
  - Weekly live sessions with the community team at 5 PM UTC [83].
  - Marketing Brew notes the investment in a "more curated community online", including Discord [77].
- **Ambassadors.**
  - Members host events and represent Base44 in their city [84].
  - A Base44 LinkedIn post described 66 builders from 26 countries hosting events to help more people ship their first apps [90].
- **Affiliate and partner programs** [85][97]. Third-party directories list conflicting commission terms. Check the official page before quoting a rate.
- **Growth features built into the product.**
  - In September 2026, Base44 added Google Ads campaign management inside its chat builder [81].
  - **Inference:** helping users market their apps makes more of those apps succeed, which feeds the showcase.

### 3.4 After the acquisition: paid media at scale

- **Super Bowl LX (8 February 2026).**
  - A 30-second spot, "It's App to You", set in an office reminiscent of *The Office* [72][76].
  - One worker builds a budgeting app with a few prompts. Her coworkers then build their own: an office snack tracker, a dog-dating app, a party planner [69][71][75].
  - A teaser came out on 29 January 2026 [70][71].
  - Made in-house and directed by Tal Rosenthal and Noam Sharon [73][74].
  - iSpot counted 69.4M TV impressions. Marketing Brew reports the ad led to a spike in users [77].
- **Contest tie-in:** a nationwide contest with a $50,000 total prize pool that rewarded different kinds of creativity in app building [70][71][91].
- **A Wix "double feature":** Wix also ran a national Super Bowl ad for Wix Harmony, its AI website builder [71].
- **Other TV spots:** "Imagine" and "My Way", 30 seconds each [78][79][80].
- **YouTube and connected TV.**
  - 8th-most-viewed US brand by YouTube views in Q1 2026: more than 679M views of ads and other engagement video content, per Tubular Labs.
  - Ads on smart TVs running Google TV [77].
- **Budget context.**
  - Wix is reinvesting Base44's margin gains into sales and marketing aimed at professionals, partners and larger businesses [54][55].
  - Calcalist reported wider losses tied to the Base44 bet [56], and separately credited Base44 with driving a rebound in Wix's share price [92].
  - **Inference:** this is an acquirer's budget. Copy the message, not the spend.

### 3.5 How Base44 talks to non-technical builders

- **A plain promise.** The site title reads "Build Apps with AI in Minutes" [89]. Coverage describes the ad as showing that anyone can build working apps with simple prompts and no code [75].
- **Everyday uses, not technology.** Budgets, snack trackers, party planners [69][75].
- **Humor and wordplay.** "It's App to You" plays on "it's up to you". (The pun reading is our inference.)
- **Riding the category word.**
  - Press coverage and Base44's own blog frame the product as "vibe coding" [42][71][87].
  - Adweek opened with *"Base44 has only been around for a year, and it's already airing a Super Bowl commercial."* [71]
  - Creators publish "what is vibe coding" tutorials built on Base44 [88]. The sources don't say whether these are sponsored.

### 3.6 Visual and motion style

- **TV:** live-action workplace comedy with an ensemble cast. Each coworker's app escalates the last, like dominoes [69][71][75].
- **Founder content:** plain posts with numbers. **Inference:** little design polish; the specifics are the draw.
- **Product demos:** **Inference.** A chat prompt goes in and an app appears. The motion is functional rather than Framer-grade. We could not open Base44's video files to verify this.
- **Takeaway:** Base44 wins on reach, relatability and proof, not on motion craft. Framer wins on craft. Namzilabs can take the proof from one and the craft from the other.

---

## 4. Motion and video craft: a "Framer-smooth" spec

This is a working spec a motion designer can follow.

- **Where it comes from:** the principles are sourced from Framer's motion hiring brief [21], the advids teardown [22] and Tella's review [20].
- **The numbers are ours.** Every curve, duration and size below is our production spec (**Inference**), not Framer's internal settings. Use them as starting points and adjust by eye.

### 4.1 Principles

1. **Rebuild the UI; don't just record it.** Redraw real screens as vectors so every element can move independently. Framer's motion designers animate the UI "by hand" when needed [21].
2. **Move the camera; don't cut.** Treat the product as one large canvas and travel across it. Hard cuts are for changing scenes, not for moving around the UI.
3. **Give every movement a curve.** Nothing moves at constant speed except progress bars and tickers.
4. **Match the cursor to the audience.** Curved and fluid for creators and business owners; snappy for developers [22]. Namzilabs sells to business owners, so use curved.
5. **One idea per beat.** Between UI beats, set type on an empty background: a flat colour or a brand gradient [22].
6. **Make versions and test them.** Change only one thing per version: the hook, the pacing or the message [21].

### 4.2 Delivery formats

| Aspect | Size | Use | Layout notes |
|---|---|---|---|
| 16:9 | 1920×1080 (optional 3840×2160 master) | YouTube, X, website hero, launch film | Wide UI and camera travel |
| 1:1 | 1080×1080 | X and LinkedIn feed | Crop UI to the region that matters; enlarge type |
| 4:5 | 1080×1350 | Instagram and LinkedIn mobile feed | Stack headline above UI |
| 9:16 | 1080×1920 | Reels, TikTok, Shorts | Design a separate vertical layout (don't just crop). Keep text and key UI clear of the bottom ~20% and the right edge, where platform buttons sit |

- **Frame rate:**
  - 60 fps for anything with cursor movement, scrolling or UI motion.
  - 30 fps is fine for talking heads and live action.
  - Avoid 24 or 25 fps for scrolling UI; it judders.
  - Check each platform's current upload specs before export.
- **Capture resolution:** record or rebuild the UI at 2x (retina) so zooms up to about 2x stay sharp.
- **Motion blur:**
  - Turn it on for moving UI (a 180° shutter, After Effects' default).
  - Turn it off for held text.
  - Real motion blur is a big part of the "expensive" look.
- **Export:** H.264 or H.265 at a high bitrate. Every platform re-encodes, so give it a clean source.

### 4.3 Easing presets

| Name | cubic-bezier | Use | Duration |
|---|---|---|---|
| **Enter** (expo-out) | `0.16, 1, 0.3, 1` | Elements appearing, zoom-ins, cards expanding | 450 to 700 ms |
| **Move** (quint in-out) | `0.83, 0, 0.17, 1` | Camera pans, cursor travel, one element morphing into another | 600 to 1000 ms |
| **Standard** | `0.4, 0, 0.2, 1` | Small state changes such as toggles, hovers and tabs | 150 to 250 ms |
| **Exit** (accelerate) | `0.5, 0, 0.75, 0` | Elements leaving | 180 to 300 ms |
| **Pop** (spring) | Damping ratio about 0.7 to 0.8, overshoot 5% or less, settles within 600 ms | Clicks, badges, toasts, numbers landing | about 500 to 600 ms |

- **Spring in Motion or Framer:** `{ type: "spring", duration: 0.6, bounce: 0.2 }` is a good starting point. Go down to `bounce: 0.1` for serious data UI.
- **Enter in After Effects:**
  - Set the start keyframe to linear going out, so it launches at speed.
  - Ease the end keyframe in, with 80 to 95% influence, for a long soft landing.
  - Or use a curve plugin that accepts cubic-bezier values, such as Flow.
- **Move in After Effects:** ease both keyframes at about 60 to 80% influence.
- **Avoid:** applying the default Easy Ease (33% influence) to everything. It's the quickest route to a "template" look.

### 4.4 Durations and rhythm

| Element | Duration |
|---|---|
| Micro-interaction (hover, press, toggle) | 120 to 200 ms |
| UI element entering or leaving | 300 to 500 ms |
| Panel or card expanding; one element morphing into another | 500 to 800 ms |
| Camera move across the UI | 700 to 1200 ms |
| Stagger between sibling elements | 30 to 60 ms |
| Stagger between groups | 80 to 120 ms |
| Overlap | Start the next action when the previous one is 60 to 80% complete. Only intentional holds should stop dead |
| Text hold | At least (word count ÷ 3) seconds + 0.5 s, and never under 1.0 to 1.2 s |
| Beat length in social cuts | A new visual beat every 1.5 to 3 s, cut on the music's downbeats |

### 4.5 Cursor choreography

- **Path:**
  - Move on bezier arcs, never straight lines over long distances.
  - Offset the arc by 10 to 20% of the distance travelled.
  - Use the **Move** curve, taking 400 to 700 ms per trip.
- **Size:** enlarge the cursor to 1.3 to 1.5x its native size in 1080p exports so it reads on a phone.
- **Click:**
  - Cursor scales 1 → 0.85 → 1 over 120 to 180 ms.
  - The target button presses to 0.97 scale.
  - An optional soft ripple.
- **Typing:**
  - Reveal characters at 25 to 40 ms each, with slight random variation.
  - For long strings, reveal word by word or pre-fill the field.
- **Idle:** hide the cursor, or let it rest out of the way, when it isn't doing anything. A drifting cursor looks nervous.

### 4.6 Transitions library

1. **Blur-fade-rise (entrance).** Over 500 to 700 ms on the Enter curve:
   - opacity 0 → 1;
   - blur 12 px → 0;
   - y +20 px → 0;
   - scale 0.98 → 1.
2. **Mask wipe (text).** Each line reveals upward from its baseline over 450 to 600 ms on the Enter curve, with 60 ms between lines.
3. **Shared-element morph.** An element in scene A becomes an element in scene B, interpolating position, size, corner radius and colour. 600 to 800 ms on the Move curve. Example: a metric card grows into a dashboard tile.
4. **Zoom-through.** Push into a UI element until it fills the frame, then cut on the frame with the most blur. 500 to 700 ms.
5. **Whip pan.** 250 to 350 ms with motion blur. Use it at most twice per video.
6. **Void reset.** Fade to a brand gradient panel for a kinetic-type beat, then come back to the UI [22].
7. **Sheen.** A soft light sweep across a key number over 600 to 900 ms. Use it sparingly.

### 4.7 Camera moves

- Lay the UI out on a large 2D canvas and move a virtual camera across it: pan, plus a zoom from 1.0 to 1.6x.
- **Hero shots:** add a slight 3D tilt (rotateX 8 to 15°), then flatten to 0° before any detail the viewer must read.
- **Depth:**
  - Layer UI panels with soft shadows: y 20 to 40 px, blur 60 to 100 px, opacity 15 to 25%.
  - Move foreground layers 1.1 to 1.2x as fast as background layers for gentle parallax.

### 4.8 Type treatment, using the Namzilabs brand

- **Typefaces:** Inter or Switzer for display and body. Each headline gets exactly one Instrument Serif italic accent word (brand rule).
- **Display settings:** tracking −2% to −4% at large sizes; line height 0.95 to 1.05.
- **Accent word:**
  - Bring it in last, 120 to 200 ms after the rest of the line.
  - Give it its own move: blur-to-focus, or a shift to #568CFF.
- **Sizes:**
  - Vertical 1080×1920: headlines 88 to 120 px; captions 44 to 56 px.
  - 1920×1080: headlines 96 to 140 px.
- **Density:** 2 to 7 words per card, one idea per card.
- **Numbers:**
  - Use tabular figures.
  - Count up over 600 to 1000 ms on the Enter curve.
  - Only animate numbers that are real, or clearly labelled "Sample data".
- **Backgrounds:**
  - Kinetic-type beats sit on the deep-blue gradient panels. This is the Namzilabs version of Framer's "abstract void" [22].
  - UI beats sit on a neutral field so the product stays legible.
  - Keep text contrast at 4.5:1 or better.
- **Captions:** burned in on every social cut, inside the safe zones.

### 4.9 Sound

- **Music:** minimal electronic or light house at about 100 to 125 BPM, with visual beats cut on downbeats.
- **Mixing:** duck the music about 12 to 18 dB under voice-over.
- **Sound effects:**
  - soft clicks for the cursor;
  - airy whooshes for camera moves;
  - light ticks for number count-ups.
- **Loudness:** master at around −14 LUFS integrated as a rule of thumb, then check each platform's guidance.
- **Muted viewing:** the video must work with the sound off, so on-screen text carries the story.

### 4.10 Structures with timecodes

**Feature loop (8 to 12 s), for X, LinkedIn and the changelog**

| Time | Beat |
|---|---|
| 0 to 1 s | End state first: the finished metric or view |
| 1 to 7 s | The action: cursor-driven, 2 to 3 steps |
| 7 to 10 s | Result, plus a label in 3 to 5 words |
| 10 to 12 s | The loop point matches frame 1, so the clip loops seamlessly |

**Social demo (25 to 30 s), mapped to the Namzilabs flow builder**

| Time | Beat |
|---|---|
| 0 to 2 s | **Hook:** a kinetic-type question or the finished number |
| 2 to 5 s | **Problem:** the tools don't agree, and no single tool can calculate this |
| 5 to 10 s | **Get data:** source cards connect |
| 10 to 15 s | **Filter/Match:** records from different tools merge into one person; excluded records drop out with a reason tag |
| 15 to 20 s | **Summarize/Calculate:** the metric resolves |
| 20 to 25 s | **Publish:** the dashboard tile appears; the number unfolds to show its working |
| 25 to 30 s | **End card:** "Free to start. No card." and namzilabs.co |

**Launch film (45 to 75 s)**

| Time | Beat |
|---|---|
| 0 to 6 s | Cold open on kinetic type |
| 6 to 12 s | The UI appears in a hero shot, with a camera move |
| 12 to 55 s | 3 to 5 feature beats of about 8 to 10 s each, joined by morphs |
| Final 8 s | Montage building to a crescendo |
| 3 s | End card |

### 4.11 Production pipeline

**Full craft, the Framer way:**

1. Rebuild the real screens in Figma at 2x, using real product states only.
2. Move the layers into After Effects with a Figma-to-AE transfer plugin, such as AEUX.
3. Animate by hand with the presets above [21].
4. Composite with real screen captures where that helps.
5. Add sound, burn in captions, then export every aspect ratio.

**Lighter pipeline for a solo founder:**

1. Record the real product at 60 fps with an auto-zoom screen recorder such as Screen Studio.
2. Add kinetic-type beats in a browser motion tool such as Jitter, or in After Effects templates built on the presets above.
3. Keep one After Effects or Jitter project as the house template, so every clip shares the same curves.

**Versions:** cut 3 hook variants per clip and keep the body the same, so the hook is the only thing that changes [21].

### 4.12 QA checklist

- [ ] Every screen shown exists in the product today. No mocked-up features.
- [ ] Sample data is labelled "Sample data" on screen.
- [ ] Nothing shows an unapproved integration as connected, and nothing implies MCP access is live before it is.
- [ ] Every clip works muted, with captions on.
- [ ] Frame 1 makes sense on its own, since platforms use it as the thumbnail.
- [ ] The cursor reads at phone size.
- [ ] No linear movement except progress bars and tickers.
- [ ] Each headline has exactly one Instrument Serif italic accent word.

---

## 5. Formats and hooks library

### 5.1 Formats

| # | Format | Used by | Real example | Why it works | Namzilabs version |
|---|---|---|---|---|---|
| 1 | "Introducing X" launch clip | Framer | Wireframer, On-Page Editing, Framer 3.0 posts [8][11][12] | Names the thing, gives its job in one line, and lets the film persuade | "Introducing numbers that show their working." Clip of a metric unfolding into its working |
| 2 | Keynote-style launch event | Framer | Fall 2024, Spring 2025, Framer 3.0 events [10][14][17] | Bundles many releases into one moment people can share | Twice-yearly "Receipts Live" stream once there's enough to show (**Inference**) |
| 3 | Changelog entry as mini-launch | Framer | Updates pages built like launch pages [18][19] | Turns small ships into shareable posts | Weekly "What shipped": one 10 s clip per shipped item |
| 4 | Year-in-review stats page | Framer | framer.com/2024, framer.com/2025 [4][5] | A page of proof at scale that people share | Monthly "Month in receipts" with real build numbers only, zeros included |
| 5 | Awards and site of the month | Framer | Site of the Month, Framer Awards, judges on X [31][32][33][34] | Users make the content; winners share it | Later: a "Flow of the Month", shared with permission and anonymised |
| 6 | "Get paid to create" recruitment | Framer | Creators page, 50% referral share [28][29] | Turns people with audiences into a sales force | Later: affiliate or partner program for agencies that serve coaches and e-commerce brands |
| 7 | Founder milestone post | Base44 | *"Yesterday, Base44 crossed 20k users and became profitable."* [57] | One fact, a time anchor, then the lessons | "Yesterday, Namzilabs [real milestone]. Here's what broke on the way." |
| 8 | "What worked and what didn't" thread | Base44 | *"…I failed miserably at marketing. Here's a long thread of what worked and what didn't 🧵"* [60] | Honesty plus useful lessons | "What I got wrong matching Calendly bookings to Stripe payments 🧵" (only if true) |
| 9 | Receipts follow-up | Base44 | *"Wow this post blew up. Added 5k users and 1/3 of Base44's revenue in 24 hours."* [59] | Proof of momentum, plus a promise of more episodes | "Here's exactly what last week's post did: [real signups], from [real source]." |
| 10 | Interview and press amplification | Base44 | Lenny's Podcast, 20VC, Calcalist [61][62][67][68] | Borrowed audiences and third-party credibility | Pitch niche podcasts for coaches and e-commerce brands once there's a real story (**Inference**) |
| 11 | Community voting for credits | Base44 | Launchpad: 200, 100 or 50 credits plus a featured spot [82] | Gamified sharing that produces showcase content | Later: vote on the most requested metric recipe, with the winner built live |
| 12 | Contest tied to a cultural moment | Base44 | $50K Super Bowl app contest [70][91] | Joins a conversation that's already happening | Low-cost version: "Tell me the metric your tools can't give you" week |
| 13 | Relatable skit | Base44 | Office "domino" of apps [69][75] | People recognise their own workplace | "Monday sales standup": setter, closer and owner each quote a show-up rate from a different tool |
| 14 | Category explainer | Base44 | Vibe coding blog posts and creator tutorials [87][88] | Owns the search term for the trend | "What is speed to lead, and why does it take two tools to measure?" |

### 5.2 Hook patterns with real examples

| Pattern | Real example | Namzilabs template (true to the product) |
|---|---|---|
| **Introduce, say the job, contrast** | *"Introducing On-Page Editing for Framer. Edit text, replace images, and create new CMS pages, all directly on your site. No canvas. No CMS."* [11] | "Introducing numbers that show their working. Sources read. Records matched. Records excluded, and why." |
| **Momentum line** | *"Wireframer is just getting started."* [12] | "33 sources live. Three more waiting on platform approval." |
| **See it all** | *"See everything that's new below."* [8] | "Everything that shipped this month ↓" |
| **Yesterday + milestone** | *"Yesterday, Base44 crossed 20k users and became profitable."* [57] | "Yesterday, [real milestone, e.g., source #N went live]." |
| **Result + vulnerability + thread** | *"Once things started clicking - it took 3 weeks to go from $0 to $1M ARR… But before that, I failed miserably at marketing."* [60] | "I built Meta, TikTok and Google Ads connectors. All three are waiting on platform approval. Here's what shipping into a queue looks like 🧵" |
| **Receipts follow-up** | *"Wow this post blew up. Added 5k users and 1/3 of Base44's revenue in 24 hours."* [59] | "That post brought in [real number] signups. Here's the dashboard, with its working shown." |
| **Time-delta milestone** | *"We just blew past $200M ARR at Base44"*, *"5 months after hitting $100M"* [52] | Use only once real milestones exist |
| **Bold founder claim** | *"I achieved the Holy Grail: I built software that builds software"* [67] | "Your tools each tell part of the story. I built the thing that lines them up." |
| **Borrowed authority** | *"In his first interview since the acquisition…"* [62] | Earned media only. Never fake it |
| **Wordplay tagline** | "It's App to You" [69] | The brand tone is plain, so use sparingly |
| **Just shipped** | *"Live preview just shipped in Framer X beta 3"* [98] | "Just shipped: [feature]." + a 10 s clip |

### 5.3 How the two companies cut product demos for social

- **Framer:**
  - One film per feature, posted with an "Introducing…" line [8][11][12].
  - A matching Updates page for each [18][19].
  - Longer event recordings on YouTube [10][14].
  - **Inference:** short loops for the feed, a longer film for YouTube and the site.
- **Base44:**
  - Live-action stories where the UI is brief and the use case is the star [69][75].
  - Founder posts carry the product story in text and numbers [57][59][60].
  - Launchpad showcases use screenshots or short demo videos made by users [82].

### 5.4 CTA styles

- **Framer:**
  - Sends people to more content: "See everything that's new below." [8]
  - Recruits creators: "Get paid to create with Framer" [29].
  - Makes a segment-specific promise: "The fastest way to launch your startup site" [39].
- **Base44:**
  - A plain promise: "Build Apps with AI in Minutes" [89].
  - Asks people to join in: the contest [70][91] and Launchpad votes [82].
  - The founder's CTA is the next episode: *"Will be posting more on the journey, next up…"* [59].
- **Pattern (Inference):** hard "sign up now" CTAs are rare in both companies' organic content. The CTA is usually to watch more, follow the story or take part. Signup CTAs sit on landing pages and paid media.

---

## 6. Lessons for Namzilabs

### 6.1 Claim guardrails: read these before posting anything

| Status | What you can say |
|---|---|
| **Say now** (product facts) | Connects your tools and pulls their records into one place. Matches the records that are the same person across tools. Builds metrics no single tool can: show-up rate, speed to lead, cost per held meeting, revenue per lead, close rate. No-code flow builder: Get data → Filter/Match → Summarize/Calculate → Publish. Live dashboard. Every number shows its working: sources read, records matched, records excluded and why. 33 live sources. Free to start, no card. |
| **Say with care** | **MCP access for Claude and ChatGPT:** it is *being switched on*. Say "switching on" or "coming", never "works today", until it is live. **Meta Ads, TikTok Ads, Google Ads:** built, awaiting platform approval. Never show them as connected in a demo. **Cost per held meeting in demos:** take spend from a live source such as Google Sheets, and say so on screen. **Sample data:** label it on screen. |
| **Don't say** | Customer counts, testimonials, logos, "trusted by", improvement percentages ("raise close rate by X%"), time-saved claims, "real-time" (say "live"), "AI-powered matching" (not in the product facts). |

### 6.2 Fourteen lessons, mapped to the product

**1. Make "shows its working" the visual signature, the way Framer uses motion.**
- **What we learned:** Framer's films prove the product's core strength with the product's own medium [20][21][23].
- **What to do:**
  - Build one recurring motion motif, "The Receipt".
  - A metric lands with the Pop spring, then unfolds line by line:
    1. sources read;
    2. records matched;
    3. records excluded, each with a reason tag.
  - Each line uses the Enter curve with a 60 ms stagger.
  - Use it as the proof beat in every video, and as a static carousel slide.
- **Claim check:** the exclusion reasons on screen must mirror real reasons the product shows.

**2. Structure every demo around the four flow-builder steps.**
- Get data → Filter/Match → Summarize/Calculate → Publish maps one-to-one onto the 25 to 30 s structure in §4.10.
- Use the same four title cards every time so viewers learn the rhythm.
- Put the one Instrument Serif italic accent word on the step verb.

**3. Own the "match" moment the way Framer owns its cursor.**
- **What we learned:** Framer's curved cursor is a signature that analysts call out by name [22].
- **What to do:**
  - Two or three record chips from different tools glide together on the Move curve over about 700 ms. Example: a Calendly booking, a Close lead and a Stripe payment sharing an email.
  - They merge into one person row with a spring pop.
  - Records that don't match slide out with their reason.
  - This is the product's magic in one shot. Reuse it everywhere.

**4. Build in public in Maor's voice, on one channel.**
- **What we learned:** focusing on one channel, posting plain numbers and failures, and serialising the story drove Base44's early growth. One post brought 5K users and a third of revenue in 24 hours [59][60][63].
- **What to do:**
  - Pick X or LinkedIn and stay there for 60 days before adding another channel. Choose where coaches' sales teams and e-commerce owners already talk shop (**Inference:** both are active on X and LinkedIn).
  - Post real build numbers, including small ones and zeros: sources shipped, bugs fixed, days waiting on platform approvals.
- **True story you can tell now:** "I built Meta, TikTok and Google Ads connectors. All three are waiting on platform approval."

**5. Run "33 sources, 33 posts" as a changelog-as-launch series.**
- **What we learned:** Framer packages ships as launches [19] and shipped 100+ features in 2025 [5]. Shipping cadence is content in itself.
- **What to do:**
  - One post per live source, in the pattern "[Source A] + [Source B] = [metric]", with a 10 s clip.
  - **Illustrative pairings** (confirm each works in the product before posting):
    - Typeform or Tally + Close → speed to lead.
    - Calendly or Cal.com + Stripe → revenue per lead.
    - Klaviyo + Shopify → revenue per lead for e-commerce.
  - Tag the source tool. **Inference:** integration partners often reshare, and app-directory listings, where they exist, add discovery.

**6. Teach one metric in one minute, per customer type.**
- **What we learned:** Framer Academy and Framer's YouTube reach [4][26][35], and Base44's plain-language promise [89].
- **What to do:** for each metric, say what it is, where the data lives, and why no single tool can calculate it.
  - **Coaches and info-product owners with setters and closers:** show-up rate, speed to lead, close rate, cost per held meeting.
  - **E-commerce brand owners:** revenue per lead.
  - **Creators:** revenue per lead, using Tally or Typeform plus Whop, Thinkific, ThriveCart or Stripe.
- **Claim check:** don't assert how the product calculates each metric until you've confirmed it in the product.

**7. Recreate Base44's office domino on a solo budget.**
- **What we learned:** a relatable workplace scene let the product's promise land with non-technical viewers [69][75].
- **What to do:** a "Monday sales standup" skit.
  - The setter, closer and owner each quote a different show-up rate from a different tool.
  - The owner opens one number that shows its working.
  - No real figures are needed: the premise is the hook.
  - Shoot it on a phone, or animate it with UI.

**8. Build participation loops sized for pre-traction.**
- **What we learned:** Base44 used Launchpad credits and contests [82][91]; Framer uses awards and remix-link referrals [28][31].
- **What to do now:**
  - "Reply with your tool stack (names only) and I'll show which cross-tool metrics it can produce."
  - This uses no private data and generates content ideas.
- **Later, as program ideas rather than current features:**
  - flow "recipes" that users can duplicate;
  - Framer-style referral revenue for agencies and consultants who set Namzilabs up for clients.

**9. Ride the trend honestly.**
- **What we learned:** Base44 attached itself to "vibe coding" in press, on its blog and through creator tutorials [42][87][88].
- **Namzilabs' adjacent trend:** AI assistants reading business data through MCP.
- **What to do:**
  - Build the switch-on in public ("switching on MCP: day 1").
  - Once it's live, film: "Asking Claude for last week's show-up rate". The answer should cite the published metric and its working.
  - Never claim it works before it does.

**10. Set a cadence one person can keep.**
- **What we learned:** Framer combines constant shipping [5], changelog launches [19], seasonal events [14][17] and yearly recap pages [4][5].
- **What to do (Inference, sized for one person):**
  - **Weekdays:** a founder post.
  - **Twice a week:** a 10 to 30 s product clip.
  - **Weekly:** a "What shipped" clip.
  - **Monthly:** a "Month in receipts" page.
  - **Big moments only:** a polished launch film, for example MCP going live or ad-platform approvals.

**11. Use the same end card every time, and make the post's CTA the next episode.**
- **End card:** "Free to start. No card." and namzilabs.co.
- **In founder posts,** copy Maor's "next up…" close [59]. Example: "Next: how a Calendly booking gets matched to a Stripe payment."

**12. Measure like Maor, and turn the measuring into content.**
- **What we learned:** Maor could say "5k users and 1/3 of revenue in 24 hours" because he tracked results per post [59].
- **What to do:**
  - Put UTM tags on every link.
  - Dogfood: build a Namzilabs flow for Namzilabs' own content funnel. Use GA4 and a custom webhook for signups, both live sources.
  - Publish the dashboard, working shown, with real numbers including zeros.

**13. Make versions, not just posts.**
- **What we learned:** Framer's motion designers test variants of design, motion, pacing and message [21].
- **What to do:**
  - Cut 3 hooks per clip with an identical body.
  - Keep the version that wins on signups, not views.

**14. What not to copy.**
- **Base44's paid scale:** Super Bowl, YouTube and connected-TV spend funded by an acquirer [55][77].
- **Framer's marketplace economics,** before Namzilabs has traction.
- **Any form of social proof you don't have yet:** testimonials, logos, "trusted by".

### 6.3 A four-week starter plan (Inference)

| Week | Founder posts (one channel) | Product clips | Recurring pieces |
|---|---|---|---|
| 1 | Origin: why cross-tool metrics; how many sources are live | "The Receipt" motif launch clip (§6.2, lesson 1) | Start the "33 sources" series |
| 2 | The ad-platform approval queue (a true story) | Match-moment clip (lesson 3) | Metric explainer: show-up rate |
| 3 | What broke this week, and what the fix taught me | 30 s four-beat demo (lesson 2) | Metric explainer: speed to lead |
| 4 | Receipts on the month: real signups and real shipped count | "Monday sales standup" skit (lesson 7) | First "Month in receipts" page |

---

## 7. What we could not verify

- **View and engagement counts** for individual Framer or Base44 posts and videos. No source we reached stated them.
- **Framer's video specs:** lengths, music choices and exact easing values. Section 4 is our spec, not Framer's settings.
- **Framer's Instagram content mix,** beyond its 2024 follower count [4].
- **Base44's paid-media spend,** and the scripts and creative of the "Imagine" and "My Way" spots, beyond their titles and lengths [79][80].
- **Base44's affiliate commission terms.** Third-party listings conflict; check the official page [85].
- **User counts at the acquisition.** Sources give both 100K+ [44] and 250K+ [42][45].
- **The full text of Maor Shlomo's April 2025 thread.** We relied on the post's first lines and on secondary summaries [60][63][64].

---

## 8. Sources

1. SiliconANGLE, "Professional website design platform Framer raises $100M at $2B valuation" (Aug 28, 2025): https://siliconangle.com/2025/08/28/professional-website-design-platform-framer-raises-100m-2b-valuation/
2. Business Wire, "Framer Raises $100 Million Series D at a $2 Billion Valuation": https://www.businesswire.com/news/home/20250828901842/en/Framer-Raises-$100-Million-Series-D-at-a-$2-Billion-Valuation-to-Redefine-How-Businesses-Build-Websites
3. Sacra, "Framer revenue, funding & growth rate": https://sacra.com/c/framer/
4. Framer, "2024 year in review": https://www.framer.com/2024
5. Framer, "2025 year in review": https://www.framer.com/2025
6. Business Wire, "Framer Launches AI Agents" (Jun 16, 2026): https://www.businesswire.com/news/home/20260616909966/en/Framer-Launches-AI-Agents
7. Framer blog, "Introducing Framer Agents, Branching, and the new Community": https://www.framer.com/blog/framer-3/
8. Framer on X, Framer 3.0 announcement (Jun 16, 2026): https://x.com/framer/status/2066939366568804508
9. Framer on YouTube, "Framer 3.0 with Agents, Branching, and a new Community": https://www.youtube.com/watch?v=6aioEoCdBJw
10. Framer on YouTube, "Framer Event: Introducing Agents, Branching, and a new Community": https://www.youtube.com/watch?v=j4WW4bwWhPk
11. Framer on X, "Introducing On-Page Editing for Framer" (Aug 6, 2025): https://x.com/framer/status/1953140612083138910
12. Framer on X, "Introducing Wireframer" (May 21, 2025): https://x.com/framer/status/1925237382565306414
13. AlternativeTo, "Framer introduces Wireframer, Vectors 2.0, Workshop, and Advanced Analytics" (May 2025): https://alternativeto.net/news/2025/5/framer-introduces-wireframer-vectors-2-0-workshop-and-advanced-analytics
14. Framer on YouTube, "Framer Event: Spring 2025": https://www.youtube.com/watch?v=UlmSVg2Q0Ws
15. Octet Design, "Framer Spring Event Keynote" recap: https://octet.design/journal/framer-spring-event-keynote/
16. Design Monks, "Highlights from Framer Spring Event 2025": https://www.designmonks.co/blog/framer-spring-event-2025
17. Framer, "Fall Event" (2024): https://www.framer.com/events/fall-24/
18. Framer, "Updates": https://www.framer.com/updates
19. ProductLift, "Changelog examples from top SaaS companies": https://www.productlift.dev/blog/best-changelog-examples/
20. Tella, "Framer AI: Winner Promo Video of 2023": https://www.tella.com/best-product-videos/framer-ai
21. Framer Careers, "Motion Designer": https://www.framer.com/careers/motion-designer
22. advids, "SaaS launch teaser video examples" (launch-teaser analysis): https://advids.co/blog/saas-launch-teaser
23. Framer, "Motion" (dictionary entry): https://www.framer.com/dictionary/motion
24. Framer Help, "How animations and effects work in Framer": https://www.framer.com/help/articles/how-animations-and-effects-work-in-framer/
25. Framer University, "Time to replace After Effects with Framer": https://framer.university/lessons/use-framer-instead-of-after-effects
26. Framer Academy, "Mastering Animations and Interactions in Framer": https://www.framer.com/academy/courses/mastering-animations-and-interactions-in-framer
27. Framer, "Best Interactions Awards": https://www.framer.com/community/awards/interactions/
28. Framer Help, "How the Creator Program works": https://www.framer.com/help/articles/how-the-creator-program-works/
29. Framer, "Get paid to create with Framer": https://www.framer.com/creators
30. AlternativeTo, "Framer launches a new Dashboard for Framer Creators" (Mar 2025): https://alternativeto.net/news/2025/3/framer-launches-a-new-dashboard-for-framer-creators-to-track-earnings-and-insights
31. Framer, "Framer Awards": https://www.framer.com/awards/
32. Framer Community, "Framer Awards: Site of the Year 2023": https://www.framer.community/c/announcements/framer-awards-site-of-the-year-2023
33. Framer on X, "Introducing the #FramerAwards 2023 Judges" (Nov 29, 2023): https://twitter.com/framer/status/1729878586134499542
34. Framer on LinkedIn, "Site of the Month Award" (Feb 2023): https://www.linkedin.com/posts/framer_framer-site-of-the-month-award-activity-7026933185439531008-6mHR
35. Framer Academy, courses: https://www.framer.com/academy/courses/
36. Framer University: https://framer.university/
37. Max Cobalt (Medium), "Unveiling the Marketing Strategy: How Framer Achieves Successful Onboarding": https://medium.com/@maxthecoder/unveiling-the-marketing-strategy-how-framer-achieves-successful-onboarding-1430293df651
38. Dihook, "Framer case study 2026": https://dihook.com/1-best-framer-case-study-2026/
39. Framer, "The fastest way to launch your startup site": https://www.framer.com/startups/
40. Framer Help, "How affiliate links work": https://www.framer.com/help/articles/how-affiliate-links-work/
41. Framer Community, "Spring Event 2025": https://www.framer.community/c/announcements/spring-event-2025
42. TechCrunch, "6-month-old, solo-owned vibe coder Base44 sells to Wix for $80M cash" (Jun 18, 2025): https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/
43. Wix press room, "Wix Further Expands into Vibe Coding with Acquisition of Base44": https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif
44. Calcalist (Ctech), "Vibe coding fever: Solo entrepreneur's Base44 acquired by Wix for $80 million": https://www.calcalistech.com/ctechnews/article/s1iflnlelx
45. The AI Insider, "Wix Acquires Six-month-old AI 'Vibe Coding' Startup Base44 for $80M Cash": https://theaiinsider.tech/2025/06/20/wix-acquires-six-month-old-ai-vibe-coding-startup-base44-for-80m-cash/
46. Calcalist (Ctech), "Base44 founder Maor Shlomo set to receive $90 million in cash after hitting milestones with Wix": https://www.calcalistech.com/ctechnews/article/hjm11dastwl
47. Latka, "Base44 Revenue: $80M Wix Deal, Then $150M ARR": https://getlatka.com/blog/base44-revenue-acquired-wix
48. Calcalist (Ctech), "'Supersonic Growth': Base44 set to hit $50M ARR just months after Wix acquisition": https://www.calcalistech.com/ctechnews/article/n4je37x0k
49. Calcalist (Ctech), "Base44 becomes Wix's surprise growth engine with 2 million users, $50M ARR": https://www.calcalistech.com/ctechnews/article/sy194qsg11g
50. Calcalist (Ctech), "Base44 hits $100 million ARR nine months after Wix acquisition, one year after founding": https://www.calcalistech.com/ctechnews/article/bkqq0pry11e
51. Seeking Alpha, "Wix outlines mid-teens revenue growth for 2026 as AI strategy accelerates, Base44 surpasses $100M ARR": https://seekingalpha.com/news/4560867-wix-outlines-mid-teens-revenue-growth-for-2026-as-ai-strategy-accelerates-base44-surpasses
52. Calcalist (Ctech), "Base44 doubles ARR to $200 million in just five months": https://www.calcalistech.com/ctechnews/article/syw900pvdzg
53. Nasdaq, "Wix Reports Second Quarter 2026 Results" (Aug 4, 2026): https://www.nasdaq.com/press-release/wix-reports-second-quarter-2026-results-2026-08-04
54. Investing.com, "Wix Q2 2026 slides: AI push drives 15% revenue growth, Base44 scales": https://www.investing.com/news/company-news/wix-q2-2026-slides-ai-push-drives-15-revenue-growth-base44-scales-93CH-4834907
55. Finimize, "Wix Is Reinvesting Base44 Profits To Keep Growth Rolling": https://finimize.com/content/wix-is-reinvesting-base44-profits-to-keep-growth-rolling
56. Calcalist (Ctech), "Wix's Base44 bet comes at a price as losses widen to $76.4 million": https://www.calcalistech.com/ctechnews/article/5gj9agi67
57. Maor Shlomo on LinkedIn, "Yesterday, Base44 crossed 20k users and became profitable." (Mar 5, 2025): https://www.linkedin.com/posts/maor-shlomo-1088b4144_yesterday-base44-crossed-20k-users-and-became-activity-7303077044597252098-gbXW
58. Base44 on X, "Sharing some of our journey so far:" (Mar 5, 2025): https://x.com/Base44/status/1897286535999054284
59. Maor Shlomo on X, "Wow this post blew up…" (Mar 6, 2025): https://x.com/MS_BASE44/status/1897725662837760168
60. Maor Shlomo on X, "I've scaled Base44 bootstrapped, solo, and mostly organically…" thread (Apr 14, 2025): https://x.com/MS_BASE44/status/1911778607548051605
61. Lenny's Newsletter / Lenny's Podcast, "Solo founder, $80M exit, 6 months: The Base44 bootstrapped startup success story": https://www.lennysnewsletter.com/p/the-base44-bootstrapped-startup-success-story-maor-shlomo
62. Lenny Rachitsky on X, interview announcement (Jul 6, 2025): https://x.com/lennysan/status/1941885326458585159
63. What a Startup (Substack), "A solo founder just sold his 6 months old AI startup for $80M": https://whatastartup.substack.com/p/a-solo-founder-just-sold-his-6-months-old-ai-startup-for-80-million-dollars
64. henrythe9th (Substack), "How a Founder Sold His 1-Person AI Startup for 9 Figures in 6 months": https://henrythe9th.substack.com/p/how-a-founder-sold-his-1-person-ai
65. AI & No-Code Exits (Substack), "How Maor Shlomo sold Base44 for $80M": https://nocodeexits.substack.com/p/how-maor-shlomo-sold-base44-for-80m
66. intro.co, "How Base44 Got Acquired in 500 Days": https://intro.co/blog/how-base44-got-acquired-in-500-days
67. Calcalist (Ctech), "'I achieved the Holy Grail: I built software that builds software'": https://www.calcalistech.com/ctechnews/article/y0kdgmw7a
68. 20VC (Apple Podcasts), episode with Base44's Maor Shlomo on vibe coding: https://podcasts.apple.com/lk/podcast/20vc-base44s-maor-shlomo-on-how-vibe-coding-will-kill/id958230465?i=1000738083110
69. Wix press room, "Base44 to Air its First Super Bowl Ad": https://www.wix.com/press-room/home/post/base44-to-air-its-first-super-bowl-ad
70. GlobeNewswire, "Introducing Base44's Super Bowl Teaser: 'It's App to You'" (Jan 29, 2026): https://www.globenewswire.com/news-release/2026/01/29/3228677/0/en/Introducing-Base44-s-Super-Bowl-Teaser-It-s-App-to-You.html
71. Adweek, "Base44's Super Bowl Debut Is As Simple As Its App Building Platform": https://www.adweek.com/creativity/base44s-super-bowl-debut-is-as-simple-as-its-app-building-platform/
72. iSpot, "Base44 Super Bowl 2026 TV Spot, 'It's App to You'": https://www.ispot.tv/ad/gnPC/base44-super-bowl-2026-pre-release-its-app-to-you
73. Ads of the World, "Base44: It's App to You": https://www.adsoftheworld.com/campaigns/it-s-app-to-you
74. LBB Online, "Introducing Base44's Big Game Ad 'It's App to You'": https://lbbonline.com/work/159712
75. VINnews, "Israeli AI Startup Base44 Makes Super Bowl Debut with 'It's App to You' Ad" (Feb 9, 2026): https://vinnews.com/2026/02/09/israeli-ai-startup-base44-makes-super-bowl-debut-with-its-app-to-you-ad/
76. YouTube, "Introducing Base44's Big Game Full Ad 'It's App to You'": https://www.youtube.com/watch?v=kLdaIxDM-_Y
77. Marketing Brew, "Base44 is one of the most-viewed brands on YouTube. Here's a look at its ad strategy" (Jun 2026): https://www.marketingbrew.com/stories/base44-app-advertising-strategy-youtube-smart-tvs-superbowl
78. iSpot, Base44 TV commercials (brand page): https://www.ispot.tv/brands/DtJ/base44
79. iSpot, "Base44 TV Spot, 'Imagine'": https://www.ispot.tv/ad/g2ZC/base44-imagine
80. iSpot, "Base44 TV Spot, 'My Way'": https://www.ispot.tv/ad/gbRW/base44-my-way
81. PPC Land, "Base44 gains native Google Ads campaign management inside its chat builder" (Sep 2026): https://ppc.land/base44-gains-native-google-ads-campaign-management-inside-its-chat-builder/
82. Base44 Docs, "Submitting your app to Launchpad": https://docs.base44.com/promoting-your-app/submitting-to-launchpad
83. Base44 Docs, "Community": https://docs.base44.com/Community-and-support/Community
84. Base44, "Ambassador Program": https://ambassadors.base44.com/
85. Base44, "Affiliate Program": https://base44.com/affiliates
86. Base44, "Templates": https://base44.com/templates
87. Base44 blog, "Top vibe coding trends shaping how apps get built": https://base44.com/blog/vibe-coding-trends
88. Kevin Stratvert, "What is Vibe Coding? | Vibe Code with Base44" (Dec 29, 2025): https://kevinstratvert.com/2025/12/29/what-is-vibe-coding-vibe-code-with-base44/
89. Base44 homepage, "Build Apps with AI in Minutes": https://base44.com/
90. Base44 on LinkedIn (company page): https://www.linkedin.com/company/base44
91. StockTitan, "Build-an-app Super Bowl moment: Base44 backs a $50K creativity contest": https://www.stocktitan.net/news/WIX/introducing-base44-s-super-bowl-teaser-it-s-app-to-3j9vauw5iprg.html
92. Calcalist (Ctech), "Wix shares have more than doubled in two months. Base44 is driving the comeback": https://www.calcalistech.com/ctechnews/article/bjs8odopfx
93. Nasdaq, "Wix Reports Fourth Quarter and Full Year 2025 Results" (Mar 4, 2026): https://www.nasdaq.com/press-release/wix-reports-fourth-quarter-and-full-year-2025-results-2026-03-04
94. Proactive Investors, "Wix Q2 results show steady core business and improving Base44 economics": https://www.proactiveinvestors.com/companies/news/1096534/wix-q2-results-show-steady-core-business-and-improving-base44-economics-1096534.html
95. Inc., "How Base44 Found a Buyer 4 Months After Launching": https://www.inc.com/ben-sherry/vibe-coding-base44-wix-avishai-abrahami-maor-shlomo/91267959
96. Base44 feedback board, "Top apps created by the community": https://feedback.base44.com/p/top-apps-created-by-the-community
97. Base44, "Partners": https://app.base44.com/partners
98. Koen Bok on X, "Live preview just shipped in Framer X beta 3" (Sep 4, 2018): https://x.com/koenbok/status/1036999610961678336
99. Framer, "Motion (prev Framer Motion): JavaScript & React animation library": https://www.framer.com/motion/
100. Latka, "Framer Revenue 2025": https://getlatka.com/companies/framer.com
101. Dealroom, "No-Code Design Meets Growth: Framer Raises $100M Toward $100M ARR Goal": https://app.dealroom.co/news/note/no-code-design-meets-growth-framer-raises-100m-toward-100m-arr-goal
102. Framer blog, "Why the best companies are moving to Framer and how our funding will take it further" (Series D): https://www.framer.com/blog/series-d/
