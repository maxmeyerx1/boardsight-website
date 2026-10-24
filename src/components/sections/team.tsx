import { team, teamIntro } from "@/content/team";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Team() {
  return (
    <Section id="ueber-uns" tone="white" labelledBy="ueber-uns-title">
      <SectionHeading intro={teamIntro} headingId="ueber-uns-title" />
      <ul className="mt-12 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Reveal as="li" key={index} delay={index * 0.06}>
            <div className="group flex h-full flex-col items-center rounded-lg border border-border bg-neutral-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white hover:shadow-lg">
              <span
                aria-hidden="true"
                className="grid size-20 place-items-center rounded-full bg-brand-700 text-xl font-bold text-white ring-4 ring-white transition-colors duration-300 group-hover:bg-brand-500"
              >
                {member.initials}
              </span>
              <h3 className="mt-5 font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{member.role}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
