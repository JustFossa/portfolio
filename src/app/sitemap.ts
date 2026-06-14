import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locales, defaultLocale, hrefLang } from "@/i18n/config";

const baseUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [hrefLang[l], `${baseUrl}/${l}`]),
  );

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
