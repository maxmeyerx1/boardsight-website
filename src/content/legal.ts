/**
 * Rechtstexte. Alles hier ist Platzhaltertext und muss vor dem Livegang
 * durch eine Fachperson geprüft und vervollständigt werden.
 */

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPage = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const legalNotice =
  "Platzhaltertext: Diese Seite ist noch nicht vollständig. Inhalte vor der Veröffentlichung durch eine Fachperson prüfen lassen.";

export const impressum: LegalPage = {
  title: "Impressum",
  description: "Angaben zum Anbieter dieser Webseite.",
  updated: "[TODO: Datum]",
  sections: [
    {
      heading: "Verantwortlich für diese Webseite",
      paragraphs: [
        "[TODO: Rechtlicher Firmenname, z. B. Muster AG]",
        "[TODO: Strasse und Nr.]",
        "[TODO: PLZ Ort]",
        "Schweiz",
      ],
    },
    {
      heading: "Kontakt",
      paragraphs: ["E-Mail: [TODO: E-Mail-Adresse]", "Telefon: [TODO: Telefonnummer]"],
    },
    {
      heading: "Vertretungsberechtigte Personen",
      paragraphs: ["[TODO: Name, Funktion]"],
    },
    {
      heading: "Handelsregister",
      paragraphs: [
        "Eingetragener Firmenname: [TODO]",
        "Handelsregisteramt: [TODO: Kanton]",
        "Unternehmens-Identifikationsnummer (UID): [TODO: CHE-xxx.xxx.xxx]",
        "Mehrwertsteuernummer: [TODO: CHE-xxx.xxx.xxx MWST, falls vorhanden]",
      ],
    },
    {
      heading: "Haftungsausschluss",
      paragraphs: ["[TODO: Haftungsausschluss für Inhalte und Links]"],
    },
    {
      heading: "Urheberrechte",
      paragraphs: ["[TODO: Hinweis zu Urheberrechten an Texten, Bildern und Marken]"],
    },
  ],
};

export const datenschutz: LegalPage = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Bearbeitung von Personendaten auf dieser Webseite.",
  updated: "[TODO: Datum]",
  sections: [
    {
      heading: "1. Verantwortliche Stelle",
      paragraphs: [
        "[TODO: Rechtlicher Firmenname, Adresse und Kontakt für Datenschutzanfragen]",
      ],
    },
    {
      heading: "2. Grundlage",
      paragraphs: [
        "[TODO: Bezug auf das Bundesgesetz über den Datenschutz (DSG) und gegebenenfalls die DSGVO prüfen]",
      ],
    },
    {
      heading: "3. Kontaktformular und E-Mail",
      paragraphs: [
        "Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, bearbeiten wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten.",
        "[TODO: Aufbewahrungsdauer und eingesetzte Dienste für den Formularversand ergänzen]",
      ],
    },
    {
      heading: "4. Hosting und Server-Logdateien",
      paragraphs: [
        "[TODO: Hosting-Anbieter, Standort der Server und Art der Logdaten angeben. Bei Hosting über Vercel Inc. (USA) die Bekanntgabe ins Ausland beschreiben.]",
      ],
    },
    {
      heading: "5. Cookies und Analyse",
      paragraphs: [
        "[TODO: Angaben zu Cookies und Analyse-Tools. Aktuell sind auf dieser Webseite keine Analyse-Tools eingebunden – vor Livegang prüfen.]",
        "Schriftarten werden lokal von dieser Webseite ausgeliefert. Es werden dafür keine Anfragen an Google gestellt.",
      ],
    },
    {
      heading: "6. Bekanntgabe ins Ausland",
      paragraphs: ["[TODO: Länder und Garantien bei einer Bekanntgabe ins Ausland]"],
    },
    {
      heading: "7. Ihre Rechte",
      paragraphs: [
        "[TODO: Auskunft, Berichtigung, Löschung, Widerspruch, Datenherausgabe und Beschwerde beim EDÖB beschreiben]",
      ],
    },
    {
      heading: "8. Änderungen",
      paragraphs: ["[TODO: Hinweis, dass die Datenschutzerklärung angepasst werden kann]"],
    },
  ],
};

export const nutzungsbedingungen: LegalPage = {
  title: "Nutzungsbedingungen",
  description: "Bedingungen für die Nutzung dieser Webseite.",
  updated: "[TODO: Datum]",
  sections: [
    {
      heading: "1. Geltungsbereich",
      paragraphs: ["[TODO: Geltungsbereich der Nutzungsbedingungen]"],
    },
    {
      heading: "2. Inhalte der Webseite",
      paragraphs: ["[TODO: Hinweis, dass Inhalte keine verbindliche Beratung darstellen]"],
    },
    {
      heading: "3. Haftung",
      paragraphs: ["[TODO: Haftungsbeschränkung]"],
    },
    {
      heading: "4. Anwendbares Recht und Gerichtsstand",
      paragraphs: ["[TODO: Schweizer Recht, Gerichtsstand]"],
    },
  ],
};
