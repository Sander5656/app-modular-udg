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

// 36 Preguntas (6 por cada dimensión RIASEC) diseñadas para cubrir todos los subsectores de la UdeG
const QUESTIONS: Question[] = [
  // 1. REALISTA (6 preguntas: Mecánica/Electrónica, Obra Civil/Topografía, Agro/Veterinaria, Naturaleza/Biología, Laboratorio Industrial, Deporte/Actividad Física)
  { id: 1, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Qué tanto te gustaría armar, programar o reparar circuitos electrónicos, robots, motores o maquinaria industrial?' },
  { id: 2, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te atrae participar en la construcción de obras civiles, carreteras, puentes o hacer mediciones de terrenos con equipo topográfico?' },
  { id: 3, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Disfrutarías trabajar en granjas, invernaderos o clínicas cuidando animales, cultivos agrícolas o producción pecuaria?' },
  { id: 4, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Prefieres un trabajo de campo al aire libre (bosques, costas, ecosistemas o reservas naturales) en vez de estar todo el día en un escritorio?' },
  { id: 5, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te llama la atención operar instrumentos especializados en plantas de producción, laboratorios de materiales o energías renovables?' },
  { id: 6, category: 'Realistic', categoryLabel: 'Área Realista (Práctica, Ingeniería Física, Campo y Manufactura)', text: '¿Te gustan las actividades que exigen movimiento físico, destreza manual, uso de herramientas o entrenamiento deportivo?' },

  // 2. INVESTIGADOR (6 preguntas: Software/IA, Medicina/Clínica, Química/Fármacos, Física/Matemáticas, Investigación Social/Forense, Biotecnología/Genética)
  { id: 7, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Qué tanto disfrutas resolver problemas de lógica, escribir código de programación, desarrollar software o entrenar inteligencia artificial?' },
  { id: 8, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te interesa estudiar cómo funciona el cuerpo humano, analizar síntomas clínicos y diagnosticar enfermedades desde un enfoque médico?' },
  { id: 9, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Qué tan atractivo te resulta hacer experimentos en un laboratorio químico, analizar muestras clínicas o desarrollar nuevos medicamentos?' },
  { id: 10, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te apasiona aplicar matemáticas avanzadas, estadística o física para modelar fenómenos complejos y entender el universo?' },
  { id: 11, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Te gustaría investigar evidencias científicas, analizar escenas forenses o estudiar a fondo las causas de los fenómenos históricos y sociales?' },
  { id: 12, category: 'Investigative', categoryLabel: 'Área Investigadora (Ciencia, Código, Salud Analítica e Investigación)', text: '¿Disfrutas investigar sobre genética, biología molecular, nanotecnología o cómo mejorar los alimentos mediante la ciencia?' },

  // 3. ARTÍSTICO (6 preguntas: Arquitectura/Interiores, Diseño Gráfico/Industrial, Cine/Animación/Videojuegos, Música/Artes Escénicas, Escritura/Letras, Moda/Artes Plásticas)
  { id: 13, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Qué tanto te gustaría diseñar planos arquitectónicos, imaginar edificios sustentables o transformar espacios interiores?' },
  { id: 14, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te apasiona crear identidades visuales, ilustraciones, prototipos de productos industriales o experiencias interactivas?' },
  { id: 15, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te atrae producir cine, dirigir fotografía, hacer animación 2D/3D o diseñar el arte visual para videojuegos?' },
  { id: 16, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Qué tan importante es para ti expresarte en un escenario mediante la música, el teatro, la actuación o la danza?' },
  { id: 17, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Disfrutas escribir historias originales, guiones, crónicas periodísticas, literatura o analizar obras artísticas?' },
  { id: 18, category: 'Artistic', categoryLabel: 'Área Artística (Arquitectura, Diseño, Medios Digitales y Creación)', text: '¿Te entusiasma crear colecciones de moda, escultura, pintura o innovar en el diseño artesanal y cultural?' },

  // 4. SOCIAL (6 preguntas: Psicología/Salud Mental, Enfermería/Rehabilitación, Docencia/Idiomas, Trabajo Social/Comunidad, Nutrición/Gerontología, Comunicación/Mediación)
  { id: 19, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Qué tanto te interesa comprender la mente humana, escuchar a las personas y brindar terapia o apoyo psicológico?' },
  { id: 20, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te daría satisfacción atender directamente a pacientes en un hospital, cuidando su recuperación física, dental o de enfermería?' },
  { id: 21, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Disfrutas enseñar, explicar temas complejos con paciencia, aprender otros idiomas o diseñar programas educativos?' },
  { id: 22, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te motiva trabajar en proyectos comunitarios, defender derechos humanos o apoyar a grupos vulnerables desde el trabajo social?' },
  { id: 23, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Te gustaría guiar a las personas para mejorar sus hábitos de nutrición, su bienestar en la tercera edad o su rehabilitación física?' },
  { id: 24, category: 'Social', categoryLabel: 'Área Social (Salud Humana, Psicología, Educación y Comunidad)', text: '¿Prefieres profesiones con trato humano diario, orientando personas y comunicándote en equipo todo el tiempo?' },

  // 5. EMPRENDEDOR (6 preguntas: Dirección de Empresas, Marketing/Publicidad, Comercio Internacional, Derecho/Política, Turismo/Gastronomía, Gestión de Proyectos/Ventas)
  { id: 25, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Qué tanto te atrae fundar tu propio negocio, dirigir empresas y tomar decisiones estratégicas de alto impacto?' },
  { id: 26, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Disfrutas crear campañas de mercadotecnia, posicionar marcas en redes digitales, hacer relaciones públicas o persuadir clientes?' },
  { id: 27, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te entusiasma el comercio internacional, negociar con empresas de otros países, la diplomacia o los agronegocios de exportación?' },
  { id: 28, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Qué tanta facilidad tienes para debatir leyes, defender casos legales como abogado o participar en política y gobierno?' },
  { id: 29, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te gustaría dirigir hoteles, organizar grandes eventos, gestionar destinos turísticos o administrar negocios gastronómicos?' },
  { id: 30, category: 'Enterprising', categoryLabel: 'Área Emprendedora (Negocios, Liderazgo, Derecho, Marketing y Turismo)', text: '¿Te sientes cómodo liderando equipos de personas, gestionando el talento humano y asumiendo retos competitivos?' },

  // 6. CONVENCIONAL (6 preguntas: Contaduría/Impuestos, Finanzas/Economía, Bases de Datos/TI, Logística/Aduanas, Auditoría/Calidad, Administración Documental)
  { id: 31, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Qué tanto te agrada llevar el control exacto de presupuestos, impuestos, contabilidad o estados financieros de una empresa?' },
  { id: 32, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Te interesa analizar mercados financieros, evaluar riesgos de inversión, banca digital (Fintech) o indicadores económicos?' },
  { id: 33, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Disfrutas organizar grandes bases de datos, administrar redes informáticas, ciberseguridad o sistematizar información?' },
  { id: 34, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Te atrae planificar rutas de transporte, controlar inventarios industriales, cadenas de suministro o logística aeroportuaria?' },
  { id: 35, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Eres meticuloso para hacer auditorías, verificar el cumplimiento de normas de calidad y detectar errores en documentos o contratos?' },
  { id: 36, category: 'Conventional', categoryLabel: 'Área Convencional (Finanzas, Contaduría, Logística, Datos y Control)', text: '¿Prefieres entornos de trabajo bien estructurados, con procesos claros, ordenados y metas cuantificables?' },
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

  // Leemos directamente las métricas enviadas por el modelo en el backend (sin constantes hardcodeadas)
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
    <div className="-mt-6 min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4.25rem)] w-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex flex-col justify-center p-2.5 sm:p-4 lg:px-6 lg:py-3 font-sans lg:overflow-hidden">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100/20 flex-1 flex flex-col lg:min-h-0 lg:overflow-hidden">
        
        {/* ================= ETAPA 1: INTRODUCCIÓN ================= */}
        {stage === 'intro' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 lg:px-8 lg:py-5 bg-slate-50/40 gap-4 lg:gap-2 lg:min-h-0">
            <div className="shrink-0">
              <span className="inline-block bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5">Sistema Inteligente de Orientación Vocacional UdeG</span>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 leading-tight">¿Cómo funciona nuestro Modelo de Inteligencia Artificial?</h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl">Conoce la arquitectura matemática y de Machine Learning que procesará tus respuestas para encontrar tu carrera ideal en la Red Universitaria.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-auto">
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2"><Layers className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">1. Perfilamiento RIASEC</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Evaluamos <strong>36 reactivos</strong> (6 por cada dimensión: Realista, Investigador, Artístico, Social, Emprendedor, Convencional) abarcando todas las disciplinas.</p>
                </div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2"><GitBranch className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">2. Random Forest Jerárquico</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"><strong>Nivel 1:</strong> Clasifica tu Área UdeG.<br /><strong>Nivel 2:</strong> Calcula la probabilidad de cada licenciatura específica.</p>
                </div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2"><Cpu className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">3. Reducción PCA y K-Means</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Reducimos 6 dimensiones a 2D y agrupamos carreras en 5 Clusters para ubicar tu cercanía espacial.</p>
                </div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2"><BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">4. Métricas del Modelo</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Extraemos directamente del modelo entrenado tu afinidad por área, Exactitud, Precision, Recall y F1-Score.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-200 shrink-0">
              <p className="text-xs text-slate-500 text-center sm:text-left">⏱️ Tiempo estimado: <strong>4 minutos</strong> · 36 preguntas en total</p>
              <button onClick={() => setStage('quiz')} className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all">
                Comenzar Cuestionario (36 preguntas) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= ETAPA 2: CUESTIONARIO ================= */}
        {stage === 'quiz' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 lg:px-10 lg:py-6 bg-slate-50/40 gap-4 lg:min-h-0">
            <div className="shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block">{currentQuestion.categoryLabel}</span>
                  <h2 className="text-sm sm:text-base font-bold text-slate-700">Selecciona del 1 al 10 tu nivel de interés o afinidad</h2>
                </div>
                <span className="self-start sm:self-auto bg-blue-600 text-white text-xs font-extrabold px-3.5 py-1 rounded-full shrink-0 shadow-sm">Pregunta {currentIndex + 1} de {QUESTIONS.length}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
              </div>
            </div>

            <div className="my-auto py-2 sm:py-4 max-w-4xl mx-auto w-full text-center">
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-800 mb-6 sm:mb-8 leading-snug px-1">{currentQuestion.text}</h3>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3">
                {SCALE_1_TO_10.map((num) => (
                  <button key={num} type="button" onClick={() => handleSelectOption(num)} className={`h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl font-extrabold text-base sm:text-lg lg:text-xl border-2 transition-all flex items-center justify-center ${selectedValue === num ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' : 'bg-white text-slate-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'}`}>
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-slate-500 mt-3 px-1">
                <span>1 = Nada interesado</span><span>5 = Neutral</span><span>10 = Muy apasionado</span>
              </div>
              {errorMsg && <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl">{errorMsg}</div>}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 shrink-0 gap-3">
              <button type="button" onClick={handlePrevious} disabled={currentIndex === 0 || isSubmitting} className="px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center gap-1.5"><ArrowLeft className="w-4 h-4" /> Anterior</button>
              <button type="button" onClick={handleNext} disabled={!selectedValue || isSubmitting} className="px-6 sm:px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 shadow-md">
                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Calculando...</> : currentIndex === QUESTIONS.length - 1 ? <>Ver Resultados <CheckCircle2 className="w-4 h-4" /></> : <>Siguiente <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>
          </div>
        )}

        {/* ================= ETAPA 3: DASHBOARD DE RESULTADOS ================= */}
        {stage === 'results' && resultados && (
          <div className="flex-1 flex flex-col justify-between p-3.5 sm:p-5 lg:px-6 lg:py-4 bg-slate-50 lg:min-h-0 lg:overflow-hidden gap-3">
            
            {/* Header de Resultados */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-gray-200 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-2.5 py-1 bg-blue-900 text-white rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"><Compass className="w-3.5 h-3.5 text-blue-300" /> Área Predicha</div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-800">{resultados.area_recomendada}</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {resultados.metricas?.acc_area !== undefined && (
                  <div className="bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-800">
                     Exactitud Nivel 1: {resultados.metricas.acc_area}%
                  </div>
                )}
                {resultados.metricas?.top3_acc !== undefined && (
                  <div className="bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-lg text-[11px] font-bold text-indigo-800">
                     Exactitud Top-3: {resultados.metricas.top3_acc}%
                  </div>
                )}
                <button onClick={handleReiniciar} className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-100 text-slate-700 font-semibold rounded-lg text-[11px] flex items-center gap-1 shadow-sm ml-auto sm:ml-0"><RefreshCw className="w-3 h-3" /> Repetir</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 lg:min-h-0">
              
              {/* COLUMNA IZQUIERDA (5 cols): Top 3 + Huella RIASEC + Métricas del Modelo */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 lg:min-h-0 overflow-y-auto lg:overflow-visible">
                
                {/* Top 3 Carreras Clickables */}
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm shrink-0">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-blue-600" /> Top 3 Carreras (Haz clic para ver detalles)</h4>
                  <div className="space-y-1.5">
                    {resultados.top_carreras.map((item, idx) => {
                      const careerInfo = findCareerInfo(item.carrera);
                      const LinkWrapper: any = careerInfo ? Link : 'div';
                      const linkProps = careerInfo ? { to: `/carrera/${careerInfo.careerId}` } : {};

                      return (
                        <LinkWrapper key={idx} {...linkProps} className={`block p-2 rounded-lg border border-gray-100 ${careerInfo ? 'hover:bg-blue-50/50 hover:border-blue-300 transition-colors cursor-pointer group' : ''}`}>
                          <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1">
                            <span className="truncate pr-2 flex items-center gap-1.5">
                              {idx + 1}. {item.carrera}
                              {careerInfo && <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-black">{careerInfo.centerAcronym}</span>}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-blue-600 shrink-0">{item.afinidad}%</span>
                              {careerInfo && <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
                            </div>
                          </div>
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${item.afinidad}%` }} />
                          </div>
                        </LinkWrapper>
                      );
                    })}
                  </div>
                </div>

                {/* Gráfica de Radar RIASEC */}
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm shrink-0 flex flex-col items-center">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 self-start">Huella Vocacional RIASEC</h4>
                  <div className="w-full h-[170px] sm:h-[200px] lg:h-[185px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9.5, fontWeight: 'bold' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                        <Radar name="Promedio (1-10)" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.4} />
                        <Tooltip wrapperStyle={{ fontSize: '11px' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Tabla de Métricas Directas del Backend */}
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col justify-between lg:min-h-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-indigo-600" /> Métricas del Modelo y Afinidad por Área
                    </h4>
                  </div>

                  {areaReport ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[10.5px]">
                        <thead>
                          <tr className="border-b border-gray-200 text-slate-500">
                            <th className="py-1 font-bold">Área UdeG</th>
                            {afinidadAreas && <th className="py-1 text-center font-bold text-blue-600">Tu Afinidad</th>}
                            <th className="py-1 text-center font-bold">Prec.</th>
                            <th className="py-1 text-center font-bold">Recall</th>
                            <th className="py-1 text-center font-bold">F1</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {Object.entries(areaReport)
                            .filter(([key]) => !['accuracy', 'macro avg', 'weighted avg'].includes(key))
                            .map(([areaName, m]) => (
                              <tr key={areaName} className={areaName === resultados.area_recomendada ? 'bg-blue-50/90 font-bold text-blue-900' : 'text-slate-700'}>
                                <td className="py-0.5 pr-1 truncate max-w-[135px] sm:max-w-[165px]" title={areaName}>{areaName}</td>
                                {afinidadAreas && (
                                  <td className="py-0.5 text-center font-bold text-blue-600">
                                    {afinidadAreas[areaName] !== undefined ? `${afinidadAreas[areaName]}%` : '-'}
                                  </td>
                                )}
                                <td className="py-0.5 text-center">{(m.precision * 100).toFixed(0)}%</td>
                                <td className="py-0.5 text-center text-emerald-700 font-semibold">{(m.recall * 100).toFixed(0)}%</td>
                                <td className="py-0.5 text-center text-indigo-700 font-semibold">{(m['f1-score'] * 100).toFixed(0)}%</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-500 my-auto">
                      Sube <strong>metricas_modelo.pkl</strong> a tu servicio en Render para visualizar Precision, Recall y F1-Score directos del modelo.
                    </p>
                  )}
                </div>
              </div>

              {/* COLUMNA DERECHA (7 cols): Mapa PCA */}
              <div className="lg:col-span-7 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm flex flex-col h-[350px] sm:h-[400px] lg:h-auto lg:min-h-0">
                <div className="flex items-center justify-between mb-1 shrink-0">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800">Mapa de Similitud de Carreras (PCA 2D + K-Means)</h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500">Estrella roja: Tu ubicación ({resultados.posicion_estudiante.x}, {resultados.posicion_estudiante.y}) · Cluster #{resultados.posicion_estudiante.cluster + 1}</p>
                  </div>
                </div>
                <div className="flex-1 w-full min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 8, right: 12, bottom: 4, left: -18 }}>
                      <XAxis type="number" dataKey="PCA_X" name="PCA X" tick={{ fontSize: 10 }} />
                      <YAxis type="number" dataKey="PCA_Y" name="PCA Y" tick={{ fontSize: 10 }} />
                      <ZAxis range={[45, 45]} />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                            <div className="bg-slate-900 text-white text-xs p-2 rounded-lg shadow-lg">
                              <p className="font-bold">{d.Title}</p>
                              {d.Cluster !== undefined && <p className="text-blue-300">Cluster K-Means: {d.Cluster + 1}</p>}
                            </div>
                          );
                        }
                        return null;
                      }} />
                      <Legend wrapperStyle={{ fontSize: '10px' }} />
                      <Scatter name="Carreras UdeG" data={resultados.mapa_carreras} fill="#3b82f6">
                        {resultados.mapa_carreras.map((entry, index) => <Cell key={`cell-${index}`} fill={CLUSTER_COLORS[entry.Cluster % CLUSTER_COLORS.length]} />)}
                      </Scatter>
                      <Scatter name="Tu Estudiante" data={[{ Title: 'Tu Perfil Vocacional', PCA_X: resultados.posicion_estudiante.x, PCA_Y: resultados.posicion_estudiante.y }]} fill="#ef4444" shape="star" />
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