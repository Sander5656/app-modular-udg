import React, { useState } from "react";
import { Search, MapPin, Navigation, Loader2 } from "lucide-react";

// 1. Datos actualizados con coordenadas (lat y lng)
const udgCenters = [
  {
    id: "cucea",
    acronym: "CUCEA",
    name: "Centro Universitario de Ciencias Económico Administrativas",
    address: "Periférico Norte 799, Núcleo Universitario Los Belenes, 45100 Zapopan, Jal.",
    mapsQuery: "CUCEA UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7411,-103.3801",
    coordinates: { lat: 20.7411, lng: -103.3801 }
  },
  {
    id: "cucei",
    acronym: "CUCEI",
    name: "Centro Universitario de Ciencias Exactas e Ingenierías",
    address: "Blvd. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.",
    mapsQuery: "CUCEI UDG Guadalajara",
    link: "https://www.google.com/maps/search/?api=1&query=20.6557,-103.3256",
    coordinates: { lat: 20.6557, lng: -103.3256 }
  },
  {
    id: "cucs",
    acronym: "CUCS",
    name: "Centro Universitario de Ciencias de la Salud",
    address: "Sierra Mojada 950, Independencia Oriente, 44340 Guadalajara, Jal.",
    mapsQuery: "CUCS UDG Guadalajara",
    link: "https://www.google.com/maps/search/?api=1&query=20.6739,-103.3478",
    coordinates: { lat: 20.6739, lng: -103.3478 }
  },
  {
    id: "cuaad",
    acronym: "CUAAD",
    name: "Centro Universitario de Arte, Arquitectura y Diseño",
    address: "Calzada Independencia Norte 5075, Huentitán El Bajo, 44250 Guadalajara, Jal.",
    mapsQuery: "CUAAD UDG Huentitán",
    link: "https://www.google.com/maps/search/?api=1&query=20.7233,-103.3178",
    coordinates: { lat: 20.7233, lng: -103.3178 }
  },
  {
    id: "cugdl",
    acronym: "CUGDL",
    name: "Centro Universitario de Guadalajara",
    address: "Av. de los Maestros 1060, La Normal, 44260 Guadalajara, Jal.",
    mapsQuery: "CUGDL UDG La Normal",
    link: "https://www.google.com/maps/search/?api=1&query=20.6961,-103.3485",
    coordinates: { lat: 20.6961, lng: -103.3485 }
  },
  {
    id: "cucsh",
    acronym: "CUCSH",
    name: "Centro Universitario de Ciencias Sociales y Humanidades",
    address: "Prolongación Licenciado José Luis Parres Arias 150, 45100 Zapopan, Jal.",
    mapsQuery: "CUCSH Belenes UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7385,-103.3815",
    coordinates: { lat: 20.7385, lng: -103.3815 }
  },
  {
    id: "cucba",
    acronym: "CUCBA",
    name: "Centro Universitario de Ciencias Biológicas y Agropecuarias",
    address: "Camino Ramón Padilla Sánchez 2100, Nextipac, 45200 Zapopan, Jal.",
    mapsQuery: "CUCBA UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7489,-103.5120",
    coordinates: { lat: 20.7489, lng: -103.5120 }
  },
  {
    id: "cucosta",
    acronym: "CUCOSTA",
    name: "Centro Universitario de la Costa",
    address: "Av. Universidad 203, Delegación Ixtapa, 48280 Puerto Vallarta, Jal.",
    mapsQuery: "CUCOSTA UDG Puerto Vallarta",
    link: "https://www.google.com/maps/search/?api=1&query=20.7048328,-105.2243686",
    coordinates: { lat: 20.7048328, lng: -105.2243686 }
  }
];

