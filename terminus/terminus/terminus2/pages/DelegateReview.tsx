import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import {
  Shield, CheckCircle2, XCircle, Clock, FileText, User
} from "lucide-react";

interface ReviewItem {
  id: string;
  vaultName: string;
  claimantName: string;
  documentType: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  aiConfidence: number;
}

const mockReviews: ReviewItem[] = [
  {
    id: "1",
    vaultName: "Business Continuity",
    claimantName: "James Doe",
    documentType: "Death Certificate",
    submittedAt: "2 hours ago",
    status: "pending",
    aiConfidence: 94,
  },
];

const DelegateReview = () => {
  const [reviews, setReviews] = useState(mockReviews);

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: action } : r)));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">TERMINUS</span>
          </Link>
          <Badge className="bg-accent/10 text-accent-foreground border-accent/30">Delegate Portal</Badge>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">Delegate Review</h1>
        <p className="mb-8 text-muted-foreground">
          You've been designated as a trusted delegate. Review and verify the following claim documents.
        </p>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-xl border border-border/50 bg-gradient-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{review.vaultName}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Claimant: {review.claimantName}</span>
                  </div>
                </div>
                <Badge className={
                  review.status === "pending" ? "bg-warning/20 text-warning border-warning/30" :
                  review.status === "approved" ? "bg-success/20 text-success border-success/30" :
                  "bg-destructive/20 text-destructive border-destructive/30"
                }>
                  {review.status === "pending" ? "Awaiting Review" : review.status === "approved" ? "Approved" : "Rejected"}
                </Badge>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-4 rounded-lg bg-background/50 p-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Document</div>
                  <div className="flex items-center gap-1 font-medium text-foreground"><FileText className="h-4 w-4 text-primary" /> {review.documentType}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Submitted</div>
                  <div className="flex items-center gap-1 font-medium text-foreground"><Clock className="h-4 w-4" /> {review.submittedAt}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">AI Confidence</div>
                  <div className="font-heading font-bold text-gradient-gold">{review.aiConfidence}%</div>
                </div>
              </div>

              <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm text-muted-foreground">
                <strong className="text-foreground">AI Analysis:</strong> Document layout matches official template. OCR extracted name, date, and cause. Stamps and signatures detected. Confidence: {review.aiConfidence}%.
              </div>

              {review.status === "pending" && (
                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1" onClick={() => handleAction(review.id, "approved")}>
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                  </Button>
                  <Button variant="destructive" className="flex-1" onClick={() => handleAction(review.id, "rejected")}>
                    <XCircle className="mr-2 h-4 w-4" /> Reject
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DelegateReview;
