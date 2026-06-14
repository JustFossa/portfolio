"use client";

import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { auditMailto } from "@/lib/contact";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { WaveArt } from "@/components/AbstractArt";

export function Contact() {
  const { t, locale } = useLanguage();
  const strings = ui[locale];
  const email = site.links.find((l) => l.icon === "mail");
  const auditHref = auditMailto(strings.audit.subject, strings.audit.mailBody);

  return (
    <Section id="contact" index="07" title={strings.sections.contact}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <div>
            <p className="max-w-xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
              {strings.contact.heading}
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              {strings.contact.body}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={auditHref}
                className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                {strings.audit.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-subtle">
                {strings.audit.reassurance}
              </p>
            </div>

            {email && (
              <a
                href={email.href}
                className="group mt-8 inline-flex items-center gap-3 font-display text-xl underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground md:text-2xl"
              >
                {email.handle}
                <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-t border-border">
            {site.links.map((link) => (
              <li key={link.icon}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:text-foreground"
                >
                  <span className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
                    <SocialIcon name={link.icon} className="h-4 w-4 text-muted" />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-foreground">
                      {t(link.label)}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-subtle group-hover:text-foreground">
                    {link.handle}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none mt-20 select-none text-foreground opacity-[0.12]"
      >
        <WaveArt className="h-20 w-full md:h-28" />
      </div>
    </Section>
  );
}
