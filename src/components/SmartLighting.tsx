import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Lightbulb, 
  Sun, 
  Moon, 
  Smartphone, 
  Clock, 
  Zap, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Award,
  Settings,
  Wifi,
  Home,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lightbulb,
    title: "Smart Bulbs & Fixtures",
    description: "LED bulbs and fixtures designed to adapt to your needs and connect across platforms like Alexa, Google Home, and Apple HomeKit.",
    benefits: ["Color-changing LEDs", "Adjustable brightness", "App integration", "Seamless grouping"]
  },
  {
    icon: Sun,
    title: "Accent Lighting",
    description: "Highlight architecture, artwork, or key areas with subtle, dynamic lighting effects.",
    benefits: ["Wall washing and spotlighting", "Adjustable beam angles", "RGB and white options", "App or scene control"]
  },
  {
    icon: Clock,
    title: "Scheduling & Automation",
    description: "Automate lighting behavior for routines, activities, or when you're away.",
    benefits: ["Custom lighting schedules", "Motion and occupancy sensors", "Vacation and security modes", "Geofencing for auto on/off"]
  },
  {
    icon: Palette,
    title: "Mood Lighting Scenes",
    description: "Set the tone for any occasion with personalized lighting scenes and effects.",
    benefits: ["Preset themes", "Custom colors and brightness", "Scene switching from your phone", "Dynamic lighting effects"]
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Smart LEDs use less power and last longer — helping you save money while reducing waste.",
    benefits: ["Up to 70% energy savings", "Long-life LED components", "Usage tracking", "Adaptive dimming"]
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    description: "Manage your entire lighting system from anywhere with one dashboard or app.",
    benefits: ["App-based control", "Remote access", "Group management", "Scene scheduling"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Smart Living Room Lighting",
    title: "Living Room Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Kitchen Smart Lighting",
    title: "Kitchen Lighting"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Bedroom Mood Lighting",
    title: "Bedroom Ambiance"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Outdoor Smart Lights",
    title: "Outdoor Lighting"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Office Smart Lighting",
    title: "Office Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Bathroom Smart Lights",
    title: "Bathroom Lighting"
  }
];

const testimonials = [
  {
    name: "Rachel Green",
    location: "Austin, TX",
    rating: 5,
    text: "The smart lighting has completely changed our home! Love being able to control everything from my phone and set different moods."
  },
  {
    name: "James Miller",
    location: "Houston, TX",
    rating: 5,
    text: "The energy savings are real! Plus the automation features make life so much easier. Lights turn on when we need them."
  },
  {
    name: "Sophie Chen",
    location: "Dallas, TX",
    rating: 5,
    text: "Beautiful lighting scenes and the circadian features have actually improved our sleep quality. Highly recommend!"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Lighting Assessment",
    description: "We review your current lighting setup and discuss your goals, preferences, and automation ideas."
  },
  {
    step: "02", 
    title: "System Design",
    description: "We design a custom lighting layout, selecting smart bulbs, switches, and automation rules tailored to your home."
  },
  {
    step: "03",
    title: "Installation & Setup",
    description: "Our team installs and configures all lighting components — from smart switches to motion sensors — for immediate use."
  },
  {
    step: "04",
    title: "Scene Creation & Training",
    description: "We set up custom lighting scenes and provide a walkthrough on how to adjust, automate, and control everything easily."
  }
];

export default function SmartLighting() {
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
            <Lightbulb className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-400">Smart Lighting</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Intelligent Lighting Control</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Upgrade your home with smart lighting that adjusts to your lifestyle. Control brightness, color, and ambiance from anywhere while saving energy and setting the right tone for every moment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Home className="w-4 h-4 mr-2" />
              Indoor Lighting
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Sun className="w-4 h-4 mr-2" />
              Outdoor Lighting
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Settings className="w-4 h-4 mr-2" />
              Smart Control
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Smart Lighting Features</h2>
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
                <p className="text-slate-400">{step.description}</p>
              </div>
            ))}
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
                    <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-100">{testimonial.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Indoor vs. Outdoor Lighting */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Indoor vs. Outdoor Lighting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Indoor Smart Lighting</CardTitle>
                <CardDescription className="text-lg">
                  Create the perfect atmosphere inside your home with adjustable color, brightness, and automation. Great for living rooms, kitchens, and bedrooms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Scene-based control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Dimming and color transitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Integration with other smart devices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Outdoor Smart Lighting</CardTitle>
                <CardDescription className="text-lg">
                  Extend smart lighting outdoors for security, ambiance, and energy efficiency. Perfect for patios, pathways, and entryways.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Weather-resistant fixtures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Motion and dusk sensors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Zone-based control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Integration with landscape lighting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote Request Section */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Get Your Free Quote</h2>
          <div className="max-w-3xl mx-auto">
            <QuoteForm serviceTitle="Smart Lighting" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready to Upgrade Your Lighting?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how smart lighting can enhance your home and save energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <a href="https://calendar.app.google/7iUcd3yX6yK6e4Zk9" target="_blank" rel="noopener noreferrer">
                <Lightbulb className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
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





