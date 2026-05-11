"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { navLinks, whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";

/**
 * Site-wide responsive navigation.
 * - Becomes glass-light after scroll on light pages
 * - Hero pages (homepage) start transparent over the hero, transition on scroll
 * - Mobile drawer menu with framer-motion
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Determine the visual style based on page + scroll state
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : scrolled
              ? "glass-light shadow-soft"
              : "bg-cream-50 border-b border-navy-100"
        )}
      >
        <div className="container flex items-center justify-between h-20">
          <Logo variant={transparent ? "light" : "dark"} />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    transparent
                      ? "text-cream-50/90 hover:text-cream-50"
                      : "text-navy-900 hover:text-gold-700",
                    active && (transparent ? "text-cream-50" : "text-gold-700")
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full",
                        transparent ? "bg-gold-300" : "bg-gold-500"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink("Hi April Tour! I'd like to book a tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                transparent
                  ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                  : "bg-navy-900 text-cream-50 hover:bg-navy-800"
              )}
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                transparent
                  ? "text-cream-50 hover:bg-cream-50/10"
                  : "text-navy-900 hover:bg-navy-100"
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-cream-50 lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex items-center justify-between p-6 border-b border-navy-100">
                <Logo variant="dark" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-navy-900 hover:bg-navy-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 space-y-1" aria-label="Mobile">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between py-4 border-b border-navy-100 font-display text-2xl transition-colors",
                          active ? "text-gold-700" : "text-navy-900 hover:text-gold-700"
                        )}
                      >
                        {link.label}
                        <span className="text-sm font-sans text-navy-400">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-navy-100">
                <a
                  href={whatsappLink("Hi April Tour! I'd like to book a tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
