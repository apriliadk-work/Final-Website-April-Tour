"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/**
 * Cinematic homepage hero with the Mount Bromo image from the company profile.
 * - Full-bleed image with Ken Burns effect
 * - Editorial display headline split into animated lines
 * - Soft gold underline anchor matching the company brochure
 */
export function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/hero-bromo.jpg"
          alt="Mount Bromo at sunrise — East Java, Indonesia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="container relative h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300"
          >
            <span className="h-px w-10 bg-gold-300" />
            April Tour · Company Profile 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 font-display font-bold text-cream-50 text-display-xl leading-[0.95] tracking-tighter"
          >
            Travel
            <br />
            <span className="italic font-light">Beyond</span>{" "}
            <span className="relative inline-block">
              Borders
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-2 bg-gold-500 -skew-x-3"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-xl text-base md:text-lg text-cream-100/85 leading-relaxed"
          >
            Premium East Java journeys — from the smoking caldera of Mount Bromo to
            the cathedral waters of Tumpak Sewu. Crafted with care since 2024.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/packages" className="btn-gold group">
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="btn-outline-light group">
              <Play className="h-4 w-4" />
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Floating stat panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="hidden md:flex absolute right-8 lg:right-12 bottom-28 lg:bottom-32 backdrop-blur-md bg-cream-50/10 border border-cream-50/20 rounded-2xl p-6 max-w-[280px]"
        >
          <div>
            <p className="font-display text-5xl font-bold text-cream-50 leading-none">
              25<span className="text-gold-400">+</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-100/70">
              Countries trusted us
            </p>
            <p className="mt-3 text-sm text-cream-100/85 leading-relaxed">
              Travellers from across the globe choose April Tour for East Java.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-100/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px bg-cream-100/40">
          <span className="block h-3 w-px bg-gold-400 animate-pulse" />
        </span>
      </motion.div>
    </section>
  );
}
