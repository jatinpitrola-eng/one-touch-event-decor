"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContent } from "@/components/admin/ContentProvider";
import MagneticButton from "./MagneticButton";
import FloatingPetals from "./FloatingPetals";

export default function FinalCTA() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-36 bg-luxe-emerald text-[#F7F1E8] overflow-hidden grain-overlay">
      <FloatingPetals count={10} />

      <div className="absolute inset-0">
        <Image src={c.finalCtaBgImage} alt="Luxury balloon installation background" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07261d] via-[#0B3D2E]/85 to-[#07261d]" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#B87333]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E8B4B8]/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#B87333]" />
          <span className="text-xs tracking-luxe text-[#B87333] font-medium">{c.finalCtaEyebrow}</span>
          <span className="block w-10 h-px bg-[#B87333]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
          {c.finalCtaTitle1}<br />
          <span className="font-script italic text-[#B87333]">{c.finalCtaTitle2}</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-7 text-base md:text-lg text-[#F7F1E8]/80 leading-relaxed max-w-2xl mx-auto">{c.finalCtaSub}</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton strength={0.4}>
            <a href="#booking" className="group inline-flex items-center gap-2 px-10 py-4 bg-[#B87333] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#F7F1E8] hover:text-[#0B3D2E] transition-all duration-500 shadow-xl">
              {c.finalCtaButton1}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-[#F7F1E8] tracking-wide rounded-full border border-[#F7F1E8]/30 hover:border-[#B87333] hover:text-[#B87333] transition-all duration-500">
              {c.finalCtaButton2}
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
