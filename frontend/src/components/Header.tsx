import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X, Search, MapPin, ArrowUpRight } from "lucide-react";
import { universityCenters } from "@/data/universityCenters";

interface CareerSearchResult {
  careerId: string;
  careerName: string;
  centerId: string;
  centerName: string;
  centerAcronym?: string;
}

// Función auxiliar para ignorar acentos y mayúsculas al buscar
const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  // 1. Extraemos todas las carreras vinculadas con su respectivo Centro Universitario
  const allCareers = useMemo<CareerSearchResult[]>(() => {
    const list: CareerSearchResult[] = [];
    universityCenters.forEach((center: any) => {
      if (Array.isArray(center.careers)) {
        center.careers.forEach((career: any) => {
          list.push({
            careerId: String(career.id ?? career.slug ?? career.name),
            careerName: career.name ?? career.title ?? String(career),
            centerId: String(center.id),
            centerName: center.name,
            centerAcronym: center.acronym || center.shortName || String(center.id).toUpperCase(),
          });
        });
      }
    });
    return list;
  }, []);

  // 2. Filtramos resultados según lo que escriba el usuario (por carrera o por centro)
  const filteredResults = useMemo(() => {
    const q = normalizeText(searchQuery.trim());
    if (!q) return [];

    return allCareers
      .filter(
        (item) =>
          normalizeText(item.careerName).includes(q) ||
          normalizeText(item.centerName).includes(q) ||
          (item.centerAcronym && normalizeText(item.centerAcronym).includes(q))
      )
      .slice(0, 8); // Mostramos máximo 8 sugerencias rápidas
  }, [searchQuery, allCareers]);

  // 3. Cerramos el desplegable de búsqueda al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 4. Al seleccionar una carrera, navegamos a su página de detalle
  const handleSelectCareer = (item: CareerSearchResult) => {
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    navigate(`/carrera/${item.careerId}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg whitespace-nowrap">
              UdeG Carreras
            </span>
          </Link>

          {/* ================= BUSCADOR DE CARRERAS (Desktop & Tablet) ================= */}
          <div
            ref={searchContainerRef}
            className="hidden md:block relative flex-1 max-w-md mx-4"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder="Buscar carrera o centro (ej. Computación, CUCEI)..."
                className="w-full pl-9 pr-8 py-2 text-sm rounded-full border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Desplegable de Resultados */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
                {filteredResults.length > 0 ? (
                  <ul className="divide-y divide-border max-h-80 overflow-y-auto">
                    {filteredResults.map((item, idx) => (
                      <li key={`${item.centerId}-${item.careerId}-${idx}`}>
                        <button
                          type="button"
                          onClick={() => handleSelectCareer(item)}
                          className="w-full text-left px-4 py-3 hover:bg-muted/70 transition-colors flex items-center justify-between gap-3 group"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                              {item.careerName}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5 truncate">
                              <MapPin className="h-3 w-3 text-primary shrink-0" />
                              <span className="font-medium text-foreground/80">
                                {item.centerAcronym}
                              </span>
                              <span>— {item.centerName}</span>
                            </p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No se encontraron carreras que coincidan con "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
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

          {/* Botón Menú Hamburguesa Mobile */}
          <button
            className="md:hidden p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* ================= MENÚ DESPLEGABLE MOBILE (Con Buscador Integrado) ================= */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-4 space-y-4">
            
            {/* Buscador Mobile */}
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar carrera o centro..."
                  className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-border bg-muted/40 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 p-1 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Resultados Mobile */}
              {searchQuery.trim().length > 0 && (
                <div className="mt-2 border border-border rounded-xl bg-background max-h-60 overflow-y-auto divide-y divide-border shadow-sm">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <button
                        key={`mob-${item.centerId}-${item.careerId}-${idx}`}
                        type="button"
                        onClick={() => handleSelectCareer(item)}
                        className="w-full text-left px-3.5 py-2.5 hover:bg-muted transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {item.careerName}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            Disponible en: <strong className="text-primary">{item.centerAcronym}</strong> ({item.centerName})
                          </p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-center text-xs text-muted-foreground">
                      Sin resultados para "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

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