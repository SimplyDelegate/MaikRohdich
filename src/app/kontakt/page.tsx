import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { contactActions } from "@/content/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Kontakt" });

export default function ContactPage() {
  return (
    <Section className="bg-surface" labelledBy="contact-page-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-logo-green text-sm font-bold tracking-wide uppercase">
            Seiten-Arbeitsstand
          </p>
          <h1
            className="mt-3 text-4xl font-semibold sm:text-5xl"
            id="contact-page-title"
          >
            Kontakt
          </h1>
          <p className="text-anthracite/65 mt-5 text-lg">
            Kontaktangaben werden ergänzt
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Direkter Kontakt</h2>
            <p className="text-anthracite/65 mt-3">
              Telefonnummer und WhatsApp-Kontakt werden ergänzt
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={contactActions.phone.href}
                variant="secondary"
                ariaLabel={`${contactActions.phone.label}: ${contactActions.phone.pendingLabel}`}
              >
                {contactActions.phone.label}
              </Button>
              <Button
                href={contactActions.whatsapp.href}
                ariaLabel={`${contactActions.whatsapp.label}: ${contactActions.whatsapp.pendingLabel}`}
              >
                {contactActions.whatsapp.label}
              </Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Kontaktformular</h2>
            <p className="text-anthracite/65 mt-3">
              Formularfelder und Versand werden nach Freigabe ergänzt
            </p>
            <div
              className="border-work-border bg-surface text-anthracite/60 mt-6 min-h-28 rounded-2xl border border-dashed p-5 text-sm"
              aria-label="Platzhalter für das Kontaktformular"
            >
              Kontaktformular wird ergänzt
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
