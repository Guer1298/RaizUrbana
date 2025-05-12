export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Marca */}
        <div>
          <h2 className="text-xl font-bold mb-2">Popayán Urbana</h2>
          <p className="text-sm text-gray-400">Conectamos hogares con historia en la ciudad blanca.</p>
        </div>

        {/* Navegación rápida */}
        <div>
          <h3 className="text-md font-semibold mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-accent transition">Inicio</a></li>
            <li><a href="#propiedades" className="hover:text-accent transition">Propiedades</a></li>
            <li><a href="#contacto" className="hover:text-accent transition">Contacto</a></li>
          </ul>
        </div>

        {/* Legal y firma */}
        <div>
          <p className="text-sm mb-1">© {year} Popayán Urbana. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-500">Diseñado con ❤️ desde Popayán.</p>
        </div>
      </div>
    </footer>
  )
}
