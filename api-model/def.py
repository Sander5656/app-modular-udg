# Entrenar el Random Forest final usando solo las 15 preguntas
rf_final = RandomForestClassifier(n_estimators=200, max_depth=10, random_state=42)
rf_final.fit(X_15, y_carrera)

def evaluar_nuevo_aspirante(respuestas_usuario_15_items):
    """
    respuestas_usuario_15_items: Lista o array con las 15 calificaciones del 1 al 10
    """
    # Formatear la entrada para sklearn
    datos_usuario = np.array(respuestas_usuario_15_items).reshape(1, -1)
    
    # 1. Obtener el Perfil General (Clustering)
    datos_usuario_scaled = scaler.transform(datos_usuario)
    cluster_asignado = kmeans.predict(datos_usuario_scaled)[0]
    perfil = nombres_perfiles.get(cluster_asignado, "Perfil General")
    
    # 2. Obtener la Afinidad Específica (Random Forest Predict Proba)
    probabilidades = rf_final.predict_proba(datos_usuario)[0]
    clases = rf_final.classes_
    
    # Unir carreras con sus probabilidades y ordenar de mayor a menor
    resultados = pd.DataFrame({
        'Carrera': clases,
        'Compatibilidad': probabilidades * 100 # Convertir a porcentaje
    }).sort_values(by='Compatibilidad', ascending=False)
    
    # Tomar el Top 3 de carreras recomendadas
    top_3 = resultados.head(3)
    
    return perfil, top_3

# --- EJEMPLO DE USO DESDE EL CHATBOT ---
# El usuario responde las 15 preguntas clave arrojadas en el paso 1
respuestas_chatbot = [8, 9, 2, 10, 7, 1, 3, 9, 8, 10, 2, 4, 8, 9, 10]

perfil_resultado, carreras_recomendadas = evaluar_nuevo_aspirante(respuestas_chatbot)

print(f"\n--- RESULTADOS DEL TEST ---")
print(f"Tu perfil vocacional principal es: {perfil_resultado}")
print("Tus mejores opciones en la UdeG son:")
for index, row in carreras_recomendadas.iterrows():
    # Asumiendo que puedes hacer un join con tu dataset original para extraer el CU
    # Aquí imprimimos directamente la carrera y su probabilidad
    print(f"- {row['Compatibilidad']:.1f}% con {row['Carrera']}")