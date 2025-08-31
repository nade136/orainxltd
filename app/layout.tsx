import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PremiumCursor } from "@/components/premium-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Orianx Resources Limited - Premium Engineering Solutions | Energy | Technology | Sustainability",
  description:
    "Award-winning multidisciplinary engineering and consulting firm delivering advanced solutions in energy, IT infrastructure, cloud technologies, and environmental innovation across Africa.",
  keywords:
    "premium engineering, energy solutions, IT infrastructure, cloud solutions, sustainability, electrical engineering, network engineering, environmental technology, Africa infrastructure",
  authors: [{ name: "Orianx Resources Limited" }],
  openGraph: {
    title: "Orianx Resources Limited - Premium Engineering Solutions",
    description: "Leading Africa's transition to smart, sustainable infrastructure through innovation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orianx Resources Limited - Premium Engineering Solutions",
    description: "Leading Africa's transition to smart, sustainable infrastructure through innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <PremiumCursor />
        <ScrollProgress />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
