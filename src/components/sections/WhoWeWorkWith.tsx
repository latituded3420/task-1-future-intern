import { Building2, Rocket, TrendingUp, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const audiences = [
  {
    icon: Building2,
    title: "Local service businesses",
    description: "Get found by customers searching in your area"
  },
  {
    icon: Rocket,
    title: "Early-stage startups",
    description: "Launch with a website that converts from day one"
  },
  {
    icon: TrendingUp,
    title: "Founders seeking growth",
    description: "Turn your website into a lead generation engine"
  },
  {
    icon: Users,
    title: "Teams without marketing",
    description: "Get expert support without hiring in-house"
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-20 md:py-28 bg-subtle">
      <div className="container px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground">
            Business owners who want clarity, not complexity. Results, not reports.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <audience.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-foreground font-medium max-w-xl mx-auto">
            If you want a reliable online presence that brings enquiries, you're in the right place.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
