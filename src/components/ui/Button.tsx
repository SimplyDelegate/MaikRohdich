import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string | null;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-anthracite text-white hover:bg-logo-green border-anthracite",
  secondary:
    "border-work-border bg-white text-anthracite hover:border-logo-green hover:bg-surface",
  quiet:
    "border-transparent bg-surface-strong text-anthracite hover:bg-logo-yellow/30",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
    "focus-visible:outline-logo-yellow focus-visible:outline-3 focus-visible:outline-offset-3",
    variants[variant],
    disabled && "cursor-not-allowed opacity-55",
    className,
  );

  if (href && !disabled) {
    return (
      <a className={styles} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      type="button"
      disabled={disabled || !href}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
