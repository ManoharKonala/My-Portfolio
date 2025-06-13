"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false

    const updateScrollPosition = () => {
      ticking = false
      // Any scroll-based animations can be optimized here
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition)
        ticking = true
      }
    }

    const handleScroll = () => {
      requestTick()
    }

    // Passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement("link")
      fontLink.rel = "preload"
      fontLink.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
      fontLink.as = "style"
      document.head.appendChild(fontLink)
    }

    preloadCriticalResources()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
