"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Luxe Balloon Loader — short, elegant intro (2.2s)
 * - 5 smaller balloons rise elegantly
 * - Logo in the center with rotating botanical ring
 * - Smooth fade out
 */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // Smaller, more elegant balloon cluster
  const balloons = [
    { left: "10%", delay: 0, color: "#D4A5A5", size: 55, string: 180 },
    { left: "26%", delay: 0.25, color: "#E07856", size: 70, string: 220 },
    { left: "50%", delay: 0.15, color: "#9CAF88", size: 60, string: 200 },
    { left: "72%", delay: 0.35, color: "#F0A88E", size: 75, string: 240 },
    { left: "90%", delay: 0.2, color: "#D4A5A5", size: 58, string: 190 },
  ];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-luxe-wine overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 gradient-mesh-dark opacity-90" />

          {/* Rotating ornamental rings */}
          <div
            className="absolute w-[140vw] h-[140vw] rounded-full border border-[#E07856]/8 animate-slow-spin"
            style={{ top: "-70vw", left: "-20vw" }}
          />
          <div
            className="absolute w-[100vw] h-[100vw] rounded-full border border-[#D4A5A5]/8 animate-slow-spin-reverse"
            style={{ bottom: "-50vw", right: "-25vw" }}
          />

          {/* Rising balloons — smaller, more refined */}
          {balloons.map((b, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{ left: b.left }}
              initial={{ y: "110vh", opacity: 0 }}
              animate={{
                y: ["110vh", "-30vh"],
                opacity: [0, 0.85, 0.85, 0],
              }}
              transition={{
                duration: 2.4,
                delay: b.delay,
                ease: "easeInOut",
                times: [0, 0.2, 0.85, 1],
              }}
            >
              <div className="relative" style={{ width: b.size, height: b.size * 1.2 }}>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.8) 0%, ${b.color} 50%, rgba(0,0,0,0.18) 100%)`,
                    boxShadow: `inset -8px -10px 18px rgba(0,0,0,0.2), 0 12px 30px rgba(0,0,0,0.25)`,
                  }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    bottom: -6,
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: `8px solid ${b.color}`,
                  }}
                />
                <svg
                  width="2"
                  height={b.string}
                  className="absolute left-1/2 top-full -translate-x-1/2"
                >
                  <path
                    d={`M 1 0 Q 5 ${b.string * 0.3}, 1 ${b.string * 0.5} T 1 ${b.string}`}
                    stroke="rgba(250, 243, 232, 0.4)"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Center logo with rotating botanical ring */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-32 h-32 md:w-40 md:h-40"
            >
              {/* Outer rotating botanical ring */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full animate-slow-spin"
              >
                <defs>
                  <path
                    id="botanicalCircle"
                    d="M 100, 100 m -85, 0 a 85, 85 0 1, 0 170, 0 a 85, 85 0 1, 0 -170, 0"
                  />
                </defs>
                <text
                  fontSize="7"
                  fill="#E07856"
                  fontFamily="serif"
                  letterSpacing="3"
                >
                  <textPath href="#botanicalCircle">
                    ONE TOUCH • EVENT DÉCOR • LUXURY BALLOON ARTISTRY • ONE TOUCH •
                  </textPath>
                </text>
                {/* Small leaves around the circle */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <g key={deg} transform={`rotate(${deg} 100 100)`}>
                    <path
                      d="M 100 14 C 96 8, 104 8, 100 14 Z"
                      fill="#D4A5A5"
                      opacity="0.7"
                    />
                  </g>
                ))}
              </svg>

              {/* Inner static logo disc */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-4 rounded-full bg-[#FAF3E8] shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/logo.png"
                  alt="One Touch Event Decor logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </motion.div>

              {/* Pulse ring */}
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: 0.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-4 rounded-full border-2 border-[#E07856]"
              />
            </motion.div>

            {/* Brand name reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className="mt-7"
            >
              <p className="font-script text-xl md:text-2xl text-[#D4A5A5] tracking-wide">
                One Touch
              </p>
              <h1 className="font-display text-2xl md:text-3xl text-[#FAF3E8] tracking-luxe mt-0.5">
                EVENT DÉCOR
              </h1>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="block w-8 h-px bg-[#E07856]" />
                <span className="text-[#E07856] text-[10px] tracking-luxe">
                  MIDNIGHT VELVET
                </span>
                <span className="block w-8 h-px bg-[#E07856]" />
              </div>
            </motion.div>

            {/* Loading line — shorter & faster */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-6 w-32 md:w-40 h-px bg-[#FAF3E8]/15 overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4A5A5] via-[#E07856] to-[#F0A88E]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.0, delay: 1.4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
