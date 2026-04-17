import { motion } from "framer-motion";
import { swingInLeft, riseStretch } from "@/lib/animations";
import appDashboard from "@/assets/app-dashboard.jpeg";

const vp = { once: true, amount: 0.3 };

const DownloadCTA = () => (
  <section className="py-28 md:py-36 hero-gradient relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-warm-tan/5 blur-[150px]" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[130px]" />

    <div className="container px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={swingInLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Téléchargez<br />Aurali Flow<br /><span className="text-gradient-gold">maintenant</span>
          </h2>
          <p className="text-warm-tan/70 text-lg mb-10 max-w-md leading-relaxed">Disponible sur Android et iOS. Commencez votre essai gratuit de 7 jours sans carte bancaire.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.a whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} href="#" className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-primary-foreground text-foreground shadow-xl">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.726-2.302 2.726-2.302zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z" /></svg>
              <div className="text-left"><div className="text-[10px] uppercase tracking-wider opacity-60">Télécharger sur</div><div className="text-base font-bold -mt-0.5">Google Play</div></div>
            </motion.a>
            <motion.a whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} href="#" className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-primary-foreground text-foreground shadow-xl">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div className="text-left"><div className="text-[10px] uppercase tracking-wider opacity-60">Télécharger sur</div><div className="text-base font-bold -mt-0.5">App Store</div></div>
            </motion.a>
          </div>

          <div className="flex items-center gap-6 text-warm-tan/40 text-xs">
            <span>✓ Gratuit pendant 7 jours</span>
            <span>✓ Sans engagement</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 100, rotateZ: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute inset-0 -m-10 rounded-[5rem] bg-gradient-to-br from-gold/15 to-primary/10 blur-3xl" />
            <div className="relative w-[240px] md:w-[280px] rounded-[3rem] border-[8px] border-warm-tan/20 bg-foreground shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
              <img src={appDashboard} alt="Aurali Flow App" className="w-full" loading="lazy" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DownloadCTA;
