import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const HelpChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content:
        '¡Hola! Soy el asistente de UdeG Carreras. Puedo ayudarte a utilizar la plataforma, encontrar carreras, conocer los Centros Universitarios o entender cómo funciona el cuestionario vocacional. ¿En qué puedo ayudarte?'
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMessage }
    ];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/help`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            history: messages.slice(1),
            userMessage: userMessage
          })
        }
      );

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: 'bot',
          content: data.botResponse
        }
      ]);
    } catch (error) {
      console.error('Error conectando con el asistente:', error);

      setMessages([
        ...newMessages,
        {
          role: 'bot',
          content:
            'Hubo un problema al conectar con el asistente. Intenta nuevamente.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl h-[85vh] border rounded-2xl p-4 sm:p-6 shadow-sm bg-white flex flex-col mx-auto mt-4">
      
      {/* Cabecera con título y botón de enlace a /helpinfo */}
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 border-b border-gray-100 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-800">
            Asistente UdeG Carreras
          </h2>
        </div>

        {/* Botón que redirige a /helpinfo */}
        <Link
          to="/helpinfo"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl transition-colors shadow-sm"
        >
          Ver Guía y Preguntas Frecuentes <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Contenedor de mensajes */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-2 flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-2xl text-sm max-w-[90%] md:max-w-[75%] break-words leading-relaxed ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white self-end rounded-tr-sm'
                : 'bg-slate-100 text-slate-700 self-start rounded-tl-sm'
            }`}
          >
            {msg.content}
          </div>
        ))}

        {isLoading && (
          <div className="text-gray-400 text-xs italic self-start p-2">
            Escribiendo respuesta...
          </div>
        )}
      </div>

      {/* Barra de entrada de texto */}
      <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-100">
        <input
          className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta sobre la plataforma..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          disabled={isLoading}
        />

        <button
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 disabled:opacity-50 text-sm font-bold transition-colors shadow-sm sm:w-auto w-full"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};