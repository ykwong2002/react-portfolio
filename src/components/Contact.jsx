import {motion} from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFilePdf } from "react-icons/fa";
import resume from "../assets/Wong_Yeow_Kang_Resume.pdf";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 pt-8">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5 }}
        className="mb-16 mt-12 text-center text-4xl font-bold">Get in Touch</motion.h1>
        
        <div className="mx-auto max-w-2xl">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-lg bg-neutral-900/30 p-8 backdrop-blur-sm shadow-lg hover:shadow-purple-900/20 transition-all"
          >
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <a href={resume} download className="group">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 transition-all group-hover:opacity-100"></div>
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 z-10 text-white font-medium">
                      <FaFilePdf className="text-xl" />
                      Download Resume
                    </div>
                  </motion.div>
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50">
                  <FaEnvelope className="text-purple-400" />
                </div>
                <a 
                  href="mailto:wongyeowkang@gmail.com" 
                  className="text-lg text-purple-300 hover:text-white transition-colors hover:underline"
                >
                  wongyeowkang@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-4xl">
                <a 
                  href="https://www.linkedin.com/in/wongyeowkang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/ykwong2002" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.instagram.com/kang.eroo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram Profile"
                  className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Contact