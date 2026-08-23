"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-card shadow-[0_8px_32px_-12px_rgba(31,61,52,0.18)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="One Touch Event Decor"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-script text-lg text-[#1F3D34]">One Touch</p>
              <p className="font-display text-[10px] tracking-luxe text-[#C97B5C]">
                EVENT DÉCOR
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-sm tracking-wide text-[#1F3D34] underline-draw hover:text-[#C97B5C] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-[#1F3D34] text-sm hover:text-[#C97B5C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 99999 99999</span>
            </a>
            <a
              href="#booking"
              className="px-5 py-2.5 bg-[#1F3D34] text-[#FBF5EC] text-sm tracking-wide rounded-full hover:bg-[#C97B5C] transition-colors duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 text-[#1F3D34]"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#1F3D34]/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-luxe-cream shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#E5D9C4]">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain p-1" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-script text-base text-[#1F3D34]">One Touch</p>
                    <p className="font-display text-[9px] tracking-luxe text-[#C97B5C]">
                      EVENT DÉCOR
                    </p>
                  </div>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 text-[#1F3D34]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex-1 flex flex-col p-6 gap-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-display text-2xl text-[#1F3D34] border-b border-[#E5D9C4]/60 hover:text-[#C97B5C] transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 pt-0">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-[#1F3D34] text-[#FBF5EC] tracking-wide rounded-full hover:bg-[#C97B5C] transition-colors"
                >
                  Book a Consultation
                </a>
                <a
                  href="tel:+919999999999"
                  className="mt-3 flex items-center justify-center gap-2 text-[#1F3D34] text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 99999 99999
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
