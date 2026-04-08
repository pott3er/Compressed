import { Shield, Brain, Heart, Lock, Fingerprint, Globe, AlertTriangle, FileKey } from "lucide-react";

const features = [
  { icon: Shield, title: "Smart Vault", description: "Solana-powered escrow holds crypto and encrypted files with mathematical certainty." },
  { icon: Brain, title: "AI Lawyer", description: "OCR-powered verification reads death certificates and coordinates delegate approval." },
  { icon: Heart, title: "Heartbeat Monitor", description: "Proof-of-life check-ins every X months. Zero-gas, zero-friction." },
  { icon: AlertTriangle, title: "Panic Button", description: "30-day challenge period with instant abort. False positives are impossible." },
  { icon: Fingerprint, title: "Walletless Access", description: "Beneficiaries login with email or passkey. No crypto knowledge required." },
  { icon: FileKey, title: "Dynamic Decryption", description: "Lit Protocol releases decryption keys only when the vault state changes." },
  { icon: Lock, title: "Zero-Knowledge Privacy", description: "ZK proofs verify documents without storing any plaintext PII on-chain." },
  { icon: Globe, title: "Legal Compliance", description: "Structured as an Inter Vivos Trust, KICA and KDPA/GDPR compliant." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Built for <span className="text-gradient-gold">Trust</span> & Empathy
        </h2>
        <p className="text-muted-foreground">
          Every feature designed to bridge absolute cryptographic security with the messy reality of human life.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl border border-border/50 bg-gradient-card p-6 transition-all duration-300 hover:border-gold hover:shadow-gold">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-gradient-gold">
              <f.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
