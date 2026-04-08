import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Badge } from "@/ui/badge";
import {
  Shield, Upload, FileText, Lock, ArrowRight, CheckCircle2,
  Clock, AlertTriangle, Mail, Key, Wallet
} from "lucide-react";

type ClaimStep = "login" | "upload" | "staking" | "status" | "unlock";

const BeneficiaryClaim = () => {
  const [step, setStep] = useState<ClaimStep>("login");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const renderStep = () => {
    switch (step) {
      case "login":
        return (
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Beneficiary Portal</h1>
              <p className="mt-2 text-muted-foreground">
                You've been designated as a beneficiary. Sign in to access your claim.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-gradient-card p-8">
              <div className="space-y-5">
                <div>
                  <Label className="text-foreground">Email Address</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input className="pl-10 bg-background border-border" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">No wallet needed. Just your email.</p>
                </div>

                <Button variant="hero" className="w-full" onClick={() => setStep("upload")}>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <Button variant="outline" className="w-full border-border">
                  <Key className="mr-2 h-4 w-4" /> Sign in with Passkey
                </Button>
              </div>
            </div>
          </div>
        );

      case "upload":
        return (
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Upload Proof Document</h2>
            <p className="mb-8 text-muted-foreground">
              Upload the official Death Certificate or Medical Certificate for verification by our AI system.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50 p-12 text-center transition-colors hover:border-primary/50">
                <Upload className="mb-3 h-12 w-12 text-muted-foreground" />
                <p className="font-medium text-foreground">Upload Death or Medical Certificate</p>
                <p className="mt-1 text-sm text-muted-foreground">PDF format, max 10MB</p>
                <Button variant="outline-gold" className="mt-4">Choose File</Button>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Shield className="h-4 w-4 text-primary" /> Privacy Guarantee
                </h4>
                <p className="text-xs text-muted-foreground">
                  Your document is processed using Zero-Knowledge proofs. No plaintext medical data is ever stored on blockchain or our servers. 
                  The AI verifies authenticity without retaining the document.
                </p>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep("login")}>Back</Button>
                <Button variant="hero" onClick={() => setStep("staking")}>
                  Submit for Verification <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        );

      case "staking":
        return (
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Anti-Fraud Stake</h2>
            <p className="mb-8 text-muted-foreground">
              To prevent fraudulent claims, a small stake of $50 USDC is required. This will be returned upon successful verification.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-border/50 bg-gradient-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Required Stake</span>
                  <span className="font-heading text-xl font-bold text-gradient-gold">$50 USDC</span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Returned in full upon successful claim verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                    <span>Slashed if the document is found to be forged</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep("upload")}>Back</Button>
                <Button variant="hero" onClick={() => setStep("status")}>
                  <Wallet className="mr-2 h-4 w-4" /> Stake & Submit
                </Button>
              </div>
            </div>
          </div>
        );

      case "status":
        return (
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Claim Status</h2>
            <p className="mb-8 text-muted-foreground">Your claim is being processed. Here's the current status.</p>

            <div className="space-y-4">
              {[
                { label: "Document Uploaded", status: "done", icon: FileText },
                { label: "AI Verification (OCR)", status: "done", icon: Shield },
                { label: "ZK Proof Generated", status: "done", icon: Lock },
                { label: "Delegate Approval (2/3)", status: "active", icon: CheckCircle2 },
                { label: "30-Day Challenge Period", status: "pending", icon: Clock },
                { label: "Assets Released", status: "pending", icon: Wallet },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-4 rounded-xl border p-4 ${
                  item.status === "done" ? "border-success/30 bg-success/5" :
                  item.status === "active" ? "border-primary/30 bg-primary/5" :
                  "border-border/50 bg-card/50"
                }`}>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    item.status === "done" ? "bg-success/20" :
                    item.status === "active" ? "bg-primary/20" :
                    "bg-secondary"
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.status === "done" ? "text-success" :
                      item.status === "active" ? "text-primary" :
                      "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <span className={`font-medium ${item.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                      {item.label}
                    </span>
                  </div>
                  <Badge className={
                    item.status === "done" ? "bg-success/20 text-success border-success/30" :
                    item.status === "active" ? "bg-primary/20 text-primary border-primary/30" :
                    "bg-secondary text-muted-foreground"
                  }>
                    {item.status === "done" ? "Complete" : item.status === "active" ? "In Progress" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>

            <Button variant="hero" className="mt-8 w-full" onClick={() => setStep("unlock")}>
              Continue to Unlock <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );

      case "unlock":
        return (
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-gold animate-float">
              <Lock className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Enter Secret PIN</h2>
            <p className="mb-8 text-muted-foreground">
              Enter the shared secret PIN that was agreed upon between you and the vault owner.
            </p>

            <div className="mx-auto max-w-xs space-y-6">
              <div>
                <Label className="text-foreground">Secret PIN</Label>
                <Input className="mt-1.5 bg-background border-border text-center text-2xl tracking-[0.5em]" type="password" maxLength={6} placeholder="••••••" value={pin} onChange={(e) => setPin(e.target.value)} />
              </div>

              <Button variant="hero" className="w-full" disabled={pin.length < 4}>
                <Lock className="mr-2 h-4 w-4" /> Unlock Vault
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">TERMINUS</span>
          </Link>
          <Badge className="bg-primary/10 text-primary border-primary/30">Beneficiary Portal</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Progress indicator */}
        <div className="mx-auto mb-12 flex max-w-lg items-center justify-center gap-2">
          {(["login", "upload", "staking", "status", "unlock"] as ClaimStep[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${
                (["login", "upload", "staking", "status", "unlock"] as ClaimStep[]).indexOf(step) >= i
                  ? "bg-primary" : "bg-secondary"
              }`} />
              {i < 4 && <div className={`h-px w-8 ${
                (["login", "upload", "staking", "status", "unlock"] as ClaimStep[]).indexOf(step) > i
                  ? "bg-primary" : "bg-secondary"
              }`} />}
            </div>
          ))}
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default BeneficiaryClaim;
