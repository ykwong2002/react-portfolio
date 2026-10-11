import { SKILLS } from "../constants";
import { Section, Card, Tag } from "./ui";

const Skills = () => {
  return (
    <Section id="skills" index="02" title="Tech stack">
      <div className="grid gap-4 md:grid-cols-2">
        {SKILLS.map((group, index) => (
          <Card key={group.title} delay={(index % 2) * 0.1} className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-white">{group.title}</h3>
              {group.note && (
                <p className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"></span>
                  {group.note}
                </p>
              )}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item.name} icon={item.icon}>
                  {item.name}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
