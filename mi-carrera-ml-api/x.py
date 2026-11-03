import pandas as pd
import numpy as np
import joblib
import io
import matplotlib.pyplot as plt
import seaborn as sns
from google.colab import files
from sklearn.ensemble import RandomForestClassifier
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score, top_k_accuracy_score

# ==========================================
# 1. CARGA DE DATOS
# ==========================================
print("📥 Selecciona y sube tu archivo 'Dataset_UdeG_Ampliado_RIASEC.xlsx':")
uploaded = files.upload()
nombre_archivo = list(uploaded.keys())[0]
print(f"✅ Archivo '{nombre_archivo}' cargado exitosamente.\n")

df = pd.read_excel(io.BytesIO(uploaded[nombre_archivo]))
df.columns = df.columns.str.strip()

columnas_riasec = ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional']

# ==========================================
# 2. CREACIÓN DE ÁREAS (JERARQUÍA UDG)
# ==========================================
def asignar_area(carrera):
    c = str(carrera).strip()

    cucea = ['Lic. en Administración', 'Lic. en Administración Gubernamental y Políticas Públicas', 'Lic. en Mercadotecnia', 'Lic. en Finanzas', 'Lic. en Contaduría Pública', 'Lic. en Negocios Internacionales', 'Lic. en Logística y Transporte', 'Lic. en Recursos Humanos', 'Lic. en Gestión de Negocios Gastronómicos', 'Lic. en Turismo', 'Lic. en Economía', 'Lic. en Relaciones Públicas y Comunicación']
    cucei = ['Ing. en Computación', 'Ing. Industrial', 'Ing. en Energía / Nanotecnología', 'Ing. Civil', 'Ing. Informática', 'Ing. en Comunicaciones y Electrónica', 'Lic. en Matemáticas', 'Ing. Topográfica', 'Ing. Biomédica', 'Ing. Química', 'Ing. Mecánica Eléctrica', 'Lic. en Ciencia de Materiales', 'Ing. Robótica', 'Lic. en Física', 'Lic. en Químico Farmacobiólogo']
    cucs = ['Lic. en Médico Cirujano y Partero', 'Lic. en Cultura Física y Deportes', 'Lic. en Criminología / Ciencias Forenses', 'Lic. en Psicología', 'Lic. en Cirujano Dentista', 'Lic. en Nutrición', 'Lic. en Podología', 'Lic. en Terapia Ocupacional', 'Lic. en Terapia Física', 'Lic. en Enfermería']
    cucba = ['Ing. Agrónoma', 'Lic. en Agronegocios', 'Ing. Ambiental', 'Lic. en Medicina Veterinaria y Zootecnia', 'Lic. en Ciencia de los Alimentos', 'Lic. en Biología']
    cucsh = ['Lic. en Educación / Pedagogía', 'Lic. en Relaciones Internacionales', 'Lic. en Geografía', 'Lic. en Sociología', 'Lic. en Antropología / Arqueología', 'Lic. en Historia', 'Lic. en Trabajo Social', 'Lic. en Abogado', 'Lic. en Periodismo / Comunicación Pública', 'Lic. en Letras Hispánicas', 'Lic. en Docencia del Inglés / Lenguas']
    cuaad = ['Lic. en Arquitectura', 'Lic. en Diseño para la Comunicación Gráfica', 'Lic. en Urbanística y Medio Ambiente', 'Lic. en Artes Visuales', 'Lic. en Diseño Industrial', 'Lic. en Diseño de Modas', 'Lic. en Diseño de Interiores y Ambientación', 'Lic. en Artes Escénicas (Teatro y Danza)', 'Lic. en Artes Audiovisuales (Cine)', 'Lic. en Música']

    if c in cucea: return 'Ciencias Económico Administrativas'
    elif c in cucei: return 'Ciencias Exactas e Ingenierías'
    elif c in cucs: return 'Ciencias de la Salud'
    elif c in cucba: return 'Ciencias Biológicas y Agropecuarias'
    elif c in cucsh: return 'Ciencias Sociales y Humanidades'
    elif c in cuaad: return 'Arte, Arquitectura y Diseño'
    else: return 'Área General'

df['Area'] = df['Title'].apply(asignar_area)

X = df[columnas_riasec]
y_area = df['Area']
y_carrera = df['Title']

# ==========================================
# 3. ENTRENAMIENTO JERÁRQUICO Y MÉTRICAS
# ==========================================
print(" Entrenando Modelo Jerárquico y calculando métricas Top-K...")
X_train, X_test, y_area_train, y_area_test, y_carrera_train, y_carrera_test = train_test_split(
    X, y_area, y_carrera, test_size=0.2, random_state=42, stratify=y_carrera
)

# A) MODELO NIVEL 1: AREAS A VER SI EST EFUNCIONA BIEN
rf_area = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
rf_area.fit(X_train, y_area_train)
pred_areas = rf_area.predict(X_test)
acc_area = accuracy_score(y_area_test, pred_areas)

# B) MODELO GLOBAL PUES EL AGENERAL
rf_global = RandomForestClassifier(n_estimators=150, random_state=42, class_weight='balanced')
rf_global.fit(X_train, y_carrera_train)
probs_global = rf_global.predict_proba(X_test)
top3_acc = top_k_accuracy_score(y_carrera_test, probs_global, k=3)

print("\n REPORTE DE MÉTRICAS GENERALES:")
print("-" * 55)
print(f" Exactitud Nivel 1 (Acertar al Área): {acc_area * 100:.2f}%")
print(f" Exactitud Top-3 (Carrera ideal entre las 3 primeras): {top3_acc * 100:.2f}%")
print("-" * 55)

