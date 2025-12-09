import { useState } from "react";
import { Bot, FileText, BarChart3, Code, Headphones, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Bot,
    title: "Automations",
    description: "Build intelligent automation workflows that handle repetitive tasks, saving hours of manual work every day.",
    stat: "85%",
    statLabel: "Time Saved",
  },
  {
    icon: FileText,
    title: "Content Generation",
    description: "Generate high-quality content at scale - from blog posts to marketing copy, social media, and more.",
    stat: "10x",
    statLabel: "Faster Creation",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with AI-powered analytics and reporting.",
    stat: "360°",
    statLabel: "Data View",
  },
  {
    icon: Code,
    title: "Development Workflows",
    description: "Accelerate development with AI code generation, review, and debugging assistance.",
    stat: "3x",
    statLabel: "Dev Speed",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "Deploy intelligent chatbots and support agents that handle inquiries 24/7.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Process and analyze massive datasets with natural language queries and automated insights.",
    stat: "1M+",
    statLabel: "Records/sec",
  },
];

export const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section id="use-cases" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/30 mb-6">
            <span className="text-sm text-accent">Use Cases</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Endless <span className="gradient-text">Possibilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how teams are leveraging ORIS AI HUB™ to transform their workflows
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="glass-card rounded-2xl p-8 group hover:border-primary/40 transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {useCase.description}
              </p>

              {/* Stat */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <span className="text-2xl font-bold gradient-text">{useCase.stat}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{useCase.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="glass-card rounded-2xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              {(() => {
                const Icon = useCases[activeIndex].icon;
                return <Icon className="w-7 h-7 text-primary" />;
              })()}
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">
              {useCases[activeIndex].title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {useCases[activeIndex].description}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <span className="text-2xl font-bold gradient-text">{useCases[activeIndex].stat}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{useCases[activeIndex].statLabel}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
