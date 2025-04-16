import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{duration: 0.5 }}
          className="mb-16 mt-20 text-center text-4xl font-bold">
            Projects
        </motion.h1>
        <div className="mx-auto max-w-6xl px-4">
            {PROJECTS.map((project, index) => (
                <motion.div 
                  key={index} 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="mb-16 overflow-hidden rounded-lg bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-purple-900/20 lg:flex lg:items-center lg:gap-8"
                >
                    <div className="w-full lg:w-1/3">
                        <a 
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/30"
                        >
                            <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-90 flex items-center justify-center">
                              <FaGithub className="text-4xl text-white" />
                              <span className="ml-2 text-white font-medium">View Repository</span>
                            </div>
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full transition-transform duration-500 group-hover:scale-110" 
                            />
                        </a>
                    </div>
                    <div className="mt-6 w-full lg:mt-0 lg:w-2/3">
                        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                        <p className="mb-6 text-neutral-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span 
                                  key={index} 
                                  className="rounded-full bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm transition-colors hover:bg-purple-800/40"
                                >
                                  {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects