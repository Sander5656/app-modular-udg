import React, { useState } from "react";
import { Search, MapPin, Navigation, Loader2, Bus, TrainFront } from "lucide-react";

const udgCenters = [
  // --- CENTROS METROPOLITANOS (TEMÁTICOS Y MULTITEMÁTICOS) ---
  {
    id: "cucea",
    acronym: "CUCEA",
    name: "Centro Universitario de Ciencias Económico Administrativas",
    address: "Periférico Norte 799, Núcleo Universitario Los Belenes, 45100 Zapopan, Jal.",
    mapsQuery: "CUCEA UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7411,-103.3801",
    coordinates: { lat: 20.7411, lng: -103.3801 },
    transport: {
      massTransit: ["Mi Macro Periférico: Estación CUCEA", "Línea 3 Tren Ligero: Estación Mercado del Mar (conexión)"],
      busRoutes: ["T08 (634)", "C73 (15)", "C81 (641)", "C82 (641)", "C85 (631)", "C119 (30)", "T16B-C02 (275-F)", "MP-A01", "MP-C01"]
    }
  },
  {
    id: "cucei",
    acronym: "CUCEI",
    name: "Centro Universitario de Ciencias Exactas e Ingenierías",
    address: "Blvd. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.",
    mapsQuery: "CUCEI UDG Guadalajara",
    link: "https://www.google.com/maps/search/?api=1&query=20.6557,-103.3256",
    coordinates: { lat: 20.6557, lng: -103.3256 },
    transport: {
      massTransit: ["Línea 3 Tren Ligero: Estación CUCEI y Estación Plaza Revolución"],
      busRoutes: ["C05 (136)", "C06 (231-C)", "C17 (207)", "C33 (142-A)", "C52 (615)", "T09 (604)", "T11A (51)", "T13C (178)", "T15 (231)"]
    }
  },
  {
    id: "cucs",
    acronym: "CUCS",
    name: "Centro Universitario de Ciencias de la Salud",
    address: "Sierra Mojada 950, Independencia Oriente, 44340 Guadalajara, Jal.",
    mapsQuery: "CUCS UDG Guadalajara",
    link: "https://www.google.com/maps/search/?api=1&query=20.6739,-103.3478",
    coordinates: { lat: 20.6739, lng: -103.3478 },
    transport: {
      massTransit: ["Mi Macro Calzada: Estación Juan Álvarez / Alameda", "Línea 2 Tren Ligero: Estación Belisario Domínguez"],
      busRoutes: ["C02 (45)", "C16 (603-B)", "C21 (603-A)", "C33 (142-A)", "C66 (258)", "T07 (30)", "T15 (231)", "T18 (622)"]
    }
  },
  {
    id: "cuaad",
    acronym: "CUAAD",
    name: "Centro Universitario de Arte, Arquitectura y Diseño",
    address: "Calzada Independencia Norte 5075, Huentitán El Bajo, 44250 Guadalajara, Jal.",
    mapsQuery: "CUAAD UDG Huentitán",
    link: "https://www.google.com/maps/search/?api=1&query=20.7233,-103.3178",
    coordinates: { lat: 20.7233, lng: -103.3178 },
    transport: {
      massTransit: ["Mi Macro Calzada: Estación Mirador (Terminal Norte)", "Mi Macro Periférico: Estación Zoológico"],
      busRoutes: ["C01 (39-A)", "C16 (603-B)", "C43 (636)", "C69 (37)", "T08 (634)", "Alimentadoras A03, A06 y A16"]
    }
  },
  {
    id: "cugdl",
    acronym: "CUGDL",
    name: "Centro Universitario de Guadalajara",
    address: "Av. de los Maestros 1060, La Normal, 44260 Guadalajara, Jal.",
    mapsQuery: "CUGDL UDG La Normal",
    link: "https://www.google.com/maps/search/?api=1&query=20.6961,-103.3485",
    coordinates: { lat: 20.6961, lng: -103.3485 },
    transport: {
      massTransit: ["Línea 3 Tren Ligero: Estación La Normal (CETRAM)"],
      busRoutes: ["T07 (30)", "T09 (604)", "T14A (50)", "T15 (231)", "T16B (275)", "C33 (142-A)", "C43 (636)", "C54 (500)", "C66 (258)", "C107 (110)"]
    }
  },
  {
    id: "cucsh",
    acronym: "CUCSH",
    name: "Centro Universitario de Ciencias Sociales y Humanidades",
    address: "Prolongación Licenciado José Luis Parres Arias 150, 45100 Zapopan, Jal.",
    mapsQuery: "CUCSH Belenes UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7385,-103.3815",
    coordinates: { lat: 20.7385, lng: -103.3815 },
    transport: {
      massTransit: ["Mi Macro Periférico: Estación Periférico Belenes", "Línea 3 Tren Ligero: Estación Periférico Belenes"],
      busRoutes: ["T08 (634)", "T16B-C02 (275-F)", "C73 (15)", "C81 (641)", "C82 (641)", "C85 (631)", "C119 (30)"]
    }
  },
  {
    id: "cucba",
    acronym: "CUCBA",
    name: "Centro Universitario de Ciencias Biológicas y Agropecuarias",
    address: "Camino Ramón Padilla Sánchez 2100, Nextipac, 45200 Zapopan, Jal.",
    mapsQuery: "CUCBA UDG Zapopan",
    link: "https://www.google.com/maps/search/?api=1&query=20.7489,-103.5120",
    coordinates: { lat: 20.7489, lng: -103.5120 },
    transport: {
      massTransit: ["Conexión desde Mi Macro Periférico (Estación Ciudad Judicial / Vallarta)"],
      busRoutes: ["C110 (629 La Venta - CUCBA)", "T17-C01 (632-A)", "Rutas River / Autobuses Vallarta Plus (Parada Las Tortugas + Bus CUCBA)"]
    }
  },
  {
    id: "cutonala",
    acronym: "CUTONALÁ",
    name: "Centro Universitario de Tonalá",
    address: "Av. Nuevo Periférico 555, Ejido San José Tateposco, 45425 Tonalá, Jal.",
    mapsQuery: "CUTONALA UDG Tonala",
    link: "https://www.google.com/maps/search/?api=1&query=20.5665,-103.2266",
    coordinates: { lat: 20.5665, lng: -103.2266 },
    transport: {
      massTransit: ["Conexión desde Línea 3 Tren Ligero (Estación Central de Autobuses)"],
      busRoutes: ["C01 (CUTonalá - Central Nueva)", "C46 (Altamira - CUTonalá)", "C105 (644-B CUTonalá)", "T19-C03 (380 Nuevo Periférico)"]
    }
  },
  {
    id: "cutlajomulco",
    acronym: "CUTLAJOMULCO",
    name: "Centro Universitario de Tlajomulco",
    address: "Carretera Tlajomulco - Santa Fe Km. 3.5 No. 595, Lomas de Tejeda, 45640 Tlajomulco de Zúñiga, Jal.",
    mapsQuery: "CUTLAJOMULCO UDG Tlajomulco",
    link: "https://www.google.com/maps/search/?api=1&query=20.4678,-103.4150",
    coordinates: { lat: 20.4678, lng: -103.4150 },
    transport: {
      massTransit: ["Línea 4 Tren Ligero: Estación Tlajomulco Centro / CUTlajomulco"],
      busRoutes: ["C125 (186 Tlajomulco)", "C128 (182)", "T13A-C02 (176-A Santa Fe)", "Alimentadoras Línea 4"]
    }
  },
  {
    id: "cutlaquepaque",
    acronym: "CUTLAQUEPAQUE",
    name: "Centro Universitario de Tlaquepaque",
    address: "Cerro del Cuatro, 45599 San Pedro Tlaquepaque, Jal.",
    mapsQuery: "CUTLAQUEPAQUE UDG Cerro del Cuatro",
    link: "https://www.google.com/maps/search/?api=1&query=20.6052,-103.3592",
    coordinates: { lat: 20.6052, lng: -103.3592 },
    transport: {
      massTransit: ["Mi Macro Calzada: Estación Miravalle (conexión)", "Mi Macro Periférico: Estación Artesanos / Adolf Horn"],
      busRoutes: ["C49 (623-A)", "C50 (623)", "C111 (176)", "T09 (604)", "T02 (62)"]
    }
  },
  {
    id: "suv",
    acronym: "SUV",
    name: "Sistema de Universidad Virtual (UDGVirtual)",
    address: "Av. La Paz 2453, Col. Arcos Sur, 44140 Guadalajara, Jal.",
    mapsQuery: "UDGVirtual Sede La Paz Guadalajara",
    link: "https://www.google.com/maps/search/?api=1&query=20.6720,-103.3812",
    coordinates: { lat: 20.6720, lng: -103.3812 },
    transport: {
      massTransit: ["Modalidad 100% en línea (Sede administrativa cerca de Glorieta Minerva)"],
      busRoutes: ["T10 (626)", "T09 (604)", "C74 (101)", "C124 (625)", "C127 (183)", "C136"]
    }
  },

  // --- CENTROS REGIONALES (INTERIOR DE JALISCO) ---
  {
    id: "cualtos",
    acronym: "CUALTOS",
    name: "Centro Universitario de los Altos",
    address: "Av. Rafael Casillas Aceves 1200, 47620 Tepatitlán de Morelos, Jal.",
    mapsQuery: "CUALTOS UDG Tepatitlan",
    link: "https://www.google.com/maps/search/?api=1&query=20.8038,-102.7351",
    coordinates: { lat: 20.8038, lng: -102.7351 },
    transport: {
      massTransit: ["Autobuses Foráneos desde Central Nueva GDL (Tepa / Altos)"],
      busRoutes: ["Ruta Urbana Tepatitlán: Ruta CUAltos - Centro", "Ruta Aguilillas - CUAltos"]
    }
  },
  {
    id: "cuchapala",
    acronym: "CUCHAPALA",
    name: "Centro Universitario de Chapala",
    address: "Niños Héroes 69, Col. Centro, 45900 Chapala, Jal.",
    mapsQuery: "CUCHAPALA UDG Chapala",
    link: "https://www.google.com/maps/search/?api=1&query=20.2921,-103.1889",
    coordinates: { lat: 20.2921, lng: -103.1889 },
    transport: {
      massTransit: ["Autobuses GDL-Chapala (desde Antigua Central Camionera)"],
      busRoutes: ["Rutas Ribera de Chapala (Ajijic - Jocotepec - Chapala Centro)", "Urbanos locales de Chapala"]
    }
  },
  {
    id: "cucienega",
    acronym: "CUCIÉNEGA",
    name: "Centro Universitario de la Ciénega",
    address: "Av. Universidad 1115, Lindavista, 47820 Ocotlán, Jal.",
    mapsQuery: "CUCIENEGA UDG Ocotlan",
    link: "https://www.google.com/maps/search/?api=1&query=20.3601,-102.7712",
    coordinates: { lat: 20.3601, lng: -102.7712 },
    transport: {
      massTransit: ["Autobuses Ciénega / Flecha Amarilla (GDL - Ocotlán - La Barca)"],
      busRoutes: ["Rutas Urbanas Ocotlán: Ruta Universidad / CUCiénega", "Transporte interurbano Poncitlán - Jamay - Ocotlán"]
    }
  },
  {
    id: "cucosta",
    acronym: "CUCOSTA",
    name: "Centro Universitario de la Costa",
    address: "Av. Universidad 203, Delegación Ixtapa, 48280 Puerto Vallarta, Jal.",
    mapsQuery: "CUCOSTA UDG Puerto Vallarta",
    link: "https://www.google.com/maps/search/?api=1&query=20.7048328,-105.2243686",
    coordinates: { lat: 20.7048328, lng: -105.2243686 },
    transport: {
      massTransit: ["Sistema UNIBUSPV (Puerto Vallarta)"],
      busRoutes: ["PT04 (Ixtapa - Centro)", "PT25 (CUCosta - Ixtapa)", "PT26 (Las Palmas - CUCosta)", "Transporte Bahía de Banderas (ATM)"]
    }
  },
  {
    id: "cucsur",
    acronym: "CUCSUR",
    name: "Centro Universitario de la Costa Sur",
    address: "Av. Independencia Nacional 151, 48900 Autlán de Navarro, Jal.",
    mapsQuery: "CUCSUR UDG Autlan",
    link: "https://www.google.com/maps/search/?api=1&query=19.7719,-104.3582",
    coordinates: { lat: 19.7719, lng: -104.3582 },
    transport: {
      massTransit: ["Autobuses Autlán / Sur de Jalisco (desde GDL y Costa Alegre)"],
      busRoutes: ["Rutas Urbanas Autlán: Ruta CUCSur - Centro - CUCSur II", "Transporte regional El Grullo - Unión de Tula - Autlán"]
    }
  },
  {
    id: "culagos",
    acronym: "CULAGOS",
    name: "Centro Universitario de los Lagos",
    address: "Av. Enrique Díaz de León 1144, Col. Paseos de la Montaña, 47460 Lagos de Moreno, Jal.",
    mapsQuery: "CULAGOS UDG Lagos de Moreno",
    link: "https://www.google.com/maps/search/?api=1&query=21.3551,-101.9442",
    coordinates: { lat: 21.3551, lng: -101.9442 },
    transport: {
      massTransit: ["Autobuses Altos Norte (Lagos de Moreno - San Juan de los Lagos)"],
      busRoutes: ["Ruta Urbana Lagos de Moreno: Paseos de la Montaña - CULagos - Centro"]
    }
  },
  {
    id: "cunorte",
    acronym: "CUNORTE",
    name: "Centro Universitario del Norte",
    address: "Carretera Federal No. 23, Km. 191, 46200 Colotlán, Jal.",
    mapsQuery: "CUNORTE UDG Colotlan",
    link: "https://www.google.com/maps/search/?api=1&query=22.1481,-103.2562",
    coordinates: { lat: 22.1481, lng: -103.2562 },
    transport: {
      massTransit: ["Autobuses del Norte de Jalisco / Zacatecas (Carretera Federal 23)"],
      busRoutes: ["Transporte Universitario CUNorte (Colotlán Centro - Campus)", "Rutas regionales Huejúcar - Tlaltenango - Colotlán"]
    }
  },
  {
    id: "cusur",
    acronym: "CUSUR",
    name: "Centro Universitario del Sur",
    address: "Av. Enrique Arreola Silva 883, Col. Centro, 49000 Ciudad Guzmán, Jal.",
    mapsQuery: "CUSUR UDG Ciudad Guzman",
    link: "https://www.google.com/maps/search/?api=1&query=19.7042,-103.4619",
    coordinates: { lat: 19.7042, lng: -103.4619 },
    transport: {
      massTransit: ["Autobuses Sur de Jalisco (GDL - Ciudad Guzmán)"],
      busRoutes: ["Sistema Urbano Ciudad Guzmán: Rutas directas a CUSur / Tecnológico", "Transporte regional Zapotiltic - Tamazula - Sayula"]
    }
  },
  {
    id: "cuvalles",
    acronym: "CUVALLES",
    name: "Centro Universitario de los Valles",
    address: "Carretera Guadalajara - Ameca Km. 45.5, 46600 Ameca, Jal.",
    mapsQuery: "CUVALLES UDG Ameca",
    link: "https://www.google.com/maps/search/?api=1&query=20.5372,-103.9675",
    coordinates: { lat: 20.5372, lng: -103.9675 },
    transport: {
      massTransit: ["Autobuses Rápidos de Ameca / ATM (desde Central Vieja y Aviación GDL)"],
      busRoutes: ["Parada directa en Campus CUValles (Carretera GDL - Ameca)", "Transporte regional Tala - El Arenal - Ahualulco - Ameca"]
    }
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
      // Intento 1: Búsqueda estricta por CP en México
      let response = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${zipCode}&country=Mexico&format=json`
      );
      let data = await response.json();

      // Intento 2: Búsqueda de texto libre en Jalisco si falla el intento 1
      if (!data || data.length === 0) {
        response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${zipCode},+Jalisco,+Mexico&format=json`
        );
        data = await response.json();
      }

      if (!data || data.length === 0) {
        throw new Error("No pudimos ubicar este Código Postal. Verifica que sea correcto.");
      }

      const userLat = parseFloat(data[0].lat);
      const userLng = parseFloat(data[0].lon);
      setUserLocation({ lat: userLat, lng: userLng });

      let minDistance = Infinity;
      let closest = null;

      udgCenters.forEach((center) => {
        if (center.coordinates) {
          const distance = calculateDistance(
            userLat,
            userLng,
            center.coordinates.lat,
            center.coordinates.lng
          );
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
          Ingresa tu código postal para trazar la ruta y consultar los camiones hacia la sede de la UdeG más próxima a ti.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ej. 45100"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
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
              <p className="text-sm text-blue-600 font-semibold mb-1">¡Centro más cercano encontrado!</p>
              <h4 className="text-lg font-bold text-foreground">
                {closestCenter.acronym} — {closestCenter.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Aproximadamente a <strong>{distanceInfo} km</strong> de distancia en línea recta.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${closestCenter.coordinates.lat},${closestCenter.coordinates.lng}&travelmode=transit`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition shadow-sm text-center flex items-center justify-center gap-1.5"
              >
                <Bus className="w-4 h-4" />
                Ruta en Camión
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${closestCenter.coordinates.lat},${closestCenter.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm text-center"
              >
                Abrir en Maps
              </a>
            </div>
          </div>

          {/* Bloque de Rutas de Transporte del Centro Más Cercano */}
          {closestCenter.transport && (
            <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-3">
              <h5 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <Bus className="w-4 h-4 text-primary" />
                Opciones de transporte público que llegan a {closestCenter.acronym}:
              </h5>

              {closestCenter.transport.massTransit?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <TrainFront className="w-3.5 h-3.5" /> Tren / Macro:
                  </span>
                  {closestCenter.transport.massTransit.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {closestCenter.transport.busRoutes?.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground mr-1">
                    Rutas de camión:
                  </span>
                  {closestCenter.transport.busRoutes.map((route, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-background border border-border text-foreground px-2 py-0.5 rounded-md font-medium"
                    >
                      {route}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

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
          <h1 className="text-3xl font-bold">Red Universitaria UDG</h1>
          <p className="text-muted-foreground">
            Encuentra las ubicaciones y rutas de transporte de los 19 Centros Universitarios y el SUV
          </p>
        </div>

        {/* Buscador de Rutas */}
        <RouteFinder />

        {/* Lista de Centros */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold pt-4">
            Directorio de Centros ({udgCenters.length})
          </h2>
          {udgCenters.map((center) => (
            <div
              key={center.id}
              className="bg-background border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-lg">
                    {center.acronym}{" "}
                    <span className="font-normal text-muted-foreground sm:inline block text-base">
                      — {center.name}
                    </span>
                  </h3>
                  <div className="flex items-start gap-2 text-muted-foreground">
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

              {/* Sección de Transporte en cada tarjeta */}
              {center.transport && (
                <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
                  {center.transport.massTransit?.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 mr-1">
                        <TrainFront className="w-3.5 h-3.5" /> Tren / Macro / Terminal:
                      </span>
                      {center.transport.massTransit.map((station, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium"
                        >
                          {station}
                        </span>
                      ))}
                    </div>
                  )}

                  {center.transport.busRoutes?.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
                        <Bus className="w-3.5 h-3.5" /> Camiones:
                      </span>
                      {center.transport.busRoutes.map((bus, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded font-medium"
                        >
                          {bus}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}