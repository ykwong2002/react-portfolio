import profilePic from "../assets/wykSquareProfile.png"
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 pt-8 lg:pb-24">
        <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-8 text-6xl font-bold tracking-tight lg:pb-12 lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Wong Yeow Kang</motion.h1>
                    
                    <motion.div 
                      variants={container(0.5)}
                      initial="hidden"
                      animate="visible"
                      className="relative mb-8">
                      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                        NUS Business Analytics
                      </span>
                      <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                      <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                        Aspiring Software Engineer
                      </span>
                    </motion.div>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl py-4 text-lg text-neutral-300 leading-relaxed">
                        Welcome to my portfolio! I'm a Year 2 Business Analytics student at the National University of Singapore (NUS). Passionate about <span className="text-purple-400">Software Development</span> and <span className="text-purple-400">Data Analytics</span>, I enjoy collaborating with teams and working independently to solve challenging problems.
                        <br />
                        <br />
                        As someone keen in entrepreneurship, I love brainstorming new innovative ideas, and leveraging technology to turn them to reality.
                        Beyond work and academics, I'm an avid traveler always seeking new experiences around the world. I also enjoy playing basketball and ultimate frisbee in my free time!
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.div
                      initial={{x: 100, opacity: 0}}
                      animate={{x: 0, opacity: 1 }}
                      transition={{duration: 0.5, delay: 1}}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
                      <img 
                        src={profilePic} 
                        alt="Wong Yeow Kang" 
                        className="relative rounded-2xl shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]" 
                      />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero