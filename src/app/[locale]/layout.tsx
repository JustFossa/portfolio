import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackgroundArt } from "@/components/BackgroundArt";
import { JsonLd } from "@/components/JsonLd";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const activeLocale: Locale = locale;

  return (
    <html
      lang={activeLocale}
      suppressHydrationWarning
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <BackgroundArt />
        <ThemeProvider>
          <LanguageProvider locale={activeLocale}>
            <ScrollProgress />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <JsonLd locale={activeLocale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
