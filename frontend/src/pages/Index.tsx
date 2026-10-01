import { CenterCard } from "@/components/CenterCard";
import { universityCenters } from "@/data/universityCenters";
import { Info, ArrowRight } from "lucide-react"; 

const Index = () => {
  const totalCareers = universityCenters.reduce(
    (acc, center) => acc + center.careers.length,
    0
  );

  // Función para hacer el scroll suave hacia la sección de centros
  const handleScrollToCentros = (e) => {
    e.preventDefault();
    const centrosSection = document.getElementById("centros");
    if (centrosSection) {
      centrosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <section className="relative text-white overflow-hidden animate-shader m-0 border-none">
        
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none" />
        
        {/* Degradado inferior más pequeño para que el desvanecimiento comience más abajo */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Contenedor Principal: Se aumentó el pb (padding-bottom) para extender el azul */}
        <div className="container relative pt-24 pb-64 md:pt-32 md:pb-80 px-4">
          <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
            
            {/* 1. Etiqueta superior */}
            <span className="text-blue-300 font-semibold tracking-widest uppercase text-sm block mb-6">
              Guía de Carreras
            </span>
            
            {/* 2. Título en una sola línea */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-sans font-extrabold tracking-tighter leading-tight w-full mb-12 lg:whitespace-nowrap">
              Universidad de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Guadalajara</span>
            </h1>
            
            {/* 3. Contenedor dividido: Izquierda (Desc + Botón) / Derecha (Números) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-start">
              
              {/* --- Columna Izquierda --- */}
              <div className="space-y-8 max-w-xl">
                <p className="text-lg md:text-xl text-blue-100/90 font-light leading-relaxed">
                  Explora nuestra red de centros universitarios y descubre el programa académico diseñado para impulsar tu futuro profesional.
                </p>
                
                <div>
                  <a 
                    href="#centros" 
                    onClick={handleScrollToCentros}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-blue-950 font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                  >
                    Explorar Centros
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </div>

              {/* --- Columna Derecha --- */}
              <div className="flex flex-row justify-start lg:justify-end gap-16 md:gap-24 lg:pt-4">
                
                <div className="text-left">
                  <h3 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight">
                    {universityCenters.length}
                  </h3>
                  <p className="text-sm md:text-base text-blue-200/90 mt-2 font-medium tracking-wide uppercase">
                    Centros Universitarios
                  </p>
                </div>

                <div className="text-left">
                  <h3 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight">
                    {totalCareers}
                  </h3>
                  <p className="text-sm md:text-base text-blue-200/90 mt-2 font-medium tracking-wide uppercase">
                    Programas Académicos
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CENTROS ================= */}
      <section id="centros" className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
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