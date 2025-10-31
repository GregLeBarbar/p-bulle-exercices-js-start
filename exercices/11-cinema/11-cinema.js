/**
 * Le nombre de minutes de publicités avant chaque film.
 */
const ADS_DURATION = 15;

/**
 * Calcule le nombre de minutes restantes avant le début du film.
 *
 * @param {number} currentTime - L'heure actuelle, en minutes depuis minuit (ex: 780 pour 13h)
 * @param {number} showTime - L'heure de début prévue du film, en minutes depuis minuit
 * @returns {number} - Minutes restantes avant que le film ne commence
 */
export function minutesUntilShow(currentTime, showTime) {
  throw new Error('À implémenter');
}

/**
 * Calcule la durée totale passée par un spectateur dans la salle, incluant les pubs.
 *
 * @param {number} movieDuration - Durée du film en minutes
 * @returns {number} - Durée totale passée dans la salle
 */
export function totalTimeInCinema(movieDuration) {
  throw new Error('À implémenter');
}

/**
 * Calcule la durée totale d’une journée de projection si plusieurs films sont à l'affiche.
 *
 * @param {number[]} durations - Tableau contenant les durées des films (en minutes)
 * @returns {number} - Durée totale de projection, pubs comprises
 */
export function dailyCinemaTime(durations) {
  throw new Error('À implémenter');
}
