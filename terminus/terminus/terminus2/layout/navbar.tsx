import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">TERMINUS</span>
        </Link>

        {isLanding && (
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            <a href="#security" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Security</a>
          </div>
        )}

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background p-4 md:hidden">
          {isLanding && (
            <div className="mb-4 flex flex-col gap-3">
              <a href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>How It Works</a>
              <a href="#features" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#pricing" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Pricing</a>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Button variant="ghost" asChild className="w-full">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="hero" asChild className="w-full">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
