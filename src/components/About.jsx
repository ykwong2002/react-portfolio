import aboutImg from "../assets/about.gif";
import { ABOUT, EDUCATION, CERTIFICATIONS } from "../constants";
import { Section, Card, Tag, Label } from "./ui";

const About = () => {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6 sm:p-8 lg:col-span-2">
          <div className="space-y-4 leading-relaxed text-neutral-300">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Label>Currently into</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {ABOUT.interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card delay={0.1} className="overflow-hidden">
            <img
              className="aspect-video w-full object-cover"
              src={aboutImg}
              alt="Yeow Kang looking out over Lake Tahoe"
              loading="lazy"
            />
          </Card>

          <Card delay={0.1} className="flex-1 p-6 sm:p-8">
            <Label>Certifications</Label>
            <ul className="mt-5 space-y-3">
              {CERTIFICATIONS.map((certification) => (
                <li key={certification} className="flex gap-2.5 text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                  {certification}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-6 sm:p-8 lg:col-span-3">
          <Label>Education</Label>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {EDUCATION.map((entry) => (
              <div key={entry.school}>
                <p className="font-mono text-xs text-neutral-500">{entry.period}</p>
                <h3 className="mt-2 font-semibold text-white">{entry.school}</h3>
                <p className="mt-1 text-neutral-300">{entry.detail}</p>
                <p className="mt-1 text-sm text-emerald-400">{entry.note}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </Section>
  );
};

export default About;
