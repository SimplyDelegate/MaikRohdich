import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export function Section({ children, className, id, labelledBy }: SectionProps) {
  return (
    <section
      className={cn("py-14 sm:py-20", className)}
      id={id}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  );
}
