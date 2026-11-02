import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Award,
  RefreshCw,
  Loader2
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

// 24 Preguntas actualizadas (4 por cada dimensión RIASEC)
const QUESTIONS: Question[] = [
  // 1. Área Realista
  {
    id: 1,
    category: 'Realistic',
    categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)',
    text: '¿Qué tanto disfrutas construir, armar o reparar cosas con tus propias manos utilizando herramientas?'
  },
  {
    id: 2,
    category: 'Realistic',
    categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)',
    text: '¿Te gustaría un trabajo que implique estar al aire libre, en contacto con la naturaleza, plantas o animales, en lugar de estar dentro de una oficina?'
  },
  {
    id: 3,
    category: 'Realistic',
    categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)',
    text: '¿Qué tan cómodo te sientes operando maquinaria, equipos mecánicos, electrónicos o vehículos pesados?'
  },
  {
    id: 4,
    category: 'Realistic',
    categoryLabel: 'Área Realista (Trabajo práctico, herramientas, maquinaria y exteriores)',
    text: '¿Prefieres resolver problemas prácticos y tangibles donde puedas ver resultados físicos inmediatos?'
  },

  // 2. Área Investigadora
  {
    id: 5,
    category: 'Investigative',
    categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)',
    text: '¿Qué tanto te apasiona investigar el "por qué" de las cosas, leer artículos científicos o descubrir nuevos datos?'
  },
  {
    id: 6,
    category: 'Investigative',
    categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)',
    text: '¿Disfrutas resolver problemas matemáticos, acertijos lógicos o de programación de computadoras en tu tiempo libre?'
  },
  {
    id: 7,
    category: 'Investigative',
    categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)',
    text: '¿Qué tan atractivo te resulta trabajar en un laboratorio haciendo experimentos y analizando resultados paso a paso?'
  },
  {
    id: 8,
    category: 'Investigative',
    categoryLabel: 'Área Investigadora (Ciencia, análisis, matemáticas y resolución de problemas)',
    text: '¿Prefieres tareas que requieran pensar de forma analítica, leer y estudiar teorías antes que actuar de inmediato?'
  },

  // 3. Área Artística
  {
    id: 9,
    category: 'Artistic',
    categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)',
    text: '¿Qué tan importante es para ti expresar tus ideas a través del arte, la escritura, la música, la actuación o el diseño?'
  },
  {
    id: 10,
    category: 'Artistic',
    categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)',
    text: '¿Prefieres trabajar en entornos flexibles donde puedas usar tu imaginación y no haya reglas o rutinas rígidas?'
  },
  {
    id: 11,
    category: 'Artistic',
    categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)',
    text: '¿Disfrutas crear cosas originales, ya sea diseñando gráficos, escribiendo historias, pintando o decorando espacios?'
  },
  {
    id: 12,
    category: 'Artistic',
    categoryLabel: 'Área Artística (Creatividad, diseño, expresión y originalidad)',
    text: '¿Qué tanto valoras la estética, la originalidad y la innovación visual o sonora en los proyectos que realizas?'
  },

  // 4. Área Social
  {
    id: 13,
    category: 'Social',
    categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)',
    text: '¿Qué tanta satisfacción sientes al ayudar, cuidar, orientar o enseñar a otras personas?'
  },
  {
    id: 14,
    category: 'Social',
    categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)',
    text: '¿Te gustaría un trabajo donde tu principal objetivo sea mejorar el bienestar físico, mental, educativo o emocional de la gente?'
  },
  {
    id: 15,
    category: 'Social',
    categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)',
    text: '¿Disfrutas escuchar los problemas de los demás y brindar apoyo, consejos o contención de manera empática?'
  },
  {
    id: 16,
    category: 'Social',
    categoryLabel: 'Área Social (Ayuda, enseñanza, empatía y trabajo comunitario)',
    text: '¿Prefieres trabajar en un rol donde tengas contacto humano constante, promoviendo el trabajo en equipo y la colaboración?'
  },

  // 5. Área Emprendedora
  {
    id: 17,
    category: 'Enterprising',
    categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)',
    text: '¿Qué tanto te gusta tomar la iniciativa, liderar equipos y dirigir proyectos hacia una meta específica?'
  },
  {
    id: 18,
    category: 'Enterprising',
    categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)',
    text: '¿Disfrutas convencer a otros sobre tus ideas, debatir, negociar o participar en actividades de ventas y marketing?'
  },
  {
    id: 19,
    category: 'Enterprising',
    categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)',
    text: '¿Te atrae la idea de iniciar tu propio negocio, tomar riesgos financieros o asumir roles gerenciales de alta responsabilidad?'
  },
  {
    id: 20,
    category: 'Enterprising',
    categoryLabel: 'Área Emprendedora (Liderazgo, persuasión, ventas y negocios)',
    text: '¿Qué tan importante es para ti alcanzar posiciones de liderazgo, estatus, influencia o reconocimiento público en tu carrera?'
  },

  // 6. Área Convencional
  {
    id: 21,
    category: 'Conventional',
    categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)',
    text: '¿Qué tanto disfrutas organizar información, llevar registros detallados y trabajar con bases de datos o sistemas de archivos?'
  },
  {
    id: 22,
    category: 'Conventional',
    categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)',
    text: '¿Prefieres trabajos que tengan reglas claras, procedimientos predecibles y rutinas bien establecidas?'
  },
  {
    id: 23,
    category: 'Conventional',
    categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)',
    text: '¿Te consideras una persona muy detallista que disfruta verificando errores en documentos, presupuestos o cálculos financieros?'
  },
  {
    id: 24,
    category: 'Conventional',
    categoryLabel: 'Área Convencional (Organización, datos, rutinas y administración)',
    text: '¿Qué tan cómodo te sientes trabajando en un entorno estructurado de oficina manejando trámites, logística o procesos administrativos?'
  }
];

