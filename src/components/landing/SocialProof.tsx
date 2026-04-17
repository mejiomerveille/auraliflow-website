import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "Entreprises" },
  { value: 1, suffix: "M+", label: "Transactions" },
  { value: 20, suffix: "%", prefix: "+", label: "Marges en moyenne" },
  { value: 99.9, suffix: "%", label: "Disponibilité" },
];

const testimonials = [
  {
    quote: "Depuis Aurali Flow, nos marges ont augmenté de 20% en un mois. La gestion est un game-changer pour nos boutiques.",
    name: "Marie N.",
    role: "Propriétaire boutique, Yaoundé",
    avatar: "MN",
    gradient: "from-amber-500 to-orange-600",
    column: 0, // left
  },
  {
    quote: "Je gère 3 boutiques depuis mon téléphone. Les arrivages, les ventes, tout est synchronisé automatiquement.",
    name: "Paul K.",
    role: "Grossiste, Douala",
    avatar: "PK",
    gradient: "from-emerald-500 to-teal-600",
    column: 2, // right
  },
  {
    quote: "L'application est tellement simple que même mes employés l'ont adoptée en une journée. Le support est excellent.",
    name: "Amina D.",
    role: "Commerçante, Bafoussam",
    avatar: "AD",
    gradient: "from-violet-500 to-purple-600",
    column: 1, // middle
  },
  {
    quote: "Les rapports analytiques me donnent une vision claire de mes marges. Je recommande à tous les commerçants.",
    name: "Jean-Pierre M.",
    role: "Distributeur, Kribi",
    avatar: "JM",
    gradient: "from-rose-500 to-pink-600",
    column: 2, // right
  },
  {
    quote: "Le calcul CMUP automatique m'a fait gagner des heures chaque semaine. C'est vraiment pensé pour nous.",
    name: "Fatou S.",
    role: "Grossiste alimentaire, Douala",
    avatar: "FS",
    gradient: "from-blue-500 to-indigo-600",
    column: 0, // left
  },
];

// Group by column
const leftCol = testimonials.filter(t => t.column === 0);
const middleCol = testimonials.filter(t => t.column === 1);
const rightCol = testimonials.filter(t => t.column === 2);

const marqueeText = "AVIS ET TÉMOIGNAGES • ";
const repeatedText = Array(20).fill(marqueeText).join("");

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value < 10) return `${prefix}${v.toFixed(1)}${suffix}`;
    return `${prefix}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
    <div className="flex gap-1 mb-3 text-gold text-sm">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <blockquote className="text-foreground text-sm leading-relaxed mb-5">
      "{t.quote}"
    </blockquote>
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}>
        {t.avatar}
      </div>
      <div>
        <div className="font-bold text-foreground text-sm">{t.name}</div>
        <div className="text-muted-foreground text-xs">{t.role}</div>
      </div>
    </div>
  </div>
);

const vp = { once: true, amount: 0.2 };

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Each column moves at different speed — staggered effect
  const leftY = useTransform(scrollYProgress, [0, 1], ["30%", "-40%"]);
  const middleY = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <section id="temoignages" className="bg-background relative overflow-hidden">
      {/* Stats */}
      <div className="py-20 md:py-28">
        <div className="container px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {stats.map((s) => (
              <motion.div key={s.label} className="text-center" variants={staggerItem}>
                <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix || ""} />
                </div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials section */}
      <div ref={containerRef} className="relative py-20 md:py-32">
        {/* Infinite marquee background — always running */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-black text-foreground/[0.03] leading-none">
              {repeatedText}
            </span>
          </motion.div>
        </div>

        {/* Section header */}
        <div className="container px-4 relative z-10 mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-muted-foreground font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Ce que disent nos utilisateurs
            </h2>
          </motion.div>
        </div>

        {/* 3-column grid with staggered scroll */}
        
      </div>
    </section>
  );
};

export default SocialProof;
