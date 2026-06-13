"use client";

import { locales, localeLabels } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label={ui[locale].a11y.switchLanguage}
      className="flex items-center border border-border font-mono text-xs"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(l)}
            className={`px-2.5 py-1.5 uppercase tracking-widest transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
