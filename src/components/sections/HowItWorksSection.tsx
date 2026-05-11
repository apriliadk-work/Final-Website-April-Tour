import { MessageCircle, ClipboardCheck, FileSignature, CreditCard, Plane } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "How to Book With Us" section — 5-step process from the company profile.
 */
const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Consult",
    description: "Reach out via WhatsApp, call, or our website. Tell us your dream trip and we'll listen.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Plan",
    description: "Our team designs a tailored itinerary with packages, pricing, and options for your approval.",
  },
  {
    icon: FileSignature,
    number: "03",
    title: "Confirm",
    description: "Agree on the details, sign the booking form, and make your deposit to secure the reservation.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Pay",
    description: "Complete payment securely via bank transfer, credit card, or installment plan (selected packages).",
  },
  {
    icon: Plane,
    number: "05",
    title: "Pack & Go!",
    description: "We send your full travel kit — tickets, vouchers, and tips. You just show up and enjoy!",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="The Process"
          title="How to book with us"
          subtitle="Five simple steps from inquiry to adventure. Most travellers go from message to confirmed itinerary in under 24 hours."
          align="center"
        />

        <div className="mt-16 relative">
          {/* Horizontal connector line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="relative text-center group">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-display text-[5rem] font-bold text-navy-100/60 leading-none -z-10">
                      {step.number}
                    </span>
                    <div className="relative z-10 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-cream-50 border-2 border-navy-100 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-50 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-navy-900 transition-colors group-hover:text-gold-700" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 font-display font-bold text-xl text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-700/80 leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
