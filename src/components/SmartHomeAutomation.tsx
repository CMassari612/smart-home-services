import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Home, 
  Lightbulb, 
  Volume2, 
  Shield, 
  Thermometer, 
  Camera, 
  Smartphone, 
  Wifi,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lightbulb,
    title: "Smart Lighting Systems",
    description: "Automate your lighting with dimmers, motion sensors, and custom scenes to match your lifestyle or mood — from single-room installs to whole-home lighting control.",
    benefits: ["Energy savings up to 30%", "Mood lighting presets", "Vacation mode", "Motion sensor integration"]
  },
  {
    icon: Volume2,
    title: "Voice Control & Assistant Integration",
    description: "Bring your home to life with voice control through Amazon Alexa, Google Assistant, or Apple HomeKit for effortless hands-free operation.",
    benefits: ["Multi-room audio", "Custom voice commands", "Routine automation", "Music streaming"]
  },
  {
    icon: Shield,
    title: "Home Security Systems",
    description: "Comprehensive security solutions including smart locks, doorbell cameras, motion sensors, and 24/7 monitoring.",
    benefits: ["Remote monitoring", "Instant alerts", "Professional installation", "Mobile app control"]
  },
  {
    icon: Thermometer,
    title: "Smart Climate Control",
    description: "Intelligent thermostats and HVAC control systems that learn your preferences and optimize energy usage.",
    benefits: ["Energy efficiency", "Learning algorithms", "Zone control", "Weather integration"]
  },
  {
    icon: Camera,
    title: "Smart Cameras & Monitoring",
    description: "High-definition security cameras with night vision, two-way audio, and cloud storage options.",
    benefits: ["4K video quality", "Night vision", "Cloud storage", "Mobile notifications"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Complete control of your smart home from anywhere with our intuitive mobile application.",
    benefits: ["Remote access", "Custom scenes", "Energy monitoring", "Family sharing"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Living Room Setup",
    title: "Living Room Automation"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGtpdGNoZW4lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Kitchen Integration",
    title: "Kitchen Smart Features"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJlZHJvb20lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Bedroom Setup",
    title: "Bedroom Automation"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG9mZmljZSUyMHNldHVwfGVufDF8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Office Setup",
    title: "Home Office Integration"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdhcmFnZSUyMGF1dG9tYXRpb258ZW58MXx8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Garage Control",
    title: "Garage Automation"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJhY2t5YXJkJTIwc2V0dXB8ZW58MXx8fHx8MTc1OTUyODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Backyard Setup",
    title: "Outdoor Automation"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "The smart home automation has completely transformed how we live. Everything works seamlessly together, and the energy savings have been incredible."
  },
  {
    name: "Michael Chen",
    location: "Dallas, TX",
    rating: 5,
    text: "Professional installation and excellent customer service. Our home is now truly smart, and we can control everything from our phones."
  },
  {
    name: "Emily Rodriguez",
    location: "Houston, TX",
    rating: 5,
    text: "The security features give us peace of mind, and the lighting automation creates the perfect ambiance for any occasion."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Call or Request a Free Quote",
    description: "Start by reaching out through our contact form or by phone to tell us what you’re looking for. We’ll review your needs and schedule a convenient time to connect."
  },
  {
    step: "02", 
    title: "Consultation & Planning",
    description: "We’ll meet virtually or on-site to walk through your home, discuss your automation goals, and determine what devices and integrations will work best for your layout and budget."
  },
  {
    step: "03",
    title: "Installation & Setup",
    description: "Once the hardware arrives, our team handles every step of the installation and configuration, ensuring all devices are connected, tested, and working seamlessly."
  },
  {
    step: "04",
    title: "Walkthrough & Support",
    description: "After setup, we’ll walk you through your new system and make sure everything functions exactly the way you want. Ongoing support is always available if you ever need assistance or upgrades."
  }
];

export default function SmartHomeAutomation() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/" className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-6">
            <Home className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-400">Smart Home Automation</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Transform Your Home</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the future of connected living with Star Network Solutions. We design and install smart home systems tailored to your space — combining comfort, security, and convenience through technology that works for you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Zap className="w-6 h-6 mr-2" />
              Smart
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Shield className="w-6 h-6 mr-2" />
              Secure
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <CheckCircle className="w-6 h-6 mr-2" />
              Simplified
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete Smart Home Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/*** Gallery Section hidden by request ***}
        {false && (
          <div className="mb-20">
            <h2 className="text-4xl text-center mb-12 text-gradient">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
                  <div className="aspect-video relative overflow-hidden rounded-2xl glass border border-white/20">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/*** Testimonials Section hidden by request ***}
        {false && (
          <div className="mb-20">
            <h2 className="text-4xl text-center mb-12 text-gradient">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quote Request Section */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Get Your Free Quote</h2>
          <div className="max-w-3xl mx-auto">
            <QuoteForm serviceTitle="Smart Home Automation" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready to Make Your Home Smart?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how smart home automation can transform your living experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <a href="https://calendar.app.google/7iUcd3yX6yK6e4Zk9" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/30 hover:bg-white/20">
              <Link to="/#services">
                <Wifi className="w-5 h-5 mr-2" />
                View Other Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

