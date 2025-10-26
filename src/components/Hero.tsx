import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Sparkles, Wifi, Home, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Wifi className="absolute top-1/4 left-1/6 w-8 h-8 text-blue-400/40 animate-float" style={{animationDelay: '1s'}} />
        <Home className="absolute top-1/3 right-1/6 w-10 h-10 text-purple-400/40 animate-float" style={{animationDelay: '3s'}} />
        <Zap className="absolute bottom-1/3 left-1/5 w-6 h-6 text-cyan-400/40 animate-float" style={{animationDelay: '5s'}} />
        <Sparkles className="absolute bottom-1/4 right-1/5 w-7 h-7 text-pink-400/40 animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">Next-Generation Smart Home Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up">
            <span className="text-gradient">Smart Home</span> & <br />
            <span className="text-gradient">Tech Solutions</span> <br />
            <span className="text-slate-800 dark:text-slate-200">for Modern Living</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Seamlessly integrating technology into how you live and work — from automation to professional network design.
          </p>
          
          <div className="flex justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button asChild size="lg" className="text-lg px-12 py-4 gradient-primary border-0 shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <a href="#contact-form">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center justify-center space-x-3 glass p-4 rounded-2xl border border-white/20">
              <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300">Smarter Homes.</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass p-4 rounded-2xl border border-white/20">
              <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300">Seamless Installs.</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass p-4 rounded-2xl border border-white/20">
              <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300">Connected Living.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}