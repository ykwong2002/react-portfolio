import {motion} from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import resume from "../assets/Wong_Yeow_Kang_Resume.pdf";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <a href={resume} download>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="px-10 py-4 my-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-full border-none shadow-lg hover:opacity-90"
              >
                Download Resume
              </motion.button>
            </a>
            <br />
            <a href="#" className="border-b">wongyeowkang@gmail.com</a>
            <br />
            <div className="m-8 flex items-center justify-center gap-4 text-4xl">
              <a 
                href="https://www.linkedin.com/in/wongyeowkang" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile">
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/ykwong2002" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a 
                href="https://www.instagram.com/kang.eroo" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Profile">
                <FaInstagram />
              </a>
            </div>
        </div>
    </div>
  )
}

export default Contact