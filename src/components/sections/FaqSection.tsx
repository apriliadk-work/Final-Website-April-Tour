import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/services";

/**
 * FAQ section — uses the FaqAccordion interactive component.
 */
export function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently asked"
              subtitle="Quick answers to the questions we get most often. Still curious? Drop us a WhatsApp — we usually reply within an hour."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <FaqAccordion items={faqItems} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
