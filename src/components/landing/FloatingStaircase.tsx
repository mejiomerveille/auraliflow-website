import { useEffect, useRef } from "react";
import v1 from "@/assets/videos/v1.mp4";
import v2 from "@/assets/videos/v2.mp4";
import v3 from "@/assets/videos/v3.mp4";
import v4 from "@/assets/videos/v4.mp4";
import v5 from "@/assets/videos/v5.mp4";

/**
 * 1. Positionnement en escalier — x, y, rotation uniques par carte (absolute par rapport au centre).
 * 2. Parallax différentiel — chaque carte a sa propre `speed`. Plus z-index est élevé (devant),
 *    plus la carte bouge lentement. Ça crée la profondeur 3D.
 * 3. requestAnimationFrame — on lit scrollY puis on applique les transforms dans une RAF.
 */
type Step = {
  src: string;
  label: string;
  // Position de repos (centrée autour du milieu de la scène)
  x: number; // px depuis le centre horizontal
  y: number; // px depuis le centre vertical (négatif = haut)
  rotate: number; // deg
  width: number; // px
  z: number; // z-index — plus haut = plus en avant
  speed: number; // vitesse parallax — bas = devant, haut = arrière
};

const STEPS: Step[] = [
  // Bas-gauche, en arrière → bouge vite
  { src: v1, label: "",  x: -360, y:  180, rotate: -8, width: 360, z: 10, speed: 0.32 },
  // Milieu-gauche, intermédiaire
  { src: v2, label: "", x: -180, y:   60, rotate: -4, width: 380, z: 20, speed: 0.24 },
  // Centre, devant → bouge lentement (héro)
  { src: v3, label: "",   x:    0, y:  -40, rotate:  0, width: 440, z: 40, speed: 0.10 },
  // Milieu-droite
  { src: v4, label: "",  x:  220, y:  -140, rotate:  4, width: 380, z: 30, speed: 0.18 },
  // Haut-droite, en arrière
  { src: v5, label: "",  x:  400, y: -260, rotate:  8, width: 340, z: 15, speed: 0.28 },
];

const FloatingStaircase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) {
        tickingRef.current = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      // Distance scrollée à l'intérieur de la section (0 quand le top entre, augmente ensuite)
      const scrolled = -rect.top;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const step = STEPS[i];
        const parallaxY = scrolled * step.speed;
        // translate(-50%, -50%) pour centrer, puis offset (x, y) de repos, puis parallax
        el.style.transform = `translate3d(calc(-50% + ${step.x}px), calc(-50% + ${step.y - parallaxY}px), 0) rotate(${step.rotate}deg)`;
      });

      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(update);
    };

    update(); // pose initiale
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background"
      style={{ height: "300vh" }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* Heading */}
        <div className="pointer-events-none absolute inset-x-0 top-[8%] z-[100] text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Selected Work — 2026
          </p>
          <h2 className="mt-3 font-serif text-4xl italic text-white/90 md:text-6xl">
            Climbing frames.
          </h2>
        </div>

        {/* Desktop staircase — scène centrée */}
        <div className="relative hidden h-full w-full md:block">
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: step.width,
                zIndex: step.z,
                willChange: "transform",
              }}
              className="group"
            >
              <div
                className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
              >
                <video
                  src={step.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                  <span className="font-serif text-2xl italic text-white/95 drop-shadow-lg md:text-4xl">
                    {step.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 md:text-xs">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stack */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-6 pt-32 pb-12 md:hidden">
          {STEPS.map((c, i) => (
            <div
              key={i}
              style={{ transform: `rotate(${c.rotate / 2}deg)` }}
              className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <video
                src={c.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-4 font-serif text-2xl italic text-white">
                {c.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-[100] -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/30">
          Scroll
        </div>
      </div>
    </section>
  );
};

export default FloatingStaircase;
