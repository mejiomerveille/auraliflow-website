import { Check, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { tiltIn, staggerContainer, staggerItem } from "@/lib/animations";

const plans = [
  {
    name: "Flow ECO",
    price: "190",
    unit: "XAF / jour",
    desc: "L'essentiel pour les petits commerces qui débutent.",
    features: [
      "1 utilisateur actif",
      "Gestion des arrivages",
      "Suivi des ventes",
      "Stock en temps réel",
      "1 site de stockage",
      "Support par email",
    ],
    cta: "Commencer avec ECO",
    highlighted: false,
    badge: null,
  },
  {
    name: "Flow PRO",
    price: "5 000",
    unit: "XAF / mois",
    desc: "Pour les entreprises en croissance qui veulent piloter leur rentabilité.",
    saving: "Économisez 10 000 XAF / an",
    features: [
      "Jusqu'à 5 utilisateurs",
      "Calcul automatique des marges",
      "Gestion multi-sites (3 sites)",
      "Rapports analytiques avancés",
      "Exportation des données",
      "Support prioritaire 24/7",
    ],
    cta: "Passer à PRO",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Flow PREMIUM",
    price: "Sur mesure",
    unit: "",
    desc: "Solution complète pour les grandes entreprises multi-boutiques.",
    features: [
      "Utilisateurs illimités",
      "Sites de stockage illimités",
      "Pistes d'audit avancées",
      "Gestion documentaire complète",
      "API dédiée pour Marketplace",
      "Gestionnaire de compte dédié",
    ],
    cta: "Contacter la vente",
    highlighted: false,
    badge: null,
  },
];

const vp = { once: true, amount: 0.2 };

const PricingSection = () => (
  <section id="pricing" className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "48px 48px" }} />

    <div className="container px-4 relative">
      <motion.div className="text-center mb-20" variants={tiltIn} initial="hidden" whileInView="visible" viewport={vp}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">Tarification</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-5">
          Des tarifs simples et transparents
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Choisissez le plan qui correspond à la taille de votre entreprise. Changez de plan à tout moment.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative flex flex-col p-8 rounded-3xl border overflow-hidden transition-shadow duration-300 ${
              plan.highlighted
                ? "bg-gradient-to-b from-foreground via-foreground to-foreground/95 text-primary-foreground border-gold/40 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] scale-[1.03] z-10"
                : "bg-card border-border hover:shadow-xl"
            }`}
          >
            {plan.badge && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 px-5 py-1 bg-gold text-foreground text-xs font-bold rounded-b-xl flex items-center gap-1">
                <Star className="w-3 h-3" />
                {plan.badge}
              </span>
            )}

            <div className={`${plan.badge ? "mt-6" : ""}`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
            </div>

            <div className="mb-2">
              {plan.unit ? (
                <>
                  <span className="text-4xl md:text-5xl font-display font-bold">{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{plan.unit}</span>
                </>
              ) : (
                <span className="text-3xl md:text-4xl font-display font-bold">{plan.price}</span>
              )}
            </div>

            {plan.saving && (
              <span className="inline-block text-xs text-gold font-semibold mb-6 bg-gold/10 px-3 py-1 rounded-full w-fit">
                {plan.saving}
              </span>
            )}
            {!plan.saving && <div className="mb-6" />}

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.highlighted ? "bg-gold/20 text-gold" : "bg-primary/10 text-primary"
                  }`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span className={plan.highlighted ? "text-primary-foreground/80" : ""}>{f}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                plan.highlighted
                  ? "bg-gold text-foreground hover:bg-gold/90 shadow-lg"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-center text-muted-foreground text-sm mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ delay: 0.5 }}
      >
        Payez via Mobile Money (Orange Money, MTN MoMo). Sans engagement, sans surprise.
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
