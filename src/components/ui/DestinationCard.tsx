import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Destination card used on the home page and destinations page.
 * Tall, editorial aspect ratio with a hover scale on the image.
 */
interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const typeLabels: Record<Destination["type"], string> = {
  volcano: "Volcano",
  waterfall: "Waterfall",
  city: "City",
  cave: "Cave",
};

export function DestinationCard({ destination, className }: DestinationCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-navy-900 shadow-soft transition-all duration-500 hover:shadow-luxury",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/30 to-transparent" />
      </div>

      <div className="absolute top-5 left-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900">
          {typeLabels[destination.type]}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-cream-50">
        <div className="flex items-center gap-1.5 text-xs text-gold-300">
          <MapPin className="h-3.5 w-3.5" />
          <span className="uppercase tracking-[0.18em]">{destination.region}</span>
        </div>
        <h3 className="mt-2 font-display font-bold text-2xl leading-tight">
          {destination.name}
        </h3>
        <p className="mt-2 text-sm text-cream-100/85 line-clamp-2 leading-relaxed">
          {destination.shortDescription}
        </p>
      </div>
    </article>
  );
}
