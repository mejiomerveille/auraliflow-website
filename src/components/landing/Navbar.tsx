import logoAurali from "@/assets/logo-aurali-flow.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="flex items-center justify-between h-14 pl-5 pr-2 rounded-full bg-foreground/95 backdrop-blur-xl border border-warm-tan/10 shadow-2xl">
        <img src={logoAurali} alt="Aurali Flow" className="h-6 brightness-0 invert" />

        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
          <a href="#features" className="px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all">Accueil</a>
          <a href="#demo" className="px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all">À propos</a>
          <a href="#pricing" className="px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all">Tarifs</a>
          <a href="#temoignages" className="px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all">Témoignages</a>
          <Link to="/business" className="px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all">Business</Link>
        </div>

        <button
          className="hidden md:block px-5 py-2 rounded-full text-foreground text-sm font-semibold hover:scale-105 transition-transform"
          style={{ backgroundColor: "hsl(45 95% 55%)" }}
        >
          Télécharger
        </button>

        <button className="md:hidden text-primary-foreground pr-3" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-foreground/95 backdrop-blur-xl rounded-3xl border border-warm-tan/10 px-5 py-5 space-y-3 shadow-2xl">
          <a href="#features" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#demo" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>À propos</a>
          <a href="#pricing" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Tarifs</a>
          <a href="#temoignages" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Témoignages</a>
          <Link to="/business" className="block text-primary-foreground/80 text-sm py-2" onClick={() => setOpen(false)}>Business</Link>
          <button
            className="w-full px-5 py-3 rounded-full text-foreground text-sm font-semibold"
            style={{ backgroundColor: "hsl(45 95% 55%)" }}
          >
            Télécharger
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
