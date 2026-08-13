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

  // ✅ SCROLL AL INICIO AL ENTRAR
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!center) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Centro no encontrado</h1>
        <Link to="/">
          <Button className="mt-4">Volver</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Centro no encontrado</h1>
        <Link to="/">
          <Button className="mt-4">Volver</Button>
        </Link>
      </div>
      {/* ===== HERO ===== */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container py-12 space-y-4">
          

          <Badge>{center.acronym}</Badge>
          <h1 className="text-4xl font-bold">{center.name}</h1>
          <p className="max-w-3xl opacity-90">{center.description}</p>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="container py-12 space-y-12">
        <div className="grid md:grid-cols-2 gap-6">

          {/* CONTACTO */}
          <Card className="p-6 space-y-4">
            <h2 className="font-bold text-xl">Información de contacto</h2>

            <p>{center.address}</p>
            <p>{center.phone}</p>
            <p>{center.email}</p>

            <a
              href={center.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Sitio web
            </a>

            {/* ✅ BOTÓN PUNTAJES */}
            {center.admissionScoresPdf && (
              <div className="pt-4 border-t">
                <a
                  href={center.admissionScoresPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  <FileText className="h-4 w-4" />
                  {center.admissionScoresPdf.label}
                </a>
              </div>
            )}
          </Card>

          {/* DATOS INTERESANTES */}
          <Card className="p-6">
            <h2 className="font-bold text-xl mb-4">Datos interesantes</h2>
            <ul className="space-y-2">
              {center.interestingFacts.map((fact, i) => (
                <li key={i}>• {fact}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CARRERAS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Carreras ({center.careers.length})
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
