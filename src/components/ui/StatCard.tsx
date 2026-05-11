import { cn } from "@/lib/utils";

/**
 * Single statistic card (number + label).
 * Used in the About section, matching the company profile design.
 */
interface StatCardProps {
  value: string;
  label: string;
  variant?: "navy" | "gold" | "outline";
  className?: string;
}

export function StatCard({ value, label, variant = "navy", className }: StatCardProps) {
  const variantStyles = {
    navy: "bg-navy-900 text-cream-50",
    gold: "bg-gold-400 text-navy-900",
    outline: "bg-cream-50 text-navy-900 border border-navy-100",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant",
        variantStyles[variant],
        className
      )}
    >
      <div className="font-display font-bold text-4xl md:text-5xl leading-none">
        {value}
      </div>
      <div
        className={cn(
          "mt-2 text-xs uppercase tracking-[0.2em] font-medium",
          variant === "navy" ? "text-cream-100/85" :
          variant === "gold" ? "text-navy-900/80" :
          "text-navy-700/80"
        )}
      >
        {label}
      </div>
    </div>
  );
}
