import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { defaultLocale } from "@/i18n/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.meta.title[defaultLocale],
    short_name: site.name,
    description: site.meta.description[defaultLocale],
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
