import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Package, BarChart3, Smartphone, Lock, AlertTriangle } from "lucide-react";

const features = [
  { icon: Package, text: "Suivi des stocks en temps réel, article par article" },
  { icon: BarChart3, text: "Marge brute calculée automatiquement à chaque vente" },
  { icon: Smartphone, text: "Saisie d'une commande en moins de 30 secondes" },
  { icon: Lock, text: "Données isolées et sécurisées pour chaque entreprise" },
];

const stats = [
  { value: 68, suffix: "%", label: "des mini-commerces africains n'ont aucun outil de pilotage financier" },
  { value: 5, prefix: "<", suffix: " min", label: "pour enregistrer un arrivage complet avec prix de revient" },
  { value: 98, suffix: "%+", label: "de fiabilité de l'inventaire en temps réel grâce à la synchronisation automatique" },
];

const Counter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1600;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
};

const ProblemSection = () => {
  return (
    <section className="relative py-28 md:py-36 bg-warm-cream overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-warm-tan/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70 text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-foreground/10">
            <AlertTriangle className="w-3.5 h-3.5" />
            Le problème
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.05] tracking-tight">
            Votre business avance.
            <br />
            <span className="italic text-foreground/50">Votre gestion reste sur Excel.</span>
          </h2>
        </motion.div>

        {/* Two column intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-12 lg:mt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            Des ruptures de stock non anticipées. Des marges calculées à l'intuition. Des ventes perdues faute de visibilité.
            <span className="block mt-3 font-semibold text-foreground">Vous gérez votre boutique à l'aveugle.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            <span className="font-semibold text-foreground">Aurali Flow met fin à ça</span> — avec un outil pensé pour la réalité du terrain camerounais : mobile, rapide, fiable même sans connexion.
          </motion.p>
        </div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-3xl bg-background border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "hsl(45 95% 55% / 0.15)" }}
              >
                <f.icon className="w-5 h-5" style={{ color: "hsl(35 80% 35%)" }} />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 rounded-[2.5rem] overflow-hidden p-10 md:p-14 bg-gradient-to-br from-[hsl(15_40%_18%)] via-[hsl(20_35%_25%)] to-[hsl(25_30%_32%)]"
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(35 70% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(35 70% 80%) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`relative ${i !== stats.length - 1 ? "md:border-r md:border-warm-cream/15 md:pr-6" : ""}`}
              >
                <p
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-none mb-4"
                  style={{ color: "hsl(45 95% 65%)" }}
                >
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="text-warm-cream/80 text-sm md:text-base leading-relaxed max-w-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
