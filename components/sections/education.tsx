"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, ExternalLink, Trophy, Star, BookOpen, Calendar } from "lucide-react"

// Updated education based on Manohar's resume
const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "AI & Data Engineering",
    institution: "Lovely Professional University (LPU), Punjab",
    year: "Aug 2023 – Present",
    grade: "CGPA: 8.1",
    description:
      "Specializing in Artificial Intelligence and Data Engineering with focus on machine learning, data structures, and cloud computing.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-purple-600",
    highlights: ["AI & ML Specialization", "Data Engineering Focus", "Cloud Computing", "Advanced Algorithms"],
  },
  {
    degree: "Higher Secondary (MPC)",
    specialization: "Maths, Physics, Chemistry",
    institution: "Sri Chaitanya Junior College, A.P",
    year: "June 2021 – March 2023",
    grade: "Percentage: 95%",
    description: "Completed higher secondary education with distinction in Mathematics, Physics, and Chemistry.",
    icon: BookOpen,
    gradient: "from-green-500 to-teal-600",
    highlights: ["Mathematics Excellence", "Physics & Chemistry", "95% Achievement", "Science Foundation"],
  },
  {
    degree: "High School Degree",
    specialization: "",
    institution: "Bhashyam High School, Telangana",
    year: "June 2020 – March 2021",
    grade: "Percentage: 100%",
    description: "Achieved perfect score in high school examinations.",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-600",
    highlights: ["Perfect Score", "100% Achievement", "Academic Excellence", "Strong Foundation"],
  },
]

const certifications = [
  {
    name: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "Microsoft Certified",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-gb/ManoharKonala-8337/9B35745465B1EB2?sharingId=9EF960D897F19BA0",
    icon: "🏆",
    featured: true,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    credentialId: "FreeCodeCamp Certified",
    credentialUrl: "#",
    icon: "🎨",
    featured: false,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HackerRank Certified",
    credentialUrl: "#",
    icon: "📝",
    featured: false,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Introduction to Python",
    issuer: "SoloLearn",
    date: "2024",
    credentialId: "SoloLearn Certified",
    credentialUrl: "#",
    icon: "🐍",
    featured: false,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    name: "What is Generative AI",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialId: "LinkedIn Learning",
    credentialUrl: "#",
    icon: "🤖",
    featured: false,
    gradient: "from-pink-500 to-rose-600",
  },
]

// ...rest of the file...
