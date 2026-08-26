"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/admin/ContentProvider";

export default function PressLogos() {
  const { content } = useContent();
  return (
    <section className="relative py-12 md:py-16 bg-[#FCFAF3] border-y border-[#E5D9C0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-xs tracking-luxe text-[#B87333] font-medium mb-8">
          {content.pressTitle}
        </motion.p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FCFAF3] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FCFAF3] to-transparent z-10 pointer-events-none" />
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                {content.pressLogos.map((logo, i) => (
                  <div key={`${idx}-${i}`} className="flex items-center mx-8 md:mx-12">
                    <span className="font-display text-lg md:text-2xl font-bold tracking-wide text-[#0B3D2E]/40 hover:text-[#0B3D2E] transition-colors duration-500">{logo}</span>
                    <span className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-[#B87333]/40" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
