import { Layers, Workflow, Shield, DollarSign, Zap, GitBranch } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Multi-AI Access",
    description: "Access GPT-4, Claude, Gemini, and more from a single dashboard. Switch between models seamlessly.",
    color: "primary",
  },
  {
    icon: Workflow,
    title: "Advanced Automation",
    description: "Build intelligent workflows that combine multiple AI capabilities for complex tasks.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data stays private and protected.",
    color: "accent",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Smart routing to the most cost-effective model for each task. Save up to 60% on AI costs.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    description: "Sub-50ms response times with global edge infrastructure. Speed that scales.",
    color: "secondary",
  },
  {
    icon: GitBranch,
    title: "Smart Workflows",
    description: "Visual workflow builder with pre-built templates. No code required to get started.",
    color: "accent",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/30 mb-6">
            <span className="text-sm text-secondary">Key Benefits</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Why Choose <span className="gradient-text">ORIS AI HUB™</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the full potential of AI with our comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl p-8 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${benefit.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-${benefit.color} to-transparent group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Connecting Lines Visual */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(199 89% 48% / 0.2)" />
                <stop offset="50%" stopColor="hsl(270 70% 60% / 0.2)" />
                <stop offset="100%" stopColor="hsl(180 80% 50% / 0.2)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
