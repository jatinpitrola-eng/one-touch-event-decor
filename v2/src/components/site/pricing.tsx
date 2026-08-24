'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './section-heading';

const PACKAGES = [
  {
    name: 'The Whisper',
    tagline: 'Intimate gatherings',
    price: '₹14,999',
    note: 'onwards',
    desc: 'A refined statement for smaller celebrations up to 30 guests.',
    features: [
      '3m organic balloon garland',
      'Botanical foliage accents',
      '1 styled photo backdrop',
      '2-hour on-site installation',
      'Palette consultation',
    ],
    accent: 'emerald',
    featured: false,
  },
  {
    name: 'The Signature',
    tagline: 'Most loved',
    price: '₹34,999',
    note: 'onwards',
    desc: 'Our most-requested package for weddings & milestone birthdays.',
    features: [
      '6m organic balloon garland',
      'Ceremony / entrance arch',
      'Sweetheart table styling',
      'Botanical & copper lighting',
      'Full-day installation & teardown',
      'Dedicated lead stylist',
    ],
    accent: 'copper',
    featured: true,
  },
  {
    name: 'The Grand Atelier',
    tagline: 'Full venue styling',
    price: '₹79,999',
    note: 'onwards',
    desc: 'End-to-end design for large weddings, galas & corporate events.',
    features: [
      'Full venue styling concept',
      'Multiple arches & installations',
      'Stage / backdrop & entrance',
      'Custom sculptural pieces',
      'Floral & foliage integration',
      'On-site team throughout event',
      'Post-event teardown',
    ],
    accent: 'blush',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="packages" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-cream-gradient" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Packages"
          title="Considered packages,"
          highlight="crafted for you"
          description="Transparent starting points — every package is tailored to your venue, palette and guest count."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const isCopper = p.accent === 'copper';
            const isBlush = p.accent === 'blush';
            const accentBg = isCopper ? 'bg-copper' : isBlush ? 'bg-blush' : 'bg-emerald';
            const accentText = isCopper ? 'text-copper' : isBlush ? 'text-blush-deep' : 'text-emerald';
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2 ${
                  p.featured
                    ? 'border-copper/30 bg-emerald text-cream shadow-luxe lg:-translate-y-4 lg:scale-[1.03]'
                    : 'border-emerald/10 bg-card text-charcoal hover:shadow-luxe'
                }`}
              >
                {p.featured && (
                  <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-blush px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-deep">
                    <Star className="h-3 w-3 fill-emerald-deep" /> Most loved
                  </div>
                )}
                <div className={`eyebrow ${p.featured ? 'text-blush' : accentText}`}>
                  {p.tagline}
                </div>
                <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.featured ? 'text-cream/70' : 'text-muted-foreground'}`}>
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl">{p.price}</span>
                  <span className={`text-sm ${p.featured ? 'text-cream/60' : 'text-muted-foreground'}`}>
                    {p.note}
                  </span>
                </div>
                <div className={`mt-6 h-px w-full ${p.featured ? 'bg-cream/15' : 'bg-emerald/10'}`} />
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.featured ? 'bg-blush/20' : `${accentBg}/15`}`}
                      >
                        <Check className={`h-3 w-3 ${p.featured ? 'text-blush' : accentText}`} />
                      </span>
                      <span className={p.featured ? 'text-cream/85' : 'text-charcoal/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 block">
                  <Button
                    className={`btn-shine w-full rounded-full py-5 ${
                      p.featured
                        ? 'bg-blush text-emerald-deep hover:bg-blush-deep'
                        : `${accentBg} text-cream hover:opacity-90`
                    }`}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Choose {p.name}
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          Every celebration is unique. Share your date &amp; venue and we&apos;ll
          craft a bespoke quote within 24 hours.
        </p>
      </div>
    </section>
  );
}
