import logoAurali from "@/assets/logo-aurali-flow.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-xl border-b border-warm-tan/10">
      <div className="container flex items-center justify-between h-16 px-4">
        <img src={logoAurali} alt="Aurali Flow" className="h-7 brightness-0 invert" />

        <div className="hidden md:flex items-center gap-8 text-primary-foreground/70 text-sm">
          <a href="#features" className="hover:text-primary-foreground transition-colors">Fonctionnalités</a>
          <a href="#demo" className="hover:text-primary-foreground transition-colors">Démo</a>
          <a href="#pricing" className="hover:text-primary-foreground transition-colors">Tarifs</a>
          <a href="#temoignages" className="hover:text-primary-foreground transition-colors">Témoignages</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-primary-foreground text-sm font-medium hover:bg-primary-foreground/10 transition-all">
            Se connecter
          </button>
          <button className="px-5 py-2 rounded-full bg-primary-foreground text-foreground text-sm font-semibold hover:scale-105 transition-transform">
            Télécharger l'app
          </button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-xl border-t border-warm-tan/10 px-4 py-6 space-y-4">
          <a href="#features" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Fonctionnalités</a>
          <a href="#demo" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Démo</a>
          <a href="#pricing" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Tarifs</a>
          <a href="#temoignages" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Témoignages</a>
          <button className="w-full px-5 py-3 rounded-full bg-primary-foreground text-foreground text-sm font-semibold">
            Télécharger l'app
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
