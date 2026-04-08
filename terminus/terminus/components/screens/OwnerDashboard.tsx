"use client";
import { useState } from "react";
import clsx from "clsx";

const assets = [
  { symbol: "SOL", name: "Solana", addr: "Gkz7…4mVx", amount: "142.5 SOL", usd: "≈ $21,375", colorClass: "text-[#9945ff] bg-[rgba(153,69,255,0.1)] border-[rgba(153,69,255,0.2)]" },
  { symbol: "USDC", name: "USD Coin", addr: "Gkz7…4mVx", amount: "26,825 USDC", usd: "≈ $26,825", colorClass: "text-[#2775ca] bg-[rgba(39,117,202,0.1)] border-[rgba(39,117,202,0.2)]" },
  { symbol: "📄", name: "Will & Testament", addr: "IPFS · bafybeig…7zq", amount: "Encrypted", usd: "Lit Protocol", colorClass: "text-gold bg-gold-dim border-gold-dim", isDoc: true },
];

const delegates = [
  { initials: "K", name: "Kofi Mensah", role: "Family · Spouse", confirmed: true },
  { initials: "L", name: "Lena Adeyemi", role: "Legal · Advocate", confirmed: true },
  { initials: "?", name: "Invite pending", role: "3rd delegate required", confirmed: false },
];

const metrics = [
  { label: "Total Vault Value", value: "$48,200", sub: "+2.4% this month" },
  { label: "Assets Held", value: "3", sub: "2 crypto · 1 document" },
  { label: "Delegates Confirmed", value: "2 / 3", sub: "1 pending approval" },
  { label: "Execution Fee", value: "1%", sub: "~$482 at current value" },
];

