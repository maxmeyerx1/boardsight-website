export const contact = {
  eyebrow: "Kontakt",
  title: "Lassen Sie uns sprechen",
  lead: "Erzählen Sie uns von Ihrem Reporting und Ihrem Verwaltungsrat. Wir melden uns persönlich bei Ihnen, für ein Gespräch oder eine Offerte.",
  fields: {
    name: { label: "Name", placeholder: "Vorname Nachname" },
    email: { label: "E-Mail", placeholder: "name@firma.ch" },
    message: { label: "Nachricht", placeholder: "Worum geht es?" },
  },
  errors: {
    nameRequired: "Bitte geben Sie Ihren Namen ein.",
    emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
    emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    messageRequired: "Bitte schreiben Sie uns eine Nachricht.",
    messageTooShort: "Die Nachricht sollte mindestens 10 Zeichen lang sein.",
    summary: "Bitte prüfen Sie die markierten Felder.",
  },
  privacyNote: "Beim Absenden öffnet sich Ihr E-Mail-Programm mit Ihrer Nachricht an info@boardsight.ch. Erst dort wird sie verschickt. Details finden Sie in der",
  privacyLinkLabel: "Datenschutzerklärung",
  submit: "Nachricht per E-Mail senden",
  sending: "Wird gesendet …",
  success: "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht dort ab. Falls sich nichts geöffnet hat, schreiben Sie uns direkt an info@boardsight.ch.",
  failure: "Ihr E-Mail-Programm konnte nicht geöffnet werden. Bitte schreiben Sie uns direkt an info@boardsight.ch.",
} as const;
