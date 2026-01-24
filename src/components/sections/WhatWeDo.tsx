import { Globe, PenTool, Search, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "We design clean, fast websites that are easy to understand and easy to use. Every page is built to guide visitors toward taking action—calling, enquiring, or booking.",
  },
  {
    icon: PenTool,
    title: "Website Copy",
    description: "Words matter. We write clear, persuasive copy that explains what you do, who it's for, and why it matters—without jargon or fluff.",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "We help your business get found on Google by the right people. Our SEO focuses on local visibility, search intent, and long-term results.",
  },
  {
    icon: Target,
    title: "Paid Ads",
    description: "We run targeted Google and social ads designed to bring qualified leads, not wasted clicks. Budgets are managed carefully and transparently.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 bg-subtle">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing services focused on results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
