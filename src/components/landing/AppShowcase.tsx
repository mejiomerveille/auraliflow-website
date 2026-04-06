import appProduct from "@/assets/app-product.jpeg";
import appStock from "@/assets/app-stock.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import person1 from "@/assets/person-using-app-1.jpg";
import person2 from "@/assets/person-using-app-2.jpg";

const AppShowcase = () => (
  <section className="py-24 md:py-32 bg-warm-cream relative overflow-hidden">
    <div className="container px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-[0.2em] uppercase">L'application</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
          Conçue pour le terrain
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Une interface intuitive pensée pour les commerçants qui veulent aller vite.
        </p>
      </div>

      {/* Feature row 1 — Dashboard + person */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative">
          <img
            src={person1}
            alt="Commerçante utilisant Aurali Flow"
            className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
            loading="lazy"
            width={800}
            height={1024}
          />
          {/* Floating phone overlay */}
          <div className="absolute -bottom-8 -right-4 md:right-8 w-[180px] md:w-[200px] rounded-[2rem] border-[6px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden">
            <img src={appDashboard} alt="Dashboard Aurali Flow" className="w-full" loading="lazy" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Tableau de bord complet
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Chiffre d'affaires, marge brute, stock total et ruptures — tout est visible en un coup d'œil. 
            Prenez des décisions éclairées avec des données en temps réel.
          </p>
          <ul className="space-y-3">
            {["Chiffre d'affaire en temps réel", "Alertes rupture de stock", "Actions rapides (vente, arrivage, produit)"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Feature row 2 — Stock management */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Gestion des arrivages simplifiée
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Enregistrez vos arrivages en quelques clics : produits, quantités, fournisseurs, frais additionnels. 
            Le prix de revient est calculé automatiquement.
          </p>
          <ul className="space-y-3">
            {["Sélection produit rapide", "Frais additionnels intégrés", "Historique fournisseur"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 relative">
          <img
            src={person2}
            alt="Commerçant gérant ses stocks"
            className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
            loading="lazy"
            width={800}
            height={1024}
          />
          <div className="absolute -bottom-8 -left-4 md:left-8 w-[180px] md:w-[200px] rounded-[2rem] border-[6px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden">
            <img src={appStock} alt="Arrivage Aurali Flow" className="w-full" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Feature row 3 — Product creation */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-[260px] md:w-[300px] rounded-[3rem] border-[8px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
            <img src={appProduct} alt="Création produit Aurali Flow" className="w-full" loading="lazy" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Ajoutez vos produits facilement
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Désignation, catégorie, SKU, prix de vente, seuil d'alerte — configurez votre catalogue en quelques secondes. 
            Activez ou désactivez un produit à tout moment.
          </p>
          <ul className="space-y-3">
            {["Catégories personnalisées", "Code barre / SKU", "Seuils d'alerte automatiques"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AppShowcase;
