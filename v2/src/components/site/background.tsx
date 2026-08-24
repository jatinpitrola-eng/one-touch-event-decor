'use client';

/**
 * Ambient background decorations used across the page:
 * floating balloons, olive leaves, soft gradient blobs, grain texture.
 * Purely decorative — pointer-events-none, aria-hidden.
 */
export function AmbientBackdrop({ variant = 'cream' }: { variant?: 'cream' | 'emerald' }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {variant === 'cream' ? (
        <div className="absolute inset-0 bg-cream-gradient" />
      ) : (
        <div className="absolute inset-0 bg-emerald-gradient" />
      )}
      {/* soft blobs */}
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full blur-3xl opacity-40 animate-floaty-slow"
        style={{ background: 'oklch(0.82 0.06 18 / 0.35)' }}
      />
      <div
        className="absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 animate-floaty"
        style={{ background: 'oklch(0.40 0.09 165 / 0.4)' }}
      />
      {/* grain */}
      <div className="absolute inset-0 bg-grain opacity-60" />
    </div>
  );
}

/** Floating decorative balloons (subtle, scattered) */
export function FloatingBalloons({ count = 6 }: { count?: number }) {
  const palette = ['#0B3D2E', '#D4A5A5', '#B87333', '#E8B4B8', '#2E5D43', '#C68A4E'];
  const items = Array.from({ length: count }).map((_, i) => ({
    color: palette[i % palette.length],
    left: `${(i * 17 + 6) % 92}%`,
    size: 30 + ((i * 13) % 36),
    dur: 9 + (i % 5) * 2,
    delay: (i % 4) * 1.5,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {items.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-[-80px] opacity-50"
          style={{
            left: b.left,
            animation: `balloon-rise ${b.dur}s linear ${b.delay}s infinite`,
          }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 64 84" fill="none">
            <ellipse cx="32" cy="32" rx="26" ry="30" fill={b.color} />
            <ellipse cx="24" cy="22" rx="6" ry="9" fill="white" opacity="0.3" />
            <path d="M32 62 L29 70 L35 70 L32 62 Z" fill={b.color} />
          </svg>
        </div>
      ))}
    </div>
  );
}

/** Olive branch sprig SVG, placeable */
export function OliveSprig({
  className = '',
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 196 C 58 150, 56 110, 60 60 C 62 40, 66 24, 70 8"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 30 + i * 22;
        return (
          <g key={i}>
            <ellipse
              cx={46}
              cy={y}
              rx="14"
              ry="5"
              transform={`rotate(${-30 - i * 2} 46 ${y})`}
              fill="currentColor"
              opacity="0.9"
            />
            <ellipse
              cx={74}
              cy={y - 4}
              rx="13"
              ry="4.6"
              transform={`rotate(${30 + i * 2} 74 ${y - 4})`}
              fill="currentColor"
              opacity="0.8"
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Decorative ornamental divider with copper flourish */
export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-copper ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-copper" />
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <path
          d="M2 7 C 6 2, 10 12, 14 7 C 18 2, 22 12, 26 7"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="14" cy="7" r="2" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-copper" />
    </div>
  );
}
