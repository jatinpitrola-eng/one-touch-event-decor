"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { GALLERY } from "@/lib/images";

const CATEGORIES = ["All", "Weddings", "Birthdays", "Baby Showers", "Corporate", "Family", "Anniversary"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<string | null>(null);

  const items =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">07</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxe-divider mb-5"
          >
            <span className="text-xs tracking-luxe font-medium">THE GALLERY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A1A28] leading-tight"
          >
            Moments We&apos;ve{" "}
            <span className="font-script italic text-[#E07856]">Styled</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
          >
            A curated peek into real events styled for real clients. Filter by
            category or browse the full collection.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 text-sm tracking-wide rounded-full transition-all duration-300 ${
                filter === c
                  ? "bg-[#4A1A28] text-[#FAF3E8] shadow-md"
                  : "bg-transparent text-[#4A1A28] border border-[#4A1A28]/20 hover:border-[#E07856] hover:text-[#E07856]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.url}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setActive(item.url)}
                className="group relative w-full mb-4 md:mb-6 break-inside-avoid rounded-[1.25rem] overflow-hidden shadow-md hover-lift block"
              >
                <div className="relative aspect-[3/4] sm:aspect-square">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A28]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="text-[10px] tracking-luxe text-[#E8DDC8] mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#FAF3E8]">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FAF3E8]/20 backdrop-blur-md border border-[#FAF3E8]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#FAF3E8] text-lg leading-none">+</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-[#2A0E18]/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FAF3E8]/10 border border-[#FAF3E8]/30 flex items-center justify-center text-[#FAF3E8] hover:bg-[#E07856] hover:border-[#E07856] transition-colors"
              onClick={() => setActive(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active}
                alt="Gallery detail"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#2A0E18] to-transparent">
                {(() => {
                  const it = GALLERY.find((g) => g.url === active);
                  return it ? (
                    <>
                      <p className="text-[10px] tracking-luxe text-[#E8DDC8] mb-1">
                        {it.category.toUpperCase()}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-[#FAF3E8]">
                        {it.title}
                      </h3>
                    </>
                  ) : null;
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
