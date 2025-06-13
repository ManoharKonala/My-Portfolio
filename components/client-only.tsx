"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  delay?: number
}

export function ClientOnly({ children, fallback = null, delay = 0 }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
