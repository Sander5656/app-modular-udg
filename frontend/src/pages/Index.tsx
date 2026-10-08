import { CenterCard } from "@/components/CenterCard";
import { universityCenters } from "@/data/universityCenters";
import { Info, ArrowRight } from "lucide-react"; 
import Logo from "../images/UDG.png";

const Index = () => {
  const totalCareers = universityCenters.reduce(
    (acc, center) => acc + center.careers.length,
    0
  );

  const handleScrollToCentros = (e) => {
    e.preventDefault();
    const centrosSection = document.getElementById("centros");
    if (centrosSection) {
      centrosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background relative font-sans -mt-16 md:-mt-24">
      
      <style>{`
        @keyframes shader-movement {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-3d {
          0% { transform: perspective(1000px) rotateY(-12deg) rotateX(6deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(6deg) rotateX(-6deg) translateY(-20px); }
          100% { transform: perspective(1000px) rotateY(-12deg) rotateX(6deg) translateY(0px); }
        }

        .animate-shader {
          background: linear-gradient(-45deg, #020617, #14348e, #0f172a, #1a169f);
          background-size: 400% 400%;
          animation: shader-movement 15s ease infinite;
        }

        .logo-3d {
          animation: float-3d 6s ease-in-out infinite;
          filter: drop-shadow(0 25px 25px rgba(0,0,0,0.6)) drop-shadow(0 0 45px rgba(59,130,246,0.5)) brightness(0) invert(1);
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative text-white overflow-hidden animate-shader m-0 border-none min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between">
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

        {/* CONTENEDOR PRINCIPAL: Padding optimizado para encajar exactamente en el viewport */}
        <div className="container relative z-20 flex-1 flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-28 lg:pb-12 px-4 sm:px-6 mx-auto max-w-7xl h-full">
          
          {/* SECCIÓN SUPERIOR/MEDIA: GRID 2 COLUMNAS (TÍTULO Y LOGO) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto w-full">
            
            {/* Columna Izquierda: Título */}
            <div className="lg:col-span-7 xl:col-span-7 text-left">
              <span className="text-blue-300 font-semibold tracking-widest uppercase text-xs sm:text-sm md:text-base block mb-2 lg:mb-4">
                Guía de Carreras
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-sans font-extrabold tracking-tighter leading-none w-full">
                Universidad de<br />Guadalajara
              </h1>
            </div>

            {/* Columna Derecha: Logo en el flujo natural con altura auto-escalable */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-center">
              <img 
                src={Logo} 
                alt="Logo UDG" 
                className="w-44 sm:w-56 md:w-64 lg:w-full max-w-[260px] lg:max-w-[340px] xl:max-w-[400px] max-h-[25vh] sm:max-h-[30vh] lg:max-h-[38vh] object-contain logo-3d"
              />
            </div>

          </div>
          
          {/* SECCIÓN INFERIOR: DESCRIPCIÓN/BOTÓN A LA IZQUIERDA Y STATS A LA DERECHA */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 pt-4">
            
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-blue-100/90 font-light leading-relaxed">
                Explora nuestra red de centros universitarios y descubre el programa académico diseñado para impulsar tu futuro profesional.
              </p>
              
              <div className="w-full sm:w-auto">
                <a 
                  href="#centros" 
                  onClick={handleScrollToCentros}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 md:px-10 bg-white text-blue-950 font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] w-full sm:w-auto"
                >
                  Explorar Centros
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>

            {/* Estadísticas de centros y carreras */}
            <div className="flex flex-row flex-wrap sm:flex-nowrap justify-start lg:justify-end gap-6 sm:gap-12 md:gap-16 w-full lg:w-auto">
              
              <div className="text-left flex flex-col items-start min-w-[110px]">
                <div className="border-b-2 sm:border-b-4 border-blue-400 pb-1 sm:pb-2 mb-2">
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-white tracking-tight leading-none">
                    {universityCenters.length}
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-blue-200/90 font-medium tracking-widest uppercase">
                  Centros<br className="sm:hidden"/> Universitarios
                </p>
              </div>

              <div className="text-left flex flex-col items-start min-w-[110px]">
                <div className="border-b-2 sm:border-b-4 border-blue-400 pb-1 sm:pb-2 mb-2">
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-white tracking-tight leading-none">
                    {totalCareers}
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-blue-200/90 font-medium tracking-widest uppercase">
                  Programas<br className="sm:hidden"/> Académicos
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CENTROS ================= */}
      <section id="centros" className="max-w-7xl mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
            Centros Universitarios
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
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
          gap-4
          sm:gap-6
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
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center p-3 sm:p-4 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
        title="Acerca de nosotros"
      >
        <Info className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[200px] group-hover:ml-2 font-medium text-sm sm:text-base">
          Acerca de nosotros
        </span>
      </a>
      
    </div>
  );
};

export default Index;