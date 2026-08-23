"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How early should I book my event?",
    a: "For weddings and large celebrations, we recommend booking 8–12 weeks in advance to secure your date and allow ample design time. For birthdays, baby showers, and smaller functions, 3–4 weeks is usually sufficient. Last-minute requests (under 7 days) are accepted based on availability and may carry a 15% express fee.",
  },
  {
    q: "Do you travel for destination events?",
    a: "Absolutely. We've styled events across India — from Udaipur palace weddings to Goa beach parties and Bangalore corporate galas. Travel, accommodation, and logistics are quoted transparently in your final proposal. For international destinations, please reach us 4+ months in advance.",
  },
  {
    q: "Can I see my design before the event day?",
    a: "Yes. Every Signature and Bespoke package includes a custom mood board and layout sketch delivered 48 hours after your consultation. We refine together over email or video call until you're completely happy. For Essential package clients, we share a colour palette reference and reference image gallery.",
  },
  {
    q: "What happens if a balloon pops during my event?",
    a: "We pre-inflate and quality-check every balloon overnight before your event. Our latex balloons have a 72+ hour float time. In the rare case something deflates, we leave a small emergency repair kit on-site for Essential clients, and a stylist stays on standby within 30 minutes for Signature and Bespoke packages.",
  },
  {
    q: "Do you offer payment plans or EMI?",
    a: "Yes. We accept 25% advance to block your date, 50% two weeks before the event, and 25% on installation day. For Bespoke packages above ₹1 lakh, we offer 3-month no-interest EMI plans via select banking partners. Ask us during your consultation for details.",
  },
  {
    q: "Are your materials safe for children and pets?",
    a: "All our latex balloons are 100% biodegradable natural rubber and safe for indoor use. We use only helium-grade inflation for ceiling installations (never hydrogen). Foil balloons are kept out of reach of children and pets. We brief every client on safe disposal and offer post-event balloon pickup free of charge.",
  },
  {
    q: "Can you work with a specific theme or colour palette?",
    a: "That's our specialty. Bring us a Pinterest board, a wedding outfit swatch, your brand colours, or even a faded old photo — and we'll custom-mix balloon shades to match. Bespoke package clients receive up to 9 custom-mixed shades included in their quote.",
  },
  {
    q: "Do you handle teardown after the event?",
    a: "Yes, every package includes teardown. Our crew returns the next morning (or after the event end-time) to dismantle, clean, and responsibly dispose of all installations. There is no extra charge for this — it's part of our service.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 right-4">11</span>

      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxe-divider mb-5"
          >
            <span className="text-xs tracking-luxe font-medium">QUESTIONS, ANSWERED</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A1A28] leading-tight"
          >
            Before You{" "}
            <span className="font-script italic text-[#E07856]">Ask Us</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#FFFCF5] border border-[#E8DDC8] rounded-2xl px-5 md:px-6 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-[#4A1A28] hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#6B5D4A] leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-[#6B5D4A] mb-3">Still have a question?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A1A28] text-[#FAF3E8] tracking-wide rounded-full hover:bg-[#E07856] transition-all duration-500"
          >
            Chat With Us
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