export default function OwnerDashboard() {
  const [heartbeatDone, setHeartbeatDone] = useState(false);
  const [panicActive, setPanicActive] = useState(false);

  const handlePanic = () => {
    if (window.confirm("⚠️  Abort active claim and slash the claimant's stake?")) {
      setPanicActive(true);
      setTimeout(() => setPanicActive(false), 3000);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-12 py-10">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="font-display text-[36px] font-light text-cream mb-1">
              Welcome back, <em className="italic text-gold-2">Amara</em>
            </h1>
            <p className="font-mono-custom text-[12px] text-muted">
              Last heartbeat · 12 days ago · Next due in 79 days
            </p>
          </div>
          <span className="font-mono-custom text-[11px] text-muted bg-glass border border-line rounded-full px-4 py-2 tracking-wide">
            Vault #TRM-0041-KE · ACTIVE
          </span>
        </div>

        {/* STATUS CARD */}
        <div className="relative bg-ink-2 border border-line rounded-xl p-8 mb-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold via-gold-2 to-gold opacity-60" />
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Vault Status</p>
              <p className="font-display text-[22px] text-cream">Everything is secure</p>
            </div>
            <span className="flex items-center gap-2 px-4 py-1.5 bg-success-dim text-status-success
                             border border-success-dim rounded-full font-mono-custom text-[11px] tracking-widest uppercase">
              <span className="w-[5px] h-[5px] rounded-full bg-status-success animate-pulse-dot" />
              Active
            </span>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-mono-custom text-[12px] text-muted">Heartbeat window</span>
              <span className="font-mono-custom text-[12px] text-gold">79 days remaining</span>
            </div>
            <div className="h-1 bg-glass-2 rounded-full overflow-hidden">
              <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-gold to-gold-2 transition-all duration-1000" />
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((m) => (
            <div key={m.label}
                 className="bg-ink-2 border border-line rounded-xl p-6 transition-colors duration-200 hover:border-line-2">
              <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-muted mb-3">{m.label}</p>
              <p className="font-display text-[28px] font-normal text-cream mb-1">{m.value}</p>
              <p className="font-mono-custom text-[11px] text-muted">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-[1fr_380px] gap-6">
          {/* LEFT */}
          <div className="flex flex-col gap-5">

            {/* ASSETS */}
            <div className="bg-ink-2 border border-line rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-7 py-5 border-b border-line">
                <h2 className="font-display text-[18px] font-medium text-cream">Vault Assets</h2>
                <button className="font-mono-custom text-[11px] text-gold tracking-widest uppercase hover:text-gold-2 transition-colors">
                  + Add Asset
                </button>
              </div>
              {assets.map((a) => (
                <div key={a.name}
                     className="flex items-center gap-4 px-7 py-4 border-b border-line last:border-0
                                hover:bg-glass transition-colors duration-200">
                  <div className={clsx("w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-mono-custom font-medium border flex-shrink-0", a.colorClass)}>
                    {a.symbol}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] text-cream font-medium mb-0.5">{a.name}</p>
                    <p className="font-mono-custom text-[11px] text-muted">{a.addr}</p>
                  </div>
                  <div className="text-right">
                    <p className={clsx("font-mono-custom text-[13px] mb-0.5", a.isDoc ? "text-status-success text-[11px]" : "text-cream")}>{a.amount}</p>
                    <p className="font-mono-custom text-[11px] text-muted">{a.usd}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* HEARTBEAT CTA */}
            <div className="flex items-center gap-4 px-7 py-5 bg-gold-glow border border-gold-dim rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-dim text-[18px] animate-heartbeat flex-shrink-0">
                ♥
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-cream font-medium mb-0.5">Confirm your heartbeat</p>
                <p className="text-[12px] text-muted">Next check-in due in 79 days. Sign a zero-gas proof of life.</p>
              </div>
              <button
                onClick={() => setHeartbeatDone(true)}
                disabled={heartbeatDone}
                className={clsx(
                  "flex-shrink-0 px-5 py-2.5 border rounded-lg font-mono-custom text-[11px] tracking-widest uppercase transition-all duration-300 whitespace-nowrap",
                  heartbeatDone
                    ? "bg-success-dim text-status-success border-success-dim cursor-default"
                    : "bg-gold-dim text-gold-2 border-gold-dim hover:bg-[rgba(201,169,110,0.22)]"
                )}
              >
                {heartbeatDone ? "✓ Signed" : "Sign Heartbeat"}
              </button>
            </div>

            {/* PANIC */}
            <div className="flex items-center justify-between gap-6 px-7 py-6
                            bg-[rgba(196,92,92,0.05)] border border-[rgba(196,92,92,0.15)] rounded-xl">
              <div>
                <p className="text-[14px] text-cream font-medium mb-1">Emergency Override</p>
                <p className="text-[12px] text-muted leading-relaxed max-w-md">
                  If a claim was triggered in error, use the Panic Button to instantly abort
                  and slash the fraudulent stake.
                </p>
              </div>
              <button
                onClick={handlePanic}
                className={clsx(
                  "flex-shrink-0 px-7 py-3.5 border rounded-lg font-mono-custom text-[11px] tracking-widest uppercase transition-all duration-200 whitespace-nowrap",
                  panicActive
                    ? "bg-status-danger text-white border-status-danger shadow-[0_0_24px_rgba(196,92,92,0.4)]"
                    : "bg-transparent text-status-danger border-status-danger hover:bg-status-danger hover:text-white hover:shadow-[0_0_24px_rgba(196,92,92,0.3)]"
                )}
              >
                ⚡ Panic Button
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            {/* BENEFICIARY */}
            <div className="bg-ink-2 border border-line rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-7 py-5 border-b border-line">
                <h2 className="font-display text-[18px] font-medium text-cream">Beneficiary</h2>
                <button className="font-mono-custom text-[11px] text-gold tracking-widest uppercase hover:text-gold-2 transition-colors">Edit</button>
              </div>
              <div className="px-7 py-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-ink-4 border border-line-2 flex items-center justify-center
                                  font-display text-[17px] font-medium text-gold flex-shrink-0">
                    N
                  </div>
                  <div>
                    <p className="text-[14px] text-cream mb-0.5">Nadia Osei</p>
                    <p className="font-mono-custom text-[11px] text-muted">nadia.osei@gmail.com</p>
                  </div>
                </div>
                {[["Shared PIN", "••••••"], ["Wallet", "Auto-created"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3 border-t border-line">
                    <span className="font-mono-custom text-[11px] tracking-[0.08em] uppercase text-muted">{k}</span>
                    <span className="font-mono-custom text-[11px] text-cream">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DELEGATES */}
            <div className="bg-ink-2 border border-line rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-7 py-5 border-b border-line">
                <h2 className="font-display text-[18px] font-medium text-cream">Delegates</h2>
                <button className="font-mono-custom text-[11px] text-gold tracking-widest uppercase hover:text-gold-2 transition-colors">+ Invite</button>
              </div>
              {delegates.map((d) => (
                <div key={d.name} className="flex items-center gap-3.5 px-7 py-4 border-b border-line last:border-0">
                  <div className={clsx(
                    "w-9 h-9 rounded-full border flex items-center justify-center font-display text-[13px] font-medium flex-shrink-0",
                    d.confirmed ? "bg-ink-4 border-line-2 text-gold" : "bg-ink-3 border-line text-muted"
                  )}>
                    {d.initials}
                  </div>
                  <div className="flex-1">
                    <p className={clsx("text-[13px] mb-0.5", d.confirmed ? "text-cream" : "text-muted")}>{d.name}</p>
                    <p className="font-mono-custom text-[11px] text-muted">{d.role}</p>
                  </div>
                  <span className={clsx(
                    "font-mono-custom text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full",
                    d.confirmed
                      ? "bg-success-dim text-status-success"
                      : "bg-warn-dim text-status-warn"
                  )}>
                    {d.confirmed ? "Confirmed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>

            {/* PLAN */}
            <div className="bg-ink-2 border border-line rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-7 py-5 border-b border-line">
                <h2 className="font-display text-[18px] font-medium text-cream">Subscription</h2>
              </div>
              <div className="px-7 py-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[13px] text-cream mb-0.5">Premium Plan</p>
                    <p className="font-mono-custom text-[11px] text-muted">$9.99 / month</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-success-dim text-status-success
                                   border border-success-dim rounded-full font-mono-custom text-[10px] tracking-widest uppercase">
                    <span className="w-[5px] h-[5px] rounded-full bg-status-success animate-pulse-dot" /> Active
                  </span>
                </div>
                <div className="text-[12px] text-muted leading-[1.9] space-y-0.5">
                  {["Decentralized document storage", "Multiple delegates (multi-sig)", "Living Will / Medical Drip", "Priority support"].map(f => (
                    <p key={f}><span className="text-status-success mr-2">✓</span>{f}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
