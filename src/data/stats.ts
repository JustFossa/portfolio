import type { Localized } from "@/i18n/config";

export interface Stat {
  value: string; // language-neutral figure
  label: Localized;
}

// Headline trust strip — every figure here is real and defensible.
//  • 5+ years and 24h reply: confirmed.
//  • 94/100 PageSpeed: real desktop score for ideacomp.cz (built by Marek).
//  • 20,000+ readers: real audience of 24NewsRO, built at Asuna Labs.
export const stats: Stat[] = [
  {
    value: "5+",
    label: { cs: "let zkušeností", en: "years of experience" },
  },
  {
    value: "94/100",
    label: { cs: "rychlost webů, které stavím", en: "speed of the sites I build" },
  },
  {
    value: "24 h",
    label: { cs: "odpovím do 24 hodin", en: "I reply within 24 hours" },
  },
  {
    value: "20 000+",
    label: { cs: "zasažených čtenářů (24NewsRO)", en: "readers reached (24NewsRO)" },
  },
];
