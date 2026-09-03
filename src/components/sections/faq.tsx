import { FAQ } from "@/data/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="relative bg-durby-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading theme="light" eyebrow="FAQ" title="Frequently asked questions." align="center" className="mx-auto" />

        <AnimatedSection delay={0.1} className="mt-16 rounded-3xl border border-durby-line bg-durby-bg-deep px-6 sm:px-10">
          <Accordion items={FAQ} className="border-t-0" />
        </AnimatedSection>
      </div>
    </section>
  );
}
