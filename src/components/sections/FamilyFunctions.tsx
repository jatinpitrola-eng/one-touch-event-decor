"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Sparkles, PartyPopper, Heart } from "lucide-react";
import { IMAGES } from "@/lib/images";

const MOMENTS = [
  {
    icon: Users,
    title: "Family Reunions",
    desc: "Multi-generational gatherings styled with warmth — welcome arches, photo walls, and memory corners.",
  },
  {
    icon: PartyPopper,
    title: "Festivals & Pujas",
    desc: "Diwali rangoli installs, Ganesh mandap, Onam floral arches, Christmas wonderlands, Eid iftar décors.",
  },
  {
    icon: Heart,
    title: "Engagements & Roka",
    desc: "Intimate ring-ceremony backdrops, candle-lit pathways, and pastel florals for the first yes.",
  },
  {
    icon: Sparkles,
    title: "Milestone Celebrations",
    desc: "First birthdays, half-birthdays, naming ceremonies, housewarmings — every little first, styled.",
  },
];

export default function FamilyFunctions() {
  return (
    <section
      id="family"
      className="relative py-24 md:py-32 bg-luxe-emerald text-[#FBF5EC] overflow-hidden grain-overlay"
    >
      <span className="section-num absolute -top-8 right-4 !text-[#FBF5EC]/10 !text-stroke-1 !text-[#FBF5EC]/10">
        03
      </span>

      {/* Decorative leaves */}
      <div className="absolute top-10 left-10 opacity-15 animate-sway">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 5 C 20 20, 20 60, 40 75 C 60 60, 60 20, 40 5 Z"
            stroke="#E8B4B8"
            strokeWidth="1"
          />
          <path d="M40 5 L 40 75" stroke="#E8B4B8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="block w-10 h-px bg-[#E8B4B8]" />
              <span className="text-xs tracking-luxe text-[#E8B4B8] font-medium">
                BECAUSE FAMILY IS FOREVER
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              Family Functions,
              <br />
              <span className="font-script italic text-[#E8B4B8]">Elevated</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-[#FBF5EC]/85 leading-relaxed max-w-xl"
            >
              Some of our most-loved celebrations are the ones held at home —
              surrounded by grandparents, cousins, and the smell of mum&apos;s
              cooking. We specialize in turning everyday living rooms, terraces,
              and community halls into spaces worthy of the love your family
              shares. From intimate pujas to multi-day wedding functions, every
              corner of your home becomes a stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 grid sm:grid-cols-2 gap-6"
            >
              {MOMENTS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                  className="group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#E8B4B8]/15 border border-[#E8B4B8]/40 flex items-center justify-center mb-3 group-hover:bg-[#C97B5C] group-hover:border-[#C97B5C] transition-all">
                    <m.icon className="w-5 h-5 text-[#E8B4B8] group-hover:text-[#FBF5EC] transition-colors" />
                  </div>
                  <h4 className="font-display text-lg font-semibold">{m.title}</h4>
                  <p className="mt-2 text-sm text-[#FBF5EC]/75 leading-relaxed">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C97B5C] text-[#FBF5EC] tracking-wide rounded-full hover:bg-[#FBF5EC] hover:text-[#1F3D34] transition-all duration-500 shadow-lg"
              >
                Plan a Family Celebration
                <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: image stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] sm:h-[560px] md:h-[640px]"
          >
            {/* Main */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="absolute top-0 right-0 w-[75%] h-[68%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#1F3D34] zoom-img"
            >
              <Image
                src={IMAGES.family[2]}
                alt="Family function decoration by One Touch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 38vw"
              />
            </motion.div>
            {/* Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute bottom-0 left-0 w-[55%] h-[48%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#1F3D34] zoom-img"
            >
              <Image
                src={IMAGES.family[3]}
                alt="Traditional festive decor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 28vw"
              />
            </motion.div>
            {/* Floating testimonial card */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
              className="absolute top-[36%] -left-2 md:-left-6 glass-card-dark rounded-2xl px-5 py-4 shadow-xl max-w-[200px]"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E8B4B8] text-sm">★</span>
                ))}
              </div>
              <p className="text-xs text-[#FBF5EC]/90 leading-relaxed">
                &ldquo;They turned our tiny terrace into a wedding wonderland. Every aunty asked for their number!&ldquo;
              </p>
              <p className="mt-2 text-[10px] tracking-luxe text-[#E8D5B7]">— SHARMA FAMILY</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
