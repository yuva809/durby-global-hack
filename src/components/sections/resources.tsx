import { ArrowUpRight } from "lucide-react";
import { RESOURCES } from "@/data/resources";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Resources() {
  return (
    <section id="resources" className="relative bg-durby-paper-raised py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading theme="light" eyebrow="Resources" title="Everything you need to start building." />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource, i) => (
            <AnimatedSection key={resource.title} delay={(i % 4) * 0.06}>
              <a
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-durby-paper-line bg-durby-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-durby-blue/30 hover:shadow-durby-elevated"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-durby-paper-ink text-durby-paper">
                    <resource.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-durby-paper-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-durby-blue" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-durby-paper-ink">{resource.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-durby-paper-ink-dim">{resource.description}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
