import { SPONSOR_CATEGORIES } from "@/data/sponsors";
import { CONTACT_EMAIL } from "@/lib/config";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLACEHOLDER_COUNT = 4;

export function Sponsors() {
  return (
    <section id="partners" className="relative bg-durby-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sponsors & Partners"
          title="Backed by the industry, built for builders."
          description="Partner logos land here as they're confirmed. Interested in partnering? Reach out below."
        />

        <AnimatedSection delay={0.05} className="mt-12 rounded-2xl border border-hack-signal/20 bg-durby-card p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hack-signal">For Universities & Organizations</p>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-durby-ink sm:text-3xl">
            Reach the next generation of global builders.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-durby-ink-dim">
            Connect your institution or organization with ambitious students, developers and innovators from
            India and beyond — planned sponsor benefits are confirmed and shared once available.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-12">
          {SPONSOR_CATEGORIES.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.05}>
              <div className="flex flex-col gap-6 border-b border-durby-line pb-12 last:border-0 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:w-64 sm:shrink-0">
                  <h3 className="text-lg font-semibold text-durby-ink">{category.title}</h3>
                  <p className="mt-1.5 text-sm text-durby-ink-dim">{category.description}</p>
                </div>
                <div className={cn("grid flex-1 gap-3", category.slots.length === 1 ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-4")}>
                  {(category.slots.length > 0
                    ? category.slots.map((s) => s.name)
                    : Array.from({ length: category.placeholderCount ?? PLACEHOLDER_COUNT }, () => "Open slot")
                  ).map((label, j) => (
                    <div
                      key={j}
                      className={cn(
                        "flex items-center justify-center rounded-xl border border-dashed border-durby-line text-xs font-medium uppercase tracking-[0.1em] text-durby-ink-muted",
                        category.placeholderCount === 1 || category.slots.length === 1 ? "h-24" : "h-20",
                      )}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-base text-durby-ink-dim">Want your organization on this list?</p>
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
            Become a Partner
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
