import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Building2, ChevronRight, BookOpen } from "lucide-react";
import { UniversityCenter } from "@/types";

interface CenterCardProps {
  center: UniversityCenter;
}

export const CenterCard = ({ center }: CenterCardProps) => {
  return (
    {/* Contenedor principal con perspectiva 3D. El 'group' detecta el hover */}
    <Link to={`/centro/${center.id}`} className="block h-[340px] group [perspective:1000px]">
      
      {/* Contenedor interno que realiza el giro */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* ================= FRENTE DE LA TARJETA ================= */}
        <Card className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden] border-none shadow-md">
          {/* Imagen de fondo */}
          {center.image ? (
            <img
              src={center.image}
              alt={center.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900" />
          )}
          
          {/* Degradado oscuro para asegurar que el texto sea legible sobre la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Textos del frente (Acrónimo y Nombre) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/20">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-3xl tracking-tight">{center.acronym}</h3>
            </div>
            <h4 className="font-medium text-sm text-gray-200 line-clamp-2 leading-snug">
              {center.name}
            </h4>
          </div>
        </Card>

        {/* ================= REVERSO DE LA TARJETA ================= */}
        {/* Se le aplica rotateY(180deg) para que empiece de espaldas */}
        <Card className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card border-border shadow-xl p-6 flex flex-col">
          
          <div className="flex-1 space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-bold text-xl text-foreground">{center.acronym}</h3>
            </div>
            
            {/* Descripción */}
            <p className="text-sm text-muted-foreground line-clamp-6 leading-relaxed">
              {center.description}
            </p>
          </div>

          {/* Pie del reverso (Carreras y botón simulado) */}
          <div className="mt-auto space-y-4 pt-4">
            <div className="inline-flex items-center text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              {center.careers.length} carreras
            </div>
            
            <div className="flex items-center justify-between text-primary font-medium">
              <span className="text-sm">Ver detalles del centro</span>
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

        </Card>

      </div>
    </Link>
  );
};