import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SwissLabCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
            Get Started Today
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up animation-delay-100">
            Decode Your Health with
            <span className="block text-primary mt-2">Swiss Precision Testing</span>
          </h2>

          <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Whether you're a patient looking to understand your health or a healthcare professional 
            seeking better tools for your practice, SwissLab has you covered.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-300">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8">
              Order Your Kit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-lg px-8 border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              Healthcare Professionals
            </Button>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-background/60 animate-fade-up animation-delay-400">
            <a href="tel:+441onal" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" />
              +44 (0) 123 456 7890
            </a>
            <a href="mailto:info@swisslab.uk" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-4 h-4" />
              info@swisslab.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
