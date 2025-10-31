// @ts-check
// Implémentation ESM des fonctions pour l'exercice "lasagna-master".
// Les commentaires et messages sont en français pour l'apprentissage.

/**
 * Donne le statut de cuisson en fonction du temps restant.
 *
 * Règles :
 * - Si aucun temps n'est fourni (undefined) -> "You forgot to set the timer."
 * - Si le temps restant vaut 0 -> "Lasagna is done."
 * - Sinon -> "Not done, please wait."
 *
 * @param {number | undefined} remainingTime - Temps restant (en minutes)
 * @returns {string}
 */
export function cookingStatus(remainingTime) {
  throw new Error('À implémenter');
}

/**
 * Calcule le temps de préparation total à partir des couches.
 *
 * Par défaut, chaque couche prend 2 minutes, sauf si un temps moyen
 * personnalisé est fourni via `avgPerLayer`.
 *
 * @param {string[]} layers - Liste des couches (ex.: 'sauce', 'noodles', ...)
 * @param {number} [avgPerLayer=2] - Temps moyen par couche (minutes)
 * @returns {number}
 */
export function preparationTime(layers, avgPerLayer = 2) {
  throw new Error('À implémenter');
}

/**
 * Calcule les quantités nécessaires de nouilles et de sauce
 * en fonction des couches fournies.
 *
 * Règles :
 * - Chaque couche 'noodles' compte pour 50 g de nouilles.
 * - Chaque couche 'sauce' compte pour 0.2 l de sauce.
 *
 * @param {string[]} layers
 * @returns {{ noodles: number, sauce: number }}
 */
export function quantities(layers) {
  throw new Error('À implémenter');
}

/**
 * Ajoute l'ingrédient secret de ton ami à ta liste, sans modifier celle de l'ami.
 *
 * Règle :
 * - L’ingrédient secret est le **dernier** élément de la liste de l’ami.
 * - On le **pousse** à la fin de ta liste.
 * - La fonction **ne retourne rien** (undefined).
 *
 * @param {string[]} friendsList - Liste d'ingrédients de l'ami
 * @param {string[]} myList - Ta liste d'ingrédients (sera modifiée)
 * @returns {void}
 */
export function addSecretIngredient(friendsList, myList) {
  throw new Error('À implémenter');
}

/**
 * Redimensionne une recette pour un nombre de portions donné.
 *
 * Convention de l'exercice :
 * - Les quantités d'origine sont pour **2 portions**.
 * - Le facteur d'échelle est donc `portions / 2`.
 * - On retourne **un nouvel objet** (on ne modifie pas l'original).
 *
 * @param {Record<string, number>} recipe - Recette de base (pour 2 portions)
 * @param {number} [portions=2] - Nombre de portions souhaité
 * @returns {Record<string, number>} - Nouvelle recette redimensionnée
 */
export function scaleRecipe(recipe, portions = 2) {
  throw new Error('À implémenter');
}
