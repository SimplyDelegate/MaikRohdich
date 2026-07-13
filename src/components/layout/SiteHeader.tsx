import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactActions } from "@/content/contact";
import { primaryNavigation } from "@/content/navigation";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header
      className="border-work-border border-b bg-white"
      data-testid="site-header"
    >
      <Container>
        <div className="flex min-h-28 items-center justify-between gap-6 py-4">
          <Link
            className="border-logo-green/50 bg-surface text-anthracite hover:bg-surface-strong flex min-h-20 min-w-48 items-center justify-center rounded-2xl border border-dashed px-5 text-center text-sm font-semibold transition-colors sm:min-w-60"
            href={routes.home}
            aria-label={`${site.name} – Startseite`}
          >
            {site.logoPlaceholder}
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              href={contactActions.phone.href}
              variant="secondary"
              ariaLabel={`${contactActions.phone.label}: ${contactActions.phone.pendingLabel}`}
            >
              {contactActions.phone.label}
            </Button>
            <Button
              href={contactActions.whatsapp.href}
              ariaLabel={`${contactActions.whatsapp.label}: ${contactActions.whatsapp.pendingLabel}`}
            >
              {contactActions.whatsapp.label}
            </Button>
          </div>
        </div>

        <nav
          className="border-work-border border-t"
          aria-label="Hauptnavigation"
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 py-2 lg:justify-end">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-anthracite hover:bg-surface-strong hover:text-logo-green block rounded-lg px-3 py-3 text-sm font-semibold transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
