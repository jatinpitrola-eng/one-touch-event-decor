"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Check } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

export default function Booking() {
  const { content } = useContent();
  const c = content;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventType: "Wedding", date: "", location: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a WhatsApp message with all booking details
    const waNumber = c.whatsapp || "919327760140";
    const formatDate = (d: string) => {
      if (!d) return "Not specified";
      try {
        const dt = new Date(d);
        return dt.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
      } catch {
        return d;
      }
    };
    const msg =
      `*New Event Inquiry — One Touch Event Décor*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n\n` +
      `*Event Type:* ${form.eventType}\n` +
      `*Event Date:* ${formatDate(form.date)}\n` +
      `*Venue / Location:* ${form.location || "Not specified"}\n\n` +
      `*Vision / Requirements:*\n${form.message || "—"}\n\n` +
      `_Sent via onetouchballoondecoration.com_`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
    // Show success state on the form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", eventType: "Wedding", date: "", location: "", message: "" });
    }, 6000);
  };

  const INPUT_CLASS = "w-full bg-[#F7F1E8]/60 border border-[#E5D9C0] rounded-xl px-4 py-3 text-[#0B3D2E] placeholder:text-[#6B5D4A]/60 focus:outline-none focus:border-[#B87333] focus:ring-2 focus:ring-[#B87333]/30 transition-all";

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden">
      <span className="section-num absolute -top-8 left-4">12</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="luxe-divider mb-5">
              <span className="text-xs tracking-luxe font-medium">{c.bookingEyebrow}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3D2E] leading-[1.05]">
              {c.bookingTitle1}<br />
              <span className="font-script italic text-[#B87333]">{c.bookingTitle2}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-base md:text-lg text-[#6B5D4A] leading-relaxed max-w-md">
              {c.bookingSub}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 space-y-4">
              <a href={`tel:${c.phone}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0B3D2E] flex items-center justify-center group-hover:bg-[#B87333] transition-colors">
                  <Phone className="w-5 h-5 text-[#F7F1E8]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#B87333] uppercase">Call</p>
                  <p className="font-display text-lg text-[#0B3D2E]">{c.phone}</p>
                </div>
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0B3D2E] flex items-center justify-center group-hover:bg-[#B87333] transition-colors">
                  <Mail className="w-5 h-5 text-[#F7F1E8]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#B87333] uppercase">Email</p>
                  <p className="font-display text-lg text-[#0B3D2E]">{c.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#0B3D2E] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#F7F1E8]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#B87333] uppercase">Studio</p>
                  <p className="font-display text-lg text-[#0B3D2E]">{c.address}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex items-center gap-3">
              <a href={c.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#0B3D2E]/30 flex items-center justify-center text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-[#F7F1E8] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={c.facebook} aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#0B3D2E]/30 flex items-center justify-center text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-[#F7F1E8] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9 }} className="bg-[#FCFAF3] rounded-[1.5rem] p-6 md:p-10 shadow-xl border border-[#E5D9C0]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-6">
                  <Check className="w-10 h-10" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-[#0B3D2E]">{c.bookingSuccessTitle}</h3>
                <p className="mt-3 text-[#6B5D4A] max-w-sm">{c.bookingSuccessText}</p>
                <p className="mt-4 text-sm text-[#25D366] font-medium">
                  ✓ WhatsApp message sent to {c.phone || "+91 9327760140"}
                </p>
                <p className="mt-1 text-xs text-[#6B5D4A]">
                  Didn&apos;t open? Check your pop-up blocker or message us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Full Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Priya Sharma" className={`mt-1.5 ${INPUT_CLASS}`} />
                  </div>
                  <div>
                    <label className="admin-label">Phone</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" className={`mt-1.5 ${INPUT_CLASS}`} />
                  </div>
                </div>
                <div>
                  <label className="admin-label">Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="priya@example.com" className={`mt-1.5 ${INPUT_CLASS}`} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Event Type</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange} className={`mt-1.5 ${INPUT_CLASS}`}>
                      <option>Wedding</option><option>Birthday</option><option>Baby Shower</option>
                      <option>Corporate</option><option>Anniversary</option><option>Family Function</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="admin-label">Event Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} className={`mt-1.5 ${INPUT_CLASS}`} />
                  </div>
                </div>
                <div>
                  <label className="admin-label">Venue / Location</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Mumbai, India" className={`mt-1.5 ${INPUT_CLASS}`} />
                </div>
                <div>
                  <label className="admin-label">Tell Us About Your Vision</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Approx guest count, palette ideas, special requests..." className={`mt-1.5 ${INPUT_CLASS} resize-none`} />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0B3D2E] text-[#F7F1E8] tracking-wide rounded-full hover:bg-[#B87333] transition-all duration-500 shadow-lg">
                  Send Inquiry via WhatsApp <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-[#6B5D4A]">
                  Submitting opens WhatsApp with your details pre-filled · No deposit needed
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
