import { CheckCircle2, Circle, Rocket } from "lucide-react";

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Platform Launch",
    description: "Official launch with core AI models and automation features",
    status: "current",
    features: ["Multi-AI dashboard", "Basic automations", "API access"],
  },
  {
    quarter: "Q2 2025",
    title: "Enterprise Features",
    description: "Advanced security, team collaboration, and custom models",
    status: "upcoming",
    features: ["SSO integration", "Team workspaces", "Custom fine-tuning"],
  },
  {
    quarter: "Q3 2025",
    title: "AI Marketplace",
    description: "Community-built AI tools and workflow templates",
    status: "upcoming",
    features: ["Template library", "Plugin ecosystem", "Community sharing"],
  },
  {
    quarter: "Q4 2025",
    title: "Global Expansion",
    description: "Multi-region deployment and localized AI models",
    status: "upcoming",
    features: ["Regional data centers", "Localized models", "24/7 support"],
  },
];

export const RoadmapSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Roadmap 2025</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            What's <span className="gradient-text">Coming Next</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our vision for the future of unified AI
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.quarter}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${
                  milestone.status === "current" 
                    ? "bg-primary glow-primary" 
                    : "bg-muted-foreground/30 border-2 border-muted-foreground/50"
                }`} />
              </div>

              {/* Content Card */}
              <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
              }`}>
                <div className={`glass-card rounded-2xl p-6 ${
                  milestone.status === "current" ? "border-primary/40" : ""
                }`}>
                  {/* Quarter Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    milestone.status === "current" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {milestone.status === "current" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <Circle className="w-3 h-3" />
                    )}
                    {milestone.quarter}
                  </div>

                  <h3 className="text-xl font-bold mb-2 font-display">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{milestone.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {milestone.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
