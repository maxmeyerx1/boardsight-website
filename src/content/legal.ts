/**
 * Rechtstexte. Vor dem Livegang durch eine Fachperson prüfen lassen.
 * Enthält ein Abschnitt `[TODO: ...]`, zeigt die Seite automatisch einen Hinweis an.
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
  description: "Informationen zur Bearbeitung von Personendaten auf dieser Webseite und in BoardLens.",
  updated: "Oktober 2026",
  sections: [
    {
      heading: "1. Verantwortliche Stelle",
      paragraphs: [
        "BoardSight, Zurlindenstrasse 3, 8003 Zürich, Schweiz.",
        "Kontakt für Datenschutzanfragen: info@boardsight.ch",
      ],
    },
    {
      heading: "2. Grundsätze",
      paragraphs: [
        "Wir bearbeiten Personendaten im Einklang mit dem Schweizer Bundesgesetz über den Datenschutz (DSG). Wir bearbeiten nur die Daten, die wir für den jeweiligen Zweck benötigen, und nur so lange, wie es dafür erforderlich ist oder das Gesetz es verlangt.",
      ],
    },
    {
      heading: "3. Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie uns per E-Mail schreiben oder das Kontaktformular verwenden, öffnet sich Ihr eigenes E-Mail-Programm. Die Nachricht wird erst versendet, wenn Sie sie dort abschicken. Über diese Webseite selbst werden keine Formulardaten übermittelt oder gespeichert.",
        "Wir bearbeiten Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Unser E-Mail-Postfach wird von der Hostpoint AG in der Schweiz betrieben. Wir bewahren Anfragen so lange auf, wie es für die Bearbeitung und allfällige gesetzliche Aufbewahrungspflichten nötig ist.",
      ],
    },
    {
      heading: "4. Hosting dieser Webseite",
      paragraphs: [
        "Diese Webseite wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., USA. Beim Aufruf der Webseite verarbeitet GitHub technisch notwendige Daten wie Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs sowie Angaben zu Browser und Betriebssystem. Diese Daten dienen der Auslieferung und der Sicherheit der Webseite.",
        "Dabei können Daten in die USA übermittelt werden. GitHub verweist in seiner Datenschutzerklärung auf das Swiss-U.S. Data Privacy Framework, das der Bundesrat für zertifizierte Unternehmen als angemessenen Datenschutz anerkannt hat.",
      ],
    },
    {
      heading: "5. Cookies, Analyse und Schriftarten",
      paragraphs: [
        "Diese Webseite verwendet keine Cookies und keine Analyse- oder Tracking-Werkzeuge.",
        "Schriftarten werden direkt von dieser Webseite ausgeliefert. Es werden dafür keine Anfragen an Dritte wie Google gestellt.",
      ],
    },
    {
      heading: "6. Software BoardLens",
      paragraphs: [
        "Für Kundinnen und Kunden von BoardLens bearbeiten wir Buchhaltungs- und Finanzdaten ausschliesslich, um das vereinbarte Reporting bereitzustellen. BoardLens und die Daten unserer Kunden werden bei der Hostpoint AG in der Schweiz gehostet.",
        "Für KI-Zusammenfassungen und den Board-Chat nutzt BoardLens das offene Sprachmodell Apertus, entwickelt von der ETH Zürich, der EPFL und dem Nationalen Hochleistungsrechenzentrum der Schweiz (CSCS). Das Modell wird in der Schweiz betrieben.",
        "Einzelheiten zur Bearbeitung von Kundendaten regeln wir im Vertrag mit unseren Kunden.",
      ],
    },
    {
      heading: "7. Bekanntgabe an Dritte",
      paragraphs: [
        "Wir verkaufen keine Personendaten. Wir geben sie nur an Dritte weiter, wenn dies für die Erbringung unserer Leistungen nötig ist, Sie eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Eine Bekanntgabe ins Ausland erfolgt einzig beim Hosting dieser Webseite (siehe Ziffer 4).",
      ],
    },
    {
      heading: "8. Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht, Auskunft über Ihre bei uns bearbeiteten Personendaten zu verlangen, unrichtige Daten berichtigen und Daten löschen zu lassen, der Bearbeitung zu widersprechen sowie die Herausgabe Ihrer Daten zu verlangen. Wenden Sie sich dafür an info@boardsight.ch.",
        "Sie haben zudem das Recht, sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) zu beschweren.",
      ],
    },
    {
      heading: "9. Änderungen",
      paragraphs: [
        "Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die auf dieser Webseite veröffentlichte Fassung.",
      ],
    },
  ],
};
