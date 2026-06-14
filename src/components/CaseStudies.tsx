"use client";

import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function CaseStudies() {
  const { t, locale } = useLanguage();
  const strings = ui[locale];

  return (
    <Section id="case-studies" index="02" title={strings.sections.caseStudies}>
      <div className="grid gap-8">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.client} delay={i * 80}>
            <article className="group relative overflow-hidden border border-border bg-background p-8 transition-colors hover:border-foreground md:p-10">
              <span className="absolute inset-x-0 top-0 h-px w-0 bg-foreground transition-all duration-700 ease-out group-hover:w-full" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {cs.client}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t(cs.industry)}
                </span>
              </div>

              <p className="mt-4 max-w-3xl font-display text-2xl leading-snug md:text-3xl">
                {t(cs.headline)}
              </p>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                {t(cs.situation)}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {cs.changes.map((change, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    {t(change)}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-px overflow-hidden border border-border bg-border">
                {cs.results.map((r, j) => (
                  <div key={j} className="flex-1 bg-background px-5 py-4">
                    <div className="font-display text-2xl md:text-3xl">{r.value}</div>
                    <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                      {t(r.label)}
                    </div>
                  </div>
                ))}
              </div>

              {cs.quote && (
                <figure className="mt-8 border-l-2 border-foreground pl-5">
                  <blockquote className="max-w-2xl text-lg leading-relaxed">
                    &ldquo;{t(cs.quote)}&rdquo;
                  </blockquote>
                  {cs.quoteAuthor && (
                    <figcaption className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                      {cs.quoteAuthor}
                      {cs.quoteRole && (
                        <span className="text-subtle"> · {t(cs.quoteRole)}</span>
                      )}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6">
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-muted"
                >
                  {t(cs.cta)}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                {cs.link && (
                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                  >
                    {strings.projects.liveDemo}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
