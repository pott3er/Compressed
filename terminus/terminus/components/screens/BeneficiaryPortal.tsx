"use client";
import { useState, useRef, KeyboardEvent } from "react";
import clsx from "clsx";

type Step = 0 | 1 | 2 | 3 | "success";

const verifySteps = [
  { label: "Document received", sub: "SHA-256 fingerprint stored on Solana", state: "done" },
  { label: "OCR analysis complete", sub: "Confidence score: 96% · Layout valid", state: "done" },
  { label: "Awaiting delegate approval", sub: "2 of 3 delegates must confirm", state: "loading" },
  { label: "ZK proof generation", sub: "Pending delegate threshold", state: "pending" },
];

export default function BeneficiaryPortal() {
  const [step, setStep] = useState<Step>(0);
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [claiming, setClaiming] = useState(false);
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handlePin = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...pin];
    next[i] = val;
    setPin(next);
    if (val && i < 5) pinRefs.current[i + 1]?.focus();
  };

  const handlePinKey = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !pin[i] && i > 0) pinRefs.current[i - 1]?.focus();
  };

  const handleClaim = () => {
    setClaiming(true);
    setTimeout(() => { setClaiming(false); setStep("success"); }, 1800);
  };

  const stepNum = step === "success" ? 4 : (step as number);

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[500px] bg-ink-2 border border-line rounded-2xl overflow-hidden
                      shadow-[0_40px_80px_rgba(0,0,0,0.6)]">

        {/* PORTAL HEADER */}
        <div className="relative px-11 pt-10 pb-8 border-b border-line bg-ink-3 text-center overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.3)] to-transparent" />
          <div className="w-16 h-16 rounded-full bg-gold-dim border border-gold-dim flex items-center justify-center
                          mx-auto mb-5 text-[28px]">
            ⚖️
          </div>
          <h1 className="font-display text-[28px] font-light text-cream mb-1">Inheritance Claim</h1>
          <p className="text-[13px] text-muted">Terminus · Secure Beneficiary Portal</p>

          {/* Step dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={clsx(
                  "rounded-full transition-all duration-300 h-[6px]",
                  i < stepNum
                    ? "bg-status-success w-[6px]"
                    : i === stepNum
                    ? "bg-gold w-5"
                    : "bg-line-2 w-[6px]"
                )}
              />
            ))}
          </div>
        </div>

        {/* PORTAL BODY */}
        <div className="px-11 py-9">

          {/* STEP 0: EMAIL */}
          {step === 0 && (
            <div className="animate-fade-up">
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Step 1 of 4</p>
              <h2 className="font-display text-[22px] font-normal text-cream mb-2">Identify yourself</h2>
              <p className="text-[13px] text-muted mb-7 leading-relaxed">
                Enter the email address the vault owner registered for you. No crypto wallet needed.
              </p>
              <div className="mb-5">
                <label className="block font-mono-custom text-[11px] tracking-[0.1em] uppercase text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-ink border border-line-2 rounded-lg text-cream text-[14px]
                             placeholder-muted-2 outline-none transition-all duration-200
                             focus:border-gold-dim focus:shadow-[0_0_0_3px_rgba(201,169,110,0.06)]"
                />
              </div>
              <BtnFull onClick={() => setStep(1)} disabled={!email}>Continue →</BtnFull>
            </div>
          )}

          {/* STEP 1: UPLOAD */}
          {step === 1 && (
            <div className="animate-fade-up">
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Step 2 of 4</p>
              <h2 className="font-display text-[22px] font-normal text-cream mb-2">Upload documentation</h2>
              <p className="text-[13px] text-muted mb-6 leading-relaxed">
                Upload an official death or medical certificate. Our AI will verify it automatically.
              </p>

              {/* Stake notice */}
              <div className="flex gap-3 p-4 bg-warn-dim border border-warn-dim rounded-lg mb-6">
                <span className="text-[15px] flex-shrink-0 mt-0.5">⚠️</span>
                <p className="text-[12px] text-muted leading-relaxed">
                  A refundable stake of{" "}
                  <strong className="text-status-warn font-medium">$50 USDC</strong>{" "}
                  is required to prevent fraud. Returned upon successful verification.
                  Forged documents result in stake forfeiture.
                </p>
              </div>

              {/* Drop zone */}
              <label className="block w-full p-8 bg-ink border border-dashed border-line-2 rounded-lg text-center
                                cursor-pointer transition-all duration-200 mb-6
                                hover:border-gold-dim hover:bg-gold-glow group">
                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="hidden"
                  onChange={e => setFile(e.target.files?.[0] ?? null)}
                />
                <span className="block text-[26px] mb-2.5">📋</span>
                {file ? (
                  <p className="text-[13px] text-gold-2 font-medium">{file.name}</p>
                ) : (
                  <>
                    <p className="text-[13px] text-muted group-hover:text-cream transition-colors">
                      Drop certificate here or click to browse
                    </p>
                    <p className="font-mono-custom text-[11px] text-muted-2 mt-1">PDF · JPG · PNG · Max 10MB</p>
                  </>
                )}
              </label>

              <BtnFull onClick={() => setStep(2)}>Submit for Verification →</BtnFull>
            </div>
          )}

          {/* STEP 2: VERIFICATION */}
          {step === 2 && (
            <div className="animate-fade-up">
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Step 3 of 4</p>
              <h2 className="font-display text-[22px] font-normal text-cream mb-2">AI verification</h2>
              <p className="text-[13px] text-muted mb-6 leading-relaxed">
                The Terminus AI Lawyer is verifying your document and notifying the delegates.
              </p>

              <div className="bg-ink border border-line rounded-lg mb-6 overflow-hidden">
                {verifySteps.map((vs, i) => (
                  <div key={vs.label} className={clsx("flex items-center gap-3 px-5 py-3.5", i < verifySteps.length - 1 && "border-b border-line")}>
                    <div className={clsx(
                      "w-6 h-6 rounded-full flex items-center justify-center text-[11px] flex-shrink-0",
                      vs.state === "done" ? "bg-success-dim text-status-success" :
                      vs.state === "loading" ? "bg-warn-dim text-status-warn animate-spin" :
                      "bg-glass-2 text-muted"
                    )}>
                      {vs.state === "done" ? "✓" : vs.state === "loading" ? "↻" : "◦"}
                    </div>
                    <div>
                      <p className="text-[12px] text-cream">{vs.label}</p>
                      <p className="font-mono-custom text-[11px] text-muted">{vs.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <BtnFull onClick={() => setStep(3)}>Check Status →</BtnFull>
            </div>
          )}

          {/* STEP 3: PIN */}
          {step === 3 && (
            <div className="animate-fade-up">
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Step 4 of 4</p>
              <h2 className="font-display text-[22px] font-normal text-cream mb-2">Enter your secret PIN</h2>
              <p className="text-[13px] text-muted mb-7 leading-relaxed">
                The 30-day challenge period has elapsed. Enter the PIN the vault owner shared with you
                to release your inheritance.
              </p>
              <div className="mb-7">
                <label className="block font-mono-custom text-[11px] tracking-[0.1em] uppercase text-muted mb-3">
                  Shared PIN
                </label>
                <div className="flex gap-2.5">
                  {pin.map((v, i) => (
                    <input
                      key={i}
                      ref={el => { pinRefs.current[i] = el; }}
                      type="password"
                      maxLength={1}
                      value={v}
                      onChange={e => handlePin(i, e.target.value)}
                      onKeyDown={e => handlePinKey(i, e)}
                      className="flex-1 py-3.5 bg-ink border border-line-2 rounded-lg text-cream
                                 font-mono-custom text-[20px] text-center outline-none
                                 transition-all duration-200
                                 focus:border-gold-dim focus:shadow-[0_0_0_3px_rgba(201,169,110,0.06)]"
                    />
                  ))}
                </div>
              </div>
              <BtnFull onClick={handleClaim} disabled={claiming || pin.some(p => !p)}>
                {claiming ? "Verifying on-chain…" : "Release Inheritance"}
              </BtnFull>
            </div>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <div className="text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-success-dim border-2 border-status-success
                              flex items-center justify-center mx-auto mb-5 text-[32px] animate-pop-in">
                ✓
              </div>
              <h2 className="font-display text-[26px] font-light text-cream mb-2">Inheritance Released</h2>
              <p className="text-[13px] text-muted leading-relaxed mb-6">
                Your assets have been transferred and private documents decrypted in your browser.
              </p>

              <div className="p-4 bg-success-dim border border-success-dim rounded-lg mb-3 text-left">
                <p className="font-mono-custom text-[10px] tracking-[0.12em] uppercase text-status-success mb-2">
                  Transferred to your wallet
                </p>
                <p className="font-mono-custom text-[13px] text-cream mb-1">142.5 SOL · 26,825 USDC</p>
                <p className="font-mono-custom text-[11px] text-muted">≈ $48,200 · Tx confirmed</p>
              </div>

              <div className="p-4 bg-gold-glow border border-gold-dim rounded-lg text-left">
                <p className="font-mono-custom text-[10px] tracking-[0.12em] uppercase text-gold mb-2">
                  Decrypted documents
                </p>
                <p className="text-[13px] text-cream">📄 Will &amp; Testament.pdf</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function BtnFull({ onClick, disabled, children }: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-full py-3.5 rounded-lg font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-200",
        disabled
          ? "bg-glass text-muted cursor-not-allowed"
          : "bg-gold text-ink hover:bg-gold-2 hover:shadow-[0_4px_24px_rgba(201,169,110,0.2)] cursor-pointer"
      )}
    >
      {children}
    </button>
  );
}
