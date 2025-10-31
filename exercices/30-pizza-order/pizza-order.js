// @ts-check
// Implémentation ESM + commentaires en français pour l'exercice « pizza-order ».
// Les types (Pizza, Extra, PizzaOrder) sont décrits dans global.d.ts fourni par l'énoncé.

/**
 * Calcule le prix d'une pizza en fonction de son nom et des suppléments.
 *
 * Règles déduites des tests :
 * - Base :
 *   - Margherita → 7
 *   - Formaggio  → 10
 *   - Caprese    → 9
 * - Suppléments (chaque occurrence compte) :
 *   - ExtraSauce     → +1
 *   - ExtraToppings  → +2
 *
 * @param {Pizza} pizza - Nom de la pizza
 * @param {...Extra} extras - Suppléments optionnels (peuvent être répétés)
 * @returns {number} - Prix total de la pizza
 */
export function pizzaPrice(pizza, ...extras) {
  throw new Error('À implémenter');
}

/**
 * Calcule le prix total d'une commande composée de plusieurs pizzas.
 *
 * @param {PizzaOrder[]} pizzaOrders - Liste des commandes de pizzas
 * @returns {number} - Prix total de la commande
 */
export function orderPrice(pizzaOrders) {
  throw new Error('À implémenter');
}
