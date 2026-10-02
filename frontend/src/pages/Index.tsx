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
        
        @keyframes float-3d {
          0% { transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(5deg) rotateX(-5deg) translateY(-20px); }
          100% { transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0px); }
        }

        .animate-shader {
          background: linear-gradient(-45deg, #020617, #14348e, #0f172a, #1a169f);
          background-size: 400% 400%;
          animation: shader-movement 15s ease infinite;
        }

        .logo-3d {
          animation: float-3d 6s ease-in-out infinite;
          /* Sombra paralela para darle volumen y efecto de que flota frente al fondo */
          filter: drop-shadow(0 30px 30px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(59,130,246,0.4)) brightness(0) invert(1);
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative text-white overflow-hidden animate-shader m-0 border-none min-h-screen flex flex-col">
        
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none" />
        
        {/* Degradado inferior para fusionar con la siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

        {/* LOGO 3D EN EL CENTRO (Absoluto para no interferir con la estructura) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <img 
            src="image_4a80f4.png" 
            alt="Logo UDG" 
            className="w-64 md:w-96 lg:w-[480px] object-contain logo-3d opacity-20 lg:opacity-90 mt-20 lg:mt-0"
          />
        </div>

        {/* Contenedor Principal con estructura del boceto */}
        <div className="container relative z-20 flex-1 flex flex-col justify-between pt-24 pb-20 md:pt-32 md:pb-24 px-4 mx-auto max-w-7xl">
          
          {/* Superior Izquierda: Título */}
          <div className="w-full text-left">
            <span className="text-blue-300 font-semibold tracking-widest uppercase text-sm md:text-base block mb-4 lg:mb-6">
              Guía de Carreras
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[6rem] font-sans font-extrabold tracking-tighter leading-none w-full max-w-3xl">
              Universidad de<br />Guadalajara
            </h1>
          </div>
          
          {/* Inferior: Descripción/Botón (Izquierda) y Estadísticas (Derecha) */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8 mt-40 lg:mt-0">
            
            {/* --- Columna Inferior Izquierda --- */}
            <div className="space-y-8 max-w-xl">
              <p className="text-lg md:text-xl text-blue-100/90 font-light leading-relaxed">
                Explora nuestra red de centros universitarios y descubre el programa académico diseñado para impulsar tu futuro profesional.
              </p>
              
              <div>
                <a 
                  href="#centros" 
                  onClick={handleScrollToCentros}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-blue-950 font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] w-full sm:w-auto"
                >
                  Explorar Centros
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>

            {/* --- Columna Inferior Derecha (Estadísticas tipo boceto) --- */}
            <div className="flex flex-row justify-start lg:justify-end gap-12 md:gap-20">
              
              <div className="text-left flex flex-col items-start">
                <div className="border-b-4 border-blue-400 pb-2 mb-3">
                  <h3 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight leading-none">
                    {universityCenters.length}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-blue-200/90 font-medium tracking-widest uppercase">
                  Centros Universitarios
                </p>
              </div>

              <div className="text-left flex flex-col items-start">
                <div className="border-b-4 border-blue-400 pb-2 mb-3">
                  <h3 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight leading-none">
                    {totalCareers}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-blue-200/90 font-medium tracking-widest uppercase">
                  Programas Académicos
                </p>
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