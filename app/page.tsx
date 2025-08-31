import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Network, Cloud, Leaf, CheckCircle, TrendingUp, Award, Users } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { PremiumCard } from "@/components/premium-card"
import { MagneticButton } from "@/components/magnetic-button"
import { TypewriterText } from "@/components/typewriter-text"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  const stats = [
    { value: 84, suffix: "%", label: "Average Cost Reduction", icon: <TrendingUp className="h-6 w-6" /> },
    { value: 50, suffix: "+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: <Users className="h-6 w-6" /> },
    { value: 24, suffix: "/7", label: "Support Available", icon: <CheckCircle className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <FloatingElements />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="bounce-in">
              <Badge className="mb-8 bg-teal-600/20 text-teal-100 border-teal-500/30 px-6 py-3 text-base hover-glow glass-effect">
                🚀 Engineering • Energy • Technology • Sustainability
              </Badge>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-gradient animate-glow">Orianx Resources</span>
                <br />
                <TypewriterText texts={["Limited", "Innovation", "Excellence", "Future"]} className="text-teal-300" />
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-teal-100 max-w-4xl mx-auto leading-relaxed font-light">
                Delivering <span className="font-semibold text-white">cutting-edge engineering</span> and IT solutions
                that empower businesses, protect the environment, and ensure{" "}
                <span className="font-semibold text-white">long-term operational resilience</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <MagneticButton
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg hover-lift hover-glow glass-effect"
                >
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-300 text-teal-100 hover:bg-teal-800/50 px-10 py-4 text-lg hover-lift bg-transparent glass-effect"
                >
                  <Link href="/contact">Get In Touch</Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-300 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Proven <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <PremiumCard key={index} className="text-center p-6 hover-lift">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-all duration-500 group-hover:scale-110">
                  <div className="text-teal-600 group-hover:text-white transition-colors duration-500">{stat.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across energy, technology, and sustainability with
              <span className="font-semibold text-teal-700"> measurable impact</span>
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Energy & Electrical",
                description: "Solar PV systems, energy audits, backup power design, and intelligent load optimization",
                href: "/services#energy",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Network className="h-10 w-10" />,
                title: "IT Network Engineering",
                description: "Enterprise networks, VLAN architecture, VPN solutions, and strategic IT consulting",
                href: "/services#network",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                icon: <Cloud className="h-10 w-10" />,
                title: "Cloud Solutions",
                description: "AWS, Azure, GCP deployment, disaster recovery, and hybrid cloud architecture",
                href: "/services#cloud",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                icon: <Leaf className="h-10 w-10" />,
                title: "Environmental Tech",
                description: "Sustainable design, green building integration, and environmental consulting",
                href: "/services#environmental",
                gradient: "from-green-400 to-teal-500",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                <PremiumCard className="group h-full p-8 text-center hover-lift">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <MagneticButton
                    asChild
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white hover-lift bg-transparent w-full"
                  >
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </MagneticButton>
                </PremiumCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flagship <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative solutions delivering{" "}
              <span className="font-semibold text-teal-700">exceptional results</span> across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lake Side Hotel Utility Overhaul",
                description:
                  "Achieved 84% electricity bill reduction through comprehensive rewiring, power audit, and intelligent load shedding systems.",
                badge: "84% Cost Reduction",
                color: "teal",
              },
              {
                icon: <Network className="h-8 w-8" />,
                title: "Ace of Space Smart Network",
                description:
                  "Multi-VLAN network infrastructure with integrated solar power and secure VPN remote access for hospitality operations.",
                badge: "Smart Infrastructure",
                color: "blue",
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud File Server Project",
                description:
                  "Linux-based SAMBA server implementation for secure multi-device access and enterprise file sharing solutions.",
                badge: "Enterprise Solution",
                color: "purple",
              },
            ].map((project, index) => (
              <PremiumCard key={index} className="h-full p-8 hover-lift">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 hover-scale group-hover:bg-teal-600 transition-all duration-500">
                  <div className="text-teal-600 group-hover:text-white transition-colors duration-500">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-teal-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <Badge className="bg-teal-100 text-teal-700 border-teal-200 hover-scale">{project.badge}</Badge>
              </PremiumCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <MagneticButton
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg hover-lift hover-glow"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Why Choose Orianx */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-gradient">Orianx?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for{" "}
                <span className="font-semibold text-teal-700">innovative engineering solutions</span>
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  {
                    title: "Technical Expertise",
                    description:
                      "Multidisciplinary engineering domains with proven track record across multiple industries",
                  },
                  {
                    title: "Data-Driven Solutions",
                    description: "Measurable ROI with comprehensive analytics and detailed performance reporting",
                  },
                  {
                    title: "Sustainability Focus",
                    description: "Commitment to environmental responsibility and innovative green technology solutions",
                  },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="fade-right" delay={100 * (index + 1)}>
                    <div className="flex items-start space-x-4 hover-lift p-6 rounded-xl bg-white/50 glass-effect">
                      <CheckCircle className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Local Understanding",
                    description: "Deep knowledge of regional infrastructure challenges and regulatory requirements",
                  },
                  {
                    title: "End-to-End Service",
                    description: "Complete project lifecycle management from initial design to final implementation",
                  },
                  {
                    title: "24/7 Support",
                    description: "Continuous monitoring and support services for all our implementations and solutions",
                  },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="fade-left" delay={100 * (index + 4)}>
                    <div className="flex items-start space-x-4 hover-lift p-6 rounded-xl bg-white/50 glass-effect">
                      <CheckCircle className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 text-white relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your <span className="text-teal-300">Infrastructure?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can <span className="font-semibold text-white">optimize your operations</span>,
              reduce costs, and build a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton
                asChild
                size="lg"
                className="bg-white text-teal-800 hover:bg-gray-100 px-10 py-4 text-lg hover-lift hover-glow"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </MagneticButton>
              <MagneticButton
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-teal-300 text-teal-100 hover:bg-teal-800/50 px-10 py-4 text-lg hover-lift bg-transparent glass-effect"
              >
                <Link href="/about">Learn More About Us</Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
