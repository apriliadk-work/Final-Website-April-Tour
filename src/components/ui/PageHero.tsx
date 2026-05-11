import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Inner-page hero banner.
 * Used by About, Packages, Destinations, Gallery, Contact.
 * Compact, image-led with a soft overlay so headline copy stays legible.
 */
interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  align = "left",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden h-[60vh] min-h-[420px] max-h-[680px] flex items-end",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/40 to-navy-900/85" />
      <div className="absolute inset-0 grain" />

      <div className="container relative pb-16 md:pb-20">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <span
              className={cn(
                "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300",
                align === "center" && "justify-center"
              )}
            >
              <span className="block h-px w-8 bg-gold-300" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display font-bold text-display-lg text-cream-50 leading-[1.05] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-cream-100/85 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
