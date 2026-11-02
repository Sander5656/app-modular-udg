import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { universityCenters } from "@/data/universityCenters";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  User,
  TrendingUp,
} from "lucide-react";

const CareerDetail = () => {
  const { id } = useParams();

  let career: any = null;
  let center: any = null;

  for (const c of universityCenters) {
    const foundCareer = c.careers.find((car: any) => car.id === id);
    if (foundCareer) {
      career = foundCareer;
      center = c;
      break;
    }
  }

  // FIX REAL DEL SCROLL
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [id]);
  
  if (!career || !center) {
    return (
      <div className="min-h-[100dvh] bg-background">
        <div className="container px-4 py-12 text-center flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Carrera no encontrada</h1>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Puntaje mínimo referencial (puedes adaptar la propiedad según tu JSON, ej: career.minScore o un valor predeterminado)
  const minScore = career.minScore || career.cutoffScore || "125.43 pts (Referencial)";

  return (
    <div className="min-h-[100dvh] bg-background">
      
      {/* ===== HEADER ===== */}
      <div className="relative bg-gradient-hero text-primary-foreground">
        <div className="container px-4 sm:px-6 py-8 md:py-12 space-y-5 sm:space-y-6">
          <Link to={`/centro/${center.id}`}>
            <Button variant="secondary" size="sm" className="transition-transform hover:-translate-x-1">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al {center.acronym}
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge variant="secondary" className="text-xs sm:text-sm px-2.5 py-0.5">{career.fieldOfStudy}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1 text-xs sm:text-sm px-2.5 py-0.5">
                <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                {career.duration}
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm px-2.5 py-0.5">{career.modality}</Badge>
              {/* Badge destacado de Puntaje en el Header */}
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-xs sm:text-sm px-2.5 py-0.5 flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5 text-blue-300" />
                Puntaje mínimo: {minScore}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {career.name}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl leading-relaxed">
              {career.description}
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="container px-4 sm:px-6 py-8 md:py-12 space-y-6 sm:space-y-8 md:space-y-10">
        
        {/* PERFIL */}
        <Card className="p-5 sm:p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10">
              <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Perfil Profesional</h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {career.professionalProfile}
          </p>
        </Card>

        {/* REQUISITOS + INFO GENERAL CON PUNTAJE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          <Card className="p-5 sm:p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Requisitos de Admisión</h2>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {career.admissionRequirements.map((req: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Información General</h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Centro:</strong> {center.acronym} – {center.name}
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Duración:</strong> {career.duration}
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Modalidad:</strong> {career.modality}
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Área:</strong> {career.fieldOfStudy}
                </p>
              </div>
            </div>

            {/* Tarjeta destacada de puntaje dentro de Info General */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Último Puntaje Mínimo</p>
                  <p className="text-lg font-extrabold text-slate-800">{minScore}</p>
                </div>
              </div>
              <span className="text-[11px] text-muted-foreground text-right hidden sm:block">Calendario A/B<br/>UdeG</span>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-5 sm:p-6 md:p-8 bg-gradient-card border-primary/20 shadow-sm">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <h2 className="text-xl sm:text-2xl font-bold">
              ¿Interesado en esta carrera?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl">
            Consulta el sitio oficial del {center.acronym} para conocer el plan
            de estudios y el proceso de admisión detallado.
          </p>
          <a href={career.website} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto text-base">
              Visitar {center.acronym}
            </Button>
          </a>
        </Card>
        
      </div>
    </div>
  );
};

export default CareerDetail;