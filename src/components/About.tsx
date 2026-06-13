import { site } from "@/data/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <Reveal>
          <dl className="space-y-6">
            {site.facts.map((fact) => (
              <div key={fact.label} className="border-t border-border pt-3">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            {site.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed text-muted ${
                  i === 0
                    ? "text-2xl leading-snug text-foreground md:text-3xl"
                    : "text-lg"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
