import { site } from "@/data/site";

/** The site's primary email link, e.g. "mailto:name@example.com". */
export const emailHref =
  site.links.find((l) => l.icon === "mail")?.href ?? "mailto:";

/** Build a mailto link with a prefilled subject and body. */
export function auditMailto(subject: string, body: string): string {
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `${emailHref}?${query}`;
}
