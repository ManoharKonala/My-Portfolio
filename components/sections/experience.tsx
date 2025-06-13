"use client"

import { useState, useEffect, useRef } from "react"
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Database, Brain, Award, Zap, Target } from "lucide-react"

// Updated experience based on Manohar's resume
const experiences = [
  {
    title: "Futurense Bootcamp Participant",
    company: "Futurense",
    location: "Online",
    date: "Jun 2024 – Jul 2024",
    description:
      "Completed an intensive bootcamp focusing on data science and software development. Built multiple projects including a Zomato-like application and conducted comprehensive data analysis.",
    achievements: [
      "Built a Zomato-like Application using Python, Tkinter, and MySQL",
      "Created comprehensive repository covering Python, SQL, Seaborn, Matplotlib, NumPy, and pandas",
      "Worked on data visualization and customer churn analysis projects",
      "Gained hands-on experience with database operations and user interface development",
    ],
    skills: ["Python", "MySQL", "Tkinter", "Data Analysis", "Seaborn", "Matplotlib"],
    icon: Code,
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    bgPattern: "tech",
    category: "Bootcamp",
    duration: "2 months",
    type: "Intensive Training",
  },
]

const milestones = [
  {
    year: "2023",
    title: "Started B.Tech Journey",
    description: "Began Computer Science Engineering at LPU with AI & Data Engineering specialization",
    icon: Brain,
    gradient: "from-emerald-500 to-teal-600",
    stats: "8.1 CGPA",
  },
  {
    year: "2024",
    title: "Futurense Bootcamp",
    description: "Completed intensive data science and software development program",
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-600",
    stats: "5+ Projects",
  },
  {
    year: "2024",
    title: "Azure Certified",
    description: "Achieved Microsoft Azure Data Fundamentals certification",
    icon: Database,
    gradient: "from-orange-500 to-red-600",
    stats: "DP-900",
  },
]

export default function Experience() {
  const [motion, setMotion] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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
    return <StaticExperience />
  }

  const { motion: m } = motion

  return (
    <section ref={sectionRef} id="experience" className="relative py-16 md:py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_70%)]" />
      </div>
      {/* ...rest of the file... */}
    </section>
  )
}
