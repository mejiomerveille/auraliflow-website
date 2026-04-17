import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ServicesSection from "@/components/landing/ServicesSection";
import BentoSection from "@/components/landing/BentoSection";
import AppShowcase from "@/components/landing/AppShowcase";
import VideoDemo from "@/components/landing/VideoDemo";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import SocialProof from "@/components/landing/SocialProof";
import PricingSection from "@/components/landing/PricingSection";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import ComparisonSection from "@/components/landing/ComparisonSection";
import FloatingStaircase from "@/components/landing/FloatingStaircase";
import FloatingCards from "@/components/landing/FloatingCards";




const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ServicesSection />
    {/* <BentoSection /> */}
    <AppShowcase />
    <FloatingCards/>
    {/* <FloatingStaircase/> */}
    {/* <VideoDemo /> */}
    <IntegrationsSection />
    <ComparisonSection/>
    <SocialProof />
    <PricingSection />
    <DownloadCTA />
    <Footer />
  </div>
);

export default Index;
