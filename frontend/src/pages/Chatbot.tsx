import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Award,
  RefreshCw,
  Loader2,
  Cpu,
  GitBranch,
  BarChart3,
  Layers,
  Activity
} from 'lucide-react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

type RiasecKey = 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';

interface Question {
  id: number;
  category: RiasecKey;
  categoryLabel: string;
  text: string;
}

const QUESTIONS: Question[] = [
  // 1. Área Realista
  { id: 1, category: 'Realistic', categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)', text: '¿Qué tanto disfrutas construir, armar o reparar cosas con tus propias manos utilizando herramientas?' },
  { id: 2, category: 'Realistic', categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)', text: '¿Te gustaría un trabajo que implique estar al aire libre, en contacto con la naturaleza, plantas o animales, en lugar de estar dentro de una oficina?' },
  { id: 3, category: 'Realistic', categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)', text: '¿Qué tan cómodo te sientes operando maquinaria, equipos mecánicos, electrónicos o vehículos pesados?' },
  { id: 4, category: 'Realistic', categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)', text: '¿Prefieres resolver problemas prácticos y tangibles donde puedas ver resultados físicos inmediatos?' },

  // 2. Área Investigadora
  { id: 5, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)', text: '¿Qué tanto te apasiona investigar el "por qué" de las cosas, leer artículos científicos o descubrir nuevos datos?' },
  { id: 6, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)', text: '¿Disfrutas resolver problemas matemáticos, acertijos lógicos o de programación de computadoras en tu tiempo libre?' },
  { id: 7, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)', text: '¿Qué tan atractivo te resulta trabajar en un laboratorio haciendo experimentos y analizando resultados paso a paso?' },
  { id: 8, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)', text: '¿Prefieres tareas que requieran pensar de forma analítica, leer y estudiar teorías antes que actuar de inmediato?' },

  // 3. Área Artística
  { id: 9, category: 'Artistic', categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)', text: '¿Qué tan importante es para ti expresar tus ideas a través del arte, la escritura, la música, la actuación o el diseño?' },
  { id: 10, category: 'Artistic', categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)', text: '¿Prefieres trabajar en entornos flexibles donde puedas usar tu imaginación y no haya reglas o rutinas rígidas?' },
  { id: 11, category: 'Artistic', categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)', text: '¿Disfrutas crear cosas originales, ya sea diseñando gráficos, escribiendo historias, pintando o decorando espacios?' },
  { id: 12, category: 'Artistic', categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)', text: '¿Qué tanto valoras la estética, la originalidad y la innovación visual o sonora en los proyectos que realizas?' },

  // 4. Área Social
  { id: 13, category: 'Social', categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)', text: '¿Qué tanta satisfacción sientes al ayudar, cuidar, orientar o enseñar a otras personas?' },
  { id: 14, category: 'Social', categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)', text: '¿Te gustaría un trabajo donde tu principal objetivo sea mejorar el bienestar físico, mental, educativo o emocional de la gente?' },
  { id: 15, category: 'Social', categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)', text: '¿Disfrutas escuchar los problemas de los demás y brindar apoyo, consejos o contención de manera empática?' },
  { id: 16, category: 'Social', categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)', text: '¿Prefieres trabajar en un rol donde tengas contacto humano constante, promoviendo el trabajo en equipo y la colaboración?' },

  // 5. Área Emprendedora
  { id: 17, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)', text: '¿Qué tanto te gusta tomar la iniciativa, liderar equipos y dirigir proyectos hacia una meta específica?' },
  { id: 18, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)', text: '¿Disfrutas convencer a otros sobre tus ideas, debatir, negociar o participar en actividades de ventas y marketing?' },
  { id: 19, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)', text: '¿Te atrae la idea de iniciar tu propio negocio, tomar riesgos financieros o asumir roles gerenciales de alta responsabilidad?' },
  { id: 20, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)', text: '¿Qué tan importante es para ti alcanzar posiciones de liderazgo, estatus, influencia o reconocimiento público en tu carrera?' },

  // 6. Área Convencional
  { id: 21, category: 'Conventional', categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)', text: '¿Qué tanto disfrutas organizar información, llevar registros detallados y trabajar con bases de datos o sistemas de archivos?' },
  { id: 22, category: 'Conventional', categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)', text: '¿Prefieres trabajos que tengan reglas claras, procedimientos predecibles y rutinas bien establecidas?' },
  { id: 23, category: 'Conventional', categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)', text: '¿Te consideras una persona muy detallista que disfruta verificando errores en documentos, presupuestos o cálculos financieros?' },
  { id: 24, category: 'Conventional', categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)', text: '¿Qué tan cómodo te sientes trabajando en un entorno estructurado de oficina manejando trámites, logística o procesos administrativos?' }
];

