"use client"

import { useEffect, useState } from "react"

export function PremiumCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", updatePosition)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-teal-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-teal-400 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.2 : 1})`,
        }}
      />
    </>
  )
}
