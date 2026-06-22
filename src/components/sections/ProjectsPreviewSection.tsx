import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { homepageContent } from "@/content/homepage";
import { routes } from "@/lib/routes";

export function ProjectsPreviewSection() {
  const { projects } = homepageContent;

  return (
    <Section className="bg-surface" labelledBy="projects-title">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2
              className="text-3xl font-semibold sm:text-4xl"
              id="projects-title"
            >
              {projects.title}
            </h2>
            <p className="text-anthracite/65 mt-3">{projects.text}</p>
          </div>
          <Button href={routes.projects} variant="secondary">
            Projektbereich öffnen
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((position) => (
            <Card className="p-4 shadow-none" key={position}>
              <PlaceholderImage label="Projektbild wird ergänzt" />
              <p className="text-anthracite/65 px-2 pt-4 text-sm font-medium">
                Projektangaben werden ergänzt
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
