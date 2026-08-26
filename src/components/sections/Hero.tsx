"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";
import MagneticButton from "./MagneticButton";
import FloatingPetals from "./FloatingPetals";
import { useContent } from "@/components/admin/ContentProvider";

function FloatingBalloon({
  color, size, className, delay, duration, parallaxX = 0, parallaxY = 0,
}: {
  color: string; size: number; className?: string; delay: number; duration: number;
  parallaxX?: number; parallaxY?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size * 1.4, x: parallaxX, y: parallaxY }}
      animate={{ y: [parallaxY, parallaxY - 20, parallaxY] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.85) 0%, ${color} 50%, rgba(0,0,0,0.18) 100%)`,
          boxShadow: `inset -10px -12px 22px rgba(0,0,0,0.2), 0 16px 36px rgba(0,0,0,0.22)`,
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: -6, width: 0, height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: `10px solid ${color}`,
        }}
      />
      <svg width="3" height={size * 1.2} className="absolute left-1/2 top-full -translate-x-1/2">
        <path
          d={`M 1.5 0 Q 8 ${size * 0.4}, 1.5 ${size * 0.6} T 1.5 ${size * 1.2}`}
          stroke="rgba(11, 61, 46, 0.4)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const { content } = useContent();
  const c = content;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    let targetX = 0, targetY = 0;
    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const loop = () => {
      setMouse((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.08,
        y: prev.y + (targetY - prev.y) * 0.08,
      }));
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center pt-28 pb-20 gradient-mesh overflow-hidden grain-overlay"
    >
      <FloatingPetals count={14} />

      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] opacity-[0.08] animate-slow-spin pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="98" fill="none" stroke="#0B3D2E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#0B3D2E" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#0B3D2E" strokeWidth="0.5" />
          <text x="100" y="6" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#0B3D2E" letterSpacing="2">
            ONE TOUCH • EVENT DÉCOR • LUXURY BALLOON ARTISTRY •
          </text>
        </svg>
      </div>

      <FloatingBalloon color="#E8B4B8" size={90} className="top-32 left-[6%] hidden md:block" delay={0} duration={5} parallaxX={mouse.x * 30} parallaxY={mouse.y * 20} />
      <FloatingBalloon color="#B87333" size={70} className="top-44 left-[14%] hidden md:block" delay={0.5} duration={6} parallaxX={mouse.x * 50} parallaxY={mouse.y * 30} />
      <FloatingBalloon color="#3F6B52" size={60} className="top-24 left-[20%] hidden lg:block" delay={1} duration={5.5} parallaxX={mouse.x * 70} parallaxY={mouse.y * 40} />
      <FloatingBalloon color="#C68A4E" size={80} className="top-28 right-[8%] hidden md:block" delay={0.3} duration={5.2} parallaxX={mouse.x * -40} parallaxY={mouse.y * -25} />
      <FloatingBalloon color="#E8B4B8" size={65} className="top-44 right-[18%] hidden lg:block" delay={0.8} duration={6.2} parallaxX={mouse.x * -60} parallaxY={mouse.y * -35} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div style={{ y: yText, opacity }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 2.4 }} className="inline-flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#B87333]" />
              <span className="text-[#B87333] text-xs tracking-luxe font-medium">{c.heroEyebrow}</span>
              <span className="block w-10 h-px bg-[#B87333]" />
            </motion.div>

            <h1 className="font-display font-bold text-[#0B3D2E] leading-[0.95]">
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 2.5 }} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                {c.heroLine1}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 2.65 }} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                {c.heroLine2}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 2.8 }} className="block font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#B87333] italic mt-2">
                {c.heroLine3}
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3 }} className="mt-6 text-base md:text-lg text-[#6B5D4A] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {c.heroSub}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3.15 }} className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton strength={0.4}>
                <a href="#booking" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B3D2E] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#B87333] transition-all duration-500 shadow-lg shadow-[#0B3D2E]/15">
                  {c.heroCta1}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a href="#gallery" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#0B3D2E] tracking-wide rounded-full border border-[#0B3D2E]/30 hover:border-[#B87333] hover:text-[#B87333] transition-all duration-500">
                  {c.heroCta2}
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.3 }} className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B87333] text-[#B87333]" />
                ))}
              </div>
              <p className="text-sm text-[#6B5D4A]">
                <span className="font-semibold text-[#0B3D2E]">{c.heroStats}</span> &nbsp;·&nbsp;
                <span className="font-semibold text-[#0B3D2E]">{c.heroStatsRating}</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yImg, x: mouse.x * -10 }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 2.7, ease: [0.16, 1, 0.3, 1] }} className="relative h-[480px] sm:h-[560px] md:h-[640px]">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 2.8 }} className="absolute top-0 right-0 w-[78%] h-[78%] rounded-[2rem] overflow-hidden shadow-2xl zoom-img">
              <Image src={c.heroImage1} alt="Luxury balloon arch decoration" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 3.0 }} className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#F7F1E8] zoom-img">
              <Image src={c.heroImage2} alt="Pastel balloon decoration" fill className="object-cover" sizes="(max-width: 1024px) 60vw, 30vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 3.2, type: "spring" }} className="absolute top-[40%] -left-4 md:left-[-2rem] glass-card rounded-full px-5 py-3 shadow-xl flex items-center gap-3 animate-pulse-glow">
              <div className="w-10 h-10 rounded-full bg-[#B87333] flex items-center justify-center text-[#F7F1E8] font-display font-bold text-lg">✓</div>
              <div className="leading-tight">
                <p className="font-display text-sm text-[#0B3D2E] font-semibold">{c.heroBadgeText}</p>
                <p className="text-[10px] tracking-wide-luxe text-[#6B5D4A]">{c.heroBadgeSub}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 3.35, type: "spring" }} className="absolute bottom-4 right-4 glass-card rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-[10px] tracking-luxe text-[#B87333]">{c.heroPriceLabel}</p>
              <p className="font-display text-2xl text-[#0B3D2E] font-bold mt-1">{c.heroPriceValue}</p>
              <p className="text-[10px] text-[#6B5D4A]">{c.heroPriceSub}</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }} className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-[#0B3D2E]">
          <span className="text-[10px] tracking-luxe">SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#0B3D2E] text-[#F7F1E8] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {["WEDDINGS", "BIRTHDAYS", "BABY SHOWERS", "CORPORATE", "ANNIVERSARIES", "FAMILY FUNCTIONS", "ENGAGEMENTS", "FESTIVALS"].map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-display text-sm tracking-luxe mx-6">{word}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
