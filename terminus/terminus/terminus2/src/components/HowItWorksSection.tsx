import { Lock, Brain, Timer, Gift } from "lucide-react";

const steps = [
  {
    icon: Lock,
    step: "01",
    title: "Setup & Encrypt",
    description: "Create your vault. Deposit crypto assets, upload encrypted documents (wills, passwords, letters), and designate your beneficiary, fiduciary, and delegates.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Verification",
    description: "If your heartbeat check-in stops, your fiduciary uploads medical or death proof. Our AI Lawyer runs OCR verification and coordinates delegate approval.",
  },
  {
    icon: Timer,
    step: "03",
    title: "30-Day Failsafe",
    description: "The smart contract enters a mandatory Challenge Period. You receive aggressive alerts and can hit the Panic Button to instantly abort if you're alive.",
  },
  {
    icon: Gift,
    step: "04",
    title: "Automated Execution",
    description: "Assets seamlessly transfer to your beneficiary. Private files dynamically decrypt using Lit Protocol. No wallets, no gas fees — just a simple login.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          How <span className="text-gradient-gold">Terminus</span> Works
        </h2>
        <p className="text-muted-foreground">
          Four phases. Zero complexity for your loved ones.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:block" />

        <div className="grid gap-12">
          {steps.map((step, i) => (
            <div key={step.step} className={`flex flex-col items-center gap-8 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="rounded-xl border border-border/50 bg-gradient-card p-8 transition-all duration-300 hover:border-gold hover:shadow-gold">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold">
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="font-heading text-sm font-semibold text-primary">PHASE {step.step}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              <div className="relative hidden h-12 w-12 items-center justify-center md:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-sm font-bold text-primary">
                  {step.step}
                </div>
              </div>
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
