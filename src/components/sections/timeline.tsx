"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TIMELINE } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="timeline" className="relative bg-durby-tint-grey py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Timeline"
          title="Seven stages. One global event."
          description="Dates below are placeholders — the shape of the schedule is final, exact dates land with registration."
        />

        <div ref={trackRef} className="relative mt-16">
          <div className="absolute left-[15px] top-2 hidden h-[calc(100%-16px)] w-px bg-durby-paper-line sm:block" />
          {/* Fills in as the section scrolls through view — makes the
              journey feel like something you travel through, not a
              static list. once:true elsewhere in the page means most
              motion here settles after first view; this one is the
              deliberate exception, tied to scroll position itself. */}
          <motion.div
            className="absolute left-[15px] top-2 hidden w-px origin-top bg-durby-blue sm:block"
            style={{ height: "calc(100% - 16px)", scaleY: progress }}
          />
          <ol className="space-y-10 sm:space-y-0">
            {TIMELINE.map((step, i) => (
              <AnimatedSection key={step.title} as="li" delay={i * 0.06} amount={0.4} className="relative sm:py-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex items-center gap-4 sm:w-8 sm:justify-center">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-durby-blue bg-durby-paper-raised">
                      <span className="h-2.5 w-2.5 rounded-full bg-durby-blue" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-durby-blue sm:hidden">{step.label}</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-durby-paper-line bg-durby-paper-raised p-6 shadow-durby-soft sm:mt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold tracking-tight text-durby-paper-ink">{step.title}</h3>
                      <span className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-durby-blue">{step.window}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
