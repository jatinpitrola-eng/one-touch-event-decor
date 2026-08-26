"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

export default function Pricing() {
  const { content } = useContent();
  const c = content;

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">09</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
            <span className="text-xs tracking-luxe font-medium">{c.pricingEyebrow}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight">
            {c.pricingTitle1}{" "}
            <span className="font-script italic text-[#B87333]">{c.pricingTitle2}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed">
            {c.pricingSub}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {c.packages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative rounded-[1.5rem] p-8 shadow-lg hover-lift ${p.highlight ? "bg-[#0B3D2E] text-[#F7F1E8] lg:-translate-y-4" : "bg-[#FCFAF3] text-[#0B3D2E] border border-[#E5D9C0]"}`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#B87333] text-[#F7F1E8] text-[10px] tracking-luxe px-4 py-1.5 rounded-full shadow-md">
                  <Crown className="w-3 h-3" />
                  MOST LOVED
                </span>
              )}
              <h3 className="font-display text-2xl md:text-3xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-[#E8B4B8]" : "text-[#6B5D4A]"}`}>{p.tagline}</p>
              <div className="mt-6 flex items-end gap-2">
                {p.price !== "Custom" && (
                  <span className={`font-display text-xl ${p.highlight ? "text-[#E8B4B8]" : "text-[#6B5D4A]"}`}>₹</span>
                )}
                <span className="font-display text-4xl md:text-5xl font-bold">{p.price}</span>
              </div>
              <p className={`text-xs tracking-luxe mt-1 ${p.highlight ? "text-[#E8B4B8]" : "text-[#B87333]"} uppercase`}>{p.period}</p>
              <div className={`my-6 h-px ${p.highlight ? "bg-[#E8B4B8]/20" : "bg-[#E5D9C0]"}`} />
              <ul className="space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${p.highlight ? "bg-[#B87333] text-[#F7F1E8]" : "bg-[#0B3D2E]/10 text-[#0B3D2E]"}`}>
                      <Check className="w-3 h-3" />
                    </span>
                    <span className={p.highlight ? "text-[#F7F1E8]/90" : "text-[#0B3D2E]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#booking" className={`mt-8 block text-center px-6 py-3 rounded-full tracking-wide transition-all duration-500 ${p.highlight ? "bg-[#B87333] text-[#F7F1E8] hover:bg-[#F7F1E8] hover:text-[#0B3D2E]" : "bg-[#0B3D2E] text-[#F7F1E8] hover:bg-[#B87333]"}`}>
                {p.price === "Custom" ? "Request a Quote" : "Book This Package"}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 text-center text-sm text-[#6B5D4A]">
          {c.pricingNote}
        </motion.p>
      </div>
    </section>
  );
}
