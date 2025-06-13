"use client"

import { useState, useEffect, useRef } from "react"

export function Floating3DElements() {
  const [motion, setMotion] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    import("framer-motion")
      .then((mod) => {
        setMotion(mod)
      })
      .catch(() => {
        // Fallback if framer-motion fails to load
      })

    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!motion || !isVisible) {
    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
  }

  const { motion: m } = motion

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Reduced number of floating elements for better performance */}
      {[...Array(6)].map((_, i) => (
        <m.div
          key={i}
          className="absolute gpu-accelerated"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            rotateX: [0, 180],
            rotateY: [0, 180],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-4 h-4 bg-gradient-to-br ${
              i % 3 === 0
                ? "from-primary/20 to-purple-500/20"
                : i % 3 === 1
                  ? "from-blue-500/20 to-cyan-500/20"
                  : "from-green-500/20 to-emerald-500/20"
            } ${i % 2 === 0 ? "rounded-full" : "rounded-lg"} transform-3d-optimized`}
          />
        </m.div>
      ))}

      {/* Optimized particle system with fewer particles */}
      {[...Array(8)].map((_, i) => (
        <m.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full gpu-accelerated"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