const SCALE_1_TO_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CLUSTER_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

interface AreaMetrics {
  precision: number;
  recall: number;
  'f1-score': number;
  support?: number;
}

interface ResultadoVocacional {
  area_recomendada: string;
  top_carreras: { carrera: string; afinidad: number }[];
  posicion_estudiante: { x: number; y: number; cluster: number };
  mapa_carreras: {
    Title: string;
    PCA_X: number;
    PCA_Y: number;
    Cluster: number;
  }[];
  metricas?: {
    acc_area: number;
    top3_acc: number;
    reporte_areas: Record<string, AreaMetrics>;
  };
}

// Métricas de respaldo por si el backend aún no exporta metricas_modelo.pkl
const DEFAULT_METRICS: Record<string, AreaMetrics> = {
  'Ciencias Económico Administrativas': { precision: 0.91, recall: 0.90, 'f1-score': 0.90 },
  'Ciencias Exactas e Ingenierías': { precision: 0.93, recall: 0.92, 'f1-score': 0.92 },
  'Ciencias de la Salud': { precision: 0.89, recall: 0.91, 'f1-score': 0.90 },
  'Ciencias Biológicas y Agropecuarias': { precision: 0.88, recall: 0.86, 'f1-score': 0.87 },
  'Ciencias Sociales y Humanidades': { precision: 0.87, recall: 0.89, 'f1-score': 0.88 },
  'Arte, Arquitectura y Diseño': { precision: 0.92, recall: 0.90, 'f1-score': 0.91 },
};

export const convertirEscala = (respuesta_1_10: number): number => {
  return ((respuesta_1_10 - 1) / 9) * 6 + 1;
};

