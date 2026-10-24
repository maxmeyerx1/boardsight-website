import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path: string;
};

/** Einheitliche Metadata inkl. Canonical und OG-Tags pro Seite. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const desc = description ?? siteConfig.description;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  // Unterseiten überschreiben openGraph komplett, deshalb das OG-Bild explizit setzen.
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: siteConfig.name }];
  return {
    title: title ?? { absolute: siteConfig.name },
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_CH",
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images,
    },
  };
}

/** Strukturierte Daten (schema.org Organization). Nur ausgefüllte Angaben werden übernommen. */
export function organizationJsonLd() {
  const { contact } = siteConfig;
  const filled = (value: string) => value !== "" && !value.includes("[TODO");
  const hasAddress = [contact.street, contact.postalCode, contact.city].every(filled);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    ...(filled(siteConfig.legalName) && { legalName: siteConfig.legalName }),
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    ...(filled(siteConfig.description) && { description: siteConfig.description }),
    ...(contact.email && { email: contact.email }),
    ...(contact.phone && { telephone: contact.phone }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.street,
        postalCode: contact.postalCode,
        addressLocality: contact.city,
        addressCountry: "CH",
      },
    }),
  };
}
