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
    type: { cs: "Spoluzakladatel", en: "Co-founder" },
    period: { cs: "Bře 2025 — Současnost", en: "Mar 2025 — Present" },
    location: { cs: "Na dálku", en: "Remote" },
    focus: [
      { cs: "Produktová strategie", en: "Product Strategy" },
      { cs: "Architektura a infrastruktura", en: "Architecture & Infrastructure" },
    ],
    description: {
      cs: "Vést vlastní softwarovou firmu znamená dodávat ve firemním standardu — spolehlivě, v termínu a s odpovědností za výsledek. Přesně tuto úroveň přináším do každé klientské zakázky, které vždy vyhradím plný prostor.",
      en: "Running my own software company means delivering to an enterprise standard — reliably, on time, and accountable for the result. That's exactly the level I bring to every client project, and each one gets my full focus.",
    },
  },
  {
    role: { cs: "Softwarový vývojář", en: "Software Developer" },
    company: "Ideacomp s.r.o.",
    type: { cs: "Vývoj produktu", en: "Product Engineering" },
    period: { cs: "Led 2025 — Současnost", en: "Jan 2025 — Present" },
    location: {
      cs: "Ústí nad Labem, Česko · Hybridně",
      en: "Ústí nad Labem, Czechia · Hybrid",
    },
    focus: [
      { cs: "Vývoj a dodávání", en: "Building & Shipping" },
      { cs: "Návrh softwaru", en: "Software Design" },
    ],
    description: {
      cs: "Každý den navrhuji a dodávám produkční software v reálném týmu s reálnými termíny. Tato disciplína — firemní standard kvality a spolehlivosti — jde se mnou do každé zakázky, ať je velká, nebo malá.",
      en: "Every day I design and ship production software on a real team with real deadlines. That discipline — an enterprise standard of quality and reliability — comes with me into every project, big or small.",
    },
  },
];
