import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { tourPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages — East Java Itineraries",
  description:
    "Browse our signature East Java tour packages — Bromo, Tumpak Sewu, Ijen Crater, Kapas Biru and more. Best value pricing, professional guides, flexible itineraries.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Curated journeys"
        title="Our Tour Packages"
        subtitle="Three signature itineraries built around East Java's most spectacular landscapes — plus fully custom options for travellers who want to design their own."
        image="https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Mount Bromo"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tourPackages.map((pkg, index) => (
              <Reveal key={pkg.slug} delay={index * 0.1}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 p-10 md:p-14 rounded-3xl bg-navy-900 text-cream-50 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgb(232 176 63) 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative max-w-2xl mx-auto">
                <span className="eyebrow text-gold-300 before:bg-gold-300 justify-center">
                  Custom journeys
                </span>
                <h2 className="mt-4 font-display font-bold text-display-md text-cream-50">
                  Don&apos;t see your dream trip?
                </h2>
                <p className="mt-5 text-cream-100/85 leading-relaxed text-lg">
                  We design fully custom itineraries based on your destinations,
                  schedule, and travel style. From multi-day East Java loops to
                  single-day hidden-gem adventures — just tell us what you&apos;re
                  dreaming of.
                </p>
                <div className="mt-8">
                  <a href="/contact" className="btn-gold">
                    Plan a custom trip
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
