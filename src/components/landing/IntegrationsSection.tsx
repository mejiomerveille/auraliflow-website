import { motion } from "framer-motion";
import { tiltIn } from "@/lib/animations";

const integrations = [
  { name: "Orange Money", emoji: "🟠", color: "from-orange-500/20 to-orange-600/10" },
  { name: "MTN MoMo", emoji: "💛", color: "from-yellow-500/20 to-yellow-600/10" },
  { name: "WhatsApp", emoji: "💬", color: "from-green-500/20 to-green-600/10" },
  { name: "Excel", emoji: "📊", color: "from-emerald-500/20 to-emerald-600/10" },
  { name: "Google Sheets", emoji: "📋", color: "from-blue-500/20 to-blue-600/10" },
  { name: "SMS Alertes", emoji: "📱", color: "from-violet-500/20 to-violet-600/10" },
  { name: "Comptabilité", emoji: "🧮", color: "from-rose-500/20 to-rose-600/10" },
  { name: "Imprimante ticket", emoji: "🖨️", color: "from-gray-500/20 to-gray-600/10" },
  { name: "Code-barres", emoji: "📷", color: "from-amber-500/20 to-amber-600/10" },
  { name: "API REST", emoji: "🔗", color: "from-cyan-500/20 to-cyan-600/10" },
  { name: "Fournisseurs", emoji: "🚚", color: "from-indigo-500/20 to-indigo-600/10" },
  { name: "Rapports PDF", emoji: "📄", color: "from-red-500/20 to-red-600/10" },
];

const vp = { once: true, amount: 0.2 };

// Duplicate for seamless loop
const row1 = integrations.slice(0, 6);
const row2 = integrations.slice(6, 12);

const IntegrationsSection = () => (
  <section className="py-28 md:py-36 bg-warm-cream relative overflow-hidden">
    <div className="container px-4 relative z-10">
      <motion.div className="text-center mb-16" variants={tiltIn} initial="hidden" whileInView="visible" viewport={vp}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
          Écosystème
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-5">
          Connecté à vos outils
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Synchronisez Aurali Flow avec vos services de paiement, comptabilité et communication.
        </p>
      </motion.div>

      {/* Scrolling rows */}
      <div className="space-y-5 overflow-hidden">
        {/* Row 1 — moves left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-cream to-transparent z-10" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <div
                key={`r1-${i}`}
                className={`flex-shrink-0 flex items-center gap-4 px-7 py-5 rounded-2xl border border-border bg-gradient-to-br ${item.color} bg-card min-w-[220px] hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-foreground font-semibold text-sm whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — moves right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-cream to-transparent z-10" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <div
                key={`r2-${i}`}
                className={`flex-shrink-0 flex items-center gap-4 px-7 py-5 rounded-2xl border border-border bg-gradient-to-br ${item.color} bg-card min-w-[220px] hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-foreground font-semibold text-sm whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default IntegrationsSection;
