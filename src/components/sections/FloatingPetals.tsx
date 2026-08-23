"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * FloatingPetals — ambient floating petals/dust particles.
 * Renders inside hero only. Petals drift up slowly with rotation.
 */
type Petal = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  drift: number;
};

const COLORS = ["#D4A5A5", "#E07856", "#F0A88E", "#9CAF88", "#E8DDC8"];

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 12,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * 360,
    drift: (Math.random() - 0.5) * 80,
  }));
}

export default function FloatingPetals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(generatePetals(count));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-30px]"
          style={{ left: `${p.left}%` }}
          initial={{ y: 0, x: 0, opacity: 0, rotate: p.rotation }}
          animate={{
            y: ["0vh", "-110vh"],
            x: [0, p.drift, 0],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.15, 0.85, 1],
          }}
        >
          {/* Petal shape — a soft ellipse */}
          <div
            style={{
              width: p.size,
              height: p.size * 1.4,
              background: p.color,
              borderRadius: "50% 10% 50% 10%",
              opacity: 0.55,
              filter: "blur(0.4px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
