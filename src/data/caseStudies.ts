import type { Localized } from "@/i18n/config";

export interface CaseStudyResult {
  value: string; // language-neutral figure
  label: Localized;
}

export interface CaseStudy {
  client: string; // proper noun — kept as-is
  industry: Localized;
  headline: Localized;
  situation: Localized;
  changes: Localized[];
  results: CaseStudyResult[];
  link?: string; // live site / project page
  quote?: Localized;
  quoteAuthor?: string;
  quoteRole?: Localized;
  cta: Localized;
}

// All three are real, confirmed builds with screenshot-backed PageSpeed scores.
//  • ideacomp.cz & asunalabs.com — corporate sites Marek built (desktop PageSpeed, Jun 2026).
//  • 24NewsRO — client platform Marek built at Asuna Labs; quote is the real public
//    testimonial from asunalabs.com, attributed with "via Asuna Labs" for honesty.
export const caseStudies: CaseStudy[] = [
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
      {
        cs: "Postaveno v Next.js — optimalizované obrázky (AVIF), bleskové vykreslení",
        en: "Built in Next.js — optimized AVIF imagery, near-instant first paint",
      },
      {
        cs: "Jasná cesta k akci: výrazné tlačítko a kontakt v úvodu",
        en: "Clear path to action: a prominent CTA and contact above the fold",
      },
      {
        cs: "Plně responzivní na mobilu i počítači",
        en: "Fully responsive on phone and desktop",
      },
      {
        cs: "SEO základ: meta data, OG náhledy, strukturovaný obsah",
        en: "SEO foundation: meta tags, OG previews, structured content",
      },
    ],
    results: [
      {
        value: "94/100",
        label: {
          cs: "rychlost udrží návštěvníky na webu",
          en: "speed keeps visitors on the page",
        },
      },
      {
        value: "0.4s",
        label: {
          cs: "obsah naskočí téměř okamžitě",
          en: "content appears almost instantly",
        },
      },
      {
        value: "100/100",
        label: { cs: "SEO — připraveno, aby vás našli", en: "SEO — ready to be found" },
      },
    ],
    link: "https://ideacomp.cz",
    cta: { cs: "Chci podobný web →", en: "I want a site like this →" },
  },
  {
    client: "Asuna Labs",
    industry: { cs: "Softwarové studio", en: "Software studio" },
    headline: {
      cs: "Web studia se skóre 94/100 na PageSpeed — první obsah do 0,5 s",
      en: "A studio site scoring 94/100 on PageSpeed — first content in 0.5s",
    },
    situation: {
      cs: "Boutique softwarové studio potřebovalo web, který působí prémiově, rychle se načítá a vede návštěvníky k nezávazné konzultaci.",
      en: "A boutique software studio needed a site that feels premium, loads fast, and guides visitors to a no-commitment call.",
    },
    changes: [
      {
        cs: "Návrh a stavba kompletního webu v Next.js",
        en: "Designed and built the full site in Next.js",
      },
      {
        cs: "Sekce s výsledky a referencemi pro budování důvěry",
        en: "Results and testimonial sections built for trust",
      },
      {
        cs: "Optimalizace výkonu a SEO od základu",
        en: "Performance and SEO optimized from the ground up",
      },
    ],
    results: [
      {
        value: "94/100",
        label: { cs: "rychlost = méně odchodů z webu", en: "speed = fewer drop-offs" },
      },
      {
        value: "0.5s",
        label: {
          cs: "obsah naskočí téměř okamžitě",
          en: "content appears almost instantly",
        },
      },
      {
        value: "96/100",
        label: {
          cs: "přístupné pro každého návštěvníka",
          en: "accessible to every visitor",
        },
      },
    ],
    link: "https://asunalabs.com",
    cta: { cs: "Chci podobný web →", en: "I want a site like this →" },
  },
  {
    client: "24NewsRO",
    industry: { cs: "Média / zpravodajství", en: "Media / news" },
    headline: {
      cs: "Zpravodajská platforma s AI zpracováním obsahu — 20 000+ čtenářů měsíčně",
      en: "AI-powered news platform — 20,000+ monthly readers",
    },
    situation: {
      cs: "Redakce potřebovala agregovat více zpravodajských zdrojů, automatizovat zpracování obsahu a získat analytiky v reálném čase.",
      en: "The newsroom needed to aggregate multiple sources, automate content processing, and get real-time analytics.",
    },
    changes: [
      {
        cs: "Agregace více zpravodajských zdrojů do jedné platformy",
        en: "Aggregated multiple news sources into one platform",
      },
      {
        cs: "AI zpracování a třídění obsahu",
        en: "AI-powered content processing and classification",
      },
      {
        cs: "Analytiky v reálném čase pro redakci",
        en: "Real-time analytics for the editorial team",
      },
    ],
    results: [
      {
        value: "20 000+",
        label: { cs: "zasažených čtenářů měsíčně", en: "readers reached every month" },
      },
    ],
    link: "https://asunalabs.com/client-work",
    quote: {
      cs: "Platforma 24NewsRO zásadně proměnila náš provoz. AI zpracování obsahu a analytiky v reálném čase výrazně zvýšily efektivitu i kvalitu redakce.",
      en: "The 24NewsRO platform has revolutionized our news operations. The AI-powered content processing and real-time analytics have significantly improved our editorial efficiency and content quality.",
    },
    quoteAuthor: "Florin",
    quoteRole: {
      cs: "24 NEWS MEDIA SRL · projekt Asuna Labs",
      en: "24 NEWS MEDIA SRL · via Asuna Labs",
    },
    cta: { cs: "Pojďme postavit to vaše →", en: "Let's build yours →" },
  },
];
