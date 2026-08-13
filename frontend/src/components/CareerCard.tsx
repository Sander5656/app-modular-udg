import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock } from "lucide-react";
import { Career } from "@/types";

interface CareerCardProps {
  career: Career;
}

export const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <Link to={`/carrera/${career.id}`}>
      <Card className="group hover:shadow-card-hover transition-all duration-300 border-border cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">
                {career.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {career.fieldOfStudy}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {career.duration}
                </div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {career.description}
          </p>
        </div>
      </Card>
    </Link>
  );
};
