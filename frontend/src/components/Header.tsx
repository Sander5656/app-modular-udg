import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace (útil en móviles)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="w-full px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">
              UdeG Carreras
            </span>
          </Link>

          {/* Navegación Desktop (Oculta en móviles con md:flex) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Inicio
            </Link>

            <Link
              to="/chat"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Conoce tu carrera
            </Link>

            <Link
              to="/location"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Centros
            </Link>
          </nav>

          {/* Botón Menú Hamburguesa Mobile (Oculto en desktop con md:hidden) */}
          <button
            className="md:hidden p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground/60 hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/chat"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground/60 hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
            >
              Conoce tu carrera
            </Link>
            <Link
              to="/location"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground/60 hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
            >
              Centros
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};