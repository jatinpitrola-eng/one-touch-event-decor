"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#2A0E18] text-[#FAF3E8] overflow-hidden">
      {/* Decorative top strip */}
      <div className="h-2 bg-gradient-to-r from-[#4A1A28] via-[#E07856] to-[#D4A5A5]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-[#FAF3E8] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="One Touch Event Decor"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="leading-tight">
                <p className="font-script text-lg text-[#FAF3E8]">One Touch</p>
                <p className="font-display text-[10px] tracking-luxe text-[#E8DDC8]">
                  EVENT DÉCOR
                </p>
              </div>
            </div>
            <p className="text-sm text-[#FAF3E8]/70 leading-relaxed">
              Bespoke balloon installations and luxury event décor. Turning
              ordinary celebrations into extraordinary memories since 2017.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#FAF3E8]/30 flex items-center justify-center hover:bg-[#E07856] hover:border-[#E07856] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#FAF3E8]/30 flex items-center justify-center hover:bg-[#E07856] hover:border-[#E07856] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#FAF3E8]/70">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Family Functions", "#family"],
                ["Gallery", "#gallery"],
                ["Pricing", "#pricing"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#E07856] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#FAF3E8]/70">
              {[
                "Wedding Décor",
                "Birthday Setup",
                "Baby Showers",
                "Corporate Events",
                "Anniversary Décor",
                "Custom Themes",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#E07856] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-[#FAF3E8]/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#E07856]" />
                <a href="tel:+919999999999" className="hover:text-[#E07856] transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#E07856]" />
                <a
                  href="mailto:hello@onetouchevents.in"
                  className="hover:text-[#E07856] transition-colors break-all"
                >
                  hello@onetouchevents.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E07856]" />
                <span>
                  Studio 12, Linking Road,
                  <br />
                  Bandra West, Mumbai 400050
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#FAF3E8]/60">
              Mon–Sat · 10 AM – 8 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FAF3E8]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF3E8]/60">
          <p>© {new Date().getFullYear()} One Touch Event Décor. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-[#E07856] fill-[#E07856]" /> for
            unforgettable celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
