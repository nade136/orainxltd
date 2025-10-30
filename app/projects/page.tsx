import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Network,
  Cloud,
  Leaf,
  TrendingDown,
  Shield,
  Server,
  Building,
  Battery,
  Sun,
  Wifi,
  Database,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedSection } from "@/components/animated-section";

export default function ProjectsPage() {
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
                Our Projects
              </Badge>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Proven Results Across
                <span className="block text-green-300 animate-pulse-slow">
                  Diverse Industries
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Explore our flagship projects that demonstrate measurable
                impact, innovative solutions, and sustainable outcomes for our
                clients.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="bounce-in" delay={100}>
              <div className="hover-scale">
                <AnimatedCounter
                  end={50}
                  suffix="+"
                  className="text-3xl md:text-4xl font-bold text-green-700 mb-2"
                />
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="bounce-in" delay={200}>
              <div className="hover-scale">
                <AnimatedCounter
                  end={84}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-green-700 mb-2"
                />
                <div className="text-gray-600">Average Cost Reduction</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="bounce-in" delay={300}>
              <div className="hover-scale">
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  className="text-3xl md:text-4xl font-bold text-green-700 mb-2"
                />
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="bounce-in" delay={400}>
              <div className="hover-scale">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  15+
                </div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flagship Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transformative solutions that deliver exceptional results
              </p>
            </AnimatedSection>

            <div className="space-y-12">
              {/* Lake Side Hotel Project */}
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift hover-glow">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="h-24 w-24 text-green-600 mx-auto mb-4 animate-pulse-slow" />
                        <div className="flex space-x-2 justify-center">
                          <Battery className="h-8 w-8 text-green-700" />
                          <Sun className="h-8 w-8 text-yellow-600" />
                          <TrendingDown className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 text-white hover-scale">
                          Featured Project
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 hover-scale">
                          <Zap className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Lake Side Hotel Utility Overhaul
                          </h3>
                          <p className="text-green-600 font-medium">
                            Energy & Electrical Engineering
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Complete electrical infrastructure transformation
                        resulting in dramatic cost savings and improved
                        operational efficiency for a luxury hospitality
                        facility.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            84%
                          </div>
                          <div className="text-sm text-gray-600">
                            Cost Reduction
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            6 Months
                          </div>
                          <div className="text-sm text-gray-600">
                            Project Duration
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <TrendingDown className="h-4 w-4 text-green-600 mr-2" />
                          Comprehensive rewiring and power audit
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Shield className="h-4 w-4 text-green-600 mr-2" />
                          Intelligent load shedding systems
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Zap className="h-4 w-4 text-green-600 mr-2" />
                          Generator optimization and backup power
                        </div>
                      </div>

                      {/* <Button className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Ace of Space Smart Network */}
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift hover-glow">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center lg:order-2">
                      <div className="text-center">
                        <Network className="h-24 w-24 text-blue-600 mx-auto mb-4 animate-pulse-slow" />
                        <div className="flex space-x-2 justify-center">
                          <Wifi className="h-8 w-8 text-blue-700" />
                          <Shield className="h-8 w-8 text-green-600" />
                          <Server className="h-8 w-8 text-gray-600" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white hover-scale">
                          Network Infrastructure
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12 lg:order-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 hover-scale">
                          <Network className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Ace of Space Smart Network
                          </h3>
                          <p className="text-green-600 font-medium">
                            IT Network Engineering
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Multi-VLAN network infrastructure with integrated solar
                        power and secure VPN remote access for a modern
                        hospitality facility.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            99.9%
                          </div>
                          <div className="text-sm text-gray-600">
                            Network Uptime
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            450+
                          </div>
                          <div className="text-sm text-gray-600">
                            Connected Devices
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Network className="h-4 w-4 text-green-600 mr-2" />
                          Multi-VLAN network architecture
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Shield className="h-4 w-4 text-green-600 mr-2" />
                          Secure VPN remote access
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Zap className="h-4 w-4 text-green-600 mr-2" />
                          Integrated solar power infrastructure
                        </div>
                      </div>

                      {/* <Button className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Cloud File Server Project */}
              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift hover-glow">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <div className="text-center">
                        <Cloud className="h-24 w-24 text-purple-600 mx-auto mb-4 animate-pulse-slow" />
                        <div className="flex space-x-2 justify-center">
                          <Server className="h-8 w-8 text-purple-700" />
                          <Database className="h-8 w-8 text-indigo-600" />
                          <Shield className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-purple-600 text-white hover-scale">
                          Cloud Solutions
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 hover-scale">
                          <Cloud className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Cloud File Server Project
                          </h3>
                          <p className="text-green-600 font-medium">
                            Cloud Solutions
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Linux-based SAMBA server implementation for secure
                        multi-device access and enterprise file sharing
                        solutions.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            10TB
                          </div>
                          <div className="text-sm text-gray-600">
                            Storage Capacity
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            100+
                          </div>
                          <div className="text-sm text-gray-600">
                            Concurrent Users
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Server className="h-4 w-4 text-green-600 mr-2" />
                          Linux-based SAMBA server
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Shield className="h-4 w-4 text-green-600 mr-2" />
                          Enterprise-grade security
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Cloud className="h-4 w-4 text-green-600 mr-2" />
                          Multi-device access control
                        </div>
                      </div>

                      {/* <Button className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Gladtrico International */}
              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift hover-glow">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center lg:order-2">
                      <div className="text-center">
                        <Building className="h-24 w-24 text-orange-600 mx-auto mb-4 animate-pulse-slow" />
                        <div className="flex space-x-2 justify-center">
                          <Network className="h-8 w-8 text-orange-700" />
                          <Cloud className="h-8 w-8 text-blue-600" />
                          <Zap className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-600 text-white hover-scale">
                          Smart Infrastructure
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12 lg:order-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 hover-scale">
                          <Building className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Gladtrico International Integration
                          </h3>
                          <p className="text-green-600 font-medium">
                            Integrated Solutions
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Residential smart infrastructure with business-grade
                        networking and comprehensive cloud services integration.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            Smart
                          </div>
                          <div className="text-sm text-gray-600">
                            Home Integration
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg hover-scale">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            24/7
                          </div>
                          <div className="text-sm text-gray-600">
                            Monitoring
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Network className="h-4 w-4 text-green-600 mr-2" />
                          Business-grade networking
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Cloud className="h-4 w-4 text-green-600 mr-2" />
                          Integrated cloud services
                        </div>
                        <div className="flex items-center text-sm text-gray-600 hover-lift">
                          <Building className="h-4 w-4 text-green-600 mr-2" />
                          Smart infrastructure automation
                        </div>
                      </div>

                      {/* <Button className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Project Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diverse expertise across multiple engineering disciplines
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="bounce-in" delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Energy Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Solar installations, energy audits, backup power systems
                    </p>
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-500">
                      Completed Projects
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={200}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Network className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Network Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enterprise networks, VPN solutions, IT infrastructure
                    </p>
                    <div className="text-2xl font-bold text-green-600">20+</div>
                    <div className="text-sm text-gray-500">
                      Completed Projects
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={300}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Cloud className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Cloud Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Cloud migration, file servers, hybrid solutions
                    </p>
                    <div className="text-2xl font-bold text-green-600">10+</div>
                    <div className="text-sm text-gray-500">
                      Completed Projects
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={400}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
                      <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Environmental Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sustainability consulting, green building integration
                    </p>
                    <div className="text-2xl font-bold text-green-600">8+</div>
                    <div className="text-sm text-gray-500">
                      Completed Projects
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and experience the
              Orianx difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 hover-lift hover-glow"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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
  );
}
