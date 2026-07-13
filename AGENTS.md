# Arbeitsregeln für Codex

## Verbindlicher Rahmen

- Lies vor einer Aufgabe die dafür relevanten Dateien unter `docs/`. Beginne bei unklarem Kontext mit `00-client-brief.md`, `01-strategy.md` und `09-open-decisions.md`.
- Explizite aktuelle Nutzeranweisungen haben Vorrang. Dokumentiere neue Entscheidungen in der passenden Datei nur, wenn dies beauftragt ist.
- Erfinde keine Fakten, Bewertungen, Zertifikate, Siegel, Mitarbeiterzahlen, Projektorte, Referenzen oder Kundenzitate. Markiere fehlende Angaben als offen.
- Behandle Strukturtexte und Platzhalter nie ungeprüft als finale Website-Texte. Insbesondere `05-homepage-structure.md` ist nur eine grobe, änderbare Orientierung.
- Trenne Privat- und Gewerbekunden in Informationsarchitektur, Inhalt und Nutzerführung klar.
- Gestalte hochwertig, zugänglich, bodenständig, fachlich und realistisch – nicht demonstrativ luxuriös, künstlich oder überdimensioniert.
- Priorisiere mobil Telefon und WhatsApp. Kommuniziere keine spontane Besuchsmöglichkeit; Termine und Besuche erfolgen nur nach Vereinbarung.

## Technische Leitplanken

- Nutze Next.js App Router, TypeScript, Tailwind CSS und pnpm.
- Baue barrierearm, responsive und komponentenorientiert. Verwende CSS Modules nur für komplexe Spezialfälle.
- Vermeide unnötige Abhängigkeiten. Installiere kein CMS und keine Tracking-, Marketing- oder Font-Dienste ohne explizite Freigabe.
- Lade keine Bilder aus dem Internet. Lokale Assets gehören nach `public/brand` und `public/images`.
- Bereite Metadaten und später Schema.org strukturiert vor, trage aber keine unbestätigten Daten ein.

## Prüfung und Projektdokumentation

- Prüfe relevante Änderungen mit `pnpm build`, `pnpm lint`, `pnpm format:check` und – wenn möglich – dem Playwright-Smoke-Test.
- Prüfe UI-Änderungen auf Desktop, Tablet und Mobilgerät nach `docs/07-quality-checklist.md`.
- Nutze die Detailregeln in `docs/00-client-brief.md` bis `docs/09-open-decisions.md`. Der alte statische Entwurf unter `docs/legacy-static/` ist nur Archiv und keine verlässliche Quelle für finale Inhalte.
