'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const ITEMS = [
  'Balloon Arches',
  'Organic Garlands',
  'Wedding Styling',
  'Birthday Décor',
  'Family Functions',
  'Baby Showers',
  'Corporate Events',
  'Custom Installations',
  'Floral Styling',
  'Backdrop Design',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative z-10 -mt-2 border-y border-emerald/10 bg-emerald-deep py-5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-lg tracking-wide text-cream/90 sm:text-xl">
                {t}
              </span>
              <Leaf className="h-4 w-4 text-blush" />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden>
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-lg tracking-wide text-cream/90 sm:text-xl">
                {t}
              </span>
              <Leaf className="h-4 w-4 text-blush" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
