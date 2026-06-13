// Decorative, monochrome abstract SVG art.
// Strokes use `currentColor`, so color follows the surrounding text color and
// adapts to light/dark automatically. All pieces are purely decorative.

interface ArtProps {
  className?: string;
}

/**
 * A moiré "orb" built from many rotated, flattened ellipses.
 * Used as a large background accent in the hero.
 */
export function OrbArt({ className = "" }: ArtProps) {
  const rings = Array.from({ length: 22 });

  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="0.6">
        {rings.map((_, i) => {
          const t = i / (rings.length - 1);
          const rx = 30 + t * 165;
          const ry = 170 - t * 140;
          const rotation = i * 8.18;
          return (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx={rx}
              ry={ry}
              transform={`rotate(${rotation} 200 200)`}
              opacity={0.8 - t * 0.3}
            />
          );
        })}
      </g>
      <circle cx="200" cy="200" r="2.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function wavePath(yBase: number, amp: number, phase: number, width = 640) {
  const points: string[] = [];
  for (let x = 0; x <= width; x += 16) {
    const y = yBase + Math.sin((x / width) * Math.PI * 3 + phase) * amp;
    points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

/**
 * Stacked flowing lines — a calm, topographic-style accent.
 * Used as a subtle accent in the contact section.
 */
export function WaveArt({ className = "" }: ArtProps) {
  const lines = Array.from({ length: 14 });

  return (
    <svg
      viewBox="0 0 640 320"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="0.7">
        {lines.map((_, i) => {
          const yBase = 30 + i * 19;
          const amp = 10 + i * 1.2;
          const phase = i * 0.4;
          return (
            <path key={i} d={wavePath(yBase, amp, phase)} opacity={0.5 - i * 0.025} />
          );
        })}
      </g>
    </svg>
  );
}

/**
 * A seamless dot grid, tiled with an SVG pattern.
 * Used as a faint, site-wide background texture.
 */
export function GridArt({ className = "" }: ArtProps) {
  return (
    <svg width="100%" height="100%" aria-hidden className={className}>
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

/**
 * A loose field of small plus marks with varied opacity.
 * Used as a secondary accent in the hero.
 */
export function ScatterArt({ className = "" }: ArtProps) {
  const cols = 6;
  const rows = 4;

  return (
    <svg viewBox="0 0 240 160" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const x = 20 + c * 40;
            const y = 20 + r * 40;
            const s = 4;
            const opacity = 0.18 + ((r + c) % 3) * 0.14;
            return (
              <g key={`${r}-${c}`} opacity={opacity}>
                <line x1={x - s} y1={y} x2={x + s} y2={y} />
                <line x1={x} y1={y - s} x2={x} y2={y + s} />
              </g>
            );
          }),
        )}
      </g>
    </svg>
  );
}
