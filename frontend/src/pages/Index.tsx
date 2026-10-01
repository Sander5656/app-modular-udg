import { CenterCard } from "@/components/CenterCard";
import { universityCenters } from "@/data/universityCenters";
import { Info, ArrowRight } from "lucide-react"; 

const Index = () => {
  const totalCareers = universityCenters.reduce(
    (acc, center) => acc + center.careers.length,
    0
  );

  return (
    <div className="min-h-screen bg-background relative font-sans">
      
      <style>{`
        @keyframes shader-movement {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shader {
          background: linear-gradient(-45deg, #020617, #1e3a8a, #0f172a, #312e81);
          background-size: 400% 400%;
          animation: shader-movement 15s ease infinite;
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative text-white overflow-hidden animate-shader">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-[0.05]" />
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* --- Columna Izquierda: Textos --- */}
            <div className="space-y-8 text-center lg:text-left">
              
              <div className="space-y-4">
                {/* Se aplica font-serif para un estilo más institucional */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight">
                  Guía de <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                    Carreras UdeG
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100/90 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Explora nuestra red de centros universitarios y descubre el programa académico diseñado para impulsar tu futuro profesional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                {/* Botón con animación de escala y flecha */}
                <a 
                  href="#centros" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-950 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  Explorar Centros
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>

            {/* --- Columna Derecha: Métricas limpias (Sin contenedores ni iconos) --- */}
            <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center lg:items-start gap-12 w-full max-w-lg mx-auto lg:max-w-none lg:pl-20">
              
              <div className="text-center lg:text-left">
                {/* Números con font-serif para combinar con el título */}
                <h3 className="text-6xl md:text-7xl font-serif font-bold text-white tracking-tight">
                  {universityCenters.length}
                </h3>
                <p className="text-xl text-blue-200/90 mt-2 font-light tracking-wide uppercase text-sm">
                  Centros Universitarios
                </p>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-6xl md:text-7xl font-serif font-bold text-white tracking-tight">
                  {totalCareers}
                </h3>
                <p className="text-xl text-blue-200/90 mt-2 font-light tracking-wide uppercase text-sm">
                  Programas Académicos
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CENTROS ================= */}
      <section id="centros" className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
            Centros Universitarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Selecciona un campus para conocer su infraestructura, especialidades y
            la oferta académica disponible para ti.
          </p>
        </div>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          w-full
        ">
          {universityCenters.map((center) => (
            <CenterCard key={center.id} center={center} />
          ))}
        </div>
      </section>

      {/* ================= BOTÓN FLOTANTE ================= */}
      <a
        href="/help"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
        title="Acerca de nosotros"
      >
        <Info className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[200px] group-hover:ml-2 font-medium">
          Acerca de nosotros
        </span>
      </a>
      
    </div>
  );
};

export default Index;