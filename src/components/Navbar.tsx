import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <span className="text-background font-bold text-xl font-display">O</span>
            </div>
            <span className="text-xl font-bold font-display">
              ORIS AI HUB<span className="text-primary">™</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="btn-hero text-sm px-6 py-2">
              Request Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/20">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full btn-hero">
                Request Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
