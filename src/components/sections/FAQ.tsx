"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContent } from "@/components/admin/ContentProvider";

export default function FAQ() {
  const { content } = useContent();
  const c = content;

  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">11</span>

      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
            <span className="text-xs tracking-luxe font-medium">{c.faqEyebrow}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-tight">
            {c.faqTitle1}{" "}
            <span className="font-script italic text-[#B87333]">{c.faqTitle2}</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {c.faqs.map((item, i) => (
              <AccordionItem key={item.id} value={`item-${i}`} className="bg-[#FCFAF3] border border-[#E5D9C0] rounded-2xl px-5 md:px-6 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-[#0B3D2E] hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#6B5D4A] leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 text-center">
          <p className="text-[#6B5D4A] mb-3">{c.faqCtaText}</p>
          <a href="#booking" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B3D2E] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#B87333] transition-all duration-500">
            {c.faqCtaButton}
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
