import type { Metadata } from "next";
import { site } from "@/data/site";
import { locales, defaultLocale, ogLocale, hrefLang, type Locale } from "@/i18n/config";

const baseUrl = site.url;

/** Build full, per-locale metadata for the home page / locale layout. */
export function buildMetadata(locale: Locale): Metadata {
  const path = `/${locale}`;

  // hreflang map: every locale + an x-default pointing at the default locale.
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [hrefLang[l], `/${l}`]),
  );
  languages["x-default"] = `/${defaultLocale}`;

  const title = site.meta.title[locale];
  const description = site.meta.description[locale];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: baseUrl }],
    creator: site.name,
    publisher: site.name,
    keywords: site.keywords[locale],
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: `@${site.handle}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    // Local SEO / GEO signals.
    other: {
      "geo.region": site.geo.region,
      "geo.placename": site.geo.locality,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  };
}
