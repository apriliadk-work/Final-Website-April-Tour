import Link from "next/link";
import Image from "next/image";
import { Home, MessageCircle, Compass } from "lucide-react";
import { whatsappLink } from "@/lib/config";

/**
 * Custom 404 — keeps users on-brand and offers paths back into the site.
 */
export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=2400&q=85"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-900/75 to-navy-950/95" />
      <div className="absolute inset-0 grain" />

      <div className="container relative py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-px w-10 bg-gold-300" />
            Lost on the trail
          </span>

          <h1 className="mt-6 font-display font-bold text-cream-50 leading-[0.9] tracking-tight">
            <span className="block text-[8rem] md:text-[12rem] text-gold-400 leading-none">
              404
            </span>
            <span className="block text-display-md mt-2 italic font-light">
              This path doesn&apos;t lead anywhere.
            </span>
          </h1>

          <p className="mt-8 text-lg text-cream-100/85 leading-relaxed max-w-xl">
            The page you&apos;re looking for has wandered off into the East Java
            mist. Let us help you find your way back to the adventure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/" className="btn-gold">
              <Home className="h-4 w-4" />
              Back to home
            </Link>
            <Link href="/packages" className="btn-outline-light">
              <Compass className="h-4 w-4" />
              Browse packages
            </Link>
            <a
              href={whatsappLink("Hi April Tour! I'd like to plan a trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream-100/80 hover:text-gold-300 text-sm font-medium transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Or just message us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
