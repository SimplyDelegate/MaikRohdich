import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type PlaceholderPageProps = {
  title: string;
  note?: string;
};

export function PlaceholderPage({
  title,
  note = "Finaler Text folgt",
}: PlaceholderPageProps) {
  return (
    <Section className="bg-surface min-h-[55dvh]" labelledBy="page-title">
      <Container>
        <div className="border-work-border shadow-work max-w-3xl rounded-3xl border bg-white p-7 sm:p-12">
          <Badge>Seiten-Arbeitsstand</Badge>
          <h1
            className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
            id="page-title"
          >
            {title}
          </h1>
          <p className="text-anthracite/65 mt-5 text-lg">{note}</p>
        </div>
      </Container>
    </Section>
  );
}
