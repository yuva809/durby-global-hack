"use client";

import { ArrowUpRight } from "lucide-react";
import { TRACKS } from "@/data/tracks";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Challenge() {
  return (
    <section id="challenge" className="relative overflow-hidden bg-durby-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture-dark opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Challenge"
          title="Build with AI. Solve something real."
          description="No fixed problem statement, no required stack — use any AI models, frameworks or tools you like. Pick a track below, or bring something we haven't thought of."
        />

        <div className="mt-16 grid grid-cols-1 gap-4">
          {TRACKS.map((track, i) => (
            <AnimatedSection key={track.number} delay={i * 0.05} amount={0.2}>
              <div
                tabIndex={0}
                className="group relative overflow-hidden rounded-2xl border border-durby-paper-line bg-durby-paper-raised p-6 shadow-durby-soft transition-all duration-300 hover:-translate-y-1 hover:border-durby-blue/30 hover:shadow-durby-elevated sm:p-8"
              >
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <span className="font-mono text-sm text-durby-blue sm:w-16 sm:text-base">{track.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-durby-paper-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                      {track.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base text-durby-paper-ink-dim">{track.description}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-durby-paper-ink-muted">{track.detail}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-durby-paper-line text-durby-paper-ink-dim transition-all duration-500 group-hover:rotate-45 group-hover:border-hack-signal group-hover:bg-hack-signal group-hover:text-durby-paper-ink group-focus-visible:rotate-45 group-focus-visible:border-hack-signal group-focus-visible:bg-hack-signal group-focus-visible:text-durby-paper-ink">
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
