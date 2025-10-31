// @ts-check

/**
 * Crée un nouveau tableau de scores avec une entrée initiale.
 *
 * @returns {Record<string, number>} nouveau tableau de scores
 */
export function createScoreBoard() {
  throw new Error('À implémenter');
}

/**
 * Ajoute un joueur à un tableau de scores.
 *
 * @param {Record<string, number>} scoreBoard - Tableau des scores existant
 * @param {string} player - Nom du joueur
 * @param {number} score - Score du joueur
 * @returns {Record<string, number>} Tableau mis à jour
 */
export function addPlayer(scoreBoard, player, score) {
  throw new Error('À implémenter');
}

/**
 * Supprime un joueur du tableau de scores.
 *
 * @param {Record<string, number>} scoreBoard - Tableau des scores
 * @param {string} player - Nom du joueur à supprimer
 * @returns {Record<string, number>} Tableau mis à jour
 */
export function removePlayer(scoreBoard, player) {
  throw new Error('À implémenter');
}

/**
 * Augmente le score d’un joueur du montant indiqué.
 *
 * @param {Record<string, number>} scoreBoard - Tableau des scores
 * @param {string} player - Joueur concerné
 * @param {number} points - Points à ajouter
 * @returns {Record<string, number>} Tableau mis à jour
 */
export function updateScore(scoreBoard, player, points) {
  throw new Error('À implémenter');
}

/**
 * Ajoute un bonus de 100 points à tous les joueurs du tableau.
 *
 * @param {Record<string, number>} scoreBoard - Tableau des scores
 * @returns {Record<string, number>} Tableau mis à jour
 */
export function applyMondayBonus(scoreBoard) {
  throw new Error('À implémenter');
}
