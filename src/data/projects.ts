import type { Localized } from "@/i18n/config";

export interface Project {
  name: string; // project names stay as-is
  tagline?: Localized; // short label for featured projects
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
      cs: "Autonomní AI agent pro analýzu výpadků",
      en: "Autonomous incident root-cause AI agent",
    },
    description: {
      cs: "Multiagentní AI systém, který diagnostikuje výpadky v produkci jako zkušený on-call inženýr — tvoří konkurenční hypotézy, sbírá důkazy z telemetrie a historie gitu, vylučuje příčiny, kriticky kontroluje vlastní úvahy a během několika sekund dodá kořenovou příčinu, opravu i postmortem. Postaveno na Microsoft Agent Framework s Azure a GitHub MCP.",
      en: "A multi-agent AI system that diagnoses production incidents like a senior on-call engineer — forming competing hypotheses, gathering evidence from telemetry and git history, eliminating causes, critiquing its own reasoning, and delivering a root cause, fix, and postmortem in seconds. Built on the Microsoft Agent Framework with Azure & GitHub MCP.",
    },
    tech: ["Python", "Microsoft Agent Framework", "Azure", "MCP"],
    source: "https://github.com/JustFossa/sentinel",
    featured: true,
  },
  {
    name: "iptools",
    description: {
      cs: "Výkonná sada nástrojů pro zkoumání jakékoli IP adresy — geolokace, informace o síti a poskytovateli a další, v čistém a rychlém rozhraní.",
      en: "A powerful toolkit for inspecting any IP address — geolocation, network and provider details, and more, in a clean and fast interface.",
    },
    tech: ["Next.js", "TypeScript", "Docker"],
    source: "https://github.com/JustFossa/iptools",
  },
  {
    name: "swiftnote",
    description: {
      cs: "Snadno vytvářejte a sdílejte samozničitelné poznámky — soukromé už z principu a pryč ve chvíli, kdy si je někdo přečte.",
      en: "Create and share self-destructing notes with ease — private by design, and gone the moment they've been read.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/swiftnote",
  },
  {
    name: "sponsor",
    description: {
      cs: "Jednoduchá, odlehčená a přívětivá alternativa ke GitHub Sponsors pro přijímání podpory od vaší komunity.",
      en: "A simple, lightweight and inviting alternative to GitHub Sponsors for accepting support from your community.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/sponsor",
  },
];

export const githubUrl = "https://github.com/justfossa";
