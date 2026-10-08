import math
import random
from collections import Counter

# ==========================================
# 1. HERRAMIENTAS DE PROCESAMIENTO
# ==========================================
class StandardScalerScratch:
    def fit_transform(self, X):
        self.means = [sum(col) / len(col) for col in zip(*X)]
        self.stds = []
        for i in range(len(X[0])):
            variance = sum((row[i] - self.means[i])**2 for row in X) / len(X)
            self.stds.append(math.sqrt(variance) if variance > 0 else 1.0)
        return self.transform(X)

    def transform(self, X):
        return [[(row[i] - self.means[i]) / self.stds[i] for i in range(len(row))] for row in X]

# ==========================================
# 2. CLUSTERING: K-MEANS
# ==========================================
class KMeansScratch:
    def __init__(self, k=4, max_iters=100):
        self.k = k
        self.max_iters = max_iters
        self.centroids = []

    def _euclidean(self, p1, p2):
        return math.sqrt(sum((a - b)**2 for a, b in zip(p1, p2)))

    def fit_predict(self, X):
        # Inicializar centroides aleatoriamente eligiendo puntos del dataset
        self.centroids = random.sample(X, self.k)
        clusters = []
        
        for _ in range(self.max_iters):
            clusters = [[] for _ in range(self.k)]
            labels = []
            
            # Asignar cada punto al centroide más cercano
            for x in X:
                distances = [self._euclidean(x, c) for c in self.centroids]
                closest = distances.index(min(distances))
                clusters[closest].append(x)
                labels.append(closest)
                
            # Recalcular centroides
            new_centroids = []
            for cluster in clusters:
                if cluster:
                    new_center = [sum(col)/len(col) for col in zip(*cluster)]
                    new_centroids.append(new_center)
                else: # Si un cluster queda vacío, reasignarlo aleatoriamente
                    new_centroids.append(random.choice(X))
                    
            if new_centroids == self.centroids:
                break # Convergencia alcanzada
            self.centroids = new_centroids
            
        return labels

    def predict(self, X):
        labels = []
        for x in X:
            distances = [self._euclidean(x, c) for c in self.centroids]
            labels.append(distances.index(min(distances)))
        return labels

# ==========================================
# 3. RANDOM FOREST & ÁRBOLES DE DECISIÓN
# ==========================================
class DecisionTreeScratch:
    def __init__(self, max_depth=10):
        self.max_depth = max_depth
        self.tree = None
        self.feature_importances = {} # Acumulará la reducción de Gini

    def _gini(self, y):
        m = len(y)
        if m == 0: return 0
        counts = Counter(y)
        return 1.0 - sum((count / m) ** 2 for count in counts.values())

    def _split(self, X, y, feat_idx, threshold):
        left_X, left_y, right_X, right_y = [], [], [], []
        for i, row in enumerate(X):
            if row[feat_idx] <= threshold:
                left_X.append(row); left_y.append(y[i])
            else:
                right_X.append(row); right_y.append(y[i])
        return left_X, left_y, right_X, right_y

    def _build(self, X, y, depth, available_features):
        num_samples, num_features = len(X), len(X[0])
        unique_classes = list(set(y))
        
        # Casos base: Pureza, profundidad máxima o sin características
        if len(unique_classes) == 1 or depth >= self.max_depth or not available_features:
            counts = Counter(y)
            # Retornar diccionario de probabilidades en esta hoja
            return {'type': 'leaf', 'probs': {k: v / num_samples for k, v in counts.items()}}

        best_gini = float('inf')
        best_criteria = None
        best_sets = None
        current_gini = self._gini(y)

        # Buscar la mejor división
        for feat_idx in available_features:
            values = list(set(row[feat_idx] for row in X))
            for val in values:
                l_X, l_y, r_X, r_y = self._split(X, y, feat_idx, val)
                if not l_y or not r_y: continue
                
                # Gini ponderado de los hijos
                p_l, p_r = len(l_y) / num_samples, len(r_y) / num_samples
                gini_child = p_l * self._gini(l_y) + p_r * self._gini(r_y)
                
                if gini_child < best_gini:
                    best_gini = gini_child
                    best_criteria = (feat_idx, val)
                    best_sets = (l_X, l_y, r_X, r_y)

        if best_criteria is None:
            counts = Counter(y)
            return {'type': 'leaf', 'probs': {k: v / num_samples for k, v in counts.items()}}

        # Registrar la importancia de la variable (cuánto redujo la impureza)
        feat_idx, threshold = best_criteria
        importance = num_samples * (current_gini - best_gini)
        self.feature_importances[feat_idx] = self.feature_importances.get(feat_idx, 0) + importance

        l_X, l_y, r_X, r_y = best_sets
        return {
            'type': 'node',
            'feature': feat_idx,
            'threshold': threshold,
            'left': self._build(l_X, l_y, depth + 1, available_features),
            'right': self._build(r_X, r_y, depth + 1, available_features)
        }

    def fit(self, X, y, max_features):
        self.feature_importances = {i: 0 for i in range(len(X[0]))}
        features = random.sample(range(len(X[0])), max_features)
        self.tree = self._build(X, y, 0, features)

    def _predict_row(self, row, node):
        if node['type'] == 'leaf':
            return node['probs']
        if row[node['feature']] <= node['threshold']:
            return self._predict_row(row, node['left'])
        return self._predict_row(row, node['right'])

    def predict_proba(self, X):
        return [self._predict_row(row, self.tree) for row in X]

class RandomForestScratch:
    def __init__(self, n_trees=50, max_depth=10):
        self.n_trees = n_trees
        self.max_depth = max_depth
        self.trees = []
        self.feature_importances_ = []
        self.classes_ = []

    def fit(self, X, y):
        self.classes_ = list(set(y))
        n_samples, n_features = len(X), len(X[0])
        max_features = max(1, int(math.sqrt(n_features)))
        
        # Importancias acumuladas
        total_importances = {i: 0.0 for i in range(n_features)}

        for _ in range(self.n_trees):
            # Bootstrap: Crear un dataset aleatorio del mismo tamaño con reemplazo
            indices = [random.randint(0, n_samples - 1) for _ in range(n_samples)]
            X_boot = [X[i] for i in indices]
            y_boot = [y[i] for i in indices]

            tree = DecisionTreeScratch(max_depth=self.max_depth)
            tree.fit(X_boot, y_boot, max_features)
            self.trees.append(tree)
            
            for k, v in tree.feature_importances.items():
                total_importances[k] += v

        # Normalizar las importancias
        sum_importance = sum(total_importances.values())
        if sum_importance > 0:
            self.feature_importances_ = [total_importances[i] / sum_importance for i in range(n_features)]
        else:
            self.feature_importances_ = [0] * n_features

    def predict_proba(self, X):
        predictions = []
        for row in X:
            # Acumular probabilidades de todos los árboles para esta fila
            row_probs = {c: 0.0 for c in self.classes_}
            for tree in self.trees:
                tree_probs = tree._predict_row(row, tree.tree)
                for c, prob in tree_probs.items():
                    row_probs[c] += prob / self.n_trees
            predictions.append(row_probs)
        return predictions