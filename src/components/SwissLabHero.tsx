import { ArrowRight, Play, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SwissLabHero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Shield className="w-4 h-4" />
              Accredited Laboratory Testing
            </div>
            
            <h1 className="section-title mb-6 animate-fade-up animation-delay-100">
              Live Better with
              <span className="gradient-text block">At-Home Health Testing</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Comprehensive biomarker test kits for healthcare professionals and patients. 
              Order online, collect at home, get results on our secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up animation-delay-300">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8">
                Order Your Kit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                <Play className="w-5 h-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Results in 48-72h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>ISO Certified Lab</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Swiss Quality</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-fade-up animation-delay-300">
            <div className="relative z-10">
              {/* Main Illustration SVG */}
              <svg viewBox="0 0 500 400" className="w-full max-w-lg mx-auto">
                {/* Background Circle */}
                <circle cx="250" cy="200" r="150" fill="hsl(var(--primary) / 0.05)" className="animate-pulse-soft" />
                <circle cx="250" cy="200" r="120" fill="hsl(var(--primary) / 0.08)" />
                
                {/* Test Kit Box */}
                <g transform="translate(170, 120)">
                  <rect x="0" y="0" width="160" height="120" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                  <rect x="10" y="10" width="140" height="20" rx="4" fill="hsl(var(--primary))" />
                  <text x="80" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">SWISSLAB</text>
                  
                  {/* Test Tubes */}
                  <g transform="translate(20, 45)">
                    <rect x="0" y="0" width="15" height="50" rx="7" fill="hsl(var(--accent) / 0.3)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                    <rect x="0" y="30" width="15" height="20" rx="7" fill="hsl(var(--accent))" />
                  </g>
                  <g transform="translate(40, 45)">
                    <rect x="0" y="0" width="15" height="50" rx="7" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                    <rect x="0" y="25" width="15" height="25" rx="7" fill="hsl(var(--primary))" />
                  </g>
                  <g transform="translate(60, 45)">
                    <rect x="0" y="0" width="15" height="50" rx="7" fill="hsl(145 65% 45% / 0.3)" stroke="hsl(145 65% 45%)" strokeWidth="1.5" />
                    <rect x="0" y="35" width="15" height="15" rx="7" fill="hsl(145 65% 45%)" />
                  </g>
                  
                  {/* Results Icon */}
                  <g transform="translate(95, 45)">
                    <rect x="0" y="0" width="45" height="55" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
                    <line x1="8" y1="15" x2="37" y2="15" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                    <line x1="8" y1="25" x2="30" y2="25" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                    <line x1="8" y1="35" x2="25" y2="35" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                    <circle cx="32" cy="45" r="6" fill="hsl(145 65% 45%)" />
                    <path d="M29 45 L31 47 L35 43" stroke="white" strokeWidth="1.5" fill="none" />
                  </g>
                </g>

                {/* Floating Icons */}
                <g className="animate-float">
                  <circle cx="120" cy="100" r="25" fill="hsl(var(--primary) / 0.1)" />
                  <text x="120" y="106" textAnchor="middle" fontSize="20">🧬</text>
                </g>
                <g className="animate-float animation-delay-300">
                  <circle cx="380" cy="130" r="25" fill="hsl(var(--accent) / 0.1)" />
                  <text x="380" y="136" textAnchor="middle" fontSize="20">💉</text>
                </g>
                <g className="animate-float animation-delay-500">
                  <circle cx="100" cy="280" r="25" fill="hsl(145 65% 45% / 0.1)" />
                  <text x="100" y="286" textAnchor="middle" fontSize="20">📊</text>
                </g>
                <g className="animate-float animation-delay-700">
                  <circle cx="400" cy="300" r="25" fill="hsl(var(--primary) / 0.1)" />
                  <text x="400" y="306" textAnchor="middle" fontSize="20">✅</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
