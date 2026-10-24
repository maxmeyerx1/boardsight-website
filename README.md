# BoardSight – Firmenwebseite

Unternehmens-Webseite für **BoardSight**, eine Schweizer Firma. Die Seite präsentiert die Firma, ihre Leistungen und den Einsatz des Werkzeugs BoardLens.

Stack: Next.js 15 (App Router), TypeScript (strict), Tailwind CSS 3, shadcn/ui (Radix), Framer Motion, Lucide-Icons.

Das Projekt ist eigenständig. Es enthält kein Login, keine Datenbank, keinen Kundenbereich und keine Anbindung an den BoardLens-Code.

## Projekt starten

Voraussetzung: Node.js 20 oder neuer (empfohlen: 22 LTS).

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Build lokal starten
npm run lint     # ESLint
```

Optional `.env.example` nach `.env.local` kopieren und `NEXT_PUBLIC_SITE_URL` setzen. Ohne diesen Wert wird auf Vercel automatisch die Produktions-URL verwendet, lokal `http://localhost:3000`.

## Board-Package-URL

Der Button „Board-Package“ oben rechts liest sein Ziel aus **`src/config/site.ts`**:

```ts
boardPackageUrl: "",
```

- **Leer:** Der Button ist sichtbar, hat aber kein Ziel und zeigt beim Hover (bzw. Antippen) „Bald verfügbar“.
- **Gesetzt** (z. B. `"https://portal.example.ch"`): Der Button öffnet die URL im selben Tab.

In derselben Datei stehen Firmenname, Kontaktdaten und Navigation.

## Inhalte

Alle Texte liegen unter **`src/content/`**. Sie lassen sich anpassen, ohne das Layout zu ändern:

| Datei | Inhalt |
| --- | --- |
| `hero.ts` | Headline, Subline, CTAs |
| `trust.ts` | Laufband unter dem Hero (Grundsätze, später Kundenlogos) |
| `services.ts` | Leistungen |
| `process.ts` | Schritte „So arbeiten wir“ |
| `boardlens.ts` | BoardLens-Abschnitt, Feature-Tabs, Beispielzahlen im Dashboard-Mockup |
| `sovereignty.ts` | Abschnitt Schweizer Souveränität |
| `audiences.ts` | Zielgruppen |
| `stats.ts` | Kennzahlen (Counter) |
| `pricing.ts` | Abos und Preise |
| `team.ts` | Über uns, Werte, Team (leer = Team-Raster ausgeblendet) |
| `testimonials.ts` | Referenzen (leer = Abschnitt ausgeblendet) |
| `faq.ts` | FAQ |
| `cta.ts` | Abschluss-CTA |
| `contact.ts` | Kontaktformular (Labels, Fehlermeldungen) |
| `footer.ts` | Footer-Texte |
| `legal.ts` | Impressum, Datenschutz, Nutzungsbedingungen |

Platzhalter sind mit `[TODO: ...]` markiert. Alle offenen Stellen finden:

```bash
grep -rn "TODO" src
```

Wichtig vor dem Livegang:

- Keine Kundenzahlen, Zertifikate, Partner oder Testimonials eintragen, die nicht belegt bzw. freigegeben sind.
- Die Aussage „bis zu 80 % weniger Aufwand“ (`hero.ts`, `services.ts`, `stats.ts`) muss intern belegbar sein.
- Impressum und Datenschutzerklärung sind in der Schweiz Pflicht. Die Texte in `legal.ts` sind Platzhalter und müssen von einer Fachperson geprüft werden.
- Das Kontaktformular versendet noch nichts. Der Platzhalter-Handler `submitContactForm` steht in `src/components/sections/contact.tsx` und muss durch einen echten Versand ersetzt werden (z. B. Route Handler unter `src/app/api/contact/route.ts` oder ein Formular-Dienst).

## Logo

- **Symbol:** zwei Gipfel auf einer Grundlinie (steigende Entwicklung, Überblick), oben rechts ein Fadenkreuz als „Sight“.
- **Wortmarke:** „boardsight“ in Kleinbuchstaben, Inter SemiBold mit engem Tracking, als Pfade (keine Schriftabhängigkeit).
- **React-Komponenten:** `BrandLogo` und `BrandSymbol` in `src/components/brand/logo.tsx`. Die Hauptfarbe folgt `currentColor`, die Akzentfarbe ist über `accentClassName` steuerbar.
- **Dateien für den Export:** `public/brand/boardsight-logo.svg` (für helle Flächen), `public/brand/boardsight-logo-inverse.svg` (für dunkle Flächen), `public/brand/boardsight-symbol.svg`
- **Favicon:** `src/app/icon.svg`, **OG-Bild:** `src/app/opengraph-image.png` (1200 × 630 px, Alt-Text in `opengraph-image.alt.txt`)

Schutzzone: mindestens die Höhe des Fadenkreuzes rund um das Logo freihalten. Auf hellem Grund `neutral-900` mit Akzent `brand-500`, auf dunklem Grund Weiss mit Akzent `accent-400`.

## Design-Tokens

Farben stehen als CSS-Variablen in `src/app/globals.css` (`:root`) und werden in `tailwind.config.ts` als `brand-*`, `accent-*` und `neutral-*` bereitgestellt. Die geprüften Kontrastwerte (WCAG AA) sind dort kommentiert. `accent-400` nur auf dunklem Grund oder als Fläche verwenden, nicht als Textfarbe auf hellem Grund.

## SEO

- Metadata und OG-Tags pro Seite über `pageMetadata()` in `src/lib/seo.ts`
- Strukturierte Daten (schema.org `Organization`) im Root-Layout; nur ausgefüllte Angaben werden ausgegeben
- `sitemap.xml` und `robots.txt` werden aus `src/app/sitemap.ts` und `src/app/robots.ts` erzeugt

## Deployment auf GitHub Pages

Die Seite wird als statische Website exportiert (`output: "export"` in `next.config.ts`). `npm run build` erzeugt den Ordner `out/`.

Bei jedem Push auf `main` baut der Workflow `.github/workflows/deploy.yml` die Seite und veröffentlicht sie auf GitHub Pages. Die Umgebungsvariablen für den Build stehen ebenfalls im Workflow:

- `NEXT_PUBLIC_SITE_URL`: `https://boardsight.ch`
- `NEXT_PUBLIC_ALLOW_INDEXING`: `"false"`, bis Impressum und Datenschutzerklärung vollständig sind. Danach auf `"true"` setzen und pushen.

Einmalige Einrichtung im Repository unter **Settings → Pages**:

1. **Source:** „GitHub Actions“
2. **Custom domain:** `boardsight.ch`, danach **Enforce HTTPS** aktivieren, sobald GitHub das Zertifikat ausgestellt hat

Hinweis: GitHub Pages aus einem privaten Repository erfordert ein kostenpflichtiges GitHub-Abo (Pro oder Team). Mit einem kostenlosen Konto muss das Repository öffentlich sein.

## Eigene Domain bei Hostpoint

Im Hostpoint Control Panel unter **Domains → boardsight.ch → DNS**:

| Typ | Name | Wert |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `maxmeyerx1.github.io` |

Bestehende A-, AAAA- und CNAME-Einträge für `@` und `www` (z. B. von einer Parkseite) vorher löschen. Die Datei `public/CNAME` enthält die Domain und muss im Repository bleiben.

Alternativ lässt sich das Projekt auch auf Vercel betreiben: Repository importieren, Umgebungsvariablen dort setzen und die Domain unter **Settings → Domains** eintragen.
