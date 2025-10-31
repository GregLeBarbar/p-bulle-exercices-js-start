// @ts-check
//
// La ligne ci-dessus active la vérification de types pour ce fichier.
// De nombreux IDE interprètent @ts-check et fournissent de l'autocomplétion
// et des remontées d'erreurs utiles pendant que tu implémentes l'exercice.

/**
 * Renvoie la position (index) de la carte dans la pile donnée.
 *
 * @param {number[]} stack - La pile de cartes
 * @param {number} card - La carte recherchée
 * @returns {number} - Position de la carte dans la pile, ou -1 si absente
 */
export function getCardPosition(stack, card) {
  throw new Error('À implémenter');
}

/**
 * Indique si la pile contient la carte donnée.
 *
 * @param {number[]} stack - La pile de cartes
 * @param {number} card - La carte à vérifier
 * @returns {boolean} - true si la carte est présente, sinon false
 */
export function doesStackIncludeCard(stack, card) {
  throw new Error('À implémenter');
}

/**
 * Indique si chaque carte de la pile est paire.
 *
 * @param {number[]} stack - La pile de cartes
 * @returns {boolean} - true si toutes les cartes sont paires, sinon false
 */
export function isEachCardEven(stack) {
  throw new Error('À implémenter');
}

/**
 * Indique si la pile contient au moins une carte impaire.
 *
 * @param {number[]} stack - La pile de cartes
 * @returns {boolean} - true si au moins une carte impaire est présente, sinon false
 */
export function doesStackIncludeOddCard(stack) {
  throw new Error('À implémenter');
}

/**
 * Renvoie la première carte impaire de la pile.
 *
 * @param {number[]} stack - La pile de cartes
 * @returns {number | undefined} - La première valeur impaire, ou undefined si aucune
 */
export function getFirstOddCard(stack) {
  throw new Error('À implémenter');
}

/**
 * Renvoie la position de la première carte paire de la pile.
 *
 * @param {number[]} stack - La pile de cartes
 * @returns {number} - L'index de la première valeur paire, ou -1 si aucune
 */
export function getFirstEvenCardPosition(stack) {
  throw new Error('À implémenter');
}
