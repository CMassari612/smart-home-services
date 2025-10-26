import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Calendar,
  Info
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "(412) 219-2464",
    subtitle: "",
    link: "tel:+14122192464"
  },
  {
    icon: Info,
    title: "Free Consultations",
    details: "Note: We always offer free consultations to discuss your project plans. Charges only apply if an on-site visit is scheduled for assessment or installation planning.",
    subtitle: "No obligation, no pressure"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "",
    subtitle: "We'll respond within 24 hours",
    link: "#contact-form"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration
      const serviceId = 'service_5gba0fa';
      const templateId = 'template_9zg30me';
      const publicKey = 'v9-4Qp3kjt3tFeH9l';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'cmassari@starnetworksolution.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/30 mb-6">
              <span className="text-sm text-slate-400">Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Get Your <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your home with smart technology? Contact us today for a 
              free consultation and personalized quote.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center glass border border-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 group">
                  {info.link ? (
                    <a href={info.link} className="block">
                      <CardHeader>
                        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:animate-glow">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-lg hover:text-blue-400 transition-colors cursor-pointer">{info.details}</p>
                        <p className="text-slate-400">{info.subtitle}</p>
                      </CardContent>
                    </a>
                  ) : (
                    <>
                      <CardHeader>
                        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:animate-glow">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-lg">{info.details}</p>
                        <p className="text-slate-400">{info.subtitle}</p>
                      </CardContent>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card id="contact-form" className="glass border border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gradient">Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Smith" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-input-background"
                    >
                      <option value="">Select a service...</option>
                      <option value="Smart Home Automation">Smart Home Automation</option>
                      <option value="Network Optimization">Network Optimization</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Low Voltage Wiring">Low Voltage Wiring</option>
                      <option value="TV Installation">TV Installation</option>
                      <option value="Sound System Setup">Sound System Setup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Project Details</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                      Failed to send message. Please try again or contact us directly.
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary border-0 shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg py-3 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="glass border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span>Schedule a Consultation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Book a free, no-obligation consultation to discuss your smart home 
                    and technology needs. We'll provide a detailed quote and timeline.
                  </p>
                  <a 
                    href="https://calendar.app.google/7iUcd3yX6yK6e4Zk9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 border border-white/30 rounded-md bg-transparent hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Schedule Online
                  </a>
                </CardContent>
              </Card>
              
              <Card className="glass border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="w-8 h-8 gradient-secondary rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-slate-200">5:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-slate-200">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-slate-200">7:00 AM - 7:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}