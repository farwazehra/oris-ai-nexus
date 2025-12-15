import { SwissLabNavbar } from "@/components/SwissLabNavbar";
import { SwissLabHero } from "@/components/SwissLabHero";
import { SwissLabProducts } from "@/components/SwissLabProducts";
import { SwissLabHowItWorks } from "@/components/SwissLabHowItWorks";
import { SwissLabProfessionals } from "@/components/SwissLabProfessionals";
import { SwissLabResults } from "@/components/SwissLabResults";
import { SwissLabBenefits } from "@/components/SwissLabBenefits";
import { SwissLabCTA } from "@/components/SwissLabCTA";
import { SwissLabFooter } from "@/components/SwissLabFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SwissLabNavbar />
      <main>
        <SwissLabHero />
        <SwissLabProducts />
        <SwissLabHowItWorks />
        <SwissLabProfessionals />
        <SwissLabResults />
        <SwissLabBenefits />
        <SwissLabCTA />
      </main>
      <SwissLabFooter />
    </div>
  );
};

export default Index;
