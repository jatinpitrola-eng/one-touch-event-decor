"use client";

import { useState, useCallback } from "react";
import { ContentProvider } from "@/components/admin/ContentProvider";
import AdminGate from "@/components/admin/AdminGate";
import Loader from "@/components/sections/Loader";
import CustomCursor from "@/components/sections/CustomCursor";
import CursorFollowGlow from "@/components/sections/CursorFollowGlow";
import ScrollProgress from "@/components/sections/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PressLogos from "@/components/sections/PressLogos";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FamilyFunctions from "@/components/sections/FamilyFunctions";
import DecorStyles from "@/components/sections/DecorStyles";
import Masterpiece from "@/components/sections/Masterpiece";
import BehindStudio from "@/components/sections/BehindStudio";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/sections/SectionDivider";
import FloatingContactButton from "@/components/sections/FloatingContactButton";

export default function Home() {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = useCallback(() => {
    setLogoClicks((n) => n + 1);
  }, []);

  return (
    <ContentProvider>
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        <Loader />
        <CustomCursor />
        <CursorFollowGlow />
        <ScrollProgress />
        <Navbar onLogoClick={handleLogoClick} />
        <AdminGate logoClickTrigger={logoClicks} />
        <FloatingContactButton />
        <main className="flex-1">
          <Hero />
          <PressLogos />
          <StatsBar />
          <SectionDivider variant="light" />
          <About />
          <SectionDivider variant="light" />
          <Services />
          <FamilyFunctions />
          <SectionDivider variant="light" />
          <DecorStyles />
          <Masterpiece />
          <SectionDivider variant="light" />
          <BehindStudio />
          <Process />
          <SectionDivider variant="light" />
          <Gallery />
          <Testimonials />
          <SectionDivider variant="light" />
          <Pricing />
          <WhyChooseUs />
          <SectionDivider variant="light" />
          <FAQ />
          <SectionDivider variant="light" />
          <FinalCTA />
          <Booking />
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}
