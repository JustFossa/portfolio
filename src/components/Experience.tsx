import { experience } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      {/* Roles */}
      <div>
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.role}`} delay={i * 80}>
            <article className="grid gap-3 border-t border-border py-8 md:grid-cols-[220px_1fr] md:gap-10 md:py-10">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                <p>{role.period}</p>
                <p className="mt-1 normal-case tracking-normal text-subtle">
                  {role.location}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl">
                  {role.role}
                </h3>
                <p className="mt-1 text-lg text-muted">
                  {role.company}
                  <span className="text-subtle"> · {role.type}</span>
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  {role.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.focus.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16 border-t border-border pt-10">
        <Reveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
            Licenses &amp; Certifications
          </h3>
        </Reveal>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 60}>
              <div className="h-full bg-background p-6">
                <h4 className="font-display text-xl leading-snug">{cert.name}</h4>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer}
                  <span className="text-subtle"> · {cert.date}</span>
                </p>
                {cert.note && (
                  <p className="mt-3 text-sm leading-relaxed text-subtle">
                    {cert.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
