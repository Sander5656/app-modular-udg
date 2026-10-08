import { useState } from 'react';
import { Send, User, Bot, MessageSquare, ClipboardList } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chatbot = () => {
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
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-2.5 sm:p-4 md:p-6 font-sans -mt-16 md:-mt-24 pt-20 sm:pt-24 md:pt-28 pb-3 sm:pb-6">
      
      {/* Tarjeta principal con altura adaptable en móviles y escritorios */}
      <div className="w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[calc(100dvh-6rem)] sm:h-[84vh] md:h-[80vh] max-h-[850px] border border-blue-100/20">
        
        {/* Cabecera sin brillitos y con layout responsivo */}
        <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0 shadow-sm">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              Descubre tu Vocación
            </h2>
            <p className="text-xs sm:text-sm text-blue-600 font-medium">
              Interactúa con la IA o responde el cuestionario
            </p>
          </div>

          {/* Switch compacto para móviles y escritorio */}
          <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto self-stretch sm:self-auto">
            <button
              onClick={() => setViewMode('chat')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'chat'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Chatbot
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'quiz'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Cuestionario
            </button>
          </div>
        </div>

        {/* Contenido dinámico */}
        {viewMode === 'chat' ? (
          <>
            {/* Mensajes con scroll nativo flexible */}
            <div className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-4 sm:space-y-5 bg-slate-50/60 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 sm:gap-3.5 max-w-[92%] sm:max-w-[85%] md:max-w-[75%] ${
                    msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  <div
                    className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-blue-600 border border-gray-200'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>

                  <div
                    className={`p-3 sm:p-4 rounded-2xl text-[13.5px] sm:text-[15px] leading-relaxed shadow-sm break-words ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-sm'
                        : 'bg-white text-slate-700 border border-gray-100 rounded-tl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 sm:gap-3.5 max-w-[85%] mr-auto items-center">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white text-blue-600 border border-gray-200 shadow-sm">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 sm:p-4 rounded-2xl rounded-tl-sm bg-white text-gray-400 italic text-xs sm:text-sm border border-gray-100 shadow-sm">
                    Analizando respuesta...
                  </div>
                </div>
              )}
            </div>

            {/* Input fijo en la base del card */}
            <div className="p-2.5 sm:p-4 md:p-5 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={sendMessage}
                className="flex items-center gap-2 bg-gray-50 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="flex-1 bg-transparent border-none outline-none px-2.5 sm:px-4 py-1.5 text-slate-700 placeholder-gray-400 text-xs sm:text-sm md:text-base min-w-0"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 shadow-md"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 min-h-0 flex flex-col items-center justify-center bg-slate-50/60 p-4 sm:p-6 text-center">
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 max-w-sm sm:max-w-md w-full flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <ClipboardList className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                Modo Cuestionario
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-5 leading-relaxed">
                Próximamente podrás contestar tu test vocacional en formato estructurado de opciones múltiples.
              </p>
              <button
                onClick={() => setViewMode('chat')}
                className="px-5 py-2.5 bg-blue-50 text-blue-700 font-semibold text-xs sm:text-sm rounded-xl hover:bg-blue-100 transition-colors"
              >
                Volver al Chatbot
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};