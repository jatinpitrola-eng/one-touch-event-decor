"use client";

import { motion } from "framer-motion";
import { Phone, PencilRuler, Package, Sparkles } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

const ICON_MAP: Record<string, any> = { Phone, PencilRuler, Package, Sparkles };

export default function Process() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">06</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
            <span className="text-xs tracking-luxe font-medium">{c.processEyebrow}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight">
            {c.processTitle1}{" "}
            <span className="font-script italic text-[#B87333]">{c.processTitle2}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed">{c.processSub}</motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#0B3D2E]/20 to-transparent" />
          {c.processSteps.map((s, i) => {
            const Icon = ICON_MAP[s.icon] || Sparkles;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.12 }} className="relative text-center">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-full bg-[#0B3D2E] text-[#F7F1E8] flex items-center justify-center shadow-xl relative z-10">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#B87333] text-[#F7F1E8] flex items-center justify-center font-display text-sm font-bold z-10">{s.step}</span>
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-[#0B3D2E]">{s.title}</h3>
                <p className="mt-3 text-sm text-[#6B5D4A] leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
