"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-400/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-300/10 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-500/10 rounded-full animate-float delay-500" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse delay-700" />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
