import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Monitor, 
  Wrench, 
  Shield, 
  Ruler, 
  Cable, 
  Smartphone, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Settings,
  Zap,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Monitor,
    title: "TV Mounting",
    description: "Mounting on drywall, brick, concrete, or stone with the right hardware and placement.",
    benefits: ["Fixed, tilt, or full-motion mounts", "Stud finding & precision leveling", "Soundbar/shelf mounting (optional)", "Bracket supply or customer-provided"]
  },
  {
    icon: Cable,
    title: "Cable Management",
    description: "Hide wires and keep the wall clean with in-wall routes or surface raceways.",
    benefits: ["In-wall cable routing (where permitted)", "Low-voltage plates & raceways", "Power outlet placement/relocation coordination", "HDMI & power rated cabling"]
  },
  {
    icon: Settings,
    title: "Setup & Calibration",
    description: "Dial in picture, sound, and apps so it's ready to watch.",
    benefits: ["Picture modes & brightness/color tuning", "Audio setup and lip-sync checks", "Smart TV firmware & inputs", "Streaming/app sign-ins"]
  },
  {
    icon: Smartphone,
    title: "Smart TV Integration",
    description: "Make the TV part of the smart home you already use.",
    benefits: ["HomeKit, Alexa, Google, or Home Assistant tie-in", "CEC controls & routines", "Universal remote programming", "App/config profiles"]
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Anchored the right way for the wall and the room.",
    benefits: ["Stud or masonry anchors", "Anti-tip/child-safe options", "Seismic straps (where applicable)", "Clean removal of packing/debris"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Living Room TV Installation",
    title: "Living Room Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Bedroom TV Mounting",
    title: "Bedroom Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Home Theater Setup",
    title: "Home Theater"
  },
  {
    src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Outdoor TV Installation",
    title: "Outdoor Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Office TV Mounting",
    title: "Office Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Multi-TV Setup",
    title: "Multiple TVs"
  }
];

const testimonials = [
  {
    name: "John Anderson",
    location: "Austin, TX",
    rating: 5,
    text: "Perfect installation! The TV looks amazing on the wall and all cables are completely hidden. Very professional work."
  },
  {
    name: "Lisa Thompson",
    location: "Houston, TX",
    rating: 5,
    text: "They mounted our 75-inch TV and it's rock solid. Love the cable management - you can't see a single wire!"
  },
  {
    name: "Mark Davis",
    location: "Dallas, TX",
    rating: 5,
    text: "Great service from start to finish. They even helped me set up all my streaming apps and calibrated the picture perfectly."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Site Assessment",
    description: "Confirm wall type, studs, viewing height, and cable path."
  },
  {
    step: "02", 
    title: "Mount & Hardware Selection",
    description: "Choose fixed/tilt/full-motion and any accessories."
  },
  {
    step: "03",
    title: "Install & Concealment",
    description: "Anchor, level, route cables, and tidy the setup."
  },
  {
    step: "04",
    title: "Setup, Walkthrough & Cleanup",
    description: "Configure picture/sound/apps, review controls, and leave the space clean."
  }
];

export default function TVInstallation() {
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
            <Monitor className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-600 dark:text-slate-400">TV Installation & Setup</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Complete TV Installation Services</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Professional TV mounting, setup, and integration services. From wall mounting to smart home 
            connectivity, we handle every aspect of your TV installation for a seamless viewing experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Cable className="w-4 h-4 mr-2" />
              Hidden Wiring
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Settings className="w-4 h-4 mr-2" />
              Smart Setup
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Clean Finish
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete TV Installation Services</h2>
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

        {/* Gallery Section hidden by request */}
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
          <div className="text-center mt-8">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              See recent installs in our gallery
            </p>
          </div>
        </div>

        {/* Testimonials hidden by request */}
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
            <QuoteForm serviceTitle="TV Installation & Setup" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready for Professional TV Installation?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free estimate and experience professional TV mounting with expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <Monitor className="w-5 h-5 mr-2" />
              Schedule Installation
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/30 hover:bg-white/20">
              <Link to="/#services">
                <Home className="w-5 h-5 mr-2" />
                View Other Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}





