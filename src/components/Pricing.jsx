export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Tarifs simples et transparents</h2>
          <p className="mt-2 text-gray-600">Commencez gratuitement, passez à la vitesse supérieure quand vous êtes prêt.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8">
            <p className="text-sm font-semibold text-blue-600">Starter</p>
            <h3 className="mt-2 text-3xl font-extrabold">0 €</h3>
            <p className="mt-2 text-gray-600">Pour lancer votre activité sereinement.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• 5 devis / mois</li>
              <li>• 5 factures / mois</li>
              <li>• Suivi basique des dépenses</li>
              <li>• Export PDF</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center rounded-md border px-4 py-2 font-semibold hover:bg-gray-50">Essayer</a>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">Pro</p>
            <h3 className="mt-2 text-3xl font-extrabold">19 €<span className="text-base font-semibold text-gray-500">/mois</span></h3>
            <p className="mt-2 text-gray-600">Pour gérer votre activité au quotidien.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Devis & factures illimités</li>
              <li>• Suivi des paiements & relances</li>
              <li>• Dépenses avec pièces jointes</li>
              <li>• Export comptable</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center rounded-md bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700">Choisir Pro</a>
          </div>

          <div className="rounded-2xl border bg-white p-8">
            <p className="text-sm font-semibold text-blue-600">Premium</p>
            <h3 className="mt-2 text-3xl font-extrabold">39 €<span className="text-base font-semibold text-gray-500">/mois</span></h3>
            <p className="mt-2 text-gray-600">Pour les équipes et besoins avancés.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Multi-utilisateurs</li>
              <li>• Automatisations & intégrations</li>
              <li>• Support prioritaire</li>
              <li>• Rapprochement bancaire</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center rounded-md border px-4 py-2 font-semibold hover:bg-gray-50">Nous contacter</a>
          </div>
        </div>
      </div>
    </section>
  )
}
