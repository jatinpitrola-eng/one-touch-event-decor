'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './section-heading';

const TESTIMONIALS = [
  {
    name: 'Aisha & Ravi',
    role: 'Garden Wedding · 2024',
    text: 'They did not just decorate a room — they composed a feeling our guests still talk about months later. The olive branches and copper lights were pure magic.',
    initials: 'AR',
  },
  {
    name: 'Meera Joshi',
    role: 'Daughter&apos;s 1st Birthday',
    text: 'Soft, dreamy, and so elegant. My daughter kept pointing at the balloons. The team was calm, punctual and genuinely lovely to have around.',
    initials: 'MJ',
  },
  {
    name: 'The Khanna Family',
    role: 'Family Reunion · 2024',
    text: 'Three generations under one garland. They styled our entire living space for the anniversary — it felt like walking into a film set, but warm and personal.',
    initials: 'KF',
  },
  {
    name: 'Studio Mara',
    role: 'Brand Launch Event',
    text: 'Brand-forward, photogenic and on-brief. Our launch photos trended for days. One Touch understood the aesthetic instantly.',
    initials: 'SM',
  },
  {
    name: 'Priya & Karan',
    role: 'Baby Shower · 2023',
    text: 'Every detail was tender — the pastel arch, the olive leaves, the little reveal moment. It felt like the softest welcome for our baby.',
    initials: 'PK',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [auto, setAuto] = useState(true);

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [auto]);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, oklch(0.93 0.02 95) 100%)' }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by celebrators"
          highlight="across the city"
        />

        <div
          className="relative mx-auto mt-14 max-w-4xl"
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald/10 bg-card p-8 shadow-luxe sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-blush/15" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-copper text-copper" />
                  ))}
                </div>
                <p
                  className="mt-5 font-serif-soft text-xl italic leading-relaxed text-charcoal sm:text-2xl"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.text}&rdquo;` }}
                />
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald font-display text-cream">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-lg text-charcoal">{t.name}</div>
                    <div
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: t.role }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => go(idx)}
                    aria-label={`Testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? 'w-8 bg-emerald' : 'w-2 bg-emerald/25 hover:bg-emerald/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(i - 1)}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald/15 text-emerald transition-colors hover:bg-emerald hover:text-cream"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(i + 1)}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald/15 text-emerald transition-colors hover:bg-emerald hover:text-cream"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
