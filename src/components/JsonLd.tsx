import { site } from "@/data/site";
import { services } from "@/data/services";
import { skills } from "@/data/skills";
import type { Locale } from "@/i18n/config";

/**
 * Schema.org structured data for search engines and AI answer engines (GEO).
 * Emits a Person, a ProfessionalService (local business), and a WebSite,
 * linked by @id so engines understand they describe the same entity.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const baseUrl = site.url;
  const pageUrl = `${baseUrl}/${locale}`;
  const email = site.links.find((l) => l.icon === "mail")?.handle;
  const sameAs = site.links
    .filter((l) => l.href.startsWith("http"))
    .map((l) => l.href);
  const knowsAbout = skills.flatMap((group) => group.items);

  const address = {
    "@type": "PostalAddress",
    addressLocality: site.geo.locality,
    addressRegion: "Ústecký kraj",
    addressCountry: site.geo.country,
  };

  const person = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: site.name,
    alternateName: site.handle,
    url: pageUrl,
    image: `${baseUrl}/favicon.svg`,
    jobTitle: site.role[locale],
    description: site.meta.description[locale],
    ...(email ? { email } : {}),
    address,
    knowsAbout,
    knowsLanguage: ["Czech", "English"],
    sameAs,
  };

  const business = {
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#business`,
    name: site.name,
    description: site.meta.description[locale],
    url: pageUrl,
    image: `${baseUrl}/favicon.svg`,
    ...(email ? { email } : {}),
    priceRange: "$$",
    founder: { "@id": `${baseUrl}/#person` },
    provider: { "@id": `${baseUrl}/#person` },
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: site.geo.locality },
      { "@type": "Country", name: "Czechia" },
    ],
    knowsLanguage: ["Czech", "English"],
    identifier: [
      { "@type": "PropertyValue", propertyID: "ICO", value: site.business.ico },
      { "@type": "PropertyValue", propertyID: "DIC", value: site.business.dic },
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title[locale],
        description: service.description[locale],
      },
    })),
    sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: site.name,
    inLanguage: locale,
    publisher: { "@id": `${baseUrl}/#person` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, business, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
