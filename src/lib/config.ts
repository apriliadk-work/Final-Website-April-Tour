/**
 * Single source of truth for site-wide constants:
 * brand info, contact details, navigation, and SEO defaults.
 */

import type { NavLink } from "@/types";

export const siteConfig = {
  name: "April Tour",
  tagline: "Travel Beyond Borders",
  shortDescription:
    "Premium East Java tours — Mount Bromo, Tumpak Sewu, Ijen Crater & more. Crafted journeys, professional guides, unforgettable memories.",
  longDescription:
    "April Tour is a full-service travel agency based in Malang, East Java, Indonesia. Since 2024 we have crafted unforgettable journeys for travellers from over 25 countries — covering Mount Bromo, Tumpak Sewu Waterfall, Madakaripura Waterfall, Kapas Biru Waterfall, Ijen Crater, and Batu City Tour. From weekend getaways to grand expeditions, we handle every detail so you can focus on the adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apriltour.com",
  ogImage: "/images/og-image.jpg",
  founded: 2024,
  baseLocation: "Malang, East Java, Indonesia",
};

export const contactConfig = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285730451637",
  whatsappDisplay: "+62 857-3045-1637",
  email: process.env.NEXT_PUBLIC_EMAIL || "apriliadk04@outlook.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "apriliadk04",
  instagramUrl: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM || "apriliadk04"}`,
  location: "Malang, East Java, Indonesia",
  serviceArea: "All of East Java, Indonesia",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "25+", label: "Countries Served" },
  { value: "7+", label: "Destinations" },
];

/**
 * Generate a pre-filled WhatsApp link for a given message.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${contactConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
