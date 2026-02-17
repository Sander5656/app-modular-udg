const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// Ruta para obtener preguntas
app.get("/questions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM questions");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo preguntas" });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

