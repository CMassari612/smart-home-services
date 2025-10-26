import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FileText, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

interface QuoteFormProps {
  serviceTitle: string;
}

export default function QuoteForm({ serviceTitle }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    details: ''
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
      const serviceId = 'service_5gba0fa';
      const templateId = 'template_9zg30me';
      const publicKey = 'v9-4Qp3kjt3tFeH9l';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: serviceTitle,
        address: formData.address,
        message: formData.details,
        to_email: 'cmassari@starnetworksolution.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        details: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass border border-white/20 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-gradient">Request a Quote</span>
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Get a personalized quote for {serviceTitle}. We'll respond within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 font-medium">First Name *</label>
              <Input 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium">Last Name *</label>
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
            <label className="block text-sm mb-2 font-medium">Email *</label>
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
            <label className="block text-sm mb-2 font-medium">Phone *</label>
            <Input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(412) 219-2464" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm mb-2 font-medium">Property Address</label>
            <Input 
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main St, City, State ZIP" 
            />
          </div>
          
          <div>
            <label className="block text-sm mb-2 font-medium">Project Details *</label>
            <Textarea 
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Please describe your project, including any specific requirements, square footage, number of rooms, or other relevant details..."
              className="min-h-[120px]"
              required
            />
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>What happens next:</strong>
            </p>
            <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 space-y-1 ml-4 list-disc">
              <li>We'll review your request within 24 hours</li>
              <li>Schedule a free consultation at your convenience</li>
              <li>Provide a detailed quote with no obligations</li>
            </ul>
          </div>
          
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Quote request sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Failed to send quote request. Please try again or contact us directly.
            </div>
          )}
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-primary border-0 shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg py-6 disabled:opacity-50"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Request Free Quote'}
          </Button>
        </form>
        
        <p className="text-xs text-center text-slate-500 dark:text-slate-400">
          By submitting this form, you agree to be contacted by Star Network Solutions regarding your project.
        </p>
      </CardContent>
    </Card>
  );
}

