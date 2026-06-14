// Supported locales. Czech is the default (Czech-first).
export const locales = ["cs", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "cs";

// A string that has a value in every supported locale.
export type Localized = Record<Locale, string>;

export const localeLabels: Record<Locale, string> = {
  cs: "CS",
  en: "EN",
};

// OpenGraph locale codes (used in metadata).
export const ogLocale: Record<Locale, string> = {
  cs: "cs_CZ",
  en: "en_US",
};

// hreflang / language-region codes (used for alternates + sitemap).
export const hrefLang: Record<Locale, string> = {
  cs: "cs-CZ",
  en: "en-US",
};

// Type guard for runtime locale validation (middleware, params).
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
