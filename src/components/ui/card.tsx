import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** "dark" = glass card for dark sections. "light" = raised paper card for light sections. */
  theme?: "dark" | "light";
  hover?: boolean;
}

export function Card({ children, theme = "dark", hover = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        theme === "dark"
          ? cn("border border-durby-line bg-durby-card shadow-durby-soft", hover && "hover:-translate-y-1 hover:border-white/20 hover:bg-durby-card-hover")
          : cn("border border-durby-paper-line bg-durby-paper-raised shadow-durby-soft", hover && "hover:-translate-y-1 hover:shadow-durby-elevated"),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
