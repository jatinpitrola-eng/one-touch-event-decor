'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin gradient progress bar at the very top of the viewport that fills
 * as the user scrolls. Purely decorative + satisfying.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[140] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--emerald), var(--copper), var(--blush), var(--copper))',
        boxShadow: '0 0 12px oklch(0.62 0.13 55 / 0.6)',
      }}
    />
  );
}
