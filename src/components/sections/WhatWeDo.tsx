import { Globe, Search, Target, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/scroll-reveal";

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
      "On-page SEO",
      "Google Business optimization",
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
      "Google / Meta ads setup",
      "Audience targeting",
      "Budget optimization",
      "Lead tracking",
    ],
    reasons: [
      "Controlled ad spend",
      "Clear ROI focus",
      "No long-term lock-ins",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Focused services that drive leads, clarity, and growth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.problem}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                  <ul className="space-y-2">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-3">Why Choose This:</p>
                  <ul className="space-y-1">
                    {service.reasons.map((reason, i) => (
                      <li key={i} className="text-sm text-accent font-medium">
                        • {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center">
          <Button variant="hero" size="lg" className="group" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatWeDo;
