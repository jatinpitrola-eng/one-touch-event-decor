'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from './section-heading';

const STATS = [
  { n: 500, suffix: '+', label: 'Celebrations styled', desc: 'Across weddings, birthdays & corporate events' },
  { n: 8, suffix: ' yrs', label: 'Of craft', desc: 'Refining our botanical luxury signature' },
  { n: 98, suffix: '%', label: 'Happy clients', desc: 'Who recommend us to friends & family' },
  { n: 24, suffix: '/7', label: 'Design support', desc: 'From first sketch to final teardown' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="animate-count-glow">
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-px overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-cream-gradient" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="By The Numbers"
          title="A track record worth"
          highlight="celebrating"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-emerald/10 bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-luxe sm:p-8"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-opacity group-hover:opacity-30"
                style={{ background: 'var(--copper)' }}
              />
              <div className="relative font-display text-4xl text-gradient-emerald sm:text-5xl">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="relative mt-2 font-display text-lg text-charcoal">
                {s.label}
              </div>
              <p className="relative mt-1 text-xs leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
