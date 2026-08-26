'use client';

import { useEffect, useRef } from 'react';

/**
 * A soft glow that follows the cursor — adds a luxurious, alive feel.
 * Hidden on touch devices (no hover) and respects reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    // hide when leaving the window
    const onLeave = () => (el.style.opacity = '0');
    const onEnter = () => (el.style.opacity = '1');

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[400px] w-[400px] rounded-full opacity-70 mix-blend-soft-light transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(circle, oklch(0.82 0.06 18 / 0.5) 0%, oklch(0.62 0.13 55 / 0.25) 30%, transparent 65%)',
        willChange: 'transform',
      }}
    />
  );
}
