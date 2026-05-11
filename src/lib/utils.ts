import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes intelligently — last-wins when classes conflict.
 * Standard utility used across all components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as currency with euro/dollar symbol.
 */
export function formatPrice(amount: number, currency: "EUR" | "USD" = "EUR"): string {
  const symbol = currency === "EUR" ? "€" : "$";
  return `${symbol}${amount}`;
}
