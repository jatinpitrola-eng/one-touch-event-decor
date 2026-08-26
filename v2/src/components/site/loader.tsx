'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ----------------------------------------------------------------
   Balloon SVG — used by the loader intro
----------------------------------------------------------------- */
function BalloonSVG({
  color,
  size = 64,
  className = '',
  style,
}: {
  color: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 64 84"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`bal-${color}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.85" />
          <stop offset="35%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="26" ry="30" fill={`url(#bal-${color})`} />
      <ellipse cx="24" cy="22" rx="6" ry="9" fill="white" opacity="0.35" />
      <path d="M32 62 L29 70 L35 70 L32 62 Z" fill={color} opacity="0.85" />
      <path
        d="M32 70 C 28 74, 36 78, 32 82"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

/* ----------------------------------------------------------------
   Logo mark — botanical wreath + blooming flower (Velvet Bloom)
----------------------------------------------------------------- */
function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* circular wreath */}
      <motion.path
        d="M100 30 C 60 30, 38 55, 38 80 C 38 105, 60 120, 100 120 C 140 120, 162 105, 162 80 C 162 55, 140 30, 100 30 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* wreath leaves left */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        {[0, 1, 2].map((i) => (
          <ellipse
            key={`wl${i}`}
            cx={44 - i * 0.5}
            cy={70 + i * 14}
            rx="4.5"
            ry="2.2"
            transform={`rotate(${-50 + i * 8} ${44 - i * 0.5} ${70 + i * 14})`}
            fill="currentColor"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <ellipse
            key={`wr${i}`}
            cx={156 + i * 0.5}
            cy={70 + i * 14}
            rx="4.5"
            ry="2.2"
            transform={`rotate(${50 - i * 8} ${156 + i * 0.5} ${70 + i * 14})`}
            fill="currentColor"
          />
        ))}
      </motion.g>
      {/* blooming flower at top center */}
      <motion.g
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: '100px 30px' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={`petal${i}`}
            cx="100"
            cy="22"
            rx="4.5"
            ry="7"
            transform={`rotate(${i * 72} 100 30)`}
            fill="currentColor"
            opacity="0.9"
          />
        ))}
        <circle cx="100" cy="30" r="3.2" fill="currentColor" opacity="0.6" />
      </motion.g>
      {/* script wordmark */}
      <motion.text
        x="100"
        y="85"
        textAnchor="middle"
        fontFamily="var(--font-great-vibes), cursive"
        fontSize="32"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        Velvet Bloom
      </motion.text>
      {/* tagline */}
      <motion.text
        x="100"
        y="103"
        textAnchor="middle"
        fontFamily="var(--font-manrope), sans-serif"
        fontSize="7"
        letterSpacing="3.4"
        fill="currentColor"
        opacity="0.7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        EVENT DÉCOR
      </motion.text>
      {/* ornament */}
      <motion.g
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 1.9 }}
        style={{ transformOrigin: '100px 114px' }}
      >
        <line x1="82" y1="114" x2="92" y2="114" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="114" r="1.6" fill="currentColor" />
        <line x1="108" y1="114" x2="118" y2="114" stroke="currentColor" strokeWidth="0.8" />
      </motion.g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Loader intro — full-screen, balloons rising + logo reveal
----------------------------------------------------------------- */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const dur = 3200;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / dur) * 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 450);
    };
    requestAnimationFrame(tick);
  }, []);

  // rising balloons
  const balloons = [
    { color: '#0B3D2E', left: '8%', delay: 0.1, size: 54, dur: 4.5 },
    { color: '#D4A5A5', left: '20%', delay: 0.6, size: 70, dur: 5.5 },
    { color: '#B87333', left: '33%', delay: 1.1, size: 46, dur: 4.2 },
    { color: '#E8B4B8', left: '46%', delay: 0.3, size: 60, dur: 5 },
    { color: '#2E5D43', left: '60%', delay: 0.9, size: 52, dur: 4.8 },
    { color: '#C68A4E', left: '73%', delay: 0.4, size: 64, dur: 5.2 },
    { color: '#D4A5A5', left: '86%', delay: 1.3, size: 48, dur: 4.6 },
    { color: '#3F6B52', left: '94%', delay: 0.7, size: 58, dur: 5 },
  ];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(900px 600px at 50% 20%, oklch(0.28 0.07 168), oklch(0.18 0.04 155))',
          }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* grain overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* rising balloons */}
          {balloons.map((b, i) => (
            <div
              key={i}
              className="absolute bottom-[-120px]"
              style={{
                left: b.left,
                animation: `balloon-rise ${b.dur}s linear ${b.delay}s infinite`,
              }}
            >
              <BalloonSVG color={b.color} size={b.size} />
            </div>
          ))}

          {/* glow ring behind logo */}
          <motion.div
            className="absolute"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'oklch(0.82 0.06 18 / 0.35)' }} />
              <div className="absolute inset-6 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-12 rounded-full border border-white/10" />
            </div>
          </motion.div>

          {/* logo */}
          <motion.div
            className="relative z-10 text-cream"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <LogoMark className="h-36 w-60 sm:h-44 sm:w-72" />
          </motion.div>

          {/* tagline + progress */}
          <motion.div
            className="relative z-10 mt-6 flex w-[min(80vw,360px)] flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.4em] text-cream/70">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-copper" />
              Crafting your moment
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-copper" />
            </div>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    'linear-gradient(90deg, var(--emerald), var(--copper), var(--blush))',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
            <div className="font-serif-soft text-sm italic text-cream/60">
              {Math.round(progress)}% · inflating joy
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
