"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap, Network, Cloud, Leaf } from "lucide-react"
import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                Get In Touch
              </Badge>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something
                <span className="block text-green-300 animate-pulse-slow">Amazing Together</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your infrastructure? Contact our expert team for a consultation and discover how we
                can optimize your operations.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animation="fade-right">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <AnimatedSection animation="slide-up" delay={100}>
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full hover-glow transition-all duration-300 focus:scale-105"
                            placeholder="Your full name"
                          />
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="slide-up" delay={200}>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full hover-glow transition-all duration-300 focus:scale-105"
                            placeholder="your@email.com"
                          />
                        </div>
                      </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <AnimatedSection animation="slide-up" delay={300}>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full hover-glow transition-all duration-300 focus:scale-105"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="slide-up" delay={400}>
                        <div>
                          <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full hover-glow transition-all duration-300 focus:scale-105"
                            placeholder="Your company"
                          />
                        </div>
                      </AnimatedSection>
                    </div>

                    <AnimatedSection animation="slide-up" delay={500}>
                      <div>
                        <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2 block">
                          Service Interest
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover-glow transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          <option value="energy">Energy & Electrical Engineering</option>
                          <option value="network">IT Network Engineering</option>
                          <option value="cloud">Cloud Solutions</option>
                          <option value="environmental">Environmental Technology</option>
                          <option value="consulting">General Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={600}>
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full hover-glow transition-all duration-300 focus:scale-105"
                          placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                        />
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="scale-in" delay={700}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white hover-lift hover-glow"
                      >
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedSection>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection animation="fade-left" delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Get in touch with our team through any of these channels. We're here to help!
                  </p>

                  <div className="space-y-6 mb-8">
                    <AnimatedSection animation="slide-up" delay={300}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                              <Phone className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                              <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                              <p className="text-sm text-gray-500">Mon-Fri 8:00 AM - 6:00 PM</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={400}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                              <Mail className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                              <p className="text-gray-600 mb-1">info@orianxresources.com</p>
                              <p className="text-sm text-gray-500">We respond within 24 hours</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={500}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                              <MapPin className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
                              <p className="text-gray-600 mb-1">123 Engineering Plaza</p>
                              <p className="text-gray-600 mb-1">Tech District, City 12345</p>
                              <p className="text-sm text-gray-500">By appointment only</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={600}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                              <Clock className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                              <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                              <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                              <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>

                  {/* Emergency Contact */}
                  <AnimatedSection animation="bounce-in" delay={700}>
                    <Card className="border-2 border-green-200 bg-green-50 hover-glow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 animate-pulse-slow" />
                          24/7 Emergency Support
                        </h3>
                        <p className="text-gray-600 mb-3">
                          For critical infrastructure issues requiring immediate attention:
                        </p>
                        <p className="font-semibold text-green-700">Emergency Hotline: +1 (555) 999-0000</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team is ready to assist with any of these service areas
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="bounce-in" delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Energy Solutions</h3>
                    <p className="text-gray-600 text-sm">Solar, backup power, energy audits</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={200}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Network className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Network Engineering</h3>
                    <p className="text-gray-600 text-sm">Enterprise networks, VPN, security</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={300}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Cloud className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                    <p className="text-gray-600 text-sm">AWS, Azure, hybrid solutions</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={400}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                      <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Green tech, environmental consulting</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-0 shadow-lg hover-lift hover-glow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      How quickly can you respond to project inquiries?
                    </h3>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours. For urgent matters, our emergency hotline
                      provides immediate assistance 24/7.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-0 shadow-lg hover-lift hover-glow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide free consultations?</h3>
                    <p className="text-gray-600">
                      Yes, we offer free initial consultations to assess your needs and provide preliminary
                      recommendations. This helps us understand your requirements better.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-0 shadow-lg hover-lift hover-glow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What industries do you serve?</h3>
                    <p className="text-gray-600">
                      We serve commercial, industrial, and hospitality sectors, with particular expertise in hotels,
                      resorts, office buildings, and manufacturing facilities.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="border-0 shadow-lg hover-lift hover-glow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Do you offer ongoing support and maintenance?
                    </h3>
                    <p className="text-gray-600">
                      Absolutely. We provide comprehensive support packages including monitoring, maintenance, and
                      optimization services to ensure your systems perform optimally.
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Don't wait to optimize your infrastructure. Contact us today and let's discuss how we can help transform
              your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 hover-lift hover-glow"
              >
                <a href="tel:+15551234567">
                  Call Now <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 hover-lift hover-glow"
              >
                <a href="mailto:info@orianxresources.com">
                  Email Us <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
