export function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/popayan.jpg')" }}
    >
      {/* Capa oscura para legibilidad y enfoque emocional */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80 z-0"
        aria-hidden="true"
      />

      {/* Contenido central */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
          Vive el <span className="text-accent">encanto de Popayán</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-lg max-w-3xl mx-auto">
          Arquitectura colonial, cultura viva y hogares con historia. No solo compres una casa — hazla tuya.
        </p>

        <a
          href="#propiedades"
          className="inline-block bg-accent text-black text-base sm:text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          Ver propiedades disponibles
        </a>

        {/* Scroll down indicator */}
        <div className="mt-16 animate-bounce text-white opacity-70">
          <a href="#propiedades" aria-label="Desplázate hacia abajo" className="text-2xl">
            ↓
          </a>
        </div>
      </div>
    </section>
  )
}

