import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { PROJECTS } from "../constants";
import { Section, Card, Tag, Label } from "./ui";
import VaultGraph from "./VaultGraph";
import DocExtractArt from "./DocExtractArt";

const VISUALS = {
  "doc-extract": DocExtractArt,
  "vault-graph": VaultGraph,
};

const SPANS = {
  half: "lg:col-span-6",
  full: "lg:col-span-12",
};

const RepoLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 font-mono text-xs text-neutral-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
  >
    <FaGithub className="text-sm" aria-hidden="true" /> code <FiArrowUpRight aria-hidden="true" />
  </a>
);

const Status = ({ status }) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {status.map((item) => {
      const isPrivate = item.startsWith("Private");
      return (
        <span
          key={item}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs ${
            isPrivate
              ? "border-white/10 text-neutral-400"
              : "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
          }`}
        >
          {isPrivate ? (
            <FiLock aria-hidden="true" />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"></span>
          )}
          {item}
        </span>
      );
    })}
  </div>
);

const ProjectBody = ({ project }) => (
  <div className="p-6 sm:p-7">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-neutral-500">
          {project.subtitle}
          {project.period && ` · ${project.period}`}
        </p>
      </div>
      {project.repoUrl && <RepoLink href={project.repoUrl} />}
    </div>

    {project.status && <Status status={project.status} />}

    <p className="mt-4 leading-relaxed text-neutral-300">{project.description}</p>

    {project.points && (
      <ul className="mt-4 space-y-2">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
            {point}
          </li>
        ))}
      </ul>
    )}

    <div className="mt-5 flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </div>
  </div>
);

const FeaturedProject = ({ project, delay }) => {
  const Drawn = VISUALS[project.visual];
  const sideBySide = project.size === "full";

  return (
    <Card
      delay={delay}
      className={`overflow-hidden ${SPANS[project.size]} ${
        sideBySide ? "lg:grid lg:grid-cols-[5fr_7fr]" : ""
      }`}
    >
      <div
        className={`border-white/10 bg-neutral-950/60 ${
          sideBySide
            ? "border-b lg:border-b-0 lg:border-r"
            : "flex flex-col justify-center border-b lg:h-[444px]"
        }`}
      >
        {Drawn ? (
          <Drawn />
        ) : (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <ProjectBody project={project} />
    </Card>
  );
};

const CompactProject = ({ project, delay }) => (
  <Card delay={delay} className="flex gap-5 p-5 lg:col-span-6">
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      className={`h-20 w-20 shrink-0 rounded-xl border border-white/10 sm:h-28 sm:w-28 ${
        project.imageOnLight ? "bg-white object-contain p-1" : "object-cover"
      }`}
    />
    <div className="min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-white">{project.title}</h3>
          <p className="font-mono text-xs text-neutral-500">{project.subtitle}</p>
        </div>
        {project.repoUrl && <RepoLink href={project.repoUrl} />}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  </Card>
);

const Projects = () => {
  const featured = PROJECTS.filter((project) => project.size !== "compact");
  const more = PROJECTS.filter((project) => project.size === "compact");

  return (
    <Section id="projects" index="04" title="Projects">
      <div className="grid gap-4 lg:grid-cols-12">
        {featured.map((project, index) => (
          <FeaturedProject key={project.title} project={project} delay={(index % 2) * 0.1} />
        ))}
      </div>

      <div className="mb-4 mt-10">
        <Label>More projects</Label>
      </div>
      <div className="grid gap-4 lg:grid-cols-12">
        {more.map((project, index) => (
          <CompactProject key={project.title} project={project} delay={index * 0.1} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
