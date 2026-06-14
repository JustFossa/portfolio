"use client";

import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

export function Footer() {
  const { t, locale } = useLanguage();
  const strings = ui[locale];
  const { business } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          © {year} {site.name} · {site.handle}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          {strings.footer.builtWith}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          {strings.footer.backToTop}
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-content flex-col gap-1 border-t border-border px-6 py-6 md:px-10">
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-subtle">
          {site.name} · {t(business.icoLabel)}: {business.ico} ·{" "}
          {t(business.dicLabel)}: {business.dic}
        </p>
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-subtle">
          {t(business.trust)}
        </p>
      </div>
    </footer>
  );
}
