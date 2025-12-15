import { Droplets, Clock, BadgeCheck, FileSearch, Lightbulb, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Droplets,
    title: "No Blood Drawing",
    description: "Simple fingertip collection. No needles or painful blood draws required.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Clock,
    title: "Fast Results",
    description: "Receive comprehensive results within 48-72 hours of sample arrival.",
    color: "hsl(var(--accent))",
  },
  {
    icon: BadgeCheck,
    title: "Accredited Lab",
    description: "ISO certified laboratory with Swiss precision and quality standards.",
    color: "hsl(145 65% 45%)",
  },
  {
    icon: FileSearch,
    title: "Easy to Understand",
    description: "Clear, visual reports with explanations for each biomarker tested.",
    color: "hsl(270 60% 55%)",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights",
    description: "Personalized recommendations to improve your health and wellness.",
    color: "hsl(45 90% 50%)",
  },
  {
    icon: Home,
    title: "Test at Home",
    description: "No clinic visits needed. Collect your sample from anywhere, anytime.",
    color: "hsl(var(--primary))",
  },
];

export const SwissLabBenefits = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Why SwissLab</Badge>
          <h2 className="section-title mb-4">
            Health Testing <span className="gradient-text">Reimagined</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the convenience of professional-grade health testing from the comfort 
            of your home with our innovative at-home test kits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-up">
            <div className="text-4xl font-bold gradient-text mb-1">10K+</div>
            <p className="text-sm text-muted-foreground">Tests Completed</p>
          </div>
          <div className="animate-fade-up animation-delay-200">
            <div className="text-4xl font-bold gradient-text mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Healthcare Partners</p>
          </div>
          <div className="animate-fade-up animation-delay-400">
            <div className="text-4xl font-bold gradient-text mb-1">4.9/5</div>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </div>
          <div className="animate-fade-up animation-delay-600">
            <div className="text-4xl font-bold gradient-text mb-1">UK</div>
            <p className="text-sm text-muted-foreground">Nationwide Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};
