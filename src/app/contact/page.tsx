import type { Metadata } from "next";
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { BookingForm } from "@/components/ui/BookingForm";
import { Reveal } from "@/components/ui/Reveal";
import { contactConfig, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact — Plan Your East Java Trip",
  description:
    "Contact April Tour to plan your East Java adventure. WhatsApp +62 857-3045-1637, email apriliadk04@outlook.com, or send us your trip request via the form.",
};

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contactConfig.whatsappDisplay,
    href: whatsappLink("Hi April Tour! I'd like to plan a trip."),
    description: "Fastest way — usually within an hour",
    accent: "bg-emerald-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    description: "For detailed inquiries & quotes",
    accent: "bg-navy-900",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${contactConfig.instagram}`,
    href: contactConfig.instagramUrl,
    description: "See where our travellers have been",
    accent: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Malang, East Java",
    href: "https://maps.google.com/?q=Malang,East+Java,Indonesia",
    description: "Pickups across all of East Java",
    accent: "bg-gold-500",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Plan your East Java journey"
        subtitle="If you need further assistance or would like to request any trip in East Java, please don&apos;t hesitate to contact us."
        image="/images/contact-hero.jpg"
        imageAlt="Madakaripura Waterfall"
      />

      {/* Contact cards */}
      <section className="section pb-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={i * 0.1}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block card card-hover h-full p-7 relative overflow-hidden"
                  >
                    <span
                      aria-hidden
                      className={`absolute top-0 left-0 right-0 h-1 ${card.accent} transition-all duration-500 group-hover:h-1.5`}
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-navy-900 transition-all duration-500 group-hover:bg-navy-900 group-hover:text-cream-50 group-hover:rotate-6">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
                      {card.label}
                    </p>
                    <p className="mt-1 font-display font-bold text-lg text-navy-900 break-words">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm text-navy-600/85">
                      {card.description}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + side info */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Trip inquiry form</span>
                <h2 className="mt-5 font-display font-bold text-display-md text-navy-900 leading-[1.05] tracking-tight">
                  Tell us about your{" "}
                  <span className="italic text-gold-600">dream trip.</span>
                </h2>
                <p className="mt-5 text-navy-700/85 leading-relaxed text-lg max-w-xl">
                  Fill in the form and we&apos;ll send you a tailored itinerary and
                  transparent quote within hours.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 p-7 md:p-9 rounded-3xl bg-cream-100/50 border border-navy-100/50">
                  <BookingForm />
                </div>
              </Reveal>
            </div>

            {/* Side info */}
            <aside className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="rounded-3xl bg-navy-900 text-cream-50 p-8 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgb(232 176 63) 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative">
                    <span className="eyebrow text-gold-300 before:bg-gold-300">
                      Response time
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl">
                      We reply quickly.
                    </h3>
                    <p className="mt-3 text-cream-100/85 leading-relaxed text-sm">
                      Most inquiries get a response within an hour during the day.
                      For urgent same-day or next-day trips, WhatsApp is the
                      fastest way to reach us.
                    </p>
                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-gold-400 flex-shrink-0" />
                        <span className="text-cream-100/85">
                          <strong className="text-cream-50">7 AM – 10 PM</strong>{" "}
                          (GMT+7) — daily
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0" />
                        <span className="text-cream-100/85">
                          Based in <strong className="text-cream-50">Malang</strong>,
                          serving all of East Java
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-navy-100 bg-cream-50 p-8">
                  <span className="eyebrow">Direct booking</span>
                  <h3 className="mt-4 font-display font-bold text-2xl text-navy-900">
                    Prefer to skip the form?
                  </h3>
                  <p className="mt-3 text-navy-700/85 leading-relaxed text-sm">
                    Send us a WhatsApp message — we&apos;ll figure out the rest
                    together.
                  </p>
                  <a
                    href={whatsappLink(
                      "Hi April Tour! I'd like to plan an East Java trip."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mt-6"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message us on WhatsApp
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="rounded-3xl bg-gold-100 p-8 border border-gold-200">
                  <span className="eyebrow text-navy-900 before:bg-navy-900">
                    The promise
                  </span>
                  <h3 className="mt-4 font-display font-bold text-xl text-navy-900">
                    Travel Beyond Borders
                  </h3>
                  <p className="mt-3 text-navy-800/85 leading-relaxed text-sm italic">
                    &ldquo;Trusted by travellers from over 25+ countries since 2024.
                    Your East Java adventure begins with a single message.&rdquo;
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
