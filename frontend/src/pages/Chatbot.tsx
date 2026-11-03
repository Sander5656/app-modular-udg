import { useState } from 'react';
import { Link } from 'react-router-dom';
import { universityCenters } from "@/data/universityCenters";
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
  Activity,
  ArrowUpRight
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
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

type RiasecKey = 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';

interface Question {
  id: number;
  category: RiasecKey;
  categoryLabel: string;
  text: string;
}

const QUESTIONS: Question[] = [
  // ... (Aquí van tus 36 preguntas intactas) ...
  { id: 1, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Qué tanto te gustaría armar, programar o reparar circuitos electrónicos, robots, motores o maquinaria industrial?' },
  { id: 2, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te atrae participar en la construcción de obras civiles, carreteras, puentes o hacer mediciones de terrenos con equipo topográfico?' },
  { id: 3, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Disfrutarías trabajar en granjas, invernaderos o clínicas cuidando animales, cultivos agrícolas o producción pecuaria?' },
  { id: 4, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Prefieres un trabajo de campo al aire libre (bosques, costas, ecosistemas o reservas naturales) en vez de estar todo el día en un escritorio?' },
  { id: 5, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te llama la atención operar instrumentos especializados en plantas de producción, laboratorios de materiales o energías renovables?' },
  { id: 6, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te gustan las actividades que exigen movimiento físico, destreza manual, uso de herramientas o entrenamiento deportivo?' },
  
  { id: 7, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Qué tanto disfrutas resolver problemas de lógica, escribir código de programación, desarrollar software o entrenar inteligencia artificial?' },
  { id: 8, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te interesa estudiar cómo funciona el cuerpo humano, analizar síntomas clínicos y diagnosticar enfermedades desde un enfoque médico?' },
  { id: 9, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Qué tan atractivo te resulta hacer experimentos en un laboratorio químico, analizar muestras clínicas o desarrollar nuevos medicamentos?' },
  { id: 10, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te apasiona aplicar matemáticas avanzadas, estadística o física para modelar fenómenos complejos y entender el universo?' },
  { id: 11, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te gustaría investigar evidencias científicas, analizar escenas forenses o estudiar a fondo las causas de los fenómenos históricos y sociales?' },
  { id: 12, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Disfrutas investigar sobre genética, biología molecular, nanotecnología o cómo mejorar los alimentos mediante la ciencia?' },

  { id: 13, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Qué tanto te gustaría diseñar planos arquitectónicos, imaginar edificios sustentables o transformar espacios interiores?' },
  { id: 14, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te apasiona crear identidades visuales, ilustraciones, prototipos de productos industriales o experiencias interactivas?' },
  { id: 15, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te atrae producir cine, dirigir fotografía, hacer animación 2D/3D o diseñar el arte visual para videojuegos?' },
  { id: 16, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Qué tan importante es para ti expresarte en un escenario mediante la música, el teatro, la actuación o la danza?' },
  { id: 17, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Disfrutas escribir historias originales, guiones, crónicas periodísticas, literatura o analizar obras artísticas?' },
  { id: 18, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te entusiasma crear colecciones de moda, escultura, pintura o innovar en el diseño artesanal y cultural?' },

  { id: 19, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Qué tanto te interesa comprender la mente humana, escuchar a las personas y brindar terapia o apoyo psicológico?' },
  { id: 20, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te daría satisfacción atender directamente a pacientes en un hospital, cuidando su recuperación física, dental o de enfermería?' },
  { id: 21, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Disfrutas enseñar, explicar temas complejos con paciencia, aprender otros idiomas o diseñar programas educativos?' },
  { id: 22, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te motiva trabajar en proyectos comunitarios, defender derechos humanos o apoyar a grupos vulnerables desde el trabajo social?' },
  { id: 23, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te gustaría guiar a las personas para mejorar sus hábitos de nutrición, su bienestar en la tercera edad o su rehabilitación física?' },
  { id: 24, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Prefieres profesiones con trato humano diario, orientando personas y comunicándote en equipo todo el tiempo?' },

  { id: 25, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Qué tanto te atrae fundar tu propio negocio, dirigir empresas y tomar decisiones estratégicas de alto impacto?' },
  { id: 26, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Disfrutas crear campañas de mercadotecnia, posicionar marcas en redes digitales, hacer relaciones públicas o persuadir clientes?' },
  { id: 27, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te entusiasma el comercio internacional, negociar con empresas de otros países, la diplomacia o los agronegocios de exportación?' },
  { id: 28, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Qué tanta facilidad tienes para debatir leyes, defender casos legales como abogado o participar en política y gobierno?' },
  { id: 29, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te gustaría dirigir hoteles, organizar grandes eventos, gestionar destinos turísticos o administrar negocios gastronómicos?' },
  { id: 30, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te sientes cómodo liderando equipos de personas, gestionando el talento humano y asumiendo retos competitivos?' },

  { id: 31, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Qué tanto te agrada llevar el control exacto de presupuestos, impuestos, contabilidad o estados financieros de una empresa?' },
  { id: 32, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Te interesa analizar mercados financieros, evaluar riesgos de inversión, banca digital (Fintech) o indicadores económicos?' },
  { id: 33, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Disfrutas organizar grandes bases de datos, administrar redes informáticas, ciberseguridad o sistematizar información?' },
  { id: 34, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Te atrae planificar rutas de transporte, controlar inventarios industriales, cadenas de suministro o logística aeroportuaria?' },
  { id: 35, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Eres meticuloso para hacer auditorías, verificar el cumplimiento de normas de calidad y detectar errores en documentos o contratos?' },
  { id: 36, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Prefieres entornos de trabajo bien estructurados, con procesos claros, ordenados y metas cuantificables?' }
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
  afinidad_areas?: Record<string, number>;
  top_carreras: { carrera: string; afinidad: number }[];
  posicion_estudiante: { x: number; y: number; cluster: number };
  mapa_carreras: { Title: string; PCA_X: number; PCA_Y: number; Cluster: number; }[];
  metricas?: { acc_area: number; top3_acc: number; reporte_areas: Record<string, AreaMetrics>; };
}

// ... (ALIAS_MAP, normalizeText, findCareerInfo y convertirEscala permanecen igual) ...
const ALIAS_MAP: Record<string, string[]> = {
  "terapia ocupacional": ["terapia fisica", "podologia", "cultura fisica"],
  "medico cirujano y partero": ["medicina", "medico cirujano"],
  "cirujano dentista": ["odontologia", "cirujano dentista"],
  "educacion / pedagogia": ["educacion", "pedagogia", "didactica"],
  "antropologia / arqueologia": ["antropologia", "arqueologia"],
  "criminologia / ciencias forenses": ["criminologia", "ciencias forenses"],
  "periodismo / comunicacion publica": ["periodismo", "comunicacion publica", "ciencias de la comunicacion", "ciencias y artes audiovisuales"],
  "docencia del ingles / lenguas": ["docencia del ingles", "lenguas y culturas extranjeras", "didactica del frances"],
  "artes escenicas (teatro y danza)": ["artes escenicas", "expresion dancistica", "expresion teatral"],
  "artes audiovisuales (cine)": ["artes audiovisuales", "cine", "animacion y arte digital"],
  "energia / nanotecnologia": ["energia", "nanotecnologia"],
  "ciencias ambientales": ["biologia", "recursos naturales"],
  "sistemas biologicos": ["agrobiotecnologia", "biotecnologia"],
};

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^lic\.\s+en\s+|^licenciatura\s+en\s+|^ing\.\s+|^ingenieria\s+en\s+/, "")
    .trim();
};

const findCareerInfo = (carreraName: string) => {
  const normalizedInput = normalizeText(carreraName);
  const searchTerms = [normalizedInput];

  for (const [key, aliases] of Object.entries(ALIAS_MAP)) {
    if (normalizedInput.includes(normalizeText(key))) {
      searchTerms.push(...aliases);
    }
  }

  for (const center of universityCenters) {
    for (const c of center.careers) {
      const normalizedC = normalizeText(c.name);
      for (const term of searchTerms) {
        if (
          normalizedC === term ||
          normalizedC.includes(term) ||
          term.includes(normalizedC)
        ) {
          return { careerId: c.id, centerAcronym: center.acronym };
        }
      }
    }
  }
  return null;
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

  const handleSelectOption = (val: number) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));
  const handlePrevious = () => { if (currentIndex > 0) setCurrentIndex((prev) => prev - 1); };

  const calcularPromediosYEnviar = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);

    const categories: RiasecKey[] = ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional'];
    const promedios1a10 = { Realistic: 0, Investigative: 0, Artistic: 0, Social: 0, Enterprising: 0, Conventional: 0 };

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

      if (!response.ok) throw new Error('No se pudo obtener la predicción del servidor.');

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
    if (currentIndex < QUESTIONS.length - 1) setCurrentIndex((prev) => prev + 1);
    else calcularPromediosYEnviar();
  };

  const handleReiniciar = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResultados(null);
    setErrorMsg(null);
    setStage('intro');
  };

  const areaReport = resultados?.metricas?.reporte_areas || null;
  const afinidadAreas = resultados?.afinidad_areas || null;

  const radarData = promediosUsuario ? [
    { subject: 'Realista', A: promediosUsuario.Realistic, fullMark: 10 },
    { subject: 'Investigador', A: promediosUsuario.Investigative, fullMark: 10 },
    { subject: 'Artístico', A: promediosUsuario.Artistic, fullMark: 10 },
    { subject: 'Social', A: promediosUsuario.Social, fullMark: 10 },
    { subject: 'Emprendedor', A: promediosUsuario.Enterprising, fullMark: 10 },
    { subject: 'Convencional', A: promediosUsuario.Conventional, fullMark: 10 },
  ] : [];

  return (
    // Color de fondo azul sólido (#1e3a8a - blue-900)
    <div className="min-h-screen w-full bg-[#1e3a8a] flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      
      {/* Contenedor Blanco Principal (Bordes suaves y sombra profunda) */}
      <div className="w-full max-w-7xl bg-white rounded-[32px] shadow-2xl flex flex-col h-[calc(100vh-64px)] min-h-[600px] overflow-hidden">
        
        {/* ================= ETAPA 1: INTRODUCCIÓN (Diseño Reestructurado) ================= */}
        {stage === 'intro' && (
          <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:px-16 lg:py-14">
            
            {/* Cabecera / Título */}
            <div className="max-w-3xl">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Sistema Inteligente de Orientación Vocacional UdeG
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                ¿Cómo funciona nuestro Modelo de Inteligencia Artificial?
              </h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                Conoce la arquitectura matemática y de Machine Learning que procesará tus respuestas para encontrar tu carrera ideal en la Red Universitaria.
              </p>
            </div>

            {/* Grid Central: Las 4 Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-auto">
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Perfilamiento RIASEC</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Evaluamos <strong>36 reactivos</strong> (6 por cada dimensión: Realista, Investigador, Artístico, Social, Emprendedor, Convencional) abarcando todas las disciplinas.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">2. Random Forest Jerárquico</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-1">
                  <strong>Nivel 1:</strong> Clasifica tu Área UdeG.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  <strong>Nivel 2:</strong> Calcula la probabilidad de cada licenciatura específica.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">3. Reducción PCA y K-Means</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Reducimos 6 dimensiones a 2D y agrupamos carreras en 5 Clusters para ubicar tu cercanía espacial.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">4. Métricas del Modelo</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Extraemos directamente del modelo entrenado tu afinidad por área, Exactitud, Precision, Recall y F1-Score.
                </p>
              </div>

            </div>

            {/* Barra Inferior (Tiempo y Botón) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-xl">⏱️</span>
                <p>Tiempo estimado: <strong className="text-slate-700">4 minutos</strong> · 36 preguntas en total</p>
              </div>
              <button 
                onClick={() => setStage('quiz')} 
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3b82f6] hover:bg-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                Comenzar Cuestionario (36 preguntas) <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        )}

        {/* ================= ETAPA 2: CUESTIONARIO ================= */}
        {stage === 'quiz' && (
          // ... (El bloque de cuestionario que ya tienes funcionará bien dentro del nuevo contenedor) ...
          <div className="flex-1 flex flex-col justify-between p-6 lg:px-12 lg:py-8 gap-6">
            <div className="shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">{currentQuestion.categoryLabel}</span>
                  <h2 className="text-base font-bold text-slate-800">Selecciona del 1 al 10 tu nivel de interés o afinidad</h2>
                </div>
                <span className="bg-blue-50 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full">Pregunta {currentIndex + 1} de {QUESTIONS.length}</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
              </div>
            </div>

            <div className="my-auto max-w-4xl mx-auto w-full text-center">
              <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-10 leading-tight">{currentQuestion.text}</h3>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                {SCALE_1_TO_10.map((num) => (
                  <button key={num} type="button" onClick={() => handleSelectOption(num)} className={`h-14 sm:h-16 rounded-2xl font-extrabold text-xl border-2 transition-all flex items-center justify-center ${selectedValue === num ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' : 'bg-white text-slate-600 border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs font-semibold text-slate-400 mt-4 px-2 uppercase tracking-wide">
                <span>1 = Nada interesado</span><span>5 = Neutral</span><span>10 = Muy apasionado</span>
              </div>
              {errorMsg && <div className="mt-6 p-4 bg-red-50 text-red-600 text-sm font-medium rounded-xl">{errorMsg}</div>}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100 shrink-0">
              <button type="button" onClick={handlePrevious} disabled={currentIndex === 0 || isSubmitting} className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-600 bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-40 flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Anterior</button>
              <button type="button" onClick={handleNext} disabled={!selectedValue || isSubmitting} className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 shadow-md">
                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Calculando...</> : currentIndex === QUESTIONS.length - 1 ? <>Ver Resultados <CheckCircle2 className="w-4 h-4" /></> : <>Siguiente <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>
          </div>
        )}

        {/* ================= ETAPA 3: DASHBOARD DE RESULTADOS ================= */}
        {stage === 'results' && resultados && (
          // ... (El bloque de resultados permanece igual que en el archivo anterior, se adaptará al nuevo estilo limpio) ...
          <div className="flex-1 flex flex-col justify-between p-6 lg:px-8 lg:py-6 gap-6 bg-slate-50/50">
             {/* Header de Resultados */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 shrink-0">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-blue-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Compass className="w-4 h-4 text-blue-300" /> Área Predicha</div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{resultados.area_recomendada}</h2>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handleReiniciar} className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 text-slate-700 font-semibold rounded-xl text-sm flex items-center gap-2 shadow-sm transition-colors"><RefreshCw className="w-4 h-4" /> Repetir Test</button>
              </div>
            </div>
            
            {/* El resto de la vista de resultados se mantiene idéntico a tu versión anterior, aprovechando el layout lg:col-span-5 y lg:col-span-7 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
               {/* Contenido Izquierdo */}
               <div className="lg:col-span-5 flex flex-col gap-4 overflow-y-auto lg:overflow-visible">
                 <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-blue-600" /> Top 3 Carreras Recomendadas</h4>
                    <div className="space-y-3">
                      {resultados.top_carreras.map((item, idx) => (
                          <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-2">
                               <span>{idx + 1}. {item.carrera}</span>
                               <span className="text-blue-600">{item.afinidad}%</span>
                             </div>
                             <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: `${item.afinidad}%` }} />
                             </div>
                          </div>
                      ))}
                    </div>
                 </div>
                 
                 {/* Radar RIASEC Mínimo */}
                 <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0 flex flex-col items-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 self-start">Huella Vocacional</h4>
                    <div className="w-full h-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                          <PolarGrid stroke="#f1f5f9" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'bold' }} />
                          <Radar name="Promedio" dataKey="A" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.5} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                 </div>
               </div>

               {/* Contenido Derecho (Mapa) */}
               <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-[400px] lg:h-auto min-h-0">
                  <div className="mb-4 shrink-0">
                    <h4 className="text-base font-bold text-slate-900">Mapa Espacial de Similitud (PCA)</h4>
                    <p className="text-xs text-slate-500 mt-1">Tu perfil (Estrella Roja) proyectado contra las carreras de la UdeG.</p>
                  </div>
                  <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: -20 }}>
                        <XAxis type="number" dataKey="PCA_X" tick={{ fontSize: 11 }} />
                        <YAxis type="number" dataKey="PCA_Y" tick={{ fontSize: 11 }} />
                        <ZAxis range={[60, 60]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl">
                                <p className="font-bold mb-1">{payload[0].payload.Title}</p>
                              </div>
                            );
                          }
                          return null;
                        }} />
                        <Scatter data={resultados.mapa_carreras} fill="#3b82f6">
                          {resultados.mapa_carreras.map((entry, index) => <Cell key={index} fill={CLUSTER_COLORS[entry.Cluster % CLUSTER_COLORS.length]} />)}
                        </Scatter>
                        <Scatter data={[{ Title: 'Tu Perfil', PCA_X: resultados.posicion_estudiante.x, PCA_Y: resultados.posicion_estudiante.y }]} fill="#ef4444" shape="star" />
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