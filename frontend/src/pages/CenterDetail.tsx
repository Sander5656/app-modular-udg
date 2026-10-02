import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { universityCenters } from "@/data/universityCenters";
import { CareerCard } from "@/components/CareerCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText } from "lucide-react";

const CenterDetail = () => {
  const { id } = useParams();
  const center = universityCenters.find((c) => c.id === id);

  // SCROLL AL INICIO AL ENTRAR
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!center) {
    return (
      <div className="container px-4 py-12 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Centro no encontrado</h1>
        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    // Se usa 100dvh para respetar las barras de navegación en móviles
    <div className="min-h-[100dvh] bg-background">
      
      {/* ===== HERO ===== */}
      <div className="bg-gradient-hero text-primary-foreground">
        {/* Paddings adaptables para móviles y escritorio */}
        <div className="container px-4 sm:px-6 py-8 md:py-12 space-y-4 md:space-y-6">
          <Link to="/">
            <Button variant="secondary" size="sm" className="mb-2 transition-transform hover:-translate-x-1">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </Link>

          <div className="space-y-3">
            <Badge className="text-xs sm:text-sm px-3 py-1">{center.acronym}</Badge>
            {/* Título adaptable */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {center.name}
            </h1>
          </div>
          
          {/* Texto descriptivo adaptable */}
          <p className="max-w-3xl text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            {center.description}
          </p>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="container px-4 sm:px-6 py-8 md:py-12 space-y-10 md:space-y-12">
        
        {/* Cambiamos a lg:grid-cols-2 para dar más espacio en tablets verticales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CONTACTO */}
          <Card className="p-5 sm:p-6 space-y-4 shadow-sm">
            <h2 className="font-bold text-xl sm:text-2xl border-b pb-2">Información de contacto</h2>

            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p><strong className="text-foreground">Dirección:</strong> {center.address}</p>
              <p><strong className="text-foreground">Teléfono:</strong> {center.phone}</p>
              {/* break-words evita que correos muy largos rompan la tarjeta en móviles */}
              <p className="break-words"><strong className="text-foreground">Email:</strong> {center.email}</p>
              
              <div>
                <a
                  href={center.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium underline transition-colors break-all"
                >
                  Visitar sitio web oficial
                </a>
              </div>
            </div>

            {/* BOTÓN PUNTAJES */}
            {center.admissionScoresPdf && (
              <div className="pt-4 mt-4 border-t">
                <a
                  href={center.admissionScoresPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <FileText className="h-5 w-5" />
                  {center.admissionScoresPdf.label}
                </a>
              </div>
            )}
          </Card>

          {/* DATOS INTERESANTES */}
          <Card className="p-5 sm:p-6 shadow-sm">
            <h2 className="font-bold text-xl sm:text-2xl mb-4 border-b pb-2">Datos interesantes</h2>
            <ul className="space-y-3">
              {center.interestingFacts.map((fact, i) => (
                <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CARRERAS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Carreras
            </h2>
            <Badge variant="outline" className="text-sm sm:text-base px-3 py-1">
              {center.careers.length}
            </Badge>
          </div>
          
          {/* Grilla escalonada: 1 col (móvil), 2 cols (tablet), 3 cols (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {center.careers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CenterDetail;