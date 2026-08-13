import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// Configurar el modelo y su personalidad
const model = genAI.getGenerativeModel({ 
  model: "gemini-3.6-flash",
  systemInstruction: `Eres un orientador vocacional empático. Tu objetivo es descubrir las habilidades e intereses del estudiante.
  Reglas:
  1. Haz UNA sola pregunta a la vez.
  2. Sé amigable y conversacional.
  3. Después de 3 o 4 interacciones, cuando tengas suficiente información sobre sus gustos (matemáticas, arte, lectura, tecnología, etc.), DEJA de preguntar.
  4. Cuando termines, tu ÚLTIMA respuesta debe ser estrictamente un objeto JSON válido con este formato, calificando del 1 al 10 su afinidad a estas áreas según la charla:
  {"perfil_completado": true, "matematicas": 8, "creatividad": 9, "logica": 6, "empatia": 7, "mensaje_despedida": "¡Gracias! Analizando tu perfil..."}`
});

app.post('/api/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { history, userMessage } = req.body;

    // Formatear el historial de React al formato que pide Gemini
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Iniciar el chat con el historial
    const chat = model.startChat({
      history: formattedHistory,
    });

    // Enviar el nuevo mensaje del usuario
    const result = await chat.sendMessage(userMessage);
    const textResponse = result.response.text();

    res.json({ botResponse: textResponse });
  } catch (error) {
    console.error("Error con Gemini:", error);
    res.status(500).json({ error: "Error procesando el mensaje con la IA" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});