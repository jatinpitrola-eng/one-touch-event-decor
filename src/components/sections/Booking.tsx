"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Check } from "lucide-react";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        eventType: "Wedding",
        date: "",
        location: "",
        message: "",
      });
    }, 4000);
  };

  const INPUT_CLASS =
    "w-full bg-[#FBF5EC]/60 border border-[#E5D9C4] rounded-xl px-4 py-3 text-[#1F3D34] placeholder:text-[#6B5D4A]/60 focus:outline-none focus:border-[#C97B5C] focus:ring-2 focus:ring-[#C97B5C]/30 transition-all";

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 bg-luxe-cream overflow-hidden"
    >
      <span className="section-num absolute -top-8 left-4">12</span>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: copy + contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="luxe-divider mb-5"
            >
              <span className="text-xs tracking-luxe font-medium">BOOK A CONSULTATION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3D34] leading-[1.05]"
            >
              Let&apos;s Plan
              <br />
              Your{" "}
              <span className="font-script italic text-[#C97B5C]">
                Moment
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-[#6B5D4A] leading-relaxed max-w-md"
            >
              Share a few details and our lead stylist will reach out within 24
              hours with ideas, a mood board, and a transparent quote. No
              deposit required for the first consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 space-y-4"
            >
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-[#1F3D34] flex items-center justify-center group-hover:bg-[#C97B5C] transition-colors">
                  <Phone className="w-5 h-5 text-[#FBF5EC]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#C97B5C] uppercase">Call</p>
                  <p className="font-display text-lg text-[#1F3D34]">+91 99999 99999</p>
                </div>
              </a>
              <a
                href="mailto:hello@onetouchevents.in"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-[#1F3D34] flex items-center justify-center group-hover:bg-[#C97B5C] transition-colors">
                  <Mail className="w-5 h-5 text-[#FBF5EC]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#C97B5C] uppercase">Email</p>
                  <p className="font-display text-lg text-[#1F3D34]">hello@onetouchevents.in</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#1F3D34] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#FBF5EC]" />
                </span>
                <div>
                  <p className="text-xs tracking-luxe text-[#C97B5C] uppercase">Studio</p>
                  <p className="font-display text-lg text-[#1F3D34]">Bandra West, Mumbai 400050</p>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#1F3D34]/30 flex items-center justify-center text-[#1F3D34] hover:bg-[#1F3D34] hover:text-[#FBF5EC] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#1F3D34]/30 flex items-center justify-center text-[#1F3D34] hover:bg-[#1F3D34] hover:text-[#FBF5EC] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="bg-[#FFFCF5] rounded-[1.5rem] p-6 md:p-10 shadow-xl border border-[#E5D9C4]"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-[#1F3D34] text-[#FBF5EC] flex items-center justify-center mb-6"
                >
                  <Check className="w-10 h-10" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-[#1F3D34]">
                  Inquiry Received!
                </h3>
                <p className="mt-3 text-[#6B5D4A] max-w-sm">
                  Our lead stylist will personally reach out within 24 hours to
                  begin crafting your bespoke experience.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className={`mt-1.5 ${INPUT_CLASS}`}
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className={`mt-1.5 ${INPUT_CLASS}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                    className={`mt-1.5 ${INPUT_CLASS}`}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className={`mt-1.5 ${INPUT_CLASS}`}
                    >
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Baby Shower</option>
                      <option>Corporate</option>
                      <option>Anniversary</option>
                      <option>Family Function</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={`mt-1.5 ${INPUT_CLASS}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                    Venue / Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Mumbai, India"
                    className={`mt-1.5 ${INPUT_CLASS}`}
                  />
                </div>

                <div>
                  <label className="text-xs tracking-wide-luxe text-[#1F3D34] uppercase">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Approx guest count, palette ideas, special requests..."
                    className={`mt-1.5 ${INPUT_CLASS} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#1F3D34] text-[#FBF5EC] tracking-wide rounded-full hover:bg-[#C97B5C] transition-all duration-500 shadow-lg"
                >
                  Send My Inquiry
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-[#6B5D4A]">
                  We reply within 24 hours · No deposit for first consultation
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
