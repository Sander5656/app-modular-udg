import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer"; // Asegúrate de que la ruta coincida con donde guardaste el Footer

export default function MainLayout() {
  return (
    // Agregamos un div contenedor con flexbox que ocupe al menos toda la pantalla
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* flex-grow hará que el main tome todo el espacio disponible, empujando el footer hacia abajo */}
      <main className="pt-6 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}