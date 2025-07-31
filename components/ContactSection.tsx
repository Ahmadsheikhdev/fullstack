"use client";

import { useState } from "react";
import { Mail, Send, MapPin, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-gradient-to-br from-[#0f2027]/80 via-[#2c5364]/80 to-[#ff512f]/80 text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Have a question or want to connect? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@ahmadsheikhdev.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Global Community</p>
                  <p className="text-sm text-muted-foreground">Available worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Response Time</h3>
                  <p className="text-muted-foreground">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">We're here when you need us</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="backdrop-blur bg-background/70 rounded-3xl shadow-2xl p-8 border border-border/50">
              <div className="mb-8">
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">We'd love to hear from you</p>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500 font-medium">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-500 font-medium">{submitMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                        errors.name ? 'border-red-500' : 'border-border/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-border/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className={`w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-border/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 