"use client"

import type React from "react"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
}

export function PremiumCard({ children, className = "" }: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(13, 148, 136, 0.05) 0%, 
          transparent 40%)
        `,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="relative z-10">{children}</CardContent>
    </Card>
  )
}
