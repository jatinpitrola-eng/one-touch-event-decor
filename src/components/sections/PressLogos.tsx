"use client";

import { motion } from "framer-motion";

/**
 * PressLogos — "As Featured In" marquee strip
 * Adds authenticity (looks like a real luxury brand with press coverage).
 */
const LOGOS = [
  "VOGUE INDIA",
  "BRIDES TODAY",
  "WEDDING AFFAIR",
  "ELLE",
  "FEMINA",
  "HARPER'S BAZAAR",
  "THE KNOT",
  "GQ INDIA",
];

export default function PressLogos() {
  return (
    <section className="relative py-12 md:py-16 bg-[#FFFCF5] border-y border-[#E8DDC8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-xs tracking-luxe text-[#E07856] font-medium mb-8"
        >
          AS FEATURED IN
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFFCF5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFFCF5] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                {LOGOS.map((logo, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="flex items-center mx-8 md:mx-12"
                  >
                    <span className="font-display text-lg md:text-2xl font-bold tracking-wide text-[#4A1A28]/40 hover:text-[#4A1A28] transition-colors duration-500">
                      {logo}
                    </span>
                    <span className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-[#E07856]/40" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
