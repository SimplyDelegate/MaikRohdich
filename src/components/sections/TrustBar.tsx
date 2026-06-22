import { Container } from "@/components/ui/Container";
import { homepageContent } from "@/content/homepage";

export function TrustBar() {
  return (
    <section
      className="border-work-border border-y bg-white py-6"
      aria-labelledby="trust-title"
    >
      <Container>
        <h2 className="sr-only" id="trust-title">
          Vertrauensmerkmale
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {homepageContent.trust.map((item) => (
            <li
              className="bg-surface text-anthracite/70 rounded-xl px-4 py-3 text-center text-sm font-medium"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
