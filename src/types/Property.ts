// src/types/Property.ts
export interface Property {
    id: number
    title: string
    location: string
    price: number
    imgUrl: string
    lat: number
    lng: number
    bedrooms?: number
    bathrooms?: number
    type?: string
  }
  