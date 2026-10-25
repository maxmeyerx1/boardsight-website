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
        "Wir bearbeiten Personendaten im Einklang mit dem Schweizer Bundesgesetz über den Datenschutz (DSG) und, soweit anwendbar, der Datenschutz-Grundverordnung der Europäischen Union (DSGVO). Wir bearbeiten nur die Daten, die wir für den jeweiligen Zweck benötigen, und nur so lange, wie es dafür erforderlich ist oder das Gesetz es verlangt. Eine automatisierte Entscheidungsfindung oder ein Profiling findet nicht statt.",
      ],
    },
    {
      heading: "3. Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie uns per E-Mail schreiben oder das Kontaktformular verwenden, öffnet sich Ihr eigenes E-Mail-Programm. Die Nachricht wird erst versendet, wenn Sie sie dort abschicken. Über diese Webseite selbst werden keine Formulardaten übermittelt oder gespeichert.",
        "Wir bearbeiten Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist unser berechtigtes Interesse, Anfragen zu beantworten, und, wenn Ihre Anfrage einen Vertrag betrifft, dessen Anbahnung oder Erfüllung (Art. 6 Abs. 1 lit. f und b DSGVO).",
        "Unser E-Mail-Postfach wird von der Hostpoint AG in der Schweiz betrieben. Wir bewahren Anfragen so lange auf, wie es für die Bearbeitung und allfällige gesetzliche Aufbewahrungspflichten nötig ist.",
      ],
    },
    {
      heading: "4. Hosting dieser Webseite",
      paragraphs: [
        "Diese Webseite wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., USA. Beim Aufruf der Webseite verarbeitet GitHub technisch notwendige Daten wie Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs sowie Angaben zu Browser und Betriebssystem. Diese Daten dienen der Auslieferung und der Sicherheit der Webseite. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und funktionierenden Webseite (Art. 6 Abs. 1 lit. f DSGVO).",
        "Dabei können Daten in die USA übermittelt werden. GitHub verweist in seiner Datenschutzerklärung auf das Swiss-U.S. Data Privacy Framework, das der Bundesrat für zertifizierte Unternehmen als angemessenen Datenschutz anerkannt hat, sowie auf das EU-U.S. Data Privacy Framework.",
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
        "Für Kundinnen und Kunden von BoardLens bearbeiten wir Buchhaltungs- und Finanzdaten ausschliesslich, um das vereinbarte Reporting bereitzustellen. Dabei handeln wir im Auftrag unserer Kunden (Auftragsbearbeitung nach Art. 9 DSG bzw. Art. 28 DSGVO). Für Personendaten, die in diesen Buchhaltungsdaten enthalten sind (etwa in Lohnbuchungen), ist der jeweilige Kunde verantwortlich; wir bearbeiten sie nur nach seinen Weisungen. Einzelheiten zur Bearbeitung von Kundendaten regeln wir im Vertrag mit unseren Kunden. Wir bewahren diese Daten für die Dauer des Vertrags auf und löschen sie nach dessen Ende, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.",
        "Damit Personen BoardLens nutzen können, bearbeiten wir ihre E-Mail-Adresse, ihre Rolle (Bearbeiter oder Betrachter), ihre Firmenzugehörigkeit sowie die Zeitpunkte von Anmeldungen und Änderungen. Rechtsgrundlage ist die Erfüllung des Vertrags mit unserem Kunden, für den diese Personen BoardLens nutzen, sowie unser berechtigtes Interesse, den Zugang zu schützen (Art. 6 Abs. 1 lit. b und f DSGVO). Ohne E-Mail-Adresse ist keine Anmeldung möglich. Wir bewahren diese Angaben auf, solange der Zugang besteht, und löschen sie, wenn er entfernt wird oder der Vertrag endet.",
        "Beim Aufruf von BoardLens fallen zudem technisch notwendige Daten wie die IP-Adresse sowie Datum und Uhrzeit des Zugriffs an. Sie dienen der Auslieferung und der Sicherheit (Art. 6 Abs. 1 lit. f DSGVO) und werden nur so lange aufbewahrt, wie es dafür nötig ist.",
        "BoardLens wird von der Hostpoint AG in der Schweiz ausgeliefert. Die Daten in BoardLens werden in einem Rechenzentrum in Zürich gespeichert und dort bearbeitet. Anbieter ist die Supabase Inc., USA; sie nutzt das Rechenzentrum der Amazon Web Services in Zürich und den Netzwerkdienst der Cloudflare, Inc., USA. Über Supabase werden auch die E-Mails mit dem Anmeldelink versendet.",
        "BoardLens speichert in Ihrem Browser nur, was für die Anmeldung und die gewählte Darstellung (hell oder dunkel) unbedingt nötig ist; dafür ist keine Einwilligung erforderlich. Sie können dies in Ihrem Browser ablehnen; eine Anmeldung ist dann nicht möglich.",
        "Für KI-Zusammenfassungen und den Board-Chat werden wir das offene Sprachmodell Apertus nutzen, entwickelt von der ETH Zürich, der EPFL und dem Nationalen Hochleistungsrechenzentrum der Schweiz (CSCS). Das Modell wird in der Schweiz betrieben. Diese Funktionen befinden sich in Entwicklung; bis zu ihrer Einführung findet in BoardLens keine Bearbeitung durch ein Sprachmodell statt.",
      ],
    },
    {
      heading: "7. Bekanntgabe an Dritte",
      paragraphs: [
        "Wir verkaufen keine Personendaten. Wir geben sie nur an Dritte weiter, wenn dies für die Erbringung unserer Leistungen nötig ist, Sie eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Empfänger sind die in den Ziffern 3, 4 und 6 genannten Anbieter.",
        "Eine Bekanntgabe ins Ausland ist möglich, weil GitHub (Ziffer 4) sowie Supabase, Amazon Web Services und Cloudflare (Ziffer 6) ihren Sitz in den USA haben. Die Daten von BoardLens werden in Zürich gespeichert und bearbeitet; ein Zugriff dieser Anbieter aus den USA ist jedoch nicht ausgeschlossen. Wir stützen uns dabei auf das Swiss-U.S. bzw. EU-U.S. Data Privacy Framework, soweit ein Anbieter danach zertifiziert ist, und im Übrigen auf Standardvertragsklauseln, wie sie der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte und die Europäische Kommission anerkennen. Die Schweiz gilt nach einem Beschluss der Europäischen Kommission als Staat mit angemessenem Datenschutz.",
      ],
    },
    {
      heading: "8. Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht, Auskunft über Ihre bei uns bearbeiteten Personendaten zu verlangen, unrichtige Daten berichtigen und Daten löschen zu lassen, die Bearbeitung einschränken zu lassen, der Bearbeitung zu widersprechen sowie die Herausgabe Ihrer Daten in einem gängigen elektronischen Format zu verlangen. Haben Sie eine Einwilligung erteilt, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dafür an info@boardsight.ch.",
        "Sie haben zudem das Recht, sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) zu beschweren, oder, wenn Sie sich in der EU befinden, bei der Datenschutzaufsichtsbehörde Ihres Wohn- oder Arbeitsorts.",
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
