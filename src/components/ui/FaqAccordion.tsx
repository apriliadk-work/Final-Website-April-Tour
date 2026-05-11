"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "@/types";

/**
 * Accessible accordion for the FAQ section.
 * - Keyboard accessible (button-driven)
 * - Animated open/close with Framer Motion
 */
interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <span className="font-display font-semibold text-lg md:text-xl text-navy-900 transition-colors group-hover:text-gold-700">
                {item.question}
              </span>
              <span
                aria-hidden
                className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-900 transition-all group-hover:bg-gold-500"
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-navy-700/85 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
