import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:h-16 items-center justify-between py-3 sm:py-0 gap-3 sm:gap-0">

          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="font-bold text-base md:text-lg">
              UdeG Carreras
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              to="/"
              className="text-sm md:text-base font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Inicio
            </Link>

            <Link
              to="/chat"
              className="text-sm md:text-base font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Asistente
            </Link>

            <Link
              to="/cuestionario"
              className="text-sm md:text-base font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Mi Carrera
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};
