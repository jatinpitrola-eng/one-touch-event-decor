'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Instagram, Mail } from 'lucide-react';

/**
 * Floating contact button — appears after scrolling, expands to show
 * quick contact options. Adds an authentic, premium service feel.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <>
                {[
                  { icon: Phone, label: 'Call us', href: 'tel:+919876543210', color: 'bg-emerald' },
                  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210', color: 'bg-blush' },
                  { icon: Instagram, label: 'Instagram', href: '#', color: 'bg-copper' },
                  { icon: Mail, label: 'Email', href: 'mailto:hello@onetouchdecor.com', color: 'bg-emerald-deep' },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 30, scale: 0.5 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.5 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="rounded-full bg-card px-3 py-1.5 text-xs font-medium text-charcoal shadow-luxe">
                      {item.label}
                    </span>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full text-cream shadow-luxe ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </span>
                  </motion.a>
                ))}
              </>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            aria-label="Quick contact"
            className={`flex h-14 w-14 items-center justify-center rounded-full text-cream shadow-luxe transition-colors pulse-glow ${
              open ? 'bg-charcoal' : 'bg-emerald hover:bg-emerald-deep'
            }`}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <MessageCircle className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
