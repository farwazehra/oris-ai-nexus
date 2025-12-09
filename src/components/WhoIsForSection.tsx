import { Briefcase, Building2, Palette, Code2 } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Scale your business with AI-powered insights and automation",
    gradient: "from-primary to-primary/60",
    delay: "0",
  },
  {
    icon: Building2,
    title: "Companies",
    description: "Enterprise-grade AI solutions for teams of any size",
    gradient: "from-secondary to-secondary/60",
    delay: "100",
  },
  {
    icon: Palette,
    title: "Creators",
    description: "Generate stunning content with multi-modal AI capabilities",
    gradient: "from-accent to-accent/60",
    delay: "200",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Powerful APIs and SDKs for seamless AI integration",
    gradient: "from-primary to-secondary",
    delay: "300",
  },
];

export const WhoIsForSection = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/30 mb-6">
            <span className="text-sm text-accent">Built For Everyone</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Who is <span className="gradient-text">ORIS AI HUB™</span> for?
          </h2>
          <p className="text-lg text-muted-foreground">
            From solo creators to enterprise teams, our platform adapts to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="group glass-card rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:border-primary/40"
              style={{ animationDelay: `${persona.delay}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${persona.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary`}>
                <persona.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {persona.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
