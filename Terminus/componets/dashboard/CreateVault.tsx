"use client";

import { useState } from "react";
import { VaultUser } from "@/app/page";
import { Button, FormInput } from "@/components/ui";
import clsx from "clsx";

type Step = 1 | 2 | 3 | 4;

interface CreateVaultProps {
  onCreated: (user: VaultUser) => void;
}

export default function CreateVault({ onCreated }: CreateVaultProps) {
  const [step, setStep] = useState<Step>(1);

  // Step 1 – identity
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [confirm,  setConfirm]  = useState("");

  // Step 2 – beneficiary
  const [beneName,  setBeneName]  = useState("");
  const [beneEmail, setBeneEmail] = useState("");
  const [pin,       setPin]       = useState("");

  // Step 3 – delegates
  const [delegates, setDelegates] = useState(["", "", ""]);

  // Step 4 – plan selection
  const [plan, setPlan] = useState<"free" | "premium">("free");
  const [creating, setCreating] = useState(false);

  function updateDelegate(i: number, val: string) {
    const next = [...delegates];
    next[i] = val;
    setDelegates(next);
  }

  function handleFinish() {
    setCreating(true);
    setTimeout(() => onCreated({ name, email }), 1600);
  }

  const steps = [
    { n: 1, label: "Account"     },
    { n: 2, label: "Beneficiary" },
    { n: 3, label: "Delegates"   },
    { n: 4, label: "Plan"        },
  ];

  const passwordsMatch = password.length >= 8 && password === confirm;
  const step1Valid     = name.trim() && email.includes("@") && passwordsMatch;
  const step2Valid     = beneName.trim() && beneEmail.includes("@") && pin.length >= 4;
  const step3Valid     = delegates.filter(Boolean).length >= 1;

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[560px]">

        {/* Title */}
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            New Vault Setup
          </p>
          <h1 className="font-display text-5xl font-light text-cream mb-2">
            Create your <em className="italic text-gold-light">vault</em>
          </h1>
          <p className="text-[13px] text-muted">
            Your digital legacy, secured in four steps.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-medium transition-all duration-300",
                  step === s.n
                    ? "bg-gold text-ink shadow-[0_0_16px_rgba(201,169,110,0.35)]"
                    : step > s.n
                    ? "bg-[rgba(92,156,122,0.15)] text-[#5c9c7a] border border-[rgba(92,156,122,0.3)]"
                    : "bg-glass2 text-muted border border-line"
                )}>
                  {step > s.n ? "✓" : s.n}
                </div>
                <span className={clsx(
                  "font-mono text-[9px] tracking-[0.1em] uppercase transition-colors duration-300",
                  step === s.n ? "text-gold" : step > s.n ? "text-[#5c9c7a]" : "text-muted-2"
                )}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={clsx(
                  "w-16 h-px mx-1 mb-5 transition-colors duration-300",
                  step > s.n ? "bg-[rgba(92,156,122,0.4)]" : "bg-line"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-ink-2 border border-line rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          {/* Top accent */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <div className="px-10 py-9">

            {/* ── Step 1: Account ── */}
            {step === 1 && (
              <div className="animate-fade-up space-y-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Step 1 of 4</p>
                  <h2 className="font-display text-2xl font-normal text-cream mb-1">Your account</h2>
                  <p className="text-[13px] text-muted">This will be your vault owner identity on Terminus.</p>
                </div>

                <FormInput label="Full Name" placeholder="Amara Osei" value={name} onChange={setName} />
                <FormInput label="Email Address" type="email" placeholder="amara@example.com" value={email} onChange={setEmail} />
                <FormInput label="Password" type="password" placeholder="Min. 8 characters" value={password} onChange={setPassword} />
                <div>
                  <FormInput label="Confirm Password" type="password" placeholder="Re-enter password" value={confirm} onChange={setConfirm} />
                  {confirm && !passwordsMatch && (
                    <p className="font-mono text-[11px] text-[#c45c5c] mt-1.5">
                      {password.length < 8 ? "Password must be at least 8 characters" : "Passwords do not match"}
                    </p>
                  )}
                  {confirm && passwordsMatch && (
                    <p className="font-mono text-[11px] text-[#5c9c7a] mt-1.5">✓ Passwords match</p>
                  )}
                </div>

                <Button variant="primary" full onClick={() => setStep(2)} disabled={!step1Valid}>
                  Continue →
                </Button>
              </div>
            )}

            {/* ── Step 2: Beneficiary ── */}
            {step === 2 && (
              <div className="animate-fade-up space-y-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Step 2 of 4</p>
                  <h2 className="font-display text-2xl font-normal text-cream mb-1">Your beneficiary</h2>
                  <p className="text-[13px] text-muted">This person will inherit your vault. They will use their email and your shared PIN to claim it.</p>
                </div>

                <FormInput label="Beneficiary Full Name" placeholder="Nadia Osei" value={beneName} onChange={setBeneName} />
                <FormInput label="Beneficiary Email" type="email" placeholder="nadia@example.com" value={beneEmail} onChange={setBeneEmail} />

                <div>
                  <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-2 block">
                    Shared Secret PIN
                  </label>
                  <input
                    type="password"
                    placeholder="Min. 4 digits — share this in person"
                    value={pin}
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 8))}
                    className="w-full px-4 py-3 bg-ink border border-line2 rounded-lg text-cream font-mono text-base tracking-[0.3em] placeholder:text-muted-2 placeholder:font-sans placeholder:tracking-normal outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/5 transition-all"
                  />
                  <p className="font-mono text-[11px] text-muted-2 mt-1.5">
                    Share this PIN face-to-face. Never send it digitally.
                  </p>
                </div>

                <div className="flex gap-3 pt-1">
                  <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">← Back</Button>
                  <Button variant="primary" onClick={() => setStep(3)} disabled={!step2Valid} className="flex-[2]">
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 3: Delegates ── */}
            {step === 3 && (
              <div className="animate-fade-up space-y-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Step 3 of 4</p>
                  <h2 className="font-display text-2xl font-normal text-cream mb-1">Your delegates</h2>
                  <p className="text-[13px] text-muted leading-relaxed">
                    Delegates are trusted people (spouse, lawyer, friend) who verify the claim.
                    A majority must approve before assets are released.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-glass border border-line">
                  <p className="font-mono text-[11px] text-muted-2 leading-relaxed">
                    ℹ️ Delegates receive an email asking them to confirm when a claim is submitted. They do not have access to your assets.
                  </p>
                </div>

                {[0, 1, 2].map((i) => (
                  <div key={i}>
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-2 block">
                      Delegate {i + 1}{i === 0 ? " (required)" : " (optional)"}
                    </label>
                    <input
                      type="email"
                      placeholder={i === 0 ? "spouse@email.com" : i === 1 ? "lawyer@firm.com" : "friend@email.com"}
                      value={delegates[i]}
                      onChange={(e) => updateDelegate(i, e.target.value)}
                      className="w-full px-4 py-3 bg-ink border border-line2 rounded-lg text-cream text-sm font-sans placeholder:text-muted-2 outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/5 transition-all"
                    />
                  </div>
                ))}

                <div className="flex gap-3 pt-1">
                  <Button variant="ghost" onClick={() => setStep(2)} className="flex-1">← Back</Button>
                  <Button variant="primary" onClick={() => setStep(4)} disabled={!step3Valid} className="flex-[2]">
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 4: Plan ── */}
            {step === 4 && (
              <div className="animate-fade-up space-y-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Step 4 of 4</p>
                  <h2 className="font-display text-2xl font-normal text-cream mb-1">Choose your plan</h2>
                  <p className="text-[13px] text-muted">Start free and upgrade at any time.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Free */}
                  <button
                    onClick={() => setPlan("free")}
                    className={clsx(
                      "text-left p-5 rounded-xl border transition-all duration-200",
                      plan === "free"
                        ? "border-gold/40 bg-gold-dim"
                        : "border-line bg-glass hover:border-line2"
                    )}
                  >
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-2">Free</p>
                    <p className="font-display text-3xl font-light text-cream mb-0.5">$0</p>
                    <p className="font-mono text-[11px] text-muted mb-4">forever</p>
                    <ul className="font-mono text-[11px] text-muted space-y-1.5">
                      {[
                        ["✓", "1 beneficiary",          true],
                        ["✓", "Basic crypto vault",     true],
                        ["✓", "Text note (1 KB)",        true],
                        ["✗", "Document storage",       false],
                        ["✗", "Multiple delegates",     false],
                        ["✗", "Living Will / Coma mode",false],
                      ].map(([icon, label, active]) => (
                        <li key={String(label)} className={clsx("flex items-center gap-2", !active && "opacity-40")}>
                          <span className={active ? "text-[#5c9c7a]" : "text-muted"}>{icon}</span>
                          {label}
                        </li>
                      ))}
                    </ul>
                    {plan === "free" && (
                      <div className="mt-4 font-mono text-[10px] tracking-[0.1em] uppercase text-gold">✓ Selected</div>
                    )}
                  </button>

                  {/* Premium */}
                  <button
                    onClick={() => setPlan("premium")}
                    className={clsx(
                      "text-left p-5 rounded-xl border transition-all duration-200 relative overflow-hidden",
                      plan === "premium"
                        ? "border-gold/60 bg-gold-dim"
                        : "border-line bg-glass hover:border-gold/30"
                    )}
                  >
                    {/* Recommended badge */}
                    <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-gold text-ink font-medium">
                      Popular
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-2">Premium</p>
                    <p className="font-display text-3xl font-light text-cream mb-0.5">$9.99</p>
                    <p className="font-mono text-[11px] text-muted mb-4">per month</p>
                    <ul className="font-mono text-[11px] text-muted space-y-1.5">
                      {[
                        "✓ Everything in Free",
                        "✓ Encrypted PDF documents",
                        "✓ Up to 3 delegates (multi-sig)",
                        "✓ Living Will / Coma mode",
                        "✓ Medical drip to hospital",
                        "✓ Priority support",
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="text-[#5c9c7a]">✓</span>
                          {f.slice(2)}
                        </li>
                      ))}
                    </ul>
                    {plan === "premium" && (
                      <div className="mt-4 font-mono text-[10px] tracking-[0.1em] uppercase text-gold">✓ Selected</div>
                    )}
                  </button>
                </div>

                <p className="font-mono text-[11px] text-muted-2 text-center">
                  A 1% fee is applied only when assets are successfully transferred. You only pay when we deliver.
                </p>

                <div className="flex gap-3 pt-1">
                  <Button variant="ghost" onClick={() => setStep(3)} className="flex-1">← Back</Button>
                  <Button
                    variant="primary"
                    onClick={handleFinish}
                    disabled={creating}
                    className="flex-[2]"
                  >
                    {creating ? "Creating vault…" : `Create Vault →`}
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Security note */}
        <p className="text-center font-mono text-[11px] text-muted-2 mt-6">
          🔐 End-to-end encrypted · Solana Mainnet · KICA Compliant
        </p>
      </div>
    </div>
  );
}
