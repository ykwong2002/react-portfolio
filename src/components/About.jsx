import aboutImg from "../assets/about.png"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl"> 
            About <span clasName="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0 }}
            initial={{opacity: 0, x: 100 }}
            transition={{duration: 0.5 }}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start text-justify">
                        <p className="my-2 max-w-xl py-6">
                        I'm Yeow Kang, a curious and driven learner passionate about leveraging technology to solve real-world problems. Currently a <strong>Business Analytics</strong> sophomore at the National University of Singapore under the School of Computing, I’ve gained hands-on experience in Python, Java, MySQL, and R, along with a strong foundation in data structures, algorithms, and applied machine learning.
                        <br />
                        <br />
                        My journey in tech began with a deep curiosity about how systems work, which quickly grew into a love for building things from scratch and creating value through innovation. Over time, this has evolved into a focused interest in <strong>full-stack development and AI</strong>.
                        <br />
                        <br />
                        Outside of academics, I actively seek out new challenges through self-initiated projects and continuous learning. I’m currently exploring the intersection of web development and intelligent systems, building user-centric applications with technologies like React, Node.js, and TypeScript, and diving deeper into AI through hands-on experimentation with graph databases and knowledge-based systems.
                        <br />
                        <br />
                        Whether it’s automating workflows, creating intuitive interfaces, or uncovering insights from data, I’m passionate about using technology to <strong>make a tangible impact</strong>.
                        </p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About