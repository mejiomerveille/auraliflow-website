import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { blurIn } from "@/lib/animations";

const vp = { once: true, amount: 0.3 };

const videoSteps = [
  { title: "Créer un arrivage", desc: "Ajoutez vos produits et quantités en quelques taps." },
  { title: "Enregistrer une vente", desc: "Scanner ou sélectionner, le calcul est automatique." },
  { title: "Suivre vos stocks", desc: "Vue en temps réel de tous vos sites de stockage." },
  { title: "Analyser vos marges", desc: "Rapports détaillés avec calcul CMUP intégré." },
  { title: "Gérer multi-sites", desc: "Pilotez toutes vos boutiques depuis un seul écran." },
];

const VideoDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="demo" className="bg-white relative">
      <div className="container px-4 py-20">
        <motion.div className="text-center mb-16" variants={blurIn} initial="hidden" whileInView="visible" viewport={vp}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-muted-foreground font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Démo vidéo
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 mb-5">
            Voyez Aurali Flow en action
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Découvrez étape par étape comment gérer votre commerce.
          </p>
        </motion.div>
      </div>

      {/* Staircase scroll section */}
      <div ref={containerRef} className="relative" style={{ height: `${videoSteps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto px-4" style={{ perspective: 1200 }}>
            {videoSteps.map((step, i) => (
              <VideoCard
                key={i}
                index={i}
                total={videoSteps.length}
                step={step}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({
  index,
  total,
  step,
  scrollYProgress,
}: {
  index: number;
  total: number;
  step: { title: string; desc: string };
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;

  // Card enters from bottom, stays, then exits up
  const y = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.3, end - segmentSize * 0.3, end],
    ["100vh", "0vh", "0vh", "-100vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.2, end - segmentSize * 0.2, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.3, end - segmentSize * 0.3, end],
    [0.85, 1, 1, 0.9]
  );

  // Staircase offset — each card shifts slightly right and rotates
  const xOffset = (index % 2 === 0 ? -1 : 1) * (index * 15);
  const rotate = (index % 2 === 0 ? -1 : 1) * 1.5;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y, opacity, scale }}
    >
      <div
        className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-border bg-card"
        style={{ transform: `translateX(${xOffset}px) rotate(${rotate}deg)` }}
      >
        {/* Step indicator */}
        <div className="px-6 pt-6 pb-3 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            {index + 1}
          </span>
          <div>
            <h3 className="font-bold text-foreground text-base">{step.title}</h3>
            <p className="text-muted-foreground text-xs">{step.desc}</p>
          </div>
        </div>

        {/* Video */}
        <div className="px-4 pb-4">
          <div className="rounded-2xl overflow-hidden bg-black">
            <video
              className="w-full h-[280px] md:h-[340px] object-contain"
              preload="metadata"
              muted
              loop
              playsInline
              autoPlay
            >
              <source src="/videos/demo-aurali.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoDemo;
