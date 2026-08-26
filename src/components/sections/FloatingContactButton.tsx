"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

/**
 * FloatingContactButton — sticky WhatsApp + Call + Scroll-to-top buttons.
 * Uses phone + whatsapp from content (editable via admin panel).
 */
export default function FloatingContactButton() {
  const { content } = useContent();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Build WhatsApp link from content
  const whatsappNumber = content.whatsapp || "919327760140";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20One%20Touch%2C%20I'd%20like%20to%20discuss%20an%20event%20decoration`;
  const callLink = `tel:${content.phone || "+919327760140"}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
        >
          {/* Scroll-to-top */}
          <button
            aria-label="Scroll to top"
            onClick={scrollTop}
            className="w-11 h-11 rounded-full bg-[#FCFAF3] border border-[#E5D9C0] text-[#0B3D2E] flex items-center justify-center shadow-lg hover:bg-[#0B3D2E] hover:text-[#F7F1E8] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0B3D2E] text-[#F7F1E8] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat on WhatsApp
            </span>
          </a>

          {/* Call */}
          <a
            href={callLink}
            aria-label="Call us"
            className="w-14 h-14 rounded-full bg-[#B87333] text-[#F7F1E8] flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative"
          >
            <Phone className="w-5 h-5" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0B3D2E] text-[#F7F1E8] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {content.phone || "+91 9327760140"}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
