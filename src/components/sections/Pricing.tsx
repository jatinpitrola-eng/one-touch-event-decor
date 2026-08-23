"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const PACKAGES = [
  {
    name: "Essential",
    tagline: "Intimate gatherings up to 30 guests",
    price: "4,999",
    period: "starting from",
    highlight: false,
    features: [
      "1 balloon arch (8 ft)",
      "2 balloon columns",
      "Basic backdrop (6×4 ft)",
      "1 themed centrepiece",
      "Setup & teardown included",
      "4-hour on-site service",
    ],
  },
  {
    name: "Signature",
    tagline: "Most popular for birthdays & showers",
    price: "14,999",
    period: "starting from",
    highlight: true,
    features: [
      "Organic balloon arch (12 ft)",
      "4 balloon columns",
      "Premium photo backdrop (8×6 ft)",
      "Ceiling installation (1 zone)",
      "3 themed centrepieces",
      "Custom signage & name cutouts",
      "6-hour on-site service",
      "Dedicated stylist + 2 assistants",
    ],
  },
  {
    name: "Bespoke",
    tagline: "Weddings & large celebrations",
    price: "Custom",
    period: "tailored quote",
    highlight: false,
    features: [
      "Unlimited arches & installations",
      "Multi-zone ceiling décor",
      "Stage backdrop & mandap styling",
      "Floral integration",
      "Custom fabrication & props",
      "Lighting coordination",
      "Full-day on-site team",
      "Personal designer + 5+ stylists",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">09</span>

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
            <span className="text-xs tracking-luxe font-medium">PACKAGES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3D34] leading-tight"
          >
            Pick Your{" "}
            <span className="font-script italic text-[#C97B5C]">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
          >
            Transparent pricing. No hidden charges. Every package is fully
            customisable — add a balloon wall here, swap a colour palette there.
            Final quotes are confirmed after consultation.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative rounded-[1.5rem] p-8 shadow-lg hover-lift ${
                p.highlight
                  ? "bg-[#1F3D34] text-[#FBF5EC] lg:-translate-y-4"
                  : "bg-[#FFFCF5] text-[#1F3D34] border border-[#E5D9C4]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#C97B5C] text-[#FBF5EC] text-[10px] tracking-luxe px-4 py-1.5 rounded-full shadow-md">
                  <Crown className="w-3 h-3" />
                  MOST LOVED
                </span>
              )}

              <h3 className="font-display text-2xl md:text-3xl font-bold">{p.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  p.highlight ? "text-[#E8D5B7]" : "text-[#6B5D4A]"
                }`}
              >
                {p.tagline}
              </p>

              <div className="mt-6 flex items-end gap-2">
                {p.price !== "Custom" && (
                  <span
                    className={`font-display text-xl ${
                      p.highlight ? "text-[#E8D5B7]" : "text-[#6B5D4A]"
                    }`}
                  >
                    ₹
                  </span>
                )}
                <span className="font-display text-4xl md:text-5xl font-bold">
                  {p.price}
                </span>
              </div>
              <p
                className={`text-xs tracking-luxe mt-1 ${
                  p.highlight ? "text-[#E8D5B7]" : "text-[#C97B5C]"
                } uppercase`}
              >
                {p.period}
              </p>

              <div
                className={`my-6 h-px ${
                  p.highlight ? "bg-[#E8B4B8]/20" : "bg-[#E5D9C4]"
                }`}
              />

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
                        p.highlight
                          ? "bg-[#C97B5C] text-[#FBF5EC]"
                          : "bg-[#1F3D34]/10 text-[#1F3D34]"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    <span
                      className={
                        p.highlight ? "text-[#FBF5EC]/90" : "text-[#1F3D34]"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-8 block text-center px-6 py-3 rounded-full tracking-wide transition-all duration-500 ${
                  p.highlight
                    ? "bg-[#C97B5C] text-[#FBF5EC] hover:bg-[#FBF5EC] hover:text-[#1F3D34]"
                    : "bg-[#1F3D34] text-[#FBF5EC] hover:bg-[#C97B5C]"
                }`}
              >
                {p.price === "Custom" ? "Request a Quote" : "Book This Package"}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center text-sm text-[#6B5D4A]"
        >
          All packages include free design consultation, premium materials, and
          GST. Travel & logistics quoted separately for venues 25 km+ outside
          city limits.
        </motion.p>
      </div>
    </section>
  );
}
