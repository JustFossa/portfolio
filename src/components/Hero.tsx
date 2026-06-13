import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-content flex-col justify-center px-6 pb-16 pt-24 md:px-10"
    >
      <Reveal>
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
          </span>
          {site.availability}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-muted">
          {site.role}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
          {site.name}
        </h1>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl">
          {site.tagline}
        </p>
      </Reveal>

      <Reveal delay={300}>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {site.heroIntro}
        </p>
      </Reveal>

      <Reveal delay={380}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-85"
          >
            View work
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={460}>
        <div className="mt-12 flex items-center gap-5">
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={link.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              <SocialIcon name={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
