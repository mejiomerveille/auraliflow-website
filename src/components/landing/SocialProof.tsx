import person3 from "@/assets/person-using-app-3.jpg";

const stats = [
  { value: "500+", label: "Entreprises" },
  { value: "1M+", label: "Transactions" },
  { value: "+20%", label: "Marges en moyenne" },
  { value: "99.9%", label: "Disponibilité" },
];

const testimonials = [
  {
    quote: "Depuis Aurali Flow, nos marges ont augmenté de 20% en un mois. La gestion offline est un game-changer pour nos boutiques.",
    name: "Marie N.",
    role: "Propriétaire boutique, Yaoundé",
  },
  {
    quote: "Je gère 3 boutiques depuis mon téléphone. Les arrivages, les ventes, tout est synchronisé automatiquement.",
    name: "Paul K.",
    role: "Grossiste, Douala",
  },
  {
    quote: "L'application est tellement simple que même mes employés l'ont adoptée en une journée. Le support est excellent.",
    name: "Amina D.",
    role: "Commerçante, Bafoussam",
  },
];

const SocialProof = () => (
  <section id="temoignages" className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="container px-4">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-1">{s.value}</div>
            <div className="text-muted-foreground text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t) => (
          <div key={t.name} className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-1 mb-4 text-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</blockquote>
            <div>
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Large image of person using app */}
      <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
        <img
          src={person3}
          alt="Commerçante utilisant Aurali Flow au marché"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent flex items-center">
          <div className="px-8 md:px-16 max-w-lg">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
              Fait pour les commerçants camerounais
            </h3>
            <p className="text-warm-tan/80 text-sm md:text-base mb-4">
              Paiements en XAF, Orange Money, MTN MoMo. Conçu pour vos réalités.
            </p>
            <button className="px-6 py-3 rounded-full bg-primary-foreground text-foreground font-semibold text-sm hover:scale-105 transition-transform">
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
