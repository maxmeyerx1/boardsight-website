import { aboutIntro, team, values } from "@/content/team";
import { icons } from "@/lib/icons";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function About() {
  return (
    <Section id="ueber-uns" tone="light" labelledBy="ueber-uns-title">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <SectionHeading intro={aboutIntro} headingId="ueber-uns-title" tone="light" />
        <ul className="grid gap-5 sm:grid-cols-3">
          {values.map((value, index) => {
            const Icon = icons[value.icon];
            return (
              <Reveal as="li" key={value.title} delay={index * 0.06} className="flex">
                <div className="group flex w-full flex-col rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg">
                  <Icon
                    className="size-7 text-brand-500 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">{value.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>

      {team.length > 0 && (
        <ul className="mt-14 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal as="li" key={member.name} delay={index * 0.06}>
              <div className="flex h-full flex-col items-center rounded-lg border border-border bg-white p-6 text-center">
                <span
                  aria-hidden="true"
                  className="grid size-20 place-items-center rounded-full bg-brand-700 text-xl font-bold text-white"
                >
                  {member.initials}
                </span>
                <h3 className="mt-5 font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  );
}
