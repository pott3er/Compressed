# Terminus — Frontend

Decentralized digital inheritance protocol UI built with **Next.js 14 (App Router)** and **TailwindCSS**.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS 3 |
| Language | TypeScript |
| Icons / Utils | Lucide React, clsx |
| Fonts | Cormorant Garamond · Instrument Sans · DM Mono |

## Project Structure

```
terminus/
├── app/
│   ├── globals.css        # Tailwind base + custom utility classes
│   ├── layout.tsx         # Root layout & metadata
│   └── page.tsx           # Client shell — screen state management
│
├── components/
│   ├── Navbar.tsx                      # Fixed nav with tab routing
│   └── screens/
│       ├── HomeScreen.tsx              # Landing / hero + features grid
│       ├── OwnerDashboard.tsx          # Vault management dashboard
│       └── BeneficiaryPortal.tsx       # 4-step claim flow
│
├── tailwind.config.ts     # Custom tokens: fonts, colors, animations
├── postcss.config.js
├── next.config.mjs
└── tsconfig.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Screens

### Overview (Landing)
- Hero with animated grid background and staggered reveals
- Three key protocol stats from the pitch deck
- Full 6-card feature grid

### Owner Vault Dashboard
- Live vault status with heartbeat progress bar
- Asset holdings (SOL, USDC, encrypted documents)
- Delegate confirmation states
- Beneficiary profile
- Heartbeat signing button (zero-gas proof of life)
- Panic Button with confirmation guard

### Beneficiary Claim Portal
A guided 4-step flow:
1. **Email login** — walletless entry
2. **Document upload** — drag-and-drop with $50 USDC stake warning
3. **AI verification** — live status indicators (OCR → delegate approval → ZK proof)
4. **PIN entry** — 6-digit shared secret with auto-advance inputs
5. **Success state** — transferred assets + decrypted document confirmation

## Extending

### Connect to Solana
Install `@solana/web3.js` and `@coral-xyz/anchor`, then replace the mock state in `OwnerDashboard` and `BeneficiaryPortal` with real contract calls.

### Auth (Walletless)
Drop in [Privy](https://privy.io) or [Web3Auth](https://web3auth.io) for email/passkey login with invisible wallet creation.

### Decryption
Wire `BeneficiaryPortal` success state to Lit Protocol SDK to trigger programmatic key release from the Solana vault state.
