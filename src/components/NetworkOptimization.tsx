import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Wifi, 
  Router, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Signal,
  Lock,
  Gauge
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Router,
    title: "WiFi 6 Router Installation",
    description: "Latest generation WiFi 6 routers for maximum speed, capacity, and efficiency. Perfect for homes with multiple devices.",
    benefits: ["Up to 9.6 Gbps speeds", "Better device handling", "Reduced latency", "Future-proof technology"]
  },
  {
    icon: Signal,
    title: "Mesh Network Setup",
    description: "Eliminate dead zones with professional mesh network installation. Seamless coverage throughout your entire property.",
    benefits: ["Whole-home coverage", "Seamless roaming", "Easy expansion", "Self-healing network"]
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Advanced security protocols and firewall configuration to protect your network from threats and unauthorized access.",
    benefits: ["Firewall protection", "VPN setup", "Guest network isolation", "Threat monitoring"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fine-tune your network settings for optimal performance based on your specific usage patterns and requirements.",
    benefits: ["Bandwidth optimization", "QoS configuration", "Channel optimization", "Speed testing"]
  },
  {
    icon: Globe,
    title: "Internet Service Integration",
    description: "Seamless integration with your ISP and optimization of your internet connection for maximum efficiency.",
    benefits: ["ISP coordination", "Connection optimization", "Troubleshooting", "Upgrade recommendations"]
  },
  {
    icon: Smartphone,
    title: "Mobile Network Management",
    description: "Easy-to-use mobile apps and web interfaces for monitoring and managing your network from anywhere.",
    benefits: ["Remote monitoring", "Device management", "Usage analytics", "Parental controls"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwcm91dGVyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Professional Router Installation",
    title: "Router Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNoJTIwbmV0d29yayUyMHNldHVwfGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Mesh Network Setup",
    title: "Mesh Network"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBzZXR1cHxlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Network Security Configuration",
    title: "Security Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGFjY2VzcyUyMHBvaW50fGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Access Point Installation",
    title: "Access Points"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGluZ3xlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Network Cabling",
    title: "Professional Cabling"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Network Monitoring Dashboard",
    title: "Network Monitoring"
  }
];

const testimonials = [
  {
    name: "David Martinez",
    location: "San Antonio, TX",
    rating: 5,
    text: "Finally have WiFi coverage in every corner of my house! The mesh network setup was professional and the speeds are incredible."
  },
  {
    name: "Jennifer Lee",
    location: "Austin, TX",
    rating: 5,
    text: "The network security features give me peace of mind, and the performance optimization made a huge difference in our home office."
  },
  {
    name: "Robert Wilson",
    location: "Dallas, TX",
    rating: 5,
    text: "Professional installation and excellent support. Our network has never been more reliable and fast."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Call or Request a Free Quote",
    description: "Start by reaching out to tell us about your current setup and any issues you’re experiencing. We’ll review your needs and schedule a time to connect."
  },
  {
    step: "02", 
    title: "On-Site Assessment & Planning",
    description: "We visit your home or business to evaluate your network coverage, layout, and device load. This helps us design a customized plan for better performance and reliability."
  },
  {
    step: "03",
    title: "Installation & Configuration",
    description: "Once the equipment is ready, our technicians handle setup, cabling, and secure configuration of your routers, access points, and firewalls for peak efficiency."
  },
  {
    step: "04",
    title: "Testing, Optimization & Support",
    description: "We run full performance checks to verify signal strength, speed, and stability. After everything is tuned, we walk you through your new setup and remain available for continued support or future upgrades."
  }
];

export default function NetworkOptimization() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/" className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-6">
            <Wifi className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-600 dark:text-slate-400">Network Optimization</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Optimize Your Network</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Maximize your network’s performance with professional setup, configuration, and optimization from Star Network Solutions.
            With hands-on experience in enterprise networking, firewalls, and Wi‑Fi deployments, we bring that same level of
            performance and reliability into your home or business network.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <CheckCircle className="w-6 h-6 mr-2" />
              WiFi 6 & Mesh Expertise
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Award className="w-6 h-6 mr-2" />
              Advanced Firewall Setup
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Clock className="w-6 h-6 mr-2" />
              Optimized Network Design
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete Network Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/*** Gallery Section hidden by request ***/}
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
                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/*** Testimonials Section hidden by request ***/}
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
                    <p className="text-slate-700 dark:text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.location}</p>
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
            <QuoteForm serviceTitle="Network Optimization" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready to Optimize Your Network?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free network assessment and discover how we can improve your internet performance and coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <Gauge className="w-5 h-5 mr-2" />
              Schedule Assessment
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

