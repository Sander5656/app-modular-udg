import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">UdeG Carreras</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Inicio
          </Link>
        </nav>
      </div>
    </header>
  );
};
