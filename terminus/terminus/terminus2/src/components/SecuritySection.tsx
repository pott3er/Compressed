import { ShieldCheck, Eye, Scale, Database } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Cryptoeconomic Anti-Forgery", description: "Claimants stake $50 USDC to upload a death certificate. Forged documents get the stake slashed. Game theory eliminates spam." },
  { icon: Eye, title: "Zero-Knowledge Proofs", description: "AI verifies documents using ZK proofs. No plaintext medical records or PII ever touch the blockchain or centralized servers." },
  { icon: Scale, title: "Legal Compliance", description: "Structured as a KICA-compliant Living Escrow (Inter Vivos Trust). Digital signatures comply with the Kenya Information and Communications Act." },
  { icon: Database, title: "Decentralized Storage", description: "Encrypted files stored on Storacha (IPFS) with Lit Protocol threshold cryptography. No single point of failure." },
];

const SecuritySection = () => (
  <section id="security" className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Enterprise-Grade <span className="text-gradient-gold">Security</span>
        </h2>
        <p className="text-muted-foreground">
          Built on Solana's high-throughput blockchain with zero-knowledge privacy at every layer.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 rounded-xl border border-border/50 bg-gradient-card p-6 transition-all hover:border-gold">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
