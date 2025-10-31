/**
 * 🎵 Contexte :
 * Tu gères une playlist musicale dans une application. Voici des fonctions
 * pour insérer, modifier ou supprimer des morceaux.
 */

/**
 * Récupère un morceau à une position donnée (index de base 0)
 *
 * @param {string[]} playlist - La liste des morceaux
 * @param {number} position - Position du morceau à récupérer
 * @returns {string} - Le morceau à cette position
 */
export function getTrack(playlist, position) {
  throw new Error('À implémenter');
}

/**
 * Remplace un morceau à une position donnée
 *
 * @param {string[]} playlist - La liste des morceaux
 * @param {number} position - Position du morceau à remplacer
 * @param {string} newTrack - Le morceau de remplacement
 * @returns {string[]} - La playlist mise à jour
 */
export function updateTrack(playlist, position, newTrack) {
  throw new Error('À implémenter');
}

/**
 * Ajoute un nouveau morceau à la fin de la playlist
 *
 * @param {string[]} playlist
 * @param {string} newTrack
 * @returns {string[]} - La playlist avec le nouveau morceau ajouté
 */
export function addTrackToEnd(playlist, newTrack) {
  throw new Error('À implémenter');
}

/**
 * Supprime un morceau à une position donnée
 *
 * @param {string[]} playlist
 * @param {number} position
 * @returns {string[]} - La playlist mise à jour
 */
export function removeTrackAt(playlist, position) {
  throw new Error('À implémenter');
}

/**
 * Supprime le dernier morceau de la playlist
 *
 * @param {string[]} playlist
 * @returns {string[]} - La playlist mise à jour
 */
export function removeLastTrack(playlist) {
  throw new Error('À implémenter');
}

/**
 * Ajoute un morceau au début de la playlist
 *
 * @param {string[]} playlist
 * @param {string} newTrack
 * @returns {string[]} - La playlist mise à jour
 */
export function addTrackToStart(playlist, newTrack) {
  throw new Error('À implémenter');
}

/**
 * Supprime le premier morceau de la playlist
 *
 * @param {string[]} playlist
 * @returns {string[]} - La playlist mise à jour
 */
export function removeFirstTrack(playlist) {
  throw new Error('À implémenter');
}

/**
 * Vérifie si la playlist contient exactement le nombre de morceaux attendu
 *
 * @param {string[]} playlist
 * @param {number} expectedSize
 * @returns {boolean} - Vrai si la taille correspond, sinon faux
 */
export function checkPlaylistSize(playlist, expectedSize) {
  throw new Error('À implémenter');
}
