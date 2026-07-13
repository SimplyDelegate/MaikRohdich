# Qualitätscheckliste

Diese Liste ist nach relevanten Änderungen proportional zum Umfang abzuarbeiten.

## Automatisierte Prüfung

- [ ] `pnpm build`
- [ ] `pnpm lint`
- [ ] `pnpm format:check`
- [ ] Playwright-Smoke-Test, wenn die Umgebung dies erlaubt
- [ ] Keine unerwarteten Fehler oder Warnungen in Browser und Terminal

## Responsive und Bedienung

- [ ] Desktop geprüft
- [ ] Tablet geprüft
- [ ] Mobilgerät geprüft
- [ ] Navigation per Tastatur bedienbar
- [ ] Fokuszustände sichtbar
- [ ] Touch-Ziele ausreichend groß und nicht überlagert
- [ ] Inhalt ohne horizontales Scrollen oder abgeschnittene Elemente
- [ ] Telefon und WhatsApp mobil schnell erreichbar
- [ ] CTA sichtbar, verständlich und situationsgerecht

## Inhalt und Vertrauen

- [ ] Keine Platzhalter wirken wie finale Website-Texte
- [ ] Keine erfundenen Fakten, Bewertungen, Zitate oder Projekte
- [ ] Keine unbelegten Zertifikate, Siegel oder Qualifikationen
- [ ] Keine Mitarbeiterzahl oder implizite Behauptung einer Teamgröße
- [ ] Privat- und Gewerbekunden nicht vermischt
- [ ] Keine spontane Besuchsmöglichkeit suggeriert
- [ ] Offene Aussagen klar markiert oder nicht veröffentlicht
- [ ] Logo im Header groß und klar sichtbar, sobald das echte Asset vorliegt

## Barrierearmut und Semantik

- [ ] Genau eine sinnvolle Hauptüberschrift je Seite
- [ ] Überschriftenfolge logisch
- [ ] Landmarken und native HTML-Elemente sinnvoll eingesetzt
- [ ] Links und Buttons semantisch korrekt unterschieden
- [ ] Bilder mit passendem Alternativtext oder leerem `alt` bei rein dekorativer Funktion
- [ ] Kontraste und Zustände verständlich
- [ ] Formulare beschriftet und Fehler verständlich ausgegeben

## Technik und Auffindbarkeit

- [ ] Keine kaputten internen oder externen Links
- [ ] Keine unnötige Dependency ergänzt
- [ ] Keine externen Fonts, Tracker oder Marketingtools ohne Freigabe
- [ ] Keine Internetbilder oder ungeklärten Assets eingebaut
- [ ] Metadaten zur Seite passend und ohne unbestätigte Angaben
- [ ] Strukturierte Daten enthalten ausschließlich bestätigte Fakten
- [ ] Keine sensiblen Daten oder Secrets committed

Nicht ausführbare Prüfungen sind mit Grund und verbleibendem Risiko im Arbeitsergebnis zu dokumentieren.
