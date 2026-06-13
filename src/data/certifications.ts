import type { Localized } from "@/i18n/config";

export interface Certification {
  name: string; // proper nouns — kept as-is
  issuer: string;
  date: Localized;
  note?: Localized;
}

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    date: { cs: "2026", en: "2026" },
    note: {
      cs: "Základy kybernetické bezpečnosti · Sítě a jejich zabezpečení · Řízení bezpečnostních rizik · Linux a SQL",
      en: "Foundations of Cybersecurity · Networks & Network Security · Manage Security Risks · Linux & SQL",
    },
  },
  {
    name: "Certified Agentic AI Expert™",
    issuer: "Blockchain Council",
    date: { cs: "Říj 2025", en: "Oct 2025" },
    note: {
      cs: "Umělá inteligence (AI)",
      en: "Artificial Intelligence (AI)",
    },
  },
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    date: { cs: "Led 2026 — Led 2027", en: "Jan 2026 — Jan 2027" },
  },
  {
    name: "Soutěž & Podnikej",
    issuer: "BeNextOne",
    date: { cs: "Bře 2026", en: "Mar 2026" },
  },
];
