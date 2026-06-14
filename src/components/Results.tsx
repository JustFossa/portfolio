"use client";

import { stats } from "@/data/stats";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

/** Thin trust strip of headline numbers, shown directly under the hero. */
export function Results() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-content">
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex h-full flex-col bg-background px-6 py-10 md:px-10">
                <span className="font-display text-4xl tracking-tight md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  {t(stat.label)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
