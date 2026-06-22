import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gewerbekunden",
});

export default function BusinessCustomersPage() {
  return <PlaceholderPage title="Gewerbekunden" />;
}
