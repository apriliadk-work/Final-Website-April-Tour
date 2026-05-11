import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PackageCard } from "@/components/ui/PackageCard";
import { tourPackages } from "@/data/packages";

/**
 * Featured packages section — uses the three packages from the brochure.
 */
export function PackagesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Best Value Tours"
            title="Our Tour Packages"
            subtitle="Three signature itineraries crafted around East Java's most unforgettable landscapes."
          />
          <Reveal delay={0.3}>
            <Link href="/packages" className="btn-outline group self-start whitespace-nowrap">
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tourPackages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={index * 0.1}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
