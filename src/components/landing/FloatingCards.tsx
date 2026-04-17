import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import v1 from "@/assets/videos/v1.mp4";
import v2 from "@/assets/videos/v2.mp4";
import v3 from "@/assets/videos/v3.mp4";
import v4 from "@/assets/videos/v4.mp4";
import v5 from "@/assets/videos/v5.mp4";

type CardConfig = {
  src: string;
  label: string;
  // Position on a diagonal staircase (top-left → bottom-right)
  // Values are % of the sticky stage
  left: string;
  top: string;
  width: string; // tailwind width
  rotate: number;
  z: number;
  // Parallax speed multiplier — bigger = faster vertical travel on scroll
  speed: number;
};

const CARDS: CardConfig[] = [
  {
    src: v1,
    label: "Stock",
    left: "8%",
    top: "6%",
    width: "w-[16vw] max-w-[220px]",
    rotate: -6,
    z: 10,
    speed: -260,
  },
  {
    src: v2,
    label: "Profil",
    left: "28%",
    top: "22%",
    width: "w-[18vw] max-w-[260px]",
    rotate: -3,
    z: 20,
    speed: -160,
  },
  {
    src: v3,
    label: "Inventaire",
    left: "48%",
    top: "40%",
    width: "w-[20vw] max-w-[300px]",
    rotate: 0,
    z: 40,
    speed: -60,
  },
  {
    src: v4,
    label: "Mouvements",
    left: "66%",
    top: "56%",
    width: "w-[18vw] max-w-[260px]",
    rotate: 4,
    z: 30,
    speed: 60,
  },
  {
    src: v5,
    label: "Aurali",
    left: "82%",
    top: "70%",
    width: "w-[16vw] max-w-[220px]",
    rotate: 7,
    z: 15,
    speed: 180,
  },
];

const Card = ({
  card,
  progress,
  index,
}: {
  card: CardConfig;
  progress: MotionValue<number>;
  index: number;
}) => {
  // Parallax: each card travels a different vertical distance
  const y = useTransform(progress, [0, 1], [card.speed, -card.speed]);
  const rotate = useTransform(
    progress,
    [0, 1],
    [card.rotate - 2, card.rotate + 2]
  );
  const scale = useTransform(progress, [0, 0.5, 1], [0.94, 1, 0.97]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: card.left,
        top: card.top,
        y,
        rotate,
        scale,
        zIndex: card.z,
      }}
      className="will-change-transform"
    >
      <motion.div
        whileHover={{ scale: 1.05, filter: "brightness(1.15)", zIndex: 50 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className={`group relative ${card.width} aspect-[9/19] overflow-hidden rounded-[28px] shadow-card ring-1 ring-white/10 backdrop-blur-sm`}
      >
        <video
          src={card.src}
          autoPlay
          loop
          muted
          playsInline
          preload={index < 3 ? "auto" : "metadata"}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center pb-4">
          <span className="font-serif text-xl italic tracking-tight text-white drop-shadow-lg md:text-2xl">
            {card.label}.
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FloatingCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative h-[260vh] w-full bg-background"
      aria-label="Featured work"
    >
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        {/* Heading */}
        <div className="absolute top-10 z-[5] text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            {/* Selected Work — 2026 */}
          </p>
          <h2 className="mt-3 font-serif text-5xl italic text-white/90 md:text-6xl">
            Envie de tester Auraliflow? 
          </h2>
        </div>

        {/* Desktop: diagonal staircase */}
        <div className="relative hidden h-full w-full md:block">
          {CARDS.map((card, i) => (
            <Card
              key={`${card.label}-${i}`}
              card={card}
              progress={scrollYProgress}
              index={i}
            />
          ))}
        </div>

        {/* Mobile: stacked vertical */}
        <div className="flex h-full w-full flex-col items-center gap-6 overflow-y-auto px-6 pb-20 pt-40 md:hidden">
          {CARDS.map((card, i) => (
            <div
              key={`m-${card.label}-${i}`}
              className="relative aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[28px] shadow-card ring-1 ring-white/10"
            >
              <video
                src={card.src}
                autoPlay
                loop
                muted
                playsInline
                preload={i < 2 ? "auto" : "metadata"}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-center font-serif text-2xl italic text-white">
                {card.label}.
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingCards;
