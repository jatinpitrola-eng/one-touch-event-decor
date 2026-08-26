"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Leaf, Award, Check } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

const ICON_MAP: Record<string, any> = { Sparkles, Leaf, Award, Check };

export default function About() {
  const { content } = useContent();
  const c = content;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">01</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative h-[480px] sm:h-[560px] md:h-[620px]">
            <div className="absolute top-0 left-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl zoom-img">
              <Image src={c.aboutImage1} alt="Elegant balloon decoration" fill className="object-cover" sizes="(max-width: 1024px) 65vw, 30vw" />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#F7F1E8] zoom-img">
              <Image src={c.aboutImage2} alt="Family function decor" fill className="object-cover" sizes="(max-width: 1024px) 60vw, 28vw" />
            </div>
            <div className="absolute top-1/2 right-2 md:right-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#B87333] flex flex-col items-center justify-center text-[#F7F1E8] shadow-xl">
              <span className="font-script text-2xl md:text-3xl leading-none">Since</span>
              <span className="font-display text-3xl md:text-4xl font-bold leading-none">{c.aboutSince}</span>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
              <span className="text-xs tracking-luxe font-medium">{c.aboutEyebrow}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-[1.05]">
              {c.aboutTitle1}<br />
              <span className="font-script text-[#B87333] italic">{c.aboutTitle2}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-base md:text-lg text-[#6B5D4A] leading-relaxed">{c.aboutP1}</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-4 text-base md:text-lg text-[#6B5D4A] leading-relaxed">{c.aboutP2}</motion.p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {c.aboutPillars.map((p, i) => {
                const Icon = ICON_MAP[p.icon] || Sparkles;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }} className="group">
                    <div className="w-12 h-12 rounded-full bg-[#0B3D2E]/8 flex items-center justify-center mb-3 group-hover:bg-[#B87333] transition-colors">
                      <Icon className="w-5 h-5 text-[#0B3D2E] group-hover:text-[#F7F1E8] transition-colors" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-[#0B3D2E]">{p.title}</h4>
                    <p className="mt-2 text-sm text-[#6B5D4A] leading-relaxed">{p.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
