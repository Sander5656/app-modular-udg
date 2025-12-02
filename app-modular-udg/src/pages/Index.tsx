import { Header } from "@/components/Header";
import { CenterCard } from "@/components/CenterCard";
import { universityCenters } from "@/data/universityCenters";
import { GraduationCap, Building2, BookOpen } from "lucide-react";

const Index = () => {
  const totalCareers = universityCenters.reduce((acc, center) => acc + center.careers.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary-foreground/10 mb-4">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Guía de Carreras
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Universidad de Guadalajara
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Explora los centros universitarios y encuentra la carrera perfecta para tu futuro profesional
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-foreground/10">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-bold">{universityCenters.length}</p>
                  <p className="text-sm opacity-80">Centros Universitarios</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-foreground/10">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-bold">{totalCareers}</p>
                  <p className="text-sm opacity-80">Carreras Disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Centros Universitarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona un centro universitario para conocer su información y explorar las carreras disponibles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {universityCenters.map((center) => (
            <CenterCard key={center.id} center={center} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
