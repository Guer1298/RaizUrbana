'use client'

import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { SearchBar } from '@/components/SearchBar'
import { PropertyList } from '@/components/PropertyList'
import { PropertyMap } from '@/components/PropertyMap'

export default function Home() {
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: [0, 1000000000],
    bedrooms: 0,
    bathrooms: 0,
  })

  return (
    <div className="relative overflow-x-hidden bg-white text-gray-900">
      {/* HERO VISUAL */}
      <section className="relative z-0">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* SECCIÓN DE BÚSQUEDA + PROPIEDADES */}
      <section
        id="propiedades"
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-28"
        aria-labelledby="heading-propiedades"
      >
        {/* Fondo sutil de transición */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/0 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          id="heading-propiedades"
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight"
        >
          Propiedades destacadas
        </h2>

        <div className="animate-fade-in-up">
          <SearchBar filters={filters} setFilters={setFilters} />
          <PropertyList filters={filters} />
        </div>
      </section>

      {/* MAPA INTERACTIVO */}
      <section
        id="mapa"
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-28"
        aria-labelledby="heading-mapa"
      >
        <h2
          id="heading-mapa"
          className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800 tracking-tight"
        >
          Explora Popayán desde el mapa
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
          <PropertyMap />
        </div>
      </section>
    </div>
  )
}
