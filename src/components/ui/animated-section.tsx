"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionVariant = "fade-up" | "fade" | "blur" | "scale" | "slide-left" | "slide-right";

const VARIANTS: Record<AnimatedSectionVariant, Variants> = {
  "fade-up": { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(12px)", y: 12 }, visible: { opacity: 1, filter: "blur(0px)", y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  "slide-left": { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
};

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimatedSectionVariant;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  as?: "div" | "section" | "li";
}

/** Scroll-triggered reveal wrapper. `once: true` — animates in on first
 *  scroll into view and stays settled. */
export function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  amount = 0.3,
  as = "div",
}: AnimatedSectionProps) {
  const Component = as === "section" ? motion.section : as === "li" ? motion.li : motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
