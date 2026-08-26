'use client';

import { useEffect, useState } from 'react';
import Loader from '@/components/site/loader';
import CursorGlow from '@/components/site/cursor-glow';
import ScrollProgress from '@/components/site/scroll-progress';
import Navbar from '@/components/site/navbar';
import Hero from '@/components/site/hero';
import Marquee from '@/components/site/marquee';
import About from '@/components/site/about';
import Services from '@/components/site/services';
import Signature from '@/components/site/signature';
import Occasions from '@/components/site/occasions';
import Gallery from '@/components/site/gallery';
import Process from '@/components/site/process';
import Stats from '@/components/site/stats';
import Testimonials from '@/components/site/testimonials';
import Pricing from '@/components/site/pricing';
import FAQ from '@/components/site/faq';
import Contact from '@/components/site/contact';
import Footer from '@/components/site/footer';
import FloatingContact from '@/components/site/floating-contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ScrollProgress />
      <CursorGlow />
      <div className="relative flex min-h-screen flex-col bg-background">
        {/* Global ambient aurora behind everything */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-50 bg-mesh opacity-60"
        />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Signature />
          <Occasions />
          <Gallery />
          <Process />
          <Stats />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}
