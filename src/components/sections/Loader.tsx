"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Luxe Balloon Loader — animated intro
 * Balloons rise from bottom, logo scales in, then exits with curtain reveal.
 */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3200);
    return () => clearTimeout(t);
  }, []);

  // 5 floating balloons, slightly staggered
  const balloons = [
    { left: "8%", delay: 0, color: "#E8B4B8", size: 70, string: 220 },
    { left: "24%", delay: 0.3, color: "#C97B5C", size: 90, string: 280 },
    { left: "44%", delay: 0.15, color: "#94A88B", size: 80, string: 250 },
    { left: "66%", delay: 0.45, color: "#E8D5B7", size: 100, string: 300 },
    { left: "86%", delay: 0.25, color: "#E8B4B8", size: 75, string: 240 },
  ];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-luxe-emerald overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Subtle ornamental rings */}
          <div
            className="absolute w-[120vw] h-[120vw] rounded-full border border-white/5 animate-slow-spin"
            style={{ top: "-60vw", left: "-10vw" }}
          />
          <div
            className="absolute w-[80vw] h-[80vw] rounded-full border border-white/5 animate-slow-spin-reverse"
            style={{ bottom: "-40vw", right: "-20vw" }}
          />

          {/* Rising balloons */}
          {balloons.map((b, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{ left: b.left }}
              initial={{ y: "110vh", opacity: 0 }}
              animate={{
                y: ["110vh", "-30vh"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.2,
                delay: b.delay,
                ease: "easeInOut",
                times: [0, 0.2, 0.85, 1],
              }}
            >
              <div
                className="relative"
                style={{ width: b.size, height: b.size * 1.2 }}
              >
                {/* Balloon body */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.7) 0%, ${b.color} 45%, rgba(0,0,0,0.15) 100%)`,
                    boxShadow: `inset -8px -10px 18px rgba(0,0,0,0.18), 0 12px 30px rgba(0,0,0,0.25)`,
                  }}
                />
                {/* Balloon tie */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    bottom: -8,
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: `10px solid ${b.color}`,
                  }}
                />
                {/* Curving string */}
                <svg
                  width="2"
                  height={b.string}
                  className="absolute left-1/2 top-full -translate-x-1/2"
                >
                  <path
                    d={`M 1 0 Q 6 ${b.string * 0.3}, 1 ${b.string * 0.5} T 1 ${b.string}`}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Center logo + brand reveal */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <motion.div
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/95 shadow-2xl flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="One Touch Event Decor logo"
                fill
                className="object-contain p-3"
                priority
              />
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full border border-white/40 animate-pulse-glow" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
              className="mt-8"
            >
              <p className="font-script text-2xl md:text-3xl text-[#E8B4B8] tracking-wide">
                One Touch
              </p>
              <h1 className="font-display text-3xl md:text-5xl text-[#FBF5EC] tracking-luxe mt-1">
                EVENT DÉCOR
              </h1>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="block w-10 h-px bg-[#C97B5C]" />
                <span className="text-[#C97B5C] text-xs tracking-luxe">CRAFTED WITH CARE</span>
                <span className="block w-10 h-px bg-[#C97B5C]" />
              </div>
            </motion.div>

            {/* Loading line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-8 w-44 md:w-56 h-px bg-white/15 overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#E8B4B8] via-[#C97B5C] to-[#E8D5B7]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.6, delay: 1.7, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
