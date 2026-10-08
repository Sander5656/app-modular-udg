# 1. Escalar los datos 
scaler = StandardScaler()
X_15_scaled = scaler.fit_transform(X_15)

# 2. Aplicar K-Means

kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df_exito['Perfil_Cluster'] = kmeans.fit_predict(X_15_scaled)

# 3. Mapear clusters a manita por que si no como
nombres_perfiles = {
    0: "Perfil Analítico-Tecnológico",
    1: "Perfil Ciencias de la Salud",
    2: "Perfil Creativo y Humanidades",
    3: "Perfil Económico-Administrativo"
}
df_exito['Nombre_Perfil'] = df_exito['Perfil_Cluster'].map(nombres_perfiles)