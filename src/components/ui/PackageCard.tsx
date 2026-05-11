import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star, Clock } from "lucide-react";
import type { TourPackage } from "@/types";
import { formatPrice } from "@/lib/utils";

/**
 * Tour package card — used on the homepage and packages page grid.
 * Uses portrait aspect ratio for an editorial / travel-magazine feel.
 */
interface PackageCardProps {
  pkg: TourPackage;
  /** Larger variant gets a featured layout. Default is regular grid card. */
  featured?: boolean;
}

export function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-navy-900 shadow-soft transition-all duration-500 hover:shadow-luxury hover:-translate-y-1"
    >
      {/* Image */}
      <div className={`relative ${featured ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-tour"} overflow-hidden`}>
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/40 to-transparent" />

        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-[0.18em]">
            {pkg.badge}
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
          <span className="text-xs font-semibold text-navy-900">{pkg.rating}.0</span>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-cream-50">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-300">
          <Clock className="h-3.5 w-3.5" />
          <span>{pkg.duration}</span>
        </div>
        <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl leading-tight">
          {pkg.title}
        </h3>
        <p className="mt-1 text-sm text-cream-100/80">{pkg.subtitle}</p>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-cream-100/60">
              From
            </p>
            <p className="font-display text-2xl font-semibold text-cream-50">
              {formatPrice(pkg.priceEur, "EUR")}
              <span className="text-sm font-normal text-cream-100/70 ml-1">/ pax</span>
            </p>
          </div>
          <span
            aria-hidden
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 text-navy-900 transition-all duration-500 group-hover:bg-gold-500 group-hover:rotate-45"
          >
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
