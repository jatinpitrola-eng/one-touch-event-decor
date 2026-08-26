'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OliveSprig } from './background';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a2a20 0%, #0B3D2E 45%, #07261d 100%)' }}
    >
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'oklch(0.82 0.06 18 / 0.18)' }}
      />
      <div
        className="pointer-events-none absolute right-[-15%] bottom-0 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'oklch(0.62 0.13 55 / 0.18)' }}
      />
      {/* aurora — slow rotating conic glow for authentic atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="aurora" />
      </div>
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* floating decorative balloons (parallax with mouse) */}
      {[
        { color: '#D4A5A5', left: '6%', top: '20%', size: 60, depth: 22 },
        { color: '#E8B4B8', left: '12%', top: '60%', size: 44, depth: 38 },
        { color: '#B87333', left: '88%', top: '18%', size: 70, depth: 18 },
        { color: '#C68A4E', left: '92%', top: '64%', size: 50, depth: 30 },
        { color: '#E8B4B8', left: '70%', top: '12%', size: 36, depth: 44 },
        { color: '#2E5D43', left: '40%', top: '8%', size: 30, depth: 52 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: b.left,
            top: b.top,
            x: mouse.x * b.depth,
            y: mouse.y * b.depth,
          }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 64 84" fill="none">
            <ellipse cx="32" cy="32" rx="26" ry="30" fill={b.color} opacity={0.85} />
            <ellipse cx="24" cy="22" rx="6" ry="9" fill="white" opacity="0.3" />
            <path d="M32 62 L29 70 L35 70 L32 62 Z" fill={b.color} />
            <path d="M32 70 C 28 74, 36 78, 32 82" stroke={b.color} strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </motion.div>
      ))}

      {/* olive sprig decorations */}
      <OliveSprig
        className="pointer-events-none absolute -left-6 bottom-0 h-72 w-44 text-sage/40 animate-leaf-sway"
      />
      <OliveSprig
        className="pointer-events-none absolute right-0 top-24 h-64 w-40 text-sage/30"
        flip
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-32 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-36">
        {/* left text */}
        <motion.div
          style={{ y: yText, opacity }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-blush/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-copper text-copper" />
              ))}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-blush/90">
              Trusted by 500+ celebrations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
            className="mt-6 font-display text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            Where moments
            <br />
            become{' '}
            <span className="relative inline-block">
              <span className="text-gradient-blush italic">masterpieces</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8 C 80 2, 220 2, 298 8"
                  stroke="var(--copper)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 1 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg lg:mx-0"
          >
            Bespoke balloon installations & botanical luxury styling for weddings,
            birthdays, family gatherings & corporate moments. Hand-crafted, one
            celebration at a time — that&apos;s the{' '}
            <span className="font-script text-xl text-blush">Velvet Bloom</span> difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="btn-shine group w-full rounded-full bg-blush px-8 py-6 text-emerald-deep hover:bg-blush-deep sm:w-auto">
                <Sparkles className="mr-2 h-4 w-4" />
                Book Your Event
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#gallery" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="group w-full rounded-full border-cream/30 bg-white/5 px-8 py-6 text-cream backdrop-blur-sm hover:bg-white/10 sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 fill-cream" />
                Explore Gallery
              </Button>
            </a>
          </motion.div>

          {/* mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { n: '500+', l: 'Events styled' },
              { n: '8 yrs', l: 'Of craft' },
              { n: '100%', l: 'Bespoke design' },
            ].map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-display text-2xl text-cream sm:text-3xl">{s.n}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-cream/55">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* right hero image */}
        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:aspect-[3/4]">
            {/* frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-blush/20" />
            <div className="absolute -inset-6 rounded-[2.4rem] border border-copper/15" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] shadow-luxe">
              { }
              <img
                src="/images/sections/hero-arch.png"
                alt="Luxury balloon arch installation by Velvet Bloom"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-transparent to-transparent" />
            </div>
            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream p-4 shadow-luxe sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-cream">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg text-charcoal">Bespoke</div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Every detail, hand-crafted
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-8 hidden rounded-2xl bg-copper p-3 shadow-luxe sm:block"
            >
              <div className="font-script text-2xl leading-none text-cream">since</div>
              <div className="font-display text-2xl text-cream">2017</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/50">
          Scroll
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-blush"
          />
        </div>
      </motion.div>

      {/* bottom fade to cream */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream" />
    </section>
  );
}
