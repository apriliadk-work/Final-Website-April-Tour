import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Standardised section header used across the site.
 * - `eyebrow` is the small uppercase label above the title
 * - `title` is the editorial display heading
 * - `subtitle` is supporting prose
 * - `align` controls horizontal alignment
 * - `variant` controls light/dark color scheme
 */
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "dark",
  className,
}: SectionHeadingProps) {
  const titleColor = variant === "light" ? "text-cream-50" : "text-navy-900";
  const subtitleColor = variant === "light" ? "text-cream-100/80" : "text-navy-700/80";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", align === "center" && "justify-center")}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "mt-4 text-display-md md:text-[3.25rem] font-bold leading-[1.05]",
            titleColor
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={cn("mt-5 text-base md:text-lg leading-relaxed", subtitleColor)}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
