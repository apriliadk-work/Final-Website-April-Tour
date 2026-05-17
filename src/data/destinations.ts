import type { Destination } from "@/types";

/**
 * Destinations covered by April Tour, all in East Java, Indonesia.
 * Sourced from the company profile.
 */
export const destinations: Destination[] = [
  {
    slug: "mount-bromo",
    name: "Mount Bromo",
    region: "Probolinggo",
    type: "volcano",
    image:
      "/images/hero-bromo.jpg",
    shortDescription:
      "An active volcano set inside a vast caldera — home to East Java's most iconic sunrise.",
    description:
      "Mount Bromo (2,329 m) is part of the Tengger massif and one of Indonesia's most photographed volcanoes. Travellers cross the Sea of Sand by 4WD Jeep before climbing the staircase to the smoking crater rim. The pre-dawn viewpoint offers a sunrise panorama with Mount Semeru smoking in the distance.",
    highlights: [
      "Sunrise viewpoint at Penanjakan",
      "4WD Jeep across the Sea of Sand",
      "Walk to the active crater rim",
      "Tengger highland villages",
    ],
  },
  {
    slug: "tumpak-sewu",
    name: "Tumpak Sewu Waterfall",
    region: "Lumajang",
    type: "waterfall",
    image:
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The 'Thousand Waterfalls' — a sweeping amphitheatre of cascading water at the foot of Semeru.",
    description:
      "Tumpak Sewu is widely considered the most cinematic waterfall in Indonesia. From the upper viewpoint, dozens of cascades fan out in a horseshoe more than 100 metres tall. The bolder option is descending to the base for the full panorama with Mount Semeru towering behind.",
    highlights: [
      "Upper panoramic viewpoint",
      "Descent to the waterfall base",
      "Tetes Cave nearby",
      "Lush tropical river valley",
    ],
  },
  {
    slug: "ijen-crater",
    name: "Ijen Crater",
    region: "Banyuwangi",
    type: "volcano",
    image:
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A turquoise sulphur lake guarded by the world-famous electric blue fire.",
    description:
      "Mount Ijen is famous for two phenomena: at night, the sulphuric gases ignite in mesmerising blue flames at the crater floor; at dawn, the world's largest acidic crater lake glows turquoise under the sunrise. The midnight hike is challenging but unforgettable.",
    highlights: [
      "Blue fire at night (4 AM viewing)",
      "Turquoise sulphur crater lake",
      "Sunrise at the rim",
      "Working sulphur miners' trail",
    ],
  },
  {
    slug: "madakaripura",
    name: "Madakaripura Waterfall",
    region: "Probolinggo",
    type: "waterfall",
    image:
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The 'Eternal Waterfall' — a hidden cathedral of falling water tucked inside a moss-covered canyon.",
    description:
      "According to legend, this is where the great general Gajah Mada meditated. The walk in passes under cascading curtains of water before opening into a circular chamber where a single 200 m fall plunges from above. Bring waterproof gear — you will get soaked.",
    highlights: [
      "Curtain-style waterfall entry",
      "200m main waterfall in a circular canyon",
      "Historical & spiritual significance",
      "Combinable with Bromo on the same day",
    ],
  },
  {
    slug: "kapas-biru",
    name: "Kapas Biru Waterfall",
    region: "Lumajang",
    type: "waterfall",
    image:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A soft blue veil of water that drops 100 metres into a forest pool — the 'Blue Cotton' fall.",
    description:
      "Less crowded than Tumpak Sewu, Kapas Biru rewards a moderate jungle trek with one of East Java's most photogenic single-drop waterfalls. The mist diffuses sunlight into the signature 'cotton' effect that gave the fall its name.",
    highlights: [
      "Photogenic single-drop fall",
      "Quiet jungle trek",
      "Crystal-clear pool",
      "Pairs well with Tumpak Sewu",
    ],
  },
  {
    slug: "tetes-cave",
    name: "Tetes Cave (Goa Tetes)",
    region: "Lumajang",
    type: "cave",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A multi-tiered cave-waterfall system that pours through stalactite-rich limestone walls.",
    description:
      "On the way to or from Tumpak Sewu, Tetes Cave offers a moss-green, cathedral-like world where waterfalls flow through and over limestone formations. A short trek from the main road, perfect for a side stop.",
    highlights: [
      "Multi-tier waterfalls inside the cave",
      "Limestone stalactite formations",
      "Combo with Tumpak Sewu",
      "Easy trek for most fitness levels",
    ],
  },
  {
    slug: "batu-city",
    name: "Batu City",
    region: "Malang Regency",
    type: "city",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A cool-climate hill town packed with theme parks, apple orchards, and panoramic viewpoints.",
    description:
      "Set 800m above sea level, Batu is East Java's family-friendly playground. The city tour combines Selecta gardens, Coban Rondo waterfall, and the Batu Night Spectacular — perfect for travellers mixing nature with entertainment.",
    highlights: [
      "Apple orchard visits",
      "Coban Rondo waterfall",
      "Selecta botanical garden",
      "Cool mountain climate year-round",
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
