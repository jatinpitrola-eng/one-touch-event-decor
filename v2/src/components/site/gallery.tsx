'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SectionHeading } from './section-heading';

const GALLERY = [
  { src: '/images/gallery/g1.png', title: 'Emerald Birthday Arch', cat: 'Birthday', size: 'tall' },
  { src: '/images/gallery/g2.png', title: 'Sweetheart Table', cat: 'Wedding', size: 'square' },
  { src: '/images/gallery/g3.png', title: 'Copper Gala Column', cat: 'Corporate', size: 'tall' },
  { src: '/images/gallery/g4.png', title: 'Blush Baby Shower', cat: 'Baby Shower', size: 'square' },
  { src: '/images/gallery/g5.png', title: 'Emerald Brand Wall', cat: 'Corporate', size: 'tall' },
  { src: '/images/gallery/g6.png', title: 'Engagement Garland', cat: 'Wedding', size: 'square' },
  { src: '/images/gallery/g7.png', title: 'Anniversary Arch', cat: 'Family', size: 'tall' },
  { src: '/images/gallery/g8.png', title: 'Gender Reveal', cat: 'Baby Shower', size: 'square' },
  { src: '/images/gallery/g9.png', title: 'Grand Entrance', cat: 'Wedding', size: 'tall' },
  { src: '/images/gallery/g10.png', title: 'Intimate Dinner', cat: 'Birthday', size: 'square' },
  { src: '/images/gallery/g11.png', title: 'Festive Holiday', cat: 'Family', size: 'tall' },
  { src: '/images/gallery/g12.png', title: 'Bridal Shower', cat: 'Wedding', size: 'square' },
];

const CATS = ['All', 'Wedding', 'Birthday', 'Family', 'Baby Shower', 'Corporate'];

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B3D2E"/><stop offset="1" stop-color="#2E5D43"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="300" cy="300" r="90" fill="#D4A5A5" opacity="0.4"/><text x="50%" y="52%" fill="#F7F1E8" font-family="serif" font-size="26" text-anchor="middle">Velvet Bloom</text></svg>'
  );

export default function Gallery() {
  const [active, setActive] = useState<string>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === 'All'
      ? GALLERY
      : GALLERY.filter((g) => g.cat === active);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((p) => (p === null ? p : (p + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, close, next, prev]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, var(--cream) 0%, oklch(0.93 0.02 95) 40%, var(--cream) 100%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Gallery"
          title="Real moments,"
          highlight="really styled"
          description="A curated look at installations we have composed across weddings, birthdays, family functions and corporate events."
        />

        {/* filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? 'bg-emerald text-cream shadow-glow-emerald'
                  : 'bg-card text-charcoal/70 border border-emerald/10 hover:border-copper/40 hover:text-emerald'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* masonry */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((g, i) => (
            <motion.button
              key={g.title + i}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-luxe focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
            >
              <div className={g.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}>
                { }
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow text-blush">{g.cat}</span>
                <h3 className="mt-1 font-display text-xl text-cream">{g.title}</h3>
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/20 text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-emerald-deep/90 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-3 sm:left-8 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              { }
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-luxe"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK;
                }}
              />
              <figcaption className="mt-4 text-center">
                <span className="eyebrow text-blush">{filtered[lightbox].cat}</span>
                <h3 className="mt-1 font-display text-2xl text-cream">
                  {filtered[lightbox].title}
                </h3>
              </figcaption>
            </motion.figure>
            <button
              className="absolute right-3 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
