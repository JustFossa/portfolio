import type { Localized } from "@/i18n/config";

export interface SkillGroup {
  title: Localized;
  items: string[]; // technology names are language-neutral
}

export const skills: SkillGroup[] = [
  {
    title: { cs: "Frontend", en: "Frontend" },
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: { cs: "Jazyky", en: "Languages" },
    items: ["TypeScript", "Go", "JavaScript", "Python"],
  },
  {
    title: { cs: "Backend", en: "Backend" },
    items: ["GoFiber", "Express.js", "Prisma ORM"],
  },
  {
    title: { cs: "Databáze", en: "Databases" },
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: { cs: "Nástroje", en: "Tools" },
    items: ["VS Code", "CLion", "DataGrip", "Git"],
  },
];
