import { Button } from "@/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gold bg-gradient-card p-12 text-center shadow-gold">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Secure Your Legacy <span className="text-gradient-gold">Today</span>
        </h2>
        <p className="mb-8 text-muted-foreground">
          Don't let your digital wealth become part of the $140 billion already lost forever. 
          Create your vault in minutes — your loved ones will thank you.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" asChild className="text-base px-8">
            <Link to="/register">
              Create Your Vault <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline-gold" size="lg" asChild className="text-base px-8">
            <Link to="/claim">Beneficiary Portal</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
