import { Award, Check } from "lucide-react";
import { PRIZES, SPECIAL_AWARDS } from "@/data/prizes";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

export function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden bg-durby-bg-deep py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-hack-signal/[0.06] blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Prizes"
          title="A prize pool worth building for."
          description="Final figures are confirmed closer to the event — the structure below is locked."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PRIZES.map((prize, i) => (
            <AnimatedSection key={prize.place} delay={i * 0.1} className={cn(prize.featured && "lg:-mt-6")}>
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8",
                  prize.featured
                    ? "border-hack-signal/30 bg-durby-card shadow-hack-glow"
                    : "border-durby-line bg-durby-card",
                )}
              >
                {prize.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-hack-signal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-durby-bg-deep">
                    Grand Prize
                  </span>
                )}
                <Award className={cn("h-7 w-7", prize.featured ? "text-hack-signal" : "text-durby-ink-muted")} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-durby-ink-dim">{prize.label}</p>
                <p className={cn("mt-3 font-semibold tracking-tight text-durby-ink", prize.featured ? "text-5xl sm:text-6xl" : "text-4xl")}>
                  {prize.currency === "EUR" ? "€" : "$"}
                  {prize.amount}
                </p>
                <ul className="mt-8 space-y-3">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm text-durby-ink-dim">
                      <Check className={cn("h-4 w-4 shrink-0", prize.featured ? "text-hack-signal" : "text-durby-ink-muted")} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-durby-ink-muted">Special Awards</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIAL_AWARDS.map((award) => (
              <div key={award.title} className="rounded-2xl border border-durby-line bg-durby-card/60 p-6 transition-colors duration-300 hover:border-hack-signal/30">
                <h4 className="text-base font-semibold text-durby-ink">{award.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-durby-ink-dim">{award.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
