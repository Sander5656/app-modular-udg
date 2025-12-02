import { useParams, Link } from "react-router-dom";
import { universityCenters } from "@/data/universityCenters";
import { Header } from "@/components/Header";
import { CareerCard } from "@/components/CareerCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink, Lightbulb } from "lucide-react";

const CenterDetail = () => {
  const { id } = useParams();
  const center = universityCenters.find((c) => c.id === id);

  if (!center) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold">Centro no encontrado</h1>
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
          <Link to="/">
            <Button variant="secondary" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </Link>
          
          <div>
            <Badge variant="secondary" className="mb-3">{center.acronym}</Badge>
            <h1 className="text-4xl font-bold mb-4">{center.name}</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              {center.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Información de Contacto
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{center.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">{center.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">{center.email}</span>
              </div>
              <a 
                href={center.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
                Visitar sitio web
              </a>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Datos Interesantes
            </h2>
            <ul className="space-y-2">
              {center.interestingFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span className="text-muted-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Carreras Disponibles ({center.careers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
