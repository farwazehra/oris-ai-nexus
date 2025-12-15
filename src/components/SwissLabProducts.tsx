import { ShoppingCart, Star, Clock, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Sports Performance Kit",
    category: "Sports",
    description: "Optimize your training with comprehensive biomarker analysis for athletes.",
    price: "£149",
    markers: 25,
    turnaround: "48-72h",
    popular: true,
    color: "hsl(var(--primary))",
  },
  {
    id: 2,
    name: "Nutrition Panel",
    category: "Nutrition",
    description: "Understand your nutritional deficiencies and imbalances with detailed insights.",
    price: "£129",
    markers: 20,
    turnaround: "48-72h",
    popular: false,
    color: "hsl(var(--accent))",
  },
  {
    id: 3,
    name: "Wellness Complete",
    category: "Wellness",
    description: "Full-body health assessment covering immunity, energy, and vitality markers.",
    price: "£199",
    markers: 35,
    turnaround: "72h",
    popular: true,
    color: "hsl(145 65% 45%)",
  },
  {
    id: 4,
    name: "Longevity Panel",
    category: "Longevity",
    description: "Age better with biomarkers focused on cellular health and longevity.",
    price: "£249",
    markers: 40,
    turnaround: "72h",
    popular: false,
    color: "hsl(270 60% 55%)",
  },
];

export const SwissLabProducts = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Products</Badge>
          <h2 className="section-title mb-4">
            Test Kits for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of easy-to-use at-home test kits. Order for yourself or your patients, 
            and receive personalized results on our secure platform.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="feature-card bg-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {product.popular && (
                <Badge className="absolute top-4 right-4 bg-primary">Popular</Badge>
              )}
              
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${product.color}15` }}
              >
                <Droplets className="w-7 h-7" style={{ color: product.color }} />
              </div>

              {/* Category */}
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>

              {/* Name */}
              <h3 className="text-xl font-bold mt-1 mb-2">{product.name}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" style={{ color: product.color }} />
                  <span>{product.markers} markers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" style={{ color: product.color }} />
                  <span>{product.turnaround}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-bold">{product.price}</span>
                <Button size="sm" variant="outline" className="gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            View All Products
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
