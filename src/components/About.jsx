import aboutImg from "../assets/about.png"
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pt-8">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-12 text-center text-4xl font-bold"> 
          About <span className="text-purple-400">Me</span>
        </motion.h1>
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-lg bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex flex-wrap items-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 lg:p-6">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-lg group-hover:opacity-75 transition duration-1000"></div>
                        <img 
                          className="relative rounded-2xl shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]" 
                          src={aboutImg} 
                          alt="about" 
                        />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 lg:p-6">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 mr-3">
                                <FaUserGraduate className="text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Personal Journey</h3>
                        </div>
                        
                        <div className="space-y-4 text-neutral-300 leading-relaxed">
                            <p>I'm Yeow Kang, a curious and driven learner passionate about leveraging technology to solve real-world problems. Currently a <span className="text-purple-400 font-medium">Business Analytics</span> sophomore at the National University of Singapore under the School of Computing, I've gained hands-on experience in Python, Java, MySQL, and R, along with a strong foundation in data structures, algorithms, and applied machine learning.</p>
                            
                            <p>My journey in tech began with a deep curiosity about how systems work, which quickly grew into a love for building things from scratch and creating value through innovation. Over time, this has evolved into a focused interest in <span className="text-purple-400 font-medium">full-stack development and AI</span>.</p>
                            
                            <p>Outside of academics, I actively seek out new challenges through self-initiated projects and continuous learning. I'm currently exploring the intersection of web development and intelligent systems, building user-centric applications with technologies like React, Node.js, and TypeScript, and diving deeper into AI through hands-on experimentation with graph databases and knowledge-based systems.</p>
                            
                            <p>Whether it's automating workflows, creating intuitive interfaces, or uncovering insights from data, I'm passionate about using technology to <span className="text-purple-400 font-medium">make a tangible impact</span>.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About