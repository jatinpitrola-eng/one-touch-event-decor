"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Events Styled" },
  { value: 8, suffix: " yrs", label: "Of Craft" },
  { value: 150, suffix: "+", label: "Custom Themes" },
  { value: 98, suffix: "%", label: "Happy Clients" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 bg-[#1F3D34] text-[#FBF5EC] overflow-hidden grain-overlay">
      {/* Decorative leaves */}
      <div className="absolute top-6 left-6 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 5 C 15 15, 15 45, 30 55 C 45 45, 45 15, 30 5 Z"
            stroke="#E8B4B8"
            strokeWidth="1"
          />
          <path d="M30 5 L 30 55" stroke="#E8B4B8" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 opacity-20 rotate-180">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 5 C 15 15, 15 45, 30 55 C 45 45, 45 15, 30 5 Z"
            stroke="#E8B4B8"
            strokeWidth="1"
          />
          <path d="M30 5 L 30 55" stroke="#E8B4B8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="text-center"
            >
              <p className="font-display font-bold text-4xl md:text-6xl text-[#FBF5EC]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs md:text-sm tracking-wide-luxe text-[#E8D5B7] uppercase">
                {s.label}
              </p>
              <div className="mt-4 mx-auto w-12 h-px bg-[#C97B5C]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
