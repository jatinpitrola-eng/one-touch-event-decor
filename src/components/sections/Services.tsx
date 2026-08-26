"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart, Cake, Baby, Building, Gift, Sparkles, ArrowUpRight,
  Users, PartyPopper, Phone, PencilRuler, Package,
  Leaf, ShieldCheck, Truck, Palette, HeartHandshake, Camera, Clock,
} from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";
import Tilt3D from "./Tilt3D";

const ICON_MAP: Record<string, any> = {
  Heart, Cake, Baby, Building, Gift, Sparkles,
  Users, PartyPopper, Phone, PencilRuler, Package,
  Leaf, ShieldCheck, Truck, Palette, HeartHandshake, Camera, Clock,
};

export default function Services() {
  const { content } = useContent();
  const c = content;

  return (
    <section id="services" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">02</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
            <span className="text-xs tracking-luxe font-medium">{c.servicesEyebrow}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight">
            {c.servicesTitle1}{" "}
            <span className="font-script italic text-[#B87333]">{c.servicesTitle2}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed">
            {c.servicesSub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
          {c.services.map((s, i) => {
            const Icon = ICON_MAP[s.icon] || Sparkles;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`group relative rounded-[1.5rem] overflow-hidden shadow-lg hover-lift ${s.span}`}
                style={{ perspective: 1000 }}
              >
                <Tilt3D maxTilt={6} className="h-full">
                  <article className="relative h-full w-full">
                    <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/95 via-[#0B3D2E]/40 to-transparent" />
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-[#F7F1E8]/15 backdrop-blur-md border border-[#F7F1E8]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F7F1E8]" />
                    </div>
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#B87333] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-[#F7F1E8]" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F7F1E8]">
                      <p className="text-[10px] tracking-luxe text-[#E8B4B8] mb-1">{s.tagline}</p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-[#F7F1E8]/85 leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        {s.desc}
                      </p>
                    </div>
                  </article>
                </Tilt3D>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-12 text-center">
          <p className="text-[#6B5D4A] mb-4">{c.servicesCtaText}</p>
          <a href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B3D2E] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#B87333] transition-all duration-500 shadow-lg">
            {c.servicesCtaButton}
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
