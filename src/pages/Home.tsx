import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/Contact";
import HeroSection from "../components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/Cta";

import PricingSection from "@/components/sections/Pricing";

import CTASection from "@/components/sections/Cta";

import DashboardPreview from "@/components/sections/Preview";
import IntegrationSection from "@/components/sections/Integration";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <DashboardPreview/>
      <CTASection/>
      <IntegrationSection/>
      <Testimonials/>
      <PricingSection/>
      <Footer/>
    </main>
  );
}