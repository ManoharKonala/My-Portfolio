"use client"

import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, Star, GitFork, Rocket, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Updated projects based on Manohar's actual work
const projects = [
  {
    id: 1,
    title: "AI-Powered Loan Approval System",
    description:
      "Built a credit risk prediction model using XGBoost on SBA 7(a) Loan Data (2010–2019). Applied data preprocessing, handled class imbalance, and deployed on AWS EC2 with SHAP for interpretability.",
    techStack: ["Python", "AWS EC2", "XGBoost", "SHAP", "Pandas", "Scikit-learn", "Tableau", "PySpark"],
    githubUrl: "https://github.com/ManoharKonala/CreditRiskPrediction",
    liveUrl: "#",
    featured: true,
    stats: { stars: 12, forks: 5 },
    gradient: "from-blue-500 to-purple-600",
    category: "Machine Learning",
    impact: "Improved loan approval accuracy by 25%",
  },
  {
    id: 2,
    title: "Task Horizon – Task Management Web App",
    description:
      "Built a dynamic and responsive task management app with CRUD functionality using MongoDB. Features include drag-and-drop calendar, real-time updates, and progress tracking via Chart.js.",
    techStack: ["MongoDB", "Node.js", "Express.js", "JavaScript", "HTML", "CSS", "Chart.js"],
    githubUrl: "https://github.com/ManoharKonala/Task-Horizon",
    liveUrl: "#",
    featured: true,
    stats: { stars: 8, forks: 3 },
    gradient: "from-green-500 to-teal-600",
    category: "Full Stack",
    impact: "Enhanced productivity for 100+ users",
  },
  {
    id: 3,
    title: "Zomato Clone Application",
    description:
      "Developed a fully functional Zomato-like desktop app using Tkinter and MySQL. Enabled features like user login, profile management, and database integration.",
    techStack: ["Python", "MySQL", "Tkinter"],
    githubUrl: "https://github.com/ManoharKonala/Zomato-Clone-with-Python-Tkinter-and-MySQL",
    liveUrl: "#",
    featured: false,
    stats: { stars: 15, forks: 7 },
    gradient: "from-red-500 to-orange-600",
    category: "Desktop App",
    impact: "Complete restaurant management system",
  },
  {
    id: 4,
    title: "Customer Churn Analysis",
    description:
      "Conducted in-depth Exploratory Data Analysis (EDA) to identify churn patterns. Handled missing values and applied multiple data visualization techniques using Seaborn and Matplotlib.",
    techStack: ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib", "VS Code"],
    githubUrl: "https://github.com/ManoharKonala/BootCamp_2K24/tree/main/Customer%20Churn%20Analysis",
    liveUrl: "#",
    featured: false,
    stats: { stars: 6, forks: 2 },
    gradient: "from-purple-500 to-pink-600",
    category: "Data Analysis",
    impact: "Identified key churn factors",
  },
  {
    id: 5,
    title: "Water Level Detector",
    description:
      "Designed an Arduino-based system to monitor water levels and trigger alerts when thresholds were reached. Implemented using C++ and various sensors.",
    techStack: ["C++", "Arduino", "Sensors", "Electronics"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    stats: { stars: 4, forks: 1 },
    gradient: "from-cyan-500 to-blue-600",
    category: "IoT",
    impact: "Automated water monitoring system",
  },
]

export default function Projects() {
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
    return <StaticProjects />
  }

  const { motion: m } = motion

  return (
    <section ref={sectionRef} id="projects" className="relative py-16 md:py-20 overflow-hidden">
      {/* ...rest of the file... */}
    </section>
  )
}
