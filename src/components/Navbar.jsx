import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Ressources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold text-gray-900">FlamCompta</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <a href="/test" className="text-gray-600 hover:text-gray-900">Test backend</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Se connecter</a>
            <a href="#cta" className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Essayer gratuitement</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-md hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="/test" className="px-2 py-2 rounded-md hover:bg-gray-100">Test backend</a>
              <div className="flex gap-2 px-2 pt-2">
                <a href="#" className="flex-1 text-center text-sm font-medium px-3 py-2 rounded-md border">Se connecter</a>
                <a href="#cta" className="flex-1 text-center text-sm font-semibold px-3 py-2 rounded-md bg-blue-600 text-white">Essayer</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
