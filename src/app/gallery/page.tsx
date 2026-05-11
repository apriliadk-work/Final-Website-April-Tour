import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Gallery — Moments from East Java",
  description:
    "A visual diary of East Java — Mount Bromo sunrises, Tumpak Sewu cascades, Ijen blue fire, hidden waterfalls, and travellers from around the world.",
};

/**
 * Gallery images — sourced from Unsplash for visual richness.
 * In production, replace these URLs with hosted client photos.
 *
 * Each image carries a span hint so we can build a varied,
 * editorial masonry layout instead of a uniform grid.
 */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=1600&q=85",
    alt: "Mount Bromo at sunrise",
    location: "Mount Bromo",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&w=1200&q=85",
    alt: "Tumpak Sewu Waterfall",
    location: "Tumpak Sewu",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=85",
    alt: "Mount Ijen sunrise",
    location: "Ijen Crater",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=85",
    alt: "Madakaripura Waterfall",
    location: "Madakaripura",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1623018035782-b269248df916?auto=format&fit=crop&w=1600&q=85",
    alt: "Ijen crater turquoise lake",
    location: "Ijen Crater",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1200&q=85",
    alt: "Kapas Biru Waterfall",
    location: "Kapas Biru",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=85",
    alt: "Tetes Cave waterfall",
    location: "Tetes Cave",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1600&q=85",
    alt: "Volcano landscape",
    location: "East Java",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
    alt: "Batu City landscape",
    location: "Batu City",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518002054494-3a6f53352b67?auto=format&fit=crop&w=1200&q=85",
    alt: "Hiking trail",
    location: "East Java",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=1200&q=85",
    alt: "Waterfall pool",
    location: "Hidden gem",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1600&q=85",
    alt: "Crater rim view",
    location: "Mount Bromo",
    span: "col-span-2 row-span-1",
  },
];

const categories = [
  "All",
  "Volcanoes",
  "Waterfalls",
  "Travellers",
  "Behind the scenes",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="A visual diary"
        title="Moments from East Java"
        subtitle="Sunrises over Bromo. Cascades at Tumpak Sewu. The blue fire at Ijen. A scrapbook of the places we&rsquo;ll take you."
        image="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Tumpak Sewu Waterfall"
      />

      <section className="section">
        <div className="container">
          {/* Category pills (decorative — no JS filtering for v1) */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  type="button"
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0
                      ? "bg-navy-900 text-cream-50"
                      : "bg-cream-100 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-ish grid using grid auto-rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((img, index) => (
              <Reveal
                key={img.src}
                delay={Math.min(index * 0.04, 0.3)}
                className={`relative group overflow-hidden rounded-2xl ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-semibold">
                    {img.location}
                  </p>
                  <p className="mt-1 text-cream-50 text-sm font-medium leading-tight">
                    {img.alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quote / closer */}
          <Reveal>
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <p className="font-display italic text-2xl md:text-3xl text-navy-800 leading-relaxed">
                &ldquo;Bromo and the waterfalls were so amazing places. It was for
                real the best trip in my life.&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-gold-700 uppercase tracking-[0.2em]">
                Natalia · Poland
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
