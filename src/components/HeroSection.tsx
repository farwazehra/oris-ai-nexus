import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import heroAiOrb from "@/assets/hero-ai-orb.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Particle Animation */}
      <ParticleBackground />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now in Early Access</span>
            </div>

            {/* Headline */}
            <h1 className="section-title animate-fade-up animation-delay-100">
              <span className="gradient-text">ORIS AI HUB™</span>
              <br />
              <span className="text-foreground">The Future of AI, Unified.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              A powerful multi-AI platform for entrepreneurs, creators, companies, and developers. 
              Unlock unprecedented AI capabilities in one seamless experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button className="btn-hero group w-full sm:w-auto">
                <span>Join Now</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="btn-hero-outline w-full sm:w-auto group">
                <Play className="mr-2 w-4 h-4" />
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-up animation-delay-400">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">AI Models</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">50ms</p>
                <p className="text-sm text-muted-foreground">Response</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center animate-scale-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-[80px] animate-pulse-glow" />
            <img
              src={heroAiOrb}
              alt="ORIS AI HUB Holographic AI Visualization"
              className="relative z-10 w-full max-w-lg lg:max-w-xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
