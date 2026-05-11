import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, Shield, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { stats, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "April Tour is a Malang-based travel agency crafting unforgettable East Java journeys since 2024. Trusted by travellers from over 25 countries.",
};

const values = [
  {
    icon: Heart,
    title: "Crafted with care",
    description: "Every itinerary is hand-designed around your pace, interests, and the rhythm of the destination — never copied from a template.",
  },
  {
    icon: Compass,
    title: "Local & honest",
    description: "We're based in Malang, East Java. Our guides know the back roads, the quiet viewpoints, and the warungs serving the best nasi goreng.",
  },
  {
    icon: Shield,
    title: "Safe & reliable",
    description: "Professional drivers, well-maintained vehicles, transparent pricing. We handle every detail so you can focus on the adventure.",
  },
  {
    icon: Users,
    title: "Travellers first",
    description: "From solo travellers to multi-generation families — over 25 countries trust us to deliver the East Java they dreamed of.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About April Tour"
        title="Travel Beyond Borders"
        subtitle="A small, dedicated team based in Malang, East Java — crafting unforgettable journeys for travellers from every corner of the world."
        image="https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Mount Ijen sunrise"
      />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Our story</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display font-bold text-display-md text-navy-900 leading-[1.05]">
                  Founded with a love for{" "}
                  <span className="italic text-gold-600">exploration.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-5 text-navy-700/90 leading-relaxed text-lg">
              <Reveal delay={0.2}>
                <p>
                  April Tour was founded in <strong>{siteConfig.founded}</strong> in
                  Malang, East Java, with one simple belief: that the best journeys
                  are the ones where every detail has been thought through, so the
                  traveller can simply be present.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  We're a full-service travel agency dedicated to crafting
                  unforgettable journeys for every type of traveller — from
                  weekend getaways to grand expeditions. From sunrise at Mount
                  Bromo to the otherworldly blue fire of Ijen, we've helped
                  travellers from over <strong>25 countries</strong> experience the
                  East Java they came for.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  Today, our work is what it always was: matching the right driver,
                  the right guide, and the right pace to the right traveller — and
                  doing it with the warmth that East Java itself is known for.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  variant={i === 1 ? "gold" : "navy"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cream-100/40">
        <div className="container">
          <SectionHeading
            eyebrow="What guides us"
            title="Our values"
            subtitle="Four principles we return to with every booking, every itinerary, every traveller."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="card card-hover h-full p-8 group">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700 transition-all group-hover:bg-gold-500 group-hover:text-cream-50">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-navy-900">
                          {v.title}
                        </h3>
                        <p className="mt-3 text-navy-700/85 leading-relaxed">
                          {v.description}
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

      {/* Image showcase */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=1600&q=85"
                  alt="Mount Bromo at sunrise"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="col-span-12 md:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&w=1200&q=85"
                  alt="Tumpak Sewu waterfall"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="col-span-12 md:col-span-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=85"
                  alt="Madakaripura Waterfall"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="col-span-12 md:col-span-8">
              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1623018035782-b269248df916?auto=format&fit=crop&w=1600&q=85"
                  alt="Ijen Crater blue fire"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
