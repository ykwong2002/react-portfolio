import profilePic from "../assets/wykSquareProfile.png"
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}

})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mp-16 lg:text-8xl">Wong Yeow Kang</motion.h1>
                    <motion.span 
    variants={container(0.5)}
    initial="hidden"
    animate="visible"
    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-left">
    NUS Business Analytics
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-pink-300 to-transparent mt-2"></div>
    Aspiring Software Engineer
</motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 tracking-tighter text-justify">
                        Welcome to my portfolio! I'm a Year 2 Business Analytics student at the National University of Singapore (NUS). Passionate about Software Development and Data Analytics, I enjoy collaborating with teams and working independently to solve challenging problems.
                        <br />
                        <br />
                        As someone keen in entrepreneurship, I love brainstorming new innovative ideas, and leveraging technology to turn them to reality.
                        Beyond work and academics, I’m an avid traveler always seeking new experiences around the world. I also enjoy playing basketball and ultimate frisbee in my free time!
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1 }}
                    transition={{duration: 0.5, delay: 1}}
                    src={profilePic} alt="Kevin Rush" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero