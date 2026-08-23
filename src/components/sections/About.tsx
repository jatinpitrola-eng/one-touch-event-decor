"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Leaf, Award } from "lucide-react";
import { IMAGES } from "@/lib/images";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Bespoke Designs",
    text: "Every installation begins with a blank canvas. No templates, no shortcuts — only original concepts tailored to your story.",
  },
  {
    icon: Leaf,
    title: "Premium Materials",
    text: "We source luxury-grade balloons, silks, and floral elements from trusted artisans worldwide for unmatched finish.",
  },
  {
    icon: Award,
    title: "White-Glove Service",
    text: "From first consultation to teardown, our team manages every detail with discretion and obsessive attention.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      {/* Big watermark number */}
      <span className="section-num absolute -top-8 right-4 select-none">01</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] sm:h-[560px] md:h-[620px]"
          >
            <div className="absolute top-0 left-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl zoom-img">
              <Image
                src={IMAGES.event[0]}
                alt="Elegant balloon decoration by One Touch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 65vw, 30vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#FBF5EC] zoom-img">
              <Image
                src={IMAGES.family[0]}
                alt="Family function balloon decor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 28vw"
              />
            </div>
            {/* Floating leaf badge */}
            <div className="absolute top-1/2 right-2 md:right-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#C97B5C] flex flex-col items-center justify-center text-[#FBF5EC] shadow-xl">
              <span className="font-script text-2xl md:text-3xl leading-none">Since</span>
              <span className="font-display text-3xl md:text-4xl font-bold leading-none">2017</span>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="luxe-divider mb-5"
            >
              <span className="text-xs tracking-luxe font-medium">OUR STORY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3D34] leading-[1.05]"
            >
              Where Artistry
              <br />
              Meets{" "}
              <span className="font-script text-[#C97B5C] italic">Celebration</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
            >
              One Touch Event Décor was born from a simple belief — that every
              celebration deserves to feel extraordinary. What began as a single
              balloon arch in a friend&apos;s backyard has grown into a full-service
              luxury décor studio trusted by families, brands, and brides across
              the country.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-[#6B5D4A] leading-relaxed"
            >
              Our signature lies in the unseen details — the curve of an arch,
              the weight of a garland, the harmony of a palette. We don&apos;t
              decorate spaces; we compose experiences that linger long after the
              last guest has gone home.
            </motion.p>

            {/* Pillars */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1F3D34]/8 flex items-center justify-center mb-3 group-hover:bg-[#C97B5C] transition-colors">
                    <p.icon className="w-5 h-5 text-[#1F3D34] group-hover:text-[#FBF5EC] transition-colors" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#1F3D34]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#6B5D4A] leading-relaxed">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
