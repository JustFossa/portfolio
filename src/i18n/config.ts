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
