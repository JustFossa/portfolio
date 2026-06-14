"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { renderRich } from "@/lib/rich-text";

export function About() {
  const { t, locale } = useLanguage();

  return (
    <Section id="about" index="04" title={ui[locale].sections.about}>
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <Reveal>
          <dl className="space-y-6">
            {site.facts.map((fact, i) => (
              <div
                key={i}
                className="group border-t border-border pt-3 transition-colors hover:border-foreground"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {t(fact.label)}
                </dt>
                <dd className="mt-1 text-lg">{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            {site.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed text-muted ${
                  i === 0
                    ? "text-2xl leading-snug text-foreground md:text-3xl"
                    : "text-lg"
                }`}
              >
                {renderRich(t(paragraph))}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
