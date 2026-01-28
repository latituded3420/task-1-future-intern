import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const reasons = [
  "Based in Bangalore, working closely with local businesses",
  "Clear communication — no technical confusion",
  "Practical strategies focused on leads and enquiries",
  "Honest recommendations, even if it means doing less",
];

const WhyBrightPixel = () => {
  return (
    <section className="py-20 md:py-28 bg-subtle">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-accent font-medium mb-4">A Simple, Transparent Process</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why <span className="text-accent">BrightPixel</span> Digital
                </h2>
                
                <div className="space-y-4 mb-8">
                  {reasons.map((reason, index) => (
                    <ScrollReveal key={index} delay={index * 0.1} direction="left">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-foreground">{reason}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                
                <ScrollReveal delay={0.5} direction="left">
                  <p className="text-muted-foreground italic border-l-4 border-accent pl-4">
                    We measure success by business impact, not marketing buzzwords.
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <motion.div 
                  className="aspect-square rounded-2xl bg-hero p-8 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="font-display text-6xl md:text-7xl font-bold text-accent mb-2"
                      animate={{ 
                        textShadow: [
                          "0 0 20px hsl(var(--accent) / 0.3)",
                          "0 0 40px hsl(var(--accent) / 0.5)",
                          "0 0 20px hsl(var(--accent) / 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      BP
                    </motion.div>
                    <div className="text-primary-foreground/80 text-sm tracking-wider uppercase">
                      Trusted by Local Business Owners
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/30 blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrightPixel;
