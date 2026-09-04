"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  /** ISO 8601 datetime with offset — see EVENT_START in src/lib/config.ts. */
  target: string;
  className?: string;
}

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function getRemaining(target: string): Remaining {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

const UNITS: { key: keyof Omit<Remaining, "done">; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

/** Live countdown to `target` — styled as a departure-board display, not
 *  plain numbers, so it reads as an actual event clock. Renders zeros on
 *  the server and hydrates the real value on mount to avoid a
 *  server/client time mismatch. */
export function Countdown({ target, className }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState<Remaining>({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });

  useEffect(() => {
    setMounted(true);
    setRemaining(getRemaining(target));
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (mounted && remaining.done) {
    return (
      <div className={cn("mkt-glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5", className)}>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-durby-pulse rounded-full bg-hack-signal" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-hack-signal ring-1 ring-durby-paper-ink/10" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-durby-blue">Live now</p>
      </div>
    );
  }

  return (
    <div className={cn("flex items-stretch gap-2 sm:gap-3", className)} role="timer" aria-live="off" suppressHydrationWarning>
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="relative flex w-16 flex-col items-center overflow-hidden rounded-xl border border-durby-paper-line bg-durby-paper-raised py-3 shadow-durby-soft sm:w-20 sm:py-4"
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-durby-blue" />
          <span className="font-mono text-2xl font-semibold tabular-nums text-durby-paper-ink sm:text-3xl lg:text-4xl" suppressHydrationWarning>
            {String(remaining[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-durby-paper-ink-muted sm:text-[10px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
