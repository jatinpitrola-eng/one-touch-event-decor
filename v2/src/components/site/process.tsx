'use client';

import { motion } from 'framer-motion';
import { MessageCircle, PencilRuler, PartyPopper, Sparkles } from 'lucide-react';
import { SectionHeading } from './section-heading';

const STEPS = [
  {
    icon: MessageCircle,
    n: '01',
    title: 'Consult',
    text: 'A relaxed conversation about your moment, venue, mood and the feeling you want guests to carry home.',
  },
  {
    icon: PencilRuler,
    n: '02',
    title: 'Design',
    text: 'We compose a bespoke concept — palette, layout, sculptural form and botanical accents — tailored to your space.',
  },
  {
    icon: PartyPopper,
    n: '03',
    title: 'Craft',
    text: 'On the day, our team arrives early and installs every detail by hand, so you arrive to a finished masterpiece.',
  },
  {
    icon: Sparkles,
    n: '04',
    title: 'Celebrate',
    text: 'You step into the moment. We stay nearby for any last touch-ups, then quietly dismantle after the celebration.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      {/* emerald backdrop */}
      <div className="absolute inset-0 -z-10 bg-emerald-gradient" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="How We Work"
          title="From first hello to"
          highlight="final flourish"
          description="A calm, considered process that keeps you relaxed and the details flawless."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative text-center"
              >
                <div className="relative mx-auto flex h-18 w-18 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-cream/15" />
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-emerald-deep shadow-glow-blush"
                  >
                    <s.icon className="h-7 w-7" />
                  </motion.span>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-copper font-display text-xs text-cream">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cream/65">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* process image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl shadow-luxe"
        >
          <div className="relative aspect-[21/8] w-full">
            { }
            <img
              src="/images/sections/process.png"
              alt="One Touch designers crafting a luxury balloon garland"
              className="h-full w-full object-cover"
              onError={(e) => ((e.target as HTMLImageElement).style.opacity = '0.2')}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/80 via-emerald-deep/30 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-md text-cream">
                <span className="eyebrow text-blush">The Atelier</span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                  Every balloon, placed by hand
                </h3>
                <p className="mt-3 text-sm text-cream/70">
                  No templates, no shortcuts. Each installation is composed
                  fresh, in-studio, then installed on site by our own team.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
