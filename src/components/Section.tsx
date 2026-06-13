import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <header className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono text-xs text-muted">{index}</span>
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              {title}
            </h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
