import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/navbar"
import { Floating3DElements } from "@/components/floating-3d-elements"
import { PerformanceMonitor } from "@/components/performance-monitor"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      <PerformanceMonitor />
      <Floating3DElements />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
