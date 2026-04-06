const VideoDemo = () => (
  <section id="demo" className="py-24 md:py-32 hero-gradient relative overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 blur-[100px]" />
    <div className="container px-4 relative z-10">
      <div className="text-center mb-12">
        <span className="text-warm-tan font-semibold text-sm tracking-[0.2em] uppercase">Démo vidéo</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-4">
          Voyez Aurali Flow en action
        </h2>
        <p className="text-warm-tan/60 max-w-lg mx-auto">
          Découvrez comment gérer vos stocks, enregistrer des ventes et suivre vos marges en quelques gestes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-warm-tan/10">
          <video
            controls
            className="w-full max-h-[480px] object-contain bg-black"
            poster=""
            preload="metadata"
          >
            <source src="/videos/demo-aurali.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default VideoDemo;
