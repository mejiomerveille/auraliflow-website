import { motion } from "framer-motion";
import { Search } from "lucide-react";
import heroDark from "@/assets/hero-dark.jpg";

interface Props {
  query: string;
  onQueryChange: (v: string) => void;
  total: number;
}

export const BusinessHero = ({ query, onQueryChange, total }: Props) => {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink text-background">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroDark}
          alt=""
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,hsl(var(--primary)/0.35),transparent_60%)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[8%] w-72 h-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container relative pt-40 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Catalogue Business</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-display text-[clamp(3rem,9vw,8.5rem)] font-light leading-[0.92] tracking-tight max-w-6xl text-balance"
        >
          Découvrez les{" "}
          <em className="text-primary not-italic font-display italic">boutiques</em>
          <br />
          qui pilotent leur stock<br />
          en <span className="italic text-background/60">temps réel.</span>
        </motion.h1>

        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="max-w-xl w-full"
          >
            <label className="block text-[10px] uppercase tracking-[0.3em] text-background/50 mb-3">
              Rechercher un business
            </label>
            <div className="group relative flex items-center bg-background/5 backdrop-blur-md border border-background/15 rounded-sm focus-within:border-primary transition-colors duration-500">
              <Search className="absolute left-5 w-5 h-5 text-background/60 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Nom du commerce, slug, catégorie…"
                className="w-full bg-transparent pl-14 pr-32 py-5 text-base text-background placeholder:text-background/40 outline-none font-sans-aurali"
              />
              <button
                type="button"
                className="absolute right-2 px-5 py-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors rounded-sm"
              >
                Explorer
              </button>
            </div>
            <p className="mt-3 text-xs text-background/50">
              Tapez pour filtrer parmi les commerces du réseau Aurali Flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-right"
          >
            <div className="font-display text-6xl md:text-7xl text-primary leading-none">
              {String(total).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/60 mt-2">
              Business actifs
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
