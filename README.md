# Maik Rohdich Garten- und Landschaftsbau

Technisches Grundprojekt für die zukünftige Website. Die sichtbare Startseite ist derzeit bewusst nur ein technischer Platzhalter und enthält keine finalen Website-Inhalte.

## Stack

- Next.js mit App Router
- React und TypeScript
- Tailwind CSS 4 mit CSS-first-Konfiguration
- pnpm
- ESLint und Prettier
- Playwright für End-to-End-Tests

## Voraussetzungen

- Node.js 20.9 oder neuer
- Corepack mit dem in `package.json` festgelegten pnpm 11.8.0

Die folgenden Projektbefehle verwenden Corepack direkt. Dafür ist kein globaler pnpm-Shim erforderlich. Die verfügbare Version lässt sich so prüfen:

```bash
corepack pnpm --version
```

Optional kann `corepack enable` einmalig ausgeführt werden, um auch die kürzere Schreibweise `pnpm ...` zu aktivieren. Unter Windows kann dies je nach Node.js-Installation erhöhte Schreibrechte erfordern.

## Lokale Installation

```bash
corepack pnpm install
```

Für den lokalen Entwicklungsserver:

```bash
corepack pnpm dev
```

Die Website ist anschließend unter <http://localhost:3000> erreichbar.

## Befehle

```bash
corepack pnpm dev          # Entwicklungsserver starten
corepack pnpm build        # Produktions-Build erstellen
corepack pnpm start        # Produktions-Build lokal starten
corepack pnpm lint         # ESLint ausführen
corepack pnpm typecheck    # TypeScript prüfen
corepack pnpm format       # Dateien mit Prettier formatieren
corepack pnpm format:check # Formatierung prüfen, ohne Dateien zu ändern
corepack pnpm test:e2e     # Playwright-Smoke-Test ausführen
corepack pnpm test:ui      # Playwright im UI-Modus öffnen
```

Ist der Corepack-Shim bereits aktiviert, können dieselben Scripts weiterhin direkt mit `pnpm ...` aufgerufen werden.

Vor dem ersten Playwright-Test muss der Browser einmalig installiert werden:

```bash
corepack pnpm exec playwright install chromium
```

Playwright startet seinen Next.js-Entwicklungsserver ebenfalls explizit über Corepack. Dadurch funktioniert `corepack pnpm test:e2e` auch dann, wenn `pnpm` selbst nicht global im `PATH` liegt.

## Inhalte und Assets

Bilder und Markenmaterial werden manuell in `public/brand` beziehungsweise in die passenden Unterordner von `public/images` gelegt. Das Projekt lädt keine Bilder oder sonstigen externen Assets automatisch herunter.

Ein CMS ist nicht installiert. Es kann später optional ergänzt werden, sobald Anforderungen und Anbieter feststehen. Auch die Deployment-Plattform wird zu einem späteren Zeitpunkt entschieden.

Der zuvor vorhandene statische Prototyp wurde unverändert unter `docs/legacy-static` archiviert und ist nicht Teil der Next.js-Anwendung.
