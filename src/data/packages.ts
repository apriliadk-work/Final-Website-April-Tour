import type { TourPackage } from "@/types";

/**
 * Tour packages — sourced from the April Tour 2026 company profile.
 * Prices in EUR are the customer-facing prices on the brochure.
 * The 1-day Bromo + Tumpak Sewu itinerary is verbatim from the PPT.
 */
export const tourPackages: TourPackage[] = [
  {
    slug: "bromo-tumpak-sewu-1-day",
    title: "Bromo & Tumpak Sewu",
    subtitle: "Pick-up from Malang or Surabaya",
    duration: "1 Day",
    priceEur: 140,
    badge: "Best Seller",
    rating: 5,
    image:
      "/images/pake1-bromo-apriljavi.jpg",
    gallery: [
      "/images/pake1-bromo-apriljavi.jpg",
      "/images/pake1-bromo-apriljavi.jpg",
      "/images/pake1-bromo-apriljavi.jpg",
    ],
    category: "1-day",
    description:
      "Witness the surreal sunrise over Mount Bromo's caldera, then chase one of Indonesia's most spectacular waterfalls — Tumpak Sewu — all in a single, perfectly choreographed day. This is our signature experience and the most popular journey we offer.",
    highlights: [
      "Sunrise viewpoint at Mount Bromo",
      "Walk to the active Bromo crater rim",
      "Iconic panorama of Tumpak Sewu (the 'Thousand Waterfalls')",
      "Private 4WD Jeep across the Sea of Sand",
      "Comfortable private car door-to-door",
    ],
    inclusions: [
      "Private car",
      "Professional driver",
      "Toll fees",
      "Pick-up & drop-off in Malang or Surabaya area",
      "Tour guide",
      "4WD Jeep at Bromo",
      "Entrance tickets (Bromo & Tumpak Sewu)",
      "Bottled water",
    ],
    exclusions: [
      "Personal expenses",
      "Lunch (recommended local stops available)",
      "Travel insurance",
      "Tips for guide & driver",
    ],
    itinerary: [
      { time: "00:30", title: "Hotel pick-up", description: "We collect you from your accommodation in the Malang area." },
      { time: "03:50", title: "Arrive at Bromo viewpoint", description: "Wait for the magical sunrise over the caldera." },
      { time: "06:00", title: "Bromo crater walk", description: "Cross the Sea of Sand by Jeep, then hike up to the active crater rim." },
      { time: "08:00", title: "Depart for Tumpak Sewu", description: "Scenic drive through the East Java highlands." },
      { time: "10:30", title: "Arrive at Tumpak Sewu", description: "Approach the iconic 'Thousand Waterfalls' viewpoint." },
      { time: "11:00", title: "Explore Tumpak Sewu area", description: "Walk down to the base for the full panorama." },
      { time: "13:00", title: "Lunch & rest", description: "Local Javanese cuisine break." },
      { time: "14:00", title: "Return journey", description: "Comfortable transfer back to Malang." },
      { time: "17:00", title: "Arrive back at hotel", description: "End of an unforgettable day." },
    ],
  },
  {
    slug: "bromo-ijen-2d-1n",
    title: "Bromo & Ijen",
    subtitle: "Pick-up from Malang or Surabaya",
    duration: "2D / 1N",
    priceEur: 200,
    badge: "Most Iconic",
    rating: 5,
    image:
      "/images/pake2-ijen-bromo.jpg",
    gallery: [
      "/images/pake2-ijen-bromo.jpg",
      "/images/pake2-ijen-bromo.jpg",
      "/images/pake2-ijen-bromo.jpg",
    ],
    category: "multi-day",
    description:
      "East Java's two greatest natural wonders in one journey: a Bromo sunrise on day one, followed by the otherworldly blue fire and turquoise crater lake of Ijen at dawn on day two. A bucket-list adventure with comfortable hotel rest in between.",
    highlights: [
      "Bromo sunrise & crater walk",
      "Hotel stay between the two volcanoes",
      "Ijen midnight hike to the blue fire",
      "Sunrise at the turquoise sulphur lake",
      "Private 4WD Jeep & private car throughout",
    ],
    inclusions: [
      "Private car & driver",
      "4WD Jeep at Bromo",
      "1 night hotel accommodation",
      "Tour guide for both volcanoes",
      "All entrance tickets",
      "Toll fees",
      "Bottled water",
    ],
    exclusions: [
      "Meals (unless specified)",
      "Gas mask rental at Ijen (~€5)",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { time: "Day 1 — 00:30", title: "Hotel pick-up in Malang" },
      { time: "Day 1 — 03:50", title: "Bromo sunrise viewpoint" },
      { time: "Day 1 — 06:00", title: "Bromo crater walk" },
      { time: "Day 1 — 12:00", title: "Lunch & transfer to Ijen area" },
      { time: "Day 1 — 17:00", title: "Hotel check-in & rest" },
      { time: "Day 2 — 00:30", title: "Depart for Ijen base camp" },
      { time: "Day 2 — 02:00", title: "Hike up Mount Ijen (~1.5h)" },
      { time: "Day 2 — 04:00", title: "Witness the blue fire & sunrise" },
      { time: "Day 2 — 08:00", title: "Descent & transfer back" },
      { time: "Day 2 — 14:00", title: "Drop-off in Malang or Banyuwangi" },
    ],
  },
  {
    slug: "tumpak-sewu-kapas-biru-1-day",
    title: "Tumpak Sewu & Kapas Biru",
    subtitle: "Pick-up from Malang or Surabaya",
    duration: "1 Day",
    priceEur: 100,
    badge: "Waterfall Lover",
    rating: 5,
    image:
      "/images/pake3-tumpaksewu-kapasbiru.jpg",
    gallery: [
      "/images/pake3-tumpaksewu-kapasbiru.jpg",
      "/images/pake3-tumpaksewu-kapasbiru.jpg",
      "/images/pake3-tumpaksewu-kapasbiru.jpg",
    ],
    category: "1-day",
    description:
      "A waterfall trifecta hidden in the lush valleys of Lumajang: the cinematic Tumpak Sewu, the cathedral-like Tetes Cave waterfall, and the soft blue-veiled Kapas Biru — all in one unforgettable day. Perfect for adventurous travellers who love nature.",
    highlights: [
      "Tumpak Sewu's panoramic 'Thousand Waterfalls' viewpoint",
      "Goa Tetes — descending waterfall caves",
      "Kapas Biru — the cotton-blue waterfall",
      "Private car with experienced driver",
      "Local guide for waterfall trails",
    ],
    inclusions: [
      "Private car & driver",
      "Local trekking guide",
      "All entrance tickets",
      "Pick-up & drop-off in Malang or Surabaya area",
      "Toll fees",
      "Bottled water",
    ],
    exclusions: ["Meals", "Personal expenses", "Tips"],
    itinerary: [
      { time: "05:00", title: "Hotel pick-up" },
      { time: "07:30", title: "Arrive at Tumpak Sewu viewpoint" },
      { time: "08:00", title: "Hike down for the panorama photo" },
      { time: "10:30", title: "Visit Goa Tetes" },
      { time: "12:30", title: "Lunch break" },
      { time: "13:30", title: "Transfer to Kapas Biru" },
      { time: "14:30", title: "Trek to Kapas Biru waterfall" },
      { time: "16:30", title: "Return journey" },
      { time: "19:00", title: "Arrive back at hotel" },
    ],
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((p) => p.slug === slug);
}
