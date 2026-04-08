"use client";
import { Screen } from "@/app/page";
import clsx from "clsx";

const tabs: { id: Screen; label: string }[] = [
  { id: "home", label: "Overview" },
  { id: "owner", label: "Owner Vault" },
  { id: "beneficiary", label: "Claim Portal" },
];

interface NavbarProps {
  active: Screen;
  onNavigate: (s: Screen) => void;
}

export default function Navbar({ active, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-12 py-5
                    bg-[rgba(11,12,16,0.88)] backdrop-blur-xl border-b border-line">
      {/* Logo */}
      <button
        onClick={() => onNavigate("home")}
        className="font-display text-xl tracking-[0.14em] uppercase text-gold-2 hover:opacity-80 transition-opacity"
      >
        Termin<span className="text-muted font-light">us</span>
      </button>

      {/* Tabs */}
      <div className="flex gap-1 bg-glass border border-line rounded-full p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onNavigate(t.id)}
            className={clsx(
              "px-5 py-2 rounded-full font-mono-custom text-[11px] tracking-[0.08em] uppercase transition-all duration-200",
              active === t.id
                ? "bg-gold-dim text-gold-2 border border-gold-dim"
                : "text-muted hover:text-cream"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Network status */}
      <div className="flex items-center gap-2 font-mono-custom text-[11px] text-muted tracking-wide">
        <span className="w-[6px] h-[6px] rounded-full bg-status-success shadow-[0_0_8px_#5c9c7a] animate-pulse-dot" />
        Solana Mainnet
      </div>
    </nav>
  );
}
