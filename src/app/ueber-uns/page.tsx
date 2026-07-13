import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Über uns" });

export default function AboutPage() {
  return <PlaceholderPage title="Über uns" />;
}
