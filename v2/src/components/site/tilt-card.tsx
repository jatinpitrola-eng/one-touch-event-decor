'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * 3D tilt card — tilts toward the cursor in 3D space with a glare highlight.
 */
export default function TiltCard({
  children,
  className = '',
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 12;
    setTransform(
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`
    );
    setGlarePos({ x: px * 100, y: py * 100, o: 0.18 });
  };

  const reset = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale(1)');
    setGlarePos((g) => ({ ...g, o: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glarePos.o,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, oklch(1 0 0 / 0.7), transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
}
