import { questionnaire } from "@/data/questionnaire";

export default function Questionnaire() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            Cuestionario Vocacional
          </h1>
          <p className="text-muted-foreground">
            Responde con sinceridad para recomendarte una carrera adecuada
          </p>
        </div>

        {/* Preguntas */}
        <div className="space-y-6">
          {questionnaire.map((q, index) => (
            <div
              key={`${q.id}-${index}`}
              className="bg-background border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-lg mb-4">
                {index + 1}. {q.question}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {q.options.map(option => (
                  <label
                    key={option.label}
                    className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:border-primary hover:bg-primary/5 transition"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      className="accent-primary"
                    />
                    <span className="font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botón final */}
        <div className="flex justify-end">
          <button
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Ver resultado
          </button>
        </div>

      </div>
    </div>
  );
}

