import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-x" style={{ backgroundSize: "400% 400%" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse-glow animation-delay-400" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-12 lg:p-20 text-center max-w-4xl mx-auto border-primary/30">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Early Access Available</span>
          </div>

          {/* Headline */}
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Join <span className="gradient-text">ORIS AI HUB™</span>
            <br />
            <span className="text-foreground">Experience the Future Today</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Be among the first to access the most powerful unified AI platform. 
            Limited early access spots available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-hero group text-lg px-10 py-6">
              <span>Request Early Access</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="btn-hero-outline text-lg px-10 py-6">
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border/30">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">10K+</p>
              <p className="text-xs text-muted-foreground">Waitlist Signups</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-xs text-muted-foreground">Beta Testers</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9★</p>
              <p className="text-xs text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
