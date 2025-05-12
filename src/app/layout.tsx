// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Popayán Urbana | Portal Inmobiliario',
  description:
    'Compra, arrienda o invierte en Popayán con asesoría profesional, tecnología y experiencia local. Encuentra propiedades confiables y apoyo integral.',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Popayán Urbana | Inmobiliaria Profesional',
    description:
      'Explora casas, apartamentos y lotes en Popayán con asesoría experta y herramientas digitales. Seguridad, confianza y eficiencia en un solo lugar.',
    url: 'https://popayanurbana.com',
    siteName: 'Popayán Urbana',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 antialiased tracking-tight">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
