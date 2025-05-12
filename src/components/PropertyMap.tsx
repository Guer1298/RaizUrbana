import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { properties } from '../data/properties'

// Icono personalizado más moderno
const icon = new L.Icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
  shadowSize: [41, 41],
})

export function PropertyMap() {
  const center: [number, number] = [2.4448, -76.6147] // Popayán

  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
          Explora Popayán en el mapa
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 animate-fade-in-up">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={true}
            className="h-[500px] w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            {properties.map((prop) =>
              prop.lat && prop.lng ? (
                <Marker
                  key={prop.id}
                  position={[prop.lat, prop.lng]}
                  icon={icon}
                  title={prop.title}
                >
                  <Popup>
                    <div className="text-sm font-medium">
                      <strong>{prop.title}</strong>
                      <br />
                      <span className="text-gray-600">{prop.location}</span>
                      <br />
                      <span className="text-primary font-bold">
                        ${prop.price.toLocaleString()}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
