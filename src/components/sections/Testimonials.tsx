"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya & Arjun Mehta",
    event: "Wedding · Udaipur",
    rating: 5,
    text: "One Touch transformed our wedding mandap into a living garden. Guests are still talking about it months later. The team understood our vision in the very first call and elevated it beyond what we imagined possible.",
  },
  {
    name: "Sneha Kapoor",
    event: "Daughter's 1st Birthday",
    rating: 5,
    text: "From the cloud-themed entrance to the dessert table backdrop, every single detail was perfect. My daughter kept pointing at the balloons and laughing. Worth every rupee and then some.",
  },
  {
    name: "Rohit Sharma, HDFC Life",
    event: "Annual Conference",
    rating: 5,
    text: "We've worked with many decorators over the years. None match One Touch for professionalism and creative ambition. They built a 20-foot stage backdrop overnight without disrupting the venue.",
  },
  {
    name: "Ananya Iyer",
    event: "Baby Shower",
    rating: 5,
    text: "Soft, dreamy, and completely Instagram-worthy. The pastel garland was so lush my mother-in-law asked if the flowers were real. Cannot recommend enough.",
  },
  {
    name: "Vikram & Reshma Rao",
    event: "25th Anniversary",
    rating: 5,
    text: "They recreated our wedding colours from a faded 25-year-old photograph. My husband cried when he walked in. That's all you need to know about One Touch.",
  },
  {
    name: "Kavya Reddy",
    event: "Engagement",
    rating: 5,
    text: "Booked them 3 weeks before the function. They delivered a custom-built backdrop, aisle florals, and entrance arch in 5 days. Magic workers, honestly.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % REVIEWS.length);
  const prev = () => setIdx((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[idx];

  return (
    <section className="relative py-24 md:py-32 bg-luxe-blush overflow-hidden">
      <span className="section-num absolute -top-8 left-4">08</span>

      {/* Decorative big quote */}
      <Quote
        className="absolute top-10 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 text-[#1F3D34]/8"
        strokeWidth={1}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-5"
        >
          <span className="block w-10 h-px bg-[#1F3D34]" />
          <span className="text-xs tracking-luxe font-medium text-[#1F3D34]">
            KIND WORDS
          </span>
          <span className="block w-10 h-px bg-[#1F3D34]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3D34] leading-tight mb-12"
        >
          Loved by Families,
          <br />
          <span className="font-script italic text-[#C97B5C]">
            Trusted by Brands
          </span>
        </motion.h2>

        {/* Review card */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass-card rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C97B5C] text-[#C97B5C]" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-[#1F3D34] leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-display text-lg font-bold text-[#1F3D34]">
                  {r.name}
                </p>
                <p className="text-xs tracking-wide-luxe text-[#C97B5C] mt-1 uppercase">
                  {r.event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous review"
            onClick={prev}
            className="w-12 h-12 rounded-full bg-[#1F3D34] text-[#FBF5EC] flex items-center justify-center hover:bg-[#C97B5C] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                aria-label={`Review ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-[#1F3D34]" : "w-2 bg-[#1F3D34]/30"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next review"
            onClick={next}
            className="w-12 h-12 rounded-full bg-[#1F3D34] text-[#FBF5EC] flex items-center justify-center hover:bg-[#C97B5C] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
