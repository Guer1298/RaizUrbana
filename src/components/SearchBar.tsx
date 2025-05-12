import { Dispatch, SetStateAction } from 'react'
import { Search, MapPin, Home, BedDouble, Bath } from 'lucide-react'

interface SearchBarProps {
  filters: any
  setFilters: Dispatch<SetStateAction<any>>
}

export function SearchBar({ filters, setFilters }: SearchBarProps) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-12 animate-fade-in-up border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* Ubicación */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Ubicación (ej: La Esmeralda)"
            className="pl-10 w-full py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>

        {/* Tipo */}
        <div className="relative">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <select
            className="pl-10 w-full py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Tipo</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Lote">Lote</option>
          </select>
        </div>

        {/* Precio */}
        <input
          type="number"
          placeholder="Precio máx (millones)"
          className="w-full py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setFilters({ ...filters, priceRange: [0, Number(e.target.value) * 1000000] })}
        />

        {/* Habitaciones */}
        <div className="relative">
          <BedDouble className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="number"
            placeholder="Min Habitaciones"
            className="pl-10 w-full py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
          />
        </div>

        {/* Baños */}
        <div className="relative">
          <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="number"
            placeholder="Min Baños"
            className="pl-10 w-full py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilters({ ...filters, bathrooms: Number(e.target.value) })}
          />
        </div>
      </div>
    </div>
  )
}
