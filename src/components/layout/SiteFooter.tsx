import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-work-border bg-anthracite border-t pb-24 text-white md:pb-0">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-3 text-sm text-white/65">
            Unternehmensdaten werden ergänzt
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">
            Einsatzgebiet
          </h2>
          <p className="mt-3 text-sm text-white/65">
            Finale Angaben werden ergänzt
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Kontakt</h2>
          <p className="mt-3 text-sm text-white/65">
            Kontaktangaben werden ergänzt
          </p>
        </div>

        <nav aria-label="Navigation im Footer">
          <h2 className="text-sm font-bold tracking-wide uppercase">Links</h2>
          <ul className="mt-3 space-y-2">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/55">
          {site.contentStatus}
        </Container>
      </div>
    </footer>
  );
}
