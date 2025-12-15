import { FileText, Shield, Download, Share2, TrendingUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resultFeatures = [
  {
    icon: FileText,
    title: "Detailed Reports",
    description: "Comprehensive analysis of each biomarker with easy-to-understand explanations.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your health over time with historical data and trend analysis.",
  },
  {
    icon: Share2,
    title: "Share with Doctor",
    description: "Securely share results with your healthcare provider for professional guidance.",
  },
  {
    icon: Download,
    title: "Download PDF",
    description: "Get a printable PDF report for your records or doctor visits.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Receive alerts when your results are ready via email or SMS.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Your health data is protected with enterprise-grade security.",
  },
];

export const SwissLabResults = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">Results Portal</Badge>
            <h2 className="section-title mb-4">
              Access Your <span className="gradient-text">Results Online</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              View your comprehensive test results through our secure patient portal. 
              Get actionable insights and personalized recommendations based on your biomarker levels.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {resultFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <FileText className="w-5 h-5" />
                View My Results
              </Button>
              <Button size="lg" variant="outline">
                Register Kit
              </Button>
            </div>
          </div>

          {/* Results Preview Illustration */}
          <div className="animate-fade-up animation-delay-300">
            <div className="bg-card rounded-3xl border border-border p-6 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="font-bold text-lg">Your Results</h3>
                  <p className="text-sm text-muted-foreground">Sports Performance Panel</p>
                </div>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed</Badge>
              </div>

              {/* Sample Results */}
              <div className="space-y-4">
                {/* Vitamin D */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Vitamin D</span>
                    <span className="text-sm font-semibold text-primary">45 ng/mL</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Optimal</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Iron */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Iron (Ferritin)</span>
                    <span className="text-sm font-semibold" style={{ color: "hsl(145 65% 45%)" }}>120 μg/L</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/2 rounded-full" style={{ background: "linear-gradient(to right, hsl(145 65% 45% / 0.5), hsl(145 65% 45%))" }} />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Optimal</span>
                    <span>High</span>
                  </div>
                </div>

                {/* B12 */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Vitamin B12</span>
                    <span className="text-sm font-semibold" style={{ color: "hsl(45 90% 50%)" }}>280 pg/mL</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 rounded-full" style={{ background: "linear-gradient(to right, hsl(45 90% 50% / 0.5), hsl(45 90% 50%))" }} />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Optimal</span>
                    <span>High</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  View full report with 25+ biomarkers and recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
