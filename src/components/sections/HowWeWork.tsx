import { Lightbulb, Settings, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Understand Your Business",
    description: "We start by learning your goals, customers, and challenges.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Build the Right Strategy",
    description: "No one-size-fits-all plans. We recommend only what makes sense for your stage and budget.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Execute & Improve",
    description: "We launch, track results, and continuously refine to improve performance.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process that puts your business first.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%-20px)] right-[calc(16.67%-20px)] h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <div className="relative text-center">
                    {/* Number badge */}
                    <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <span className="font-display font-bold text-accent-foreground">{step.number}</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <ScrollReveal delay={0.6}>
            <p className="text-center text-accent font-medium mt-12">
              You always know what's being done and why.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
