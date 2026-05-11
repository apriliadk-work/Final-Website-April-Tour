import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, contactConfig, navLinks, whatsappLink } from "@/lib/config";
import { tourPackages } from "@/data/packages";

/**
 * Site-wide footer with brand, navigation, packages, and contact info.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-cream-100/80 overflow-hidden">
      {/* Decorative gold accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-cream-100/70 max-w-sm">
              {siteConfig.tagline}. {siteConfig.shortDescription}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-cream-50 text-base mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-100/70 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-cream-50 text-base mb-5">
              Popular Tours
            </h4>
            <ul className="space-y-3 text-sm">
              {tourPackages.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="text-cream-100/70 hover:text-gold-300 transition-colors"
                  >
                    {pkg.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-cream-50 text-base mb-5">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:+${contactConfig.whatsapp}`}
                  className="text-cream-100/85 hover:text-gold-300 transition-colors"
                >
                  {contactConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="text-cream-100/85 hover:text-gold-300 transition-colors break-all"
                >
                  {contactConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-4 w-4 text-gold-400 mt-1 flex-shrink-0" />
                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/85 hover:text-gold-300 transition-colors"
                >
                  @{contactConfig.instagram}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-cream-100/85">{contactConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-cream-100/50">
            © {currentYear} {siteConfig.name}. All rights reserved. Operated by April Tour.
          </p>
          <p className="text-xs text-cream-100/50 italic font-display">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
