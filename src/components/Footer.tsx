import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          © {year} {site.name} · {site.handle}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Built with Next.js &amp; Tailwind CSS
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
