import { EXPERIENCES } from "../constants";
import { Section, Card, Tag } from "./ui";

const Experience = () => {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="space-y-4">
        {EXPERIENCES.map((experience) => (
          <Card key={experience.company + experience.period} className="p-6 sm:p-8">
            <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
              <div className="mb-4 lg:mb-0">
                <p className="font-mono text-sm text-neutral-300">{experience.period}</p>
                <p className="mt-1 font-mono text-xs text-neutral-500">{experience.location}</p>
                {experience.current && (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"></span>
                    now
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {experience.role}{" "}
                  <span className="font-medium text-emerald-400">@ {experience.company}</span>
                </h3>
                <p className="mt-1 text-neutral-400">{experience.summary}</p>

                <ul className="mt-4 space-y-2">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-neutral-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
