import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { contactActions } from "@/content/contact";
import { homepageContent } from "@/content/homepage";
import { routes } from "@/lib/routes";

export function ContactCtaSection() {
  const { contact } = homepageContent;

  return (
    <Section
      className="bg-logo-green text-white"
      labelledBy="contact-cta-title"
    >
      <Container className="text-center">
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          id="contact-cta-title"
        >
          {contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">{contact.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href={contactActions.phone.href}
            variant="secondary"
            ariaLabel={`${contactActions.phone.label}: ${contactActions.phone.pendingLabel}`}
          >
            {contactActions.phone.label}
          </Button>
          <Button
            href={contactActions.whatsapp.href}
            variant="secondary"
            ariaLabel={`${contactActions.whatsapp.label}: ${contactActions.whatsapp.pendingLabel}`}
          >
            {contactActions.whatsapp.label}
          </Button>
          <Button href={routes.contact} variant="quiet">
            Kontaktseite
          </Button>
        </div>
      </Container>
    </Section>
  );
}
