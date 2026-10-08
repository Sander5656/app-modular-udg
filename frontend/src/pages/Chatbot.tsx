import { useState } from 'react';
import { Send, Sparkles, User, Bot, MessageSquare, ClipboardList } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chatbot = () => {
  // Estado para controlar qué vista mostrar
  const [viewMode, setViewMode] = useState<'chat' | 'quiz'>('chat');
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '¡Hola! Soy tu orientador vocacional. ¿Qué materias te gustan más o se te facilitan?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages as Message[]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages.slice(1), 
          userMessage: input
        })
      });
      
      const data = await response.json();
      const botResponseText = data.botResponse;
      
      // Detectamos si la respuesta incluye la palabra clave
      if (botResponseText.includes('"perfil_completado":')) {
        try {
          const cleanString = botResponseText.replace(/```json/g, '').replace(/```/g, '').trim();
          const finalData = JSON.parse(cleanString);

          setMessages([...newMessages, { role: 'bot', content: finalData.mensaje_despedida }] as Message[]);

          console.log("Puntajes obtenidos:", finalData);
          alert(`¡Test finalizado!\n\nMatemáticas: ${finalData.matematicas}\nCreatividad: ${finalData.creatividad}\nLógica: ${finalData.logica}\nEmpatía: ${finalData.empatia}`);
          
          setIsLoading(false);
          return; 
          
        } catch (error) {
          console.error("Error al intentar leer el JSON final", error);
        }
      }

      setMessages([...newMessages, { role: 'bot', content: botResponseText }] as Message[]);

    } catch (error) {
      console.error("Error conectando al chat", error);
      setMessages([...messages, { role: 'bot', content: 'Hubo un error de conexión con el servidor. Intenta de nuevo.' }] as Message[]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Fondo azul inmersivo (ajustado con padding top para compensar la barra de navegación)
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex items-center justify-center p-4 md:p-6 lg:p-12 font-sans -mt-16 md:-mt-24 pt-24 md:pt-32">
      
      {/* Contenedor principal de la Tarjeta */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[85vh] md:h-[80vh] border border-blue-100/20">
        
        {/* ENCABEZADO Y SWITCH */}
        <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-10 shadow-sm gap-4">
          
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              Descubre tu Vocación
            </h2>
            <p className="text-sm text-blue-600 font-medium mt-0.5">
              Interactúa con la IA o responde el cuestionario
            </p>
          </div>

          {/* Selector interactivo (Switch) */}
          <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setViewMode('chat')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                viewMode === 'chat' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Chatbot
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                viewMode === 'quiz' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ClipboardList className="w-4 h-4" /> Cuestionario
            </button>
          </div>

        </div>

        {/* CONTENIDO CONDICIONAL BASADO EN EL SWITCH */}
        {viewMode === 'chat' ? (
          <>
            {/* ÁREA DE MENSAJES DEL CHAT */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 sm:gap-4 max-w-[90%] md:max-w-[75%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm ${
                    msg.role === "user" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-gray-200"
                  }`}>
                    {msg.role === "user" ? <User className="h-4 w-4 sm:h-5 sm:w-5" /> : <Bot className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </div>
                  
                  {/* Burbuja de texto */}
                  <div className={`p-3 sm:p-4 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed shadow-sm break-words ${
                    msg.role === "user" 
                      ? "bg-blue-600 text-white rounded-tr-sm" 
                      : "bg-white text-slate-700 border border-gray-100 rounded-tl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4 max-w-[75%] mr-auto">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm bg-white text-blue-600 border border-gray-200">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-white text-gray-400 italic text-[15px] border border-gray-100 shadow-sm">
                    Analizando respuesta...
                  </div>
                </div>
              )}
            </div>

            {/* ÁREA DE INPUT DEL CHAT */}
            <div className="p-4 md:p-6 bg-white border-t border-gray-100">
              <form 
                onSubmit={sendMessage}
                className="flex items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-slate-700 placeholder-gray-400 text-sm sm:text-base"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-md"
                >
                  <Send className="h-5 w-5 ml-1" />
                </button>
              </form>
            </div>
          </>
        ) : (
          /* PANTALLA DEL CUESTIONARIO (Próximamente) */
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50 p-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <ClipboardList className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Modo Cuestionario</h3>
              <p className="text-gray-500 mb-6">
                Próximamente podrás realizar tu test vocacional en un formato clásico de opciones múltiples. 
              </p>
              <button 
                onClick={() => setViewMode('chat')}
                className="px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-xl hover:bg-blue-100 transition-colors"
              >
                Volver al Chat interactivo
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};