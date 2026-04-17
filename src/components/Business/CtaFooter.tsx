import { motion } from "framer-motion";

export const CtaFooter = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-gradient-fade">
      <div className="container max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light leading-tight text-foreground"
        >
          Votre boutique, <em className="text-primary">prochaine</em><br />sur cette page.
        </motion.h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Rejoignez les commerces qui ont fait le choix d'Aurali Flow pour piloter leur stock et accélérer leur croissance.
        </p>
        <a
          href="https://pro.auraliflow.com"
          className="inline-flex items-center mt-10 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-ink transition-colors duration-500 rounded-sm"
        >
          Créer mon business
        </a>
      </div>
      <footer className="container mt-24 pt-8 border-t border-border flex justify-between text-xs text-muted-foreground">
        <span>© 2026 Aurali Group SARL</span>
        <span className="font-display italic">Bâtir. Durer. Transmettre.</span>
      </footer>
    </section>
  );
};
