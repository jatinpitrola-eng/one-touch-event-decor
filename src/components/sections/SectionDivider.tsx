"use client";

import { motion } from "framer-motion";

/**
 * Botanical divider with leaf motif + thin line — placed between sections
 * for that "wow, considered" feel.
 */
export default function SectionDivider({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const stroke = variant === "dark" ? "#B87333" : "#0B3D2E";
  return (
    <div className="relative w-full py-8 md:py-12 flex justify-center overflow-hidden">
      <motion.svg
        viewBox="0 0 400 60"
        className="w-full max-w-md h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
          },
        }}
      >
        {/* Left line */}
        <motion.line
          x1="0"
          y1="30"
          x2="160"
          y2="30"
          stroke={stroke}
          strokeWidth="1"
          opacity="0.4"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.4,
              transition: { duration: 0.8 },
            },
          }}
        />
        {/* Right line */}
        <motion.line
          x1="240"
          y1="30"
          x2="400"
          y2="30"
          stroke={stroke}
          strokeWidth="1"
          opacity="0.4"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.4,
              transition: { duration: 0.8 },
            },
          }}
        />
        {/* Center leaf cluster */}
        <motion.g
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
          style={{ transformOrigin: "200px 30px" }}
        >
          {/* Left leaf */}
          <path
            d="M 200 30 C 188 22, 178 22, 172 30 C 178 38, 188 38, 200 30 Z"
            fill={stroke}
            opacity="0.7"
          />
          {/* Right leaf */}
          <path
            d="M 200 30 C 212 22, 222 22, 228 30 C 222 38, 212 38, 200 30 Z"
            fill={stroke}
            opacity="0.7"
          />
          {/* Center dot */}
          <circle cx="200" cy="30" r="2.5" fill="#B87333" />
          {/* Small top flourish */}
          <path
            d="M 200 24 L 200 18"
            stroke={stroke}
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M 197 22 Q 200 19, 203 22"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
