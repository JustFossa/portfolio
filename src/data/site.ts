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
    cs: "Otevřený vybraným zakázkám a spolupráci",
    en: "Open to select freelance & collaboration",
  } as Localized,

  // Hero
  tagline: {
    cs: "Navrhuji a dodávám software od začátku do konce.",
    en: "I design and ship software, end to end.",
  } as Localized,

  heroIntro: {
    cs: "Stavím **rychlé weby a webové aplikace s vysokou konverzí**, které mění návštěvníky v zákazníky — postavené na čisté a spolehlivé technické práci. Full-stack, *od prvního pixelu po produkci*.",
    en: "I build **fast, high-converting websites and web apps** that turn visitors into customers — backed by clean, reliable engineering. Full-stack, *from first pixel to production*.",
  } as Localized,

  valueProps: [
    { cs: "Design s vysokou konverzí", en: "High-converting design" },
    { cs: "Rychlé weby připravené pro SEO", en: "Fast, SEO-ready builds" },
    { cs: "Postavené pro růst", en: "Built to scale" },
  ] as Localized[],

  // About — each entry is its own paragraph
  bio: [
    {
      cs: "Jsem Marek, full-stack softwarový inženýr s **více než pěti lety zkušeností** se stavbou produktů od prvního řádku kódu až po produkci. Pomáhám firmám měnit nápady v **rychlé weby a webové aplikace s vysokou konverzí** — software, který *skvěle vypadá, rychle se načítá a hlavně přináší výsledky*.",
      en: "I'm Marek, a full-stack software engineer with **more than five years** spent building products from the first line of code to production. I help businesses turn ideas into **fast, high-converting websites and web apps** — software that *looks sharp, loads quickly, and actually drives results*.",
    },
    {
      cs: "Moje práce pokrývá **celý stack**: tvořím rozhraní v *Next.js a Reactu*, navrhuji API a služby v *Go a Node.js* a modeluji data v *PostgreSQL a Prismě*. Stejně dobře si poradím s **architektonickými rozhodnutími** i s pečlivým laděním detailů uživatelského rozhraní.",
      en: "My work spans the **whole stack**: crafting interfaces in *Next.js and React*, designing APIs and services in *Go and Node.js*, and modeling data with *PostgreSQL and Prisma*. I'm equally comfortable owning **architecture decisions** and sweating the small details of a UI.",
    },
    {
      cs: "Dnes vedu vývoj jako **CEO ve společnosti Asuna Labs** a tvořím software v **Ideacomp s.r.o.** Když zrovna nevydávám nové funkce, většinou se nořím do něčeho nového — naposledy do *bezpečnosti a agentní AI*.",
      en: "Today I lead engineering as **CEO of Asuna Labs** and build software at **Ideacomp s.r.o.** When I'm not shipping, I'm usually digging into something new — most recently *security and agentic AI*.",
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
      label: { cs: "Aktuálně", en: "Currently" },
      value: {
        cs: "CEO @ Asuna Labs · Vývojář @ Ideacomp",
        en: "CEO @ Asuna Labs · Dev @ Ideacomp",
      },
    },
    {
      label: { cs: "Praxe", en: "Experience" },
      value: {
        cs: "5+ let dodávání softwaru",
        en: "5+ years shipping software",
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
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];
