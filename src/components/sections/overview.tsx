import { Hammer, Users, Trophy, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";

const PILLARS = [
  { icon: Hammer, title: "Build", description: "Turn an idea into a working AI-powered product." },
  { icon: Users, title: "Connect", description: "Meet builders, mentors and industry experts from around the world." },
  { icon: Trophy, title: "Compete", description: "Present your solution and compete for global recognition." },
  { icon: Sparkles, title: "Impact", description: "Build technology that solves a real, meaningful problem." },
];

export function Overview() {
  return (
    <section id="overview" className="relative bg-durby-paper-raised py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Overview"
          title="Build what comes next."
          description="Durby Global Hack brings together developers, designers, AI builders, founders and students from around the world to build ambitious AI-powered solutions to real-world problems."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <Card theme="light" className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-durby-paper-ink text-durby-paper">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-durby-paper-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{p.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Full-width editorial break — a deliberate change of rhythm so
            the page doesn't read as one card grid after another. */}
        <AnimatedSection delay={0.15} className="mt-20 border-t border-durby-paper-line pt-16">
          <p className="max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.01em] text-durby-paper-ink sm:text-3xl lg:text-4xl">
            No fixed problem statement. No required stack. Just{" "}
            <em className="text-durby-blue not-italic">ambitious builders</em>, real AI tools, and a stage that
            spans <em className="text-durby-blue not-italic">the whole world</em>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
