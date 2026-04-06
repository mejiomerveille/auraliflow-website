import { Zap } from "lucide-react";

const plans = [
  {
    name: "ECO",
    price: "150",
    unit: "XAF/jour",
    desc: "Pour les petits commerces",
    features: ["Gestion stocks basique", "1 boutique", "Ventes offline", "Support email"],
    highlighted: false,
  },
  {
    name: "PRO",
    price: "5 000",
    unit: "XAF/mois",
    desc: "Pour les entreprises en croissance",
    features: ["Marge brute + trésorerie", "Multi-sites illimités", "Intégration Nelam", "API accès", "Support prioritaire"],
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 bg-background">
    <div className="container px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-[0.2em] uppercase">Tarification</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
          Simple et transparent
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Payez via Mobile Money. Sans engagement, sans surprise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${
              plan.highlighted
                ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-[1.02]"
                : "bg-card border-border hover:border-primary/30"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-foreground text-xs font-bold rounded-full">
                Populaire
              </span>
            )}
            <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
            <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {plan.desc}
            </p>
            <div className="mb-6">
              <span className="text-4xl font-display font-bold">{plan.price}</span>
              <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {plan.unit}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary-foreground text-foreground hover:scale-105"
                  : "bg-primary text-primary-foreground hover:scale-105"
              }`}
            >
              Choisir {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
