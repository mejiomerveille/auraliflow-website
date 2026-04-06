import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AppShowcase from "@/components/landing/AppShowcase";
import VideoDemo from "@/components/landing/VideoDemo";
import SocialProof from "@/components/landing/SocialProof";
import PricingSection from "@/components/landing/PricingSection";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AppShowcase />
    <VideoDemo />
    <SocialProof />
    <PricingSection />
    <DownloadCTA />
    <Footer />
  </div>
);

export default Index;
