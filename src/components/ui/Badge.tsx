import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "bg-logo-yellow/25 text-anthracite inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
