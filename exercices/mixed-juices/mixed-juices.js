// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeToMix;

  switch (name) {
    case "Pure Strawberry Joy":
      timeToMix = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      timeToMix = 1.5;
      break;
    case "Tropical Island":
      timeToMix = 3;
      break;
    case "All or Nothing":
      timeToMix = 5;
      break;
    default:
      timeToMix = 2.5;
      break;
  }

  return timeToMix;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesUsed = 0;

  while (wedgesNeeded > 0 && limes.length > limesUsed) {
    let lime = limes[limesUsed];
    let wedgesInCurrentLime;

    switch (lime) {
      case "small":
        wedgesInCurrentLime = 6;
        break;
      case "medium":
        wedgesInCurrentLime = 8;
        break;
      case "large":
        wedgesInCurrentLime = 10;
        break;
      default:
        wedgesInCurrentLime = 0;
        break;
    }

    wedgesNeeded -= wedgesInCurrentLime;

    limesUsed++;
  }

  return limesUsed;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders[0])

    orders.shift();
  } while (timeLeft > 0);

  return orders
}
