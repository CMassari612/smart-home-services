import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import QuoteForm from "./QuoteForm";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Globe, 
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Monitor,
  Zap,
  Shield,
  Server,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Tailored website designs that match your brand and goals — modern, responsive, and optimized for every device.",
    benefits: [
      "Mobile-first approach",
      "Clean UI/UX",
      "Fast-loading design",
      "Accessibility-ready"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Integration",
    description: "Launch or upgrade your online store with secure checkout, automated inventory, and smooth customer experiences.",
    benefits: [
      "Payment gateway setup",
      "Product & order management",
      "Inventory tracking",
      "Customer accounts"
    ]
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    description: "Enhance visibility and site speed with on-page SEO and backend performance tuning.",
    benefits: [
      "Keyword structure",
      "Meta data optimization",
      "Speed & CDN tuning",
      "Analytics setup"
    ]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Keep your site protected and running reliably with proactive monitoring, updates, and backups.",
    benefits: [
      "SSL & firewall setup",
      "Regular updates & patches",
      "Scheduled backups",
      "Uptime monitoring"
    ]
  },
  {
    icon: Server,
    title: "In-House Web Hosting",
    description: "Host your site directly through Star Network Solutions for reliable performance at a lower cost than outsourced services.",
    benefits: [
      "Affordable monthly rates",
      "Fast load times",
      "Daily backups",
      "Local support"
    ]
  },
  {
    icon: Wrench,
    title: "Ongoing Support & Remote Management",
    description: "Pick the level of service that fits your workflow. We offer both hands-off full management and affordable monthly remote support.",
    benefits: [
      "Hands-off site management",
      "Remote troubleshooting",
      "Content updates",
      "Priority technical support"
    ]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern Website Design",
    title: "Modern Design"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "E-commerce Website",
    title: "E-commerce Store"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTk1Mjg2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Responsive Mobile Design",
    title: "Mobile Responsive"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Website Development Process",
    title: "Development Process"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2VjdXJpdHl8ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Website Security",
    title: "Security Features"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHx8MTc1OTUyODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Website Maintenance",
    title: "Ongoing Maintenance"
  }
];

const testimonials = [
  {
    name: "Lisa Thompson",
    location: "Houston, TX",
    rating: 5,
    text: "Our new website has increased our online sales by 300%! The e-commerce features are amazing and the design is beautiful."
  },
  {
    name: "Mark Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "Professional service from start to finish. The website loads fast, looks great on mobile, and our SEO rankings have improved significantly."
  },
  {
    name: "Sarah Kim",
    location: "Dallas, TX",
    rating: 5,
    text: "The content management system is so easy to use. I can update my website content myself, and the ongoing support is excellent."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by learning about your business, brand, and website objectives. Together, we define the scope, key features, and design direction."
  },
  {
    step: "02", 
    title: "Gantt Chart Creation & Scheduling",
    description: "Once the project plan is finalized, we build a detailed Gantt chart that outlines each phase — from design drafts to final deployment. This ensures full visibility and keeps the project on track from start to finish."
  },
  {
    step: "03",
    title: "Design & Development",
    description: "We create your site’s layout, structure, and functionality using modern, efficient code. Every element is tested to ensure performance and responsiveness."
  },
  {
    step: "04",
    title: "Launch & Post-Launch Options",
    description: "When your site is ready, you can choose between two paths: Project Handoff or Monthly Support Plan."
  }
];

export default function WebsiteDevelopment() {
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
            <Code className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm text-slate-600 dark:text-slate-400">Website Development</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-gradient">Build Your Online Presence</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create a powerful and modern online presence with Star Network Solutions. From responsive website design to
            e-commerce development, we build professional websites that are fast, secure, and easy to manage — tailored to your
            brand and business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <CheckCircle className="w-6 h-6 mr-2" />
              Custom Development
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Server className="w-6 h-6 mr-2" />
              Reliable Hosting & Support
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg">
              <Wrench className="w-6 h-6 mr-2" />
              Flexible Maintenance Plans
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Complete Web Solutions</h2>
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

        {/* Post-Launch Options */}
        <div className="mb-20">
          <h2 className="text-4xl text-center mb-12 text-gradient">Post-Launch Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group glass border border-white/20 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Project Handoff</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Pay a one-time handoff fee and receive full documentation, admin access, and training to manage your site independently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Full documentation</span></li>
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Admin access & training</span></li>
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Independent management</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group glass border border-white/20 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Monthly Support Plan</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Continuous updates, maintenance, security monitoring, and technical support — ensuring your website always runs smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Ongoing updates & patches</span></li>
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Security monitoring</span></li>
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Content updates</span></li>
                  <li className="flex items-center space-x-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /><span>Priority technical support</span></li>
                </ul>
              </CardContent>
            </Card>
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
            <QuoteForm serviceTitle="Website Development" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl mb-6 text-gradient">Ready to Build Your Website?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how a professional website can transform your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300">
              <Globe className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/30 hover:bg-white/20">
              <Link to="/#services">
                <Code className="w-5 h-5 mr-2" />
                View Other Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

