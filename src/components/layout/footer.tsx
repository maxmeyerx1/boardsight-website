import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { footer } from "@/content/footer";
import { Logo } from "@/components/logo";

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-brand-900 text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-white/75">{footer.tagline}</p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-400">
            {footer.navTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-400">{footer.contactTitle}</h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-white/80">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>
                {siteConfig.legalName}
                <br />
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </span>
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              ) : (
                <span>[TODO: E-Mail-Adresse]</span>
              )}
            </p>
            {contact.phone && (
              <p className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </p>
            )}
          </address>
        </div>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-400">
            {footer.legalTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>{footer.boardlensNote}</p>
        </div>
      </div>
    </footer>
  );
}
