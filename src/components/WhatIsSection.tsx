import { Cpu, Shield, Zap, Globe } from "lucide-react";

export const WhatIsSection = () => {
  const features = [
    { icon: Cpu, label: "Multi-AI Access", color: "text-primary" },
    { icon: Zap, label: "Automation", color: "text-secondary" },
    { icon: Shield, label: "Enterprise Security", color: "text-accent" },
    { icon: Globe, label: "Global Scale", color: "text-primary" },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/30">
              <span className="text-sm text-secondary">Platform Overview</span>
            </div>
            
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
              What is{" "}
              <span className="gradient-text">ORIS AI HUB™</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A unified platform giving you multi-AI access, advanced automation, 
              ultra-fast performance, and global-grade security. Experience the power 
              of multiple AI engines working seamlessly together.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              {/* AI Engine Visualization */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary z-10">
                  <span className="text-2xl font-bold text-background font-display">O</span>
                </div>

                {/* Orbiting Elements */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    style={{
                      animation: `spin ${20 + i * 5}s linear infinite`,
                      animationDirection: i % 2 === 0 ? "normal" : "reverse",
                    }}
                  >
                    <div
                      className="absolute w-4 h-4 rounded-full animate-pulse-glow"
                      style={{
                        top: "10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: `hsl(${199 + i * 20} 89% 48%)`,
                        boxShadow: `0 0 20px hsl(${199 + i * 20} 89% 48% / 0.6)`,
                      }}
                    />
                  </div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="80" fill="none" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
                  <circle cx="200" cy="200" r="160" fill="none" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="5 5" opacity="0.1" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(199 89% 48%)" />
                      <stop offset="100%" stopColor="hsl(270 70% 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Labels */}
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">GPT-4</p>
                  <p className="text-xs text-muted-foreground">OpenAI</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">Claude</p>
                  <p className="text-xs text-muted-foreground">Anthropic</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">Gemini</p>
                  <p className="text-xs text-muted-foreground">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
