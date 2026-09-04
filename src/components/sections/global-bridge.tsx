import { GraduationCap, Code2, Palette, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

const ROLES = [
  { icon: GraduationCap, label: "Students" },
  { icon: Code2, label: "Developers" },
  { icon: Palette, label: "Designers" },
  { icon: Rocket, label: "Founders" },
  { icon: Sparkles, label: "AI Builders" },
];

// The global-community section — a deliberate full-width visual moment,
// not another card grid. Organized around who shows up (roles), not
// where they're from — the event is worldwide, so this section never
// names specific countries or fabricates participant/country counts.
// The dashed connector line running through the role chips is a light
// stand-in for a "network" visual — nodes on one path, no map or count.
export function GlobalBridge() {
  return (
    <section className="relative overflow-hidden bg-durby-tint-blue py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="One Global Stage"
          title="Ideas have no borders."
          description="Durby Global Hack brings together students, developers, designers, founders and AI builders from around the world to learn, build, compete and connect."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-durby-blue/25 sm:block" />
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            {ROLES.map((role, i) => (
              <AnimatedSection key={role.label} variant="scale" delay={i * 0.06}>
                <div className="flex items-center gap-2.5 rounded-full border border-durby-paper-line bg-durby-paper-raised px-5 py-3 shadow-durby-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-durby-blue/30 hover:shadow-durby-elevated">
                  <span className="flex h-2 w-2 rounded-full bg-durby-blue" />
                  <role.icon className="h-4 w-4 text-durby-blue" />
                  <span className="text-sm font-medium text-durby-paper-ink">{role.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
