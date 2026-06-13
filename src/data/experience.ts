export interface Role {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  focus: string[];
  description: string;
}

export const experience: Role[] = [
  {
    role: "Chief Executive Officer",
    company: "Asuna Labs",
    type: "Part-time",
    period: "Mar 2025 — Present",
    location: "Remote",
    focus: ["Software Design", "Software Infrastructure"],
    description:
      "Leading product and engineering — setting technical direction and building the software infrastructure from the ground up.",
  },
  {
    role: "Software Developer",
    company: "Ideacomp s.r.o.",
    type: "Part-time",
    period: "Jan 2025 — Present",
    location: "Ústí nad Labem, Czechia · Hybrid",
    focus: ["Software Design", "Programming"],
    description:
      "Building and shipping software day to day — programming, software design, and hands-on product development.",
  },
];
