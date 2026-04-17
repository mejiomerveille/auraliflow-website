import { motion } from "framer-motion";

const CompareSection = () => (
  
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
        <img
          src="/images/sans-auraliflow.jpg"
          alt="Gestion sans Auraliflow"
          className="h-full w-full object-cover opacity-60 grayscale"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <img
          src="/images/avec-auraliflow.jpg"
          alt="Gestion avec Auraliflow"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 px-6 max-w-6xl">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            [ SANS AURALIFLOW ]
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Gestion désorganisée
          </h2>

          <h3 className="text-5xl md:text-6xl font-extrabold">
            COMMERCE FRAGILE
          </h3>

          <p className="mt-6 text-gray-600 max-w-md">
            Avant Auraliflow, vous gérez vos ventes, stocks et finances de manière manuelle,
            ce qui entraîne erreurs, pertes et manque de visibilité.
          </p>

          <div className="w-10 h-1 bg-red-500 mt-6 mx-auto md:mx-0" />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            [ AVEC AURALIFLOW ]
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Gestion optimisée
          </h2>

          <h3 className="text-5xl md:text-6xl font-extrabold">
            COMMERCE PERFORMANT
          </h3>

          <p className="mt-6 text-gray-600 max-w-md">
            Avec Auraliflow, suivez vos performances en temps réel, gérez efficacement
            vos stocks et prenez des décisions intelligentes pour développer votre activité.
          </p>

          <div className="w-10 h-1 bg-green-500 mt-6 mx-auto md:mx-0" />
        </motion.div>

      </div>
    </section>
  );


export default CompareSection;