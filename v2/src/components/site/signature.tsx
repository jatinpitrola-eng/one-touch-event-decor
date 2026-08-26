'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';
import { SectionHeading } from './section-heading';

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, var(--cream) 0%, oklch(0.93 0.02 95) 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Work"
          title="Moments we are"
          highlight="quietly proud of"
          description="A curated glimpse into installations that defined a season, a couple, a family."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* feature large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="group relative lg:col-span-7 overflow-hidden rounded-3xl shadow-luxe"
          >
            <div className="aspect-[16/11] w-full overflow-hidden">
              { }
              <img
                src="/images/sections/hero-arch.png"
                alt="Signature luxury balloon arch installation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => ((e.target as HTMLImageElement).style.opacity = '0.3')}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-cream">
              <span className="eyebrow text-blush">Featured</span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                The Garden Arch
              </h3>
              <p className="mt-2 max-w-md text-sm text-cream/75">
                A sweeping organic garland with olive branches & copper lights —
                our most-requested ceremony installation.
              </p>
              <a
                href="#gallery"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-cream/20"
              >
                View in gallery <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* right column with two stacked */}
          <div className="grid gap-5 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-luxe"
            >
              <div className="aspect-[5/4] w-full overflow-hidden">
                { }
                <img
                  src="/images/sections/birthday.png"
                  alt="Signature birthday balloon installation"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => ((e.target as HTMLImageElement).style.opacity = '0.3')}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blush-deep/80 to-transparent" />
              <div className="absolute bottom-0 p-6 text-cream">
                <span className="eyebrow text-cream/80">Birthday</span>
                <h3 className="mt-1 font-display text-2xl">Milestone Soirée</h3>
              </div>
            </motion.div>

            {/* quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col justify-between rounded-3xl bg-emerald p-7 text-cream shadow-luxe"
            >
              <Quote className="h-8 w-8 text-blush" />
              <p className="mt-3 font-serif-soft text-lg italic leading-relaxed">
                &ldquo;They didn&apos;t just decorate a room — they composed a feeling
                our guests still talk about months later.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blush/30 flex items-center justify-center font-display text-lg">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold">Aisha &amp; Ravi</div>
                  <div className="text-[0.7rem] text-cream/60">Wedding, 2024</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
