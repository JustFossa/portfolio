export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "Go", "JavaScript", "Python"],
  },
  {
    title: "Backend",
    items: ["GoFiber", "Express.js", "Prisma ORM"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["VS Code", "CLion", "DataGrip", "Git"],
  },
];
