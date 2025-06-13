"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Database, Brain, Palette, Cloud, Wrench } from "lucide-react"

// Updated skills based on Manohar's resume without levels
const skills = [
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "HTML", category: "Web", icon: "🌐" },
  { name: "CSS", category: "Web", icon: "🎨" },
  { name: "JavaScript", category: "Web", icon: "⚡" },
  { name: "Pandas", category: "Data Science", icon: "🐼" },
  { name: "NumPy", category: "Data Science", icon: "🔢" },
  { name: "Tkinter", category: "GUI", icon: "🖼️" },
  { name: "Seaborn", category: "Visualization", icon: "📊" },
  { name: "Matplotlib", category: "Visualization", icon: "📈" },
  { name: "MySQL", category: "Database", icon: "📝" },
  { name: "Git", category: "Tools", icon: "🔧" },
  { name: "VS Code", category: "Tools", icon: "💻" },
  { name: "Arduino", category: "Hardware", icon: "🔌" },
  { name: "Linux", category: "OS", icon: "🐧" },
  { name: "XGBoost", category: "ML", icon: "🚀" },
  { name: "SHAP", category: "ML", icon: "🔍" },
  { name: "Scikit-learn", category: "ML", icon: "🧠" },
  { name: "Tableau", category: "Visualization", icon: "📋" },
  { name: "React", category: "Web", icon: "⚛️" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "AWS EC2", category: "Cloud", icon: "☁️" },
  { name: "PySpark", category: "Big Data", icon: "⚡" },
]

const skillCategories = {
  Programming: { icon: Code, gradient: "from-blue-500 to-blue-600", description: "Core programming languages" },
  Web: { icon: Palette, gradient: "from-green-500 to-green-600", description: "Frontend & web technologies" },
  "Data Science": {
    icon: Brain,
    gradient: "from-purple-500 to-purple-600",
    description: "Data analysis & processing",
  },
  GUI: { icon: Palette, gradient: "from-orange-500 to-orange-600", description: "User interface development" },
  Visualization: {
    icon: Palette,
    gradient: "from-pink-500 to-pink-600",
    description: "Data visualization tools",
  },
  Database: { icon: Database, gradient: "from-red-500 to-red-600", description: "Database management systems" },
  Tools: { icon: Wrench, gradient: "from-gray-500 to-gray-600", description: "Development tools & utilities" },
  Hardware: { icon: Wrench, gradient: "from-yellow-500 to-yellow-600", description: "Hardware programming" },
  OS: { icon: Wrench, gradient: "from-indigo-500 to-indigo-600", description: "Operating systems" },
  ML: { icon: Brain, gradient: "from-teal-500 to-teal-600", description: "Machine learning frameworks" },
  Backend: { icon: Database, gradient: "from-cyan-500 to-cyan-600", description: "Server-side technologies" },
  Cloud: { icon: Cloud, gradient: "from-violet-500 to-violet-600", description: "Cloud computing platforms" },
  "Big Data": {
    icon: Database,
    gradient: "from-emerald-500 to-emerald-600",
    description: "Big data processing tools",
  },
}

export default function Skills() {
  const [filter, setFilter] = useState("All")
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

  // Filter by category instead of level
  const filteredSkills = filter === "All" ? skills : skills.filter((skill) => skill.category === filter)

  if (!motion) {
    return <StaticSkills filter={filter} setFilter={setFilter} filteredSkills={filteredSkills} />
  }

  const { motion: m } = motion

  // ...rest of the file...
