import { Download } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpeg";

const DownloadCTA = () => (
  <section className="py-24 md:py-32 hero-gradient relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-warm-tan/5 blur-[120px]" />
    <div className="container px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Téléchargez Aurali Flow maintenant
          </h2>
          <p className="text-warm-tan/70 text-lg mb-8 max-w-md">
            Disponible sur Android et iOS. Commencez votre essai gratuit de 7 jours sans carte bancaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Google Play button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary-foreground text-foreground hover:scale-105 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.726-2.302 2.726-2.302zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Télécharger sur</div>
                <div className="text-base font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>

            {/* App Store button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary-foreground text-foreground hover:scale-105 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Télécharger sur</div>
                <div className="text-base font-semibold -mt-0.5">App Store</div>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 text-warm-tan/40 text-xs">
            <span>✓ Gratuit pendant 7 jours</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="w-[240px] md:w-[280px] rounded-[3rem] border-[8px] border-warm-tan/20 bg-foreground shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
            <img src={appDashboard} alt="Aurali Flow App" className="w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DownloadCTA;
