import { Building2, Rocket, TrendingUp, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Local service businesses",
  },
  {
    icon: Rocket,
    title: "Early-stage startups",
  },
  {
    icon: TrendingUp,
    title: "Founders who want measurable growth",
  },
  {
    icon: Users,
    title: "Teams without an in-house marketing expert",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground">
            We work with business owners who want clarity, not complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <audience.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground">
                {audience.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-xl mx-auto">
          If you want a reliable online presence that brings enquiries, you're in the right place.
        </p>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
