import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Testimonial card with editorial styling.
 * Used in a grid on the testimonials section.
 */
interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "card card-hover p-7 md:p-8 flex flex-col h-full relative overflow-hidden",
        className
      )}
    >
      {/* Decorative background quote */}
      <Quote
        aria-hidden
        className="absolute -top-3 -right-3 h-24 w-24 text-gold-100"
        strokeWidth={1}
      />

      <div className="relative flex items-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
        ))}
      </div>

      <blockquote className="relative flex-1 text-navy-800/90 italic leading-relaxed text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="relative mt-6 pt-5 border-t border-navy-100/60 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-cream-50 font-display text-lg font-semibold">
          {testimonial.initial}
        </div>
        <div>
          <p className="font-semibold text-navy-900 text-sm">
            {testimonial.name}{" "}
            <span className="font-normal text-navy-600">— {testimonial.country}</span>
          </p>
          <p className="text-xs text-gold-700 font-medium">
            {testimonial.package}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
