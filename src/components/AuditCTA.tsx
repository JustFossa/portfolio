"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { auditMailto } from "@/lib/contact";
import { Reveal } from "@/components/Reveal";

/** High-contrast, inverted call-to-action band for the free website audit. */
export function AuditCTA() {
  const { locale } = useLanguage();
  const a = ui[locale].audit;
  const href = auditMailto(a.subject, a.mailBody);

  return (
    <section aria-labelledby="audit-heading" className="px-6 md:px-10">
      <Reveal>
        <div className="mx-auto flex w-full max-w-content flex-col gap-8 bg-foreground px-8 py-14 text-background md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
          <div className="max-w-2xl">
            <h2
              id="audit-heading"
              className="font-display text-3xl leading-tight tracking-tight md:text-4xl"
            >
              {a.heading}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-background/75">
              {a.body}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
            <a
              href={href}
              className="group inline-flex items-center gap-2 bg-background px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              {a.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-background/60">
              {a.reassurance}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
