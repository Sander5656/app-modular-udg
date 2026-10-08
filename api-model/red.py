import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler


df = pd.read_csv("dataset_udeg.csv")

# Separar metadata de las preguntas
columnas_metadata = ['***', '****', '***']
columnas_preguntas = df.columns[3:]

# 3. Filtrar casos de éxito 
df_exito = df[df['***'] >= 8].copy()

X_50 = df_exito[columnas_preguntas]
y_carrera = df_exito['***'] # El target es este, ya depende como le ponemos a la columna despues

# aqui nomas usamos la funcion para desechar
rf_temp = RandomForestClassifier(n_estimators=100, random_state=42)
rf_temp.fit(X_50, y_carrera)

# Son importantes??? o mejor nada???
importancias = rf_temp.feature_importances_

# Crear un DataFrame con las importancias para ordenarlas (No sabia como hacerle)
df_importancias = pd.DataFrame({
    'Pregunta': columnas_preguntas,
    'Importancia': importancias
}).sort_values(by='Importancia', ascending=False)

# Extrer y ya
top_15_preguntas = df_importancias.head(15)['Pregunta'].tolist()

print("Las 15 preguntas definitivas para el chatbot son:")
print(top_15_preguntas)

# Crear el dt
X_15 = df_exito[top_15_preguntas]