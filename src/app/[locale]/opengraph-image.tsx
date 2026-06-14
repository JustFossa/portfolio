import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";

export const alt = "Marek Paňko — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;

  const bg = "#0a0a0a";
  const fg = "#ededed";
  const muted = "#b3b3b3";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          color: fg,
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: muted,
          }}
        >
          {site.role[l]} · {site.location[l]}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 600,
            maxWidth: 1040,
          }}
        >
          {site.tagline[l]}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: muted,
            fontSize: 30,
          }}
        >
          <span style={{ display: "flex", color: fg }}>{site.name}</span>
          <span style={{ display: "flex" }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
