from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import joblib
import pandas as pd

app = FastAPI(title="API Vocacional UdeG - RIASEC")

# Permitir conexiones desde tu frontend en React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # En producción puedes poner el dominio exacto de tu web
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Cargar los modelos en memoria una sola vez al arrancar el servidor
rf_area = joblib.load("modelo_rf_area.pkl")
modelos_por_area = joblib.load("modelos_rf_carreras.pkl")
pca = joblib.load("modelo_pca.pkl")
kmeans = joblib.load("modelo_kmeans.pkl")
centroides_carreras = joblib.load("centroides_carreras.pkl")
metricas_modelo = joblib.load("metricas_modelo.pkl")


COLUMNAS_RIASEC = ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional']

# Esquema de validación de datos que llegan desde React (escala 1 a 10)
class PerfilRIASEC(BaseModel):
    Realistic: float = Field(..., ge=1, le=10)
    Investigative: float = Field(..., ge=1, le=10)
    Artistic: float = Field(..., ge=1, le=10)
    Social: float = Field(..., ge=1, le=10)
    Enterprising: float = Field(..., ge=1, le=10)
    Conventional: float = Field(..., ge=1, le=10)

def convertir_escala(val: float) -> float:
    return ((val - 1.0) / 9.0) * 6.0 + 1.0

@app.get("/")
def health_check():
    return {"status": "online", "message": "Motor IA Vocacional UdeG activo"}

@app.post("/api/predict")
def predecir_vocacion(perfil: PerfilRIASEC):
    try:
        datos = perfil.dict()
        
        # Convertir la escala 1-10 del usuario a la escala 1-7 de entrenamiento
        perfil_convertido = [[convertir_escala(datos[col]) for col in COLUMNAS_RIASEC]]
        df_estudiante = pd.DataFrame(perfil_convertido, columns=COLUMNAS_RIASEC)

        # A) Nivel 1: Predecir Área UdeG
        area_predicha = rf_area.predict(df_estudiante)[0]

        # B) Nivel 2: Predecir Top 3 Carreras dentro del Área
        modelo_especifico = modelos_por_area[area_predicha]
        probabilidades = modelo_especifico.predict_proba(df_estudiante)[0]

        df_afinidad = pd.DataFrame({
            'carrera': modelo_especifico.classes_,
            'prob_bruta': probabilidades
        }).sort_values(by='prob_bruta', ascending=False)

        top3_df = df_afinidad.head(3).copy()
        suma_top3 = top3_df['prob_bruta'].sum()
        
        # Evitar división por cero
        if suma_top3 > 0:
            top3_df['afinidad'] = ((top3_df['prob_bruta'] / suma_top3) * 100).round(2)
        else:
            top3_df['afinidad'] = 33.33

        top_carreras = top3_df[['carrera', 'afinidad']].to_dict(orient='records')

        # C) Proyección PCA y KMeans para la gráfica de dispersión
        coords_usuario = pca.transform(df_estudiante)[0]
        cluster_usuario = int(kmeans.predict(df_estudiante)[0])

        # Respuesta JSON lista para graficar en el Frontend
        return {
            "area_recomendada": area_predicha,
            "top_carreras": top_carreras,
            "posicion_estudiante": {
                "x": round(float(coords_usuario[0]), 4),
                "y": round(float(coords_usuario[1]), 4),
                "cluster": cluster_usuario
            },
            "mapa_carreras": centroides_carreras,
            "metricas": metricas_modelo
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))