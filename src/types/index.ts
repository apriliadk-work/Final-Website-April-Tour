/**
 * Shared domain types for the April Tour website.
 * Keeping them centralized makes data files and components fully type-safe.
 */

export interface TourPackage {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  priceEur: number;
  priceUsd?: number;
  badge?: string;
  rating: number;
  image: string;
  gallery?: string[];
  highlights: string[];
  inclusions: string[];
  exclusions?: string[];
  itinerary: ItineraryStep[];
  description: string;
  category: "1-day" | "multi-day" | "custom";
}

export interface ItineraryStep {
  time: string;
  title: string;
  description?: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  type: "volcano" | "waterfall" | "city" | "cave";
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  country: string;
  package: string;
  rating: number;
  quote: string;
  initial: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
