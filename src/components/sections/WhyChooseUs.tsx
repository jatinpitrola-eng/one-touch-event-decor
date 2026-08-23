"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Truck,
  ShieldCheck,
  Palette,
  Leaf,
  HeartHandshake,
  Camera,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "On-Time Promise",
    desc: "Setup complete 2 hours before your first guest arrives — guaranteed. We've never been late in 8 years.",
  },
  {
    icon: Truck,
    title: "Free Local Delivery",
    desc: "Complimentary transport & setup within city limits. No surprise logistics fees on the invoice.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "Every balloon is helium-tested and pre-inflated overnight. If anything deflates before your event, we replace it free.",
  },
  {
    icon: Palette,
    title: "Custom Colour Mixing",
    desc: "We hand-blend shades to match your outfit, brand, or wedding palette. No off-the-shelf colour kits.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Materials",
    desc: "Latex balloons biodegrade at the same rate as oak leaves. We recycle all foils and structures after every event.",
  },
  {
    icon: HeartHandshake,
    title: "Discreet, Polite Crew",
    desc: "Our stylists arrive in uniform, work quietly, and clean up after themselves. Many clients forget we were there.",
  },
  {
    icon: Camera,
    title: "Photo-Ready Layouts",
    desc: "Every installation is built with photography in mind — angles, lighting, and guest flow all pre-planned.",
  },
  {
    icon: Sparkles,
    title: "Surprise Reveals",
    desc: "Specialising in jaw-dropping surprise reveals for proposals, birthdays, and homecomings.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-luxe-emerald text-[#FBF5EC] overflow-hidden grain-overlay">
      <span className="section-num absolute -top-8 left-4 !text-[#FBF5EC]/10">
        10
      </span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="block w-10 h-px bg-[#E8B4B8]" />
            <span className="text-xs tracking-luxe font-medium text-[#E8B4B8]">
              WHY ONE TOUCH
            </span>
            <span className="block w-10 h-px bg-[#E8B4B8]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            The Little Things,
            <br />
            <span className="font-script italic text-[#E8B4B8]">
              Done Exceptionally
            </span>
          </motion.h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group glass-card-dark rounded-2xl p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-[#C97B5C]/20 border border-[#C97B5C]/40 flex items-center justify-center mb-4 group-hover:bg-[#C97B5C] transition-all">
                <f.icon className="w-5 h-5 text-[#E8B4B8] group-hover:text-[#FBF5EC] transition-colors" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-[#FBF5EC]/75 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-script text-2xl md:text-3xl text-[#E8B4B8]">
            8 years, 500+ events, zero complaints.
          </p>
          <p className="mt-2 text-sm text-[#FBF5EC]/70">
            We don&apos;t take that record lightly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
