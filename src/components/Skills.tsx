import { skills } from "@/data/skills";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="border-t border-foreground pt-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-display text-lg md:text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
