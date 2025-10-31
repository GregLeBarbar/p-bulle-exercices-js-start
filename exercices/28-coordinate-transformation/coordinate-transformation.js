// @ts-check
//
// La ligne ci-dessus active la vérification de types pour ce fichier.
// La directive @ts-check est comprise par plusieurs IDE et fournit de l'autocomplétion
// et des avertissements utiles lors de l'implémentation de l'exercice.

/**
 * Crée une fonction qui utilise une fermeture (closure) pour
 * appliquer une translation 2D répétable à une paire de coordonnées.
 *
 * @param {number} dx - composante de translation en x
 * @param {number} dy - composante de translation en y
 * @returns {(x: number, y: number) => [number, number]} - fonction prenant x, y et retournant [x, y] translatés
 */
export function translate2d(dx, dy) {
  throw new Error('À implémenter');
}

/**
 * Crée une fonction qui utilise une fermeture (closure) pour
 * appliquer une mise à l'échelle (scale) 2D répétable à une paire de coordonnées.
 *
 * @param {number} sx - facteur d'échelle pour x
 * @param {number} sy - facteur d'échelle pour y
 * @returns {(x: number, y: number) => [number, number]} - fonction prenant x, y et retournant [x, y] mis à l'échelle
 */
export function scale2d(sx, sy) {
  throw new Error('À implémenter');
}

/**
 * Compose deux transformations en une seule, en appliquant d'abord f puis g.
 * Autrement dit, renvoie g(f(x, y)).
 *
 * @param {(x: number, y: number) => [number, number]} f - première transformation
 * @param {(x: number, y: number) => [number, number]} g - seconde transformation
 * @returns {(x: number, y: number) => [number, number]} - transformation composée
 */
export function composeTransform(f, g) {
  throw new Error('À implémenter');
}

/**
 * Retourne une fonction mémoïsée qui se souvient du **dernier** résultat.
 * Si les arguments (x, y) sont identiques à ceux du dernier appel,
 * alors on retourne le résultat en cache sans rappeler la fonction.
 *
 * @param {(x: number, y: number) => any} f - transformation à mémoïser (2 arguments)
 * @returns {(x: number, y: number) => any} - fonction mémoïsée sur le dernier appel
 */
export function memoizeTransform(f) {
  throw new Error('À implémenter');
}
