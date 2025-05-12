import { MapPin, ArrowRight } from 'lucide-react'

export function PropertyCard({ property }: { property: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.01]">
      {/* Imagen de la propiedad */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={property.imgUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido textual */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>

        <p className="text-lg font-bold text-primary mb-4">
          ${property.price.toLocaleString()}
        </p>

        <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-medium py-2 px-4 rounded-full hover:bg-gray-900 transition duration-300">
          Ver más <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
