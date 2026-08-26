"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from "lucide-react";
import { useContent } from "@/components/admin/ContentProvider";

export default function Footer() {
  const { content } = useContent();
  const c = content;

  return (
    <footer className="relative bg-[#07261d] text-[#F7F1E8] overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-[#0B3D2E] via-[#B87333] to-[#E8B4B8]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-[#F7F1E8] flex items-center justify-center">
                <Image src={c.logoUrl} alt="One Touch Event Decor" fill className="object-contain p-1.5" />
              </div>
              <div className="leading-tight">
                <p className="font-script text-lg text-[#F7F1E8]">{c.brandScript}</p>
                <p className="font-display text-[10px] tracking-luxe text-[#E8B4B8]">{c.brandTagline}</p>
              </div>
            </div>
            <p className="text-sm text-[#F7F1E8]/70 leading-relaxed">{c.footerDesc}</p>
            <div className="flex gap-3 mt-5">
              <a href={c.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#F7F1E8]/30 flex items-center justify-center hover:bg-[#B87333] hover:border-[#B87333] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={c.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full border border-[#F7F1E8]/30 flex items-center justify-center hover:bg-[#B87333] hover:border-[#B87333] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#F7F1E8]/70">
              {[["Home", "#home"], ["About Us", "#about"], ["Services", "#services"], ["Family Functions", "#family"], ["Gallery", "#gallery"], ["Pricing", "#pricing"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#B87333] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#F7F1E8]/70">
              {c.services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#B87333] transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-[#F7F1E8]/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#B87333]" />
                <a href={`tel:${c.phone}`} className="hover:text-[#B87333] transition-colors">{c.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#B87333]" />
                <a href={`mailto:${c.email}`} className="hover:text-[#B87333] transition-colors break-all">{c.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#B87333]" />
                <span>{c.address}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#F7F1E8]/60">Mon–Sat · 10 AM – 8 PM</p>
          </div>
        </div>

        <div className="border-t border-[#F7F1E8]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F1E8]/60">
          <p>© {new Date().getFullYear()} {c.footerCopyright}</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-[#B87333] fill-[#B87333]" /> for unforgettable celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
