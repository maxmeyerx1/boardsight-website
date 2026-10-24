import { CircleAlert } from "lucide-react";

import { legalNotice, type LegalPage } from "@/content/legal";

export function LegalPageView({ page }: { page: LegalPage }) {
  const hasPlaceholders = page.sections.some((section) =>
    section.paragraphs.some((paragraph) => paragraph.includes("[TODO")),
  );

  return (
    <>
      <div className="on-dark bg-brand-900 text-white">
        <div className="container py-16 md:py-20">
          <h1 className="hyphens-auto break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{page.description}</p>
        </div>
      </div>
      <div className="container py-14 md:py-20">
        <div className="max-w-3xl">
          {hasPlaceholders && (
            <p
              role="note"
              className="mb-10 flex gap-3 rounded-lg border border-dashed border-brand-500 bg-neutral-50 p-4 text-sm font-medium text-neutral-900"
            >
              <CircleAlert className="size-5 shrink-0 text-brand-500" aria-hidden="true" />
              {legalNotice}
            </p>
          )}
          <div className="space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight md:text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-2 leading-relaxed text-neutral-600">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-12 text-sm text-neutral-600">Stand: {page.updated}</p>
        </div>
      </div>
    </>
  );
}
