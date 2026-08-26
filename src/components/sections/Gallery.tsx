"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";
import type { GalleryItem } from "@/lib/content";

const CATEGORIES = ["All", "Weddings", "Birthdays", "Baby Showers", "Corporate", "Family", "Anniversary"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Gallery() {
  const { content } = useContent();
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<string | null>(null);

  const items: GalleryItem[] =
    filter === "All" ? content.gallery : content.gallery.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">07</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
            <span className="text-xs tracking-luxe font-medium">{content.galleryEyebrow}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight">
            {content.galleryTitle1}{" "}
            <span className="font-script italic text-[#B87333]">{content.galleryTitle2}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed">
            {content.gallerySub}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2 text-sm tracking-wide rounded-full transition-all duration-300 ${filter === c ? "bg-[#0B3D2E] text-[#F7F1E8] shadow-md" : "bg-transparent text-[#0B3D2E] border border-[#0B3D2E]/20 hover:border-[#B87333] hover:text-[#B87333]"}`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setActive(item.url)}
                className="group relative w-full mb-4 md:mb-6 break-inside-avoid rounded-[1.25rem] overflow-hidden shadow-md hover-lift block"
              >
                <div className="relative aspect-[3/4] sm:aspect-square">
                  <Image src={item.url} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="text-[10px] tracking-luxe text-[#E8B4B8] mb-1">{item.category.toUpperCase()}</span>
                  <h3 className="font-display text-xl font-bold text-[#F7F1E8]">{item.title}</h3>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#F7F1E8]/20 backdrop-blur-md border border-[#F7F1E8]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#F7F1E8] text-lg leading-none">+</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-[80] bg-[#07261d]/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button aria-label="Close" className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#F7F1E8]/10 border border-[#F7F1E8]/30 flex items-center justify-center text-[#F7F1E8] hover:bg-[#B87333] hover:border-[#B87333] transition-colors" onClick={() => setActive(null)}>
              <X className="w-5 h-5" />
            </button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <Image src={active} alt="Gallery detail" fill className="object-cover" sizes="100vw" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#07261d] to-transparent">
                {(() => {
                  const it = content.gallery.find((g) => g.url === active);
                  return it ? (
                    <>
                      <p className="text-[10px] tracking-luxe text-[#E8B4B8] mb-1">{it.category.toUpperCase()}</p>
                      <h3 className="font-display text-2xl font-bold text-[#F7F1E8]">{it.title}</h3>
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
