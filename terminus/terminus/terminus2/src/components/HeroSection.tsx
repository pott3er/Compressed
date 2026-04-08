import { Button } from "@/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
    {/* Background effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px]" />
    </div>

    <div className="container relative mx-auto px-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold bg-primary/5 px-4 py-1.5 text-sm text-primary">
          <Shield className="h-4 w-4" />
          <span>Powered by Solana • Secured by Cryptography</span>
        </div>

        <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          Your Digital Legacy,{" "}
          <span className="text-gradient-gold">Mathematically</span>{" "}
          Secured
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A decentralized inheritance protocol that ensures your crypto assets, passwords, and private documents 
          reach your loved ones — without lawyers, courts, or blind timers.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <Link to="/register">
              Create Your Vault
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline-gold" size="lg" asChild className="text-base px-8 py-6">
            <Link to="/claim">
              <Lock className="mr-2 h-5 w-5" />
              I'm a Beneficiary
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
          <div>
            <div className="font-heading text-3xl font-bold text-gradient-gold">$2.5T+</div>
            <div className="mt-1 text-sm text-muted-foreground">Crypto Market at Risk</div>
          </div>
          <div>
            <div className="font-heading text-3xl font-bold text-gradient-gold">20%</div>
            <div className="mt-1 text-sm text-muted-foreground">Bitcoin Lost Forever</div>
          </div>
          <div>
            <div className="font-heading text-3xl font-bold text-gradient-gold">30-Day</div>
            <div className="mt-1 text-sm text-muted-foreground">Failsafe Period</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
