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
                        I am a motivated and adaptable learner always seeking to upskill. As a Business Analytics student under the School of Computing, I have had hands-on experience working with technologies like Python and Java, and various languages used in data analytics such as MySQL and R.
                        My journey in programming initially began with a deep curiosity for how things work, coupled by a passion for ideation and value creation, and it has evolved into a passion for pursuing a career where I can leverage technology to drive meaningful change in businesses.
                        <br />
                        <br />
                        I am always eager to expand my knowledge and embrace new challenges. Beyond my academic pursuits, I actively engage in self-directed learning to explore new technologies. Currently, I am passionate about learning to create efficient, user-centric web applications using HTML, CSS, and JavaScript.
                        </p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About