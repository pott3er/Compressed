"use client";

import { useState } from "react";
import { Badge, Button, Card, CardHeader, ProgressBar } from "@/components/ui";

const assets = [
  { symbol: "SOL",  name: "Solana",    addr: "Gkz7…4mVx", amount: "142.5 SOL",    usd: "≈ $21,375", color: "#9945ff" },
  { symbol: "USDC", name: "USD Coin",  addr: "Gkz7…4mVx", amount: "26,825 USDC",  usd: "≈ $26,825", color: "#2775ca" },
  { symbol: "📄",   name: "Will & Testament", addr: "IPFS · bafybeig…7zq", amount: "Encrypted", usd: "Lit Protocol", color: "#c9a96e" },
];

const delegates = [
  { initials: "K", name: "Kofi Mensah",   role: "Family · Spouse",    status: "confirmed" },
  { initials: "L", name: "Lena Adeyemi",  role: "Legal · Advocate",   status: "confirmed" },
  { initials: "?", name: "Invite pending", role: "3rd delegate required", status: "pending" },
];

interface Props { user: { name: string; email: string }; }

export default function OwnerDashboard({ user }: Props) {
  const firstName = user.name.split(" ")[0] || "there";
  const [hbSigned, setHbSigned] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-12 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="font-display text-4xl font-light text-cream mb-1">
            Welcome back, <em className="italic text-gold-light">{firstName}</em>
          </h1>
          <p className="font-mono text-[12px] text-muted tracking-[0.06em]">
            Last heartbeat · 12 days ago · Next due in 79 days
          </p>
        </div>
        <div className="font-mono text-[11px] text-muted bg-glass border border-line px-4 py-2 rounded-full tracking-[0.08em]">
          Vault #TRM-0041-KE · ACTIVE
        </div>
      </div>

      {/* Status banner */}
      <div className="relative bg-ink-2 border border-line rounded-xl p-8 mb-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light opacity-60" />
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-1">Vault Status</p>
            <p className="font-display text-2xl font-light text-cream">Everything is secure</p>
          </div>
          <Badge variant="success">Active</Badge>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-mono text-[12px] text-muted tracking-[0.06em]">Heartbeat window</span>
            <span className="font-mono text-[12px] text-gold">79 days remaining</span>
          </div>
          <ProgressBar value={73} />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Vault Value", value: "$48,200",   sub: "+2.4% this month" },
          { label: "Assets Held",       value: "3",          sub: "2 crypto · 1 document" },
          { label: "Delegates",         value: "2 / 3",      sub: "1 pending approval" },
          { label: "Execution Fee",     value: "1%",         sub: "~$482 at current value" },
        ].map((m) => (
          <div key={m.label} className="bg-ink-2 border border-line rounded-xl p-6 hover:border-line2 transition-colors">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">{m.label}</p>
            <p className="font-display text-3xl font-light text-cream mb-1">{m.value}</p>
            <p className="font-mono text-[11px] text-muted">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-[1fr_380px] gap-6">
        {/* Left */}
        <div className="flex flex-col gap-5">
          {/* Assets */}
          <Card>
            <CardHeader title="Vault Assets" action="+ Add Asset" />
            {assets.map((a) => (
              <div key={a.name} className="flex items-center gap-4 px-7 py-4 border-b border-line last:border-0 hover:bg-glass transition-colors">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] font-medium flex-shrink-0"
                  style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}33` }}
                >
                  {a.symbol.length <= 4 ? a.symbol : a.symbol}
                </div>
                <div className="flex-1">
                  <p className="text-[13px] text-cream font-medium mb-0.5">{a.name}</p>
                  <p className="font-mono text-[11px] text-muted">{a.addr}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[13px] text-cream mb-0.5">{a.amount}</p>
                  <p className="font-mono text-[11px] text-muted">{a.usd}</p>
                </div>
              </div>
            ))}
          </Card>

          {/* Heartbeat CTA */}
          <div className="flex items-center gap-4 p-5 rounded-xl border"
            style={{ background: "var(--gold-glow)", borderColor: "rgba(201,169,110,0.15)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 animate-heartbeat"
              style={{ background: "var(--gold-dim)" }}>
              ♥
            </div>
            <div className="flex-1">
              <p className="text-[13px] text-cream font-medium mb-0.5">Confirm your heartbeat</p>
              <p className="text-[12px] text-muted">Your next check-in is due in 79 days. Sign a zero-gas proof of life.</p>
            </div>
            <Button
              variant="gold-outline"
              onClick={() => setHbSigned(true)}
              disabled={hbSigned}
            >
              {hbSigned ? "✓ Signed" : "Sign Heartbeat"}
            </Button>
          </div>

          {/* Panic Zone */}
          <div className="flex items-center justify-between gap-6 p-7 rounded-xl"
            style={{ background: "rgba(196,92,92,0.05)", border: "1px solid rgba(196,92,92,0.15)" }}>
            <div>
              <p className="text-[14px] text-cream font-medium mb-1">Emergency Override</p>
              <p className="text-[12px] text-muted leading-relaxed">
                If an inheritance claim has been triggered in error, use the Panic Button to instantly abort and slash the fraudulent stake.
              </p>
            </div>
            <Button variant="danger" className="flex-shrink-0">
              ⚡ Panic Button
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          {/* Beneficiary */}
          <Card>
            <CardHeader title="Beneficiary" action="Edit" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-ink-4 border border-line2 flex items-center justify-center font-display text-base font-medium text-gold flex-shrink-0">
                  N
                </div>
                <div>
                  <p className="text-[14px] text-cream mb-0.5">Nadia Osei</p>
                  <p className="font-mono text-[11px] text-muted">nadia.osei@gmail.com</p>
                </div>
              </div>
              {[
                { k: "Shared PIN",    v: "••••••" },
                { k: "Wallet",        v: "Auto-created" },
                { k: "Claim type",    v: "Death / Medical" },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between py-3 border-t border-line">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{k}</span>
                  <span className="font-mono text-[11px] text-cream">{v}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Delegates */}
          <Card>
            <CardHeader title="Delegates" action="+ Invite" />
            {delegates.map((d) => (
              <div key={d.name} className="flex items-center gap-3 px-7 py-4 border-b border-line last:border-0">
                <div className={`w-9 h-9 rounded-full border border-line2 flex items-center justify-center flex-shrink-0 font-display font-medium text-sm ${d.status === "pending" ? "text-muted bg-ink-4" : "text-gold bg-ink-4"}`}>
                  {d.initials}
                </div>
                <div className="flex-1">
                  <p className={`text-[13px] mb-0.5 ${d.status === "pending" ? "text-muted" : "text-cream"}`}>{d.name}</p>
                  <p className="font-mono text-[11px] text-muted">{d.role}</p>
                </div>
                <Badge variant={d.status === "confirmed" ? "success" : "warning"}>
                  {d.status}
                </Badge>
              </div>
            ))}
          </Card>

          {/* Plan comparison */}
          <Card>
            <CardHeader title="Subscription" />
            <div className="p-5 space-y-3">
              {/* Free tier */}
              <div className="rounded-xl border border-line bg-glass p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-0.5">Free Plan</p>
                    <p className="font-display text-xl font-light text-cream">$0 <span className="font-mono text-[11px] text-muted font-normal">/ month</span></p>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full border border-line2 text-muted">Current</span>
                </div>
                <ul className="font-mono text-[11px] text-muted space-y-1">
                  {[
                    [true,  "1 beneficiary"],
                    [true,  "Basic crypto vault"],
                    [true,  "Text note (1 KB)"],
                    [false, "Document storage"],
                    [false, "Multiple delegates"],
                    [false, "Living Will / Coma mode"],
                  ].map(([ok, label]) => (
                    <li key={String(label)} className={`flex items-center gap-2 ${!ok ? "opacity-35" : ""}`}>
                      <span className={ok ? "text-[#5c9c7a]" : "text-muted"}>{ok ? "✓" : "✗"}</span>
                      {String(label)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium tier */}
              <div className="relative rounded-xl border border-gold/30 p-4 overflow-hidden"
                style={{ background: "var(--gold-glow)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-gold text-ink font-medium">
                  Upgrade
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-gold mb-0.5">Premium Plan</p>
                    <p className="font-display text-xl font-light text-cream">$9.99 <span className="font-mono text-[11px] text-muted font-normal">/ month</span></p>
                  </div>
                </div>
                <ul className="font-mono text-[11px] text-muted space-y-1 mb-4">
                  {[
                    "Everything in Free",
                    "Encrypted PDF documents",
                    "Up to 3 delegates (multi-sig)",
                    "Living Will / Coma mode",
                    "Medical drip to hospital wallet",
                    "Priority support",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-[#5c9c7a]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 rounded-lg font-mono text-[11px] tracking-[0.1em] uppercase text-ink font-medium bg-gold hover:bg-gold-light transition-colors">
                  Upgrade to Premium →
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
