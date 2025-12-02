import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Building2, ChevronRight } from "lucide-react";
import { UniversityCenter } from "@/types";

interface CenterCardProps {
  center: UniversityCenter;
}

export const CenterCard = ({ center }: CenterCardProps) => {
  return (
    <Link to={`/centro/${center.id}`}>
      <Card className="group relative overflow-hidden bg-gradient-card hover:shadow-card-hover transition-all duration-300 border-border cursor-pointer">
        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                  {center.acronym}
                </h3>
                <p className="text-xs text-muted-foreground">{center.careers.length} carreras</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">{center.name}</h4>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {center.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
