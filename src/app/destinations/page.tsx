import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations — East Java, Indonesia",
  description:
    "Mount Bromo, Tumpak Sewu, Ijen Crater, Madakaripura, Kapas Biru, Tetes Cave, Batu City — discover the most spectacular destinations in East Java with April Tour.",
};

const typeColors: Record<string, string> = {
  volcano: "bg-red-700",
  waterfall: "bg-teal-600",
  city: "bg-navy-700",
  cave: "bg-amber-700",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore East Java"
        title="Our Destinations"
        subtitle="Volcanoes, waterfalls, caves, and hill towns — the corners of Indonesia we know best."
        image="/images/destinations-hero.jpg"
        imageAlt="East Java landscape"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={`${destinations.length} destinations · 1 province`}
            title="Where we&rsquo;ll take you"
            subtitle="Each destination has its own rhythm — the early-rise drama of a Bromo sunrise, the cathedral hush of Madakaripura, the family-friendly bustle of Batu. We tailor every itinerary to the destinations you choose."
          />

          {/* Editorial alternating layout */}
          <div className="mt-16 space-y-20 md:space-y-32">
            {destinations.map((dest, index) => {
              const isReverse = index % 2 === 1;
              return (
                <Reveal key={dest.slug}>
                  <article
                    className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isReverse ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`lg:col-span-7 ${isReverse ? "lg:[direction:ltr]" : ""}`}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant group">
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                        />
                        <div className="absolute top-5 left-5 flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${typeColors[dest.type]}`}
                            aria-hidden
                          />
                          <span className="px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900">
                            {dest.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`lg:col-span-5 ${isReverse ? "lg:[direction:ltr]" : ""}`}>
                      <div className="flex items-center gap-2 text-gold-700 text-xs uppercase tracking-[0.2em] font-semibold">
                        <MapPin className="h-3.5 w-3.5" />
                        {dest.region}
                      </div>
                      <h2 className="mt-3 font-display font-bold text-display-md text-navy-900 leading-[1.05] tracking-tight">
                        {dest.name}
                      </h2>
                      <p className="mt-5 text-lg text-navy-700/90 italic font-display">
                        {dest.shortDescription}
                      </p>
                      <p className="mt-4 text-navy-700/85 leading-relaxed">
                        {dest.description}
                      </p>
                      <ul className="mt-7 space-y-2">
                        {dest.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-navy-800"
                          >
                            <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gold-500 mt-2" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
