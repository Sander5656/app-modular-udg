import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Printer, GraduationCap } from 'lucide-react';

export const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  // Manejo de teclado para navegar entre diapositivas (Flechas izquierda / derecha)
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
    <div className="min-h-[calc(100dvh-4rem)] bg-slate-950 text-white flex flex-col justify-between select-none font-sans p-3 sm:p-6">
      
      {/* BARRA SUPERIOR DE CONTROLES (Se oculta al imprimir/exportar a PDF) */}
      <header className="no-print w-full max-w-6xl mx-auto px-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs">UdeG</div>
          </Link>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-white leading-tight">Presentación Técnica del Proyecto</h1>
            <p className="text-[10px] sm:text-xs text-slate-400">Usa las flechas del teclado ⬅️ ➡️ o los botones</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs font-bold bg-slate-800 text-blue-300 px-3 py-1.5 rounded-xl border border-slate-700">
            {currentSlide + 1} / {totalSlides}
          </span>
          <Button variant="outline" size="sm" onClick={prevSlide} className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 text-xs">
            <ArrowLeft className="h-3.5 w-3.5 mr-1" /> Anterior
          </Button>
          <Button size="sm" onClick={nextSlide} className="bg-blue-600 hover:bg-blue-500 text-xs font-bold">
            Siguiente <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
          <Button variant="secondary" size="sm" onClick={() => window.print()} className="bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold">
            <Printer className="h-3.5 w-3.5 mr-1" /> PDF
          </Button>
        </div>
      </header>

      {/* CONTENEDOR DE DIAPOSITIVAS (Formato Minimalista 16:9) */}
      <main className="flex-1 flex items-center justify-center py-4">
        <div className="w-full max-w-6xl h-[72vh] min-h-[500px] bg-gradient-to-br from-slate-900 via-blue-950/60 to-slate-900 rounded-3xl border border-blue-500/20 shadow-2xl overflow-hidden relative flex flex-col justify-between p-6 sm:p-10 md:p-14">

          {/* ================= DIAPOSITIVA 1: PORTADA ================= */}
          {currentSlide === 0 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[11px] font-semibold uppercase tracking-wider">
                  Universidad de Guadalajara · Red Universitaria
                </span>
                <span className="text-xs text-slate-400 font-medium">Ingeniería de Software + Inteligencia Artificial</span>
              </div>

              <div className="my-auto max-w-4xl space-y-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Sistema Inteligente de Orientación Vocacional y Guía de Carreras UdeG
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Plataforma web integrada impulsada por un modelo jerárquico de <strong>Machine Learning (Random Forest, PCA y K-Means)</strong> basado en la teoría psicométrica <strong>RIASEC</strong>.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-blue-400">19 + SUV</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase">Centros Universitarios</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">36 Reactivos</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase">Evaluación RIASEC (1-10)</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-indigo-400">2 Niveles</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase">Random Forest Jerárquico</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-amber-400">PCA + K-Means</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase">Proyección Espacial 2D</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 2: PROBLEMÁTICA Y OBJETIVO ================= */}
          {currentSlide === 1 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">01 · Contexto del Proyecto</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Problemática y Objetivo General</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
                <Card className="bg-slate-900/60 border-red-500/20 p-5 space-y-2 text-white">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 uppercase">Problemática</span>
                  <h3 className="text-base font-bold">Deserción e Indecisión Vocacional</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Los aspirantes enfrentan más de 130 programas distribuidos en 20 sedes. La carencia de herramientas cuantitativas provoca elecciones intuitivas que saturan carreras e incrementan la deserción escolar.
                  </p>
                </Card>

                <Card className="bg-slate-900/60 border-emerald-500/20 p-5 space-y-2 text-white">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 uppercase">Solución</span>
                  <h3 className="text-base font-bold">Diagnóstico Psicométrico + Catálogo Indexado</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Unificar puntajes mínimos de admisión (PAA), requisitos institucionales y un motor de Inteligencia Artificial que evalúa 6 dimensiones vocacionales para sugerir el Top 3 de licenciaturas idóneas.
                  </p>
                </Card>
              </div>

              <div className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-3 text-xs text-blue-200">
                🎯 <strong>Meta:</strong> Proveer información verídica y afinidad matemática basada en modelos predictivos entrenados con datos reales de la UdeG.
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 3: ARQUITECTURA TECNOLÓGICA ================= */}
          {currentSlide === 2 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">02 · Stack Tecnológico</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Arquitectura Cliente-Servidor Desacoplada</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
                <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase">Frontend</span>
                  <h3 className="text-sm font-bold">React + Vite + TypeScript</h3>
                  <p className="text-xs text-slate-300">Interfaz SPA reactiva, enrutamiento dinámico, diseño responsivo y visualización con Recharts.</p>
                </div>
                <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Seguridad</span>
                  <h3 className="text-sm font-bold">Supabase Auth + Hooks</h3>
                  <p className="text-xs text-slate-300">Gestión de sesiones JWT, protección de rutas y control de inactividad de usuario.</p>
                </div>
                <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-purple-400 uppercase">Backend IA</span>
                  <h3 className="text-sm font-bold">Python + FastAPI + Render</h3>
                  <p className="text-xs text-slate-300">Microservicio REST con Scikit-Learn y modelos serializados en binarios joblib (.pkl).</p>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                Flujo: Cliente React ➔ Supabase Auth ➔ Cuestionario RIASEC ➔ API REST FastAPI (Render) ➔ Dashboard Analítico
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 4: PROCESO PSICOMÉTRICO RIASEC ================= */}
          {currentSlide === 3 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">03 · Proceso Psicométrico</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Evaluación RIASEC de 36 Reactivos</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-auto">
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-blue-400">R · REALISTA</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Ingenierías prácticas, robótica, obra civil, agronomía y veterinaria.</p>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-indigo-400">I · INVESTIGADOR</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Programación/IA, medicina, química, física y biotecnología.</p>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-pink-400">A · ARTÍSTICO</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Arquitectura, diseño gráfico, cine, animación 3D, música y letras.</p>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-emerald-400">S · SOCIAL</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Psicología, enfermería, docencia, trabajo social y nutrición.</p>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-amber-400">E · EMPRENDEDOR</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Dirección de empresas, marketing, derecho, turismo y comercio internacional.</p>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-black text-cyan-400">C · CONVENCIONAL</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">Contaduría fiscal, finanzas, bases de datos, logística y auditoría.</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-300"><strong>Normalización Lineal:</strong> Conversión de escala 1-10 a O*NET estándar (1-7).</span>
                <code className="bg-blue-950 px-3 py-1.5 rounded border border-blue-400/40 font-mono font-bold text-blue-300">X_norm = ((X - 1) / 9) × 6 + 1</code>
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 5: ARQUITECTURA JERÁRQUICA ML ================= */}
          {currentSlide === 4 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">04 · Motor de Inteligencia Artificial</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Clasificación Jerárquica + Clustering Espacial</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
                <div className="bg-slate-900/80 border border-blue-400/20 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-blue-300 uppercase">Nivel 1</span>
                  <h3 className="text-sm font-bold">Predicción de Área UdeG</h3>
                  <p className="text-xs text-slate-300">Random Forest clasifica al alumno en una de las 6 grandes áreas temáticas de la Red Universitaria.</p>
                </div>
                <div className="bg-slate-900/80 border border-indigo-400/20 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase">Nivel 2</span>
                  <h3 className="text-sm font-bold">Sub-Modelo Especialista</h3>
                  <p className="text-xs text-slate-300">Calcula afinidad relativa para extraer el Top 3 de licenciaturas específicas de esa área.</p>
                </div>
                <div className="bg-slate-900/80 border border-emerald-400/20 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase">Espacial</span>
                  <h3 className="text-sm font-bold">PCA 2D + K-Means</h3>
                  <p className="text-xs text-slate-300">Comprime dimensiones y segmenta centroides en 5 grupos para ubicar al estudiante en el mapa.</p>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800">
                💡 <strong>Ventaja técnica:</strong> Previene la ambigüedad al separar la predicción macro (área) de la micro (carrera específica).
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 6: CATÁLOGO Y BUSCADOR ================= */}
          {currentSlide === 5 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">05 · Funcionalidades</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Catálogo Académico, Puntajes PAA y Búsqueda</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h3 className="text-sm font-bold text-blue-300">🔍 Buscador Instantáneo</h3>
                  <p className="text-xs text-slate-300">Normalización Unicode NFD para filtrar sin importar acentos por nombre o acrónimo de centro.</p>
                </div>
                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h3 className="text-sm font-bold text-emerald-300">📈 Puntajes Mínimos (minScore)</h3>
                  <p className="text-xs text-slate-300">Consulta de puntajes de corte recientes de ingreso a la UdeG integrados en cada ficha técnica.</p>
                </div>
                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h3 className="text-sm font-bold text-purple-300">🔗 Emparejamiento por Alias</h3>
                  <p className="text-xs text-slate-300">Diccionario inteligente para conectar los resultados del modelo de IA con las rutas internas de React.</p>
                </div>
                <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h3 className="text-sm font-bold text-amber-300">🧮 Conteo Único con Set</h3>
                  <p className="text-xs text-slate-300">Eliminación de duplicados institucionales para mostrar la estadística real de programas ofertados.</p>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                Diseño responsivo optimizado para cualquier dispositivo.
              </div>
            </div>
          )}

          {/* ================= DIAPOSITIVA 7: CONCLUSIÓN ================= */}
          {currentSlide === 6 && (
            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">06 · Conclusión</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Dashboard Científico para el Aspirante</h2>
              </div>

              <div className="my-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-blue-300">1. Huella RIASEC</h3>
                  <p className="text-xs text-slate-300">Gráfica polar interactiva que visualiza las 6 dimensiones vocacionales del estudiante.</p>
                </div>
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-emerald-300">2. Métricas del Modelo</h3>
                  <p className="text-xs text-slate-300">Visualización de Precision, Recall y F1-Score junto al porcentaje de afinidad por área.</p>
                </div>
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-amber-300">3. Mapa PCA 2D</h3>
                  <p className="text-xs text-slate-300">Ubicación espacial exacta del aspirante frente a los clústeres vocacionales de la Red Universitaria.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
                <div>
                  <h4 className="text-sm font-extrabold">Sistema Vocacional UdeG Operativo</h4>
                  <p className="text-[11px] text-blue-100">Frontend TypeScript + Supabase + FastAPI Machine Learning</p>
                </div>
                <Button variant="secondary" size="sm" onClick={() => window.print()} className="bg-white text-blue-950 font-bold text-xs">
                  Exportar a PDF
                </Button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
export default ProjectPresentation;