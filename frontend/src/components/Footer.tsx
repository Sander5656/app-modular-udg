import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <span className="text-lg font-bold">Mi Carrera</span>
          <p className="text-sm text-muted-foreground mt-1">
            Análisis de perfiles y predicción vocacional.
          </p>
        </div>

        {/* Enlaces Legales */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/advice" className="hover:text-primary transition">
            Aviso de Privacidad
          </a>
          <a href="/policy" className="hover:text-primary transition">
            Términos de Uso
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          &copy; {currentYear} Mi Carrera. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}