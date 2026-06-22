import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { routes } from "@/lib/routes";

const audiences = [
  {
    title: "Privatkunden",
    text: "Finaler Text für Privatkunden folgt",
    href: routes.privateCustomers,
  },
  {
    title: "Gewerbekunden",
    text: "Finaler Text für Gewerbekunden folgt",
    href: routes.businessCustomers,
  },
] as const;

export function AudienceSwitchSection() {
  return (
    <Section className="bg-surface" labelledBy="audience-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-logo-green text-sm font-bold tracking-wide uppercase">
            Zielgruppenweiche
          </p>
          <h2
            className="mt-3 text-3xl font-semibold sm:text-4xl"
            id="audience-title"
          >
            Bereich auswählen
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {audiences.map((audience) => (
            <Card
              className="flex min-h-64 flex-col items-start"
              key={audience.href}
            >
              <h3 className="text-2xl font-semibold">{audience.title}</h3>
              <p className="text-anthracite/65 mt-3">{audience.text}</p>
              <Button
                className="mt-auto"
                href={audience.href}
                variant="secondary"
              >
                Zum Bereich
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
