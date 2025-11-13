const faqs = [
  {
    q: 'Puis-je créer des factures conformes à la TVA ?',
    a: 'Oui. Les modèles intègrent les mentions légales, la numérotation séquentielle et la gestion des taux de TVA.'
  },
  {
    q: 'Comment se passe l\'export comptable ?',
    a: 'Export des écritures au format standard pour votre expert-comptable, avec journaux de ventes et d\'achats.'
  },
  {
    q: 'Y a-t-il une période d\'essai ?',
    a: 'Vous pouvez utiliser la version Starter gratuitement sans limite de temps.'
  }
]

export default function FAQ() {
  return (
    <section id="resources" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Questions fréquentes</h2>
        <div className="mt-10 divide-y rounded-2xl border bg-white">
          {faqs.map(({q,a}) => (
            <details key={q} className="group open:bg-gray-50 p-6">
              <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-gray-900">
                {q}
                <span className="ml-4 shrink-0 rounded-full border px-2 py-0.5 text-xs text-gray-600 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
