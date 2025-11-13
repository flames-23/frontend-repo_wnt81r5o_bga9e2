import { FileText, Receipt, Coins, BarChart3, Users2, Wallet } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Devis & factures',
    desc: 'Créez des devis et transformez-les en factures en un clic. Numérotation conforme et mentions légales automatiques.'
  },
  {
    icon: Users2,
    title: 'Clients',
    desc: 'Gérez votre base clients, adresses, conditions de paiement et historique des documents.'
  },
  {
    icon: Receipt,
    title: 'Dépenses',
    desc: 'Enregistrez vos achats, catégorisez, joignez les justificatifs et suivez votre marge.'
  },
  {
    icon: Coins,
    title: 'TVA & statut',
    desc: 'Suivi de la TVA (franchise/collecte), gestion des taux et des régimes simplifiés.'
  },
  {
    icon: Wallet,
    title: 'Encaissements',
    desc: 'Suivi des paiements, relances automatiques et rapprochement bancaire simplifié.'
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord',
    desc: 'Vue claire sur CA, charges, résultat et prévision de trésorerie.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Tout pour démarrer et piloter</h2>
        <p className="mt-2 text-gray-600">Des outils simples, pensés pour les premières années.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border p-6 bg-white hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
