import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border-work-border shadow-work rounded-3xl border bg-white p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
