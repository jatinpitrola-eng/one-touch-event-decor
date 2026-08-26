'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Gift,
  Building2,
  Baby,
  PartyPopper,
  Leaf,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from './section-heading';

const SERVICES = [
  {
    icon: PartyPopper,
    title: 'Balloon Arches & Garlands',
    text: 'Sculptural organic installations in bespoke palettes, framing entrances, stages and photo moments.',
    tags: ['Organic', 'Sculptural', 'Custom palette'],
  },
  {
    icon: Heart,
    title: 'Wedding Styling',
    text: 'Ceremony arches, sweetheart tables and aisle décor — romance composed balloon by balloon.',
    tags: ['Ceremony', 'Reception', 'Couples'],
  },
  {
    icon: Gift,
    title: 'Birthday Celebrations',
    text: 'From milestone birthdays to intimate dinners — playful elegance for every age.',
    tags: ['Milestones', 'Kids', 'Themed'],
  },
  {
    icon: Baby,
    title: 'Baby Showers & Reveals',
    text: 'Soft, dreamy palettes with botanical accents for life&apos;s tender beginnings.',
    tags: ['Showers', 'Gender reveal', 'Naming'],
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    text: 'Brand-forward installations, launches and gala styling that turn heads and cameras.',
    tags: ['Launches', 'Galas', 'Branding'],
  },
  {
    icon: Leaf,
    title: 'Botanical & Floral',
    text: 'Fresh foliage, olive branches and florals woven into balloon compositions.',
    tags: ['Fresh', 'Seasonal', 'Sustainable'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-cream-gradient" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Signature services, crafted"
          highlight="with intention"
          description="A full atelier of celebration design — from a single statement arch to a fully styled venue."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-emerald/10 bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe hover:border-copper/30"
            >
              {/* hover gradient */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(400px 200px at 0% 0%, oklch(0.40 0.09 165 / 0.06), transparent 70%)',
                }}
              />
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald text-cream shadow-glow-emerald transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-copper opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl text-charcoal">
                {s.title}
              </h3>
              <p
                className="relative mt-3 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: s.text }}
              />
              <div className="relative mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blush/15 px-3 py-1 text-[0.7rem] font-medium text-blush-deep"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-copper/40 via-emerald/10 to-transparent" />
              <a
                href="#contact"
                className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald transition-colors hover:text-copper"
              >
                Enquire about this
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
