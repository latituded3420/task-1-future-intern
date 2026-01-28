import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Book a Free Discovery Call and{" "}
              <span className="text-accent">See If We're a Good Fit</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-primary-foreground/70 mb-4 max-w-xl mx-auto">
              A simple, transparent process trusted by local business owners.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 text-accent mb-10">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in Bangalore — Quick Support and Local Market Understanding</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/contact">
                Schedule Your Free Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
