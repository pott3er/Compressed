import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import {
  Shield, Plus, Heart, AlertTriangle, Clock, Wallet,
  FileText, Users, Settings, Bell, LogOut, ChevronRight,
  Activity, Lock, Eye
} from "lucide-react";

type VaultStatus = "ACTIVE" | "CHALLENGE_PERIOD" | "INCAPACITATED" | "DECEASED";

interface MockVault {
  id: string;
  name: string;
  status: VaultStatus;
  balance: string;
  beneficiary: string;
  heartbeatDue: string;
  filesCount: number;
  delegatesCount: number;
  challengeDaysLeft?: number;
}

const mockVaults: MockVault[] = [
  {
    id: "1",
    name: "Family Legacy Vault",
    status: "ACTIVE",
    balance: "12.5 SOL",
    beneficiary: "Sarah Doe",
    heartbeatDue: "45 days",
    filesCount: 3,
    delegatesCount: 3,
  },
  {
    id: "2",
    name: "Business Continuity",
    status: "CHALLENGE_PERIOD",
    balance: "50,000 USDC",
    beneficiary: "James Doe",
    heartbeatDue: "Expired",
    filesCount: 7,
    delegatesCount: 3,
    challengeDaysLeft: 18,
  },
];

const statusConfig: Record<VaultStatus, { color: string; label: string }> = {
  ACTIVE: { color: "bg-success/20 text-success border-success/30", label: "Active" },
  CHALLENGE_PERIOD: { color: "bg-warning/20 text-warning border-warning/30", label: "Challenge Period" },
  INCAPACITATED: { color: "bg-info/20 text-info border-info/30", label: "Incapacitated" },
  DECEASED: { color: "bg-destructive/20 text-destructive border-destructive/30", label: "Deceased" },
};

const Dashboard = () => {
  const [selectedVault, setSelectedVault] = useState<string | null>(null);
  const activeVault = mockVaults.find((v) => v.id === selectedVault);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">TERMINUS</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">2</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-semibold text-secondary-foreground">JD</div>
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Vaults</span>
              <Lock className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 font-heading text-2xl font-bold text-foreground">{mockVaults.length}</div>
          </div>
          <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Value Locked</span>
              <Wallet className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 font-heading text-2xl font-bold text-gradient-gold">62,512.5</div>
          </div>
          <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Next Heartbeat</span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 font-heading text-2xl font-bold text-foreground">45 days</div>
          </div>
          <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Alerts</span>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </div>
            <div className="mt-2 font-heading text-2xl font-bold text-warning">1</div>
          </div>
        </div>

        {/* Alert banner for challenge period */}
        {mockVaults.some((v) => v.status === "CHALLENGE_PERIOD") && (
          <div className="mb-8 flex items-center justify-between rounded-xl border border-destructive/30 bg-destructive/5 p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <p className="font-semibold text-foreground">Challenge Period Active!</p>
                <p className="text-sm text-muted-foreground">A claim has been filed against "Business Continuity" vault. 18 days remaining.</p>
              </div>
            </div>
            <Button variant="panic" size="sm">
              <AlertTriangle className="mr-2 h-4 w-4" /> PANIC BUTTON
            </Button>
          </div>
        )}

        {/* Heartbeat check-in */}
        <div className="mb-8 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Heartbeat Check-In</p>
              <p className="text-sm text-muted-foreground">Confirm your proof of life to keep your vaults active.</p>
            </div>
          </div>
          <Button variant="hero" size="sm">
            <Heart className="mr-2 h-4 w-4" /> I'm Alive
          </Button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Your Vaults</h2>
          <Button variant="hero" asChild>
            <Link to="/create-vault"><Plus className="mr-2 h-4 w-4" /> New Vault</Link>
          </Button>
        </div>

        {/* Vault cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {mockVaults.map((vault) => (
            <div
              key={vault.id}
              className={`cursor-pointer rounded-xl border p-6 transition-all hover:shadow-gold ${
                vault.status === "CHALLENGE_PERIOD" ? "border-warning/30 bg-warning/5" : "border-border/50 bg-gradient-card hover:border-gold"
              }`}
              onClick={() => setSelectedVault(selectedVault === vault.id ? null : vault.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{vault.name}</h3>
                  <Badge className={`mt-1 ${statusConfig[vault.status].color}`}>{statusConfig[vault.status].label}</Badge>
                </div>
                <div className="text-right">
                  <div className="font-heading text-xl font-bold text-gradient-gold">{vault.balance}</div>
                  {vault.challengeDaysLeft && (
                    <div className="mt-1 text-sm font-semibold text-warning">{vault.challengeDaysLeft} days left</div>
                  )}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4 border-t border-border/50 pt-4 text-center text-sm">
                <div>
                  <Users className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                  <div className="text-muted-foreground">Beneficiary</div>
                  <div className="font-medium text-foreground">{vault.beneficiary}</div>
                </div>
                <div>
                  <Heart className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                  <div className="text-muted-foreground">Heartbeat</div>
                  <div className={`font-medium ${vault.heartbeatDue === "Expired" ? "text-destructive" : "text-foreground"}`}>{vault.heartbeatDue}</div>
                </div>
                <div>
                  <FileText className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                  <div className="text-muted-foreground">Files</div>
                  <div className="font-medium text-foreground">{vault.filesCount}</div>
                </div>
                <div>
                  <Users className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                  <div className="text-muted-foreground">Delegates</div>
                  <div className="font-medium text-foreground">{vault.delegatesCount}/3</div>
                </div>
              </div>

              {selectedVault === vault.id && (
                <div className="mt-4 flex gap-3 border-t border-border/50 pt-4">
                  <Button variant="outline-gold" size="sm" className="flex-1">
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="mr-2 h-4 w-4" /> Manage
                  </Button>
                  {vault.status === "CHALLENGE_PERIOD" && (
                    <Button variant="panic" size="sm" className="flex-1">
                      <AlertTriangle className="mr-2 h-4 w-4" /> PANIC
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
