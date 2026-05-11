import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/lib/config";

/**
 * About section on the home page.
 * Replicates the visual rhythm of the "About Our Tour" slide from the company profile.
 */
export function AboutSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">About April Tour</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display font-bold text-display-md md:text-[3.5rem] leading-[1.05] text-navy-900 tracking-tight">
                Trusted by travellers from over{" "}
                <span className="italic text-gold-600">25+</span> countries
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-navy-700/90 leading-relaxed max-w-xl">
                Founded with a love for exploration, April Tour is a full-service
                travel agency dedicated to crafting unforgettable journeys for every
                type of traveller.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-base text-navy-700/85 leading-relaxed max-w-xl">
                From weekend getaways to grand expeditions across East Java, we
                handle every detail — transport, guides, tickets, timing — so you
                can focus on the adventure itself.
              </p>
            </Reveal>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                  <StatCard
                    value={stat.value}
                    label={stat.label}
                    variant={i === 1 ? "gold" : i === 3 ? "outline" : "navy"}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10">
                <Link href="/about" className="btn-outline group">
                  Our story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=85"
                  alt="Traveller at Ijen Crater"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-cream-50/95 backdrop-blur text-xs font-semibold text-navy-900 uppercase tracking-[0.2em]">
                  Inspiring Travel · Since 2024
                </div>
              </div>
            </Reveal>

            {/* Decorative floating card */}
            <Reveal delay={0.4}>
              <div className="hidden md:block absolute -left-8 bottom-12 bg-cream-50 rounded-2xl shadow-elegant p-5 max-w-[220px] border border-navy-100/60">
                <div className="flex items-center gap-1 text-gold-500 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 1l2.5 6.5L19 8l-5 4.5L15.5 19 10 15l-5.5 4L6 12.5 1 8l6.5-.5L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-navy-700 leading-relaxed italic">
                  &ldquo;The best trip in my life. Bromo and the waterfalls were so
                  amazing!&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-semibold text-navy-900">
                  Natalia · Poland
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
