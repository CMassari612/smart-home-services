import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Shield, Award, Users, Sparkles } from "lucide-react";

const stats = [
  {
    label: "Real-World Expertise",
    description: "Hands-on networking, installation, and project experience built from years of fieldwork.",
    icon: Shield
  },
  {
    label: "Versatile Solutions",
    description: "From residential smart homes to commercial low-voltage builds — we handle it all.",
    icon: Award
  },
  {
    label: "Performance & Reliability",
    description: "Every system is optimized for speed, uptime, and long-term stability.",
    icon: Users
  },
  {
    label: "Customer-Focused Process",
    description: "Clear communication, fair pricing, and results that exceed expectations.",
    icon: Sparkles
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-6">
            <span className="text-sm text-slate-600 dark:text-slate-400">About Our Company</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Why Choose <span className="text-gradient">Star Network Solutions</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            With years of hands-on networking and installation experience, we bring practical, high-quality solutions to every project we take on.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass p-8 rounded-3xl border border-white/20">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              At Star Network Solutions, every project starts with real-world experience and ends with precision results. Founded by an IT professional with years of hands-on work in networking, system design, and low-voltage installations, we focus on building reliable, high-performing environments for both residential and commercial clients.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Whether it's optimizing network performance, wiring a new construction project, setting up automation, or developing a clean and functional website, our approach is grounded in practical knowledge and attention to detail. Each solution is planned to perform efficiently, scale with your needs, and look as clean as it operates.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our goal is simple — to deliver technology that just works, backed by clear communication, honest pricing, and long-term reliability.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center glass border border-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:animate-glow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">{stat.label}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-primary p-8 rounded-3xl text-white relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl translate-y-16 -translate-x-16"></div>
            <h4 className="mb-4 text-2xl relative z-10 font-semibold text-center">Our Promise</h4>
            <p className="text-white/95 leading-relaxed relative z-10 text-center text-lg">
              We treat every project like it's our own — built to perform, look clean, and last. Your satisfaction isn't just a goal; it's the standard we build to.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}