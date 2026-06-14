"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale, Localized } from "./config";

interface LanguageContextValue {
  locale: Locale;
  /** Resolve a Localized value to a plain string in the active locale. */
  t: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provides the active locale to the tree. The locale is derived from the route
 * (the [locale] segment) and passed in by the server layout — there is no
 * client-side persistence, so the URL is the single source of truth.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const t = (value: Localized) => value[locale];

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
