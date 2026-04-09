"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/home/HomePage";
import CreateVault from "@/components/dashboard/CreateVault";
import OwnerDashboard from "@/components/dashboard/OwnerDashboard";
import BeneficiaryPortal from "@/components/portal/BeneficiaryPortal";

export type Tab = "home" | "owner" | "beneficiary";

export interface VaultUser {
  name: string;
  email: string;
}

export default function Page() {
  const [tab, setTab]           = useState<Tab>("home");
  const [vaultUser, setVaultUser] = useState<VaultUser | null>(null);
  // When navigating to "owner", show create-vault form first if no user
  const [creating, setCreating] = useState(false);

  function handleNavigate(t: Tab) {
    if (t === "owner" && !vaultUser) {
      setCreating(true);
      setTab("owner");
    } else {
      setCreating(false);
      setTab(t);
    }
  }

  function handleVaultCreated(user: VaultUser) {
    setVaultUser(user);
    setCreating(false);
  }

  return (
    <main className="min-h-screen">
      <Navbar activeTab={tab} onTabChange={handleNavigate} />
      <div className="pt-[72px]">
        {tab === "home" && <HomePage onNavigate={handleNavigate} />}

        {tab === "owner" && creating && (
          <CreateVault onCreated={handleVaultCreated} />
        )}
        {tab === "owner" && !creating && vaultUser && (
          <OwnerDashboard user={vaultUser} />
        )}

        {tab === "beneficiary" && <BeneficiaryPortal />}
      </div>
    </main>
  );
}
