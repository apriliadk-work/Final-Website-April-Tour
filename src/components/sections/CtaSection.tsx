import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/config";

/**
 * Closing CTA banner — drives WhatsApp / contact conversions.
 */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-2">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&w=2400&q=85"
            alt="Tumpak Sewu waterfall"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/60" />
          <div className="absolute inset-0 grain" />

          <div className="relative px-8 py-20 md:py-28 md:px-16 lg:px-20">
            <div className="max-w-2xl">
              <Reveal>
                <span className="eyebrow text-gold-300 before:bg-gold-300">
                  Ready when you are
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display font-bold text-display-lg text-cream-50 leading-[1.05] tracking-tight">
                  Your East Java adventure starts with{" "}
                  <span className="italic text-gold-400">a single message.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-cream-100/85 leading-relaxed max-w-xl">
                  Tell us your dates, your dream destinations, and how you like to
                  travel. We'll come back within hours with a tailored itinerary and
                  a transparent quote.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappLink("Hi April Tour! I'd love to plan a trip to East Java.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold group"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <Link href="/contact" className="btn-outline-light group">
                    Send a request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
