import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

// Pick a locale from the Accept-Language header. Czech is the default;
// English is used only when the visitor's browser clearly prefers it.
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const lang of preferred) {
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("cs") || lang.startsWith("sk")) return "cs";
  }
  return defaultLocale;
}

// Next.js 16 "proxy" convention (formerly middleware).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already locale-prefixed → nothing to do.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals, API routes, and files with an
  // extension (favicon.svg, robots.txt, sitemap.xml, manifest, og images, …).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
