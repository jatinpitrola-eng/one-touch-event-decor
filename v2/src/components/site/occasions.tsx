'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './section-heading';
import { OliveSprig } from './background';

const OCCASIONS = [
  {
    id: 'wedding',
    eyebrow: 'Weddings',
    title: 'A ceremony written in',
    highlight: 'petals & air',
    description:
      'From the first glance down the aisle to the last dance, we compose wedding décor that feels timeless, romantic and unmistakably yours. Organic garlands, sweetheart tables, aisle florals and arches — every detail considered.',
    image: '/images/sections/wedding.png',
    features: [
      'Ceremony arches & floral',
      'Sweetheart & head table styling',
      'Aisle décor & pew markers',
      'Reception entrance installations',
    ],
    accent: 'emerald',
  },
  {
    id: 'birthday',
    eyebrow: 'Birthdays',
    title: 'Milestones, made',
    highlight: 'unforgettable',
    description:
      'Whether it is a first birthday or a fiftieth, we sculpt celebrations that match the personality of the guest of honour — playful, elegant, and full of light.',
    image: '/images/sections/birthday.png',
    features: [
      'Themed balloon installations',
      'Dessert & cake table styling',
      'Photo backdrop & props',
      'Custom colour stories',
    ],
    accent: 'blush',
  },
  {
    id: 'family-function',
    eyebrow: 'Family Functions',
    title: 'Where the whole family',
    highlight: 'gathers in bloom',
    description:
      'Anniversaries, engagements, reunions, festive gatherings — the moments that bring generations together. Our family function décor weaves warmth, tradition and a touch of botanical luxury across your entire space.',
    image: '/images/sections/family-function.png',
    features: [
      'Long-table garlands & runners',
      'Entrance & doorway styling',
      'Festive & cultural themes',
      'Statement ceiling installations',
    ],
    accent: 'copper',
  },
  {
    id: 'baby-shower',
    eyebrow: 'Baby Showers',
    title: 'Soft beginnings,',
    highlight: 'tenderly styled',
    description:
      'Dreamy palettes, gentle foliage and the sweetest details for baby showers, gender reveals and naming ceremonies — designed to feel as precious as the moment itself.',
    image: '/images/sections/baby-shower.png',
    features: [
      'Soft organic balloon arches',
      'Gift & favour table styling',
      'Gender reveal moments',
      'Pastel botanical accents',
    ],
    accent: 'blush',
  },
  {
    id: 'corporate',
    eyebrow: 'Corporate',
    title: 'Brand moments that',
    highlight: 'stop the scroll',
    description:
      'Launches, galas, conferences and store openings — we craft brand-forward installations that photograph beautifully and leave a lasting impression on every guest.',
    image: '/images/sections/corporate.png',
    features: [
      'Stage & backdrop installations',
      'Brand-coloured balloon walls',
      'Product launch reveals',
      'Gala & award-night styling',
    ],
    accent: 'emerald',
  },
];

function OccasionBlock({
  occ,
  index,
}: {
  occ: (typeof OCCASIONS)[number];
  index: number;
}) {
  const flip = index % 2 === 1;
  const isBlush = occ.accent === 'blush';
  const isCopper = occ.accent === 'copper';
  const accentBg = isBlush
    ? 'bg-blush'
    : isCopper
      ? 'bg-copper'
      : 'bg-emerald';
  const accentText = isBlush
    ? 'text-blush-deep'
    : isCopper
      ? 'text-copper'
      : 'text-emerald';

  return (
    <div
      id={occ.id}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 scroll-mt-24"
    >
      {/* image */}
      <motion.div
        initial={{ opacity: 0, x: flip ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`relative ${flip ? 'lg:order-2' : ''}`}
      >
        <div className="relative mx-auto max-w-lg">
          <div
            className={`absolute -inset-3 ${flip ? 'rotate-2' : '-rotate-2'} rounded-3xl border ${isCopper ? 'border-copper/25' : isBlush ? 'border-blush/30' : 'border-emerald/20'}`}
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-luxe">
            { }
            <img
              src={occ.image}
              alt={occ.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#0B3D2E"/><circle cx="400" cy="300" r="120" fill="#D4A5A5" opacity="0.3"/><text x="50%" y="52%" fill="#F7F1E8" font-family="serif" font-size="32" text-anchor="middle">${occ.eyebrow}</text></svg>`
                  );
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 to-transparent" />
          </div>
          {/* floating accent chip */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute -bottom-5 ${flip ? '-left-4' : '-right-4'} rounded-2xl ${accentBg} px-5 py-3 text-cream shadow-luxe`}
          >
            <div className="font-script text-2xl leading-none">one touch</div>
            <div className="text-[0.6rem] uppercase tracking-[0.2em] opacity-80">
              {occ.eyebrow}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* text */}
      <motion.div
        initial={{ opacity: 0, x: flip ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        className={flip ? 'lg:order-1' : ''}
      >
        <div className={`eyebrow ${accentText} inline-flex items-center gap-2`}>
          <span className={`h-px w-8 ${isCopper ? 'bg-copper/50' : isBlush ? 'bg-blush/50' : 'bg-emerald/40'}`} />
          {occ.eyebrow}
        </div>
        <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.7rem]">
          {occ.title}{' '}
          <span className={`italic ${accentText}`}>{occ.highlight}</span>
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          {occ.description}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {occ.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accentBg}/15`}>
                <Check className={`h-3 w-3 ${accentText}`} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" className="mt-8 inline-block">
          <Button
            className={`btn-shine group rounded-full ${accentBg} px-7 py-5 text-cream hover:opacity-90`}
          >
            Enquire now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </motion.div>
    </div>
  );
}

export default function Occasions() {
  return (
    <section id="occasions" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-cream-gradient" />
      <OliveSprig className="pointer-events-none absolute left-0 top-20 h-72 w-44 text-emerald/8" />
      <OliveSprig className="pointer-events-none absolute right-0 bottom-20 h-72 w-44 text-copper/10" flip />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Occasions We Style"
          title="A celebration for"
          highlight="every chapter"
          description="From aisle to after-party, baby shower to boardroom — each occasion receives its own design language."
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-28">
          {OCCASIONS.map((occ, i) => (
            <OccasionBlock key={occ.id} occ={occ} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
