"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

export default function Testimonials() {
  const { content } = useContent();
  const c = content;
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % c.testimonials.length);
  const prev = () => setIdx((p) => (p - 1 + c.testimonials.length) % c.testimonials.length);
  const r = c.testimonials[idx] || c.testimonials[0];

  if (!r) return null;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-blush overflow-hidden">
      <span className="section-num absolute -top-8 left-4">08</span>

      <Quote className="absolute top-10 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 text-[#0B3D2E]/8" strokeWidth={1} />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 mb-5">
          <span className="block w-10 h-px bg-[#0B3D2E]" />
          <span className="text-xs tracking-luxe font-medium text-[#0B3D2E]">{c.testimonialsEyebrow}</span>
          <span className="block w-10 h-px bg-[#0B3D2E]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight mb-12">
          {c.testimonialsTitle1}
          <br />
          <span className="font-script italic text-[#B87333]">{c.testimonialsTitle2}</span>
        </motion.h2>

        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5, ease: "easeOut" }} className="glass-card rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B87333] text-[#B87333]" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-[#0B3D2E] leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-display text-lg font-bold text-[#0B3D2E]">{r.name}</p>
                <p className="text-xs tracking-wide-luxe text-[#B87333] mt-1 uppercase">{r.event}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button aria-label="Previous review" onClick={prev} className="w-12 h-12 rounded-full bg-[#0B3D2E] text-[#F7F1E8] flex items-center justify-center hover:bg-[#B87333] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {c.testimonials.map((_, i) => (
              <button key={i} aria-label={`Review ${i + 1}`} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-[#0B3D2E]" : "w-2 bg-[#0B3D2E]/30"}`} />
            ))}
          </div>
          <button aria-label="Next review" onClick={next} className="w-12 h-12 rounded-full bg-[#0B3D2E] text-[#F7F1E8] flex items-center justify-center hover:bg-[#B87333] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
