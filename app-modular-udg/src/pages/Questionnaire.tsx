import { questionnaire } from "@/data/questionnaire";

export default function Questionnaire() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Cuestionario vocacional
      </h1>

      {questionnaire.map((q, index) => (
        <div key={q.id} className="border rounded-lg p-4 space-y-2">
          <p className="font-semibold">
            {index + 1}. {q.question}
          </p>

          <div className="space-y-1">
            {q.options.map(option => (
              <label key={option.label} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
