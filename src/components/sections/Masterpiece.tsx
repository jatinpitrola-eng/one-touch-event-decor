"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

export default function Masterpiece() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-[#07261d] text-[#F7F1E8] overflow-hidden grain-overlay">
      <span className="section-num absolute -top-8 right-4 !text-[#F7F1E8]/10">05</span>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#B87333]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E8B4B8]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 mb-5">
            <span className="block w-10 h-px bg-[#B87333]" />
            <span className="text-xs tracking-luxe text-[#B87333] font-medium">{c.masterpieceEyebrow}</span>
            <span className="block w-10 h-px bg-[#B87333]" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {c.masterpieceTitle1}<br />
            <span className="font-script italic text-[#E8B4B8]">{c.masterpieceTitle2}</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-[2rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl">
          <Image src={c.masterpieceImage} alt="Masterpiece luxury balloon installation" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07261d]/85 via-[#07261d]/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md">
            <Quote className="w-8 h-8 text-[#B87333] mb-3" />
            <p className="font-display text-xl md:text-2xl font-medium leading-relaxed text-[#F7F1E8]">{c.masterpieceQuote}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-px bg-[#B87333]" />
              <span className="text-xs tracking-luxe text-[#E8B4B8]">{c.masterpieceMeta}</span>
            </div>
          </div>

          <div className="absolute top-6 right-6 text-right">
            <p className="text-[10px] tracking-luxe text-[#E8B4B8]">{c.masterpieceMaterials}</p>
            <p className="font-display text-lg mt-1">{c.masterpieceMaterialsValue}</p>
            <p className="text-[10px] tracking-luxe text-[#E8B4B8] mt-3">{c.masterpieceShades}</p>
            <p className="font-display text-lg mt-1">{c.masterpieceShadesValue}</p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {c.masterpieceSpecs.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="border-t border-[#E8B4B8]/20 pt-4">
              <p className="font-display text-3xl md:text-4xl font-bold text-[#E8B4B8]">{s.num}</p>
              <p className="mt-1 text-xs tracking-luxe text-[#F7F1E8]/70 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
