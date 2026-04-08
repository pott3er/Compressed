import { Check, X } from "lucide-react";

const competitors = [
  { name: "Traditional Probate", fees: "3-7%", speed: "6-18 months", walletless: false, aiVerification: false, failsafe: false, privacy: false },
  { name: "Sarcophagus", fees: "Variable", speed: "Blind timer", walletless: false, aiVerification: false, failsafe: false, privacy: true },
  { name: "Inheriti", fees: "One-time", speed: "Manual", walletless: false, aiVerification: false, failsafe: false, privacy: true },
  { name: "Terminus", fees: "1%", speed: "30 seconds", walletless: true, aiVerification: true, failsafe: true, privacy: true },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? <Check className="mx-auto h-5 w-5 text-primary" /> : <X className="mx-auto h-5 w-5 text-destructive/60" />;

const CompetitorSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Why <span className="text-gradient-gold">Terminus</span> Wins
        </h2>
        <p className="text-muted-foreground">Unmatched UX and context-aware security.</p>
      </div>

      <div className="mx-auto max-w-4xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="py-4 text-left font-heading text-foreground">Solution</th>
              <th className="py-4 text-center font-heading text-foreground">Fees</th>
              <th className="py-4 text-center font-heading text-foreground">Speed</th>
              <th className="py-4 text-center font-heading text-foreground">Walletless</th>
              <th className="py-4 text-center font-heading text-foreground">AI Verify</th>
              <th className="py-4 text-center font-heading text-foreground">Failsafe</th>
              <th className="py-4 text-center font-heading text-foreground">ZK Privacy</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr key={c.name} className={`border-b border-border/50 ${c.name === "Terminus" ? "bg-primary/5" : ""}`}>
                <td className={`py-4 font-semibold ${c.name === "Terminus" ? "text-gradient-gold" : "text-foreground"}`}>{c.name}</td>
                <td className="py-4 text-center text-muted-foreground">{c.fees}</td>
                <td className="py-4 text-center text-muted-foreground">{c.speed}</td>
                <td className="py-4"><Cell value={c.walletless} /></td>
                <td className="py-4"><Cell value={c.aiVerification} /></td>
                <td className="py-4"><Cell value={c.failsafe} /></td>
                <td className="py-4"><Cell value={c.privacy} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default CompetitorSection;
