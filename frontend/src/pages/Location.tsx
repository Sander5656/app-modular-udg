import React from "react";

// Puedes mover este arreglo a un archivo en "@/data/udg-centers"
const udgCenters = [
  {
    id: "cucea",
    acronym: "CUCEA",
    name: "Centro Universitario de Ciencias Económico Administrativas",
    address: "Periférico Norte 799, Núcleo Universitario Los Belenes, 45100 Zapopan, Jal.",
    mapsQuery: "CUCEA UDG Zapopan",
    link: "https://maps.app.goo.gl/CUCEA..." 
  },
  {
    id: "cucei",
    acronym: "CUCEI",
    name: "Centro Universitario de Ciencias Exactas e Ingenierías",
    address: "Blvd. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.",
    mapsQuery: "CUCEI UDG Guadalajara",
    link: "https://maps.app.goo.gl/CUCEI..."
  },
  {
    id: "cucs",
    acronym: "CUCS",
    name: "Centro Universitario de Ciencias de la Salud",
    address: "Sierra Mojada 950, Independencia Oriente, 44340 Guadalajara, Jal.",
    mapsQuery: "CUCS UDG Guadalajara",
    link: "https://maps.app.goo.gl/CUCS..."
  },
  {
    id: "cuaad",
    acronym: "CUAAD",
    name: "Centro Universitario de Arte, Arquitectura y Diseño",
    address: "Calzada Independencia Norte 5075, Huentitán El Bajo, 44250 Guadalajara, Jal.",
    mapsQuery: "CUAAD UDG Huentitán",
    link: "https://maps.app.goo.gl/CUAAD..."
  },
  {
    id: "cugdl",
    acronym: "CUGDL",
    name: "Centro Universitario de Guadalajara",
    address: "Av. de los Maestros 1060, La Normal, 44260 Guadalajara, Jal.",
    mapsQuery: "CUGDL UDG La Normal",
    link: "https://maps.app.goo.gl/CUGDL..."
  },
  {
    id: "cucsh",
    acronym: "CUCSH",
    name: "Centro Universitario de Ciencias Sociales y Humanidades",
    address: "Prolongación Licenciado José Luis Parres Arias 150, 45100 Zapopan, Jal.",
    mapsQuery: "CUCSH Belenes UDG Zapopan",
    link: "https://maps.app.goo.gl/CUCSH..."
  }
];

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

        {/* Lista de Centros */}
        <div className="space-y-6">
          {udgCenters.map((center) => (
            <div
              key={center.id}
              className="bg-background border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              {/* Encabezado de la tarjeta */}
              <div>
                <h2 className="font-semibold text-xl">
                  {center.acronym} - {center.name}
                </h2>
                <div className="flex items-start gap-2 mt-2 text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-sm">{center.address}</p>
                </div>
              </div>

              {/* Mapa embebido */}
              <div className="w-full h-64 sm:h-80 border rounded-lg overflow-hidden bg-muted/50">
                <iframe
                  title={`Mapa de ${center.acronym}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(center.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>

              {/* Botón de acción */}
              <div className="flex justify-end pt-2">
                <a
                  href={center.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold transition"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}