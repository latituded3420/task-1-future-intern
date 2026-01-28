import ScrollReveal from "@/components/ui/scroll-reveal";

const IntroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={0}>
              <p>
                Most business websites look good but fail to generate enquiries. Visitors land on the page, scroll around, and leave — without ever reaching out.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                At <span className="text-foreground font-semibold">BrightPixel Digital</span>, we focus on clarity, structure, and conversion — so visitors know exactly what you offer and how to contact you. No guesswork. No confusion.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                We work closely with local businesses in <span className="text-accent font-medium">Bangalore</span> to build websites and campaigns that support real business goals, not vanity metrics.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-foreground font-medium">
                Simple process. Clear communication. Measurable outcomes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
