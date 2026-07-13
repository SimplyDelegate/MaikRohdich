import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Projekte" });

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      title="Projekte"
      note="Freigegebene Projekte und Projektbilder werden ergänzt"
    />
  );
}
