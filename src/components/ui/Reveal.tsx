"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Soft reveal wrapper used for staggered section entrances.
 * Wrap any block of content to fade-up on scroll into view.
 */
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance in pixels for the slide-up offset. Default: 24. */
  y?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      custom={{ delay, y }}
    >
      {children}
    </motion.div>
  );
}
