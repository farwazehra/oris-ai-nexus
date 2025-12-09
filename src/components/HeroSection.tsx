import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import heroAiNexus from "@/assets/hero-ai-nexus.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <ParticleBackground />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content - Clear hierarchy */}
          <div className="space-y-10 text-center lg:text-left">
            
            {/* 1. Eyebrow/Badge - Subtle entry point */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Early Access Available</span>
            </div>

            {/* 2. Primary headline - Maximum impact */}
            <div className="space-y-4 animate-fade-up animation-delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text">The Future of AI,</span>
                <br />
                <span className="text-foreground">Unified.</span>
              </h1>
            </div>

            {/* 3. Supporting text - Concise value prop */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-200">
              One platform. Multiple AI models. Unlimited possibilities for entrepreneurs, creators, and developers.
            </p>

            {/* 4. CTAs - Clear primary & secondary actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button size="lg" className="btn-hero group w-full sm:w-auto min-w-[180px]">
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground w-full sm:w-auto">
                <Play className="mr-2 w-4 h-4" />
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* 5. Social proof - Trust indicators */}
            <div className="pt-6 animate-fade-up animation-delay-400">
              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">10+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">AI Models</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Uptime</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">&lt;50ms</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual - Supporting the message */}
          <div className="relative flex items-center justify-center order-first lg:order-last animate-scale-in animation-delay-200">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 rounded-3xl blur-[80px]" />
            
            {/* Main image */}
            <img
              src={heroAiNexus}
              alt="ORIS AI HUB - Central AI nexus with neural network connections"
              className="relative z-10 w-full max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator - Minimal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
