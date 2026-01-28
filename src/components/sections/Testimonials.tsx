import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    name: "Priya Sharma",
    business: "Sharma Interiors",
    location: "Bangalore",
    quote: "BrightPixel completely transformed our online presence. Within 3 months, we started getting 4-5 quality enquiries every week. Their team actually listens and delivers what they promise.",
    result: "5x increase in monthly enquiries"
  },
  {
    name: "Rahul Menon",
    business: "TechStart Solutions",
    location: "Bangalore",
    quote: "As a startup founder, I was tired of agencies promising the moon. BrightPixel was refreshingly honest about what would work for our budget. The website they built actually converts visitors into leads.",
    result: "40% conversion rate improvement"
  },
  {
    name: "Anita Krishnan",
    business: "Krishnan Legal Services",
    location: "Koramangala",
    quote: "I was hesitant about digital marketing, but their transparent approach won me over. They explained everything in simple terms and the results speak for themselves. Highly recommend!",
    result: "First page Google ranking in 4 months"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-subtle">
      <div className="container px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Local Business Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses in Bangalore
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div 
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-accent" />
                </div>
                
                <p className="text-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}, {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
