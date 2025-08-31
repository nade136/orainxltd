import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Network,
  Cloud,
  Leaf,
  ArrowRight,
  Sun,
  Battery,
  Shield,
  Server,
  Database,
  Wifi,
  TreePine,
  Recycle,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function ServicesPage() {
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
                Our Services
              </Badge>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Engineering
                <span className="block text-green-300 animate-pulse-slow">Solutions</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                From energy optimization to cloud infrastructure, we deliver integrated solutions that drive efficiency,
                sustainability, and growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="energy" className="w-full">
              <AnimatedSection animation="scale-in" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 p-2 rounded-lg">
                  <TabsTrigger
                    value="energy"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover-lift"
                  >
                    Energy & Electrical
                  </TabsTrigger>
                  <TabsTrigger
                    value="network"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover-lift"
                  >
                    IT Network
                  </TabsTrigger>
                  <TabsTrigger
                    value="cloud"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover-lift"
                  >
                    Cloud Solutions
                  </TabsTrigger>
                  <TabsTrigger
                    value="environmental"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover-lift"
                  >
                    Environmental
                  </TabsTrigger>
                </TabsList>
              </AnimatedSection>

              <TabsContent value="energy" id="energy">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animation="fade-right">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 hover-scale">
                          <Zap className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Energy & Electrical Engineering</h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Comprehensive electrical solutions designed to optimize energy consumption, reduce costs, and
                        ensure reliable power supply for your operations.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3 hover-lift">
                          <Sun className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Solar PV and Hybrid Systems</h3>
                            <p className="text-gray-600">
                              Custom solar installations with battery backup and grid integration
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Battery className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Energy Efficiency Audits</h3>
                            <p className="text-gray-600">
                              Comprehensive analysis and load shedding system implementation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Zap className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Backup Power Design</h3>
                            <p className="text-gray-600">Generator scheduling, UPS systems, and electrical rewiring</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow"
                      >
                        <Link href="/contact">
                          Get Energy Consultation <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" delay={200}>
                    <div className="grid grid-cols-2 gap-6">
                      <Card className="border-0 shadow-lg hover-lift hover-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">84%</div>
                          <div className="text-sm text-gray-600">Average Cost Reduction</div>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover-lift hover-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                          <div className="text-sm text-gray-600">System Uptime</div>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover-lift hover-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                          <div className="text-sm text-gray-600">Installations</div>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover-lift hover-glow">
                        <CardContent className="p-6 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                          <div className="text-sm text-gray-600">Monitoring</div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>

              <TabsContent value="network" id="network">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animation="fade-right">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 hover-scale">
                          <Network className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">IT Network Engineering & Consulting</h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Enterprise-grade networking solutions that ensure secure, reliable, and scalable connectivity
                        for your business operations.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3 hover-lift">
                          <Server className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Enterprise Network Design</h3>
                            <p className="text-gray-600">Complete network architecture and deployment solutions</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Secure VLAN Architecture</h3>
                            <p className="text-gray-600">Structured cabling and network segmentation for security</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Wifi className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">VPN & Remote Access</h3>
                            <p className="text-gray-600">WireGuard, NordLayer, and secure remote connectivity</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow"
                      >
                        <Link href="/contact">
                          Network Assessment <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" delay={200}>
                    <div className="space-y-6">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Network Performance Optimization</h3>
                          <p className="text-gray-600 mb-4">
                            Advanced monitoring and optimization for maximum efficiency
                          </p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                            Performance
                          </Badge>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">IT Strategy Consulting</h3>
                          <p className="text-gray-600 mb-4">Strategic planning for technology infrastructure growth</p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Strategy</Badge>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Systems Integration</h3>
                          <p className="text-gray-600 mb-4">Seamless integration of existing and new systems</p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                            Integration
                          </Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>

              <TabsContent value="cloud" id="cloud">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animation="fade-right">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 hover-scale">
                          <Cloud className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Cloud Solutions for Business</h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Scalable cloud infrastructure solutions that enable business continuity, data security, and
                        operational flexibility across all platforms.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3 hover-lift">
                          <Cloud className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Multi-Cloud Deployment</h3>
                            <p className="text-gray-600">AWS, Azure, GCP infrastructure setup and management</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Database className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Business Continuity</h3>
                            <p className="text-gray-600">Disaster recovery and backup solutions for critical data</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Server className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Hybrid Cloud Architecture</h3>
                            <p className="text-gray-600">Secure integration of on-premise and cloud resources</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow"
                      >
                        <Link href="/contact">
                          Cloud Migration Plan <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" delay={200}>
                    <div className="space-y-6">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Cloud File Servers</h3>
                          <p className="text-gray-600 mb-4">Linux-based SAMBA servers for secure multi-device access</p>
                          <div className="flex space-x-2">
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Secure</Badge>
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Scalable</Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Storage & Access Control</h3>
                          <p className="text-gray-600 mb-4">
                            Enterprise-grade storage with granular access permissions
                          </p>
                          <div className="flex space-x-2">
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                              Enterprise
                            </Badge>
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                              Controlled
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Data Workflows</h3>
                          <p className="text-gray-600 mb-4">Automated workflows for data processing and management</p>
                          <div className="flex space-x-2">
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                              Automated
                            </Badge>
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">
                              Efficient
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>

              <TabsContent value="environmental" id="environmental">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animation="fade-right">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 hover-scale">
                          <Leaf className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Environmental Technology & Sustainability</h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Innovative environmental solutions that reduce ecological impact while improving operational
                        efficiency and regulatory compliance.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3 hover-lift">
                          <TreePine className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Eco-Efficient System Design</h3>
                            <p className="text-gray-600">Green technology integration and energy optimization</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Recycle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Sustainable Retrofits</h3>
                            <p className="text-gray-600">Electrical and mechanical system upgrades for efficiency</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 hover-lift">
                          <Leaf className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Green Building Integration</h3>
                            <p className="text-gray-600">Smart hotel systems and sustainable infrastructure</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow"
                      >
                        <Link href="/contact">
                          Sustainability Assessment <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" delay={200}>
                    <div className="space-y-6">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Environmental Consulting</h3>
                          <p className="text-gray-600 mb-4">Impact assessment and sustainable solution development</p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Consulting</Badge>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Smart Building Systems</h3>
                          <p className="text-gray-600 mb-4">
                            Intelligent automation for energy and resource management
                          </p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Smart Tech</Badge>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-3">Compliance Solutions</h3>
                          <p className="text-gray-600 mb-4">Regulatory compliance and environmental certification</p>
                          <Badge className="bg-green-100 text-green-700 border-green-200 hover-scale">Compliance</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional results
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8">
              <AnimatedSection animation="bounce-in" delay={100}>
                <div className="text-center hover-lift">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold hover-scale hover-glow">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive analysis of your current infrastructure and requirements
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={200}>
                <div className="text-center hover-lift">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold hover-scale hover-glow">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Design</h3>
                  <p className="text-gray-600">Custom solution design tailored to your specific needs and goals</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={300}>
                <div className="text-center hover-lift">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold hover-scale hover-glow">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
                  <p className="text-gray-600">Professional installation and deployment with minimal disruption</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={400}>
                <div className="text-center hover-lift">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold hover-scale hover-glow">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
                  <p className="text-gray-600">Ongoing monitoring, maintenance, and optimization services</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="bounce-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized solution that meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 hover-lift hover-glow"
              >
                <Link href="/contact">
                  Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-300 text-green-100 hover:bg-green-800/50 px-8 py-3 hover-lift"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
