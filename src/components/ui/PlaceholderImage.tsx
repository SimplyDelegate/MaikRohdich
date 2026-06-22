import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  aspect?: "hero" | "landscape" | "square";
};

const aspects = {
  hero: "aspect-[4/3] lg:aspect-[5/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export function PlaceholderImage({
  label,
  className,
  aspect = "landscape",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "border-logo-green/45 bg-surface-strong text-anthracite/70 grid place-items-center overflow-hidden rounded-3xl border border-dashed p-6 text-center text-sm font-medium",
        aspects[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
