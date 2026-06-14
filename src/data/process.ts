import type { Localized } from "@/i18n/config";

export interface Step {
  title: Localized;
  description: Localized;
}

export const steps: Step[] = [
  {
    title: { cs: "Bezplatný audit", en: "Free audit" },
    description: {
      cs: "Projdu váš web (nebo nápad) a pošlu vám konkrétní návrhy, co zlepšit — bez závazků.",
      en: "I review your site (or idea) and send concrete suggestions on what to improve — no strings attached.",
    },
  },
  {
    title: { cs: "Nabídka a plán", en: "Plan & quote" },
    description: {
      cs: "Domluvíme rozsah, termín a pevnou cenu předem. Žádná překvapení.",
      en: "We agree on scope, timeline and a fixed price up front. No surprises.",
    },
  },
  {
    title: { cs: "Tvorba", en: "Build" },
    description: {
      cs: "Vše navrhnu a naprogramuji a průběžně vám ukazuji pokrok.",
      en: "I design and build everything, sharing progress with you along the way.",
    },
  },
  {
    title: { cs: "Spuštění a podpora", en: "Launch & support" },
    description: {
      cs: "Web spustíme a já zůstávám k ruce pro úpravy a další růst.",
      en: "We launch, and I stay on hand for tweaks and future growth.",
    },
  },
];
