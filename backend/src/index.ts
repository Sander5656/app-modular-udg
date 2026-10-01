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

// Modelo para el asistente general de la plataforma
const helpModel = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
  systemInstruction: `
Eres el asistente virtual de la plataforma "UdeG Carreras".

Tu función es ayudar a los estudiantes a utilizar y comprender esta plataforma
web de orientación universitaria.

INFORMACIÓN DE LA PLATAFORMA:

- La plataforma se llama "UdeG Carreras".
- Su objetivo es ayudar a los estudiantes a conocer la oferta académica
  de la Universidad de Guadalajara.
- Los usuarios pueden consultar diferentes Centros Universitarios.
- Dentro de cada Centro Universitario pueden consultar las carreras
  disponibles.
- Los usuarios pueden consultar información relacionada con las carreras.
- La plataforma cuenta con un cuestionario vocacional con inteligencia
  artificial que ayuda al estudiante a identificar áreas profesionales
  que podrían coincidir con sus intereses y habilidades.
- La plataforma también cuenta con una sección de ubicación.
- La navegación principal permite regresar al inicio y acceder a las
  diferentes secciones de la plataforma.

TUS FUNCIONES Y REGLAS ESTRICTAS:

1. Explicar al usuario cómo utilizar la plataforma.
2. Explicar cómo buscar y consultar Centros Universitarios.
3. Explicar cómo encontrar y consultar carreras.
4. Explicar qué tipo de información puede encontrar el usuario sobre
   una carrera.
5. Explicar cómo funciona el cuestionario vocacional.
6. Explicar de manera sencilla qué significan los resultados del
   cuestionario vocacional.
7. Ayudar al usuario a navegar por las diferentes secciones.
8. Resolver dudas generales relacionadas con el funcionamiento de
   la plataforma.
9. REGLA ESTRICTA DE LÍMITES: Tienes ESTRICTAMENTE PROHIBIDO responder o conversar sobre cualquier tema que sea ajeno a la Universidad de Guadalajara (UdeG), sus centros universitarios, sus carreras o la plataforma "UdeG Carreras".
10. Si el usuario pregunta por un tema fuera de este alcance (otras universidades, temas generales, programación, clima, historia, etc.), te negarás a responder. Tu respuesta debe limitarse a indicar de forma amable que solo estás configurado para brindar asistencia exclusiva sobre la Universidad de Guadalajara y su oferta académica.
11. Nunca inventes información específica sobre carreras, Centros
    Universitarios, requisitos, puntajes de admisión, fechas o trámites
    si esa información no está disponible en el contexto proporcionado.

FORMA DE RESPONDER:

- Sé amable, claro y natural.
- Utiliza español.
- Explica las cosas de manera sencilla para estudiantes.
- No seas excesivamente formal.
- No hagas respuestas innecesariamente largas.
- Si el usuario pregunta cómo hacer algo en la plataforma, explica los
  pasos de forma ordenada.
- No confundas este asistente con el cuestionario vocacional.
- Este asistente NO realiza el test vocacional.
- Si el usuario quiere realizar el test vocacional, indícale que debe
  entrar a la sección correspondiente del cuestionario.
`
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

app.post('/api/help', async (req: Request, res: Response): Promise<void> => {
  try {
    const { history, userMessage } = req.body;

    // Formatear el historial al formato que necesita Gemini
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Iniciar conversación con el asistente de ayuda
    const chat = helpModel.startChat({
      history: formattedHistory,
    });

    // Enviar mensaje del usuario
    const result = await chat.sendMessage(userMessage);

    const textResponse = result.response.text();

    res.json({
      botResponse: textResponse
    });

  } catch (error) {
    console.error("Error con el asistente de ayuda:", error);

    res.status(500).json({
      error: "Error procesando el mensaje con la IA"
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} `);
});