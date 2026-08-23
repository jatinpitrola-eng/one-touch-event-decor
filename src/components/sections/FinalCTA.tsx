"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import MagneticButton from "./MagneticButton";
import FloatingPetals from "./FloatingPetals";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 bg-luxe-wine text-[#FAF3E8] overflow-hidden grain-overlay">
      {/* Floating petals for atmosphere */}
      <FloatingPetals count={10} />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.event[7]}
          alt="Luxury balloon installation background"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A0E18] via-[#4A1A28]/85 to-[#2A0E18]" />
      </div>

      {/* Decorative rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] opacity-[0.06] animate-slow-spin pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="98" fill="none" stroke="#FAF3E8" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#FAF3E8" strokeWidth="0.3" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#FAF3E8" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#FAF3E8" strokeWidth="0.3" strokeDasharray="1 2" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E07856]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4A5A5]/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-10 h-px bg-[#E07856]" />
          <span className="text-xs tracking-luxe text-[#E07856] font-medium">
            LET&apos;S CREATE MAGIC
          </span>
          <span className="block w-10 h-px bg-[#E07856]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          Your Moment
          <br />
          <span className="font-script italic text-[#E07856]">
            Awaits One Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-7 text-base md:text-lg text-[#FAF3E8]/80 leading-relaxed max-w-2xl mx-auto"
        >
          Book a complimentary consultation today. Tell us about your dream
          celebration — we&apos;ll bring the balloons, the magic, and the
          unforgettable. No deposit. No pressure. Just imagination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton strength={0.4}>
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-[#E07856] text-[#FAF3E8] tracking-wide rounded-full hover:bg-[#FAF3E8] hover:text-[#4A1A28] transition-all duration-500 shadow-xl"
            >
              Book Free Consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-[#FAF3E8] tracking-wide rounded-full border border-[#FAF3E8]/30 hover:border-[#E07856] hover:text-[#E07856] transition-all duration-500"
            >
              WhatsApp Us
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#FAF3E8]/60"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07856]" /> 24-hour response
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07856]" /> No deposit required
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07856]" /> Free mood board
          </span>
        </motion.div>
      </div>
    </section>
  );
}
