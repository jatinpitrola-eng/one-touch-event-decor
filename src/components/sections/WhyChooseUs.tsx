"use client";

import { motion } from "framer-motion";
import {
  Clock, Truck, ShieldCheck, Palette, Leaf, HeartHandshake,
  Camera, Sparkles, Users, PartyPopper, Heart, Award,
} from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

const ICON_MAP: Record<string, any> = {
  Clock, Truck, ShieldCheck, Palette, Leaf, HeartHandshake,
  Camera, Sparkles, Users, PartyPopper, Heart, Award,
};

export default function WhyChooseUs() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-emerald text-[#F7F1E8] overflow-hidden grain-overlay">
      <span className="section-num absolute -top-8 left-4 !text-[#F7F1E8]/10">10</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 mb-5">
            <span className="block w-10 h-px bg-[#E8B4B8]" />
            <span className="text-xs tracking-luxe font-medium text-[#E8B4B8]">{c.whyEyebrow}</span>
            <span className="block w-10 h-px bg-[#E8B4B8]" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {c.whyTitle1}<br />
            <span className="font-script italic text-[#E8B4B8]">{c.whyTitle2}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {c.whyFeatures.map((f, i) => {
            const Icon = ICON_MAP[f.icon] || Sparkles;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.08 }} className="group glass-card-dark rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-full bg-[#B87333]/20 border border-[#B87333]/40 flex items-center justify-center mb-4 group-hover:bg-[#B87333] transition-all">
                  <Icon className="w-5 h-5 text-[#E8B4B8] group-hover:text-[#F7F1E8] transition-colors" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-[#F7F1E8]/75 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 text-center">
          <p className="font-script text-2xl md:text-3xl text-[#E8B4B8]">{c.whyBottomText}</p>
          <p className="mt-2 text-sm text-[#F7F1E8]/70">{c.whyBottomSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
