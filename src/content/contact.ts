export const contact = {
  eyebrow: "Kontakt",
  title: "[TODO: Überschrift Kontakt]",
  lead: "[TODO: Ein Satz, wie schnell Sie antworten und wer sich meldet.]",
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
  privacyNote: "Mit dem Absenden erklären Sie sich einverstanden, dass wir Ihre Angaben zur Bearbeitung der Anfrage verwenden. Details finden Sie in der",
  privacyLinkLabel: "Datenschutzerklärung",
  submit: "Nachricht senden",
  sending: "Wird gesendet …",
  success: "Vielen Dank. Ihre Nachricht ist bei uns eingegangen. [TODO: Platzhalter – der Versand ist noch nicht angebunden.]",
  failure: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
} as const;
