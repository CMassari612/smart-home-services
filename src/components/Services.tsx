import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { 
  Home, 
  Wifi, 
  Code, 
  Cable,
  Lightbulb,
  Volume2,
  Monitor
} from "lucide-react";

const services = [
  {
    title: "Smart Home Automation",
    description: "Bring your home together with a fully connected automation system. We design setups that unify lighting, climate, security, and entertainment — all controlled from one easy-to-use app or dashboard.",
    image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwYWxleGF8ZW58MXx8fHwxNzU5NTI4NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Smart Lighting & Scene Control",
      "Centralized App & Dashboard Integration",
      "Automated Blinds & Curtains",
      "Smart Thermostats & Climate Management"
    ],
    icon: Home,
    link: "/smart-home-automation"
  },
  {
    title: "Network Optimization",
    description: "Professional network equipment installation and optimization to maximize your internet performance and coverage.",
    image: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwcm91dGVyJTIwZXF1aXBtZW50fGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["WiFi 6 Router Installation", "Mesh Network Setup", "Network Security", "Performance Optimization"],
    icon: Wifi,
    link: "/network-optimization"
  },
  {
    title: "Website Development",
    description: "Custom website design and development to help your business establish a strong online presence.",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzU5NTI4NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Fully Custom Websites — No Templates",
      "Local Hosting That Saves You Money",
      "Flexible Maintenance & Update Plans",
      "Transparent Project Tracking with Gantt Charts"
    ],
    icon: Code,
    link: "/website-development"
  },
  {
    title: "Low Voltage Wiring",
    description: "Professional Cat 6 and low voltage wiring installation for optimal network performance and clean cable management.",
    image: "https://images.unsplash.com/photo-1753469805532-537f677c27b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwY2FibGVzfGVufDF8fHx8MTc1OTQ2NTY3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Cat 6 Cable Installation", "Clean Cable Management", "Wall Fish & Routing", "Network Drops"],
    icon: Cable,
    link: "/low-voltage-wiring"
  }
];

const additionalServices = [
  { icon: Monitor, title: "TV Installation & Setup", description: "Professional TV mounting and setup services", link: "/tv-installation" },
  { icon: Volume2, title: "Sound System Installation", description: "Multi-room audio and surround sound systems", link: "/sound-system-installation" },
  { icon: Lightbulb, title: "Smart Lighting", description: "Automated lighting control and scheduling", link: "/smart-lighting" }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-6">
            <span className="text-sm text-slate-600 dark:text-slate-400">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From smart home automation to network optimization, we provide comprehensive 
            tech solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group glass border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/30">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-400 mt-3">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 gradient-primary rounded-full"></div>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full glass border-white/30 hover:bg-white/20 group-hover:border-blue-300 transition-all duration-300">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md">
          <h3 className="text-3xl text-center mb-12 text-gradient">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link to={service.link} key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30 group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <h4 className="mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}