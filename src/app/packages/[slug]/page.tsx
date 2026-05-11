import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Clock, Check, X, MapPin, ArrowLeft, MessageCircle } from "lucide-react";
import { tourPackages, getPackageBySlug } from "@/data/packages";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { formatPrice } from "@/lib/utils";
import { whatsappLink } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Tour not found" };

  return {
    title: `${pkg.title} — ${pkg.subtitle}`,
    description: pkg.description,
    openGraph: {
      title: `${pkg.title} — April Tour`,
      description: pkg.description,
      images: [{ url: pkg.image }],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const inquiryMessage = `Hi April Tour! I'm interested in the *${pkg.title}* package (${pkg.duration}). Can you send me more info?`;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden flex items-end">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/50 to-navy-950/95" />

        <div className="container relative pb-16 md:pb-20">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-cream-100/80 hover:text-cream-50 text-sm transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All packages
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {pkg.badge && (
                <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {pkg.badge}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur text-xs font-semibold text-navy-900">
                <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
                {pkg.rating}.0
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-50/15 backdrop-blur text-xs font-semibold text-cream-50">
                <Clock className="h-3 w-3" />
                {pkg.duration}
              </span>
            </div>
            <h1 className="font-display font-bold text-display-lg text-cream-50 leading-[1.05] tracking-tight">
              {pkg.title}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-gold-300 italic font-display">
              {pkg.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-16">
              <Reveal>
                <div>
                  <span className="eyebrow">About this trip</span>
                  <p className="mt-5 text-lg leading-relaxed text-navy-700/90">
                    {pkg.description}
                  </p>
                </div>
              </Reveal>

              {/* Highlights */}
              <Reveal>
                <div>
                  <h2 className="font-display font-bold text-3xl text-navy-900 heading-underline">
                    Highlights
                  </h2>
                  <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-cream-100/50 border border-navy-100/50"
                      >
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-navy-800 leading-relaxed text-sm">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Itinerary */}
              <Reveal>
                <div>
                  <h2 className="font-display font-bold text-3xl text-navy-900 heading-underline">
                    Day-by-day itinerary
                  </h2>
                  <ol className="mt-10 relative">
                    <span
                      aria-hidden
                      className="absolute left-[1.625rem] top-2 bottom-2 w-px bg-navy-200"
                    />
                    {pkg.itinerary.map((step, i) => (
                      <li key={i} className="relative pl-16 pb-8 last:pb-0">
                        <span className="absolute left-0 top-0 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-navy-900 text-cream-50 font-display text-xs font-semibold">
                          {step.time.split(" — ").pop() ?? step.time}
                        </span>
                        <div>
                          {step.time.includes("—") && (
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold mb-1">
                              {step.time.split(" — ")[0]}
                            </p>
                          )}
                          <h3 className="font-display font-bold text-xl text-navy-900">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="mt-1.5 text-navy-700/80 leading-relaxed">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-sm italic text-navy-600">
                    PS: We can adjust the itinerary based on your schedule.
                  </p>
                </div>
              </Reveal>

              {/* Inclusions / Exclusions */}
              <Reveal>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-7 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <h3 className="font-display font-bold text-2xl text-emerald-900 mb-5">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-emerald-900/90 text-sm">
                          <Check className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.exclusions && pkg.exclusions.length > 0 && (
                    <div className="p-7 rounded-2xl bg-cream-100 border border-navy-100">
                      <h3 className="font-display font-bold text-2xl text-navy-900 mb-5">
                        Not included
                      </h3>
                      <ul className="space-y-3">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-navy-700/85 text-sm">
                            <X className="h-4 w-4 mt-0.5 text-navy-500 flex-shrink-0" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Sidebar — Booking card */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="card p-7 shadow-elegant">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">
                      Starting from
                    </p>
                    <p className="mt-2 font-display font-bold text-5xl text-navy-900">
                      {formatPrice(pkg.priceEur, "EUR")}
                      <span className="text-base font-normal text-navy-600 ml-1">
                        / pax
                      </span>
                    </p>
                    <p className="text-xs text-navy-600 mt-1">
                      Group pricing available — message us for a quote.
                    </p>

                    <div className="mt-6 space-y-3 text-sm">
                      <SidebarRow label="Duration" value={pkg.duration} />
                      <SidebarRow label="Pickup" value="Malang area" />
                      <SidebarRow label="Group size" value="1–8 travellers" />
                      <SidebarRow label="Languages" value="English, Indonesian" />
                    </div>

                    <a
                      href={whatsappLink(inquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full mt-7"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Book on WhatsApp
                    </a>
                    <Link href="/contact" className="btn-outline w-full mt-3">
                      Send inquiry form
                    </Link>

                    <p className="mt-5 text-xs text-navy-600 text-center">
                      Free cancellation up to 7 days before the trip
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-6 p-6 rounded-2xl bg-navy-900 text-cream-50">
                    <div className="flex items-center gap-2 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      Operating area
                    </div>
                    <p className="mt-3 font-display text-xl text-cream-50">
                      East Java, Indonesia
                    </p>
                    <p className="mt-2 text-sm text-cream-100/75 leading-relaxed">
                      Pick-up & drop-off included anywhere in the Malang area.
                      Surabaya and Juanda Airport pickups available with surcharge.
                    </p>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-navy-100 last:border-0">
      <span className="text-navy-600">{label}</span>
      <span className="font-semibold text-navy-900">{value}</span>
    </div>
  );
}
