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
import Questionnaire from "@/pages/Questionnaire";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 🌐 Layout con Header */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/centro/:id" element={<CenterDetail />} />
            <Route path="/carrera/:id" element={<CareerDetail />} />
            <Route path="/cuestionario" element={<Questionnaire />} />
          </Route>

          {/* ❌ 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


