# Firmenwebseite

Unternehmens-Webseite für **[FIRMENNAME]**, eine Schweizer Firma. Die Seite präsentiert die Firma, ihre Leistungen und den Einsatz des Werkzeugs BoardLens.

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
| `trust.ts` | Logo-Leiste (Kunden/Partner) |
| `services.ts` | Leistungen |
| `process.ts` | Schritte „So arbeiten wir“ |
| `boardlens.ts` | BoardLens-Abschnitt, Feature-Tabs, Beispielzahlen im Dashboard-Mockup |
| `audiences.ts` | Zielgruppen |
| `stats.ts` | Kennzahlen (Counter) |
| `team.ts` | Team |
| `testimonials.ts` | Referenzen |
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
- Die Kennzahlen in `stats.ts` sind Dummy-Werte (100) und müssen ersetzt oder entfernt werden.
- Impressum und Datenschutzerklärung sind in der Schweiz Pflicht. Die Texte in `legal.ts` sind Platzhalter und müssen von einer Fachperson geprüft werden.
- Das Kontaktformular versendet noch nichts. Der Platzhalter-Handler `submitContactForm` steht in `src/components/sections/contact.tsx` und muss durch einen echten Versand ersetzt werden (z. B. Route Handler unter `src/app/api/contact/route.ts` oder ein Formular-Dienst).
- Logo: Platzhalter in `src/components/logo.tsx`, Favicon in `src/app/icon.svg`, OG-Bild in `src/app/opengraph-image.tsx`.

## Design-Tokens

Farben stehen als CSS-Variablen in `src/app/globals.css` (`:root`) und werden in `tailwind.config.ts` als `brand-*`, `accent-*` und `neutral-*` bereitgestellt. Die geprüften Kontrastwerte (WCAG AA) sind dort kommentiert. `accent-400` nur auf dunklem Grund oder als Fläche verwenden, nicht als Textfarbe auf hellem Grund.

## SEO

- Metadata und OG-Tags pro Seite über `pageMetadata()` in `src/lib/seo.ts`
- Strukturierte Daten (schema.org `Organization`) im Root-Layout; nur ausgefüllte Angaben werden ausgegeben
- `sitemap.xml` und `robots.txt` werden aus `src/app/sitemap.ts` und `src/app/robots.ts` erzeugt

## Deployment auf Vercel

1. Repository auf GitHub (oder GitLab/Bitbucket) pushen.
2. Auf [vercel.com](https://vercel.com) **Add New → Project** wählen und das Repository importieren. Vercel erkennt Next.js automatisch. Liegt das Projekt in einem Unterordner, unter **Root Directory** den Ordner `website` angeben.
3. Unter **Settings → Environment Variables** `NEXT_PUBLIC_SITE_URL` setzen, sobald die endgültige Domain feststeht (z. B. `https://www.firma.ch`).
4. **Deploy** auslösen. Jeder Push auf den Hauptzweig erzeugt ein neues Produktions-Deployment, andere Zweige ein Preview-Deployment.

Alternativ mit der CLI:

```bash
npx vercel        # Preview-Deployment
npx vercel --prod # Produktions-Deployment
```

## Eigene Domain verbinden

1. Im Vercel-Projekt **Settings → Domains** öffnen und die Domain eintragen (z. B. `firma.ch` und `www.firma.ch`).
2. Beim Domain-Anbieter die DNS-Einträge setzen, die Vercel anzeigt. Üblich sind:
   - Apex-Domain (`firma.ch`): `A`-Eintrag auf die von Vercel angezeigte IP
   - Subdomain (`www.firma.ch`): `CNAME` auf den von Vercel angezeigten Zielwert
3. Festlegen, welche Variante die Hauptdomain ist; Vercel leitet die andere weiter. Das SSL-Zertifikat wird automatisch ausgestellt.
4. `NEXT_PUBLIC_SITE_URL` auf die Hauptdomain setzen und neu deployen, damit Canonical-URLs, Sitemap und OG-Tags stimmen.
5. Datenschutzerklärung um Angaben zum Hosting (Vercel Inc., USA) ergänzen.
