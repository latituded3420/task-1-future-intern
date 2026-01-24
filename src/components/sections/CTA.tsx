import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Book a Free Discovery Call and{" "}
            <span className="text-accent">See If We're a Good Fit</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/70 mb-4 max-w-xl mx-auto">
            A simple, transparent process trusted by local business owners.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-accent mb-10">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Based in Bangalore — Quick Support and Local Market Understanding</span>
          </div>
          
          <Button variant="hero" size="xl" className="group" asChild>
            <Link to="/contact">
              Schedule Your Free Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
