import { BUILD_IDEAS } from "@/data/builds";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

// Every 4th and 7th card spans two columns on large screens to break the
// grid into an editorial bento layout instead of a flat, uniform grid.
function spanFor(i: number) {
  return i % 5 === 0 ? "lg:col-span-2" : "";
}

export function WhatYouCanBuild() {
  return (
    <section id="build" className="relative overflow-hidden bg-durby-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture-dark opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What You Can Build"
          title="Some starting points. Go further."
          description="These are prompts, not limits — the strongest submissions usually take a hard left from this list."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUILD_IDEAS.map((idea, i) => (
            <AnimatedSection key={idea.title} delay={(i % 6) * 0.05} className={cn(spanFor(i))}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-durby-paper-line bg-durby-paper-raised p-6 shadow-durby-soft transition-all duration-300 hover:-translate-y-1 hover:border-durby-blue/30 hover:shadow-durby-elevated">
                <span className="font-mono text-xs text-durby-paper-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-durby-paper-ink">{idea.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{idea.description}</p>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-hack-signal/0 blur-2xl transition-colors duration-500 group-hover:bg-hack-signal/20" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
