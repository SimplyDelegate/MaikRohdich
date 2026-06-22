import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = createPageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
