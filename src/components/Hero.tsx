"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { SocialIcon } from "@/components/SocialIcon";
import { Reveal } from "@/components/Reveal";
import { OrbArt } from "@/components/AbstractArt";

export function Hero() {
  const { t, locale } = useLanguage();
  const strings = ui[locale];

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-content flex-col justify-center overflow-hidden px-6 pb-16 pt-24 md:px-10"
    >
      {/* Decorative abstract art */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden aspect-square w-[460px] max-w-[46vw] -translate-y-1/2 select-none text-foreground opacity-[0.22] dark:opacity-[0.32] lg:block">
        <OrbArt className="h-full w-full" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            {t(site.availability)}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted">
            {t(site.role)}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            {t(site.tagline)}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t(site.heroIntro)}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
            {site.valueProps.map((prop, i) => (
              <li key={i} className="flex items-center gap-3">
                {i > 0 && <span className="text-subtle">/</span>}
                <span className="transition-colors hover:text-foreground">
                  {t(prop)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-all hover:gap-3 hover:opacity-85"
            >
              {strings.hero.viewWork}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              {strings.hero.getInTouch}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-12 flex items-center gap-5">
            {site.links.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                aria-label={t(link.label)}
                className="text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
              >
                <SocialIcon name={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
