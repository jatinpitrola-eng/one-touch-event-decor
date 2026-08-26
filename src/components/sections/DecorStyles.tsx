"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContent } from "@/components/admin/ContentProvider";

export default function DecorStyles() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">04</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-end mb-14">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
              <span className="text-xs tracking-luxe font-medium">{c.decorEyebrow}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-[1.05]">
              {c.decorTitle1}<br />
              <span className="font-script italic text-[#B87333]">{c.decorTitle2}</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-base text-[#6B5D4A] leading-relaxed">
            {c.decorSub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {c.decorStyles.map((s, i) => (
            <motion.article key={s.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.08 }} className="group relative rounded-[1.25rem] overflow-hidden aspect-[4/5] shadow-md hover-lift">
              <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-[1.1s] group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <span className="absolute top-4 right-4 font-display text-5xl font-bold text-[#F7F1E8]/30">0{i + 1}</span>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0B3D2E]/95 via-[#0B3D2E]/60 to-transparent">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#F7F1E8]">{s.name}</h3>
                <p className="mt-1 text-sm text-[#F7F1E8]/80 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute left-5 right-5 bottom-3 h-px bg-[#B87333] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
