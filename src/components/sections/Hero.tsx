"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";
import { IMAGES } from "@/lib/images";

// Animated SVG balloon cluster (decorative, no images)
function FloatingBalloon({
  color,
  size,
  className,
  delay,
  duration,
}: {
  color: string;
  size: number;
  className?: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -20, 0], opacity: 1 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size * 1.4 }}
    >
      {/* Balloon body */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.85) 0%, ${color} 50%, rgba(0,0,0,0.18) 100%)`,
          boxShadow: `inset -10px -12px 22px rgba(0,0,0,0.2), 0 16px 36px rgba(0,0,0,0.22)`,
        }}
      />
      {/* Tie */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: -6,
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: `10px solid ${color}`,
        }}
      />
      {/* String */}
      <svg
        width="3"
        height={size * 1.2}
        className="absolute left-1/2 top-full -translate-x-1/2"
      >
        <path
          d={`M 1.5 0 Q 8 ${size * 0.4}, 1.5 ${size * 0.6} T 1.5 ${size * 1.2}`}
          stroke="rgba(31,61,52,0.4)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center pt-28 pb-20 bg-luxe-cream overflow-hidden grain-overlay"
    >
      {/* Decorative rotating ring */}
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] opacity-[0.06] animate-slow-spin pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="98" fill="none" stroke="#1F3D34" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#1F3D34" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#1F3D34" strokeWidth="0.5" />
          <text
            x="100"
            y="6"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="6"
            fill="#1F3D34"
            letterSpacing="2"
          >
            ONE TOUCH • EVENT DÉCOR • LUXURY BALLOON ARTISTRY •
          </text>
        </svg>
      </div>

      {/* Floating balloons cluster — top left */}
      <FloatingBalloon
        color="#E8B4B8"
        size={90}
        className="top-32 left-[6%] hidden md:block"
        delay={0}
        duration={5}
      />
      <FloatingBalloon
        color="#C97B5C"
        size={70}
        className="top-44 left-[14%] hidden md:block"
        delay={0.5}
        duration={6}
      />
      <FloatingBalloon
        color="#94A88B"
        size={60}
        className="top-24 left-[20%] hidden lg:block"
        delay={1}
        duration={5.5}
      />

      {/* Floating balloons cluster — top right */}
      <FloatingBalloon
        color="#E8D5B7"
        size={80}
        className="top-28 right-[8%] hidden md:block"
        delay={0.3}
        duration={5.2}
      />
      <FloatingBalloon
        color="#E8B4B8"
        size={65}
        className="top-44 right-[18%] hidden lg:block"
        delay={0.8}
        duration={6.2}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ===== LEFT: Text ===== */}
          <motion.div style={{ y: yText, opacity }} className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.4 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-[#C97B5C]" />
              <span className="text-[#C97B5C] text-xs tracking-luxe font-medium">
                LUXURY BALLOON ARTISTRY
              </span>
              <span className="block w-10 h-px bg-[#C97B5C]" />
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold text-[#1F3D34] leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                className="block text-5xl sm:text-6xl md:text-7xl"
              >
                Where Every
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.65 }}
                className="block text-5xl sm:text-6xl md:text-7xl"
              >
                Moment
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.8 }}
                className="block font-script text-6xl sm:text-7xl md:text-8xl text-[#C97B5C] italic mt-2"
              >
                Takes Flight
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
              className="mt-6 text-base md:text-lg text-[#6B5D4A] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Bespoke balloon installations and luxury event décor crafted to turn
              ordinary celebrations into extraordinary memories. From intimate
              gatherings to grand celebrations — One Touch transforms spaces with
              breathtaking artistry.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.15 }}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1F3D34] text-[#FBF5EC] tracking-wide rounded-full hover:bg-[#C97B5C] transition-all duration-500 shadow-lg shadow-[#1F3D34]/15"
              >
                Book Your Event
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#1F3D34] tracking-wide rounded-full border border-[#1F3D34]/30 hover:border-[#C97B5C] hover:text-[#C97B5C] transition-all duration-500"
              >
                View Gallery
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.3 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C97B5C] text-[#C97B5C]" />
                ))}
              </div>
              <p className="text-sm text-[#6B5D4A]">
                <span className="font-semibold text-[#1F3D34]">500+</span> events styled &nbsp;·&nbsp;
                <span className="font-semibold text-[#1F3D34]">4.9/5</span> rating
              </p>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Image collage ===== */}
          <motion.div
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] sm:h-[560px] md:h-[640px]"
          >
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 3.7 }}
              className="absolute top-0 right-0 w-[78%] h-[78%] rounded-[2rem] overflow-hidden shadow-2xl zoom-img"
            >
              <Image
                src={IMAGES.wedding[1]}
                alt="Luxury balloon arch decoration for a wedding ceremony"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 3.9 }}
              className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#FBF5EC] zoom-img"
            >
              <Image
                src={IMAGES.birthday[3]}
                alt="Pastel birthday balloon decoration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 4.1, type: "spring" }}
              className="absolute top-[40%] -left-4 md:left-[-2rem] glass-card rounded-full px-5 py-3 shadow-xl flex items-center gap-3 animate-pulse-glow"
            >
              <div className="w-10 h-10 rounded-full bg-[#C97B5C] flex items-center justify-center text-[#FBF5EC] font-display font-bold text-lg">
                ✓
              </div>
              <div className="leading-tight">
                <p className="font-display text-sm text-[#1F3D34] font-semibold">100% Custom</p>
                <p className="text-[10px] tracking-wide-luxe text-[#6B5D4A]">BESPOKE DESIGNS</p>
              </div>
            </motion.div>

            {/* Floating price tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 4.25, type: "spring" }}
              className="absolute bottom-4 right-4 glass-card rounded-2xl px-5 py-4 shadow-xl"
            >
              <p className="text-[10px] tracking-luxe text-[#C97B5C]">STARTING FROM</p>
              <p className="font-display text-2xl text-[#1F3D34] font-bold mt-1">₹4,999</p>
              <p className="text-[10px] text-[#6B5D4A]">per event</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-[#1F3D34]"
        >
          <span className="text-[10px] tracking-luxe">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1F3D34] text-[#FBF5EC] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {[
                "WEDDINGS",
                "BIRTHDAYS",
                "BABY SHOWERS",
                "CORPORATE",
                "ANNIVERSARIES",
                "FAMILY FUNCTIONS",
                "ENGAGEMENTS",
                "FESTIVALS",
              ].map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-display text-sm tracking-luxe mx-6">{word}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97B5C]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
