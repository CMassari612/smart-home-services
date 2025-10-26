import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Smart Home Automation", link: "/smart-home-automation" },
  { name: "Network Optimization", link: "/network-optimization" },
  { name: "Website Development", link: "/website-development" },
  { name: "Low Voltage Wiring", link: "/low-voltage-wiring" },
  { name: "TV Installation", link: "/tv-installation" },
  { name: "Sound Systems", link: "/sound-system-installation" }
];

const quickLinks = [
  { name: "About Us", link: "/#about" },
  { name: "Our Services", link: "/#services" },
  { name: "Contact", link: "/#contact" },
  { name: "Get Quote", link: "/#contact-form" }
];


export default function Footer() {
  return (
    <footer className="relative bg-slate-900/95 backdrop-blur-md text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl">Star Network Solutions</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner for smart home automation, network optimization, 
              and professional tech services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17mzyrEP5y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 cursor-pointer group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 cursor-pointer group">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <a href="https://www.instagram.com/starnetworksolutions?igsh=MWY2bWkzMTRxODNiag==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-pink-400 transition-all duration-300 transform hover:scale-110 cursor-pointer group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </a>
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl mb-6 text-gradient">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-gradient">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/20">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href="tel:+14122192464" className="text-slate-300 group-hover:text-white transition-colors hover:text-blue-400">(412) 219-2464</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/20">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href="#contact-form" className="text-slate-300 group-hover:text-white transition-colors hover:text-blue-400">Email Us</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/20">
                  <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <a href="https://calendar.app.google/7iUcd3yX6yK6e4Zk9" target="_blank" rel="noopener noreferrer" className="text-slate-300 group-hover:text-white transition-colors hover:text-blue-400">Bookable Link</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2025 Star Network Solutions. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-all duration-300 hover:translate-y-1">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-all duration-300 hover:translate-y-1">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-slate-400 hover:text-white transition-all duration-300 hover:translate-y-1">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}