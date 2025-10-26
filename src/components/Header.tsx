import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Phone, Star, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="glass backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl text-gradient">Star Network Solutions</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <a href="#home" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ) : (
            <Link to="/#home" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          {isHomePage ? (
            <a href="#services" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ) : (
            <Link to="/#services" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          {isHomePage ? (
            <a href="#about" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ) : (
            <Link to="/#about" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          {isHomePage ? (
            <a href="#contact" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ) : (
            <Link to="/#contact" className="relative py-2 text-white hover:text-white/80 transition-all duration-300 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          </nav>
          
          <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2 hover:bg-white/20" asChild>
            <a href="tel:+14122192464">
              <Phone className="w-4 h-4" />
              <span>(412) 219-2464</span>
            </a>
          </Button>
          {isHomePage ? (
            <Button asChild className="hidden md:inline-flex gradient-primary border-0 shadow-glow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <a href="#contact-form">Get Quote</a>
            </Button>
          ) : (
            <Button asChild className="hidden md:inline-flex gradient-primary border-0 shadow-glow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Link to="/#contact-form">Get Quote</Link>
            </Button>
          )}
          <div className="md:hidden relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            {isMobileMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-white/30 shadow-lg z-50"
                style={{ backgroundColor: 'rgba(30, 41, 59, 0.95)' }}
              >
                <nav className="flex flex-col space-y-2 p-4">
                  {isHomePage ? (
                    <a href="#home" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                  ) : (
                    <Link to="/#home" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                  )}
                  {isHomePage ? (
                    <a href="#services" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                  ) : (
                    <Link to="/#services" className="text-lg py-2 px-3 rounded hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                  )}
                  {isHomePage ? (
                    <a href="#about" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                  ) : (
                    <Link to="/#about" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                  )}
                  {isHomePage ? (
                    <a href="#contact" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                  ) : (
                    <Link to="/#contact" className="text-lg py-2 px-3 rounded hover:bg-white/20 text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                  )}
                  <div className="border-t border-white/20 my-2"></div>
                  {isHomePage ? (
                    <a href="#contact-form" className="inline-flex items-center justify-center rounded-md px-4 py-2 gradient-primary text-white" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</a>
                  ) : (
                    <Link to="/#contact-form" className="inline-flex items-center justify-center rounded-md px-4 py-2 gradient-primary text-white" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}