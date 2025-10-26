import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Cable, 
  Wrench, 
  Shield, 
  Zap, 
  Home, 
  Smartphone, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Network,
  Settings,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cable,
    title: "Cat 6 & Cat 6A Cable Installation",
    description: "High-speed cabling for fast, consistent network performance. Every line is terminated, tested, and documented for clear traceability.",
    benefits: ["Up to 10 Gbps speeds", "Modern infrastructure", "Certified termination", "Full line documentation"]
  },
  {
    icon: Wrench,
    title: "Cable Management",
    description: "Cables are routed, bundled, and labeled to create a system that’s easy to maintain and expand.",
    benefits: ["Raceway and tray routing", "Hidden cable paths", "Labeled connections", "Accessible layout"]
  },
  {
    icon: Home,
    title: "Wall Fishing & Routing",
    description: "Cables are run through walls, ceilings, and floors with precision and minimal disruption to your space.",
    benefits: ["Hidden cable runs", "Minimal wall impact", "Code-compliant routing", "Structural care"]
  },
  {
    icon: Network,
    title: "Network Drops & Outlet Placement",
    description: "Outlet placement planned for coverage and accessibility in key areas like workspaces, access points, and media centers.",
    benefits: ["Strategic placement", "Multiple outlet options", "Jack testing and labeling", "Patch panel integration"]
  },
  {
    icon: Shield,
    title: "Low Voltage Systems",
    description: "Wiring for cameras, intercoms, sensors, and smart devices. Designed to connect and scale with future technology.",
    benefits: ["Security and access wiring", "Intercom systems", "Smart home prep", "Power and signal balance"]
  },
  {
    icon: Settings,
    title: "System Coordination & Integration",
    description: "We coordinate with other trades and ensure your low voltage system connects seamlessly with the rest of your build.",
    benefits: ["Contractor coordination", "Electrical tie-in", "Permit assistance", "Final documentation"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjA2JTIwY2FibGUlMjBpbnN0YWxsYXRpb258ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cat 6 Cable Installation",
    title: "Cat 6 Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cable Management System",
    title: "Cable Management"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwZmlzaGluZyUyMGNhYmxlc3xlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wall Fishing Cables",
    title: "Wall Fishing"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwb3V0bGV0JTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Network Outlet Installation",
    title: "Network Outlets"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3clMjB2b2x0YWdlJTIwd2lyaW5nfGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Low Voltage Wiring",
    title: "Low Voltage Systems"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGluZyUyMHRlc3Rpbmd8ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cable Testing and Certification",
    title: "Testing & Certification"
  }
];

const testimonials = [
  {
    name: "James Anderson",
    location: "Houston, TX",
    rating: 5,
    text: "Professional installation with clean cable management. The network drops are perfectly placed and everything works flawlessly."
  },
  {
    name: "Maria Garcia",
    location: "Austin, TX",
    rating: 5,
    text: "The wall fishing was done with minimal disruption to our home. The cables are hidden and the network performance is excellent."
  },
  {
    name: "Thomas Brown",
    location: "Dallas, TX",
    rating: 5,
    text: "Great work on the low voltage wiring for our security system. Professional installation and excellent customer service."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Site Survey & Planning",
    description: "We evaluate your layout, map routing paths, and define connection points to ensure efficient cabling throughout the space."
  },
  {
    step: "02", 
    title: "Permit & Coordination",
    description: "We handle necessary permits and align with builders or electricians to streamline installation timing."
  },
  {
    step: "03",
    title: "Installation & Management",
    description: "Cables are installed, labeled, and terminated with precision for consistent performance and simple maintenance."
  },
  {
    step: "04",
    title: "Testing & Documentation",
    description: "All connections are tested, certified, and logged for clear documentation and future expansion."
  }
];

export default function LowVoltageWiring() {
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
            <Cable className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-600 dark:text-slate-400">Low Voltage Wiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Low Voltage Installation</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Star Network Solutions provides organized wiring built for performance and expansion. From Cat 6 cabling to full smart home
            infrastructure, every install is mapped, labeled, and structured for how your space actually functions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Cable className="w-6 h-6 mr-2" />
              Structured Cabling
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Wrench className="w-6 h-6 mr-2" />
              Organized Installs
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Network className="w-6 h-6 mr-2" />
              Scalable Design
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete Wiring Solutions</h2>
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
            <QuoteForm serviceTitle="Low Voltage Wiring" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready for Professional Wiring?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free estimate for your low voltage wiring project and experience professional installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <Building className="w-5 h-5 mr-2" />
              Get Free Estimate
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/30 hover:bg-white/20">
              <Link to="/#services">
                <Cable className="w-5 h-5 mr-2" />
                View Other Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

