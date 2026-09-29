import React from 'react';

export default function Politicas() {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-3xl mx-auto px-4 space-y-6 bg-background p-8 rounded-xl border shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Términos y Políticas de Uso</h1>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Al utilizar la plataforma <strong>Mi Carrera</strong> y sus herramientas de análisis vocacional, usted acepta los siguientes términos y condiciones.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">1. Naturaleza del Servicio</h2>
          <p>
            <strong>Mi Carrera</strong> es una plataforma tecnológica de orientación vocacional. Utiliza cuestionarios y modelos de predicción para sugerir compatibilidad con diversas carreras universitarias. 
          </p>
          <p>
            <strong>Importante:</strong> Los resultados obtenidos son de carácter probabilístico e informativo. No constituyen un diagnóstico psicológico formal, ni garantizan el éxito académico o profesional del usuario en las carreras sugeridas.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">2. Independencia Institucional</h2>
          <p>
            Las recomendaciones de planteles, mapas e información sobre los Centros Universitarios (incluyendo la Universidad de Guadalajara - UDG) se proporcionan únicamente como referencia espacial y educativa. <strong>Mi Carrera</strong> es un proyecto independiente y no está afiliado, patrocinado ni representa oficialmente a la UDG ni a los procesos de admisión de dicha institución.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">3. Precisión de las Predicciones</h2>
          <p>
            El algoritmo de análisis se basa en los datos proporcionados por el usuario. La precisión de la predicción de perfiles depende de la honestidad y exactitud con la que se respondan los cuestionarios. La plataforma no se hace responsable por decisiones de vida, académicas o financieras tomadas basándose en los resultados de esta herramienta.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">4. Uso Aceptable</h2>
          <p>
            El usuario se compromete a utilizar la plataforma para fines personales de orientación. Queda prohibido el uso de bots, extracción automatizada de datos (scraping) de nuestro catálogo de carreras, o el intento de vulnerar el algoritmo de predicción.
          </p>

        </div>
      </div>
    </div>
  );
}