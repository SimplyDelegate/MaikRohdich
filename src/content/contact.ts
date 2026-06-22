export type ContactAction = {
  label: string;
  href: string | null;
  pendingLabel: string;
};

export const contactActions = {
  phone: {
    label: "Anrufen",
    href: null,
    pendingLabel: "Telefonnummer wird ergänzt",
  },
  whatsapp: {
    label: "WhatsApp",
    href: null,
    pendingLabel: "WhatsApp-Kontakt wird ergänzt",
  },
} satisfies Record<string, ContactAction>;
