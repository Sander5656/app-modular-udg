import { useState } from 'react';

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
        'https://udg-backend-api.onrender.com/api/help',
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
    <div className="w-full max-w-4xl h-[85vh] border rounded-xl p-4 shadow-sm bg-white flex flex-col mx-auto mt-4">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
        Asistente UdeG Carreras
      </h2>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-2 flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-[90%] md:max-w-[75%] break-words ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white self-end'
                : 'bg-gray-100 text-gray-800 self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}

        {isLoading && (
          <div className="text-gray-400 text-sm italic self-start">
            Escribiendo...
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          className="flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          disabled={isLoading}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 sm:w-auto w-full"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};