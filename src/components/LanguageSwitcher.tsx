"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, isLocale, type Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

export function LanguageSwitcher() {
  const { locale } = useLanguage();
  const pathname = usePathname();

  // Swap the leading /<locale> segment, preserving the rest of the path.
  const localizedPath = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/");
    if (segments[1] && isLocale(segments[1])) {
      segments[1] = target;
      return segments.join("/") || `/${target}`;
    }
    return `/${target}${pathname}`;
  };

  return (
    <div
      role="group"
      aria-label={ui[locale].a11y.switchLanguage}
      className="flex items-center border border-border font-mono text-xs"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localizedPath(l)}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`px-2.5 py-1.5 uppercase tracking-widest transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {localeLabels[l]}
          </Link>
        );
      })}
    </div>
  );
}
