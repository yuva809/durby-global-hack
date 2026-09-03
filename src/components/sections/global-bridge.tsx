import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

// The international-bridge section — deliberately its own full-width
// visual moment rather than another card grid, since this is the core of
// what makes the event distinct. No participant counts, university
// names, or partnership claims here — only the structural fact of what
// Durby is organizing.
export function GlobalBridge() {
  return (
    <section className="relative overflow-hidden bg-durby-bg-deep py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-durby-blue/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Bridge"
          title="One stage. Two ecosystems."
          description="Durby Global Hack connects ambitious students and innovators from India with technology, education and innovation partners from Germany — a global community of builders, in one event."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <AnimatedSection variant="slide-right" className="rounded-2xl border border-durby-line bg-durby-card p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hack-signal">Builders</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-durby-ink sm:text-5xl">India</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-durby-ink-dim">
              Ambitious students, developers and young builders — the ideas and the energy this event is built
              around.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade" delay={0.15} className="flex items-center justify-center py-4 lg:py-0">
            <span className="text-3xl font-light text-durby-ink-muted sm:text-5xl">×</span>
          </AnimatedSection>

          <AnimatedSection variant="slide-left" delay={0.1} className="rounded-2xl border border-durby-line bg-durby-card p-8 sm:p-10 lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-durby-blue-bright">Partners</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-durby-ink sm:text-5xl">Germany</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-durby-ink-dim lg:ml-auto">
              Universities, technology companies and innovation partners — exposure to the next generation of
              global builders.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
