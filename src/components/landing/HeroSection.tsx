import { motion } from "framer-motion";
import heroImg from "@/assets/hero-construction.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-warm-cream pt-28 pb-16 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-warm-tan/20 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-10">
          
          {/* Left */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-foreground/70 text-xs md:text-sm leading-relaxed max-w-xs"
          >
            Né au cœur de <span className="font-semibold text-foreground">Yaoundé</span>, 
            nous sommes une fintech camerounaise dédiée aux commerçants.
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.02] tracking-tight text-center"
          >
            Gérez votre commerce{" "}
            <span className="text-yellow-500">en un flux</span> aujourd'hui
          </motion.h1>

          {/* Right */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 text-foreground/70 text-xs md:text-sm leading-relaxed max-w-xs lg:ml-auto"
          >
            Une application mobile pensée pour les commerçants ambitieux qui veulent piloter stocks, ventes et marges en temps réel.
          </motion.p>
        </div>

        {/* IMAGE */}
        <div className="relative mt-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <div className="hero-clip overflow-hidden rounded-xl">
            <img
              src={heroImg}
              alt="Construction worker using tools"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>

        {/* META ROW */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row animate-fade-up" style={{ animationDelay: "0.5s" }}>
          
          {/* Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[avatar1, avatar2, avatar3].map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              +1,500 utilisateurs
            </span>
          </div>

          {/* Countries */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Présent dans 4 pays
            </span>
            <div className="flex -space-x-2">
              {["CM", "NG", "GH", "CI"].map((c, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white bg-primary"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;