import { Stethoscope, Building2, Users, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const professionalBenefits = [
  "Bulk ordering with volume discounts",
  "White-label options available",
  "Dedicated account manager",
  "Priority lab processing",
  "Integrated patient portal",
  "Custom reporting templates",
];

const userTypes = [
  {
    icon: Stethoscope,
    title: "Doctors & Clinicians",
    description: "Order test kits for your patients and monitor their results through your dashboard.",
    cta: "Join as Clinician",
  },
  {
    icon: Building2,
    title: "Clinics & Hospitals",
    description: "Enterprise solutions for healthcare facilities with bulk ordering and analytics.",
    cta: "Enterprise Inquiry",
  },
  {
    icon: Users,
    title: "Nutritionists & Coaches",
    description: "Support your clients with data-driven insights for personalized recommendations.",
    cta: "Partner With Us",
  },
];

export const SwissLabProfessionals = () => {
  return (
    <section id="professionals" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">For Healthcare Professionals</Badge>
          <h2 className="section-title mb-4">
            The Essential Tool for <span className="gradient-text">Healthcare Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SwissLab provides healthcare professionals with comprehensive testing solutions 
            to better serve their patients with data-driven insights.
          </p>
        </div>

        {/* User Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {userTypes.map((type, index) => (
            <div
              key={type.title}
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-container mb-4">
                <type.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-muted-foreground mb-4">{type.description}</p>
              <Button variant="outline" className="w-full gap-2">
                {type.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits & Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <svg viewBox="0 0 500 400" className="w-full max-w-md mx-auto">
              {/* Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
              
              {/* Dashboard Header */}
              <rect x="70" y="70" width="360" height="40" rx="8" fill="hsl(var(--secondary))" />
              <circle cx="90" cy="90" r="8" fill="hsl(var(--primary))" />
              <rect x="110" y="85" width="100" height="10" rx="5" fill="hsl(var(--muted))" />
              
              {/* Patient Cards */}
              <g transform="translate(70, 130)">
                <rect width="170" height="90" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="30" cy="30" r="15" fill="hsl(var(--primary) / 0.2)" />
                <text x="30" y="35" textAnchor="middle" fontSize="14">👤</text>
                <rect x="55" y="20" width="80" height="8" rx="4" fill="hsl(var(--muted))" />
                <rect x="55" y="35" width="50" height="6" rx="3" fill="hsl(var(--muted-foreground) / 0.3)" />
                <rect x="15" y="60" width="140" height="20" rx="4" fill="hsl(145 65% 45% / 0.2)" />
                <text x="85" y="74" textAnchor="middle" fontSize="10" fill="hsl(145 65% 45%)">Results Ready ✓</text>
              </g>
              
              <g transform="translate(260, 130)">
                <rect width="170" height="90" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="30" cy="30" r="15" fill="hsl(var(--accent) / 0.2)" />
                <text x="30" y="35" textAnchor="middle" fontSize="14">👤</text>
                <rect x="55" y="20" width="80" height="8" rx="4" fill="hsl(var(--muted))" />
                <rect x="55" y="35" width="50" height="6" rx="3" fill="hsl(var(--muted-foreground) / 0.3)" />
                <rect x="15" y="60" width="140" height="20" rx="4" fill="hsl(var(--accent) / 0.2)" />
                <text x="85" y="74" textAnchor="middle" fontSize="10" fill="hsl(var(--accent))">Processing...</text>
              </g>

              {/* Chart Area */}
              <g transform="translate(70, 240)">
                <rect width="360" height="90" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1" />
                <text x="15" y="25" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Patient Analytics</text>
                
                {/* Bar Chart */}
                <rect x="20" y="40" width="30" height="35" rx="4" fill="hsl(var(--primary))" />
                <rect x="60" y="50" width="30" height="25" rx="4" fill="hsl(var(--primary) / 0.7)" />
                <rect x="100" y="35" width="30" height="40" rx="4" fill="hsl(var(--primary))" />
                <rect x="140" y="55" width="30" height="20" rx="4" fill="hsl(var(--primary) / 0.7)" />
                <rect x="180" y="45" width="30" height="30" rx="4" fill="hsl(var(--primary))" />
                
                {/* Line Chart */}
                <polyline
                  points="240,65 270,55 300,60 330,45 350,50"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="240" cy="65" r="4" fill="hsl(var(--accent))" />
                <circle cx="270" cy="55" r="4" fill="hsl(var(--accent))" />
                <circle cx="300" cy="60" r="4" fill="hsl(var(--accent))" />
                <circle cx="330" cy="45" r="4" fill="hsl(var(--accent))" />
                <circle cx="350" cy="50" r="4" fill="hsl(var(--accent))" />
              </g>
            </svg>
          </div>

          {/* Benefits */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Why Healthcare Professionals Choose SwissLab</h3>
            <ul className="space-y-4 mb-8">
              {professionalBenefits.map((benefit, index) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <ClipboardCheck className="w-5 h-5" />
              Register as Professional
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
