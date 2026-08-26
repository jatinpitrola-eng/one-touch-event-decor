"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

const CATEGORIES = ["All", "Weddings", "Birthdays", "Baby Showers", "Corporate", "Family", "Anniversary"] as const;
type Category = (typeof CATEGORIES)[number];

export default function FullGalleryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { content } = useContent();
  const [filter, setFilter] = useState<Category>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!open) return null;

  const items =
    filter === "All"
      ? content.gallery
      : content.gallery.filter((g) => g.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const nextImg = () =>
    setLightboxIdx((prev) =>
      prev === null ? null : (prev + 1) % items.length
    );
  const prevImg = () =>
    setLightboxIdx((prev) =>
      prev === null ? null : (prev - 1 + items.length) % items.length
    );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-[#07261d]/95 backdrop-blur-xl overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#07261d]/90 backdrop-blur-md border-b border-[#2E5D43] px-4 md:px-8 py-4 flex items-center justify-between">
          <div>
            <p className="font-script text-xl text-[#E8B4B8]">One Touch</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F7F1E8]">
              Full Gallery
            </h2>
          </div>
          <button
            aria-label="Close gallery"
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#F7F1E8]/10 border border-[#F7F1E8]/30 flex items-center justify-center text-[#F7F1E8] hover:bg-[#B87333] hover:border-[#B87333] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter tabs */}
        <div className="sticky top-[88px] z-[5] bg-[#07261d]/80 backdrop-blur-md py-4 px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm tracking-wide rounded-full transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#B87333] text-[#F7F1E8] shadow-md"
                    : "bg-transparent text-[#F7F1E8]/70 border border-[#F7F1E8]/20 hover:border-[#B87333] hover:text-[#B87333]"
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-60">
                  ({cat === "All"
                    ? content.gallery.length
                    : content.gallery.filter((g) => g.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <Grid3x3 className="w-16 h-16 text-[#F7F1E8]/20 mx-auto mb-4" />
              <p className="text-[#F7F1E8]/50">No images in this category yet.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => (
                  <motion.button
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    onClick={() => openLightbox(i)}
                    className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover-lift"
                  >
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07261d]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <span className="text-[9px] tracking-luxe text-[#E8B4B8] mb-0.5">
                        {item.category.toUpperCase()}
                      </span>
                      <p className="font-display text-sm font-bold text-[#F7F1E8] leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIdx !== null && items[lightboxIdx] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#07261d]/98 backdrop-blur-2xl flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                aria-label="Close"
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#F7F1E8]/10 border border-[#F7F1E8]/30 flex items-center justify-center text-[#F7F1E8] hover:bg-[#B87333] hover:border-[#B87333] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev */}
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F7F1E8]/10 border border-[#F7F1E8]/30 flex items-center justify-center text-[#F7F1E8] hover:bg-[#B87333] hover:border-[#B87333] transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next */}
              <button
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F7F1E8]/10 border border-[#F7F1E8]/30 flex items-center justify-center text-[#F7F1E8] hover:bg-[#B87333] hover:border-[#B87333] transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIdx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={items[lightboxIdx].url}
                  alt={items[lightboxIdx].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#07261d] to-transparent">
                  <p className="text-[10px] tracking-luxe text-[#E8B4B8] mb-1">
                    {items[lightboxIdx].category.toUpperCase()}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[#F7F1E8]">
                    {items[lightboxIdx].title}
                  </h3>
                  <p className="text-xs text-[#F7F1E8]/60 mt-1">
                    {lightboxIdx + 1} of {items.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
