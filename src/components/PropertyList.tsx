import { properties } from '../data/properties'
import { PropertyCard } from './PropertyCard'

type Filters = {
  type: string
  location: string
  priceRange: [number, number]
  bedrooms: number
  bathrooms: number
}

export function PropertyList({ filters }: { filters: Filters }) {
  const filtered = properties.filter((p) => {
    return (
      (!filters.type || p.type === filters.type) &&
      (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.priceRange || p.price <= filters.priceRange[1]) &&
      (!filters.bedrooms || p.bedrooms >= filters.bedrooms) &&
      (!filters.bathrooms || p.bathrooms >= filters.bathrooms)
    )
  })

  if (filtered.length === 0) {
    return (
      <div className="mt-16 text-center text-gray-600">
        <p className="text-xl font-medium mb-2">No se encontraron propiedades con esos criterios.</p>
        <p className="text-sm text-gray-400">Intenta ajustar tu búsqueda o filtrar por otro tipo de inmueble.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
      {filtered.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
