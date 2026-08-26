'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Occasions', href: '#occasions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

function MiniLogo({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 130"
      className="h-10 w-16 sm:h-12 sm:w-20"
      fill="none"
      style={{ color: dark ? 'var(--emerald-deep)' : 'var(--cream)' }}
    >
      {/* wreath */}
      <path
        d="M100 30 C 60 30, 38 55, 38 80 C 38 105, 60 120, 100 120 C 140 120, 162 105, 162 80 C 162 55, 140 30, 100 30 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* wreath leaves */}
      {[0, 1, 2].map((i) => (
        <ellipse
          key={`wl${i}`}
          cx={44 - i * 0.5}
          cy={70 + i * 14}
          rx="4.5"
          ry="2.2"
          transform={`rotate(${-50 + i * 8} ${44 - i * 0.5} ${70 + i * 14})`}
          fill="currentColor"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <ellipse
          key={`wr${i}`}
          cx={156 + i * 0.5}
          cy={70 + i * 14}
          rx="4.5"
          ry="2.2"
          transform={`rotate(${50 - i * 8} ${156 + i * 0.5} ${70 + i * 14})`}
          fill="currentColor"
        />
      ))}
      {/* bloom flower at top */}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse
          key={`petal${i}`}
          cx="100"
          cy="22"
          rx="4.5"
          ry="7"
          transform={`rotate(${i * 72} 100 30)`}
          fill="currentColor"
          opacity="0.9"
        />
      ))}
      <circle cx="100" cy="30" r="3.2" fill="currentColor" opacity="0.6" />
      <text
        x="100"
        y="85"
        textAnchor="middle"
        fontFamily="var(--font-great-vibes), cursive"
        fontSize="30"
        fill="currentColor"
      >
        Velvet Bloom
      </text>
      <text
        x="100"
        y="103"
        textAnchor="middle"
        fontFamily="var(--font-manrope), sans-serif"
        fontSize="7"
        letterSpacing="3"
        fill="currentColor"
        opacity="0.7"
      >
        EVENT DÉCOR
      </text>
      <line x1="84" y1="114" x2="94" y2="114" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="114" r="1.4" fill="currentColor" />
      <line x1="106" y1="114" x2="116" y2="114" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-[120] transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl shadow-luxe border-b border-emerald/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Velvet Bloom home">
            <MiniLogo dark={scrolled} />
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors ${
                    scrolled ? 'text-charcoal hover:text-emerald' : 'text-cream/90 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact">
              <Button
                className="btn-shine rounded-full border border-copper/40 bg-emerald px-6 py-2 text-cream hover:bg-emerald-deep"
                size="sm"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Book Your Event
              </Button>
            </a>
          </div>

          {/* mobile toggle */}
          <button
            className={`lg:hidden ${scrolled ? 'text-charcoal' : 'text-cream'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </motion.header>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[130] lg:hidden">
          <div
            className="absolute inset-0 bg-emerald-deep/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-cream p-6 shadow-luxe"
          >
            <div className="flex items-center justify-between">
              <MiniLogo dark />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-charcoal">
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="mt-8 flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-emerald/10 py-3 font-display text-xl text-charcoal hover:text-emerald"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-6">
              <Button className="btn-shine w-full rounded-full bg-emerald text-cream hover:bg-emerald-deep">
                <Sparkles className="mr-2 h-4 w-4" />
                Book Your Event
              </Button>
            </a>
            <p className="mt-auto font-serif-soft text-sm italic text-muted-foreground">
              Crafting unforgettable moments, one bloom at a time.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}
