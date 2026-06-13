import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackgroundArt } from "@/components/BackgroundArt";
import { site } from "@/data/site";
import { defaultLocale } from "@/i18n/config";
import "./globals.css";

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

// Czech-first metadata (default locale).
export const metadata: Metadata = {
  title: site.meta.title.cs,
  description: site.meta.description.cs,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.meta.title.cs,
    description: site.meta.description.cs,
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={defaultLocale}
      suppressHydrationWarning
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <BackgroundArt />
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
