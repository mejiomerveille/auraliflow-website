import { Package, WifiOff, TrendingUp, Store, Truck, CreditCard } from "lucide-react";

const features = [
  { icon: Package, title: "Gestion des stocks", desc: "Catalogue produits, arrivages, niveaux de stocks en temps réel avec alertes automatiques." },
  { icon: WifiOff, title: "Offline-first", desc: "Continuez vos ventes sans internet. Synchronisation automatique dès la reconnexion." },
  { icon: TrendingUp, title: "Marge brute CMUP", desc: "Calcul précis de vos marges avec prix de revient historisé et coût moyen unitaire pondéré." },
  { icon: Store, title: "Multi-sites", desc: "Gérez plusieurs boutiques et dépôts depuis un seul tableau de bord centralisé." },
  { icon: Truck, title: "Intégration Nelam", desc: "Gestion des livraisons intégrée pour un flux logistique complet et sans friction." },
  { icon: CreditCard, title: "Mobile Money", desc: "Paiements via Orange Money, MTN MoMo. Abonnements flexibles en XAF." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32 bg-background relative">
    <div className="absolute inset-0 bg-gradient-to-b from-warm-beige/50 to-transparent h-32" />
    <div className="container px-4 relative">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-[0.2em] uppercase">Fonctionnalités</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
          Tout pour votre commerce
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Une suite complète d'outils pensés pour les commerçants camerounais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
