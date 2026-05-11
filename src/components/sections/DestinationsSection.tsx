import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { destinations } from "@/data/destinations";

/**
 * Destinations grid — featured on the home page.
 * Shows the first 4 destinations in a varied grid.
 */
export function DestinationsSection() {
  const featured = destinations.slice(0, 4);

  return (
    <section className="section bg-navy-950 relative overflow-hidden">
      {/* Decorative top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Where we go"
            title="East Java Destinations"
            subtitle="Volcanoes, waterfalls, caves, and hill towns — the most spectacular corners of Indonesia's most underrated province."
            variant="light"
          />
          <Reveal delay={0.3}>
            <Link href="/destinations" className="btn-outline-light group self-start whitespace-nowrap">
              All destinations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {featured.map((destination, index) => (
            <Reveal key={destination.slug} delay={index * 0.08}>
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
