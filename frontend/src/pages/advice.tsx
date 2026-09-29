import React from 'react';

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-3xl mx-auto px-4 space-y-6 bg-background p-8 rounded-xl border shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Aviso de Privacidad</h1>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, la plataforma <strong>Mi Carrera</strong> pone a su disposición el siguiente aviso de privacidad.
          </p>
          
          <h2 className="text-xl font-semibold text-foreground mt-6">1. Datos Recabados</h2>
          <p>
            Para el funcionamiento de nuestra herramienta de análisis vocacional, recabamos los siguientes datos: respuestas a cuestionarios de intereses y aptitudes, información sobre preferencias académicas y, en caso de crear una cuenta, datos de identificación básica (nombre y correo electrónico).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            La información que nos proporciona es utilizada exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Alimentar el algoritmo de análisis para evaluar su perfil vocacional.</li>
            <li>Generar predicciones de compatibilidad y probabilidad de éxito en distintas carreras universitarias.</li>
            <li>Mostrar recomendaciones personalizadas de Centros Universitarios (como la red UDG) basadas en su resultado.</li>
            <li>Mejorar nuestros modelos de predicción mediante análisis estadístico anonimizado.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-6">3. Privacidad del Algoritmo</h2>
          <p>
            Las respuestas detalladas de sus cuestionarios son procesadas por nuestro motor de análisis. Nos comprometemos a no comercializar, vender ni compartir sus resultados individuales o perfil psicológico/vocacional con terceros, universidades o instituciones externas sin su consentimiento explícito.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">4. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos tenemos de usted, rectificarlos, solicitar la eliminación de su perfil y resultados de nuestra base de datos (Cancelación), u oponerse a su uso. Para ejercer estos derechos, puede contactarnos a través de los canales oficiales de la plataforma.
          </p>
          
          <p className="text-sm mt-8 pt-8 border-t">
            Última actualización: {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}