// 2. Función matemática para calcular distancia en KM (Fórmula de Haversine)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// 3. Componente Buscador de Rutas
const RouteFinder = () => {
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [closestCenter, setClosestCenter] = useState(null);
  const [distanceInfo, setDistanceInfo] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!zipCode.trim() || zipCode.length < 4) {
      setError("Ingresa un código postal válido.");
      return;
    }

    setLoading(true);
    setError("");
    setClosestCenter(null);

    try {
      // Intento 1: Búsqueda estricta por CP en México (sin forzar el estado para evitar bloqueos de la API)
      let response = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${zipCode}&country=Mexico&format=json`
      );
      let data = await response.json();

      // Intento 2: Si el Intento 1 falla (arreglo vacío), probamos con una búsqueda de texto libre
      if (!data || data.length === 0) {
        response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${zipCode},+Jalisco,+Mexico&format=json`
        );
        data = await response.json();
      }

      // Si después de ambos intentos no hay nada, entonces sí lanzamos el error
      if (!data || data.length === 0) {
        throw new Error("No pudimos ubicar este Código Postal. Verifica que sea correcto.");
      }

      // Tomamos el primer resultado (el más relevante)
      const userLat = parseFloat(data[0].lat);
      const userLng = parseFloat(data[0].lon);
      setUserLocation({ lat: userLat, lng: userLng });

      let minDistance = Infinity;
      let closest = null;

      // Calculamos la distancia contra todos los centros
      udgCenters.forEach((center) => {
        if (center.coordinates) {
          const distance = calculateDistance(userLat, userLng, center.coordinates.lat, center.coordinates.lng);
          if (distance < minDistance) {
            minDistance = distance;
            closest = center;
          }
        }
      });

      if (closest) {
        setClosestCenter(closest);
        setDistanceInfo(minDistance.toFixed(1));
      } else {
        throw new Error("Error al calcular la ruta.");
      }
    } catch (err) {
      setError(err.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-background border border-border rounded-2xl shadow-sm overflow-hidden mb-12">
      <div className="p-6 bg-primary/5 border-b border-border">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Navigation className="h-5 w-5 text-primary" />
          Encuentra tu centro más cercano
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ingresa tu código postal para trazar la ruta hacia la sede de la UdeG más próxima a ti.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ej. 45100"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
              maxLength={5}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            Buscar ruta
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-3 font-medium">{error}</p>}
      </div>

      {closestCenter && userLocation && (
        <div className="p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <div>
              <p className="text-sm text-blue-600 font-semibold mb-1">¡Ruta encontrada!</p>
              <h4 className="text-lg font-bold text-foreground">
                {closestCenter.acronym} - {closestCenter.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Aproximadamente a <strong>{distanceInfo} km</strong> de distancia en línea recta.
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${closestCenter.coordinates.lat},${closestCenter.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm text-center"
            >
              Abrir en la App
            </a>
          </div>

          <div className="w-full h-80 sm:h-[400px] rounded-xl overflow-hidden border border-border bg-muted">
            <iframe
              title="Ruta al Centro Universitario"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?saddr=${userLocation.lat},${userLocation.lng}&daddr=${closestCenter.coordinates.lat},${closestCenter.coordinates.lng}&output=embed`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// 4. Componente Principal
export default function UdgLocations() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            Red Universitaria UDG
          </h1>
          <p className="text-muted-foreground">
            Encuentra las ubicaciones de los diferentes Centros Universitarios
          </p>
        </div>

        {/* Buscador de Rutas (Sustituye a los iframes múltiples) */}
        <RouteFinder />

        {/* Lista de Centros (Simplificada, sin mapas individuales) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold pt-4">Directorio de Centros</h2>
          {udgCenters.map((center) => (
            <div
              key={center.id}
              className="bg-background border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {center.acronym} <span className="font-normal text-muted-foreground hidden sm:inline">- {center.name}</span>
                </h3>
                <div className="flex items-start gap-2 mt-1 text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="text-sm">{center.address}</p>
                </div>
              </div>

              <a
                href={center.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 text-sm rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold transition text-center"
              >
                Ver en Maps
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}