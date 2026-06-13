import { GridArt } from "@/components/AbstractArt";

/**
 * Fixed, faint dot-grid texture behind the whole page.
 * Sits above the page background but below all content.
 */
export function BackgroundArt() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 select-none text-foreground opacity-[0.05] dark:opacity-[0.07]"
    >
      <GridArt className="h-full w-full" />
    </div>
  );
}
