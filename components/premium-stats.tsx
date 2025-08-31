"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedCounter } from "@/components/animated-counter"
import { PremiumCard } from "@/components/premium-card"

interface StatItem {
  value: number
  suffix: string
  label: string
  icon: React.ReactNode
}

interface PremiumStatsProps {
  stats: StatItem[]
}

export function PremiumStats({ stats }: PremiumStatsProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <PremiumCard key={index} className="text-center p-6 hover-lift">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-all duration-500 group-hover:scale-110">
            <div className="text-teal-600 group-hover:text-white transition-colors duration-500">{stat.icon}</div>
          </div>
          <AnimatedCounter
            end={hasIntersected ? stat.value : 0}
            suffix={stat.suffix}
            className="text-2xl md:text-3xl font-bold text-teal-700 mb-2"
          />
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </PremiumCard>
      ))}
    </div>
  )
}