print("\n📈 REPORTE DETALLADO (PRECISIÓN, RECALL Y F1-SCORE) POR ÁREA:")
print(classification_report(y_area_test, pred_areas))

# C) MODELOS NIVEL 2 PUES ES DE CADA AREA
modelos_por_area = {}
for area in df['Area'].unique():
    idx = (y_area_train == area)
    rf_sub = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_sub.fit(X_train[idx], y_carrera_train[idx])
    modelos_por_area[area] = rf_sub

reporte_dict = classification_report(y_area_test, pred_areas, output_dict=True)

metricas_modelo = {
    "acc_area": round(acc_area * 100, 2),
    "top3_acc": round(top3_acc * 100, 2),
    "reporte_areas": reporte_dict
}
# ==========================================
# 4. CLUSTERING Y REDUCCIÓN DE DIMENSIONES (PCA) ESTE DOS TRES; HAY UNOS DETALLES CON LOS CLUSTERS PERO QUE MAS
# ==========================================
df_centroides = df.groupby('Title')[columnas_riasec].mean().reset_index()

pca = PCA(n_components=2)
X_pca_orig = pca.fit_transform(df_centroides[columnas_riasec])

kmeans = KMeans(n_clusters=5, random_state=42, n_init=10)
df_centroides['Cluster'] = kmeans.fit_predict(df_centroides[columnas_riasec])
df_centroides['PCA_X'] = X_pca_orig[:, 0]
df_centroides['PCA_Y'] = X_pca_orig[:, 1]

# ==========================================
# 5. SIMULACIÓN DE ESTUDIANTE AQUI LE METI UN PROMPT
# ==========================================
print("\n🧑‍🎓 Simulando respuestas de un nuevo estudiante...")
def convertir_escala(respuesta_1_10):
    return ((respuesta_1_10 - 1) / 9) * 6 + 1

respuestas_estudiante = {
    'Realistic': 4, 'Investigative': 8, 'Artistic': 3,
    'Social': 6, 'Enterprising': 9, 'Conventional': 7
}

perfil_convertido = [[convertir_escala(respuestas_estudiante[col]) for col in columnas_riasec]]
df_estudiante = pd.DataFrame(perfil_convertido, columns=columnas_riasec)

area_predicha = rf_area.predict(df_estudiante)[0]
print(f"📍 Área Vocacional Identificada: {area_predicha}")

modelo_especifico = modelos_por_area[area_predicha]
probabilidades = modelo_especifico.predict_proba(df_estudiante)[0]

df_afinidad = pd.DataFrame({'Carrera': modelo_especifico.classes_, 'Probabilidad Bruta': probabilidades})
df_afinidad = df_afinidad.sort_values(by='Probabilidad Bruta', ascending=False)

top3 = df_afinidad.head(3).copy()
suma_top3 = top3['Probabilidad Bruta'].sum()
top3['Afinidad Relativa (%)'] = (top3['Probabilidad Bruta'] / suma_top3) * 100

print("\n🏆 TOP 3 CARRERAS RECOMENDADAS DENTRO DE ESA ÁREA:")
print("-" * 55)
for index, row in top3.iterrows():
    print(f"{row['Carrera']}: {row['Afinidad Relativa (%)']:.2f}%")
print("-" * 55)

coordenadas_usuario = pca.transform(df_estudiante)
usuario_x, usuario_y = coordenadas_usuario[0]

# ==========================================
# 6. VISUALIZACIÓN DE GRÁFICAS A VER POR TERCERA VEZ
# ==========================================
sns.set_theme(style="whitegrid")

plt.figure(figsize=(10, 6))
sns.scatterplot(x='PCA_X', y='PCA_Y', hue='Cluster', palette='Set2', data=df_centroides, alpha=0.8)
plt.scatter(usuario_x, usuario_y, color='red', marker='*', s=400, edgecolor='black', label='Tu Estudiante')
plt.title("Mapa de Similitud de Carreras (PCA) y Posición del Estudiante")
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
plt.show()

# ==========================================
# 7. EXPORTACIÓN WEB Y DESCARGA A VER SI ESTE SI SALE
# ==========================================
joblib.dump(rf_area, 'modelo_rf_area.pkl')
joblib.dump(modelos_por_area, 'modelos_rf_carreras.pkl')
joblib.dump(pca, 'modelo_pca.pkl')
joblib.dump(kmeans, 'modelo_kmeans.pkl')

# Instrucciones de descarga forzada para Colab
files.download('modelo_rf_area.pkl')
files.download('modelos_rf_carreras.pkl')
files.download('modelo_pca.pkl')
files.download('modelo_kmeans.pkl')

# Guarda los centroides de las carreras para poder dibujar el mapa en React
joblib.dump(df_centroides.to_dict(orient='records'), 'centroides_carreras.pkl')
files.download('centroides_carreras.pkl')

joblib.dump(metricas_modelo, 'metricas_modelo.pkl')
files.download('metricas_modelo.pkl')

reporte_real = classification_report(y_area_test, pred_areas, output_dict=True)
metricas_modelo = {
    "acc_area": round(acc_area * 100, 2),
    "top3_acc": round(top3_acc * 100, 2),
    "reporte_areas": reporte_real
}
joblib.dump(metricas_modelo, 'metricas_modelo.pkl')
files.download('metricas_modelo.pkl')