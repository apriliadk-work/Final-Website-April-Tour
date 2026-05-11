import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * April Tour wordmark logo.
 * Uses display serif typography to match the company profile aesthetic.
 * `variant` controls the colour scheme (light for dark backgrounds, dark for light).
 */
interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const colors =
    variant === "light"
      ? "text-cream-50"
      : "text-navy-900";

  return (
    <Link
      href="/"
      aria-label="April Tour — home"
      className={cn(
        "group flex items-baseline gap-1.5 font-display",
        colors,
        className
      )}
    >
      <span className="text-2xl md:text-[1.75rem] font-bold tracking-tight leading-none">
        April
      </span>
      <span className="text-2xl md:text-[1.75rem] font-light italic tracking-tight leading-none text-gold-500">
        Tour
      </span>
      <span
        aria-hidden
        className="ml-0.5 h-1.5 w-1.5 rounded-full bg-gold-500 transition-transform group-hover:scale-150"
      />
    </Link>
  );
}
