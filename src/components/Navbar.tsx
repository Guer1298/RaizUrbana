'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 transition-all duration-300"
      role="navigation"
      aria-label="Barra de navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between animate-fade-in-down">
        {/* Branding / Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary hover:text-black transition-colors duration-200">
          Popayán Urbana
        </Link>

        {/* Menú principal */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-primary transition-colors duration-150">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#propiedades" className="hover:text-primary transition-colors duration-150">
              Propiedades
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className="hover:text-primary transition-colors duration-150">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
