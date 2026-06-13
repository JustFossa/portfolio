import { ArrowUpRight, Github } from "lucide-react";
import { projects, githubUrl } from "@/data/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <Section id="projects" index="04" title="Selected Work">
      {hasProjects ? (
        <>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <article className="flex h-full flex-col bg-background p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl">{project.name}</h3>
                    <span className="font-mono text-xs text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[0.7rem] uppercase tracking-widest text-subtle"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-muted"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              See more on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </>
      ) : (
        <Reveal>
          <div className="flex flex-col items-start gap-6 border border-border p-10 md:flex-row md:items-center md:justify-between md:p-14">
            <div className="max-w-xl">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                A curated set of projects is on its way.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                In the meantime, my code lives in the open on GitHub.
              </p>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex shrink-0 items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              Browse GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
