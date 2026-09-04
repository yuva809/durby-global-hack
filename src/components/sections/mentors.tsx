import { JUDGES, MENTORS, type Person } from "@/data/mentors";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

function PersonCard({ person, delay, role }: { person: Person; delay: number; role: "Judge" | "Mentor" }) {
  const isJudge = role === "Judge";
  return (
    <AnimatedSection delay={delay}>
      <div className="group rounded-2xl border border-durby-paper-line bg-durby-paper-raised p-6 shadow-durby-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-durby-elevated">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold",
              isJudge ? "bg-hack-signal text-durby-paper-ink" : "bg-durby-blue text-white",
            )}
          >
            {person.initials}
          </div>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]",
              isJudge ? "bg-hack-signal text-durby-paper-ink" : "bg-durby-blue text-white",
            )}
          >
            {role}
          </span>
        </div>
        <h3 className="mt-5 text-base font-semibold text-durby-paper-ink">{person.name}</h3>
        <p className="text-sm text-durby-paper-ink-dim">
          {person.role} · {person.company}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.1em] text-durby-paper-ink-muted">{person.expertise}</p>
      </div>
    </AnimatedSection>
  );
}

export function Mentors() {
  return (
    <section id="mentors" className="relative bg-durby-tint-grey py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mentors & Judges"
          title="Guided by people who've built this before."
          description="Full roster confirmed closer to the event — here's the panel taking shape."
        />

        <div className="mt-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-durby-paper-ink-muted">Judges</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JUDGES.map((p, i) => (
              <PersonCard key={p.name} person={p} delay={i * 0.06} role="Judge" />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-durby-paper-ink-muted">Mentors</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MENTORS.map((p, i) => (
              <PersonCard key={p.name} person={p} delay={i * 0.06} role="Mentor" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
