/**
 * 🚀 Contexte :
 * Lors d'une mission spatiale, chaque mot de passe vocal est construit à partir d'une communication codée.
 * Tu dois extraire des lettres spécifiques de chaque message pour former le mot de passe.
 */

/**
 * Récupère la première lettre du message radio.
 *
 * @param {string} message - Message radio reçu
 * @returns {string} - Première lettre du message
 */
export function extractFrontSignal(message) {
  throw new Error('À implémenter');
}

/**
 * Formate le mot de passe basé sur les signaux frontaux.
 *
 * @param {string} code - Chaîne collectée des premières lettres
 * @returns {string} - Mot de passe formaté
 */
export function formatFrontPassword(code) {
  throw new Error('À implémenter');
}

/**
 * Récupère la dernière lettre significative du message radio (ignorer les espaces).
 *
 * @param {string} message - Message radio reçu
 * @returns {string} - Dernière lettre significative
 */
export function extractBackSignal(message) {
  throw new Error('À implémenter');
}

/**
 * Formate le mot de passe basé sur les signaux arrières, avec une requête polie.
 *
 * @param {string} code - Chaîne collectée des dernières lettres
 * @returns {string} - Mot de passe final avec " - over" ajouté
 */
export function formatBackPassword(code) {
  throw new Error('À implémenter');
}
