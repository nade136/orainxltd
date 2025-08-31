import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Users,
  Award,
  ArrowRight,
  Zap,
  Network,
  Cloud,
  Leaf,
  Building2,
  Factory,
  Hotel,
  TrendingUp,
  Globe,
  Lightbulb,
  Settings,
  HeartHandshake,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 lg:py-32 animate-gradient overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-300/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-float delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="bounce-in">
              <Badge className="mb-6 bg-green-600/20 text-green-100 border-green-500/30 px-4 py-2 hover-glow">
                About Orianx Resources
              </Badge>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Leading Africa's Infrastructure
                <span className="block text-green-300 animate-pulse-slow">Revolution</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                We are a multidisciplinary engineering and consulting firm committed to delivering innovative solutions
                that bridge energy, technology, and sustainability.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Orianx Resources Limited is a multidisciplinary engineering and consulting firm delivering advanced
                  solutions in energy, IT infrastructure, cloud technologies, and environmental innovation. We serve
                  clients across commercial, industrial, and hospitality sectors with a focus on optimizing operations,
                  reducing costs, and promoting sustainable practices.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our work is driven by innovation, technical precision, and a commitment to excellence. With a team of
                  highly skilled professionals, we help clients navigate complex infrastructure challenges through
                  practical, data-driven solutions.
                </p>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow">
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg hover-lift hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Commercial</h3>
                      <p className="text-sm text-gray-600">Office buildings, retail spaces</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover-lift hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Factory className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Industrial</h3>
                      <p className="text-sm text-gray-600">Manufacturing facilities</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover-lift hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Hotel className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Hospitality</h3>
                      <p className="text-sm text-gray-600">Hotels, resorts, lodges</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover-lift hover-glow">
                    <CardContent className="p-6 text-center">
                      <AnimatedCounter end={50} suffix="+" className="text-2xl font-bold text-green-700 mb-1" />
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="scale-in" delay={100}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 hover-scale">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To deliver cutting-edge engineering and IT solutions that empower businesses, protect the
                      environment, and ensure long-term operational resilience.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={300}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 hover-scale">
                      <Eye className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To lead Africa's transition to smart, sustainable infrastructure through innovation in energy,
                      cloud, and environmental technologies.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive engineering solutions across four key domains
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Zap className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy & Electrical</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Solar PV and hybrid systems</li>
                      <li>• Energy efficiency audits</li>
                      <li>• Backup power design</li>
                      <li>• Generator optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Network className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Network Engineering</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Enterprise network design</li>
                      <li>• Secure VLAN architecture</li>
                      <li>• VPN & remote access</li>
                      <li>• IT strategy consulting</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Cloud className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• AWS, Azure, GCP deployment</li>
                      <li>• Disaster recovery solutions</li>
                      <li>• Cloud-based file servers</li>
                      <li>• Hybrid cloud architecture</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Leaf className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Technology</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Eco-efficient system design</li>
                      <li>• Sustainable retrofits</li>
                      <li>• Green building integration</li>
                      <li>• Environmental consulting</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flagship Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven track record of delivering exceptional results
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-left" delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover-scale">
                      <Hotel className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Lake Side Hotel Utility Overhaul</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      84% electricity bill reduction via rewiring, power audit, and power shedding.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">84% Reduction</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover-scale">
                      <Network className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Ace of Space Smart Network</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Multi-VLAN network + solar infrastructure for hospitality facility with VPN remote access.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Smart Network</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover-scale">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Environmental Optimization</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Power restructuring for high energy-efficiency in resort and hotel systems.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Eco-Efficient</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={400}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover-scale">
                      <Cloud className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud File Server Project</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Linux-based SAMBA server for multi-device access and secure file sharing.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Enterprise</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover-scale">
                      <Building2 className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gladtrico International</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Residential smart infrastructure with business-grade networking and cloud services.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Smart Home</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Orianx */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Orianx?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for innovative engineering solutions
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <Award className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
                  <p className="text-gray-600">
                    Multidisciplinary engineering domains with proven track record across multiple industries.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <TrendingUp className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Solutions</h3>
                  <p className="text-gray-600">
                    Measurable ROI with comprehensive analytics and reporting for all implementations.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <Leaf className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Focus</h3>
                  <p className="text-gray-600">
                    Commitment to environmental responsibility and innovative green technology solutions.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <Globe className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Understanding</h3>
                  <p className="text-gray-600">
                    Deep knowledge of regional infrastructure challenges and regulatory requirements.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <Settings className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Service</h3>
                  <p className="text-gray-600">
                    Complete project lifecycle management from initial design to final implementation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <div className="text-center group hover-lift">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 hover-scale">
                    <HeartHandshake className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
                  <p className="text-gray-600">
                    Continuous monitoring and support services for all our implementations and solutions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values & Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">The core principles that guide everything we do</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in" delay={100}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-500 hover-scale">
                    <Award className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for the highest standards in every project, delivering solutions that exceed expectations
                    and set new benchmarks.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={300}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-500 hover-scale">
                    <Users className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                  <p className="text-gray-600">
                    We work closely with our clients as partners, ensuring solutions that truly meet their unique needs
                    and objectives.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={500}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-500 hover-scale">
                    <Lightbulb className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace cutting-edge technologies and creative approaches to solve the most complex
                    infrastructure challenges.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your infrastructure? Get in touch with our expert team.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="bounce-in" delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Phone className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={200}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@orianxresources.com</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={300}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Linkedin className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                    <p className="text-gray-600">Connect with us</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="bounce-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join the growing number of businesses that trust Orianx Resources for their infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 hover-lift hover-glow"
              >
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-300 text-green-100 hover:bg-green-800/50 px-8 py-3 hover-lift"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
