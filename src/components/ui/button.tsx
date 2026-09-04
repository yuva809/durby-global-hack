import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "signal" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

/**
 * The one CTA family used everywhere. "primary" carries the Durby brand
 * blue. "signal" is reserved for the single loudest CTA on the page (the
 * hero's Register button) — Durby's signature circular-arrow badge, in
 * this event's lime signal color instead of blue, so the primary
 * conversion action is unmistakable against the rest of the page.
 */
export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const isExternal = external ?? href.startsWith("http");
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (variant === "primary" || variant === "signal") {
    const isSignal = variant === "signal";
    return (
      <Link
        href={href}
        {...externalProps}
        className={cn(
          "group inline-flex items-center justify-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-sm font-medium transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5",
          isSignal ? "bg-hack-signal text-durby-bg-deep hover:bg-hack-signal-dim shadow-hack-glow" : "bg-durby-blue text-white hover:bg-durby-blue-bright",
          className,
        )}
      >
        <span>{children}</span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45",
            isSignal ? "bg-durby-bg-deep/15" : "bg-white/20",
          )}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        {...externalProps}
        className={cn(
          "mkt-glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-durby-paper-ink transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-durby-blue/40",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...externalProps}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-1 py-3 text-sm font-medium text-durby-paper-ink-dim transition-colors duration-200 hover:text-durby-paper-ink",
        className,
      )}
    >
      {children}
    </Link>
  );
}
