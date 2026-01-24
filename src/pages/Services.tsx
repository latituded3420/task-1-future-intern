import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Globe, Search, Target, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Design & Copywriting",
    problem: "A website that explains your service clearly and turns visitors into enquiries.",
    included: [
      "Website structure & page layout",
      "Conversion-focused copywriting",
      "Mobile-friendly design",
      "Contact & enquiry setup",
      "Basic on-page SEO",
    ],
    reasons: [
      "Built for leads, not just visuals",
      "Clear messaging for non-technical audiences",
      "Easy to update and scale",
    ],
  },
  {
    icon: Search,
    title: "SEO for Local Businesses",
    problem: "Help customers find you when they search for your services.",
    included: [
      "Keyword research",
      "On-page SEO optimization",
      "Google Business Profile setup & optimization",
      "Local citations & directory listings",
      "Monthly performance tracking",
    ],
    reasons: [
      "Focus on local intent",
      "Sustainable traffic growth",
      "Transparent reporting",
    ],
  },
  {
    icon: Target,
    title: "Paid Ads Setup & Management",
    problem: "Target the right audience and generate faster enquiries.",
    included: [
      "Google Ads / Meta Ads setup",
      "Audience research & targeting",
      "Budget optimization",
      "Lead tracking & conversion setup",
      "Monthly performance reports",
    ],
    reasons: [
      "Controlled ad spend",
      "Clear ROI focus",
      "No long-term lock-ins",
    ],
  },
];

const Services = () => {
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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Focused digital marketing services that drive leads, clarity, and growth for local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="space-y-20 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.problem}
                  </p>
                  
                  <div className="p-6 rounded-xl bg-subtle border border-border">
                    <p className="text-sm font-semibold text-foreground mb-4">Why Clients Choose This:</p>
                    <ul className="space-y-2">
                      {service.reasons.map((reason, i) => (
                        <li key={i} className="flex items-center gap-2 text-accent font-medium">
                          <Check className="w-5 h-5" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`p-8 rounded-2xl bg-card border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            
            <p className="text-lg text-primary-foreground/70 mb-4 max-w-xl mx-auto">
              Book a free discovery call and we'll help you identify the right approach for your business.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-accent mb-10">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in Bangalore — Quick Support and Local Market Understanding</span>
            </div>
            
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/contact">
                Book Your Free Discovery Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
