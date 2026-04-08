"use client";
import { Screen } from "@/app/page";

const features = [
  {
    icon: "🔐",
    title: "Cryptographic Vault",
    desc: "Rust smart contracts on Solana hold your assets in mathematically unhackable escrow. No single point of failure, no third-party custody.",
  },
  {
    icon: "⚖️",
    title: "AI Verification",
    desc: "Context-aware AI reads death certificates via OCR and generates Zero-Knowledge proofs — so no private data ever touches the blockchain.",
  },
  {
    icon: "🛡️",
    title: "30-Day Failsafe",
    desc: "A mandatory challenge period with aggressive alerts ensures you can abort any false trigger with one click of the Panic Button.",
  },
  {
    icon: "💊",
    title: "Living Will",
    desc: "A separate Incapacitated state unlocks a monthly medical allowance to hospital wallets if you enter a coma — without liquidating your vault.",
  },
  {
    icon: "📧",
    title: "Walletless Access",
    desc: "Beneficiaries access inheritance via email and PIN. No seed phrases, no gas fees, no blockchain knowledge required.",
  },
  {
    icon: "🌍",
    title: "KICA Compliant",
    desc: "Structured as an Inter Vivos Trust to legally bypass probate courts. Built for Kenya's top-5 global crypto adoption; scalable worldwide.",
  },
];

const stats = [
  { n: "$2.5T", l: "Crypto Market" },
  { n: "20%", l: "Keys Lost Forever" },
  { n: "1%", l: "Execution Fee" },
];

interface Props {
  onNavigate: (s: Screen) => void;
}

export default function HomeScreen({ onNavigate }: Props) {
  return (
    <div className="pt-20">
      {/* ---- HERO ---- */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center
                          text-center px-12 py-20 overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 bg-grid-gold bg-grid pointer-events-none"
          style={{
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
          }}
        />
        {/* Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
                        bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_65%)] pointer-events-none" />

        <p className="relative font-mono-custom text-[10px] tracking-[0.3em] uppercase text-gold mb-6
                      opacity-0 animate-fade-up stagger-1">
          Decentralized Digital Inheritance Protocol
        </p>

        <h1 className="relative font-display text-[clamp(56px,8vw,96px)] font-light leading-none
                       tracking-tight text-cream mb-3 opacity-0 animate-fade-up stagger-2">
          Your legacy,<br />
          <em className="italic text-gold-2">immutably</em> secured
        </h1>

        <p className="relative font-display text-[clamp(18px,2.5vw,26px)] font-light text-muted mb-12
                      tracking-wide opacity-0 animate-fade-up stagger-3">
          Where cryptographic certainty meets human empathy.
        </p>

        <div className="relative flex gap-4 mb-20 opacity-0 animate-fade-up stagger-4">
          <button
            onClick={() => onNavigate("owner")}
            className="px-9 py-3.5 bg-gold text-ink font-sans text-[13px] font-medium
                       tracking-[0.06em] uppercase rounded-full transition-all duration-200
                       hover:bg-gold-2 hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(201,169,110,0.25)]"
          >
            Create Your Vault
          </button>
          <button
            onClick={() => onNavigate("beneficiary")}
            className="px-9 py-3.5 bg-transparent text-cream border border-line-2 font-sans text-[13px]
                       tracking-[0.06em] uppercase rounded-full transition-all duration-200
                       hover:border-gold-dim hover:text-gold-2"
          >
            Claim Inheritance
          </button>
        </div>

        {/* Stats */}
        <div className="relative flex items-center gap-16 opacity-0 animate-fade-up stagger-5">
          {stats.map((s, i) => (
            <div key={s.n} className="flex items-center gap-16">
              <div className="text-center">
                <span className="block font-display text-[36px] font-normal text-gold-2">{s.n}</span>
                <span className="font-mono-custom text-[11px] tracking-[0.12em] uppercase text-muted">{s.l}</span>
              </div>
              {i < stats.length - 1 && <div className="w-px h-10 bg-line self-center" />}
            </div>
          ))}
        </div>
      </section>

      {/* ---- FEATURES ---- */}
      <section className="px-12 py-28 max-w-6xl mx-auto">
        <p className="font-mono-custom text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Why Terminus</p>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-cream mb-16 max-w-lg leading-[1.15]">
          The smart vault with an <em className="italic text-gold-2">AI Lawyer</em>
        </h2>

        <div className="grid grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-ink-2 p-10 group relative overflow-hidden transition-colors duration-300 hover:bg-ink-3"
            >
              {/* top shimmer on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.3)] to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-11 h-11 flex items-center justify-center bg-glass border border-line-2 rounded-lg mb-6 text-lg">
                {f.icon}
              </div>
              <h3 className="font-display text-[20px] font-medium text-cream mb-3">{f.title}</h3>
              <p className="text-[13px] text-muted leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="px-12 py-10 border-t border-line flex items-center justify-between">
        <span className="font-display text-[16px] font-light tracking-[0.12em] uppercase text-muted">Terminus</span>
        <span className="font-mono-custom text-[11px] text-muted-2">Solana · Lit Protocol · Storacha · ZK-Proofs</span>
        <span className="font-mono-custom text-[11px] text-muted-2">Block Four — Nairobi, Kenya</span>
      </footer>
    </div>
  );
}
