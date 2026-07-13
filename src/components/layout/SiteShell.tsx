import type { ReactNode } from "react";

import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-dvh">
      <a
        className="text-anthracite sr-only z-[100] rounded-md bg-white px-4 py-3 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        href="#main-content"
      >
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  );
}
