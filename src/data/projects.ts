import type { Localized } from "@/i18n/config";

export interface Project {
  name: string; // project names stay as-is
  tagline?: Localized; // short business-outcome label, shown on every card
  description: Localized;
  tech: string[];
  demo?: string; // live, deployed site (add when redeployed)
  source?: string; // GitHub repository
  featured?: boolean; // highlight at the top of the section
}

export const projects: Project[] = [
  {
    name: "Sentinel",
    tagline: {
      cs: "Méně výpadků, kratší prostoje — příčina nalezena za vteřiny",
      en: "Less downtime, faster recovery — root cause in seconds",
    },
    description: {
      cs: "Když produkční systém spadne, každá minuta prostoje stojí peníze. Sentinel zkracuje hledání příčiny z hodin na vteřiny. Pod kapotou: multiagentní AI systém, který diagnostikuje výpadky jako zkušený on-call inženýr — tvoří konkurenční hypotézy, sbírá důkazy z telemetrie a historie gitu, vylučuje příčiny, kriticky kontroluje vlastní úvahy a dodá kořenovou příčinu, opravu i postmortem. Postaveno na Microsoft Agent Framework s Azure a GitHub MCP.",
      en: "When a production system goes down, every minute of downtime costs money. Sentinel cuts root-cause hunting from hours to seconds. Under the hood: a multi-agent AI system that diagnoses incidents like a senior on-call engineer — forming competing hypotheses, gathering evidence from telemetry and git history, eliminating causes, critiquing its own reasoning, and delivering a root cause, fix, and postmortem. Built on the Microsoft Agent Framework with Azure & GitHub MCP.",
    },
    tech: ["Python", "Microsoft Agent Framework", "Azure", "MCP"],
    source: "https://github.com/JustFossa/sentinel",
    featured: true,
  },
  {
    name: "iptools",
    tagline: {
      cs: "Rychlý nástroj, který šetří desítky kliknutí",
      en: "A fast tool that saves dozens of clicks",
    },
    description: {
      cs: "Ukázka toho, jak stavím nástroje: čisté, rychlé rozhraní, kde uživatel získá odpověď na jedno hledání místo proklikávání pěti webů. Sada pro zkoumání jakékoli IP adresy — geolokace, informace o síti a poskytovateli a další.",
      en: "A showcase of how I build tools: a clean, fast interface that answers a question in one search instead of clicking through five different sites. A toolkit for inspecting any IP address — geolocation, network and provider details, and more.",
    },
    tech: ["Next.js", "TypeScript", "Docker"],
    source: "https://github.com/JustFossa/iptools",
  },
  {
    name: "swiftnote",
    tagline: {
      cs: "Funkční produkt od nápadu po spuštění",
      en: "A working product from idea to launch",
    },
    description: {
      cs: "Kompletní produkt, který jsem navrhl, postavil a spustil sám — od myšlenky po nasazení. Snadno vytvářejte a sdílejte samozničitelné poznámky — soukromé už z principu a pryč ve chvíli, kdy si je někdo přečte.",
      en: "A complete product I designed, built, and shipped end to end — from idea to deployment. Create and share self-destructing notes with ease — private by design, and gone the moment they've been read.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/swiftnote",
  },
  {
    name: "sponsor",
    tagline: {
      cs: "Odstraňuji tření, které brzdí konverze",
      en: "Removing the friction that kills conversions",
    },
    description: {
      cs: "Lehká, přívětivá platební stránka. Stejný princip — odstranit tření — používám, aby váš web víc návštěvníků dovedl k nákupu nebo poptávce. Jednoduchá alternativa ke GitHub Sponsors pro přijímání podpory od vaší komunity.",
      en: "A lightweight, inviting payment page. The same principle — remove friction — is what I use to get more of your visitors to buy or enquire. A simple alternative to GitHub Sponsors for accepting support from your community.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/sponsor",
  },
];

export const githubUrl = "https://github.com/justfossa";
