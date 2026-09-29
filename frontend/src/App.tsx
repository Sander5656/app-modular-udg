import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import CenterDetail from "./pages/CenterDetail";
import CareerDetail from "./pages/CareerDetail";
import NotFound from "./pages/NotFound";
import Location from "@/pages/Location";
import { Chatbot } from "@/pages/Chatbot";

// Importa las nuevas páginas legales
import Advice from "@/pages/Advice";
import Policy from "@/pages/Policy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/*  Layout con Header (y ahora Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/centro/:id" element={<CenterDetail />} />
            <Route path="/carrera/:id" element={<CareerDetail />} />
            <Route path="/location" element={<Location />} />
            <Route path="/chat" element={<Chatbot />} /> 
            
            {/* Nuevas rutas legales */}
            <Route path="/advice" element={<Advice />} />
            <Route path="/policy" element={<Policy />} />
          </Route>

          {/*  404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;