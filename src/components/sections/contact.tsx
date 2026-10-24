"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { CircleAlert, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";

import { contact } from "@/content/contact";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

type FormValues = { name: string; email: string; message: string };
type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FIELD_ORDER: FieldName[] = ["name", "email", "message"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = contact.errors.nameRequired;
  if (!values.email.trim()) errors.email = contact.errors.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = contact.errors.emailInvalid;
  if (!values.message.trim()) errors.message = contact.errors.messageRequired;
  else if (values.message.trim().length < 10) errors.message = contact.errors.messageTooShort;
  return errors;
}

/**
 * Die Webseite versendet selbst nichts: Das Formular öffnet das E-Mail-Programm
 * der Besucherin oder des Besuchers mit einer vorausgefüllten Nachricht.
 * Für einen direkten Versand später einen Formular-Dienst anbinden und die
 * Datenschutzerklärung (Ziffer 3) anpassen.
 */
function openMailDraft(values: FormValues, recipient: string) {
  const subject = `Anfrage über boardsight.ch von ${values.name.trim()}`;
  const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as FieldName;
    const next = { ...values, [name]: event.target.value };
    setValues(next);
    // Nach dem ersten Absenden live nachprüfen
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    try {
      openMailDraft(values, siteConfig.contact.email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fieldProps = (name: FieldName) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    placeholder: contact.fields[name].placeholder,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    disabled: status === "sending",
  });

  const errorText = (name: FieldName) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="flex items-center gap-1.5 text-sm font-medium text-destructive">
        <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  const { contact: info } = siteConfig;

  return (
    <Section id="kontakt" tone="white" labelledBy="kontakt-title">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading
            intro={{ eyebrow: contact.eyebrow, title: contact.title, lead: contact.lead }}
            headingId="kontakt-title"
          />
          <Reveal className="mt-8 space-y-4 text-neutral-900">
            <p className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              {info.email ? (
                <a href={`mailto:${info.email}`} className="font-medium hover:text-brand-500">
                  {info.email}
                </a>
              ) : (
                <span>[TODO: E-Mail-Adresse]</span>
              )}
            </p>
            {info.phone && (
              <p className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
                <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="font-medium hover:text-brand-500">
                  {info.phone}
                </a>
              </p>
            )}
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <span>
                {info.street}, {info.postalCode} {info.city}
              </span>
            </p>
          </Reveal>
        </div>

        <Reveal>
          <form
            noValidate
            onSubmit={onSubmit}
            aria-labelledby="kontakt-title"
            className="space-y-5 rounded-2xl border border-border bg-neutral-50 p-6 shadow-sm md:p-8"
          >
            {submitted && Object.keys(errors).length > 0 && (
              <p role="alert" className="rounded-md bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                {contact.errors.summary}
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{contact.fields.name.label}</Label>
                <Input
                  {...fieldProps("name")}
                  ref={(element) => {
                    fieldRefs.current.name = element;
                  }}
                  type="text"
                  autoComplete="name"
                  required
                />
                {errorText("name")}
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">{contact.fields.email.label}</Label>
                <Input
                  {...fieldProps("email")}
                  ref={(element) => {
                    fieldRefs.current.email = element;
                  }}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                />
                {errorText("email")}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">{contact.fields.message.label}</Label>
              <Textarea
                {...fieldProps("message")}
                ref={(element) => {
                  fieldRefs.current.message = element;
                }}
                rows={6}
                required
              />
              {errorText("message")}
            </div>

            <p className="text-sm text-neutral-600">
              {contact.privacyNote}{" "}
              <Link href="/datenschutz" className="font-medium text-brand-500 underline underline-offset-2 hover:text-brand-700">
                {contact.privacyLinkLabel}
              </Link>
              .
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <LoaderCircle className="animate-spin" aria-hidden="true" />
                    {contact.sending}
                  </>
                ) : (
                  <>
                    {contact.submit}
                    <Send aria-hidden="true" />
                  </>
                )}
              </Button>
              <p role="status" aria-live="polite" className="text-sm font-medium">
                {status === "success" && <span className="text-brand-500">{contact.success}</span>}
                {status === "error" && <span className="text-destructive">{contact.failure}</span>}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
