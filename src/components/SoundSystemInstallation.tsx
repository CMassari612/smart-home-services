import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Volume2, 
  Speaker, 
  Radio, 
  Headphones, 
  Music, 
  Smartphone, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Settings,
  Wifi,
  Home,
  Sun
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Volume2,
    title: "Multi-Room Audio",
    description: "Enjoy synchronized audio across your home with independent zone control for each area.",
    benefits: ["Whole-home coverage", "Independent zone management", "Linked or separate playback", "Streaming integration"]
  },
  {
    icon: Speaker,
    title: "Home Theater Systems",
    description: "Cinematic sound for movies, gaming, and music with precise tuning and powerful performance.",
    benefits: ["5.1 to 7.2 surround configurations", "Dolby Atmos setup", "Subwoofer placement and tuning", "Acoustic optimization"]
  },
  {
    icon: Headphones,
    title: "In-Wall & In-Ceiling Speakers",
    description: "Discreet speaker installs that deliver rich sound while keeping hardware out of sight.",
    benefits: ["Flush or hidden mounting", "Optimized placement", "Paintable grilles", "Balanced sound output"]
  },
  {
    icon: Music,
    title: "Outdoor Audio Systems",
    description: "Enjoy clear, even sound across patios, pools, and outdoor living spaces.",
    benefits: ["Weather-resistant speakers", "Hidden landscape placement", "Even sound coverage", "Integration with indoor systems"]
  },
  {
    icon: Settings,
    title: "Acoustic Calibration",
    description: "Every environment sounds different — we fine-tune your setup for balanced performance.",
    benefits: ["Room and outdoor space analysis", "EQ tuning and sound field testing", "Frequency adjustments", "Final performance review"]
  },
  {
    icon: Radio,
    title: "Wireless Integration",
    description: "Seamless wireless connectivity for streaming and playback.",
    benefits: ["Bluetooth, WiFi, and AirPlay", "Multi-protocol compatibility", "Stable signal quality", "Easy device pairing"]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Home Theater Sound System",
    title: "Home Theater"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Living Room Speakers",
    title: "Living Room Audio"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Multi-Room Audio Setup",
    title: "Multi-Room System"
  },
  {
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "In-Ceiling Speakers",
    title: "In-Ceiling Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Outdoor Audio System",
    title: "Outdoor Speakers"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Soundbar Installation",
    title: "Soundbar Setup"
  }
];

const testimonials = [
  {
    name: "Tom Richards",
    location: "San Antonio, TX",
    rating: 5,
    text: "The multi-room audio is incredible! Music throughout the house with perfect synchronization. Best upgrade we've made."
  },
  {
    name: "Amanda White",
    location: "Austin, TX",
    rating: 5,
    text: "Our home theater sounds amazing! The surround sound setup is professional-grade and the installation was flawless."
  },
  {
    name: "Chris Parker",
    location: "Dallas, TX",
    rating: 5,
    text: "They installed in-ceiling speakers throughout our home. You can't even see them but the sound quality is outstanding!"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Planning",
    description: "We learn about your layout, preferences, and goals to design a system that fits your home and lifestyle."
  },
  {
    step: "02", 
    title: "Equipment Selection",
    description: "We help you choose the right speakers, amplifiers, and components based on your space and budget."
  },
  {
    step: "03",
    title: "Installation & Wiring",
    description: "Speakers and equipment are installed, wired, and configured for consistent coverage and clean integration."
  },
  {
    step: "04",
    title: "Calibration & Testing",
    description: "We tune and balance each area for accurate sound and smooth transitions between zones."
  },
  {
    step: "05",
    title: "Walkthrough & Support",
    description: "After installation, we walk you through controls, connections, and settings — with continued support if needed."
  }
];

export default function SoundSystemInstallation() {
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
            <Volume2 className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-400">Sound System Installation</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Complete Audio Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            At Star Network Solutions, we plan and install audio systems built to perform exactly how you want them to — 
            from layout design to final calibration.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Premium Equipment
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Certified Installers
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Professional Setup
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete Audio Solutions</h2>
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

        {/* Indoor or Outdoor Audio */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Indoor or Outdoor Audio</h2>
          <p className="text-xl text-center text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto">
            Bring sound exactly where you want it — whether you're relaxing in the living room or entertaining on the patio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Indoor Speaker Setup</CardTitle>
                <CardDescription className="text-lg">
                  Perfect for living rooms, offices, and home theaters. Crisp, detailed sound with in-wall or in-ceiling options that blend into your space.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Hidden wiring and clean finishes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Surround sound or multi-room setups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Balanced acoustics for enclosed spaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Outdoor Speaker Setup</CardTitle>
                <CardDescription className="text-lg">
                  Designed for patios, decks, and pools — durable, weather-resistant audio built to perform year-round.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Landscape or wall-mounted speakers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Wide sound coverage without harsh highs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Integration with indoor audio zones</span>
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
            <QuoteForm serviceTitle="Sound System Installation" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready for Amazing Audio?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how professional audio installation can enhance your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <a href="https://calendar.app.google/7iUcd3yX6yK6e4Zk9" target="_blank" rel="noopener noreferrer">
                <Volume2 className="w-5 h-5 mr-2" />
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





