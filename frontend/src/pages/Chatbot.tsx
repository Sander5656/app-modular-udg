import { useState } from 'react';

// Si no tienes los componentes UI de shadcn instalados, puedes usar etiquetas HTML normales
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '¡Hola! Soy tu orientador vocacional. ¿Qué materias te gustan más o se te facilitan?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages as Message[]);
    setInput('');
    setIsLoading(true);

   try {
      const response = await fetch('https://udg-backend-api.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Enviamos los mensajes anteriores (omitiendo el primer saludo del bot con slice)
          history: messages.slice(1), 
          // El nuevo mensaje se envía por separado
          userMessage: input
        })
      });
      
      const data = await response.json();
      
      setMessages([...newMessages, { role: 'bot', content: data.botResponse }] as Message[]);
    } catch (error) {
      console.error("Error conectando al chat", error);
      // TRUCO: Si falla, usamos 'messages' (el historial viejo sin el mensaje del usuario) 
      // y le agregamos el mensaje de error del bot para no romper el orden.
      setMessages([...messages, { role: 'bot', content: 'Hubo un error de conexión con el servidor. Intenta de nuevo.' }] as Message[]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md border rounded-xl p-4 shadow-sm bg-white flex flex-col mx-auto mt-10">
      <h2 className="text-lg font-bold mb-4 text-center">Test Vocacional con IA</h2>
      
      <div className="h-80 overflow-y-auto mb-4 space-y-4 p-2 flex flex-col">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white self-end' 
                : 'bg-gray-100 text-gray-800 self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="text-gray-400 text-sm italic self-start">Escribiendo...</div>}
      </div>

      <div className="flex gap-2">
        <input 
          className="flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe tu respuesta..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={isLoading}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};