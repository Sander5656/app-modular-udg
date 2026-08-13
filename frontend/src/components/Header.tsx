import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="w-full px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">
              UdeG Carreras
            </span>
          </Link>

          {/* Menu */}
          <nav className="flex items-center gap-6 lg:gap-10">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              Inicio
            </Link>

            <Link
              to="/chat"
              className="text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              Asistente
            </Link>

            <Link
              to="/cuestionario"
              className="text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              Mi Carrera
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};
