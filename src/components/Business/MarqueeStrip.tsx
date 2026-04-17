const words = ["Stock", "Ventes", "Caisse", "Vitrine", "Catalogue", "Inventaire", "Multi-Boutiques", "Temps Réel"];

export const MarqueeStrip = () => {
  const items = [...words, ...words];
  return (
    <section className="py-8 bg-ink text-background overflow-hidden border-y border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="font-display text-4xl md:text-5xl font-light italic mx-8 opacity-90">
            {w} <span className="text-primary not-italic mx-3">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
