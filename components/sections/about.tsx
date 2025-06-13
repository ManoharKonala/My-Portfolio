"use client"

import { useState, useEffect, useRef } from "react"
import { User, Award, Target, Lightbulb, TrendingUp, Code, Database } from "lucide-react"

export default function About() {
  const [motion, setMotion] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    import("framer-motion")
      .then((mod) => {
        setMotion(mod)
      })
      .catch(() => {
        // Fallback if framer-motion fails to load
      })

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!motion) {
    return <StaticAbout />
  }

  const { motion: m } = motion

  return (
    <section ref={sectionRef} id="about" className="relative py-16 md:py-20 overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      {isVisible && (
        <>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-optimized" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-optimized" />
        </>
      )}

      <div className="container px-4 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 mb-4">
            <User className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl gradient-text-optimized">
            Who I Am & What I Do
          </h2>
          <div className="mx-auto h-1 w-20 rounded bg-gradient-to-r from-primary to-purple-500"></div>
        </m.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Enhanced Introduction */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary">Introduction</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold text-primary">Konala Venkata Rama Manohar</span>, a passionate
                B.Tech Computer Science & Engineering student at{" "}
                <span className="font-semibold text-purple-500">Lovely Professional University</span> with a
                specialization in AI & Data Engineering. I maintain a strong academic record with a{" "}
                <span className="font-semibold text-green-500">CGPA of 8.1</span> and have extensive hands-on experience
                in data science and machine learning.
              </p>
            </div>

            {/* Enhanced Expertise */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-purple-500">Technical Expertise</h3>
              </div>
              <p className="text-lg leading-relaxed">
                {/* ...rest of the file... */}
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
