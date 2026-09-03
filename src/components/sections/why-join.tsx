import { VALUE_PROPS } from "@/data/value";
import { PRICING_NOTE } from "@/lib/config";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";

export function WhyJoin() {
  return (
    <section className="relative bg-durby-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Why Join"
          title="Entry is paid. Here's what it gets you."
          description={PRICING_NOTE}
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v, i) => (
            <AnimatedSection key={v.title} delay={(i % 4) * 0.06}>
              <Card theme="light" className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-durby-paper-ink text-durby-paper">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-durby-paper-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{v.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
