import { FiDownload, FiMail } from "react-icons/fi";
import resume from "../assets/Wong_Yeow_Kang_Resume.pdf";
import { PROFILE, SOCIALS } from "../constants";
import { Section, Card } from "./ui";

const Contact = () => {
  return (
    <>
      <Section id="contact" index="05" title="Get in touch">
        <Card className="p-8 sm:p-12">
          <p className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Working on something in ML or LLMs, or hiring for it? I&apos;d love to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
            >
              <FiMail aria-hidden="true" /> {PROFILE.email}
            </a>
            <a
              href={resume}
              download="Wong_Yeow_Kang_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 font-medium text-white transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
            >
              <FiDownload aria-hidden="true" /> Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-emerald-400"
              >
                <Icon className="text-lg" aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        </Card>
      </Section>

      <footer className="border-t border-white/5 py-8 font-mono text-xs text-neutral-500">
        © {new Date().getFullYear()} {PROFILE.name} · Built with React, Tailwind and Framer Motion
      </footer>
    </>
  );
};

export default Contact;
