import { Package, WifiOff, TrendingUp, Store, Truck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { tiltIn, staggerContainer, staggerItem, cardHover3D } from "@/lib/animations";

const features = [
  { icon: Package, title: "Gestion des stocks", desc: "Catalogue produits, arrivages, niveaux de stocks en temps réel avec alertes automatiques.", color: "from-amber-500/20 to-orange-600/20" },
  { icon: WifiOff, title: "Offline-first", desc: "Continuez vos ventes sans internet. Synchronisation automatique dès la reconnexion.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: TrendingUp, title: "Marge brute CMUP", desc: "Calcul précis de vos marges avec prix de revient historisé et coût moyen unitaire pondéré.", color: "from-emerald-500/20 to-green-600/20" },
  { icon: Store, title: "Multi-sites", desc: "Gérez plusieurs boutiques et dépôts depuis un seul tableau de bord centralisé.", color: "from-violet-500/20 to-purple-600/20" },
  { icon: Truck, title: "Intégration Nelam", desc: "Gestion des livraisons intégrée pour un flux logistique complet et sans friction.", color: "from-rose-500/20 to-pink-600/20" },
  { icon: CreditCard, title: "Mobile Money", desc: "Paiements via Orange Money, MTN MoMo. Abonnements flexibles en XAF.", color: "from-yellow-500/20 to-amber-600/20" },
];

const vp = { once: true, amount: 0.15 };

const FeaturesSection = () => (
  <section id="features" className="py-28 md:py-36 bg-background relative overflow-hidden">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />
    
    <div className="container px-4 relative">
      <motion.div
        className="text-center mb-20"
        variants={tiltIn}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        <motion.span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
          Fonctionnalités
        </motion.span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-5">
          Tout pour votre commerce
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Une suite complète d'outils pensés pour les commerçants camerounais.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={staggerItem}
            whileHover={cardHover3D}
            style={{ transformPerspective: 1200 }}
            className="group relative p-8 rounded-3xl bg-card border border-border overflow-hidden cursor-default"
          >
            {/* Gradient glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
