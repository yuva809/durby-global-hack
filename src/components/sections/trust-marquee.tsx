import { MARQUEE_ITEMS } from "@/data/marquee";

// A continuous identity band between the hero and the overview — the
// second beat of the "serious global hackathon" impression, right after
// the hero itself. Two identical copies sit side by side in one flex row;
// animating that row by exactly -50% (see animate-hack-marquee in
// tailwind.config.ts) loops seamlessly since the second copy always
// slides in where the first left off. aria-hidden on the clone keeps
// screen readers from reading the list twice.
export function TrustMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-durby-line bg-durby-bg-deep py-4">
      <div className="mkt-fade-x flex w-max animate-hack-marquee">
        {[0, 1].map((clone) => (
          <div key={clone} aria-hidden={clone === 1 || undefined} className="flex shrink-0 items-center gap-8 pr-8">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-durby-ink-dim">{item}</span>
                <span className="h-1 w-1 rounded-full bg-hack-signal" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
