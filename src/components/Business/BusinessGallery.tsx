import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BusinessCard } from "./BusinessCard";
import mockDashboard from "@/assets/mockup-dashboard.jpg";
import mockStore from "@/assets/mockup-store.jpg";
import mockMobile from "@/assets/mockup-mobile.jpg";

interface Company {
  name: string;
  slug: string;
  logo_url: string | null;
}

const mockups = [mockDashboard, mockStore, mockMobile];
const taglines = [
  "Gestion de stock — Temps réel",
  "Vitrine & catalogue produits",
  "Suivi mobile · Multi-points de vente",
  "Inventaire intelligent",
  "Caisse & ventes connectées",
  "Pilotage centralisé",
];

const FALLBACK: Company[] = [
  { name: "Aurali Time", slug: "aurali-time", logo_url: null },
  { name: "Ona Luxe", slug: "ona-luxe", logo_url: null },
  { name: "Aura Lens", slug: "aura-lens", logo_url: null },
  { name: "Aurali Export", slug: "aurali-export", logo_url: null },
];

export const BusinessGallery = ({ query = "", onTotal }: { query?: string; onTotal?: (n: number) => void }) => {
  const [companies, setCompanies] = useState<Company[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("https://api-d.auraliflow.com/v1/companies", { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((data) => {
        const list: Company[] = Array.isArray(data?.companies) ? data.companies : [];
        setCompanies(list);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(true);
      })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, []);

  const source = companies && companies.length > 0 ? companies : FALLBACK;
  const q = query.trim().toLowerCase();
  const filtered = q
    ? source.filter((c) => c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q))
    : source;
  const list = filtered.slice(0, 24);
  const showFallback = !loading && (error || !companies || companies.length === 0);

  useEffect(() => {
    if (onTotal) onTotal(source.length);
  }, [source.length, onTotal]);

  return (
    <section id="business" className="py-20 md:py-28">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">— Sélection</p>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight text-foreground">
              Business sélectionnés
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            {loading
              ? "Chargement du catalogue en direct…"
              : showFallback
                ? "Aperçu de notre vitrine. De nouvelles boutiques rejoignent le réseau chaque semaine."
                : `${list.length} commerces actifs sur la plateforme.`}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-muted animate-pulse rounded-sm" />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {list.map((c, i) => (
              <BusinessCard
                key={c.slug + i}
                name={c.name}
                slug={c.slug}
                logoUrl={c.logo_url}
                mockup={mockups[i % mockups.length]}
                tagline={taglines[i % taglines.length]}
                index={i}
              />
            ))}
          </motion.div>
        )}

        {showFallback && (
          <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Données démo · Connexion API en attente
          </p>
        )}
      </div>
    </section>
  );
};