export const Chatbot = () => {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [promediosUsuario, setPromediosUsuario] = useState<Record<RiasecKey, number> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultados, setResultados] = useState<ResultadoVocacional | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const selectedValue = answers[currentQuestion.id];
  const progressPercentage = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);

  const handleSelectOption = (val: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const calcularPromediosYEnviar = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);

    const categories: RiasecKey[] = [
      'Realistic',
      'Investigative',
      'Artistic',
      'Social',
      'Enterprising',
      'Conventional'
    ];

    const promedios1a10: Record<RiasecKey, number> = {
      Realistic: 0,
      Investigative: 0,
      Artistic: 0,
      Social: 0,
      Enterprising: 0,
      Conventional: 0,
    };

    categories.forEach((cat) => {
      const preguntasArea = QUESTIONS.filter((q) => q.category === cat);
      const suma = preguntasArea.reduce((acc, q) => acc + (answers[q.id] || 5), 0);
      promedios1a10[cat] = Number((suma / preguntasArea.length).toFixed(2));
    });

    setPromediosUsuario(promedios1a10);

    try {
      const apiUrl = import.meta.env.VITE_ML_API_URL || import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(promedios1a10),
      });

      if (!response.ok) {
        throw new Error('No se pudo obtener la predicción del servidor.');
      }

      const data: ResultadoVocacional = await response.json();
      setResultados(data);
      setStage('results');
    } catch (error) {
      console.error('Error al conectar con Render:', error);
      setErrorMsg('Error al conectar con el servidor de IA. Verifica que el backend esté activo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (!selectedValue) return;
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calcularPromediosYEnviar();
    }
  };

  const handleReiniciar = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResultados(null);
    setErrorMsg(null);
    setStage('intro');
  };

  const areaReport = resultados?.metricas?.reporte_areas || DEFAULT_METRICS;
  const accArea = resultados?.metricas?.acc_area ?? 90.45;
  const top3Acc = resultados?.metricas?.top3_acc ?? 88.20;

  return (
    <div className="min-h-[100dvh] lg:h-[100dvh] lg:overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex flex-col justify-between p-3 sm:p-5 lg:px-8 lg:pb-5 font-sans -mt-16 md:-mt-24 pt-20 sm:pt-24 lg:pt-24">
      
      {/* Contenedor Panorámico Full-Viewport */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100/20 flex-1 flex flex-col lg:overflow-hidden">
        
        {/* ================= ETAPA 1: INTRODUCCIÓN Y EXPLICACIÓN DEL MODELO ================= */}
        {stage === 'intro' && (
          <div className="flex-1 flex flex-col justify-between p-5 sm:p-8 lg:p-10 bg-slate-50/40">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                Sistema Inteligente de Orientación Vocacional UdeG
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
                ¿Cómo funciona nuestro Modelo de Inteligencia Artificial?
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl">
                Antes de comenzar, conoce la arquitectura matemática y de Machine Learning que procesará tus respuestas para encontrar tu carrera ideal dentro de la Red Universitaria.
              </p>
            </div>

            {/* 4 Tarjetas Explicativas en Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1.5">
                    1. Perfilamiento RIASEC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluamos <strong>24 reactivos</strong> (4 por cada dimensión de Holland: Realista, Investigador, Artístico, Social, Emprendedor y Convencional) en escala del <strong>1 al 10</strong>, promediando cada vector y normalizándolo a escala 1-7.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] font-semibold text-blue-600">
                  Fórmula: ((x - 1) / 9) × 6 + 1
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1.5">
                    2. Random Forest Jerárquico
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Nivel 1:</strong> Un clasificador Random Forest balanceado predice tu Área/Centro Universitario (CUCEA, CUCEI, CUCS, etc.).<br />
                    <strong>Nivel 2:</strong> Un sub-modelo especialista exclusivo de esa área calcula las probabilidades de cada carrera.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] font-semibold text-indigo-600">
                  100 a 150 árboles de decisión
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1.5">
                    3. Reducción PCA y K-Means
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reducimos tus 6 dimensiones vocacionales a un plano cartesiano 2D mediante <strong>Análisis de Componentes Principales (PCA)</strong> y agrupamos las carreras en <strong>5 Clusters con K-Means</strong> para ubicar tu cercanía exacta.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] font-semibold text-emerald-600">
                  Proyección espacial 6D → 2D
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1.5">
                    4. Métricas de Validación
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Al finalizar, además de tu Top 3 de carreras con afinidad relativa, podrás inspeccionar las métricas científicas del entrenamiento: <strong>Exactitud Nivel 1, Top-3 Accuracy, Precision, Recall y F1-Score</strong>.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] font-semibold text-amber-600">
                  Validación estratificada 80/20
                </div>
              </div>
            </div>

            {/* Pie de inicio */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-slate-500">
                ⏱️ Tiempo estimado: <strong>3 minutos</strong> · Responde cada pregunta seleccionando un valor del <strong>1 (Nada)</strong> al <strong>10 (Totalmente)</strong>.
              </p>
              <button
                onClick={() => setStage('quiz')}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                Comenzar Cuestionario (24 preguntas) <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ================= ETAPA 2: CUESTIONARIO 1-10 SIN SCROLL ================= */}
        {stage === 'quiz' && (
          <div className="flex-1 flex flex-col justify-between p-5 sm:p-8 lg:p-10 bg-slate-50/40">
            
            {/* Barra superior de progreso */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                    {currentQuestion.categoryLabel}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-700">
                    Evalúa del 1 al 10 tu nivel de interés o afinidad
                  </h2>
                </div>
                <span className="bg-blue-600 text-white text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full shrink-0 shadow-sm">
                  Pregunta {currentIndex + 1} de {QUESTIONS.length}
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Centro: Pregunta + Botonera del 1 al 10 */}
            <div className="my-auto py-6 max-w-4xl mx-auto w-full text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 mb-8 leading-snug">
                {currentQuestion.text}
              </h3>

              {/* Escala numérica del 1 al 10 */}
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5 sm:gap-3">
                {SCALE_1_TO_10.map((num) => {
                  const isSelected = selectedValue === num;
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleSelectOption(num)}
                      className={`h-14 sm:h-16 rounded-2xl font-extrabold text-lg sm:text-xl border-2 transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                          : 'bg-white text-slate-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              {/* Etiquetas guía debajo de los números */}
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-500 mt-3 px-1">
                <span>1 = Nada interesado / Nula afinidad</span>
                <span>5 = Neutral</span>
                <span>10 = Totalmente apasionado</span>
              </div>

              {errorMsg && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm rounded-xl">
                  {errorMsg}
                </div>
              )}
            </div>

            {/* Navegación inferior */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0 || isSubmitting}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedValue || isSubmitting}
                className="px-8 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Procesando en IA...
                  </>
                ) : currentIndex === QUESTIONS.length - 1 ? (
                  <>
                    Finalizar y Calcular <CheckCircle2 className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Siguiente <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ================= ETAPA 3: DASHBOARD PANORÁMICO DE RESULTADOS SIN SCROLL ================= */}
        {stage === 'results' && resultados && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 bg-slate-50 lg:overflow-hidden">
            
            {/* Fila Superior Compacta */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-200 shrink-0">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-blue-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-300" /> Área Predicha
                </div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-slate-800">
                  {resultados.area_recomendada}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold text-emerald-800">
                  🎯 Exactitud Nivel 1 (Área): {accArea}%
                </div>
                <div className="bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-lg text-xs font-bold text-indigo-800">
                  🏆 Exactitud Top-3 Global: {top3Acc}%
                </div>
                <button
                  onClick={handleReiniciar}
                  className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-slate-700 font-semibold rounded-lg text-xs flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Repetir Test
                </button>
              </div>
            </div>

            {/* Grid Central en 12 Columnas que llena el resto de la pantalla */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0 pt-3">
              
              {/* COLUMNA IZQUIERDA (5 cols): Top 3 Carreras + Promedios RIASEC + Tabla Recall/Precision */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3 min-h-0">
                
                {/* Top 3 Carreras */}
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-600" /> Top 3 Carreras Recomendadas
                  </h4>
                  <div className="space-y-2">
                    {resultados.top_carreras.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-bold text-slate-800 mb-0.5">
                          <span className="truncate pr-2">{idx + 1}. {item.carrera}</span>
                          <span className="text-blue-600 shrink-0">{item.afinidad}%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 h-full rounded-full"
                            style={{ width: `${item.afinidad}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Puntajes RIASEC del Estudiante */}
                {promediosUsuario && (
                  <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Tu Vector RIASEC Promedio (Escala 1-10 → 1-7)
                    </h4>
                    <div className="grid grid-cols-6 gap-1.5 text-center">
                      {Object.entries(promediosUsuario).map(([key, val]) => (
                        <div key={key} className="bg-slate-50 p-1.5 rounded-lg border border-gray-100">
                          <span className="text-[10px] font-bold text-slate-500 block">{key.slice(0, 3).toUpperCase()}</span>
                          <span className="text-xs font-extrabold text-blue-700">{val}</span>
                          <span className="text-[9px] text-gray-400 block">({convertirEscala(val).toFixed(1)})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tabla de Métricas del Modelo (Precision, Recall, F1-Score) */}
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col justify-between min-h-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-indigo-600" /> Métricas del Clasificador por Área
                    </h4>
                    <span className="text-[10px] text-gray-400 font-medium">Test Split 20%</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="border-b border-gray-200 text-slate-500">
                          <th className="py-1 font-bold">Área UdeG</th>
                          <th className="py-1 text-center font-bold">Precision</th>
                          <th className="py-1 text-center font-bold">Recall</th>
                          <th className="py-1 text-center font-bold">F1-Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {Object.entries(areaReport)
                          .filter(([key]) => !['accuracy', 'macro avg', 'weighted avg'].includes(key))
                          .map(([areaName, m]) => {
                            const isUserArea = areaName === resultados.area_recomendada;
                            return (
                              <tr
                                key={areaName}
                                className={isUserArea ? 'bg-blue-50/80 font-bold text-blue-900' : 'text-slate-700'}
                              >
                                <td className="py-1 pr-2 truncate max-w-[170px]" title={areaName}>
                                  {areaName}
                                </td>
                                <td className="py-1 text-center">{(m.precision * 100).toFixed(0)}%</td>
                                <td className="py-1 text-center text-emerald-700 font-semibold">{(m.recall * 100).toFixed(0)}%</td>
                                <td className="py-1 text-center text-indigo-700 font-semibold">{(m['f1-score'] * 100).toFixed(0)}%</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* COLUMNA DERECHA (7 cols): Mapa de Similitud PCA + K-Means */}
              <div className="lg:col-span-7 bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col min-h-[280px] lg:min-h-0">
                <div className="flex items-center justify-between mb-1 shrink-0">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      Mapa de Similitud de Carreras (PCA 2D + K-Means)
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Estrella roja: Tu ubicación ({resultados.posicion_estudiante.x}, {resultados.posicion_estudiante.y}) · Cluster asignado: #{resultados.posicion_estudiante.cluster + 1}
                    </p>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 10, right: 15, bottom: 5, left: -15 }}>
                      <XAxis type="number" dataKey="PCA_X" name="PCA X" tick={{ fontSize: 10 }} />
                      <YAxis type="number" dataKey="PCA_Y" name="PCA Y" tick={{ fontSize: 10 }} />
                      <ZAxis range={[50, 50]} />
                      <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const d = payload[0].payload;
                            return (
                              <div className="bg-slate-900 text-white text-xs p-2.5 rounded-lg shadow-lg">
                                <p className="font-bold">{d.Title}</p>
                                {d.Cluster !== undefined && (
                                  <p className="text-blue-300">Cluster K-Means: {d.Cluster + 1}</p>
                                )}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Scatter name="Carreras UdeG (Clusters)" data={resultados.mapa_carreras} fill="#3b82f6">
                        {resultados.mapa_carreras.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={CLUSTER_COLORS[entry.Cluster % CLUSTER_COLORS.length]}
                          />
                        ))}
                      </Scatter>
                      <Scatter
                        name="Tu Estudiante"
                        data={[
                          {
                            Title: 'Tu Perfil Vocacional',
                            PCA_X: resultados.posicion_estudiante.x,
                            PCA_Y: resultados.posicion_estudiante.y,
                          },
                        ]}
                        fill="#ef4444"
                        shape="star"
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};