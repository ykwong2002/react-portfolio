import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import profilePic from "../assets/wykSquareProfile.png";
import resume from "../assets/Wong_Yeow_Kang_Resume.pdf";
import { PROFILE, SOCIALS, STATS } from "../constants";

const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Hero = () => {
  const [before, highlight, after] = PROFILE.tagline;

  return (
    <div className="pb-6 pt-12 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-neutral-300 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            {PROFILE.role}
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="mt-5 text-xl text-neutral-200 sm:text-2xl"
          >
            {before}
            <span className="text-emerald-400">{highlight}</span>
            {after}
          </motion.p>

          <motion.p
            {...rise(0.3)}
            className="mt-4 max-w-xl leading-relaxed text-neutral-400"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
            >
              View projects <FiArrowDown aria-hidden="true" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 font-medium text-white transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
            >
              Resume <FiArrowUpRight aria-hidden="true" />
            </a>
            <div className="ml-1 flex items-center gap-1">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile`}
                  className="rounded-lg p-2 text-2xl text-neutral-400 transition-colors hover:text-emerald-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-emerald-400/10 blur-2xl"></div>
          <img
            src={profilePic}
            alt="Wong Yeow Kang"
            className="relative aspect-square w-full rounded-3xl border border-white/10 object-cover"
          />
          <p className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-neutral-950 px-3 py-1.5 font-mono text-xs text-neutral-300">
            <FiMapPin className="text-emerald-400" aria-hidden="true" />
            {PROFILE.location}
          </p>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.5)}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col bg-neutral-950 p-5 sm:p-6">
            <p className="font-mono text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-neutral-400">{stat.label}</p>
            <p className="mt-auto pt-3 font-mono text-xs text-emerald-400">{stat.source}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
