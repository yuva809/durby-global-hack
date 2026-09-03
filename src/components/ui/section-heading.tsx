import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** "light" for white-background sections — dark type, same accent. */
  theme?: "dark" | "light";
}

export function SectionHeading({ eyebrow, title, description, align = "left", className, theme = "dark" }: SectionHeadingProps) {
  const isLight = theme === "light";
  return (
    <AnimatedSection variant="fade-up" className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]", align === "center" && "justify-center", isLight ? "text-durby-blue" : "text-hack-signal")}>
          <span className={cn("h-1.5 w-1.5 rounded-full", isLight ? "bg-durby-blue" : "bg-hack-signal")} />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl",
          isLight ? "text-durby-paper-ink" : "text-durby-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-pretty text-base leading-relaxed sm:text-lg", isLight ? "text-durby-paper-ink-dim" : "text-durby-ink-dim")}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
