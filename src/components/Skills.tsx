"use client";

import { skills } from "@/data/skills";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  const { t, locale } = useLanguage();

  return (
    <Section id="skills" index="05" title={ui[locale].sections.skills}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((group, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="border-t border-foreground pt-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {t(group.title)}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-2 font-display text-lg transition-transform duration-200 hover:translate-x-1 md:text-xl"
                  >
                    <span className="h-px w-0 bg-foreground transition-all duration-200 group-hover:w-3" />
                    <span className="text-muted transition-colors group-hover:text-foreground">
                      {item}
                    </span>
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
