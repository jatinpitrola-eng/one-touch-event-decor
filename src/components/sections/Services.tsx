"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Cake, Baby, Building, Gift, Sparkles, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

const SERVICES = [
  {
    icon: Heart,
    title: "Weddings",
    tagline: "Vows made visible",
    desc: "Ceremony arches, mandap drapes, sweetheart tablescapes, and grand entrance florals — designed to frame forever.",
    image: IMAGES.wedding[0],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Cake,
    title: "Birthdays",
    tagline: "Year another chapter",
    desc: "From sweet sixteens to milestone fiftieths — pastel dreams, confetti ceilings, and number sculptures.",
    image: IMAGES.birthday[0],
    span: "",
  },
  {
    icon: Baby,
    title: "Baby Showers",
    tagline: "Welcoming little wonders",
    desc: "Cloud garlands, teddy bear columns, and gender-reveal installations.",
    image: IMAGES.baby[0],
    span: "",
  },
  {
    icon: Building,
    title: "Corporate",
    tagline: "Brand-worthy moments",
    desc: "Stage backdrops, launch activations, conference décor, and award-night statements.",
    image: IMAGES.corporate[0],
    span: "",
  },
  {
    icon: Gift,
    title: "Anniversaries",
    tagline: "Years worth reliving",
    desc: "Romantic balcony installations, candle-lit arches, and surprise-reveal moments.",
    image: IMAGES.anniversary[0],
    span: "",
  },
  {
    icon: Sparkles,
    title: "Custom Themes",
    tagline: "Imagination, unlimited",
    desc: "Have a vision? We design around it — cultural, fantasy, seasonal, or avant-garde.",
    image: IMAGES.event[3],
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">02</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxe-divider mb-5"
          >
            <span className="text-xs tracking-luxe font-medium">SIGNATURE SERVICES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A1A28] leading-tight"
          >
            One Studio,{" "}
            <span className="font-script italic text-[#E07856]">Every Occasion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
          >
            Six pillars of décor mastery — each crafted with the same obsessive
            attention to detail. Pick one, mix several, or let us design a
            one-of-a-kind experience around your celebration.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative rounded-[1.5rem] overflow-hidden shadow-lg hover-lift ${s.span}`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A28]/95 via-[#4A1A28]/40 to-transparent" />
              {/* Icon */}
              <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-[#FAF3E8]/15 backdrop-blur-md border border-[#FAF3E8]/30 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-[#FAF3E8]" />
              </div>
              {/* Corner arrow */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#E07856] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-[#FAF3E8]" />
              </div>
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF3E8]">
                <p className="text-[10px] tracking-luxe text-[#E8DDC8] mb-1">
                  {s.tagline}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#FAF3E8]/85 leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {s.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B5D4A] mb-4">Don&apos;t see exactly what you imagined?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A1A28] text-[#FAF3E8] tracking-wide rounded-full hover:bg-[#E07856] transition-all duration-500 shadow-lg"
          >
            Tell Us Your Vision
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
