import Navbar from "@/layout/navbar";
import Footer from "@/layout/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import CompetitorSection from "@/components/CompetitorSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <HowItWorksSection />
    <FeaturesSection />
    <CompetitorSection />
    <PricingSection />
    <SecuritySection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
