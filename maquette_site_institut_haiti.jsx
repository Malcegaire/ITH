import React from "react";

export default function InstitutInformatiqueHaiti() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Institut Informatique d’Haïti</h1>
        <p className="text-lg">Former les talents numériques de demain</p>
      </header>

      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Notre Vision</h2>
        <p>
          Offrir une formation informatique de qualité, accessible et tournée vers l’avenir, 
          pour former des professionnels compétents et contribuer à la transformation numérique d’Haïti.
        </p>
      </section>

      <section className="py-8 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Nos Programmes</h2>
        <ul className="list-disc list-inside">
          <li>Diplôme technique en développement logiciel</li>
          <li>Certificats en cybersécurité, data science, dev mobile</li>
          <li>Formations en entreprise</li>
        </ul>
      </section>

      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Pourquoi investir avec nous ?</h2>
        <p>
          En rejoignant notre initiative, vous participez à un projet à fort impact social et économique. 
          Notre modèle garantit un retour sur investissement à moyen terme, une gouvernance partagée et une grande visibilité publique.
        </p>
      </section>

      <section className="py-8 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Pour toute information ou pour discuter d’un partenariat, contactez-nous à :</p>
        <p className="mt-2 font-semibold">contact@institut-informatique.ht</p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Institut Informatique d’Haïti. Tous droits réservés.
      </footer>
    </div>
  );
}
