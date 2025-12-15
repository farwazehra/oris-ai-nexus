import { Package, TestTube2, Send, BarChart3, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Package,
    title: "Order Your Kit",
    description: "Choose your test kit online. Healthcare professionals can order for patients.",
    color: "hsl(var(--primary))",
  },
  {
    icon: TestTube2,
    title: "Collect Sample",
    description: "Simple self-collection at home. No needles, just a quick fingertip blood spot.",
    color: "hsl(var(--accent))",
  },
  {
    icon: Send,
    title: "Send to Lab",
    description: "Free return shipping included. Your sample reaches our ISO-certified lab.",
    color: "hsl(145 65% 45%)",
  },
  {
    icon: BarChart3,
    title: "Get Results",
    description: "Access detailed results and personalized recommendations in 48-72 hours.",
    color: "hsl(270 60% 55%)",
  },
];

export const SwissLabHowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="section-title mb-4">
            Simple, <span className="gradient-text">Science-Backed</span> Process
          </h2>
          <p className="text-lg text-muted-foreground">
            From ordering to results in just 4 simple steps. Our technology makes comprehensive 
            health testing accessible to everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary/50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="feature-card text-center pt-8">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Infographic */}
        <div className="mt-20 bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">30+</div>
              <p className="text-muted-foreground">Biomarkers Analyzed</p>
            </div>
            <div className="text-center animate-fade-up animation-delay-200">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">48h</div>
              <p className="text-muted-foreground">Average Turnaround</p>
            </div>
            <div className="text-center animate-fade-up animation-delay-400">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">99%</div>
              <p className="text-muted-foreground">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
