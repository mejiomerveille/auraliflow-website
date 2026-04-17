import { useState, useMemo, useEffect } from "react";
import { Search, MapPin, Phone, Star, Filter, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltIn, blurIn, staggerContainer, staggerItem, cardHover3D } from "@/lib/animations";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { BusinessHero } from "@/components/Business/BusinessHero";
import { MarqueeStrip } from "@/components/Business/MarqueeStrip";
import { CtaFooter } from "@/components/Business/CtaFooter";
import { BusinessGallery } from "@/components/Business/BusinessGallery";


const Business = () => {
    const [query, setQuery] = useState("");
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      document.title = "Business · Aurali Flow — Boutiques propulsées par notre plateforme";
      const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", "Découvrez les boutiques qui gèrent stock, ventes et vitrine avec Aurali Flow.");
      document.head.appendChild(meta);
    }, []);

  return (
        <main className="min-h-screen bg-background">
          <BusinessHero query={query} onQueryChange={setQuery} total={total} />
          <BusinessGallery query={query} onTotal={setTotal} />
          <MarqueeStrip />
        </main>
  );
};

export default Business;
