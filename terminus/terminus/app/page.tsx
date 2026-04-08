"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeScreen from "@/components/screens/HomeScreen";
import OwnerDashboard from "@/components/screens/OwnerDashboard";
import BeneficiaryPortal from "@/components/screens/BeneficiaryPortal";

export type Screen = "home" | "owner" | "beneficiary";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className="min-h-screen bg-ink">
      <Navbar active={screen} onNavigate={setScreen} />
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "owner" && <OwnerDashboard />}
      {screen === "beneficiary" && <BeneficiaryPortal />}
    </div>
  );
}
