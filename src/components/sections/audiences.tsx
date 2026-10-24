import { audiences, audiencesIntro } from "@/content/audiences";
import { icons } from "@/lib/icons";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Audiences() {
  return (
    <Section id="zielgruppen" tone="light" labelledBy="zielgruppen-title">
      <SectionHeading intro={audiencesIntro} headingId="zielgruppen-title" tone="light" align="center" />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience, index) => {
          const Icon = icons[audience.icon];
          return (
            <Reveal as="li" key={index} delay={index * 0.06} className="flex">
              <div className="group relative flex w-full flex-col overflow-hidden rounded-lg bg-brand-700 p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900 hover:shadow-xl">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-accent-400/10 transition-transform duration-500 group-hover:scale-150"
                />
                <Icon className="relative size-7 text-accent-400" aria-hidden="true" />
                <h3 className="relative mt-5 text-lg font-semibold">{audience.title}</h3>
                <p className="relative mt-2 leading-relaxed text-white/80">{audience.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
