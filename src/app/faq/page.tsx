import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "FAQ" });

export default function FaqPage() {
  return (
    <PlaceholderPage
      title="FAQ"
      note="Geprüfte Fragen und Antworten werden ergänzt"
    />
  );
}
