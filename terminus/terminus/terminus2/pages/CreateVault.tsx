import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/ui/button";
import { Progress } from "@/ui/progress";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import {
  Shield, ArrowRight, ArrowLeft, Lock, Users, Upload, Heart,
  CheckCircle2, Wallet, Mail, User, FileText, Clock
} from "lucide-react";
import Navbar from "@/layout/navbar";

const steps = ["Vault Details", "Beneficiary & Roles", "Assets & Files", "Heartbeat & Review"];

const CreateVault = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [vaultData, setVaultData] = useState({
    vaultName: "",
    beneficiaryName: "",
    beneficiaryEmail: "",
    beneficiaryPin: "",
    fiduciaryName: "",
    fiduciaryEmail: "",
    delegates: [{ name: "", email: "" }, { name: "", email: "" }, { name: "", email: "" }],
    depositAmount: "",
    heartbeatInterval: "3",
    notes: "",
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Lock className="h-5 w-5 text-primary" /> Vault Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-foreground">Vault Name</Label>
                  <Input className="mt-1.5 bg-background border-border" placeholder="e.g., Family Legacy Vault" value={vaultData.vaultName} onChange={(e) => setVaultData({ ...vaultData, vaultName: e.target.value })} />
                </div>
                <div>
                  <Label className="text-foreground">Description (optional)</Label>
                  <Textarea className="mt-1.5 bg-background border-border" placeholder="Notes about this vault..." value={vaultData.notes} onChange={(e) => setVaultData({ ...vaultData, notes: e.target.value })} />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <User className="h-5 w-5 text-primary" /> Beneficiary (For Death)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-foreground">Full Name</Label>
                  <Input className="mt-1.5 bg-background border-border" placeholder="Beneficiary name" value={vaultData.beneficiaryName} onChange={(e) => setVaultData({ ...vaultData, beneficiaryName: e.target.value })} />
                </div>
                <div>
                  <Label className="text-foreground">Email</Label>
                  <Input className="mt-1.5 bg-background border-border" type="email" placeholder="beneficiary@email.com" value={vaultData.beneficiaryEmail} onChange={(e) => setVaultData({ ...vaultData, beneficiaryEmail: e.target.value })} />
                </div>
              </div>
              <div className="mt-4">
                <Label className="text-foreground">Shared Secret PIN</Label>
                <Input className="mt-1.5 bg-background border-border" type="password" placeholder="A PIN only you and your beneficiary know" value={vaultData.beneficiaryPin} onChange={(e) => setVaultData({ ...vaultData, beneficiaryPin: e.target.value })} />
                <p className="mt-1 text-xs text-muted-foreground">This PIN will be required for your beneficiary to unlock the vault.</p>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Heart className="h-5 w-5 text-primary" /> Medical Fiduciary (For Incapacitation)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-foreground">Full Name</Label>
                  <Input className="mt-1.5 bg-background border-border" placeholder="Fiduciary name" value={vaultData.fiduciaryName} onChange={(e) => setVaultData({ ...vaultData, fiduciaryName: e.target.value })} />
                </div>
                <div>
                  <Label className="text-foreground">Email</Label>
                  <Input className="mt-1.5 bg-background border-border" type="email" placeholder="fiduciary@email.com" value={vaultData.fiduciaryEmail} onChange={(e) => setVaultData({ ...vaultData, fiduciaryEmail: e.target.value })} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Users className="h-5 w-5 text-primary" /> Delegates (Multi-Sig Verification)
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">Select 3 trusted people who will verify the claim. Majority approval required.</p>
              {vaultData.delegates.map((d, i) => (
                <div key={i} className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Delegate {i + 1} Name</Label>
                    <Input className="mt-1.5 bg-background border-border" placeholder={`Delegate ${i + 1}`} value={d.name} onChange={(e) => {
                      const delegates = [...vaultData.delegates];
                      delegates[i] = { ...delegates[i], name: e.target.value };
                      setVaultData({ ...vaultData, delegates });
                    }} />
                  </div>
                  <div>
                    <Label className="text-foreground">Email</Label>
                    <Input className="mt-1.5 bg-background border-border" type="email" placeholder={`delegate${i + 1}@email.com`} value={d.email} onChange={(e) => {
                      const delegates = [...vaultData.delegates];
                      delegates[i] = { ...delegates[i], email: e.target.value };
                      setVaultData({ ...vaultData, delegates });
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Wallet className="h-5 w-5 text-primary" /> Crypto Assets
              </h3>
              <div>
                <Label className="text-foreground">Deposit Amount (SOL / USDC)</Label>
                <Input className="mt-1.5 bg-background border-border" type="number" placeholder="0.00" value={vaultData.depositAmount} onChange={(e) => setVaultData({ ...vaultData, depositAmount: e.target.value })} />
                <p className="mt-1 text-xs text-muted-foreground">Assets will be held in escrow by the Terminus smart contract on Solana.</p>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <FileText className="h-5 w-5 text-primary" /> Encrypted Documents
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">Upload private documents (wills, passwords, letters). They will be encrypted with Lit Protocol and stored on IPFS.</p>
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background/50 p-12 text-center transition-colors hover:border-primary/50">
                <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">Drag & drop files here</p>
                <p className="mt-1 text-xs text-muted-foreground">PDF, TXT, DOC up to 50MB each</p>
                <Button variant="outline-gold" className="mt-4" size="sm">Browse Files</Button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Clock className="h-5 w-5 text-primary" /> Heartbeat Interval
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">How often should we check if you're alive? You'll receive a simple email or in-app notification to confirm.</p>
              <div className="grid grid-cols-3 gap-3">
                {["1", "3", "6"].map((m) => (
                  <button
                    key={m}
                    className={`rounded-lg border p-4 text-center transition-all ${vaultData.heartbeatInterval === m ? "border-primary bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:border-primary/50"}`}
                    onClick={() => setVaultData({ ...vaultData, heartbeatInterval: m })}
                  >
                    <div className="font-heading text-2xl font-bold">{m}</div>
                    <div className="text-xs">{Number(m) === 1 ? "Month" : "Months"}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Review Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Vault Name</span><span className="text-foreground">{vaultData.vaultName || "—"}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Beneficiary</span><span className="text-foreground">{vaultData.beneficiaryName || "—"}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Fiduciary</span><span className="text-foreground">{vaultData.fiduciaryName || "—"}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Delegates</span><span className="text-foreground">{vaultData.delegates.filter((d) => d.name).length} of 3</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Deposit</span><span className="text-foreground">{vaultData.depositAmount ? `${vaultData.depositAmount} SOL` : "—"}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Heartbeat</span><span className="text-foreground">Every {vaultData.heartbeatInterval} month(s)</span></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 pb-12 pt-24">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground">Create Your Vault</h1>
          <p className="mt-2 text-muted-foreground">Secure your digital legacy step by step.</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className={`flex items-center gap-2 text-sm ${i <= currentStep ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${i <= currentStep ? "bg-gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < currentStep ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span className="hidden md:inline">{s}</span>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-1" />
        </div>

        {renderStep()}

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button variant="hero" onClick={() => setCurrentStep(currentStep + 1)}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="hero">
              <Shield className="mr-2 h-4 w-4" /> Deploy Vault
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateVault;
