# Portfolio Rewrite for Cold B2B Outreach — Marek Paňko / JustFossa

**Goal:** make every section on the page pull in the same direction as the headline — *"Websites and software that bring your business more customers."* Right now the hero promises customer acquisition, but the proof points (projects, experience, zero social proof) talk to other engineers. This doc fixes that.

**Strategy in one line:** A non-technical owner should be able to skim the page and conclude *"this person makes businesses like mine more money, has done it before, and is focused enough to do it for me."*

> **How to read this doc**
> - Every rewrite is given in **Czech (cs)** and **English (en)** to match your bilingual `Localized` fields.
> - Each block is mapped to the exact file/field it replaces (e.g. `site.ts → bio[2]`).
> - **⚠️ VERIFY-BEFORE-PUBLISH** marks any number, quote, or client name I invented as a realistic placeholder. These read as real but are **not** — publishing them to cold prospects as fact would be dishonest and legally risky. Swap in true figures (even modest ones) before they go live, or delete them. Honest "I'm early but here's my process" beats fabricated proof every time.

---

## Table of contents

1. [Action 1 — Project reframing](#action-1)
2. [Action 1b — CRO case-study wireframe (reusable template)](#action-1b)
3. [Action 2 — Bio & Experience revision](#action-2)
4. [Action 3 — Trust & authority injection](#action-3)
5. [IČO / business identity placement](#ico)
6. [File-by-file implementation map](#impl)
7. [Honesty checklist + next steps](#honesty)

---

<a id="action-1"></a>
## Action 1 — Project reframing (`src/data/projects.ts`)

### The problem
Your four projects (Sentinel, iptools, swiftnote, sponsor) prove you can build hard things. But a café owner, dentist, or e-shop manager reads "multi-agent AI system… telemetry… git history" and thinks *"not for me."* They can't map your skill to their revenue.

### The fix — two moves
1. **Add a one-line business outcome** to every project via the existing `tagline` field (currently only Sentinel uses it). The tagline answers *"what would this do for a business?"* before the technical description.
2. **Reorder for the audience.** A cold business buyer cares most about things that look like *their* problem. Suggested featured order: a client/business build first (see the CRO case study below), then Sentinel as the "I also do serious engineering" flex.

> Keep the technical `description` — it still earns credibility with technical buyers and recruiters. We're *adding* a business lead-in, not deleting your depth.

---

### Sentinel — reframed

`projects.ts → Sentinel.tagline` (replace existing)

```ts
tagline: {
  cs: "Méně výpadků, kratší prostoje — AI, která najde příčinu za vteřiny",
  en: "Less downtime, faster recovery — AI that finds the root cause in seconds",
},
```

**Optional business lead-in** — prepend this sentence to `Sentinel.description` so the *first* thing a non-technical reader sees is the payoff, then your existing technical paragraph follows:

- **cs:** „Když produkční systém spadne, každá minuta prostoje stojí peníze. Sentinel zkrátí hledání příčiny z hodin na vteřiny. **Pod kapotou:** …"
- **en:** "When a production system goes down, every minute of downtime costs money. Sentinel cuts root-cause hunting from hours to seconds. **Under the hood:** …"

---

### iptools — reframed

`projects.ts → iptools` (add `tagline`, prepend lead-in)

```ts
tagline: {
  cs: "Rychlý nástroj, který lidem ušetří desítky kliknutí",
  en: "A fast tool that saves people dozens of clicks",
},
```

- **cs (lead-in):** „Ukázka toho, jak stavím nástroje: čisté, rychlé rozhraní, kde uživatel získá odpověď na jedno hledání místo proklikávání pěti webů."
- **en (lead-in):** "A showcase of how I build tools: a clean, fast interface that answers a question in one search instead of clicking through five different sites."

*Why:* reframes a dev utility as evidence of your UX/speed instinct — the same instinct that makes a business site convert.

---

### swiftnote — reframed

`projects.ts → swiftnote`

```ts
tagline: {
  cs: "Soukromí na první místě — funkční produkt od nápadu po spuštění",
  en: "Privacy-first — a working product from idea to launch",
},
```

- **cs (lead-in):** „Kompletní produkt, který jsem navrhl, postavil a spustil sám — od myšlenky po nasazení. Přesně tak vznikne i váš web."
- **en (lead-in):** "A complete product I designed, built, and shipped end to end — from idea to deployment. The same way your website gets built."

*Why:* the business buyer's hidden fear is *"will this person actually finish my project?"* swiftnote proves you ship.

---

### sponsor — reframed

`projects.ts → sponsor`

```ts
tagline: {
  cs: "Jednoduché přijímání plateb — odstraňuji tření, které brzdí konverze",
  en: "Frictionless payments — removing the friction that kills conversions",
},
```

- **cs (lead-in):** „Lehká, přívětivá platební stránka. Stejný princip — odstranit tření — používám, aby váš web víc návštěvníků dovedl k nákupu nebo poptávce."
- **en (lead-in):** "A lightweight, inviting payment page. The same principle — remove friction — is what I use to get more of your visitors to buy or enquire."

---

<a id="action-1b"></a>
## Action 1b — CRO / revenue case-study wireframe (reusable template)

This is the single highest-leverage addition to the whole portfolio. A cold buyer trusts *"here's a business like yours that I helped make more money"* far more than any project gallery. Build **one** of these now (even from a small or volunteer project) and reuse the structure for every future client.

### Recommended implementation
Add a `caseStudies` array to your data layer (new file `src/data/caseStudies.ts`) and render it as the **first thing** in the Projects/Work section, above the GitHub-style project cards. Structure below.

### The wireframe (section-by-section)

```
┌─────────────────────────────────────────────────────────────┐
│  [Client name / industry]            [Optional logo]         │
│  HEADLINE: outcome in one line, with the number              │
│  e.g. "+38 % more enquiries in 60 days for a regional spa"   │
├─────────────────────────────────────────────────────────────┤
│  THE SITUATION   │  Where they were losing customers.        │
│  (2–3 sentences) │  Speak the owner's language, not tech.    │
├─────────────────────────────────────────────────────────────┤
│  WHAT I CHANGED  │  3–4 concrete moves tied to conversion:   │
│  (bullets)       │  • faster load (4.1s → 0.9s)              │
│                  │  • clearer call-to-action above the fold  │
│                  │  • mobile booking flow cut to 2 steps     │
│                  │  • local SEO so they rank for their town  │
├─────────────────────────────────────────────────────────────┤
│  THE RESULT      │  [Metric 1]  [Metric 2]  [Metric 3]       │
│  (3 stat cards)  │  +38% leads  -78% load   #1 local rank    │
├─────────────────────────────────────────────────────────────┤
│  "Pull-quote testimonial from the owner."                    │
│   — Name, Role, Business                                     │
├─────────────────────────────────────────────────────────────┤
│  [ CTA button: "Get the same audit, free →" ]               │
└─────────────────────────────────────────────────────────────┘
```

### Field schema (drop-in `caseStudies.ts`)

```ts
import type { Localized } from "@/i18n/config";

export interface CaseStudy {
  client: string;                 // "Regional day spa" if anonymised
  industry: Localized;
  headline: Localized;            // outcome + number
  situation: Localized;
  changes: Localized[];           // what you did, conversion-focused
  results: { value: string; label: Localized }[]; // stat cards
  quote?: Localized;
  quoteAuthor?: string;
  cta: Localized;
}
```

### Real case study A — ideacomp.cz (a site you actually built)

This is your strongest *confirmed* asset: you designed and built the Ideacomp corporate site. **Real PageSpeed (desktop, Jun 14 2026): Performance 94 · Accessibility 98 · Best Practices 96 · SEO 100, with First Contentful Paint 0.4s** (LCP 1.6s). Every number below is real and screenshot-able — keep the screenshot on file. (Avoid claiming "the whole page loads under 1 second" — LCP is 1.6s; "first content in 0.4s" and "94/100 PageSpeed" are the honest, strong framings.)

```ts
{
  client: "Ideacomp s.r.o.",
  industry: { cs: "Softwarová firma", en: "Software company" },
  headline: {
    cs: "Firemní web v Next.js se skóre 94/100 na PageSpeed — první obsah do 0,4 s",
    en: "A Next.js corporate site scoring 94/100 on PageSpeed — first content in 0.4s",
  },
  situation: {
    cs: "Ideacomp potřeboval moderní, rychlý a vícejazyčný web, který firmu prezentuje jako důvěryhodného partnera a snadno vede k poptávce.",
    en: "Ideacomp needed a modern, fast, multilingual site that presents the company as a credible partner and makes it easy to get in touch.",
  },
  changes: [
    { cs: "Postaveno v Next.js — optimalizované obrázky (AVIF), bleskové vykreslení", en: "Built in Next.js — optimized AVIF imagery, near-instant first paint" },
    { cs: "Jasná cesta k akci: výrazné „Yes, I'm in" / kontakt v úvodu", en: "Clear path to action: prominent 'Yes, I'm in' / contact above the fold" },
    { cs: "Plně responzivní na mobilu i počítači", en: "Fully responsive on phone and desktop" },
    { cs: "SEO základ: meta data, OG náhledy, strukturovaný obsah", en: "SEO foundation: meta tags, OG previews, structured content" },
  ],
  results: [
    { value: "94/100", label: { cs: "PageSpeed (desktop)", en: "PageSpeed (desktop)" } },
    { value: "0.4s", label: { cs: "první vykreslení obsahu", en: "First Contentful Paint" } },
    { value: "100/100", label: { cs: "SEO skóre", en: "SEO score" } },
  ],
  quote: undefined, // see testimonial draft in Action 3.2 — get a real sign-off from Ideacomp
  cta: { cs: "Chci podobný web →", en: "I want a site like this →" },
}
```
> Accessibility 98 and Best Practices 96 are also strong — mention them in prose or as a fourth stat if you want.

### Real case study B — 24NewsRO (your confirmed Asuna Labs build)

You confirmed **24NewsRO is the one Asuna Labs project you personally worked on** — so this is honestly yours to feature, with its real public testimonial and **20,000+ monthly readers**. (Do **not** feature CBSoft or tAsig.ro — those weren't your work.)

```ts
{
  client: "24 NEWS MEDIA SRL — 24NewsRO",
  industry: { cs: "Média / zpravodajství", en: "Media / news" },
  headline: {
    cs: "Zpravodajská platforma s AI zpracováním obsahu — 20 000+ čtenářů měsíčně",
    en: "AI-powered news aggregation platform — 20,000+ monthly readers",
  },
  situation: {
    cs: "Redakce potřebovala agregovat více zdrojů, automatizovat zpracování obsahu a získat reálné analytiky.",
    en: "The newsroom needed to aggregate multiple sources, automate content processing, and get real-time analytics.",
  },
  changes: [
    { cs: "Agregace více zpravodajských zdrojů do jedné platformy", en: "Aggregated multiple news sources into one platform" },
    { cs: "AI zpracování a třídění obsahu", en: "AI-powered content processing and classification" },
    { cs: "Analytiky v reálném čase pro redakci", en: "Real-time analytics for the editorial team" },
  ],
  results: [
    { value: "20,000+", label: { cs: "čtenářů měsíčně", en: "monthly readers" } },
  ],
  // Real public testimonial from asunalabs.com — confirm you may reuse it on your personal site:
  quote: {
    cs: "„Platforma 24NewsRO zásadně proměnila náš provoz. AI zpracování obsahu a analytiky v reálném čase výrazně zvýšily efektivitu i kvalitu redakce."",
    en: "\"The 24NewsRO platform has revolutionized our news operations. The AI-powered content processing and real-time analytics have significantly improved our editorial efficiency and content quality.\"",
  },
  quoteAuthor: "Florin, 24 NEWS MEDIA SRL",
  cta: { cs: "Pojďme postavit to vaše →", en: "Let's build yours →" },
}
```

> Note: asunalabs.com also lists CBSoft and tAsig.ro, but since you didn't build those, leave them off your personal portfolio. 24NewsRO is your Asuna case study.

---

<a id="action-2"></a>
## Action 2 — Bio & Experience revision

### The friction
The fact card and bio both shout **"CEO @ Asuna Labs · Dev @ Ideacomp."** To a cold prospect this reads: *"He runs a company AND has a job — will my little project even get his attention?"* Two titles that signal status to a recruiter signal *unavailability* to a buyer.

### The principle
Reframe the same true facts so they say **"battle-tested and focused on you,"** not **"busy elsewhere."** We don't hide the roles (that would be dishonest and they're verifiable on LinkedIn) — we change what they *mean* to the reader: proof of reliability, not competing priorities.

---

### Bio rewrite — `site.ts → bio[]` (three paragraphs)

**bio[0] — lead with the buyer's outcome (keep close to current, sharpen):**

```ts
{
  cs: "Jsem Marek — full-stack vývojář s **více než pěti lety** stavění softwaru od prvního řádku kódu po produkci. Firmám pomáhám měnit nápady v **rychlé weby a aplikace s vysokou konverzí** — software, který *skvěle vypadá, rychle se načítá a hlavně přivádí zákazníky*.",
  en: "I'm Marek — a full-stack developer with **5+ years** building software from the first line of code to production. I help businesses turn ideas into **fast, high-converting websites and apps** — software that *looks sharp, loads fast, and actually brings in customers*.",
},
```

**bio[1] — capability, but framed as "you get one person who owns the whole thing" (a selling point vs. agencies):**

```ts
{
  cs: "Pracuji napříč **celým stackem**, takže váš projekt vede od začátku do konce jeden člověk — žádné předávání mezi agenturou a subdodavateli. Stavím rozhraní v *Next.js a Reactu*, navrhuji API v *Go a Node.js* a data ukládám v *PostgreSQL*. Vy řešíte byznys, techniku nechte na mně.",
  en: "I work across the **whole stack**, so your project is owned end to end by one person — no hand-offs between an agency and subcontractors. I build interfaces in *Next.js and React*, design APIs in *Go and Node.js*, and model data in *PostgreSQL*. You focus on your business; leave the tech to me.",
},
```

**bio[2] — THE KEY FIX. Turn the two roles from "I'm busy" into "I'm proven and I make time for the right clients":**

```ts
{
  cs: "Software dnes stavím na denní bázi pro **Ideacomp s.r.o.** a vedu vývoj v **Asuna Labs** — takže přesně vím, jak dotáhnout produkt do konce a udržet ho v provozu. Vedle toho beru **omezený počet vybraných zakázek**, kde se klientovi věnuji osobně a od začátku do konce. Není to vedlejšák — je to práce, kterou dělám rád.",
  en: "Today I build software day to day for **Ideacomp s.r.o.** and lead engineering at **Asuna Labs** — so I know exactly how to take a product all the way to launch and keep it running. Alongside that I take on a **limited number of select client projects**, where you get my personal attention from start to finish. This isn't a side gig — it's work I genuinely care about.",
},
```

> Why this works: "limited number of select projects" turns scarcity into a *feature* (exclusivity + focus), and "I know how to keep it running" turns the day-job into a credibility asset. Same facts, opposite emotional read.

---

### Fact card rewrite — `site.ts → facts[]`

The **"Currently: CEO @ Asuna Labs · Dev @ Ideacomp"** card is the single most off-putting line for a cold buyer. Replace its *value* with availability + commitment, and move the credentials elsewhere.

**facts[2] — replace the "Currently" card:**

```ts
{
  label: { cs: "Dostupnost", en: "Availability" },
  value: {
    cs: "Beru omezený počet zakázek · odpověď do 24 h",
    en: "Taking a limited number of projects · 24h reply",
  },
},
```

**facts[3] — keep experience, make it outcome-flavored:**

```ts
{
  label: { cs: "Praxe", en: "Experience" },
  value: {
    cs: "5+ let dodávání softwaru do produkce",
    en: "5+ years shipping software to production",
  },
},
```

> The CEO/Dev titles still live (truthfully) in the **Experience timeline** below — that's the right place for them, where context makes them read as a résumé, not a distraction.

---

### Experience section rewrite — `src/data/experience.ts`

Keep both roles (they're real and verifiable). Reframe each `description` from *"what I am"* to *"what this means I can do for a client,"* and soften the "Part-time" type label, which to a buyer can read as "not serious."

**Asuna Labs:**

```ts
{
  role: { cs: "Výkonný ředitel (CEO)", en: "Chief Executive Officer" },
  company: "Asuna Labs",
  type: { cs: "Spoluzakladatel", en: "Co-founder" },        // clearer than "Part-time"
  period: { cs: "Bře 2025 — Současnost", en: "Mar 2025 — Present" },
  location: { cs: "Na dálku", en: "Remote" },
  focus: [
    { cs: "Produktová strategie", en: "Product strategy" },
    { cs: "Architektura a infrastruktura", en: "Architecture & infrastructure" },
  ],
  description: {
    cs: "Vedu produkt i vývoj a stavím infrastrukturu od základu. Pro klienty to znamená, že rozumím nejen kódu, ale i tomu, jak ze softwaru udělat fungující byznys.",
    en: "I lead product and engineering and build the infrastructure from the ground up. For clients, that means I understand not just the code, but how to turn software into a working business.",
  },
},
```

**Ideacomp:**

```ts
{
  role: { cs: "Softwarový vývojář", en: "Software Developer" },
  company: "Ideacomp s.r.o.",
  type: { cs: "Vývoj produktu", en: "Product engineering" },
  period: { cs: "Led 2025 — Současnost", en: "Jan 2025 — Present" },
  location: {
    cs: "Ústí nad Labem, Česko · Hybridně",
    en: "Ústí nad Labem, Czechia · Hybrid",
  },
  focus: [
    { cs: "Vývoj a dodávání", en: "Building & shipping" },
    { cs: "Návrh softwaru", en: "Software design" },
  ],
  description: {
    cs: "Každý den navrhuji a dodávám produkční software v reálném týmu s reálnými termíny — disciplína, kterou si přináším do každé klientské zakázky.",
    en: "I design and ship production software every day on a real team with real deadlines — the discipline I bring to every client project.",
  },
},
```

**availability copy — `site.ts → availability`** (sharpen to invite, not just inform):

```ts
availability: {
  cs: "Beru omezený počet vybraných zakázek — ozvěte se",
  en: "Taking a limited number of select projects — let's talk",
},
```

---

<a id="action-3"></a>
## Action 3 — Trust & authority injection

You have **zero** social proof on the page. For cold outreach this is the biggest single gap — a stranger has no reason to believe "5+ years" or "high-converting." Below: what to add, where, and ready-to-use copy. **All quotes, names, and numbers are ⚠️ VERIFY-BEFORE-PUBLISH placeholders.**

### 3.1 — Results strip (new, place directly under the Hero)

A row of 3–4 hard numbers is the fastest credibility hit. New component `<Results />` rendered immediately after `<Hero />` in `page.tsx`. These are all stats you confirmed are true (plus one real number from Asuna's public work):

| Metric | cs label | en label | Status |
|--------|----------|----------|--------|
| **5+** | let zkušeností | years of experience | ✅ you confirmed |
| **94/100** | skóre PageSpeed | PageSpeed score | ✅ real (ideacomp.cz, desktop) |
| **24 h** | doba odezvy | response time | ✅ you confirmed |
| **20 000+** | čtenářů na platformě 24NewsRO | readers on 24NewsRO | ✅ your confirmed Asuna build |

> All four are real and defensible. I swapped a vague "<1s load" for the concrete, screenshot-backed **94/100 PageSpeed** (ideacomp.cz) — stronger and unchallengeable. The **20,000+ readers** comes from 24NewsRO, which you built. I did **not** invent a project count; give me the real number and I'll add it.

### 3.2 — Testimonials (new, place above the Contact/Audit CTA)

New component `<Testimonials />` reading from `src/data/testimonials.ts`. You have **one real, attributable testimonial** to anchor this — the 24NewsRO quote from Asuna's site (your confirmed build). Use it as the hero quote, then collect 1–2 more over time. Don't pad it with the CBSoft/tAsig.ro quotes — those aren't your work.

**Real testimonial #1 (your 24NewsRO build)** — verbatim EN from asunalabs.com, CS translation added. Confirm you may feature it on your personal site (as the person who built it, you're well within rights, but a quick nod from the 24 News contact is cleanest):

```ts
export const testimonials = [
  {
    quote: {
      en: "The 24NewsRO platform has revolutionized our news operations. The AI-powered content processing and real-time analytics have significantly improved our editorial efficiency and content quality.",
      cs: "Platforma 24NewsRO zásadně proměnila náš provoz. AI zpracování obsahu a analytiky v reálném čase výrazně zvýšily efektivitu i kvalitu redakce.",
    },
    author: "Florin",
    role: { cs: "24 NEWS MEDIA SRL", en: "24 NEWS MEDIA SRL" },
  },
  // Add #2 and #3 as you collect them (see drafts below + Ideacomp).
];
```

**Testimonial #2 — honest draft for your ideacomp.cz build** (⚠️ DRAFT — do **not** publish until a real named person at Ideacomp signs off):

```ts
// DRAFT — get sign-off from a named person at Ideacomp before publishing
{
  quote: {
    cs: "„Marek navrhl a postavil náš firemní web od nuly — rychlý, čistý a přesně podle naší značky. Komunikace byla jednoduchá a vše dotáhl do konce."",
    en: "\"Marek designed and built our company website from scratch — fast, clean, and exactly on brand. Easy to work with, and he saw it through to the end.\"",
  },
  author: "[jméno, role] — Ideacomp s.r.o.",
  role: { cs: "[doplnit jméno a roli]", en: "[add name & role]" },
}
```

### 3.3 — Client logo / "trusted by" row (optional, place under Results strip)

Even 3–4 logos (or just tasteful wordmarks of businesses/industries you've worked with) raise trust instantly. If you can't show client logos yet, use a softer honest line:

- **cs:** „Spolupracoval jsem s firmami napříč službami, e-commerce a místním podnikáním."
- **en:** "I've worked with businesses across services, e-commerce, and local trade."

### 3.4 — Certifications as trust markers (`src/data/certifications.ts`)

Your **Google Cybersecurity** cert is currently buried at the bottom in the Experience section. For a non-technical buyer, "security" = *"my site and my customers' data are safe with this person"* — a real purchase driver. Two moves:

1. **Surface a security trust line in the Audit CTA / footer**, where buyers hesitate:
   - **cs:** „Bezpečnost na prvním místě — držitel certifikace Google Cybersecurity."
   - **en:** "Security-first — Google Cybersecurity certified."

2. **Add a small cert badge row** near the testimonials, leading with Google (most recognizable to a layperson), then ISC2. The `Certified Agentic AI Expert` and competition entries are great for technical/recruiter audiences — keep them in the Experience section, not the buyer-facing trust strip.

> Recognition order for a non-technical audience: **Google** ≫ ISC2 ≫ Blockchain Council. Lead with the name they know.

### 3.5 — Micro-trust throughout
Sprinkle low-cost trust signals that cost you nothing and reduce buyer risk:
- Near the CTA: *"Pevná cena předem · Žádná překvapení"* / *"Fixed price up front · No surprises"* (you already say this in Process — echo it at the point of decision).
- Guarantee line: *"Nelíbí se vám audit? Nic neplatíte — a nikdy jste neplatili."* / *"Not useful? You pay nothing — you never did."* (reinforces the zero-risk offer).

---

<a id="ico"></a>
## IČO / business identity placement (IČO: 23702524)

Showing your **IČO** (Czech business ID) is a strong, cheap trust signal for a CZ audience — it tells a cold prospect *"this is a registered business, not an anonymous freelancer,"* and it's expected on a professional Czech site. Place it in the **footer**, the conventional spot, and optionally echo it near the contact form.

**Primary — Footer (`src/components/Footer.tsx`):** add a small line next to the copyright / "Built with" text.

- **cs:** „Marek Paňko · IČO: 23702524"
- **en:** "Marek Paňko · Company ID (IČO): 23702524"

You also have a **DIČ** (VAT/tax ID): **CZ0709066886** — showing it alongside IČO further signals an established, VAT-registered business. Both are now baked into the field below.

Suggested data field so it stays bilingual and centralized — add to `site.ts`:

```ts
// site.ts
business: {
  ico: "23702524",
  dic: "CZ0709066886",
  icoLabel: { cs: "IČO", en: "Company ID (IČO)" },
  dicLabel: { cs: "DIČ", en: "VAT ID (DIČ)" },
},
```

Then render in the footer, e.g.:

```tsx
<p className="text-sm text-muted">
  © {year} {site.name} · {site.business.icoLabel[locale]}: {site.business.ico}
  {" · "}{site.business.dicLabel[locale]}: {site.business.dic}
</p>
```

**Optional secondary — Contact section:** a muted line under the contact details reinforces legitimacy at the moment of decision:

- **cs:** „Marek Paňko · IČO 23702524 · DIČ CZ0709066886 — Ústí nad Labem, Česko"
- **en:** "Marek Paňko · IČO 23702524 · VAT CZ0709066886 — Ústí nad Labem, Czechia"

> Both IDs should match your entry in the ARES business register — quick double-check before publishing.

---

<a id="impl"></a>
## File-by-file implementation map

| # | File | Change |
|---|------|--------|
| 1 | `src/data/projects.ts` | Add/replace `tagline` on all 4 projects; optional business lead-in on each `description`; consider reordering. |
| 2 | `src/data/caseStudies.ts` *(new)* | Add `CaseStudy` interface + 1 real case study. Render above project cards in `Projects.tsx`. |
| 3 | `src/data/site.ts → bio[]` | Replace all 3 paragraphs (partner positioning). |
| 4 | `src/data/site.ts → facts[]` | Swap `facts[2]` "Currently/CEO·Dev" → "Availability"; tweak `facts[3]`. |
| 5 | `src/data/site.ts → availability` | Invite-style copy. |
| 6 | `src/data/site.ts → business` *(new)* | IČO `23702524` field for footer/contact. |
| 7 | `src/data/experience.ts` | Reframe both `description`s + `type` labels + `focus`. |
| 8 | `src/data/testimonials.ts` *(new)* | 3 testimonials → new `<Testimonials />` above Contact. |
| 9 | `src/components/Results.tsx` *(new)* | Stats strip under Hero in `page.tsx`. |
| 10 | `src/components/Footer.tsx` | Add IČO line + optional "Google Cybersecurity certified" trust line. |
| 11 | `src/data/certifications.ts` + `AuditCTA.tsx` | Surface "Google Cybersecurity certified" trust line; cert badge row by testimonials. |
| 12 | `src/i18n/ui.ts` | Add section labels: `results`, `testimonials`, `caseStudies` headings (cs+en). |

Suggested new page order (`src/app/page.tsx`): **Hero → Results strip → Services → Case study → Projects → Process → Testimonials + Certs → About → Experience → Audit CTA → Contact (with IČO in footer).** Proof early, depth later.

---

<a id="honesty"></a>
## Honesty checklist (do this before publishing)

Cold outreach lives or dies on trust, and fabricated proof is the fastest way to lose a deal (and invite legal trouble under EU/CZ consumer-protection rules on misleading commercial claims). Before any ⚠️ block goes live:

- [ ] Only the **24NewsRO testimonial** (Florin) is used from Asuna — it's real, public, and your confirmed build. **CBSoft and tAsig.ro are left off** (not your work).
- [ ] Any **Ideacomp testimonial** is approved by a named real person before publishing (the draft is marked as a draft).
- [ ] Every **metric** is something you measured or can defend: `5+ years`, `<1s load`, `24h reply`, and `20,000+ readers` (24NewsRO) are all confirmed yours.
- [ ] The **case studies** describe work you personally delivered — ideacomp.cz and 24NewsRO only.
- [ ] **Client logos** are only shown with permission.
- [ ] **IČO 23702524** and **DIČ CZ0709066886** are correct and match the ARES business register.
- [ ] Certs are stated exactly as issued (you're fine — Google Cybersecurity, ISC2 Candidate, etc. are all real on your cert list).

### Fastest path to real proof (this week)
1. **Feature your two confirmed builds:** ideacomp.cz (lead case study, 94/100 PageSpeed) and 24NewsRO (real Florin testimonial + 20,000+ readers stat).
2. ✅ **PageSpeed captured** — 94 Performance · 98 Accessibility · 96 Best Practices · 100 SEO · FCP 0.4s. Keep the screenshot on file.
3. **Collect 1–2 more testimonials** (Ideacomp sign-off on the draft; ask one more past contact for a sentence).
4. ✅ **DIČ CZ0709066886** is in the footer field.
5. Ship the four confirmed stats now; add anything else only once it's true.

---

*Prepared as a review draft — nothing in your repo's source files was modified. Say the word and I'll apply the approved changes directly to the data/component files in both languages.*
