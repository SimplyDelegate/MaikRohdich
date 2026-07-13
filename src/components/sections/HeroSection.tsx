import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { homepageContent } from "@/content/homepage";
import { routes } from "@/lib/routes";

export function HeroSection() {
  const { hero } = homepageContent;

  return (
    <Section className="bg-surface" labelledBy="hero-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Badge>{hero.eyebrow}</Badge>
          <h1
            className="mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            id="hero-title"
          >
            {hero.title}
          </h1>
          <p className="text-anthracite/65 mt-5 max-w-xl text-lg">
            {hero.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.privateCustomers}>Privatkunden</Button>
            <Button href={routes.businessCustomers} variant="secondary">
              Gewerbekunden
            </Button>
          </div>
        </div>

        <PlaceholderImage label={hero.imageLabel} aspect="hero" />
      </Container>
    </Section>
  );
}
