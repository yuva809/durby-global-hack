"use client";

import { ArrowUpRight } from "lucide-react";
import { TRACKS } from "@/data/tracks";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Challenge() {
  return (
    <section id="challenge" className="relative overflow-hidden bg-durby-bg py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Challenge"
          title="Build with AI. Solve something real."
          description="No fixed problem statement, no required stack — use any AI models, frameworks or tools you like. Pick a track below, or bring something we haven't thought of."
        />

        <div className="mt-16 divide-y divide-durby-line border-y border-durby-line">
          {TRACKS.map((track, i) => (
            <AnimatedSection key={track.number} delay={i * 0.05} amount={0.2}>
              <div tabIndex={0} className="group relative overflow-hidden rounded-lg py-8 sm:py-10">

                <div className="absolute inset-0 -translate-x-full bg-white/[0.03] transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0" />
                <div className="relative flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:gap-8 sm:px-4">
                  <span className="font-mono text-sm text-hack-signal sm:w-16 sm:text-base">{track.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-durby-ink transition-transform duration-500 group-hover:translate-x-2 group-focus-visible:translate-x-2 sm:text-3xl">
                      {track.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base text-durby-ink-dim">{track.description}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-durby-ink-muted">{track.detail}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-durby-line text-durby-ink-dim transition-all duration-500 group-hover:rotate-45 group-hover:border-hack-signal group-hover:text-hack-signal group-focus-visible:rotate-45 group-focus-visible:border-hack-signal group-focus-visible:text-hack-signal">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
