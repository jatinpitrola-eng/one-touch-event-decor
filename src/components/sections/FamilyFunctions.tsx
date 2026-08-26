"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Sparkles, PartyPopper, Heart } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

const ICON_MAP: Record<string, any> = { Users, Sparkles, PartyPopper, Heart };

export default function FamilyFunctions() {
  const { content } = useContent();
  const c = content;

  return (
    <section id="family" className="relative py-24 md:py-32 bg-luxe-emerald text-[#F7F1E8] overflow-hidden grain-overlay">
      <span className="section-num absolute -top-8 right-4 !text-[#F7F1E8]/10">03</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 mb-5">
              <span className="block w-10 h-px bg-[#E8B4B8]" />
              <span className="text-xs tracking-luxe text-[#E8B4B8] font-medium">{c.familyEyebrow}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              {c.familyTitle1}<br />
              <span className="font-script italic text-[#E8B4B8]">{c.familyTitle2}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-base md:text-lg text-[#F7F1E8]/85 leading-relaxed max-w-xl">{c.familyP}</motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 grid sm:grid-cols-2 gap-6">
              {c.familyMoments.map((m, i) => {
                const Icon = ICON_MAP[m.icon] || Users;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 * i }} className="group">
                    <div className="w-11 h-11 rounded-full bg-[#E8B4B8]/15 border border-[#E8B4B8]/40 flex items-center justify-center mb-3 group-hover:bg-[#B87333] group-hover:border-[#B87333] transition-all">
                      <Icon className="w-5 h-5 text-[#E8B4B8] group-hover:text-[#F7F1E8] transition-colors" />
                    </div>
                    <h4 className="font-display text-lg font-semibold">{m.title}</h4>
                    <p className="mt-2 text-sm text-[#F7F1E8]/75 leading-relaxed">{m.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10">
              <a href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-[#B87333] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#F7F1E8] hover:text-[#0B3D2E] transition-all duration-500 shadow-lg">
                {c.familyCtaButton}
                <span>→</span>
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative h-[480px] sm:h-[560px] md:h-[640px]">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} className="absolute top-0 right-0 w-[75%] h-[68%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#0B3D2E] zoom-img">
              <Image src={c.familyImage1} alt="Family function decoration" fill className="object-cover" sizes="(max-width: 1024px) 75vw, 38vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.25 }} className="absolute bottom-0 left-0 w-[55%] h-[48%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#0B3D2E] zoom-img">
              <Image src={c.familyImage2} alt="Traditional festive decor" fill className="object-cover" sizes="(max-width: 1024px) 55vw, 28vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, type: "spring" }} className="absolute top-[36%] -left-2 md:-left-6 glass-card-dark rounded-2xl px-5 py-4 shadow-xl max-w-[200px]">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E8B4B8] text-sm">★</span>
                ))}
              </div>
              <p className="text-xs text-[#F7F1E8]/90 leading-relaxed">&ldquo;{c.familyTestimonialText}&rdquo;</p>
              <p className="mt-2 text-[10px] tracking-luxe text-[#E8B4B8]">— {c.familyTestimonialName}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
