import type { Localized } from "@/i18n/config";

export interface Project {
  name: string; // project names stay as-is
  description: Localized;
  tech: string[];
  demo?: string; // live, deployed site (add when redeployed)
  source?: string; // GitHub repository
}

export const projects: Project[] = [
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
