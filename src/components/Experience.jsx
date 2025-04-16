import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-16 mt-20 text-center text-4xl font-bold"
      >
        Experience
      </motion.h1>
      <div className="mx-auto max-w-6xl px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="mb-12 overflow-hidden rounded-lg bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-purple-900/20"
          >
            <div className="lg:flex lg:gap-8">
              <div className="w-full lg:w-1/4">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 mr-3">
                    <FaBriefcase className="text-purple-400" />
                  </div>
                  <p className="font-medium text-purple-300">{experience.year}</p>
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {experience.role}{" "}
                  <span className="text-lg font-medium text-purple-400">
                    @ {experience.company}
                  </span>
                </h3>
                {Array.isArray(experience.description) ? (
                  <ul className="mb-6 space-y-2">
                    {experience.description.map((point, i) => (
                      <li key={i} className="text-neutral-300 flex">
                        <span className="mr-2 text-purple-500">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-6 text-neutral-300">
                    {experience.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm transition-colors hover:bg-purple-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
