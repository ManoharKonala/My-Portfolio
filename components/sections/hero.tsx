"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Eye, Mail } from "lucide-react"

export default function Hero() {
  const [motion, setMotion] = useState(null)
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!motion) {
    return <StaticHero />
  }

  const { motion: m } = motion

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

        {/* Reduced floating particles for better performance */}
        {isVisible && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <m.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-primary/20 gpu-accelerated"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                }}
                animate={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container z-10 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 hero-name gradient-text-optimized text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              KONALA VENKATA RAMA MANOHAR
            </h1>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-white/10">
              <p className="text-lg font-light text-foreground/90 sm:text-xl lg:text-2xl">
                <span className="text-primary font-semibold">B.Tech CSE Student</span> |{" "}
                {/* ...rest of the file... */}
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
