import { motion } from "framer-motion";
import { Package, TrendingUp, Store, CreditCard, BarChart3, Users } from "lucide-react";
import { tiltIn, staggerContainer, staggerItem } from "@/lib/animations";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";
import appScreen6 from "@/assets/app-screen-6.png";

const vp = { once: true, amount: 0.15 };

const BentoSection = () => (
    
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
        <img
          src="/images/sans-auraliflow.jpg"
          alt="Gestion sans Auraliflow"
          className="h-full w-full object-cover opacity-60 grayscale"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <img
          src="/images/avec-auraliflow.jpg"
          alt="Gestion avec Auraliflow"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 px-6 max-w-6xl">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            [ SANS AURALIFLOW ]
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Gestion désorganisée
          </h2>

          <h3 className="text-5xl md:text-6xl font-extrabold">
            COMMERCE FRAGILE
          </h3>

          <p className="mt-6 text-gray-600 max-w-md">
            Avant Auraliflow, vous gérez vos ventes, stocks et finances de manière manuelle,
            ce qui entraîne erreurs, pertes et manque de visibilité.
          </p>

          <div className="w-10 h-1 bg-red-500 mt-6 mx-auto md:mx-0" />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            [ AVEC AURALIFLOW ]
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Gestion optimisée
          </h2>

          <h3 className="text-5xl md:text-6xl font-extrabold">
            COMMERCE PERFORMANT
          </h3>

          <p className="mt-6 text-gray-600 max-w-md">
            Avec Auraliflow, suivez vos performances en temps réel, gérez efficacement
            vos stocks et prenez des décisions intelligentes pour développer votre activité.
          </p>

          <div className="w-10 h-1 bg-green-500 mt-6 mx-auto md:mx-0" />
        </motion.div>

      </div>
    </section>
  // <section id="features" className="py-28 md:py-36 bg-background relative overflow-hidden">
  //   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />

  //   <div className="container px-4 relative">
  //     <motion.div className="text-center mb-20" variants={tiltIn} initial="hidden" whileInView="visible" viewport={vp}>
  //       <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
  //         Tout-en-un
  //       </span>
  //       <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-5">
  //         Votre commerce, simplifié
  //       </h2>
  //       <p className="text-muted-foreground max-w-lg mx-auto text-lg">
  //         Une suite complète d'outils pensés pour les commerçants camerounais.
  //       </p>
  //     </motion.div>

  //     <motion.div
  //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  //       variants={staggerContainer}
  //       initial="hidden"
  //       whileInView="visible"
  //       viewport={vp}
  //     >
  //       {/* Card 1 — Large: Gestion des stocks */}
  //       <motion.div
  //         variants={staggerItem}
  //         className="group relative md:col-span-2 rounded-3xl overflow-hidden border border-border bg-card min-h-[320px]"
  //       >
  //         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  //         <div className="relative z-10 p-10 flex flex-col lg:flex-row gap-8 items-center h-full">
  //           <div className="flex-1">
  //             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
  //               <Package className="w-7 h-7 text-primary" />
  //             </div>
  //             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Gestion des stocks</h3>
  //             <p className="text-muted-foreground leading-relaxed max-w-md">
  //               Catalogue produits, arrivages, niveaux de stocks en temps réel avec alertes automatiques de rupture.
  //             </p>
  //           </div>
  //           <div className="flex-shrink-0 w-full lg:w-[260px]">
  //             <motion.div
  //               whileHover={{ scale: 1.05, rotateY: 5 }}
  //               transition={{ duration: 0.4 }}
  //               style={{ transformPerspective: 800 }}
  //               className="rounded-2xl overflow-hidden shadow-2xl border border-border"
  //             >
  //               <img src={appScreen2} alt="Gestion stocks" className="w-full" loading="lazy" />
  //             </motion.div>
  //           </div>
  //         </div>
  //       </motion.div>

  //       {/* Card 2 — Marge brute */}
  //       <motion.div
  //         variants={staggerItem}
  //         className="group relative rounded-3xl overflow-hidden border border-border bg-card p-8 min-h-[320px] flex flex-col justify-between"
  //       >
  //         <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  //         <div className="relative z-10">
  //           <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
  //             <TrendingUp className="w-7 h-7 text-primary" />
  //           </div>
  //           <h3 className="text-xl font-bold text-foreground mb-3">Marge brute CMUP</h3>
  //           <p className="text-muted-foreground text-sm leading-relaxed">
  //             Calcul précis de vos marges avec prix de revient historisé et coût moyen unitaire pondéré.
  //           </p>
  //         </div>
  //         <div className="relative z-10 mt-6 flex items-end gap-1">
  //           {[40, 65, 50, 80, 70, 90, 85].map((h, i) => (
  //             <motion.div
  //               key={i}
  //               initial={{ height: 0 }}
  //               whileInView={{ height: `${h}%` }}
  //               viewport={vp}
  //               transition={{ duration: 0.6, delay: i * 0.1 }}
  //               className="flex-1 bg-gradient-to-t from-primary/40 to-primary/10 rounded-t-md"
  //               style={{ maxHeight: 80 }}
  //             />
  //           ))}
  //         </div>
  //       </motion.div>

  //       {/* Card 3 — Multi-sites */}
  //       <motion.div
  //         variants={staggerItem}
  //         className="group relative rounded-3xl overflow-hidden border border-border bg-card p-8 min-h-[280px]"
  //       >
  //         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  //         <div className="relative z-10">
  //           <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
  //             <Store className="w-7 h-7 text-primary" />
  //           </div>
  //           <h3 className="text-xl font-bold text-foreground mb-3">Multi-sites</h3>
  //           <p className="text-muted-foreground text-sm leading-relaxed">
  //             Gérez plusieurs boutiques et dépôts depuis un seul tableau de bord centralisé.
  //           </p>
  //         </div>
  //       </motion.div>

  //       {/* Card 4 — Mobile Money */}
  //       <motion.div
  //         variants={staggerItem}
  //         className="group relative rounded-3xl overflow-hidden border border-border bg-card p-8 min-h-[280px]"
  //       >
  //         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  //         <div className="relative z-10">
  //           <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
  //             <CreditCard className="w-7 h-7 text-primary" />
  //           </div>
  //           <h3 className="text-xl font-bold text-foreground mb-3">Mobile Money</h3>
  //           <p className="text-muted-foreground text-sm leading-relaxed">
  //             Paiements via Orange Money, MTN MoMo. Abonnements flexibles en XAF.
  //           </p>
  //         </div>
  //       </motion.div>

  //       {/* Card 5 — Large: Tableau de bord */}
  //       <motion.div
  //         variants={staggerItem}
  //         className="group relative md:col-span-2 lg:col-span-2 rounded-3xl overflow-hidden border border-border bg-card min-h-[320px]"
  //       >
  //         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  //         <div className="relative z-10 p-10 flex flex-col lg:flex-row gap-8 items-center h-full">
  //           <div className="flex-1">
  //             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
  //               <BarChart3 className="w-7 h-7 text-primary" />
  //             </div>
  //             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Tableau de bord</h3>
  //             <p className="text-muted-foreground leading-relaxed max-w-md">
  //               Chiffre d'affaires, stocks, ruptures et tendances — tout visible en un coup d'œil.
  //             </p>
  //           </div>
  //           <div className="flex-shrink-0 flex gap-3">
  //             <motion.div
  //               whileHover={{ scale: 1.05 }}
  //               transition={{ duration: 0.4 }}
  //               className="w-[120px] md:w-[150px] rounded-2xl overflow-hidden shadow-xl border border-border"
  //             >
  //               <img src={appScreen3} alt="Dashboard" className="w-full" loading="lazy" />
  //             </motion.div>
  //             <motion.div
  //               whileHover={{ scale: 1.05 }}
  //               transition={{ duration: 0.4 }}
  //               className="w-[120px] md:w-[150px] rounded-2xl overflow-hidden shadow-xl border border-border mt-6"
  //             >
  //               <img src={appScreen6} alt="Rapports" className="w-full" loading="lazy" />
  //             </motion.div>
  //           </div>
  //         </div>
  //       </motion.div>
  //     </motion.div>

  //     <motion.div
  //       className="text-center mt-14"
  //       initial={{ opacity: 0, y: 30 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       viewport={vp}
  //       transition={{ duration: 0.6, delay: 0.3 }}
  //     >
  //       <motion.a
  //         href="#pricing"
  //         whileHover={{ scale: 1.05 }}
  //         whileTap={{ scale: 0.97 }}
  //         className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-lg"
  //       >
  //         Découvrir les offres
  //       </motion.a>
  //     </motion.div>
  //   </div>
  // </section>
);

export default BentoSection;
