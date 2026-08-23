"use client";

import { motion } from "framer-motion";
import { Phone, PencilRuler, Package, Sparkles } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    step: "01",
    title: "Consultation",
    desc: "We begin with a 30-minute discovery call to understand your vision, palette, venue, and budget. No deposit, no pressure — just listening.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Design Proposal",
    desc: "Within 48 hours, you receive a custom mood board, layout sketch, and transparent quote. We refine together until every detail sings.",
  },
  {
    icon: Package,
    step: "03",
    title: "Sourcing & Prep",
    desc: "Our team hand-selects every balloon, fabric, and floral element. Pre-builds happen in-studio so on-site time stays minimal.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Setup & Reveal",
    desc: "We arrive early, install quietly, and step back for the big reveal. You walk in and gasp — every single time.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">06</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxe-divider mb-5"
          >
            <span className="text-xs tracking-luxe font-medium">HOW WE WORK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3D34] leading-tight"
          >
            From Hello to{" "}
            <span className="font-script italic text-[#C97B5C]">Reveal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
          >
            Four steps, eight years of refinement. The result is a process so
            smooth, you might just forget we&apos;re there until the moment
            matters most.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#1F3D34]/20 to-transparent" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative inline-flex">
                <div className="w-24 h-24 rounded-full bg-[#1F3D34] text-[#FBF5EC] flex items-center justify-center shadow-xl relative z-10">
                  <s.icon className="w-8 h-8" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#C97B5C] text-[#FBF5EC] flex items-center justify-center font-display text-sm font-bold z-10">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-[#1F3D34]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-[#6B5D4A] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
