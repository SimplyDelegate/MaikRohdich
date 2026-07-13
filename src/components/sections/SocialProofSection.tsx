import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homepageContent } from "@/content/homepage";

export function SocialProofSection() {
  const { socialProof } = homepageContent;

  return (
    <Section labelledBy="social-proof-title">
      <Container>
        <Card className="border-dashed text-center shadow-none">
          <h2 className="text-2xl font-semibold" id="social-proof-title">
            {socialProof.title}
          </h2>
          <p className="text-anthracite/65 mt-3">{socialProof.text}</p>
        </Card>
      </Container>
    </Section>
  );
}
