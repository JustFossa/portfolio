// -----------------------------------------------------------------------------
// Central site content. Translatable fields use { cs, en }; edit both languages.
// -----------------------------------------------------------------------------

import type { Localized } from "@/i18n/config";
import type { NavKey } from "@/i18n/ui";

export type IconName = "mail" | "github" | "linkedin" | "instagram";

export interface SocialLink {
  label: Localized;
  href: string;
  handle: string;
  icon: IconName;
}

export interface Fact {
  label: Localized;
  value: Localized;
}

export const site = {
  name: "Marek Paňko",
  handle: "JustFossa",

  role: {
    cs: "Full-stack softwarový inženýr",
    en: "Full-Stack Software Engineer",
  } as Localized,

  location: {
    cs: "Ústí nad Labem, Česko",
    en: "Ústí nad Labem, Czechia",
  } as Localized,

  availability: {
    cs: "Beru omezený počet vybraných zakázek — ozvěte se",
    en: "Taking a limited number of select projects — let's talk",
  } as Localized,

  // Business identity — shown in the footer as a trust signal (CZ business register)
  business: {
    ico: "23702524",
    dic: "CZ0709066886",
    icoLabel: { cs: "IČO", en: "Company ID (IČO)" } as Localized,
    dicLabel: { cs: "DIČ", en: "VAT ID (DIČ)" } as Localized,
    trust: {
      cs: "Bezpečnost na prvním místě — držitel certifikace Google Cybersecurity",
      en: "Security-first — Google Cybersecurity certified",
    } as Localized,
  },

  // Canonical production origin (no trailing slash).
  url: "https://www.mpanko.cz",

  // Local SEO / GEO — used for geo meta tags and LocalBusiness structured data.
  geo: {
    locality: "Ústí nad Labem",
    region: "CZ-42", // Ústecký kraj (ISO 3166-2)
    country: "CZ",
    latitude: 50.6607,
    longitude: 14.0323,
  },

  // SEO keywords per locale (kept concise and honest to intent).
  keywords: {
    cs: [
      "tvorba webu",
      "weby na míru",
      "webové aplikace",
      "Next.js vývojář",
      "full-stack vývojář",
      "softwarový inženýr",
      "freelance vývojář",
      "Ústí nad Labem",
      "Česko",
      "SEO",
      "redesign webu",
      "rychlé weby",
    ],
    en: [
      "web development",
      "custom websites",
      "web apps",
      "Next.js developer",
      "full-stack developer",
      "software engineer",
      "freelance developer",
      "Ústí nad Labem",
      "Czechia",
      "SEO",
      "website redesign",
      "high-converting websites",
    ],
  } as Record<"cs" | "en", string[]>,

  // Hero — outcome-led headline + personal intro
  tagline: {
    cs: "Weby a software, které vaší firmě přivedou víc zákazníků.",
    en: "Websites and software that bring your business more customers.",
  } as Localized,

  heroIntro: {
    cs: "Jsem **Marek** — navrhuji a stavím **rychlé weby a aplikace na míru**, které mění návštěvníky v zákazníky. *Od prvního pixelu po produkci.*",
    en: "I'm **Marek** — I design and build **fast, custom websites and web apps** that turn visitors into customers. *From first pixel to production.*",
  } as Localized,

  valueProps: [
    { cs: "Design s vysokou konverzí", en: "High-converting design" },
    { cs: "Rychlé weby připravené pro SEO", en: "Fast, SEO-ready builds" },
    { cs: "Postavené pro růst", en: "Built to scale" },
  ] as Localized[],

  // About — each entry is its own paragraph
  bio: [
    {
      cs: "Jsem Marek — full-stack vývojář s **více než pěti lety** stavění softwaru od prvního řádku kódu po produkci. Firmám pomáhám měnit nápady v **rychlé weby a aplikace s vysokou konverzí** — software, který *skvěle vypadá, rychle se načítá a hlavně přivádí zákazníky*.",
      en: "I'm Marek — a full-stack developer with **5+ years** building software from the first line of code to production. I help businesses turn ideas into **fast, high-converting websites and apps** — software that *looks sharp, loads fast, and actually brings in customers*.",
    },
    {
      cs: "Pracuji napříč **celým stackem**, takže váš projekt vede od začátku do konce jeden člověk — žádné předávání mezi agenturou a subdodavateli. Stavím rozhraní v *Next.js a Reactu*, navrhuji API v *Go a Node.js* a data ukládám v *PostgreSQL*. Vy řešíte byznys, techniku nechte na mně.",
      en: "I work across the **whole stack**, so your project is owned end to end by one person — no hand-offs between an agency and subcontractors. I build interfaces in *Next.js and React*, design APIs in *Go and Node.js*, and model data in *PostgreSQL*. You focus on your business; leave the tech to me.",
    },
    {
      cs: "Software dnes stavím na denní bázi pro **Ideacomp s.r.o.** a vedu vývoj v **Asuna Labs** — takže přesně vím, jak dotáhnout produkt do konce a udržet ho v provozu. Vedle toho beru **omezený počet vybraných zakázek**, kde se klientovi věnuji osobně a od začátku do konce. Není to vedlejšák — je to práce, kterou dělám rád.",
      en: "Today I build software day to day for **Ideacomp s.r.o.** and lead engineering at **Asuna Labs** — so I know exactly how to take a product all the way to launch and keep it running. Alongside that I take on a **limited number of select client projects**, where you get my personal attention from start to finish. This isn't a side gig — it's work I genuinely care about.",
    },
  ] as Localized[],

  facts: [
    {
      label: { cs: "Sídlo", en: "Based in" },
      value: { cs: "Ústí nad Labem, ČR", en: "Ústí nad Labem, CZ" },
    },
    {
      label: { cs: "Zaměření", en: "Focus" },
      value: {
        cs: "Full-stack web a infrastruktura",
        en: "Full-stack web & infrastructure",
      },
    },
    {
      label: { cs: "Dostupnost", en: "Availability" },
      value: {
        cs: "Beru omezený počet zakázek · odpověď do 24 h",
        en: "Taking a limited number of projects · 24h reply",
      },
    },
    {
      label: { cs: "Praxe", en: "Experience" },
      value: {
        cs: "5+ let dodávání softwaru do produkce",
        en: "5+ years shipping software to production",
      },
    },
  ] as Fact[],

  meta: {
    title: {
      cs: "Marek Paňko — Full-stack softwarový inženýr",
      en: "Marek Paňko — Full-Stack Software Engineer",
    } as Localized,
    description: {
      cs: "Marek Paňko (JustFossa) je full-stack softwarový inženýr, který staví rychlé a spolehlivé webové produkty s Next.js, Go a Node.js.",
      en: "Marek Paňko (JustFossa) is a full-stack software engineer building fast, reliable web products with Next.js, Go, and Node.js.",
    } as Localized,
  },

  links: [
    {
      label: { cs: "E-mail", en: "Email" },
      href: "mailto:panko.marek@icloud.com",
      handle: "panko.marek@icloud.com",
      icon: "mail",
    },
    {
      label: { cs: "GitHub", en: "GitHub" },
      href: "https://github.com/justfossa",
      handle: "@justfossa",
      icon: "github",
    },
    {
      label: { cs: "LinkedIn", en: "LinkedIn" },
      href: "https://www.linkedin.com/in/justfossa/",
      handle: "in/justfossa",
      icon: "linkedin",
    },
    {
      label: { cs: "Instagram", en: "Instagram" },
      href: "https://instagram.com/marekk.panko",
      handle: "@marekk.panko",
      icon: "instagram",
    },
  ] as SocialLink[],
};

export const navItems: { key: NavKey; href: string }[] = [
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];
