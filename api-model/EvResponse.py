#ESTE ES PARA UN CALIZ NADA MAS, VAMOS VIENDO QUE ONDA



# Simulancion
respuestas_historicas = [
    [random.randint(1, 10) for _ in range(50)] for _ in range(200) # 200 monos, 50 diferentes
]
carreras = random.choices(["Ingeniería Informática CUCEI", "Medicina CUCS", "Diseño CUAAD", "Negocios CUCEA"], k=200)

# AQUI SE REDUCE MIS BROS
print("Entrenando Random Forest desechable para Feature Selection...")
rf_temp = RandomForestScratch(n_trees=20, max_depth=5)
rf_temp.fit(respuestas_historicas, carreras)

# Emparejar índices de preguntas con su importancia
importancias = rf_temp.feature_importances_
preguntas_con_peso = [(f"Pregunta_{i+1}", importancias[i], i) for i in range(len(importancias))]

# Ordenar de mayor a menor y tomar el Top 15 bien prosiono
top_15_variables = sorted(preguntas_con_peso, key=lambda x: x[1], reverse=True)[:15]
indices_top_15 = [x[2] for x in top_15_variables]

print("\n--- LAS 15 PREGUNTAS DEFINITIVAS ---")
for p in top_15_variables:
    print(f"{p[0]}: {p[1]:.4f} de peso predictivo")

# SE PREPARA PARA EL CALCULO
# AQUI YA SOLO SE DEJAN LAS PREGUNTAS TOP 
X_15 = [[fila[i] for i in indices_top_15] for fila in respuestas_historicas]

scaler = StandardScalerScratch()
X_15_scaled = scaler.fit_transform(X_15)

kmeans = KMeansScratch(k=4, max_iters=50)
clusters_asignados = kmeans.fit_predict(X_15_scaled)

nombres_perfiles = {
    0: "Perfil Analítico y Lógico",
    1: "Perfil Ciencias Médicas",
    2: "Perfil Creativo",
    3: "Perfil Administrativo"
}

# YA AQUI ES PROCEDIMIENTO
rf_final = RandomForestScratch(n_trees=50, max_depth=8)
rf_final.fit(X_15, carreras)

def evaluar_aspirante_chatbot(respuestas_15):
    #  Encontrar el perfil general 
    row_scaled = scaler.transform([respuestas_15])[0]
    cluster_idx = kmeans.predict([row_scaled])[0]
    perfil = nombres_perfiles.get(cluster_idx)
    
    # 2. CALCULA LAS PROBABILIDADES
    probs_dict = rf_final.predict_proba([respuestas_15])[0]
    
    # SE ORDENA
    carreras_ordenadas = sorted(probs_dict.items(), key=lambda item: item[1], reverse=True)
    
    return perfil, carreras_ordenadas[:3]

# AQUI SE SIMULA RESPUESTA
respuestas_nuevo_usuario = [random.randint(1, 10) for _ in range(15)]
perfil_result, top_3_carreras = evaluar_aspirante_chatbot(respuestas_nuevo_usuario)

print(f"\n--- RESULTADOS PARA EL ASPIRANTE ---")
print(f"Tu perfil vocacional es: {perfil_result}")
print("Compatibilidad con carreras:")
for carrera, prob in top_3_carreras:
    print(f"- {carrera}: {prob * 100:.1f}%")