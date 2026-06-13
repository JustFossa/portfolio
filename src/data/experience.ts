import type { Localized } from "@/i18n/config";

export interface Role {
  role: Localized;
  company: string; // company names stay as-is
  type: Localized;
  period: Localized;
  location: Localized;
  focus: Localized[];
  description: Localized;
}

export const experience: Role[] = [
  {
    role: { cs: "Výkonný ředitel (CEO)", en: "Chief Executive Officer" },
    company: "Asuna Labs",
    type: { cs: "Částečný úvazek", en: "Part-time" },
    period: { cs: "Bře 2025 — Současnost", en: "Mar 2025 — Present" },
    location: { cs: "Na dálku", en: "Remote" },
    focus: [
      { cs: "Návrh softwaru", en: "Software Design" },
      { cs: "Softwarová infrastruktura", en: "Software Infrastructure" },
    ],
    description: {
      cs: "Vedu produkt a vývoj — určuji technický směr a od základu buduji softwarovou infrastrukturu.",
      en: "Leading product and engineering — setting technical direction and building the software infrastructure from the ground up.",
    },
  },
  {
    role: { cs: "Softwarový vývojář", en: "Software Developer" },
    company: "Ideacomp s.r.o.",
    type: { cs: "Částečný úvazek", en: "Part-time" },
    period: { cs: "Led 2025 — Současnost", en: "Jan 2025 — Present" },
    location: {
      cs: "Ústí nad Labem, Česko · Hybridně",
      en: "Ústí nad Labem, Czechia · Hybrid",
    },
    focus: [
      { cs: "Návrh softwaru", en: "Software Design" },
      { cs: "Programování", en: "Programming" },
    ],
    description: {
      cs: "Každodenní tvorba a dodávání softwaru — programování, návrh softwaru a praktický vývoj produktu.",
      en: "Building and shipping software day to day — programming, software design, and hands-on product development.",
    },
  },
];
