"use client";

import { steps } from "@/data/process";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Process() {
  const { t, locale } = useLanguage();

  return (
    <Section id="process" index="03" title={ui[locale].sections.process}>
      <ol className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={i} delay={i * 80}>
            <li className="group flex h-full flex-col bg-background p-7 transition-colors duration-300 hover:bg-card">
              <span className="font-mono text-sm text-subtle transition-colors group-hover:text-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl">{t(step.title)}</h3>
              <p className="mt-2 leading-relaxed text-muted">
                {t(step.description)}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
