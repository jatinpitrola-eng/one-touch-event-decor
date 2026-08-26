"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Save, RotateCcw, Upload, Plus, Trash2, ChevronDown, ChevronRight,
  Home, Sparkles, Users, Image as ImageIcon, Star, DollarSign,
  HelpCircle, Phone, FileText, Settings, Eye, EyeOff, Check, Copy
} from "lucide-react";
import { useContent } from "./ContentProvider";
import { SiteContent } from "@/lib/content";
import ImageUpload from "./ImageUpload";

type Tab =
  | "brand" | "hero" | "stats" | "about" | "services"
  | "family" | "decor" | "masterpiece" | "studio" | "process"
  | "gallery" | "testimonials" | "pricing" | "why"
  | "faq" | "finalcta" | "booking" | "footer" | "publish" | "uploads";

const TABS: { id: Tab; label: string; icon: any }[] = [
  { id: "uploads", label: "Image Library", icon: ImageIcon },
  { id: "brand", label: "Brand & Contact", icon: Home },
  { id: "hero", label: "Hero Section", icon: Sparkles },
  { id: "stats", label: "Stats Bar", icon: Star },
  { id: "about", label: "About Section", icon: FileText },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "family", label: "Family Functions", icon: Users },
  { id: "decor", label: "Decor Styles", icon: Sparkles },
  { id: "masterpiece", label: "Masterpiece", icon: Star },
  { id: "studio", label: "Behind Studio", icon: Users },
  { id: "process", label: "Process", icon: FileText },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "why", label: "Why Choose Us", icon: Sparkles },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "finalcta", label: "Final CTA", icon: Sparkles },
  { id: "booking", label: "Booking", icon: FileText },
  { id: "footer", label: "Footer", icon: FileText },
  { id: "publish", label: "Publish Changes", icon: Upload },
];

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const { content, update, reset, isLoaded } = useContent();
  const [activeTab, setActiveTab] = useState<Tab>("hero");
  const [saved, setSaved] = useState(false);

  if (!isLoaded) return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 220 }}
      className="fixed inset-0 z-[150] bg-[#F7F1E8] flex"
    >
      {/* Sidebar */}
      <aside className="w-64 md:w-72 bg-[#0B3D2E] text-[#F7F1E8] flex flex-col h-full overflow-hidden">
        <div className="p-5 border-b border-[#2E5D43] flex items-center justify-between">
          <div>
            <p className="font-script text-lg text-[#E8B4B8]">One Touch</p>
            <h2 className="font-display text-lg font-bold">Admin Panel</h2>
          </div>
          <button
            aria-label="Close admin panel"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F7F1E8]/10 hover:bg-[#B87333] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-[#B87333] text-[#F7F1E8]"
                  : "text-[#F7F1E8]/70 hover:bg-[#2E5D43] hover:text-[#F7F1E8]"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-left">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-[#2E5D43] space-y-2">
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#B87333] text-[#F7F1E8] rounded-lg text-sm font-medium hover:bg-[#C68A4E] transition-colors"
          >
            {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saved ? "Saved!" : "Save Changes"}
          </button>
          <button
            onClick={() => {
              if (confirm("Reset all content to defaults? This cannot be undone.")) {
                reset();
              }
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F1E8]/10 text-[#F7F1E8] rounded-lg text-sm hover:bg-[#F7F1E8]/20 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Defaults
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-[#F7F1E8]">
        <div className="max-w-3xl mx-auto p-6 md:p-10">
          <TabContent
            tab={activeTab}
            content={content}
            update={update}
          />
        </div>
      </main>
    </motion.div>
  );
}

// ============================================
// Tab content renderer
// ============================================
function TabContent({
  tab,
  content,
  update,
}: {
  tab: Tab;
  content: SiteContent;
  update: (path: string, value: any) => void;
}) {
  switch (tab) {
    case "uploads": return <UploadsTab />;
    case "brand": return <BrandTab content={content} update={update} />;
    case "hero": return <HeroTab content={content} update={update} />;
    case "stats": return <StatsTab content={content} update={update} />;
    case "about": return <AboutTab content={content} update={update} />;
    case "services": return <ServicesTab content={content} update={update} />;
    case "family": return <FamilyTab content={content} update={update} />;
    case "decor": return <DecorTab content={content} update={update} />;
    case "masterpiece": return <MasterpieceTab content={content} update={update} />;
    case "studio": return <StudioTab content={content} update={update} />;
    case "process": return <ProcessTab content={content} update={update} />;
    case "gallery": return <GalleryTab content={content} update={update} />;
    case "testimonials": return <TestimonialsTab content={content} update={update} />;
    case "pricing": return <PricingTab content={content} update={update} />;
    case "why": return <WhyTab content={content} update={update} />;
    case "faq": return <FaqTab content={content} update={update} />;
    case "finalcta": return <FinalCtaTab content={content} update={update} />;
    case "booking": return <BookingTab content={content} update={update} />;
    case "footer": return <FooterTab content={content} update={update} />;
    case "publish": return <PublishTab />;
    default: return null;
  }
}

// ============================================
// Reusable form components
// ============================================
function Field({
  label, value, onChange, type = "text", placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="admin-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="admin-input"
      />
    </div>
  );
}

function TextArea({
  label, value, onChange, rows = 4,
}: {
  label: string; value: string; onChange: (v: string) => void; rows?: number;
}) {
  return (
    <div>
      <label className="admin-label">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="admin-input resize-y"
      />
    </div>
  );
}

function ImageField({
  label, value, onChange,
}: {
  label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="admin-label">{label}</label>
      <div className="flex gap-3">
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://... or /uploads/..."
          className="admin-input flex-1"
        />
        {value && (
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#E5D9C0] shrink-0">
            <img src={value} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      <ImageUpload currentUrl={value} onUploadSuccess={onChange} />
    </div>
  );
}

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-2xl font-bold text-[#0B3D2E]">{title}</h2>
      {sub && <p className="text-sm text-[#6B5D4A] mt-1">{sub}</p>}
    </div>
  );
}

function ItemCard({
  title, onDelete, children,
}: {
  title: string; onDelete?: () => void; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-[#E5D9C0] rounded-xl bg-[#FCFAF3] overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-[#F0E8D8]">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-medium text-[#0B3D2E]"
        >
          {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          {title}
        </button>
        {onDelete && (
          <button
            onClick={onDelete}
            className="w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors"
            aria-label="Delete"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {open && <div className="p-4 space-y-3">{children}</div>}
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-[#B87333]/40 text-[#B87333] rounded-xl hover:bg-[#B87333]/5 transition-colors text-sm font-medium"
    >
      <Plus className="w-4 h-4" />
      {label}
    </button>
  );
}

// ============================================
// Individual tab components
// ============================================
function BrandTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Brand & Contact Info" sub="Your business name, logo, and contact details shown across the site." />
      <Field label="Brand Name (script font)" value={content.brandScript} onChange={(v) => update("brandScript", v)} />
      <Field label="Brand Tagline (small caps)" value={content.brandTagline} onChange={(v) => update("brandTagline", v)} />
      <ImageField label="Logo URL" value={content.logoUrl} onChange={(v) => update("logoUrl", v)} />
      <Field label="Phone Number" value={content.phone} onChange={(v) => update("phone", v)} />
      <Field label="Email Address" value={content.email} onChange={(v) => update("email", v)} />
      <TextArea label="Studio Address" value={content.address} onChange={(v) => update("address", v)} rows={2} />
      <Field label="Instagram URL" value={content.instagram} onChange={(v) => update("instagram", v)} />
      <Field label="Facebook URL" value={content.facebook} onChange={(v) => update("facebook", v)} />
    </div>
  );
}

function HeroTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Hero Section" sub="The first thing visitors see. Make it dramatic." />
      <Field label="Eyebrow Text" value={content.heroEyebrow} onChange={(v) => update("heroEyebrow", v)} />
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Headline Line 1" value={content.heroLine1} onChange={(v) => update("heroLine1", v)} />
        <Field label="Headline Line 2" value={content.heroLine2} onChange={(v) => update("heroLine2", v)} />
        <Field label="Headline Line 3 (script)" value={content.heroLine3} onChange={(v) => update("heroLine3", v)} />
      </div>
      <TextArea label="Subtitle" value={content.heroSub} onChange={(v) => update("heroSub", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Primary Button" value={content.heroCta1} onChange={(v) => update("heroCta1", v)} />
        <Field label="Secondary Button" value={content.heroCta2} onChange={(v) => update("heroCta2", v)} />
      </div>
      <ImageField label="Main Hero Image" value={content.heroImage1} onChange={(v) => update("heroImage1", v)} />
      <ImageField label="Secondary Hero Image" value={content.heroImage2} onChange={(v) => update("heroImage2", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Badge Text" value={content.heroBadgeText} onChange={(v) => update("heroBadgeText", v)} />
        <Field label="Badge Subtext" value={content.heroBadgeSub} onChange={(v) => update("heroBadgeSub", v)} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Price Label" value={content.heroPriceLabel} onChange={(v) => update("heroPriceLabel", v)} />
        <Field label="Price Value" value={content.heroPriceValue} onChange={(v) => update("heroPriceValue", v)} />
        <Field label="Price Subtext" value={content.heroPriceSub} onChange={(v) => update("heroPriceSub", v)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Stats Text" value={content.heroStats} onChange={(v) => update("heroStats", v)} />
        <Field label="Rating Text" value={content.heroStatsRating} onChange={(v) => update("heroStatsRating", v)} />
      </div>
    </div>
  );
}

function StatsTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Stats Bar" sub="The four numbers that build trust." />
      {content.stats.map((s, i) => (
        <ItemCard key={i} title={`Stat ${i + 1}: ${s.label}`} onDelete={() => update(`stats[${i}]`, null)}>
          <Field label="Value (number)" value={String(s.value)} onChange={(v) => update(`stats[${i}].value`, parseInt(v) || 0)} type="number" />
          <Field label="Suffix (e.g. +, %, yrs)" value={s.suffix} onChange={(v) => update(`stats[${i}].suffix`, v)} />
          <Field label="Label" value={s.label} onChange={(v) => update(`stats[${i}].label`, v)} />
        </ItemCard>
      ))}
      <AddButton label="Add New Stat" onClick={() => update(`stats[${content.stats.length}]`, { value: 0, suffix: "+", label: "New Stat" })} />
    </div>
  );
}

function AboutTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="About Section" sub="Your brand story." />
      <Field label="Eyebrow" value={content.aboutEyebrow} onChange={(v) => update("aboutEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.aboutTitle1} onChange={(v) => update("aboutTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.aboutTitle2} onChange={(v) => update("aboutTitle2", v)} />
      </div>
      <TextArea label="Paragraph 1" value={content.aboutP1} onChange={(v) => update("aboutP1", v)} />
      <TextArea label="Paragraph 2" value={content.aboutP2} onChange={(v) => update("aboutP2", v)} />
      <ImageField label="Image 1" value={content.aboutImage1} onChange={(v) => update("aboutImage1", v)} />
      <ImageField label="Image 2" value={content.aboutImage2} onChange={(v) => update("aboutImage2", v)} />
      <Field label="Since Year (badge)" value={content.aboutSince} onChange={(v) => update("aboutSince", v)} />
      <h3 className="font-display text-lg font-bold text-[#0B3D2E] pt-4">Pillars</h3>
      {content.aboutPillars.map((p, i) => (
        <ItemCard key={i} title={p.title} onDelete={() => update(`aboutPillars[${i}]`, null)}>
          <Field label="Icon (lucide name)" value={p.icon} onChange={(v) => update(`aboutPillars[${i}].icon`, v)} />
          <Field label="Title" value={p.title} onChange={(v) => update(`aboutPillars[${i}].title`, v)} />
          <TextArea label="Text" value={p.text} onChange={(v) => update(`aboutPillars[${i}].text`, v)} rows={3} />
        </ItemCard>
      ))}
    </div>
  );
}

function ServicesTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Services" sub="Your signature service offerings." />
      <Field label="Eyebrow" value={content.servicesEyebrow} onChange={(v) => update("servicesEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.servicesTitle1} onChange={(v) => update("servicesTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.servicesTitle2} onChange={(v) => update("servicesTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.servicesSub} onChange={(v) => update("servicesSub", v)} />
      <Field label="CTA Text" value={content.servicesCtaText} onChange={(v) => update("servicesCtaText", v)} />
      <Field label="CTA Button" value={content.servicesCtaButton} onChange={(v) => update("servicesCtaButton", v)} />
      {content.services.map((s, i) => (
        <ItemCard key={s.id} title={`Service: ${s.title}`} onDelete={() => update(`services[${i}]`, null)}>
          <Field label="Icon (lucide name)" value={s.icon} onChange={(v) => update(`services[${i}].icon`, v)} />
          <Field label="Title" value={s.title} onChange={(v) => update(`services[${i}].title`, v)} />
          <Field label="Tagline" value={s.tagline} onChange={(v) => update(`services[${i}].tagline`, v)} />
          <TextArea label="Description" value={s.desc} onChange={(v) => update(`services[${i}].desc`, v)} rows={3} />
          <ImageField label="Image" value={s.image} onChange={(v) => update(`services[${i}].image`, v)} />
          <Field label="Grid Span (Tailwind classes)" value={s.span} onChange={(v) => update(`services[${i}].span`, v)} />
        </ItemCard>
      ))}
      <AddButton label="Add New Service" onClick={() => update(`services[${content.services.length}]`, { id: `s${Date.now()}`, icon: "Sparkles", title: "New Service", tagline: "Tagline", desc: "Description", image: "", span: "" })} />
    </div>
  );
}

function FamilyTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Family Functions" sub="Section about family celebrations." />
      <Field label="Eyebrow" value={content.familyEyebrow} onChange={(v) => update("familyEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.familyTitle1} onChange={(v) => update("familyTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.familyTitle2} onChange={(v) => update("familyTitle2", v)} />
      </div>
      <TextArea label="Paragraph" value={content.familyP} onChange={(v) => update("familyP", v)} />
      <ImageField label="Image 1" value={content.familyImage1} onChange={(v) => update("familyImage1", v)} />
      <ImageField label="Image 2" value={content.familyImage2} onChange={(v) => update("familyImage2", v)} />
      <Field label="CTA Button" value={content.familyCtaButton} onChange={(v) => update("familyCtaButton", v)} />
      <Field label="Testimonial Text" value={content.familyTestimonialText} onChange={(v) => update("familyTestimonialText", v)} />
      <Field label="Testimonial Name" value={content.familyTestimonialName} onChange={(v) => update("familyTestimonialName", v)} />
      <h3 className="font-display text-lg font-bold text-[#0B3D2E] pt-4">Moments</h3>
      {content.familyMoments.map((m, i) => (
        <ItemCard key={i} title={m.title} onDelete={() => update(`familyMoments[${i}]`, null)}>
          <Field label="Icon" value={m.icon} onChange={(v) => update(`familyMoments[${i}].icon`, v)} />
          <Field label="Title" value={m.title} onChange={(v) => update(`familyMoments[${i}].title`, v)} />
          <TextArea label="Description" value={m.desc} onChange={(v) => update(`familyMoments[${i}].desc`, v)} rows={2} />
        </ItemCard>
      ))}
    </div>
  );
}

function DecorTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Decor Styles" sub="Six forms of balloon artistry." />
      <Field label="Eyebrow" value={content.decorEyebrow} onChange={(v) => update("decorEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.decorTitle1} onChange={(v) => update("decorTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.decorTitle2} onChange={(v) => update("decorTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.decorSub} onChange={(v) => update("decorSub", v)} />
      {content.decorStyles.map((d, i) => (
        <ItemCard key={d.id} title={d.name} onDelete={() => update(`decorStyles[${i}]`, null)}>
          <Field label="Name" value={d.name} onChange={(v) => update(`decorStyles[${i}].name`, v)} />
          <TextArea label="Description" value={d.desc} onChange={(v) => update(`decorStyles[${i}].desc`, v)} rows={2} />
          <ImageField label="Image" value={d.image} onChange={(v) => update(`decorStyles[${i}].image`, v)} />
        </ItemCard>
      ))}
      <AddButton label="Add New Style" onClick={() => update(`decorStyles[${content.decorStyles.length}]`, { id: `d${Date.now()}`, name: "New Style", desc: "Description", image: "" })} />
    </div>
  );
}

function MasterpieceTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Masterpiece" sub="Featured installation spotlight." />
      <Field label="Eyebrow" value={content.masterpieceEyebrow} onChange={(v) => update("masterpieceEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.masterpieceTitle1} onChange={(v) => update("masterpieceTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.masterpieceTitle2} onChange={(v) => update("masterpieceTitle2", v)} />
      </div>
      <ImageField label="Masterpiece Image" value={content.masterpieceImage} onChange={(v) => update("masterpieceImage", v)} />
      <TextArea label="Quote" value={content.masterpieceQuote} onChange={(v) => update("masterpieceQuote", v)} />
      <Field label="Meta Label" value={content.masterpieceMeta} onChange={(v) => update("masterpieceMeta", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Materials Label" value={content.masterpieceMaterials} onChange={(v) => update("masterpieceMaterials", v)} />
        <Field label="Materials Value" value={content.masterpieceMaterialsValue} onChange={(v) => update("masterpieceMaterialsValue", v)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Shades Label" value={content.masterpieceShades} onChange={(v) => update("masterpieceShades", v)} />
        <Field label="Shades Value" value={content.masterpieceShadesValue} onChange={(v) => update("masterpieceShadesValue", v)} />
      </div>
      <h3 className="font-display text-lg font-bold text-[#0B3D2E] pt-4">Specs</h3>
      {content.masterpieceSpecs.map((s, i) => (
        <ItemCard key={i} title={s.label}>
          <Field label="Number" value={s.num} onChange={(v) => update(`masterpieceSpecs[${i}].num`, v)} />
          <Field label="Label" value={s.label} onChange={(v) => update(`masterpieceSpecs[${i}].label`, v)} />
        </ItemCard>
      ))}
    </div>
  );
}

function StudioTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Behind The Studio" sub="Your team members." />
      <Field label="Eyebrow" value={content.studioEyebrow} onChange={(v) => update("studioEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.studioTitle1} onChange={(v) => update("studioTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.studioTitle2} onChange={(v) => update("studioTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.studioSub} onChange={(v) => update("studioSub", v)} />
      {content.studioTeam.map((t, i) => (
        <ItemCard key={t.id} title={t.name} onDelete={() => update(`studioTeam[${i}]`, null)}>
          <Field label="Name" value={t.name} onChange={(v) => update(`studioTeam[${i}].name`, v)} />
          <Field label="Role" value={t.role} onChange={(v) => update(`studioTeam[${i}].role`, v)} />
          <TextArea label="Bio" value={t.bio} onChange={(v) => update(`studioTeam[${i}].bio`, v)} rows={3} />
          <ImageField label="Photo" value={t.image} onChange={(v) => update(`studioTeam[${i}].image`, v)} />
        </ItemCard>
      ))}
      <AddButton label="Add Team Member" onClick={() => update(`studioTeam[${content.studioTeam.length}]`, { id: `t${Date.now()}`, name: "New Member", role: "Role", bio: "Bio", image: "" })} />
    </div>
  );
}

function ProcessTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Process" sub="How it works steps." />
      <Field label="Eyebrow" value={content.processEyebrow} onChange={(v) => update("processEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.processTitle1} onChange={(v) => update("processTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.processTitle2} onChange={(v) => update("processTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.processSub} onChange={(v) => update("processSub", v)} />
      {content.processSteps.map((p, i) => (
        <ItemCard key={p.id} title={`Step ${p.step}: ${p.title}`}>
          <Field label="Icon" value={p.icon} onChange={(v) => update(`processSteps[${i}].icon`, v)} />
          <Field label="Step Number" value={p.step} onChange={(v) => update(`processSteps[${i}].step`, v)} />
          <Field label="Title" value={p.title} onChange={(v) => update(`processSteps[${i}].title`, v)} />
          <TextArea label="Description" value={p.desc} onChange={(v) => update(`processSteps[${i}].desc`, v)} rows={3} />
        </ItemCard>
      ))}
    </div>
  );
}

function GalleryTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Gallery" sub="Your photo gallery. Add, edit, or remove items." />
      <Field label="Eyebrow" value={content.galleryEyebrow} onChange={(v) => update("galleryEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.galleryTitle1} onChange={(v) => update("galleryTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.galleryTitle2} onChange={(v) => update("galleryTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.gallerySub} onChange={(v) => update("gallerySub", v)} />
      {content.gallery.map((g, i) => (
        <ItemCard key={g.id} title={`${g.title} (${g.category})`} onDelete={() => update(`gallery[${i}]`, null)}>
          <Field label="Title" value={g.title} onChange={(v) => update(`gallery[${i}].title`, v)} />
          <div>
            <label className="admin-label">Category</label>
            <select
              value={g.category}
              onChange={(e) => update(`gallery[${i}].category`, e.target.value)}
              className="admin-input"
            >
              {["Weddings", "Birthdays", "Baby Showers", "Corporate", "Family", "Anniversary"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <ImageField label="Image URL" value={g.url} onChange={(v) => update(`gallery[${i}].url`, v)} />
        </ItemCard>
      ))}
      <AddButton label="Add Gallery Image" onClick={() => update(`gallery[${content.gallery.length}]`, { id: `g${Date.now()}`, url: "", category: "Weddings", title: "New Image" })} />
    </div>
  );
}

function TestimonialsTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Testimonials" sub="Client reviews." />
      <Field label="Eyebrow" value={content.testimonialsEyebrow} onChange={(v) => update("testimonialsEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.testimonialsTitle1} onChange={(v) => update("testimonialsTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.testimonialsTitle2} onChange={(v) => update("testimonialsTitle2", v)} />
      </div>
      {content.testimonials.map((t, i) => (
        <ItemCard key={t.id} title={t.name} onDelete={() => update(`testimonials[${i}]`, null)}>
          <Field label="Name" value={t.name} onChange={(v) => update(`testimonials[${i}].name`, v)} />
          <Field label="Event" value={t.event} onChange={(v) => update(`testimonials[${i}].event`, v)} />
          <Field label="Rating (1-5)" value={String(t.rating)} onChange={(v) => update(`testimonials[${i}].rating`, parseInt(v) || 5)} type="number" />
          <TextArea label="Testimonial Text" value={t.text} onChange={(v) => update(`testimonials[${i}].text`, v)} rows={4} />
        </ItemCard>
      ))}
      <AddButton label="Add Testimonial" onClick={() => update(`testimonials[${content.testimonials.length}]`, { id: `r${Date.now()}`, name: "New Client", event: "Event", rating: 5, text: "Review text" })} />
    </div>
  );
}

function PricingTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Pricing Packages" sub="Your three tiers." />
      <Field label="Eyebrow" value={content.pricingEyebrow} onChange={(v) => update("pricingEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.pricingTitle1} onChange={(v) => update("pricingTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.pricingTitle2} onChange={(v) => update("pricingTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.pricingSub} onChange={(v) => update("pricingSub", v)} />
      <TextArea label="Note (below cards)" value={content.pricingNote} onChange={(v) => update("pricingNote", v)} rows={2} />
      {content.packages.map((p, i) => (
        <ItemCard key={p.id} title={`Package: ${p.name}`} onDelete={() => update(`packages[${i}]`, null)}>
          <Field label="Name" value={p.name} onChange={(v) => update(`packages[${i}].name`, v)} />
          <Field label="Tagline" value={p.tagline} onChange={(v) => update(`packages[${i}].tagline`, v)} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Price" value={p.price} onChange={(v) => update(`packages[${i}].price`, v)} />
            <Field label="Period Label" value={p.period} onChange={(v) => update(`packages[${i}].period`, v)} />
          </div>
          <div>
            <label className="admin-label">Highlight (Most Loved)</label>
            <select
              value={p.highlight ? "true" : "false"}
              onChange={(e) => update(`packages[${i}].highlight`, e.target.value === "true")}
              className="admin-input"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div>
            <label className="admin-label">Features (one per line)</label>
            <textarea
              value={p.features.join("\n")}
              onChange={(e) => update(`packages[${i}].features`, e.target.value.split("\n").filter((f) => f.trim()))}
              rows={6}
              className="admin-input"
            />
          </div>
        </ItemCard>
      ))}
    </div>
  );
}

function WhyTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Why Choose Us" sub="Your unique selling points." />
      <Field label="Eyebrow" value={content.whyEyebrow} onChange={(v) => update("whyEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.whyTitle1} onChange={(v) => update("whyTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.whyTitle2} onChange={(v) => update("whyTitle2", v)} />
      </div>
      {content.whyFeatures.map((f, i) => (
        <ItemCard key={i} title={f.title} onDelete={() => update(`whyFeatures[${i}]`, null)}>
          <Field label="Icon" value={f.icon} onChange={(v) => update(`whyFeatures[${i}].icon`, v)} />
          <Field label="Title" value={f.title} onChange={(v) => update(`whyFeatures[${i}].title`, v)} />
          <TextArea label="Description" value={f.desc} onChange={(v) => update(`whyFeatures[${i}].desc`, v)} rows={3} />
        </ItemCard>
      ))}
      <Field label="Bottom Text (script)" value={content.whyBottomText} onChange={(v) => update("whyBottomText", v)} />
      <Field label="Bottom Subtitle" value={content.whyBottomSub} onChange={(v) => update("whyBottomSub", v)} />
    </div>
  );
}

function FaqTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="FAQ" sub="Frequently asked questions." />
      <Field label="Eyebrow" value={content.faqEyebrow} onChange={(v) => update("faqEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.faqTitle1} onChange={(v) => update("faqTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.faqTitle2} onChange={(v) => update("faqTitle2", v)} />
      </div>
      {content.faqs.map((f, i) => (
        <ItemCard key={f.id} title={f.q} onDelete={() => update(`faqs[${i}]`, null)}>
          <Field label="Question" value={f.q} onChange={(v) => update(`faqs[${i}].q`, v)} />
          <TextArea label="Answer" value={f.a} onChange={(v) => update(`faqs[${i}].a`, v)} rows={5} />
        </ItemCard>
      ))}
      <AddButton label="Add FAQ" onClick={() => update(`faqs[${content.faqs.length}]`, { id: `f${Date.now()}`, q: "New question?", a: "Answer" })} />
      <Field label="CTA Text" value={content.faqCtaText} onChange={(v) => update("faqCtaText", v)} />
      <Field label="CTA Button" value={content.faqCtaButton} onChange={(v) => update("faqCtaButton", v)} />
    </div>
  );
}

function FinalCtaTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Final CTA" sub="The closing call-to-action before footer." />
      <Field label="Eyebrow" value={content.finalCtaEyebrow} onChange={(v) => update("finalCtaEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.finalCtaTitle1} onChange={(v) => update("finalCtaTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.finalCtaTitle2} onChange={(v) => update("finalCtaTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.finalCtaSub} onChange={(v) => update("finalCtaSub", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Button 1" value={content.finalCtaButton1} onChange={(v) => update("finalCtaButton1", v)} />
        <Field label="Button 2" value={content.finalCtaButton2} onChange={(v) => update("finalCtaButton2", v)} />
      </div>
      <ImageField label="Background Image" value={content.finalCtaBgImage} onChange={(v) => update("finalCtaBgImage", v)} />
    </div>
  );
}

function BookingTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Booking Section" sub="The consultation form area." />
      <Field label="Eyebrow" value={content.bookingEyebrow} onChange={(v) => update("bookingEyebrow", v)} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title Line 1" value={content.bookingTitle1} onChange={(v) => update("bookingTitle1", v)} />
        <Field label="Title Line 2 (script)" value={content.bookingTitle2} onChange={(v) => update("bookingTitle2", v)} />
      </div>
      <TextArea label="Subtitle" value={content.bookingSub} onChange={(v) => update("bookingSub", v)} />
      <Field label="Success Title" value={content.bookingSuccessTitle} onChange={(v) => update("bookingSuccessTitle", v)} />
      <TextArea label="Success Message" value={content.bookingSuccessText} onChange={(v) => update("bookingSuccessText", v)} rows={3} />
    </div>
  );
}

function FooterTab({ content, update }: { content: SiteContent; update: any }) {
  return (
    <div className="space-y-5">
      <SectionHeader title="Footer" sub="Bottom of the page." />
      <TextArea label="Description" value={content.footerDesc} onChange={(v) => update("footerDesc", v)} rows={3} />
      <Field label="Copyright Text" value={content.footerCopyright} onChange={(v) => update("footerCopyright", v)} />
      <Field label="Press Section Title" value={content.pressTitle} onChange={(v) => update("pressTitle", v)} />
      <div>
        <label className="admin-label">Press Logos (one per line)</label>
        <textarea
          value={content.pressLogos.join("\n")}
          onChange={(e) => update("pressLogos", e.target.value.split("\n").filter((l) => l.trim()))}
          rows={6}
          className="admin-input"
        />
      </div>
    </div>
  );
}

// ============================================
// Uploads Tab — browse all uploaded images
// ============================================
function UploadsTab() {
  const [images, setImages] = useState<
    { name: string; url: string; size: number; download_url?: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedUrl, setCopiedUrl] = useState("");
  const [newUploads, setNewUploads] = useState(0);

  const loadImages = async () => {
    setLoading(true);
    setError("");
    try {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
      const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || "jatinpitrola-eng";
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || "one-touch-event-decor";
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/public/uploads?ref=main`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      if (res.status === 404) {
        setImages([]);
      } else if (!res.ok) {
        throw new Error(`Failed to load uploads (HTTP ${res.status})`);
      } else {
        const data = await res.json();
        const list = (Array.isArray(data) ? data : [])
          .filter((f: any) => f.type === "file" && /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name))
          .map((f: any) => ({
            name: f.name,
            url: `/uploads/${f.name}`,
            size: f.size || 0,
            download_url: f.download_url,
          }));
        setImages(list);
      }
    } catch (e: any) {
      setError(e.message || "Failed to load uploads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [newUploads]);

  const copyUrl = (url: string) => {
    navigator.clipboard?.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(""), 2000);
  };

  const deleteImage = async (name: string) => {
    if (!confirm(`Delete ${name}? This cannot be undone.`)) return;
    try {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
      const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || "jatinpitrola-eng";
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || "one-touch-event-decor";
      const path = `public/uploads/${name}`;
      // Get SHA
      const getRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      if (!getRes.ok) throw new Error("Could not find file to delete.");
      const data = await getRes.json();
      const sha = data.sha;
      // Delete
      const delRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `chore: delete image ${name} via admin panel`,
            sha,
            branch: "main",
          }),
        }
      );
      if (delRes.ok) {
        setImages((prev) => prev.filter((i) => i.name !== name));
      } else {
        const err = await delRes.json();
        alert("Failed to delete: " + (err.message || "Unknown error"));
      }
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <div className="space-y-5">
      <SectionHeader
        title="Image Library"
        sub="Upload, browse, copy URLs, and delete your uploaded images. All images are stored in your GitHub repo and served by Vercel."
      />

      {/* Quick uploader */}
      <div className="bg-[#FCFAF3] border border-[#E5D9C0] rounded-2xl p-5">
        <h4 className="font-display text-sm font-bold text-[#0B3D2E] mb-3">
          Quick Upload
        </h4>
        <ImageUpload
          onUploadSuccess={() => {
            // Trigger reload after upload
            setNewUploads((n) => n + 1);
          }}
        />
        <p className="mt-3 text-xs text-[#6B5D4A]">
          After uploading, copy the URL below and paste it into any image field
          across other tabs (Hero, Gallery, Services, etc).
        </p>
      </div>

      {/* Uploaded images grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-display text-sm font-bold text-[#0B3D2E]">
            All Uploaded Images ({images.length})
          </h4>
          <button
            onClick={loadImages}
            disabled={loading}
            className="text-xs text-[#B87333] hover:underline"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </p>
        )}
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-[#E5D9C0]/40 animate-pulse"
              />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-10 bg-[#FCFAF3] rounded-xl border border-dashed border-[#E5D9C0]">
            <ImageIcon className="w-10 h-10 text-[#6B5D4A]/40 mx-auto mb-2" />
            <p className="text-sm text-[#6B5D4A]">
              No images uploaded yet. Use the uploader above to add your first image.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {images.map((img) => (
              <div
                key={img.name}
                className="group relative rounded-xl overflow-hidden border border-[#E5D9C0] bg-[#FCFAF3] hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="text-[10px] text-[#6B5D4A] truncate" title={img.name}>
                    {img.name}
                  </p>
                  <p className="text-[9px] text-[#6B5D4A]/60">
                    {formatSize(img.size)}
                  </p>
                </div>
                {/* Hover actions */}
                <div className="absolute inset-0 bg-[#07261d]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                  <button
                    onClick={() => copyUrl(img.url)}
                    className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-[#B87333] text-[#F7F1E8] text-[10px] rounded-md hover:bg-[#C68A4E] transition-colors"
                  >
                    {copiedUrl === img.url ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    {copiedUrl === img.url ? "Copied!" : "Copy URL"}
                  </button>
                  <button
                    onClick={() => deleteImage(img.name)}
                    className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-600 text-white text-[10px] rounded-md hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PublishTab() {
  const [publishing, setPublishing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const publish = async () => {
    setPublishing(true);
    setResult(null);
    try {
      // Get current content from localStorage
      const content = localStorage.getItem("one_touch_content");
      if (!content) {
        setResult({ success: false, message: "No changes to publish." });
        setPublishing(false);
        return;
      }

      // GitHub credentials — read from env (set in Vercel dashboard)
      // For local dev, create a .env.local file with these values
      // For production, add them as Vercel environment variables
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
      const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || "jatinpitrola-eng";
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || "one-touch-event-decor";
      const path = "public/content.json";

      if (!token) {
        setResult({
          success: false,
          message:
            "GitHub token not configured. Please set NEXT_PUBLIC_GITHUB_TOKEN environment variable in Vercel dashboard (Settings → Environment Variables).",
        });
        setPublishing(false);
        return;
      }

      // 1. Get current file SHA (if exists)
      const getRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      let sha: string | undefined;
      if (getRes.ok) {
        const data = await getRes.json();
        sha = data.sha;
      }

      // 2. Update or create the file
      const updateRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "chore: update site content via admin panel",
            content: btoa(unescape(encodeURIComponent(content))),
            sha,
            branch: "main",
          }),
        }
      );

      if (updateRes.ok) {
        setResult({
          success: true,
          message:
            "Changes published! Your website will rebuild automatically on Vercel in about 1-2 minutes. Refresh the page after that to see the live changes.",
        });
      } else {
        const err = await updateRes.json();
        setResult({
          success: false,
          message: `Failed to publish: ${err.message || "Unknown error"}`,
        });
      }
    } catch (e: any) {
      setResult({
        success: false,
        message: `Error: ${e.message || "Unknown error"}`,
      });
    }
    setPublishing(false);
  };

  return (
    <div className="space-y-5">
      <SectionHeader
        title="Publish Changes"
        sub="Push your edits live to the website. This commits your changes to GitHub and triggers a Vercel rebuild."
      />
      <div className="bg-[#FCFAF3] border border-[#E5D9C0] rounded-2xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#B87333]/15 flex items-center justify-center shrink-0">
            <Upload className="w-5 h-5 text-[#B87333]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-[#0B3D2E]">
              Ready to go live?
            </h3>
            <p className="text-sm text-[#6B5D4A] mt-1">
              Clicking "Publish" will commit your changes to the GitHub repository
              and trigger an automatic rebuild on Vercel. The live site will update
              in 1-2 minutes.
            </p>
          </div>
        </div>
        <button
          onClick={publish}
          disabled={publishing}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0B3D2E] text-[#F7F1E8] rounded-full hover:bg-[#B87333] transition-colors font-medium disabled:opacity-60"
        >
          {publishing ? (
            <>
              <div className="w-4 h-4 border-2 border-[#F7F1E8] border-t-transparent rounded-full animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Publish Changes to Live Site
            </>
          )}
        </button>
        {result && (
          <div
            className={`mt-4 p-4 rounded-xl text-sm ${
              result.success
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {result.message}
          </div>
        )}
      </div>
      <div className="bg-[#FCFAF3] border border-[#E5D9C0] rounded-2xl p-6">
        <h4 className="font-display text-sm font-bold text-[#0B3D2E] mb-2">
          How it works
        </h4>
        <ol className="text-sm text-[#6B5D4A] space-y-2 list-decimal list-inside">
          <li>You edit content in this admin panel — changes save automatically to your browser.</li>
          <li>Click "Publish Changes" — this commits the updated content.json to your GitHub repo.</li>
          <li>Vercel detects the new commit and rebuilds the site automatically (1-2 minutes).</li>
          <li>The live website at <code className="text-[#B87333]">one-touch-event-decor.vercel.app</code> updates with your changes.</li>
        </ol>
      </div>
    </div>
  );
}
