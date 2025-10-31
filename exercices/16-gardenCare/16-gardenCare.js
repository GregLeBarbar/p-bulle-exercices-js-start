/**
 * 🌿 Contexte :
 * Tu aides à gérer un jardin urbain. Certaines plantes nécessitent des autorisations
 * spéciales ou des soins particuliers. Ton but est de guider les jardiniers.
 */

/**
 * Détermine si une plante nécessite une autorisation spéciale pour être cultivée.
 *
 * @param {string} plant - Le type de plante
 * @returns {boolean} - Vrai si une autorisation est requise
 */
export function needsPermission(plant) {
  throw new Error('À implémenter');
}

/**
 * Aide à choisir entre deux plantes en recommandant celle qui
 * vient en premier par ordre alphabétique.
 *
 * @param {string} plant1
 * @param {string} plant2
 * @returns {string} - Une phrase recommandant la meilleure plante
 */
export function choosePlant(plant1, plant2) {
  throw new Error('À implémenter');
}

/**
 * Calcule le prix de revente estimé d'une plante, basé sur son prix initial
 * et son âge en années.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} - Prix de revente estimé
 */
export function calculateResellValue(originalPrice, age) {
  throw new Error('À implémenter');
}
