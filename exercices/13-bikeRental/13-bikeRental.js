/**
 * 🚲 Contexte :
 * Tu gères une entreprise de location de vélos. Tu veux automatiser le calcul
 * des tarifs journaliers, des durées possibles avec un budget, et des tarifs
 * avec réduction pour les longues locations.
 */

/**
 * Calcule le tarif journalier à partir du tarif horaire.
 *
 * @param {number} hourlyRate - Tarif par heure
 * @returns {number} - Tarif par jour (8 heures)
 */
export function dailyBikeRate(hourlyRate) {
  throw new Error('À implémenter');
}

/**
 * Calcule combien de jours un client peut louer un vélo avec un budget donné.
 * Le résultat est arrondi à l'entier inférieur.
 *
 * @param {number} budget - Le budget total
 * @param {number} hourlyRate - Tarif par heure
 * @returns {number} - Nombre entier de jours
 */
export function rentalDaysInBudget(budget, hourlyRate) {
  throw new Error('À implémenter');
}

/**
 * Calcule le coût d'une location longue durée avec réduction,
 * arrondi à l'entier supérieur.
 *
 * @param {number} hourlyRate - Tarif horaire
 * @param {number} numberOfDays - Nombre de jours de location
 * @param {number} discount - Réduction (ex: 0.2 pour 20%)
 * @returns {number} - Prix total avec réduction
 */
export function discountedRentalPrice(hourlyRate, numberOfDays, discount) {
  throw new Error('À implémenter');
}
