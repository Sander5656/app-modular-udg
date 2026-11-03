import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Printer, ChevronRight } from 'lucide-react';

export const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  // Manejo de teclado para navegar entre diapositivas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="bg-[#001c60] text-white flex flex-col font-sans relative min-h-[calc(100vh-64px)] pb-20 sm:pb-24">
      
      {/* CONTROLES DE PRESENTACIÓN (Barra flotante inferior para no chocar con el Header principal) */}
      <div className="no-print fixed bottom-0 left-0 right-0 bg-[#001240]/95 backdrop-blur shadow-[0_-4px_15px_rgba(0,0,0,0.3)] border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 z-50">
        <span className="text-xs sm:text-sm font-medium text-white/70 w-full sm:w-auto text-center sm:text-left">
          Diapositiva {currentSlide + 1} de {totalSlides}
        </span>
        
        <div className="flex gap-2 w-full sm:w-auto justify-center">
          <Button variant="outline" size="sm" onClick={prevSlide} className="bg-transparent border-white/20 text-white hover:bg-white/10 flex-1 sm:flex-none">
            <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" /> Atrás
          </Button>
          <Button size="sm" onClick={nextSlide} className="bg-white text-[#001c60] hover:bg-slate-200 flex-1 sm:flex-none font-semibold">
            Siguiente <ArrowRight className="h-4 w-4 ml-1 sm:ml-2" />
          </Button>
        </div>

        <Button variant="secondary" size="sm" onClick={() => window.print()} className="bg-transparent border border-white/20 text-white hover:bg-white/10 hidden md:flex">
          <Printer className="h-4 w-4 mr-2" /> Imprimir / PDF
        </Button>
      </div>

      {/* CONTENEDOR DE DIAPOSITIVAS */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 h-full">
        <div className="w-full max-w-7xl h-full flex flex-col relative animate-in fade-in duration-500">

          {/* ================= DIAPOSITIVA 1: PORTADA ================= */}
          {currentSlide === 0 && (
            <div className="flex flex-col justify-center h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <div className="mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/70 border-b border-white/20 pb-2">
                  Proyecto de Ingeniería y Ciencia de Datos
                </span>
              </div>
              
              <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                  Sistema Inteligente de Orientación Vocacional y Guía de Carreras
                </h1>
                <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-3xl mb-8 sm:mb-12">
                  Documentación Técnica de Arquitectura, Procesos y Machine Learning para la Red Universitaria.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-auto border-t border-white/10 pt-6 sm:pt-10">
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">20</p>
                  <p className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider">Centros Universitarios</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">144+</p>
                  <p className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider">Programas Académicos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">36</p>
                  <p className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider">Reactivos RIASEC</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">IA</p>
                  <p className="text-[10px] sm:text-sm text-white/60 uppercase tracking-wider">Random Forest + PCA</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 2: OBJETIVO GENERAL ================= */}
          {currentSlide === 1 && (
            <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-8 sm:mb-12">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">01 / Resumen y Objetivo</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Descripción General del Proyecto</h2>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 flex-1">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold border-b border-white/20 pb-3 sm:pb-4">¿De qué trata el proyecto?</h3>
                  <p className="text-sm sm:text-lg text-white/80 leading-relaxed">
                    Es una aplicación web de página única conectada a servicios en la nube diseñada para orientar a los aspirantes de la Universidad de Guadalajara.
                  </p>
                  <p className="text-sm sm:text-lg text-white/80 leading-relaxed">
                    Unifica la consulta detallada de la oferta académica (requisitos, modalidades y puntajes mínimos PAA) con un cuestionario psicométrico adaptativo de 36 reactivos que evalúa el perfil vocacional en tiempo real.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                   <h3 className="text-xl sm:text-2xl font-semibold border-b border-white/20 pb-3 sm:pb-4">Objetivo Principal</h3>
                   <div className="bg-white/5 p-5 sm:p-8 rounded-xl border border-white/10 h-full">
                     <p className="text-base sm:text-xl text-white font-medium leading-relaxed mb-4 sm:mb-6">
                       Disminuir la indecisión vocacional y el índice de deserción temprana mediante un diagnóstico cuantitativo.
                     </p>
                     <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white shrink-0 mt-0.5" />
                         <span>Predice el Área Temática de mayor compatibilidad.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white shrink-0 mt-0.5" />
                         <span>Calcula el Top 3 de licenciaturas recomendadas con su afinidad relativa.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white shrink-0 mt-0.5" />
                         <span>Proyecta al estudiante en un mapa cartesiano bidimensional.</span>
                       </li>
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 3: ARQUITECTURA ================= */}
          {currentSlide === 2 && (
             <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">02 / Tech Stack</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Arquitectura Tecnológica</h2>
              </header>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl flex flex-col justify-center">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Capa Frontend</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">React 18, TypeScript, Vite</h3>
                  <p className="text-sm sm:text-base text-white/80">Interfaz reactiva, cuestionario SPA y componentes responsivos estructurados.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl flex flex-col justify-center">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Capa de Estilos</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Tailwind CSS & Recharts</h3>
                  <p className="text-sm sm:text-base text-white/80">Diseño escalable y visualización de datos complejos (Radar RIASEC y Mapa PCA 2D).</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl flex flex-col justify-center">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Capa de Autenticación</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Supabase Auth</h3>
                  <p className="text-sm sm:text-base text-white/80">Gestión de usuarios y control de acceso mediante tokens JWT seguros.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl flex flex-col justify-center">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Capa de Backend e IA</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">FastAPI & Python (Scikit-Learn)</h3>
                  <p className="text-sm sm:text-base text-white/80">Microservicio REST en la nube que procesa inferencias de los modelos ML (Random Forest, K-Means).</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 4: PROCESOS WEB ================= */}
          {currentSlide === 3 && (
            <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">03 / Desarrollo Web</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Indexación y Seguridad</h2>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 flex-1">
                <div className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-xl flex flex-col">
                   <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                     <span className="bg-white text-[#001c60] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">1</span>
                     Catálogo y Deduplicación
                   </h3>
                   <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80 flex-1">
                     <p><strong className="text-white">Catálogo Estructurado:</strong> Almacena nodos metropolitanos, regionales y SUV con licenciaturas y puntajes mínimos de corte (minScore).</p>
                     <p><strong className="text-white">Deduplicación:</strong> Reducción mediante conjuntos (Set) para mostrar programas académicos únicos sin duplicidades en múltiples sedes.</p>
                     <p><strong className="text-white">Buscador Unicode:</strong> Normalización (NFD) eliminando marcas diacríticas para búsquedas tolerantes a acentos.</p>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-xl flex flex-col">
                   <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                     <span className="bg-white text-[#001c60] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">2</span>
                     Seguridad y Sesión
                   </h3>
                   <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80 flex-1">
                     <p><strong className="text-white">Autenticación JWT:</strong> Emisión de Access Token con vigencia de 1 hora respaldado por un Refresh Token (Supabase).</p>
                     <p><strong className="text-white">Monitoreo de Actividad:</strong> Un hook escucha eventos de interacción. Si transcurren 15 minutos de inactividad, ejecuta el cierre de sesión seguro automáticamente.</p>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 5: ENTRENAMIENTO IA ================= */}
          {currentSlide === 4 && (
            <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">04 / Machine Learning</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Entrenamiento Jerárquico de IA</h2>
              </header>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-4 sm:gap-6 bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white/40 mt-1">01</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Partición Estratificada</h3>
                    <p className="text-xs sm:text-sm text-white/80">División del dataset (80% / 20%) manteniendo la proporción de cada carrera para asegurar equidad.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 sm:gap-6 bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white/40 mt-1">02</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Clasificador de Área (N1)</h3>
                    <p className="text-xs sm:text-sm text-white/80">Modelo Random Forest clasifica al estudiante en una de las 6 grandes áreas temáticas de la UdeG.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white/40 mt-1">03</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Especialistas (N2)</h3>
                    <p className="text-xs sm:text-sm text-white/80">Un bosque aleatorio independiente por área; compiten solo las carreras de dicho sector específico.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white/40 mt-1">04</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">PCA y K-Means</h3>
                    <p className="text-xs sm:text-sm text-white/80">Comprime centroides RIASEC de 6 dimensiones a 2 componentes y los segmenta en 5 grupos.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 6: INFERENCIA ================= */}
          {currentSlide === 5 && (
            <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">05 / Algoritmos</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Inferencia Matemática API</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 flex-1">
                <div className="bg-white/5 p-5 sm:p-8 rounded-xl border border-white/10 space-y-6 sm:space-y-8 flex flex-col justify-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Promediado React (1-10)</h3>
                    <div className="bg-[#001240] p-3 sm:p-4 rounded text-center border border-white/20 font-serif text-sm sm:text-lg mb-2">
                      X̄_d = 1/6 ∑(r_di)
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 text-center">Promedio de las 6 dimensiones RIASEC.</p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Conversión Lineal FastAPI (1-7)</h3>
                    <div className="bg-[#001240] p-3 sm:p-4 rounded text-center border border-white/20 font-serif text-sm sm:text-lg mb-2">
                      X_norm = ((X̄_d - 1) / 9) × 6 + 1
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 text-center">Transforma a la escala oficial de entrenamiento.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-5 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Cálculo de Afinidad Relativa (%)</h3>
                  <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
                    El modelo evalúa las probabilidades brutas de cada carrera, extrae el Top 3 y normaliza su peso porcentual.
                  </p>
                  <div className="bg-[#001240] p-4 sm:p-6 rounded border border-white/20 text-center font-serif text-sm sm:text-xl">
                    Afinidad_i = [ P_i / (P_1 + P_2 + P_3) ] × 100
                  </div>
                  <p className="text-white/50 text-xs mt-4 sm:mt-6 text-center">
                    * P_i representa la probabilidad matemática en el conjunto de las 3 opciones principales.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 7: RESULTADOS VISUALES ================= */}
          {currentSlide === 6 && (
            <div className="flex flex-col h-full px-2 sm:px-6 md:px-12 py-4 sm:py-8">
              <header className="mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60 mb-2">06 / UI Dashboard</p>
                <h2 className="text-2xl sm:text-4xl font-bold">Visualización y Resultados</h2>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
                <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 border-b border-white/20 pb-2">Emparejamiento de Alias</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Algoritmo de sinónimos que vincula la IA con la BD de centros para navegación directa a fichas técnicas.
                  </p>
                </div>

                <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 border-b border-white/20 pb-2">Huella Vocacional (Radar)</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Representación hexagonal interactiva que traza las 6 dimensiones vocacionales del estudiante.
                  </p>
                </div>

                <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 border-b border-white/20 pb-2">Métricas de Desempeño</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Transparencia algorítmica: expone la probabilidad por área junto al Precision, Recall y F1-Score.
                  </p>
                </div>

                <div className="bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 border-b border-white/20 pb-2">Mapa Espacial (Scatter)</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Grafica carreras por color de cluster y posiciona al alumno mediante un marcador en coordenadas (x, y).
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
export default ProjectPresentation;