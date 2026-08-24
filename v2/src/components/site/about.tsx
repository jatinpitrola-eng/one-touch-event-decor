'use client';

import { motion } from 'framer-motion';
import { Check, Leaf, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './section-heading';
import { OliveSprig } from './background';

const PILLARS = [
  {
    icon: Heart,
    title: 'Hand-Crafted',
    text: 'Every balloon placed by hand, every garland composed with intention.',
  },
  {
    icon: Leaf,
    title: 'Botanical Touch',
    text: 'Olive branches & fresh foliage woven into each installation.',
  },
  {
    icon: Sparkles,
    title: 'One-Touch Service',
    text: 'From first sketch to final teardown — one dedicated stylist.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 bg-cream-gradient" />
      <OliveSprig className="pointer-events-none absolute -right-10 top-10 h-80 w-48 text-emerald/8" flip />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -rotate-2 rounded-3xl border border-copper/20" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-luxe">
              { }
              <img
                src="/images/sections/about-decorator.png"
                alt="One Touch event decorator arranging a luxury balloon garland"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml;utf8,' +
                    encodeURIComponent(
                      '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="600" height="800" fill="#0B3D2E"/><text x="50%" y="50%" fill="#F7F1E8" font-family="serif" font-size="28" text-anchor="middle">One Touch Décor</text></svg>'
                    );
                }}
              />
            </div>
            {/* floating stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-emerald p-5 text-cream shadow-luxe sm:-right-8"
            >
              <div className="font-display text-4xl">8+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/70">
                Years of
                <br />
                craft
              </div>
            </motion.div>
            <div className="absolute -left-5 -top-5 rounded-2xl bg-blush p-4 shadow-luxe">
              <Sparkles className="h-6 w-6 text-emerald-deep" />
            </div>
          </div>
        </motion.div>

        {/* text */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A single touch that"
            highlight="transforms a space"
            description="One Touch Event Décor began with a simple belief — that the right details, composed with care, can turn an ordinary room into an unforgettable memory. We blend the softness of organic balloon garlands with the timeless elegance of botanical foliage to craft celebrations that feel both fresh and luxurious."
          />
          <div className="mt-8 grid gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-emerald/10 bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald group-hover:text-cream">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-charcoal">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button className="btn-shine rounded-full bg-emerald px-7 py-5 text-cream hover:bg-emerald-deep">
                Start your project
              </Button>
            </a>
            <ul className="flex flex-col gap-1.5">
              {['Free design consultation', 'Transparent pricing'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-copper" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
