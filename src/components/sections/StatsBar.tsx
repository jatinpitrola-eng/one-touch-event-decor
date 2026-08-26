"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/admin/ContentProvider";

export default function StatsBar() {
  const { content } = useContent();
  return (
    <section className="relative py-16 md:py-20 bg-[#0B3D2E] text-[#F7F1E8] overflow-hidden grain-overlay">
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {content.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.12 }} className="text-center">
              <p className="font-display font-bold text-4xl md:text-6xl text-[#F7F1E8]">
                {s.value}{s.suffix}
              </p>
              <p className="mt-2 text-xs md:text-sm tracking-wide-luxe text-[#E8B4B8] uppercase">{s.label}</p>
              <div className="mt-4 mx-auto w-12 h-px bg-[#B87333]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
