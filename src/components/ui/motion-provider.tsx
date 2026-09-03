"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// "user" respects prefers-reduced-motion automatically for every Motion
// component in the tree — content still fades in, it just doesn't travel.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
