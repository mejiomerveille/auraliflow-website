import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BusinessCardProps {
  name: string;
  slug: string;
  logoUrl: string | null;
  mockup: string;
  tagline: string;
  index: number;
}

export const BusinessCard = ({ name, slug, logoUrl, mockup, tagline, index }: BusinessCardProps) => {
  return (
    <motion.a
      href={`https://${slug}.auraliflow.com`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden bg-secondary rounded-sm shadow-card hover:shadow-elegant transition-all duration-700"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={mockup}
          alt={`${name} — boutique propulsée par Aurali Flow`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="p-6 md:p-7 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground truncate group-hover:text-primary transition-colors duration-500">
            {name}
          </h3>
          <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {tagline}
          </p>
        </div>
        {logoUrl ? (
          <img src={logoUrl} alt="" className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-lg font-semibold shrink-0">
            {name.trim().charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </motion.a>
  );
};
