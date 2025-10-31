// @ts-check
//
// La directive ci-dessus active la vérification de types pour ce fichier.
// Plusieurs IDE interprètent la directive @ts-check pour offrir de l'autocomplétion
// et des remontées d'erreurs utiles pendant que tu implémentes l'exercice.

/**
 * Détermine le temps nécessaire pour préparer un certain jus.
 *
 * Règles du menu :
 * - "Pure Strawberry Joy" → 0.5 min
 * - "Energizer" → 1.5 min
 * - "Green Garden" → 1.5 min
 * - "Tropical Island" → 3 min
 * - "All or Nothing" → 5 min
 * - Tout autre jus → 2.5 min
 *
 * @param {string} name - Le nom du jus
 * @returns {number} - Temps en minutes
 */
export function timeToMixJuice(name) {
  throw new Error('À implémenter');
}

/**
 * Calcule le nombre de citrons verts (limes) à couper pour atteindre
 * un nombre de quartiers (wedges) désiré.
 *
 * Ta réserve de limes est une liste de tailles : "small" | "medium" | "large".
 * Chaque taille donne ce nombre de quartiers :
 * - small  → 6
 * - medium → 8
 * - large  → 10
 *
 * On coupe les limes dans l'ordre fourni jusqu'à atteindre (ou dépasser) le total
 * de quartiers demandé, ou jusqu'à épuisement de la réserve.
 *
 * @param {number} wedgesNeeded - Nombre total de quartiers requis
 * @param {string[]} limes - Liste des tailles de limes disponibles
 * @returns {number} - Nombre de limes coupées
 */
export function limesToCut(wedgesNeeded, limes) {
  throw new Error('À implémenter');
}

/**
 * Détermine quelles commandes restent à préparer à la fin du service.
 *
 * On prépare les jus dans l'ordre tant qu'il reste du temps.
 * Si on commence un jus alors qu'il reste un peu de temps,
 * on considère qu'il a été préparé (même si le temps devient négatif).
 *
 * @param {number} timeLeft - Temps restant (en minutes)
 * @param {string[]} orders - File d'attente des commandes
 * @returns {string[]} - Commandes restantes après écoulement du temps
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('À implémenter');
}
