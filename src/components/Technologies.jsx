import pythonlogo from "../assets/python.png";
import javalogo from "../assets/java.png";
import rlogo from "../assets/R.png";
import mysqllogo from "../assets/mysql.png";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/js.png";
import reactjslogo from "../assets/reactjs.png";
import nodejslogo from "../assets/nodejs.png";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition= {{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technology</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

            {/* Python */}
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={pythonlogo} alt="Python" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    Python
                </div>
            </motion.div>

            {/* Java */}
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={javalogo} alt="Java" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    Java
                </div>
            </motion.div>

            {/* R */}
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={rlogo} alt="R" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    R
                </div>
            </motion.div>

            {/* MySQL */}
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={mysqllogo} alt="MySQL" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    MySQL
                </div>
            </motion.div>

            {/* HTML */}
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={htmllogo} alt="HTML" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    HTML
                </div>
            </motion.div>

            {/* CSS */}
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={csslogo} alt="CSS" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    CSS
                </div>
            </motion.div>

            {/* JavaScript */}
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={jslogo} alt="JavaScript" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    JavaScript
                </div>
            </motion.div>

            {/* React */}
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={reactjslogo} alt="React" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    ReactJS
                </div>
            </motion.div>

            {/* NodeJS */}
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-neutral-800 p-4">
                <img src={nodejslogo} alt="NodeJS" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 bg-opacity-75 text-white text-lg font-semibold p-2">
                    NodeJS
                </div>
            </motion.div>

        </motion.div>
    </div>
  );
}

export default Technologies;
