"use client";

import { motion } from "framer-motion";
import { Globe, BrainCircuit, MapPin } from "lucide-react";
import { REGISTRATION_URL, EVENT, EVENT_START, EVENT_DATE_CONFIRMED } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";

const METADATA = [
  { icon: MapPin, label: "India × Germany" },
  { icon: BrainCircuit, label: "AI × Innovation" },
  { icon: Globe, label: "Global" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-durby-bg-deep pt-28 pb-16 sm:pt-32">
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture opacity-60" />
      <div className="pointer-events-none absolute inset-0 mkt-grain animate-durby-grain opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-durby-blue/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[560px] translate-x-1/4 rounded-full bg-hack-signal/10 blur-[120px] animate-durby-drift" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-durby-bg-deep to-transparent" />

      {/* Decorative signature mark — two concentric dashed rings, slowly
          counter-rotating. Purely a visual identity motif (the kind of
          "seal" a premium tech event uses to feel like a real production,
          not a landing page); respects reduced-motion via the global rule
          in globals.css. Hidden below lg so it never competes with copy
          on narrow viewports. */}
      <div className="pointer-events-none absolute -right-24 -top-24 hidden lg:block">
        <div className="h-[420px] w-[420px] animate-hack-spin-slow rounded-full border border-dashed border-hack-signal/15" />
        <div className="absolute inset-8 h-[356px] w-[356px] animate-hack-spin-slow rounded-full border border-dashed border-durby-blue/15 [animation-direction:reverse] [animation-duration:34s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div
            variants={item}
            className="mkt-glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-hack-signal"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-durby-pulse rounded-full bg-hack-signal" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hack-signal" />
            </span>
            {EVENT.edition} · Registration Open
          </motion.div>

          <motion.p variants={item} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-durby-ink-dim">
            {EVENT.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-durby-ink sm:text-7xl lg:text-[5.5rem]"
          >
            Build the future with <span className="mkt-text-signal">AI.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-durby-ink-dim sm:text-xl">
            An international AI hackathon connecting ambitious builders from India and Germany to solve
            real-world problems, create innovative products, and compete on a global stage.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            {METADATA.map((m) => (
              <span
                key={m.label}
                className="mkt-glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-durby-ink-dim"
              >
                <m.icon className="h-3.5 w-3.5 text-hack-signal" />
                {m.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={REGISTRATION_URL} variant="signal">
              Register Now
            </Button>
            <Button href="#challenge" variant="secondary">
              Explore the Challenge
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-16 border-t border-durby-line pt-8">
            {EVENT_DATE_CONFIRMED ? (
              <>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-durby-ink-muted">
                  Hackathon begins in
                </p>
                <Countdown target={EVENT_START} />
              </>
            ) : (
              <div className="mkt-glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-durby-pulse rounded-full bg-hack-signal" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-hack-signal" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-durby-ink-dim">
                  Dates announced soon
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
