/**
 * 🌡️ Contexte :
 * Tu surveilles les températures d'une serre jour après jour.
 * Certaines erreurs de mesure ont été détectées, et tu dois analyser et corriger les relevés.
 */

/**
 * Calcule la température totale enregistrée.
 *
 * @param {number[]} temperaturesPerDay
 * @returns {number} somme des températures
 */
export function totalTemperature(temperaturesPerDay) {
  throw new Error('À implémenter');
}

/**
 * Calcule la température totale pour une semaine donnée.
 *
 * @param {number[]} temperaturesPerDay
 * @param {number} week
 * @returns {number} température totale de la semaine
 */
export function temperatureInWeek(temperaturesPerDay, week) {
  throw new Error('À implémenter');
}

/**
 * Corrige les erreurs de capteur en ajustant la température
 * d’un jour sur deux (en partant du premier jour) de +1°C.
 *
 * @param {number[]} temperaturesPerDay
 * @returns {number[]} tableau corrigé
 */
export function fixTemperatureLog(temperaturesPerDay) {
  throw new Error('À implémenter');
}
