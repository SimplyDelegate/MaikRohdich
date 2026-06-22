import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homepageContent } from "@/content/homepage";
import { routes } from "@/lib/routes";

export function FaqPreviewSection() {
  const { faq } = homepageContent;

  return (
    <Section labelledBy="faq-title">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl" id="faq-title">
            {faq.title}
          </h2>
          <p className="text-anthracite/65 mt-3">{faq.text}</p>
        </div>
        <div className="border-work-border bg-surface rounded-3xl border border-dashed p-6 sm:p-8">
          <p className="font-medium">FAQ-Struktur wird ergänzt</p>
          <Button className="mt-6" href={routes.faq} variant="secondary">
            FAQ-Bereich öffnen
          </Button>
        </div>
      </Container>
    </Section>
  );
}
