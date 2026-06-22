import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Privatkunden" });

export default function PrivateCustomersPage() {
  return <PlaceholderPage title="Privatkunden" />;
}
