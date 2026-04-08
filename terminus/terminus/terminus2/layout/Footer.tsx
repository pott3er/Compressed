import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-gold">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">TERMINUS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Decentralized digital inheritance. Where immutable cryptography meets human empathy.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Product</h4>
          <div className="flex flex-col gap-2">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/compliance" className="text-sm text-muted-foreground hover:text-foreground">Compliance</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Support</h4>
          <div className="flex flex-col gap-2">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link>
            <a href="mailto:support@terminus.xyz" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Terminus Protocol. All rights reserved. Built on Solana.
      </div>
    </div>
  </footer>
);

export default Footer;
