import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, DISCORD_URL, GITHUB_URL, LINKEDIN_URL, DURBY_URL, EVENT } from "@/lib/config";

const LINKS = [
  { href: "#overview", label: "About" },
  { href: "#resources", label: "Rules" },
  { href: "#partners", label: "Partners" },
  { href: "#faq", label: "FAQ" },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
];

const SOCIALS = [
  { href: DISCORD_URL, label: "Discord", icon: MessageCircle },
  { href: GITHUB_URL, label: "GitHub", icon: Github },
  { href: LINKEDIN_URL, label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-durby-line bg-durby-bg-deep py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-durby-ink">
              <span className="h-2 w-2 rounded-full bg-hack-signal" />
              DURBY GLOBAL HACK
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-durby-ink-muted">
              An international AI hackathon by{" "}
              <a href={DURBY_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-durby-line underline-offset-4 hover:text-durby-ink-dim">
                Durby
              </a>
              , connecting builders from around the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-16">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-durby-ink-muted">Event</p>
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-durby-ink-dim transition-colors hover:text-durby-ink">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-durby-ink-muted">Community</p>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-durby-ink-dim transition-colors hover:text-durby-ink"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-durby-line pt-6 text-xs text-durby-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {EVENT.name}. All rights reserved.</p>
          <p>Organized by Durby.</p>
        </div>
      </div>
    </footer>
  );
}
