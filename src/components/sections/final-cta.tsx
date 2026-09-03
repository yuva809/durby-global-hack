import { REGISTRATION_URL } from "@/lib/config";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-durby-bg-deep py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 mkt-grid-texture opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hack-signal/[0.08] blur-[160px]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <AnimatedSection>
          <h2 className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-durby-ink sm:text-6xl lg:text-7xl">
            Ready to build the future?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-durby-ink-dim sm:text-xl">
            Your next idea could go further than you think. Registration is open now, worldwide.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={REGISTRATION_URL} variant="signal" className="text-base">
              Register Now
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
