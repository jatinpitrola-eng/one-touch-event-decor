"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContent } from "@/components/admin/ContentProvider";
import Tilt3D from "./Tilt3D";

export default function BehindStudio() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">06</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-end mb-14">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
              <span className="text-xs tracking-luxe font-medium">{c.studioEyebrow}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-[1.05]">
              {c.studioTitle1}<br />
              <span className="font-script italic text-[#B87333]">{c.studioTitle2}</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-base text-[#6B5D4A] leading-relaxed">{c.studioSub}</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {c.studioTeam.map((member, i) => (
            <motion.div key={member.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.12 }}>
              <Tilt3D maxTilt={8} className="h-full">
                <article className="group relative h-full rounded-[1.5rem] overflow-hidden shadow-lg bg-[#FCFAF3] border border-[#E5D9C0] hover-lift">
                  <div className="relative aspect-[4/5] overflow-hidden zoom-img">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/85 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#F7F1E8]/90 backdrop-blur text-[10px] tracking-luxe text-[#0B3D2E] font-medium">{member.role.toUpperCase()}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-[#F7F1E8]">
                      <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-sm text-[#6B5D4A] leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {c.studioStats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="border-t border-[#0B3D2E]/15 pt-4">
              <p className="font-display text-3xl md:text-4xl font-bold text-[#0B3D2E]">{s.num}</p>
              <p className="mt-1 text-xs tracking-luxe text-[#B87333] uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
