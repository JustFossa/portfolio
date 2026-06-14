"use client";

import { Globe, AppWindow, TrendingUp, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const icons: Record<ServiceIcon, LucideIcon> = {
  website: Globe,
  app: AppWindow,
  growth: TrendingUp,
};

export function Services() {
  const { t, locale } = useLanguage();

  return (
    <Section id="services" index="01" title={ui[locale].sections.services}>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.icon} delay={i * 80}>
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-card">
                <Icon
                  className="h-7 w-7 text-foreground transition-transform duration-300 group-hover:-translate-y-1"
                  aria-hidden
                />
                <h3 className="mt-6 font-display text-2xl">{t(service.title)}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {t(service.description)}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
