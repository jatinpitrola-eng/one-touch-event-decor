"use client";

import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FamilyFunctions from "@/components/sections/FamilyFunctions";
import DecorStyles from "@/components/sections/DecorStyles";
import Masterpiece from "@/components/sections/Masterpiece";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Loader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <FamilyFunctions />
        <DecorStyles />
        <Masterpiece />
        <Process />
        <Gallery />
        <Testimonials />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
