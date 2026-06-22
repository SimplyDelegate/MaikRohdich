export const routes = {
  home: "/",
  privateCustomers: "/privatkunden",
  businessCustomers: "/gewerbekunden",
  projects: "/projekte",
  faq: "/faq",
  about: "/ueber-uns",
  contact: "/kontakt",
} as const;

export type Route = (typeof routes)[keyof typeof routes];
