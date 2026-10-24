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
  updated: "Oktober 2026",
  sections: [
    {
      heading: "Verantwortlich für diese Webseite",
      paragraphs: ["BoardSight", "Zurlindenstrasse 3", "8003 Zürich", "Schweiz"],
    },
    {
      heading: "Kontakt",
      paragraphs: ["E-Mail: info@boardsight.ch"],
    },
    {
      heading: "Haftungsausschluss",
      paragraphs: [
        "Wir stellen die Inhalte dieser Webseite mit grösster Sorgfalt zusammen. Für die Richtigkeit, Vollständigkeit und Aktualität der Informationen übernehmen wir jedoch keine Gewähr. Die Inhalte dienen der allgemeinen Information und stellen keine verbindliche Beratung oder Offerte dar.",
        "Soweit gesetzlich zulässig, haftet BoardSight nicht für Schäden materieller oder immaterieller Art, die durch den Zugriff auf die Inhalte, deren Nutzung oder Nichtnutzung, durch Missbrauch der Verbindung oder durch technische Störungen entstehen.",
        "Wir behalten uns vor, Inhalte dieser Webseite jederzeit und ohne Ankündigung zu ändern, zu ergänzen oder zu entfernen sowie die Veröffentlichung ganz oder teilweise einzustellen.",
        "Diese Webseite kann Links zu Webseiten Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss, verantwortlich ist ausschliesslich der jeweilige Betreiber. Der Besuch solcher Webseiten erfolgt auf eigenes Risiko.",
      ],
    },
    {
      heading: "Urheberrechte",
      paragraphs: [
        "Texte, Grafiken, Logos, Bilder und alle weiteren Inhalte dieser Webseite sind urheberrechtlich geschützt und gehören BoardSight oder den ausdrücklich genannten Rechteinhabern.",
        "Jede Vervielfältigung, Verbreitung oder Veränderung, ganz oder in Teilen, bedarf der vorgängigen schriftlichen Zustimmung. Die Namen BoardSight und BoardLens sowie die zugehörigen Logos dürfen ohne Erlaubnis nicht verwendet werden.",
      ],
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
        "BoardSight, Zurlindenstrasse 3, 8003 Zürich, Schweiz.",
        "Kontakt für Datenschutzanfragen: info@boardsight.ch",
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
        "Diese Webseite: [TODO: Hosting-Anbieter und Serverstandort der Webseite angeben, z. B. Vercel Inc., USA, und die Bekanntgabe ins Ausland beschreiben.]",
        "Software BoardLens: Die Daten unserer Kunden werden in der Schweiz gehostet. [TODO: Hosting-Anbieter und Rechenzentrum angeben.]",
        "[TODO: Art und Aufbewahrungsdauer der Server-Logdaten]",
      ],
    },
    {
      heading: "5. Cookies und Analyse",
      paragraphs: [
        "[TODO: Angaben zu Cookies und Analyse-Tools. Aktuell sind auf dieser Webseite keine Analyse-Tools eingebunden, vor Livegang prüfen.]",
        "Schriftarten werden lokal von dieser Webseite ausgeliefert. Es werden dafür keine Anfragen an Google gestellt.",
      ],
    },
    {
      heading: "6. Künstliche Intelligenz in BoardLens",
      paragraphs: [
        "Für Zusammenfassungen und den Board-Chat nutzt BoardLens ein Sprachmodell, das in der Schweiz betrieben wird. [TODO: Anbieter und Umfang der Datenbearbeitung angeben.]",
      ],
    },
    {
      heading: "7. Bekanntgabe ins Ausland",
      paragraphs: ["[TODO: Länder und Garantien bei einer Bekanntgabe ins Ausland]"],
    },
    {
      heading: "8. Ihre Rechte",
      paragraphs: [
        "[TODO: Auskunft, Berichtigung, Löschung, Widerspruch, Datenherausgabe und Beschwerde beim EDÖB beschreiben]",
      ],
    },
    {
      heading: "9. Änderungen",
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
