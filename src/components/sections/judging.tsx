"use client";

import { motion } from "framer-motion";
import { JUDGING_CRITERIA } from "@/data/judging";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

// Highest weight reads at full opacity, lightest at the faintest — a
// single brand color doing the work of a five-color chart without
// breaking the "blue is an accent, not a palette" rule.
const OPACITY_STEPS = [1, 0.8, 0.62, 0.46, 0.32];

export function Judging() {
  return (
    <section id="judging" className="relative bg-durby-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Judging Criteria"
          title="How submissions are scored."
          description="Every project is scored against the same five criteria, by the full judging panel — weighted exactly as shown below."
        />

        {/* At-a-glance summary: one bar, five weighted segments. The
            itemized breakdown below repeats the same numbers with room
            to explain each one — this is the shape of the whole score
            before you read a word. */}
        <AnimatedSection delay={0.05} className="mt-16">
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-durby-paper-line">
            {JUDGING_CRITERIA.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ width: 0 }}
                whileInView={{ width: `${c.weight}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.08 }}
                className="h-full bg-durby-blue first:rounded-l-full last:rounded-r-full"
                style={{ opacity: OPACITY_STEPS[i] ?? 0.3 }}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {JUDGING_CRITERIA.map((c, i) => (
              <div key={c.label} className="flex items-center gap-2 text-xs font-medium text-durby-paper-ink-dim">
                <span className="h-2 w-2 rounded-full bg-durby-blue" style={{ opacity: OPACITY_STEPS[i] ?? 0.3 }} />
                {c.label} · {c.weight}%
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-8 border-t border-durby-paper-line pt-16">
          {JUDGING_CRITERIA.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.06} amount={0.5}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-durby-paper-ink">{c.label}</h3>
                  <p className="text-sm text-durby-paper-ink-dim">{c.description}</p>
                </div>
                <span className="font-mono text-2xl font-semibold text-durby-blue">{c.weight}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-durby-paper-line">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.weight}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
                  className="h-full rounded-full bg-durby-blue"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
