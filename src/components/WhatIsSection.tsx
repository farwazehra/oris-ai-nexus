import { Cpu, Shield, Zap, Globe } from "lucide-react";
import orisHubPlatform from "@/assets/oris-hub-platform.png";

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
            <div className="glass-card rounded-3xl p-6 lg:p-8 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 blur-[40px]" />
              
              {/* Main Image */}
              <img
                src={orisHubPlatform}
                alt="ORIS HUB - Collaborative AI platform with researchers, developers, and leaders working together"
                className="relative z-10 w-full rounded-xl animate-float"
              />

              {/* Labels */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center relative z-10">
                <div>
                  <p className="text-lg font-bold text-primary">Collaborate</p>
                  <p className="text-xs text-muted-foreground">Together</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-secondary">Innovate</p>
                  <p className="text-xs text-muted-foreground">Faster</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-accent">Scale</p>
                  <p className="text-xs text-muted-foreground">Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
