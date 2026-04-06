import logoAurali from "@/assets/logo-aurali-flow.png";

const Footer = () => (
  <footer className="bg-foreground py-16 border-t border-warm-tan/10">
    <div className="container px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <img src={logoAurali} alt="Aurali Flow" className="h-8 brightness-0 invert opacity-70 mb-4" />
          <p className="text-warm-tan/50 text-sm leading-relaxed">
            La solution SaaS de gestion de stock pensée pour les commerçants camerounais.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Produit</h4>
          <ul className="space-y-2 text-warm-tan/50 text-sm">
            <li><a href="#features" className="hover:text-warm-tan/80 transition-colors">Fonctionnalités</a></li>
            <li><a href="#pricing" className="hover:text-warm-tan/80 transition-colors">Tarifs</a></li>
            <li><a href="#demo" className="hover:text-warm-tan/80 transition-colors">Démo</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">API Docs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Entreprise</h4>
          <ul className="space-y-2 text-warm-tan/50 text-sm">
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Carrières</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Support</h4>
          <ul className="space-y-2 text-warm-tan/50 text-sm">
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Centre d'aide</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Tutoriels</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Conditions d'utilisation</a></li>
            <li><a href="#" className="hover:text-warm-tan/80 transition-colors">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-warm-tan/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-warm-tan/30 text-xs">© 2026 Aurali Group · Yaoundé, Cameroun</p>
        <div className="flex gap-4 text-warm-tan/30 text-xs">
          <span>contact@aurali.cm</span>
          <span>+237 6XX XXX XXX</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
