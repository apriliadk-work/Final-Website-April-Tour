import { Plane, Car, Mountain, Compass, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

/**
 * Services grid — four cards mirroring the company profile.
 * Icon names are mapped to lucide-react components.
 */
const iconMap: Record<string, LucideIcon> = {
  Plane,
  Car,
  Mountain,
  Compass,
};

const accentColors = ["bg-teal-500", "bg-red-700", "bg-gold-500", "bg-navy-900"];

export function ServicesSection() {
  return (
    <section className="section bg-cream-100/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-gold-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          eyebrow="What we offer"
          title="Our Services"
          subtitle="Everything you need for the perfect East Java journey — from airport pickup to fully customised multi-day expeditions."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="card card-hover h-full p-8 md:p-10 group relative overflow-hidden">
                  {/* Top accent line */}
                  <span
                    aria-hidden
                    className={`absolute top-0 left-0 right-0 h-1 ${accentColors[index]} transition-all duration-500 group-hover:h-1.5`}
                  />

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-cream-50 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:rotate-6">
                      {Icon && <Icon className="h-6 w-6" strokeWidth={1.75} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-2xl text-navy-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-navy-700/85 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
