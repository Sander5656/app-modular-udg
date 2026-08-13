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
      const botResponseText = data.botResponse;
      
      // --- NUEVO CÓDIGO: Intercepción del JSON ---
      // Detectamos si la respuesta incluye la palabra clave de nuestro perfil
      if (botResponseText.includes('"perfil_completado":')) {
        try {
          // Limpiamos el texto por si Gemini le puso comillas de código markdown (```json ... ```)
          const cleanString = botResponseText.replace(/```json/g, '').replace(/```/g, '').trim();
          
          // Convertimos el texto crudo a un objeto de JavaScript real
          const finalData = JSON.parse(cleanString);

          // Mostramos SOLO el mensaje de despedida en el chat (ocultando los números)
          setMessages([...newMessages, { role: 'bot', content: finalData.mensaje_despedida }] as Message[]);

          // AQUÍ TIENES TUS DATOS CAPTURADOS EN SILENCIO
          console.log("Puntajes obtenidos:", finalData);
          
          // Lanzamos un alert para confirmar que los datos se separaron correctamente
          alert(`¡Test finalizado!\n\nMatemáticas: ${finalData.matematicas}\nCreatividad: ${finalData.creatividad}\nLógica: ${finalData.logica}\nEmpatía: ${finalData.empatia}`);
          
          setIsLoading(false);
          return; // Detenemos la función para que no imprima el JSON crudo en la pantalla
          
        } catch (error) {
          console.error("Error al intentar leer el JSON final", error);
        }
      }

      // Si no es el JSON final, mostramos el mensaje normal de plática
      setMessages([...newMessages, { role: 'bot', content: botResponseText }] as Message[]);
      // -------------------------------------------

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
  <div className="w-full max-w-4xl h-[85vh] border rounded-xl p-4 shadow-sm bg-white flex flex-col mx-auto mt-4">
    <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
      Test Vocacional con IA
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
        placeholder="Escribe tu respuesta..."
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
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
