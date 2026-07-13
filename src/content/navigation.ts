import { routes, type Route } from "@/lib/routes";

export type NavigationItem = {
  label: string;
  href: Route;
};

export const primaryNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Privatkunden", href: routes.privateCustomers },
  { label: "Gewerbekunden", href: routes.businessCustomers },
  { label: "Projekte", href: routes.projects },
  { label: "FAQ", href: routes.faq },
  { label: "Über uns", href: routes.about },
  { label: "Kontakt", href: routes.contact },
];
