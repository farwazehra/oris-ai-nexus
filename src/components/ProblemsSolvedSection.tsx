import { XCircle, CheckCircle2 } from "lucide-react";

const comparisons = [
  { without: "Multiple AI subscriptions", with: "One unified platform" },
  { without: "Complex integrations", with: "Seamless workflow" },
  { without: "High monthly costs", with: "Cost optimized pricing" },
  { without: "Slow response times", with: "Ultra-fast performance" },
  { without: "Security concerns", with: "Enterprise-grade security" },
  { without: "Limited AI models", with: "Access to 10+ AI engines" },
];

export const ProblemsSolvedSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6">
            <span className="text-sm text-primary">The ORIS Difference</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Say goodbye to fragmented AI tools and hello to unified excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without ORIS */}
          <div className="glass-card rounded-3xl p-8 border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/50" />
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-destructive" />
              <span>Without ORIS</span>
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <div className="w-2 h-2 rounded-full bg-destructive/50" />
                  <span className="text-muted-foreground">{item.without}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With ORIS */}
          <div className="glass-card rounded-3xl p-8 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span>With ORIS AI HUB™</span>
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.with}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
