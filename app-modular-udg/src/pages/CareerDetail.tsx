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
} from "lucide-react";

const CareerDetail = () => {
  const { id } = useParams();

  let career = null;
  let center = null;

  for (const c of universityCenters) {
    const foundCareer = c.careers.find((car) => car.id === id);
    if (foundCareer) {
      career = foundCareer;
      center = c;
      break;
    }
  }

   // ✅ FIX REAL DEL SCROLL (ESTE SÍ FUNCIONA)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [id]); // ⬅️ CLAVE ABSOLUTA

  if (!career || !center) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold">Carrera no encontrada</h1>
          <Link to="/">
            <Button className="mt-4">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ===== HEADER ===== */}
      <div className="relative bg-gradient-hero text-primary-foreground">
        <div className="container py-12 space-y-6">
          <Link to={`/centro/${center.id}`}>
            <Button variant="secondary" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al {center.acronym}
            </Button>
          </Link>

          <div>
            <div className="flex flex-wrap gap-3 mb-3">
              <Badge variant="secondary">{career.fieldOfStudy}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {career.duration}
              </Badge>
              <Badge variant="secondary">{career.modality}</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-4">{career.name}</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              {career.description}
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="container py-12 space-y-10">
        {/* PERFIL */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Perfil Profesional</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {career.professionalProfile}
          </p>
        </Card>

        {/* REQUISITOS + INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Requisitos de Admisión</h2>
            </div>
            <ul className="space-y-3">
              {career.admissionRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Información General</h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Centro:</strong> {center.acronym} – {center.name}
              </p>
              <p className="text-muted-foreground">
                <strong>Duración:</strong> {career.duration}
              </p>
              <p className="text-muted-foreground">
                <strong>Modalidad:</strong> {career.modality}
              </p>
              <p className="text-muted-foreground">
                <strong>Área:</strong> {career.fieldOfStudy}
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-card border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">
              ¿Interesado en esta carrera?
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Consulta el sitio oficial del {center.acronym} para conocer el plan
            de estudios y el proceso de admisión.
          </p>
          <a href={career.website} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Visitar {center.acronym}</Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default CareerDetail;
