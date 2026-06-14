"use client";

import { ArrowUpRight, Github, Star } from "lucide-react";
import { projects, githubUrl } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {tech.map((item) => (
        <li
          key={item}
          className="font-mono text-[0.7rem] uppercase tracking-widest text-subtle"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const { t, locale } = useLanguage();
  const strings = ui[locale];
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title={strings.sections.projects}>
      {/* Featured / flagship project */}
      {featured.map((project) => (
        <Reveal key={project.name}>
          <article className="group relative mb-12 overflow-hidden border border-foreground bg-background p-8 transition-colors md:p-10">
            <span className="absolute inset-x-0 top-0 h-1 w-0 bg-foreground transition-all duration-700 ease-out group-hover:w-full" />

            <span className="inline-flex items-center gap-2 bg-foreground px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-background">
              <Star className="h-3.5 w-3.5" />
              {strings.projects.featured}
            </span>

            <h3 className="mt-5 font-display text-3xl md:text-4xl">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                {t(project.tagline)}
              </p>
            )}
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
              {t(project.description)}
            </p>

            <div className="mt-7">
              <TechList tech={project.tech} />
            </div>

            <div className="mt-7 flex items-center gap-6 border-t border-border pt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-muted"
                >
                  {strings.projects.liveDemo}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
                  {strings.projects.code}
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}

      {/* Remaining projects */}
      {rest.length > 0 && (
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="group relative flex h-full flex-col bg-background p-7 transition-colors duration-300 hover:bg-card">
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-foreground transition-all duration-500 ease-out group-hover:w-full" />

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl">{project.name}</h3>
                  <span className="font-mono text-xs text-subtle transition-colors group-hover:text-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {t(project.description)}
                </p>

                <div className="mt-6">
                  <TechList tech={project.tech} />
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-muted"
                    >
                      {strings.projects.liveDemo}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
                      {strings.projects.code}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          {strings.projects.seeMore}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
