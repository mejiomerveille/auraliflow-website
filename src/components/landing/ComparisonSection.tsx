import { useEffect, useRef, useState } from "react";
import withoutImg from "@/assets/without-auraliflow.jpg";
import withImg from "@/assets/with-auraliflow-base.jpg";
import appScreen from "@/assets/auraliflow-app.png";

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Apart at scroll start, together when section centered
  const offset = (1 - progress) * 18;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center  overflow-hidden bg-aurali py-16"
    >
      {/* IMAGES at outer edges, fading into background */}
      <div className="grid w-full grid-cols-2 items-center gap-0">
        {/* LEFT — without */}
        <div
          className="relative flex aspect-square max-h-[80vh] w-full justify-start will-change-transform"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          <div className="relative aspect-square h-full">
            <img
              src={withoutImg}
              alt="Commerçant stressé sans Auraliflow"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,transparent_38%,hsl(var(--aurali))_82%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-aurali via-aurali/85 to-transparent" />
        </div>

        {/* RIGHT — with, phone screen overlay */}
        <div
          className="relative flex aspect-square max-h-[80vh] w-full justify-end will-change-transform"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {/* Wrapper sized exactly to the rendered (contained, square) image
              so overlay percentages map to the source image. */}
          <div className="relative aspect-square h-full">
            <img
              src={withImg}
              alt="Commerçant souriant tenant un smartphone Auraliflow"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            {/* Phone screen overlay (source coords: 37-64% x, 46-94% y) */}
            <div
              className="pointer-events-none absolute overflow-hidden rounded-[10px]"
              style={{
                left: "37%",
                top: "46%",
                width: "27%",
                height: "48%",
              }}
            >
              <img
                src={appScreen}
                alt="Application Auraliflow"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_0%,transparent_38%,hsl(var(--aurali))_82%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-aurali via-aurali/85 to-transparent" />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <div className="grid w-full max-w-5xl grid-cols-2 gap-10 md:gap-20">
          {/* SANS */}
          <div className="flex flex-col items-end text-right">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] text-white">
              [ SANS AURALIFLOW ]
            </p>
            <h3 className="font-serif text-2xl italic text-aurali-foreground/85 md:text-4xl">
              Gestion désorganisée
            </h3>
            <h2 className="mt-1 text-4xl font-black leading-[0.95] tracking-tight text-aurali-foreground md:text-5xl">
              COMMERCE
              <br />
              FRAGILE
            </h2>
            <p className="mt-5 max-w-[20rem] text-sm leading-relaxed text-aurali-foreground/75 md:text-[15px]">
              Avant Auraliflow, vous gérez vos stocks, ventes et finances de manière manuelle, avec des erreurs, des pertes et un manque de visibilité sur votre activité.
            </p>
            <div className="mt-5 h-[3px] w-12 bg-bad" />
          </div>

          {/* AVEC */}
          <div className="flex flex-col items-start text-left">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] text-white">
              [ AVEC AURALIFLOW ]
            </p>
            <h3 className="font-serif text-2xl italic text-aurali-foreground/85 md:text-4xl">
              Gestion optimisée
            </h3>
            <h2 className="mt-1 text-4xl font-black leading-[0.95] tracking-tight text-aurali-foreground md:text-5xl">
              COMMERCE
              <br />
              PERFORMANT
            </h2>
            <p className="mt-5 max-w-[20rem] text-sm leading-relaxed text-aurali-foreground/75 md:text-[15px]">
              Avec Auraliflow, pilotez votre activité en temps réel, suivez vos ventes, gérez vos stocks efficacement et prenez des décisions éclairées pour faire grandir votre business.
            </p>
            <div className="mt-5 h-[3px] w-12 bg-good" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
