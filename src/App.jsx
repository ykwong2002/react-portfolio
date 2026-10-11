import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen overflow-x-clip font-sans text-neutral-300 antialiased selection:bg-emerald-400/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-neutral-950"></div>
          <div className="bg-grid absolute inset-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(52,211,153,0.14),rgba(255,255,255,0))]"></div>
        </div>

        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
