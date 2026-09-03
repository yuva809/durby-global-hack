"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { REGISTRATION_URL } from "@/lib/config";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#challenge", label: "Challenge" },
  { href: "#prizes", label: "Prizes" },
  { href: "#timeline", label: "Schedule" },
  { href: "#how-to-join", label: "Join" },
  { href: "#judging", label: "Judging" },
  { href: "#mentors", label: "Mentors" },
  { href: "#resources", label: "Resources" },
  { href: "#partners", label: "Partners" },
  { href: "#faq", label: "FAQ" },
];

/** Tracks which section is currently in view so the nav can highlight it —
 *  a small "designed, not assembled" touch on an 8-link nav where it's
 *  otherwise easy to lose your place on a long single-page site. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.href.slice(1)));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] pl-5 pr-2.5 shadow-durby-glass backdrop-blur-[32px] backdrop-saturate-150 sm:h-[72px] sm:pl-6 sm:pr-3">
          <Link href="/" className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-durby-ink">
            <span className="h-2 w-2 rounded-full bg-hack-signal" />
            <span>DURBY</span>
            <span className="hidden text-durby-ink-muted sm:inline">/</span>
            <span className="hidden text-durby-ink-dim sm:inline">GLOBAL HACK</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-200",
                    isActive ? "text-durby-ink" : "text-durby-ink-dim hover:bg-white/[0.06] hover:text-durby-ink",
                  )}
                >
                  {l.label}
                  {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-hack-signal" />}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex">
            <Button href={REGISTRATION_URL} variant="signal" className="text-sm">
              Register
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-durby-ink transition-colors hover:bg-white/[0.08] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <div
          className={cn(
            "mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-durby-bg/95 shadow-durby-glass backdrop-blur-[32px] transition-[max-height,opacity,margin-top,border-color] duration-300 lg:hidden",
            open ? "mt-2 max-h-[28rem] opacity-100" : "mt-0 max-h-0 border-transparent opacity-0",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3.5 py-3 text-sm text-durby-ink-dim hover:bg-white/[0.06] hover:text-durby-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Persistent mobile registration bar — on a long single-page site,
          burying "Register" inside the hamburger menu means it's often
          out of reach. This keeps the primary conversion action one tap
          away at all times below the lg breakpoint, where the inline
          navbar button is hidden. */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-durby-line bg-durby-bg/95 p-3 shadow-durby-glass backdrop-blur-[32px] lg:hidden">
        <Button href={REGISTRATION_URL} variant="signal" className="w-full justify-center">
          Register Now
        </Button>
      </div>
    </>
  );
}
