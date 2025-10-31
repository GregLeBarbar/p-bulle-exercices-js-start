// @ts-check
// Implémentation ESM des fonctions pour l'exercice "enchantments" (manipulation de paquets de cartes).
// Les commentaires sont en français pour aider l'apprentissage.

/**
 * Double chaque valeur de la pile.
 *
 * @param {number[]} deck - Pile de cartes
 * @returns {number[]} - Nouvelle pile avec chaque carte doublée
 */
export function seeingDouble(deck) {
  throw new Error('À implémenter');
}

/**
 * Crée des triplets pour chaque carte ayant la valeur 3.
 *
 * @param {number[]} deck - Pile de cartes
 * @returns {number[]} - Nouvelle pile où chaque 3 devient [3,3,3]
 */
export function threeOfEachThree(deck) {
  throw new Error('À implémenter');
}

/**
 * Extrait les deux cartes du milieu d'une pile de 10 cartes.
 *
 * @param {number[]} deck - Pile de 10 cartes
 * @returns {number[]} - Les deux cartes du milieu
 */
export function middleTwo(deck) {
  throw new Error('À implémenter');
}

/**
 * Déplace les deux cartes extérieures vers le milieu (en inversant leur ordre).
 * Règle : on prend la première et la dernière carte, et on les insère entre
 * la première moitié et la seconde moitié de la pile intérieure.
 *
 * Exemples :
 * [1, 6, 7, 7, 2, 1] -> [6, 7, 1, 1, 7, 2]
 * [3, 6, 1, 7, 2, 8] -> [6, 1, 8, 3, 7, 2]
 *
 * @param {number[]} deck - Pile avec un nombre pair de cartes
 * @returns {number[]} - Pile transformée
 */
export function sandwichTrick(deck) {
  throw new Error('À implémenter');
}

/**
 * Ne garde que les cartes de valeur 2.
 *
 * @param {number[]} deck - Pile de cartes
 * @returns {number[]} - Pile ne contenant que des 2
 */
export function twoIsSpecial(deck) {
  throw new Error('À implémenter');
}

/**
 * Trie la pile de la plus petite à la plus grande.
 *
 * @param {number[]} deck - Pile mélangée
 * @returns {number[]} - Nouvelle pile triée
 */
export function perfectlyOrdered(deck) {
  throw new Error('À implémenter');
}

/**
 * Réorganise la pile afin que la carte du dessus se retrouve en bas.
 * (Dans cet exercice, le comportement attendu est l'inversion de la pile.)
 *
 * @param {number[]} deck - Pile de cartes
 * @returns {number[]} - Pile réordonnée (et modifiée sur place)
 */
export function reorder(deck) {
  throw new Error('À implémenter');
}
