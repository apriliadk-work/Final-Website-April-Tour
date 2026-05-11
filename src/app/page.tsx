import { HomeHero } from "@/components/sections/HomeHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

/**
 * Home page — composed from individual section components.
 * Order intentionally mirrors the natural conversion flow:
 * Hero → About → Services → Packages → Destinations → Reviews → Process → FAQ → CTA
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <DestinationsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
