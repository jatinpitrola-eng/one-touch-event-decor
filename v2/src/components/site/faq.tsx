'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './section-heading';

const FAQS = [
  {
    q: 'How early should I book my event?',
    a: 'For weddings and peak-season events, we recommend booking 8–12 weeks in advance. For birthdays and smaller celebrations, 3–4 weeks usually works. We do our best to accommodate last-minute requests based on availability.',
  },
  {
    q: 'Do you travel to venues outside the city?',
    a: 'Absolutely. We travel across the region for weddings and events. Travel beyond 25km from our studio is billed at a transparent per-km rate, included clearly in your quote.',
  },
  {
    q: 'Can I customise colours to match my theme?',
    a: 'Every installation is bespoke. Share your palette, mood board or even a fabric swatch — we will compose a garland in exactly your colours, with botanical foliage and copper accents to taste.',
  },
  {
    q: 'What happens to the balloons after the event?',
    a: 'We return for teardown at a scheduled time so you can enjoy the moment without worry. Where possible, we repurpose intact balloons and compost the botanical foliage.',
  },
  {
    q: 'Do you provide floral arrangements too?',
    a: 'Yes. We integrate fresh olive branches, eucalyptus and seasonal foliage into our balloon installations. For full floral styling (bouquets, centrepieces), we partner with trusted florists.',
  },
  {
    q: 'How does payment work?',
    a: 'A 25% retainer secures your date. The balance is due 7 days before the event. We accept bank transfer, UPI and major cards. Quotes are itemised and transparent — no surprises.',
  },
];

import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, oklch(0.93 0.02 95) 100%)' }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Good To Know"
          title="Questions,"
          highlight="thoughtfully answered"
          description="Everything you might want to know before we begin crafting your celebration."
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-copper/30 bg-card shadow-luxe' : 'border-emerald/10 bg-card'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-charcoal sm:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-copper text-cream' : 'bg-emerald/10 text-emerald'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    {f.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
