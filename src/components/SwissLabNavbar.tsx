import { useState } from "react";
import { Menu, X, ShoppingCart, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import swissLabLogo from "@/assets/swisslab-logo.png";

export const SwissLabNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Professionals", href: "#professionals" },
    { label: "Results Portal", href: "#results" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={swissLabLogo} alt="SwissLab" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              View Results
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Login
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4" />
              Order Kit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="justify-start gap-2">
                  <FileText className="w-4 h-4" />
                  View Results
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <User className="w-4 h-4" />
                  Login
                </Button>
                <Button className="justify-start gap-2 bg-primary hover:bg-primary/90">
                  <ShoppingCart className="w-4 h-4" />
                  Order Kit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
