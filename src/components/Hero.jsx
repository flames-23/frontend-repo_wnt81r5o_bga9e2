import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="hero">
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50" />
      <div className="absolute -top-1/2 right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Nouveau • Créé pour les créateurs
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Facturation & comptabilité simples pour bien démarrer
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Créez des devis, envoyez des factures, suivez vos dépenses et restez serein face aux obligations comptables. Pensé pour les micro-entreprises et les startups en lancement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="cta">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
                Essayer gratuitement
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border px-6 py-3 font-semibold hover:bg-gray-50">
                Voir les fonctionnalités
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Conforme TVA</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Export comptable</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> Factures illimitées</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-3 border-r p-4 bg-gray-50">
                  <div className="h-3 w-20 bg-gray-200 rounded mb-4" />
                  <div className="space-y-2">
                    {['Tableau de bord','Devis','Factures','Dépenses','TVA','Clients','Paramètres'].map(i => (
                      <div key={i} className="h-8 rounded-md flex items-center px-3 hover:bg-gray-100 text-sm text-gray-700">{i}</div>
                    ))}
                  </div>
                </div>
                <div className="col-span-9 p-4">
                  <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
                  <div className="grid grid-cols-2 gap-3">
                    {Array.from({length:6}).map((_,i)=> (
                      <div key={i} className="h-24 rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border rounded-xl shadow p-4">
              <p className="text-sm font-semibold">Dernière facture</p>
              <p className="text-xs text-gray-600">Payée • 1 200,00 €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
