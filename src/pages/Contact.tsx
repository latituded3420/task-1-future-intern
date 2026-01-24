import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Book Your <span className="text-accent">Free Discovery Call</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Let's discuss your business goals and see if we're a good fit. No pressure, no obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left - Contact Info */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll get back to you within 24 hours to schedule your free discovery call.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Bangalore, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@brightpixel.digital</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-subtle border border-border">
                  <p className="font-semibold text-foreground mb-4">What to expect:</p>
                  <ul className="space-y-3">
                    {[
                      "A 30-minute call to understand your business",
                      "Honest feedback on your current online presence",
                      "Clear recommendations (even if it means doing less)",
                      "No pressure, no hard selling"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Right - Form */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="business">Business Name / Website</Label>
                    <Input 
                      id="business" 
                      placeholder="Your Company or www.yoursite.com"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group" type="submit">
                    Book My Free Discovery Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
