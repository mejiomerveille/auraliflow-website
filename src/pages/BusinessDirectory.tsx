import { useState, useMemo } from "react";
import { Search, MapPin, Phone, Star, Filter, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltIn, blurIn, staggerContainer, staggerItem, cardHover3D } from "@/lib/animations";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Business from "@/components/landing/Business";

interface Business {
  id: number;
  name: string;
  category: string;
  city: string;
  phone: string;
  rating: number;
  description: string;
  verified: boolean;
  emoji: string;
}

const businesses: Business[] = [
  { id: 1, name: "Boutique Mama Rose", category: "Alimentation", city: "Yaoundé", phone: "+237 6XX XXX 001", rating: 4.8, description: "Épicerie et produits frais au cœur de Yaoundé. Gestion complète avec Aurali Flow.", verified: true, emoji: "🛒" },
  { id: 2, name: "TechShop Douala", category: "Électronique", city: "Douala", phone: "+237 6XX XXX 002", rating: 4.5, description: "Vente d'accessoires et appareils électroniques. Multi-sites gérés via Aurali Flow.", verified: true, emoji: "📱" },
  { id: 3, name: "Fashion House Baf", category: "Mode", city: "Bafoussam", phone: "+237 6XX XXX 003", rating: 4.9, description: "Prêt-à-porter et accessoires mode. Suivi des arrivages automatisé.", verified: true, emoji: "👗" },
  { id: 4, name: "Grossiste Ndéré", category: "Alimentation", city: "Douala", phone: "+237 6XX XXX 004", rating: 4.3, description: "Vente en gros de produits alimentaires. Marges optimisées avec CMUP.", verified: false, emoji: "📦" },
  { id: 5, name: "PharmaCare Plus", category: "Pharmacie", city: "Yaoundé", phone: "+237 6XX XXX 005", rating: 4.7, description: "Pharmacie avec gestion de stock pharmaceutique et alertes de péremption.", verified: true, emoji: "💊" },
  { id: 6, name: "Matériaux du Centre", category: "BTP", city: "Yaoundé", phone: "+237 6XX XXX 006", rating: 4.2, description: "Quincaillerie et matériaux de construction. Inventaire en temps réel.", verified: false, emoji: "🏗️" },
  { id: 7, name: "BeautyZone Dla", category: "Cosmétique", city: "Douala", phone: "+237 6XX XXX 007", rating: 4.6, description: "Produits de beauté et cosmétiques. Gestion multi-dépôts.", verified: true, emoji: "✨" },
  { id: 8, name: "AgriStock Ouest", category: "Agriculture", city: "Bafoussam", phone: "+237 6XX XXX 008", rating: 4.4, description: "Intrants agricoles et semences. Suivi saisonnier des stocks.", verified: true, emoji: "🌾" },
  { id: 9, name: "Librairie Savoir", category: "Librairie", city: "Yaoundé", phone: "+237 6XX XXX 009", rating: 4.8, description: "Livres scolaires et fournitures. Inventaire offline-first parfait.", verified: true, emoji: "📚" },
];

const categories = ["Tous", ...Array.from(new Set(businesses.map((b) => b.category)))];
const cities = ["Toutes", ...Array.from(new Set(businesses.map((b) => b.city)))];

const BusinessDirectory = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [city, setCity] = useState("Toutes");

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "Tous" || b.category === category;
      const matchCity = city === "Toutes" || b.city === city;
      return matchSearch && matchCat && matchCity;
    });
  }, [search, category, city]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Business/>

    

     

      <Footer />
    </div>
  );
};

export default BusinessDirectory;
