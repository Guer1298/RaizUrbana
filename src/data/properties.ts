export type Property = {
    id: number
    title: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    type: 'Casa' | 'Apartamento' | 'Lote'
    imgUrl: string
    description?: string
    area?: number // en m²
  }
  
  export const properties: Property[] = [
    {
      id: 1,
      title: 'Casa colonial restaurada en el Centro Histórico',
      price: 420000000,
      location: 'Centro Histórico, Popayán',
      bedrooms: 4,
      bathrooms: 3,
      type: 'Casa',
      imgUrl: '/images/colonial.jpg',
      description: 'Hermosa casa colonial con patio central, acabados originales, ideal para vivienda o negocio turístico.',
      area: 320
    },
    {
      id: 2,
      title: 'Apartamento moderno cerca a la Universidad del Cauca',
      price: 280000000,
      location: 'Camilo Torres, Popayán',
      bedrooms: 3,
      bathrooms: 2,
      type: 'Apartamento',
      imgUrl: '/images/apartamento.jpg',
      description: 'Espacioso apartamento con parqueadero, ascensor, y balcón. Ideal para estudiantes o familias jóvenes.',
      area: 98
    },
    {
      id: 3,
      title: 'Lote urbanizable en expansión urbana',
      price: 95000000,
      location: 'Zona Norte, Popayán',
      bedrooms: 0,
      bathrooms: 0,
      type: 'Lote',
      imgUrl: '/images/lote2.jpg',
      description: 'Terreno plano de 300 m² con disponibilidad de servicios públicos. Perfecto para inversión residencial o comercial.',
      area: 300
    },
    {
      id: 4,
      title: 'Apartamento amoblado en Torres de San Eduardo',
      price: 235000000,
      location: 'San Eduardo, Popayán',
      bedrooms: 2,
      bathrooms: 2,
      type: 'Apartamento',
      imgUrl: '/images/apartamento1.png',
      description: 'Moderno, con vigilancia 24h, piscina y salón comunal. Opción de entrega amoblado.',
      area: 80
    },
    {
      id: 5,
      title: 'Casa amplia con zona verde en La Esmeralda',
      price: 360000000,
      location: 'La Esmeralda, Popayán',
      bedrooms: 5,
      bathrooms: 4,
      type: 'Casa',
      imgUrl: '/images/casa.jpg',
      description: 'Ideal para familias grandes. Zona tranquila, con jardín interno y parqueadero doble.',
      area: 250
    }
  ]