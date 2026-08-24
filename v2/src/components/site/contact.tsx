'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CalendarDays, Users, Phone, Mail, MapPin, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { SectionHeading } from './section-heading';
import { OliveSprig } from './background';

const OCCASIONS = [
  'Wedding',
  'Birthday',
  'Family Function',
  'Baby Shower',
  'Corporate Event',
  'Other',
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setDone(true);
        toast({
          title: 'Enquiry received',
          description: json.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Could not send',
          description: json.error || 'Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Network error',
        description: 'Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* emerald backdrop */}
      <div className="absolute inset-0 -z-10 bg-emerald-gradient" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <OliveSprig className="pointer-events-none absolute -left-8 top-10 h-80 w-48 text-blush/15" />
      <OliveSprig className="pointer-events-none absolute right-0 bottom-0 h-72 w-44 text-copper/20" flip />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left — invitation */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              dark
              align="left"
              eyebrow="Let's Create Together"
              title="Tell us about"
              highlight="your moment"
              description="Share a few details and our lead stylist will craft a bespoke concept — palette, layout and botanical accents — within 24 hours."
            />

            <div className="mt-10 grid gap-5">
              {[
                { icon: Phone, label: 'Call / WhatsApp', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email', value: 'hello@onetouchdecor.com' },
                { icon: MapPin, label: 'Studio', value: 'Banjara Hills, Hyderabad' },
                { icon: CalendarDays, label: 'Open', value: 'Mon–Sat · 10am – 7pm' },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush text-emerald-deep">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/55">
                      {c.label}
                    </div>
                    <div className="font-display text-lg text-cream">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-blush/10 p-4">
              <Sparkles className="h-5 w-5 shrink-0 text-blush" />
              <p className="text-sm text-cream/80">
                <span className="font-semibold text-blush">Free design consultation</span>{' '}
                for every enquiry — no obligation, just inspiration.
              </p>
            </div>
          </div>

          {/* right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-blush/20" />
            <div className="relative rounded-[1.8rem] bg-cream p-6 shadow-luxe sm:p-8">
              {done ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald text-cream"
                  >
                    <Check className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl text-charcoal">
                    Enquiry received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. Our lead stylist will craft a bespoke
                    concept and reply within 24 hours.
                  </p>
                  <Button
                    className="mt-6 rounded-full bg-blush text-emerald-deep hover:bg-blush-deep"
                    onClick={() => setDone(false)}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-2xl text-charcoal">
                      Book your celebration
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fields marked with * are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Full name *">
                      <Input name="name" required placeholder="Your name" className="h-11" />
                    </Field>
                    <Field label="Phone">
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+91 ..."
                        className="h-11"
                      />
                    </Field>
                  </div>

                  <Field label="Email *">
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="h-11"
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Occasion *">
                      <select
                        name="occasion"
                        required
                        defaultValue=""
                        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="" disabled>
                          Select occasion
                        </option>
                        {OCCASIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Event date">
                      <Input name="date" type="date" className="h-11" />
                    </Field>
                  </div>

                  <Field label="Approx. guests">
                    <div className="relative">
                      <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="guests"
                        type="number"
                        min={1}
                        placeholder="100"
                        className="h-11 pl-9"
                      />
                    </div>
                  </Field>

                  <Field label="Tell us about your vision">
                    <Textarea
                      name="message"
                      rows={4}
                      placeholder="Colours, venue, mood, anything that inspires you..."
                      className="resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="btn-shine group w-full rounded-full bg-emerald py-6 text-cream hover:bg-emerald-deep disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Send enquiry
                      </>
                    )}
                  </Button>
                  <p className="text-center text-[0.7rem] text-muted-foreground">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium text-charcoal">{label}</Label>
      {children}
    </div>
  );
}
