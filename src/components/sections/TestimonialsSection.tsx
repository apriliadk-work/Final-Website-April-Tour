import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

/**
 * Testimonials section — showcases real client reviews from the company profile.
 * Uses a varied grid layout that emphasizes the longer reviews.
 */
export function TestimonialsSection() {
  return (
    <section className="section bg-cream-100/40 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgb(13 29 53) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Reviews & love letters"
          title="What our travellers say"
          subtitle="Honest reviews from travellers across 25+ countries who explored East Java with us."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Reveal key={t.name + t.country} delay={index * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
