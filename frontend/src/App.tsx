import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import CenterDetail from "./pages/CenterDetail";
import CareerDetail from "./pages/CareerDetail";
import NotFound from "./pages/NotFound";
import Location from "@/pages/Location";
import { Chatbot } from "@/pages/Chatbot";
import { HelpChatbot } from "@/pages/HelpChatbot";

// Importa las nuevas páginas legales
import Advice from "@/pages/Advice";
import Policy from "@/pages/Policy";

// 1. Importa tus páginas de Login y Registro (Debes crearlas)
import Login from "@/pages/Login";
import Register from "@/pages/Register";

const queryClient = new QueryClient();

// 2. CREA EL COMPONENTE DE RUTA PROTEGIDA
const ProtectedRoute = () => {
  // Aquí debes colocar tu lógica real de autenticación.
  // Por ejemplo, verificar un token de localStorage, un estado de Redux, o Firebase/Supabase.
  const isAuthenticated = localStorage.getItem("authToken"); // Simulación de chequeo

  if (!isAuthenticated) {
    // Si no está autenticado, lo redirige al Login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza la ruta hija (el Chatbot)
  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          
          {/* 3. Agrega las rutas públicas para el Login y Registro */}
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Layout con Header y Footer */}
          <Route element={<MainLayout />}>
            
            <Route path="/" element={<Index />} />
            <Route path="/centro/:id" element={<CenterDetail />} />
            <Route path="/carrera/:id" element={<CareerDetail />} />
            <Route path="/location" element={<Location />} />
            <Route path="/help" element={<HelpChatbot />} />
            
            {/* Nuevas rutas legales */}
            <Route path="/advice" element={<Advice />} />
            <Route path="/policy" element={<Policy />} />

            {/* 4. ENVUELVE EL CHATBOT EN LA RUTA PROTEGIDA */}
            <Route element={<ProtectedRoute />}>
              <Route path="/chat" element={<Chatbot />} />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;