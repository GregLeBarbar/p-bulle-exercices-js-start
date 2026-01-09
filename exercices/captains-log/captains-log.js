// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + Math.floor(1000 + Math.random() * (10000 - 1000));
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random()*(42000 - 41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planetClasses = "DHJKLMNRTY";

  return planetClasses[Math.floor(Math.random()*(10))];
}
