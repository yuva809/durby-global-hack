import { JOIN_STEPS, ELIGIBILITY } from "@/data/steps";
import { REGISTRATION_URL } from "@/lib/config";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function HowToJoin() {
  return (
    <section id="how-to-join" className="relative bg-durby-paper-raised py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading theme="light" eyebrow="How to Join" title="Four steps to game day." />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {JOIN_STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div className="relative pl-1">
                <span className="text-5xl font-semibold tracking-tight text-durby-paper-line sm:text-6xl">{step.number}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-durby-paper-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-durby-paper-line bg-durby-paper-line sm:grid-cols-2 lg:grid-cols-5">
          {ELIGIBILITY.map((fact) => (
            <div key={fact.label} className="bg-durby-paper-raised p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-durby-blue">{fact.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{fact.value}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-14 flex justify-center">
          <Button href={REGISTRATION_URL} variant="primary">
            Register for the Hackathon
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
