import { Download, Play } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpeg";

const HeroSection = () => (
  <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-warm-tan/10 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[100px]" />

    <div className="container relative z-10 px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-warm-tan/30 text-warm-tan text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            #1 Gestion de stock au Cameroun
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[0.95] mb-6">
            Gérez votre commerce{" "}
            <span className="text-gradient-gold italic">en un flux</span>
          </h1>

          <p className="text-warm-tan/80 text-lg md:text-xl max-w-lg mb-4 font-light">
            Stocks, ventes, arrivages et marges — tout dans une seule application mobile. Même sans internet.
          </p>

          <p className="text-warm-tan/50 text-sm max-w-md mb-8">
            Rejoignez +500 commerçants camerounais qui optimisent leurs marges avec Aurali Flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary-foreground text-foreground font-semibold text-base hover:scale-105 transition-transform shadow-lg">
              <Download className="w-5 h-5" />
              Télécharger gratuitement
            </button>
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-warm-tan/30 text-warm-tan font-medium text-base hover:bg-warm-tan/10 transition-all"
            >
              <Play className="w-5 h-5" />
              Voir la démo
            </a>
          </div>

          <div className="flex items-center gap-6 text-warm-tan/40 text-xs">
            <span>✓ Essai gratuit 7 jours</span>
            <span>✓ Sans carte bancaire</span>
            <span>✓ Android & iOS</span>
          </div>
        </div>

        {/* Right — Phone mockup with real screenshot */}
        <div className="animate-fade-up animate-fade-up-delay-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-[280px] md:w-[320px] rounded-[3rem] border-[8px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground rounded-b-2xl z-10" />
              <img
                src={appDashboard}
                alt="Aurali Flow - Dashboard"
                className="w-full"
                width={320}
                height={640}
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -left-16 top-1/4 glass-card-dark rounded-2xl px-4 py-3 animate-float">
              <div className="text-primary-foreground text-xs font-semibold">Marge Brute</div>
              <div className="text-gradient-gold text-lg font-bold">+20%</div>
            </div>
            <div className="absolute -right-12 bottom-1/3 glass-card-dark rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-primary-foreground text-xs font-semibold">Stocks sync</div>
              <div className="text-green-400 text-sm font-bold">● En ligne</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
