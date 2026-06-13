export interface Certification {
  name: string;
  issuer: string;
  date: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    date: "2026",
    note: "Foundations of Cybersecurity · Networks & Network Security · Manage Security Risks · Linux & SQL",
  },
  {
    name: "Certified Agentic AI Expert™",
    issuer: "Blockchain Council",
    date: "Oct 2025",
    note: "Artificial Intelligence (AI)",
  },
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    date: "Jan 2026 — Jan 2027",
  },
  {
    name: "Soutěž & Podnikej",
    issuer: "BeNextOne",
    date: "Mar 2026",
  },
];
