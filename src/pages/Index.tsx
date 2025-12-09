import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsSection } from "@/components/WhatIsSection";
import { WhoIsForSection } from "@/components/WhoIsForSection";
import { ProblemsSolvedSection } from "@/components/ProblemsSolvedSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoIsForSection />
        <ProblemsSolvedSection />
        <BenefitsSection />
        <UseCasesSection />
        <RoadmapSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
