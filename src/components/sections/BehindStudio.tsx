"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Tilt3D from "./Tilt3D";

const TEAM = [
  {
    name: "Aanya Verma",
    role: "Founder & Lead Stylist",
    bio: "8 years crafting balloon installations. Started One Touch from her Bandra studio with a single balloon arch and a borrowed air pump.",
    image: IMAGES.family[4],
  },
  {
    name: "Rohan Desai",
    role: "Creative Director",
    bio: "Background in set design for Bollywood. Brings film-grade visual storytelling to every installation.",
    image: IMAGES.event[5],
  },
  {
    name: "Meera Iyer",
    role: "Head of Floral Integration",
    bio: "Trained at the Covent Garden Academy of Flowers. Marries fresh florals with balloon artistry for one-of-a-kind pieces.",
    image: IMAGES.baby[3],
  },
];

export default function BehindStudio() {
  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">06</span>

      {/* Decorative floral SVG top-left */}
      <motion.svg
        className="absolute -top-10 -left-10 w-40 h-40 md:w-56 md:h-56 opacity-[0.07] animate-slow-spin-reverse"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="48" stroke="#4A1A28" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="36" stroke="#4A1A28" strokeWidth="0.3" strokeDasharray="1 3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            <path
              d="M 50 6 C 46 12, 54 12, 50 6 Z"
              fill="#4A1A28"
              opacity="0.6"
            />
            <path
              d="M 50 12 C 47 16, 53 16, 50 12 Z"
              fill="#4A1A28"
              opacity="0.3"
            />
          </g>
        ))}
      </motion.svg>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8 items-end mb-14">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="luxe-divider mb-5"
            >
              <span className="text-xs tracking-luxe font-medium">BEHIND THE STUDIO</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A1A28] leading-[1.05]"
            >
              The Hands Behind
              <br />
              <span className="font-script italic text-[#E07856]">
                Every Detail
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base text-[#6B5D4A] leading-relaxed"
          >
            A studio of nine obsessive stylists, florists, and dreamers — each
            obsessed with the same thing: making your celebration unforgettable.
            Here are three of them.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <Tilt3D maxTilt={8} className="h-full">
                <article className="group relative h-full rounded-[1.5rem] overflow-hidden shadow-lg bg-[#FFFCF5] border border-[#E8DDC8] hover-lift">
                  <div className="relative aspect-[4/5] overflow-hidden zoom-img">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A28]/85 via-transparent to-transparent" />
                    {/* Role badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#FAF3E8]/90 backdrop-blur text-[10px] tracking-luxe text-[#4A1A28] font-medium">
                        {member.role.toUpperCase()}
                      </span>
                    </div>
                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FAF3E8]">
                      <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-sm text-[#6B5D4A] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  {/* Decorative corner */}
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full border border-[#E07856]/40 flex items-center justify-center text-[#E07856] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </article>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* Studio stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { num: "9", label: "Stylists" },
            { num: "2", label: "Studios" },
            { num: "12k+", label: "Balloons in Stock" },
            { num: "24/7", label: "On Call" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-[#4A1A28]/15 pt-4"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-[#4A1A28]">
                {s.num}
              </p>
              <p className="mt-1 text-xs tracking-luxe text-[#E07856] uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
