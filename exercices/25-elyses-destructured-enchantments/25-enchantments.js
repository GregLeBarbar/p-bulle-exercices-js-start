// @ts-check
// Implémentation ESM des fonctions pour l'exercice "enchantments" (cartes).
// Les commentaires sont en français, le code suit les contraintes de l’énoncé.

/**
 * Renvoie la première carte du paquet fourni.
 * @param {Iterable<any>} deck - Paquet de cartes (itérable)
 * @returns {any} - La première carte, ou undefined si vide
 */
export function getFirstCard(deck) {
  throw new Error('À implémenter');
}

/**
 * Renvoie la deuxième carte du paquet.
 * @param {Iterable<any>} deck - Paquet de cartes (itérable)
 * @returns {any} - La deuxième carte, ou undefined si < 2 cartes
 */
export function getSecondCard(deck) {
  throw new Error('À implémenter');
}

/**
 * Échange la position des deux cartes.
 * @param {[any, any]} deck - Deux cartes
 * @returns {[any, any]} - Nouvelles positions [deuxième, première]
 */
export function swapTwoCards(deck) {
  throw new Error('À implémenter');
}

/**
 * Effectue une rotation (décalage) des trois cartes vers la gauche.
 * Ex. [6,4,5] -> [4,5,6], ['king',5,2] -> [5,2,'king']
 * @param {[any, any, any]} deck - Trois cartes
 * @returns {[any, any, any]} - Paquet décalé
 */
export function shiftThreeCardsAround(deck) {
  throw new Error('À implémenter');
}

/**
 * Récupère la pile nommée `chosen` depuis l’objet `piles`.
 * ⚠️ Consigne : ne pas utiliser l’accès pointé `piles.chosen` / `piles.disregarded`.
 * @param {{ chosen: any[], disregarded: any[] }} param0
 * @returns {any[]} - La pile `chosen`
 */
export function pickNamedPile({ chosen }) {
  throw new Error('À implémenter');
}

/**
 * Échange la pile `chosen` avec la pile `disregarded` en préservant les références.
 * ⚠️ Consignes : - ne pas utiliser l’accès `piles.chosen` / `piles.disregarded`
 *                 - retourner un nouvel objet { chosen, disregarded } avec les piles inversées
 * @param {{ chosen: any[], disregarded: any[] }} piles
 * @returns {{ chosen: any[], disregarded: any[] }}
 */
export function swapNamedPile(piles) {
  throw new Error('À implémenter');
}
