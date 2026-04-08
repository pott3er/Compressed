import { Button } from "@/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic digital inheritance",
    features: ["1 Basic vault", "1 Beneficiary", "Crypto asset escrow", "Heartbeat monitoring", "30-day failsafe"],
    cta: "Create Free Vault",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "Full protection with advanced features",
    features: [
      "Unlimited vaults",
      "Multiple beneficiaries & delegates",
      "Encrypted file storage (Lit Protocol)",
      "Medical incapacitation drip",
      "Multi-sig delegate verification",
      "Priority AI verification",
      "SMS & Email alerts",
    ],
    cta: "Start Premium",
    highlighted: true,
  },
  {
    name: "Execution",
    price: "1%",
    period: "on transfer",
    description: "Only charged when inheritance executes",
    features: [
      "Charged on successful transfer only",
      "Traditional lawyers charge 3-7%",
      "Automated smart contract execution",
      "No hidden fees",
      "Aligned incentives",
    ],
    cta: "Learn More",
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Simple, <span className="text-gradient-gold">Aligned</span> Pricing
        </h2>
        <p className="text-muted-foreground">
          We only succeed when your legacy is secured. No hidden fees, no surprises.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 transition-all duration-300 ${
              tier.highlighted
                ? "border-primary bg-gradient-card shadow-gold scale-105"
                : "border-border/50 bg-gradient-card hover:border-gold"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-primary-foreground">
                MOST POPULAR
              </div>
            )}
            <h3 className="font-heading text-xl font-bold text-foreground">{tier.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold text-gradient-gold">{tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={tier.highlighted ? "hero" : "outline-gold"} className="mt-8 w-full" asChild>
              <Link to="/register">{tier.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
