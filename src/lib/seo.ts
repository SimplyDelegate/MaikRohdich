import type { Metadata } from "next";

const siteName = "Maik Rohdich Garten- und Landschaftsbau";

type PageMetadataOptions = {
  title?: string;
};

export function createPageMetadata({
  title,
}: PageMetadataOptions = {}): Metadata {
  const workingTitle = title
    ? `${title} – Arbeitsstand | ${siteName}`
    : `Website-Arbeitsstand | ${siteName}`;

  return {
    title: workingTitle,
    description: "Finaler Beschreibungstext folgt.",
    robots: {
      index: false,
      follow: false,
    },
  };
}