// Escala de respuestas mapeada del 1 al 10 para alimentar el promedio
const ANSWER_OPTIONS = [
  { value: 2, label: 'Nada interesado', desc: 'No me llama la atención ni me veo haciéndolo' },
  { value: 4, label: 'Poco interesado', desc: 'Solo lo haría de forma ocasional' },
  { value: 6, label: 'Neutral / Regular', desc: 'Me resulta indiferente o me da igual' },
  { value: 8, label: 'Interesado', desc: 'Me agrada la idea y se me facilita' },
  { value: 10, label: 'Muy interesado', desc: 'Me apasiona y me encantaría dedicarme a esto' },
];

const CLUSTER_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

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
}

// Función de conversión de escala (1-10 a 1-7) igual a tu entrenamiento en Colab
export const convertirEscala = (respuesta_1_10: number): number => {
  return ((respuesta_1_10 - 1) / 9) * 6 + 1;
};

export const Chatbot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
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
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
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

    const perfilConvertido1a7: Record<RiasecKey, number> = { ...promedios1a10 };

    // Promediar las 4 preguntas de cada área y calcular también su versión 1-7
    categories.forEach((cat) => {
      const preguntasArea = QUESTIONS.filter((q) => q.category === cat);
      const suma = preguntasArea.reduce((acc, q) => acc + (answers[q.id] || 5), 0);
      const promedio = Number((suma / preguntasArea.length).toFixed(2));
      
      promedios1a10[cat] = promedio;
      perfilConvertido1a7[cat] = Number(convertirEscala(promedio).toFixed(4));
    });

    console.log('Promedios por área (Escala 1-10):', promedios1a10);
    console.log('Perfil convertido (Escala 1-7):', perfilConvertido1a7);

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
    } catch (error) {
      console.error('Error al conectar con Render:', error);
      setErrorMsg('Hubo un problema al conectar con el servidor de IA. Verifica que el backend esté activo.');
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
  };

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-2.5 sm:p-4 md:p-6 font-sans -mt-16 md:-mt-24 pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-8">
      
      {/* Contenedor Principal */}
      <div className="w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col min-h-[540px] max-h-[88vh] border border-blue-100/20">
        
        {/* CABECERA CON BARRA DE PROGRESO */}
        <div className="bg-white border-b border-gray-100 px-5 sm:px-8 py-4 sm:py-5 shrink-0">
          <div className="flex items-start sm:items-center justify-between gap-3 mb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                Test Vocacional UdeG
              </h2>
              <p className="text-xs sm:text-sm text-blue-600 font-medium">
                {resultados
                  ? 'Resultados de tu evaluación'
                  : currentQuestion.categoryLabel}
              </p>
            </div>

            {!resultados && (
              <div className="text-right shrink-0">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                  {currentIndex + 1} / {QUESTIONS.length}
                </span>
              </div>
            )}
          </div>

          {/* Barra de carga animada */}
          {!resultados && (
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          )}
        </div>

        {/* CUERPO: DIAPOSITIVA DE PREGUNTA O VISTA DE RESULTADOS */}
        {!resultados ? (
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col justify-between bg-slate-50/50">
            
            {/* Texto de la pregunta */}
            <div className="my-auto">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mb-6 leading-snug">
                {currentQuestion.text}
              </h3>

              {/* Opciones tipo tarjetas seleccionables */}
              <div className="space-y-3">
                {ANSWER_OPTIONS.map((option) => {
                  const isSelected = selectedValue === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div>
                        <p className={`font-bold text-sm sm:text-base ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                          {option.label}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                          {option.desc}
                        </p>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {errorMsg && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm rounded-xl">
                  {errorMsg}
                </div>
              )}
            </div>

            {/* FOOTER DE NAVEGACIÓN ENTRE DIAPOSITIVAS */}
            <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0 || isSubmitting}
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedValue || isSubmitting}
                className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md transition-all ml-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Calculando resultados...
                  </>
                ) : currentIndex === QUESTIONS.length - 1 ? (
                  <>
                    Ver Resultados <CheckCircle2 className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continuar <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* PANTALLA DE RESULTADOS CON GRÁFICAS */
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6 bg-slate-50 flex-1">
            
            {/* 1. Área Vocacional */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-2.5 mb-2">
                <Compass className="w-5 h-5 text-blue-200" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                  Área Vocacional Recomendada
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {resultados.area_recomendada}
              </h3>
            </div>

            {/* 2. Top 3 Carreras */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Top 3 Carreras con Mayor Afinidad
              </h4>
              <div className="space-y-4">
                {resultados.top_carreras.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700">
                      <span>{idx + 1}. {item.carrera}</span>
                      <span className="text-blue-600">{item.afinidad}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-700"
                        style={{ width: `${item.afinidad}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Mapa PCA */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">
                Mapa de Similitud Vocacional (PCA)
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                La estrella roja muestra tu ubicación frente a todas las carreras de la UdeG.
              </p>

              <div className="w-full h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: -15 }}>
                    <XAxis type="number" dataKey="PCA_X" name="Eje X" tick={{ fontSize: 11 }} />
                    <YAxis type="number" dataKey="PCA_Y" name="Eje Y" tick={{ fontSize: 11 }} />
                    <ZAxis range={[55, 55]} />
                    <Tooltip
                      cursor={{ strokeDasharray: '3 3' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                            <div className="bg-slate-900 text-white text-xs p-2.5 rounded-lg shadow-lg">
                              <p className="font-bold">{d.Title}</p>
                              {d.Cluster !== undefined && (
                                <p className="text-blue-300">Grupo: {d.Cluster + 1}</p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Scatter name="Carreras UdeG" data={resultados.mapa_carreras} fill="#3b82f6">
                      {resultados.mapa_carreras.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={CLUSTER_COLORS[entry.Cluster % CLUSTER_COLORS.length]}
                        />
                      ))}
                    </Scatter>
                    <Scatter
                      name="Tu Perfil"
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

            <button
              onClick={handleReiniciar}
              className="w-full py-3 bg-gray-200/80 hover:bg-gray-200 text-slate-700 font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <RefreshCw className="w-4 h-4" /> Volver a realizar el cuestionario
            </button>
          </div>
        )}

      </div>
    </div>
  );
};