import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { homepageContent } from "@/content/homepage";

export function AuthoritySection() {
  const { authority } = homepageContent;

  return (
    <Section labelledBy="authority-title">
      <Container className="grid items-center gap-8 md:grid-cols-2">
        <PlaceholderImage
          label="Persönliches Bild wird ergänzt"
          aspect="square"
        />
        <div>
          <p className="text-logo-green text-sm font-bold tracking-wide uppercase">
            Fachliche Autorität
          </p>
          <h2
            className="mt-3 text-3xl font-semibold sm:text-4xl"
            id="authority-title"
          >
            {authority.title}
          </h2>
          <p className="text-anthracite/65 mt-5">{authority.text}</p>
          <p className="text-anthracite/55 mt-3 text-sm">
            Belege und freigegebene Qualifikationsangaben werden ergänzt
          </p>
        </div>
      </Container>
    </Section>
  );
}
