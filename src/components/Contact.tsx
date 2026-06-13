import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";

export function Contact() {
  const email = site.links.find((l) => l.icon === "mail");

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <div>
            <p className="max-w-xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Let&apos;s build something worth shipping.
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Have a project in mind, a role to fill, or just want to talk shop?
              My inbox is always open.
            </p>
            {email && (
              <a
                href={email.href}
                className="group mt-8 inline-flex items-center gap-3 font-display text-xl underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground md:text-2xl"
              >
                {email.handle}
                <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-t border-border">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <SocialIcon name={link.icon} className="h-4 w-4 text-muted" />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-foreground">
                      {link.label}
                    </span>
                  </span>
                  <span className="text-sm text-subtle group-hover:text-foreground">
                    {link.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
