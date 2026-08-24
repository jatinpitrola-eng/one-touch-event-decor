'use client';

import { useState } from 'react';
import { Instagram, Facebook, Send, Heart, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-12 w-20"
      fill="none"
      style={{ color: 'var(--cream)' }}
    >
      <path d="M30 95 C 30 30, 170 30, 170 95" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M38 78 C 30 64, 28 50, 34 40" stroke="currentColor" strokeWidth="1.2" fill="none" />
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={i}
          cx={32 - i * 1.5}
          cy={70 - i * 10}
          rx="6"
          ry="3"
          transform={`rotate(${-35 + i * 5} ${32 - i * 1.5} ${70 - i * 10})`}
          fill="currentColor"
          opacity="0.85"
        />
      ))}
      <text x="100" y="78" textAnchor="middle" fontFamily="var(--font-great-vibes), cursive" fontSize="30" fill="currentColor">
        One Touch
      </text>
      <text x="100" y="96" textAnchor="middle" fontFamily="var(--font-manrope), sans-serif" fontSize="6.5" letterSpacing="3" fill="currentColor" opacity="0.7">
        EVENT DÉCOR
      </text>
      <line x1="84" y1="108" x2="94" y2="108" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="108" r="1.3" fill="currentColor" />
      <line x1="106" y1="108" x2="116" y2="108" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

const LINKS = [
  {
    title: 'Explore',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Occasions', href: '#occasions' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Plan',
    items: [
      { label: 'Process', href: '#process' },
      { label: 'Packages', href: '#packages' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Book your event', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: 'Subscribed',
      description: 'Welcome to the One Touch circle. Watch your inbox for inspiration.',
    });
    setEmail('');
  };

  return (
    <footer className="relative mt-auto overflow-hidden bg-emerald-deep text-cream">
      {/* top decorative balloon line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--blush)' }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--copper)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <FooterLogo />
            <p className="mt-5 max-w-xs font-serif-soft text-base italic leading-relaxed text-cream/70">
              Botanical luxury balloon &amp; event styling for life&apos;s most
              beautiful moments — one touch at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Send, label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all hover:border-blush hover:bg-blush hover:text-emerald-deep"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            {LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-blush">{col.title}</h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.items.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* newsletter + contact */}
          <div className="lg:col-span-4">
            <h4 className="eyebrow text-blush">Stay Inspired</h4>
            <p className="mt-4 text-sm text-cream/70">
              Seasonal palettes, new collections &amp; styling notes — straight to
              your inbox.
            </p>
            <form onSubmit={subscribe} className="mt-4 flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="h-11 border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40"
                required
              />
              <Button
                type="submit"
                className="btn-shine shrink-0 rounded-full bg-blush px-5 text-emerald-deep hover:bg-blush-deep"
              >
                Join
              </Button>
            </form>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-cream/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blush" /> Banjara Hills, Hyderabad
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blush" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blush" /> hello@onetouchdecor.com
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

        {/* bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-cream/55">
            © {new Date().getFullYear()} One Touch Event Décor · Crafted with
            <Heart className="h-3 w-3 fill-blush text-blush" />
            for beautiful moments
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-xs text-cream/70 transition-colors hover:border-blush hover:text-cream"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
