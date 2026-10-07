import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/db"; // Ajusta la ruta a tu cliente de Supabase

export const useIdleTimeout = (timeoutMinutes: number = 15) => {
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = async () => {
    // 1. Cierra sesión en Supabase
    await supabase.auth.signOut();
    // 2. Limpia el token local
    localStorage.removeItem("authToken");
    // 3. Redirige al login
    navigate("/login");
  };

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Convierte minutos a milisegundos
    timeoutRef.current = setTimeout(handleLogout, timeoutMinutes * 60 * 1000);
  };

  useEffect(() => {
    // Eventos que se consideran "actividad" del usuario
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    
    // Función que se ejecuta cada que hay actividad
    const handleActivity = () => {
      resetTimer();
    };

    // Agrega los listeners a la ventana
    events.forEach((event) => window.addEventListener(event, handleActivity));
    
    // Inicia el temporizador la primera vez
    resetTimer();

    // Limpieza al desmontar
    return () => {
      events.forEach((event) => window.removeEventListener(event, handleActivity));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
};