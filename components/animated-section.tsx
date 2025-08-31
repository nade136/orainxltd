"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in" | "bounce-in"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  const animationClasses = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    "scale-in": "animate-scale-in",
    "bounce-in": "animate-bounce-in",
  }

  const delayClasses = {
    0: "",
    100: "delay-100",
    200: "delay-200",
    300: "delay-300",
    500: "delay-500",
    700: "delay-700",
    1000: "delay-1000",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-800",
        hasIntersected ? animationClasses[animation] : "opacity-0",
        delayClasses[delay as keyof typeof delayClasses],
        className,
      )}
    >
      {children}
    </div>
  )
}
