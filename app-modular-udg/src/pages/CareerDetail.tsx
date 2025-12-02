import { useParams, Link } from "react-router-dom";
import { universityCenters } from "@/data/universityCenters";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, GraduationCap, BookOpen, CheckCircle2, User } from "lucide-react";

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

  if (!career || !center) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
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
      <Header />
      
      <div className="relative bg-gradient-hero text-primary-foreground">
        <div className="container py-12 space-y-6">
          <Link to={`/centro/${center.id}`}>
            <Button variant="secondary" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al {center.acronym}
            </Button>
          </Link>
          
          <div>
            <div className="flex items-center gap-3 mb-3">
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

      <div className="container py-12 space-y-8">
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
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
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
              <div>
                <h3 className="font-semibold text-sm text-foreground/60 mb-1">Centro Universitario</h3>
                <p className="text-muted-foreground">{center.acronym} - {center.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground/60 mb-1">Duración</h3>
                <p className="text-muted-foreground">{career.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground/60 mb-1">Modalidad</h3>
                <p className="text-muted-foreground">{career.modality}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground/60 mb-1">Área de Estudio</h3>
                <p className="text-muted-foreground">{career.fieldOfStudy}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">¿Interesado en esta carrera?</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Visita el sitio web del {center.acronym} para conocer más detalles sobre el proceso de admisión, plan de estudios y oportunidades académicas.
          </p>
          <a href={center.website} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Visitar {center.acronym}
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default CareerDetail;
