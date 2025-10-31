// @ts-check
// Implémentation ESM des fonctions pour l'exercice "train-driver".
// Les commentaires sont en français pour faciliter l'apprentissage.

/**
 * Retourne la liste des identifiants de wagons sous forme de tableau.
 *
 * @param {...number} ids - Identifiants passés en arguments
 * @returns {number[]} - Identifiants de wagons
 */
export function getListOfWagons(...ids) {
  throw new Error('À implémenter');
}

/**
 * Réordonne la liste des wagons en déplaçant les 2 premiers à la fin.
 *
 * @param {Iterable<number>} ids - Itérable d'identifiants (tableau, objet itérable…)
 * @returns {number[]} - Liste réordonnée des wagons
 */
export function fixListOfWagons(ids) {
  throw new Error('À implémenter');
}

/**
 * Corrige la liste des wagons en insérant un groupe manquant après le premier élément.
 *
 * @param {Iterable<number>} ids - Itérable d'identifiants
 * @param {Iterable<number>} missingWagons - Itérable des wagons manquants
 * @returns {number[]} - Liste corrigée des wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  throw new Error('À implémenter');
}

/**
 * Étend les informations de trajet en ajoutant des champs supplémentaires.
 *
 * @param {Record<string, string>} information - Infos de base (ex. from, to)
 * @param {Record<string, string>} additional - Infos additionnelles (ex. timeOfArrival, météo)
 * @returns {Record<string, string>} - Objet fusionné
 */
export function extendRouteInformation(information, additional) {
  throw new Error('À implémenter');
}

/**
 * Sépare l'heure d'arrivée des autres informations de trajet.
 *
 * @param {Record<string, string>} information - Objet contenant timeOfArrival et d'autres champs
 * @returns {[string, Record<string, string>]} - [heure d'arrivée, objet sans timeOfArrival]
 */
export function separateTimeOfArrival(information) {
  throw new Error('À implémenter');
}
