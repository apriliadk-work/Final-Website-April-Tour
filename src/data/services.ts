import type { Service, FaqItem } from "@/types";

/**
 * Four core services from the company profile.
 * Icons reference lucide-react icon names.
 */
export const services: Service[] = [
  {
    icon: "Plane",
    title: "Airport Transfer",
    description:
      "Seamless transfers to and from Juanda International Airport (Surabaya) and Abdul Rachman Saleh Airport (Malang). SUVs for small groups, Hiace minibus for groups of more than five — always with professional drivers.",
  },
  {
    icon: "Car",
    title: "Car Rental",
    description:
      "A clean, well-maintained fleet of hatchbacks, SUVs, and MPVs to suit every travel style. Daily and multi-day rentals across the Malang region with optional drivers.",
  },
  {
    icon: "Mountain",
    title: "Tour Packages",
    description:
      "Curated tours across East Java — Mount Bromo, Tumpak Sewu, Madakaripura, Kapas Biru, Ijen Crater, and Batu City. Our 1-day Bromo + Tumpak Sewu trip is the brochure favourite.",
  },
  {
    icon: "Compass",
    title: "Custom Tour Planning",
    description:
      "Tell us where you want to go and how you like to travel — we design a flexible itinerary around your schedule, pace, and interests. Truly tailor-made.",
  },
];

/**
 * FAQ — answers reflect April Tour's actual operating model
 * (Malang-based, full-service, professional guides, flexible itineraries).
 */
export const faqItems: FaqItem[] = [
  {
    question: "How do I book a tour with April Tour?",
    answer:
      "Booking is simple: reach out via WhatsApp, email, or our contact form. We'll discuss your dream trip, design a tailored itinerary, and send you a quote. Once you confirm and pay the deposit, your reservation is secured and we send your full travel kit before departure.",
  },
  {
    question: "What's included in the Bromo & Tumpak Sewu 1-day tour?",
    answer:
      "Private car with professional driver, toll fees, pick-up and drop-off in the Malang area, English-speaking tour guide, 4WD Jeep at Bromo, all entrance tickets to Bromo and Tumpak Sewu, and bottled water throughout the day.",
  },
  {
    question: "Where do you pick up from?",
    answer:
      "Standard pick-up is anywhere in the Malang area (city centre, Batu, near Abdul Rachman Saleh Airport). Pick-ups from Surabaya, Juanda Airport, or other East Java locations can be arranged with a small surcharge.",
  },
  {
    question: "Can you customise the itinerary?",
    answer:
      "Absolutely — that's what we do best. We can adjust pick-up times, add or skip stops, extend nights at any destination, or build a fully custom multi-day route. Just tell us your priorities and constraints.",
  },
  {
    question: "What languages do your guides speak?",
    answer:
      "Our guides speak fluent English and Bahasa Indonesia. We've hosted travellers from over 25 countries and pride ourselves on clear, friendly communication throughout your trip.",
  },
  {
    question: "How fit do I need to be for these tours?",
    answer:
      "Most of our tours are accessible to travellers with average fitness. Bromo's crater walk is a short staircase climb. Tumpak Sewu has an easy upper viewpoint and a more demanding descent. The Ijen midnight hike (~1.5 hours up, steep) is the most physically demanding option.",
  },
  {
    question: "What's the best time of year to visit East Java?",
    answer:
      "April through October (dry season) offers the clearest skies for sunrise viewpoints and the easiest waterfall trails. The wet season (November–March) is greener and quieter but expect occasional rain, especially in the afternoon.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept bank transfer, credit card, and for selected packages, an installment plan. A deposit secures your booking; the balance is paid before or on the day of the tour.",
  },
];
