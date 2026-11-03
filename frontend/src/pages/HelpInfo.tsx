import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Printer, GraduationCap, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#001c60] text-white flex flex-col font-sans">
      
      {/* BARRA SUPERIOR DE CONTROLES (Se oculta al imprimir) */}
      <header className="no-print w-full px-6 py-4 bg-[#001240] border-b border-white/10 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <div className="flex items-center justify-center bg-white/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
             </div>
             <span className="font-bold text-lg tracking-tight">UdeG Guía de Carreras</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-white/70">
            Diapositiva {currentSlide + 1} de {totalSlides}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" onClick={prevSlide} className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" /> Atrás
            </Button>
            <Button onClick={nextSlide} className="bg-white text-[#001c60] hover:bg-slate-200">
              Siguiente <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <Button variant="secondary" onClick={() => window.print()} className="ml-4 bg-transparent border border-white/20 text-white hover:bg-white/10">
            <Printer className="h-4 w-4 mr-2" /> Imprimir / PDF
          </Button>
        </div>
      </header>

      {/* CONTENEDOR DE DIAPOSITIVAS (Estilo Institucional UdeG) */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl aspect-[16/9] min-h-[600px] bg-transparent flex flex-col relative animate-in fade-in duration-500">

          {/* ================= DIAPOSITIVA 1: PORTADA ================= */}
          {currentSlide === 0 && (
            <div className="flex flex-col justify-center h-full px-12 py-8">
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/70 border-b border-white/20 pb-2">
                  Proyecto de Ingeniería y Ciencia de Datos
                </span>
              </div>
              
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Sistema Inteligente de Orientación Vocacional y Guía de Carreras UdeG
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl mb-12">
                  Documentación Técnica de Arquitectura, Procesos y Machine Learning para la Red Universitaria.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-auto border-t border-white/10 pt-10">
                <div>
                  <p className="text-4xl font-bold text-white mb-2">20</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Centros Universitarios</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">144+</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Programas Académicos</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">36</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Reactivos RIASEC</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">AI</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Random Forest + PCA</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 2: OBJETIVO GENERAL ================= */}
          {currentSlide === 1 && (
            <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-12">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">01 / Resumen y Objetivo</p>
                <h2 className="text-4xl font-bold">Descripción General del Proyecto</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold border-b border-white/20 pb-4">¿De qué trata el proyecto?</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Es una aplicación web de página única (Single Page Application) conectada a servicios en la nube diseñada para orientar a los aspirantes de la Universidad de Guadalajara (UdeG).
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    El sistema unifica la consulta detallada de la oferta académica (requisitos, duración, modalidad y puntajes mínimos de admisión PAA) con un cuestionario psicométrico adaptativo de 36 reactivos que evalúa el perfil vocacional del estudiante en tiempo real.
                  </p>
                </div>

                <div className="space-y-6">
                   <h3 className="text-2xl font-semibold border-b border-white/20 pb-4">Objetivo Principal</h3>
                   <div className="bg-white/5 p-8 rounded-xl border border-white/10 h-full">
                     <p className="text-xl text-white font-medium leading-relaxed mb-6">
                       Disminuir la indecisión vocacional y el índice de deserción temprana mediante un diagnóstico cuantitativo reproducible.
                     </p>
                     <ul className="space-y-4 text-white/80">
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-6 w-6 text-white shrink-0" />
                         <span>Predice el Área Temática UdeG de mayor compatibilidad.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-6 w-6 text-white shrink-0" />
                         <span>Calcula el Top 3 de licenciaturas recomendadas con su porcentaje de afinidad relativa.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <ChevronRight className="h-6 w-6 text-white shrink-0" />
                         <span>Proyecta al estudiante en un mapa cartesiano bidimensional junto a todas las carreras de la Red Universitaria.</span>
                       </li>
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 3: ARQUITECTURA ================= */}
          {currentSlide === 2 && (
             <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">02 / Tech Stack</p>
                <h2 className="text-4xl font-bold">Arquitectura Tecnológica Desacoplada</h2>
              </header>

              <div className="flex-1">
                <div className="w-full border border-white/20 rounded-xl overflow-hidden bg-white/5">
                  <table className="w-full text-left">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-lg border-b border-white/20">Capa del Sistema</th>
                        <th className="px-6 py-4 font-semibold text-lg border-b border-white/20 border-l">Tecnologías / Herramientas</th>
                        <th className="px-6 py-4 font-semibold text-lg border-b border-white/20 border-l">Función Principal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-5 font-medium">Frontend Web</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">React 18, TypeScript, Vite</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Interfaz reactiva, cuestionario y ruteo SPA</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="px-6 py-5 font-medium">Estilos y Gráficas</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Tailwind CSS, Recharts, Lucide</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Diseño 100dvh, Radar RIASEC y Mapa PCA 2D</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-5 font-medium">Autenticación (BaaS)</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Supabase (PostgreSQL / Auth)</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Gestión de usuarios, sesiones JWT y seguridad</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="px-6 py-5 font-medium">Entrenamiento IA</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Python, Google Colab, Scikit-Learn</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Modelos Random Forest, PCA, K-Means</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-5 font-medium">Backend API Cloud</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">FastAPI, Uvicorn, Pydantic, Joblib</td>
                        <td className="px-6 py-5 border-l border-white/10 text-white/80">Microservicio REST de inferencia alojado en Render</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 4: PROCESOS WEB ================= */}
          {currentSlide === 3 && (
            <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">03 / Desarrollo Web</p>
                <h2 className="text-4xl font-bold">Indexación, Seguridad y Búsqueda</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col">
                   <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                     <span className="bg-white text-[#001c60] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                     Catálogo y Deduplicación
                   </h3>
                   <div className="space-y-4 text-white/80 flex-1">
                     <p><strong>Catálogo Estructurado:</strong> Almacena los 20 nodos de la Red Universitaria (metropolitanos, regionales y SUV) con licenciaturas y puntajes mínimos de corte (minScore).</p>
                     <p><strong>Deduplicación de Programas:</strong> El contador global aplica una reducción mediante conjuntos <code>new Set(flatMap(...)).size</code> para mostrar programas académicos únicos sin duplicidades en múltiples sedes.</p>
                     <p><strong>Buscador Tolerante a Acentos:</strong> Normaliza entradas con descomposición Unicode (NFD) eliminando marcas diacríticas, buscando por nombre o siglas del centro.</p>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col">
                   <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                     <span className="bg-white text-[#001c60] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                     Seguridad y Sesión
                   </h3>
                   <div className="space-y-4 text-white/80 flex-1">
                     <p><strong>Autenticación JWT:</strong> Valida credenciales contra Supabase Auth, emitiendo un Access Token con vigencia de 1 hora (3600 segundos) respaldado por un Refresh Token.</p>
                     <p><strong>Monitoreo de Actividad:</strong> Un hook escucha eventos del usuario (mousemove, keydown, etc.). Si transcurren 15 minutos sin interacción, ejecuta el cierre de sesión seguro y redirige al inicio.</p>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 5: ENTRENAMIENTO IA ================= */}
          {currentSlide === 4 && (
            <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">04 / Machine Learning</p>
                <h2 className="text-4xl font-bold">Entrenamiento Jerárquico de IA</h2>
              </header>

              <div className="flex-1 grid grid-cols-1 gap-6">
                <div className="flex items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white/40 mt-1">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Partición Estratificada</h3>
                    <p className="text-white/80">División del dataset (80% entrenamiento / 20% prueba) manteniendo la proporción de cada carrera para asegurar equidad en la evaluación.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white/40 mt-1">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Clasificador de Nivel 1 (Predicción de Área)</h3>
                    <p className="text-white/80">Un modelo Random Forest (100 árboles, clases balanceadas) clasifica al estudiante en una de las 6 grandes áreas temáticas de la UdeG.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white/40 mt-1">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sub-Modelos Especialistas (Nivel 2)</h3>
                    <p className="text-white/80">Se entrena un bosque aleatorio independiente por área. Así, una vez identificada el área, solo compiten entre sí las carreras de dicho sector.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white/40 mt-1">04</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reducción PCA y Clustering K-Means</h3>
                    <p className="text-white/80">Se comprimen los centroides RIASEC de 6 dimensiones a 2 componentes (PCA_X, PCA_Y) y se segmentan en 5 grupos vocacionales.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 6: INFERENCIA Y MATEMÁTICAS ================= */}
          {currentSlide === 5 && (
            <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">05 / Algoritmos</p>
                <h2 className="text-4xl font-bold">Evaluación Psicométrica e Inferencia API</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">1. Promediado por Dimensión en React</h3>
                    <p className="text-white/80 mb-4">El usuario responde 36 reactivos (6 por dimensión RIASEC) del 1 al 10. El cliente calcula el promedio de cada dimensión.</p>
                    <div className="bg-[#001240] p-4 rounded text-center border border-white/20 font-serif text-lg">
                      X̄_d = 1/6 ∑(r_di)
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">2. Conversión Lineal (FastAPI)</h3>
                    <p className="text-white/80 mb-4">Transforma la escala 1-10 de la interfaz gráfica a la escala 1-7 utilizada en el entrenamiento del modelo predictivo.</p>
                    <div className="bg-[#001240] p-4 rounded text-center border border-white/20 font-serif text-lg">
                      X_norm = ((X̄_d - 1) / 9) × 6 + 1
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3">3. Cálculo de Afinidad Relativa</h3>
                  <p className="text-white/80 mb-6">
                    El sub-modelo especialista evalúa las probabilidades brutas de cada carrera del área predicha, extrae el Top 3 y normaliza su peso a porcentaje.
                  </p>
                  <div className="bg-[#001240] p-6 rounded border border-white/20 text-center font-serif text-xl">
                    Afinidad_i(%) = [ P_i / (P_1 + P_2 + P_3) ] × 100
                  </div>
                  <p className="text-white/60 text-sm mt-6 text-center">
                    * Donde P_i representa la probabilidad del componente en el conjunto de las 3 opciones más altas.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 7: RESULTADOS VISUALES ================= */}
          {currentSlide === 6 && (
            <div className="flex flex-col h-full px-12 py-8">
              <header className="mb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">06 / UI Dashboard</p>
                <h2 className="text-4xl font-bold">Visualización Científica y Emparejamiento</h2>
              </header>

              <div className="grid grid-cols-2 gap-6 flex-1">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-3">Emparejamiento de Alias</h3>
                  <p className="text-white/80 leading-relaxed">
                    Un algoritmo de resolución de sinónimos vincula los nombres devueltos por el modelo de IA con los identificadores reales de la base de datos de centros universitarios, permitiendo navegación directa a las fichas técnicas.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-3">Huella Vocacional (Radar)</h3>
                  <p className="text-white/80 leading-relaxed">
                    Representación gráfica hexagonal interactiva que traza los 6 promedios de las dimensiones vocacionales RIASEC evaluadas por el estudiante.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-3">Métricas de Desempeño</h3>
                  <p className="text-white/80 leading-relaxed">
                    El sistema expone la transparencia algorítmica mostrando la probabilidad de afinidad del usuario por área junto al Precision, Recall y F1-Score obtenidos en la validación del modelo.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-3">Mapa Espacial (Scatter)</h3>
                  <p className="text-white/80 leading-relaxed">
                    Grafica todas las carreras de la UdeG por color de cluster y posiciona al estudiante mediante un marcador rojo en sus coordenadas (x, y) proyectadas por el modelo de reducción PCA.
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