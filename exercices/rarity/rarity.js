//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Picks a random item based on its weight.
 *
 * The higher the weight value is, the more often it will be picked (probability)
 *
 * @param {any[]} items Any items
 * @param {number[]} weights Their weight
 * @returns {any} The chosen item
 */
export function weightedRandom(items = "Empty", weights = "Empty") {
  // Error handling
  if (items == "Empty" || weights == "Empty" || items.length == 0 || weights.length == 0 || items.length != weights.length || typeof weights[0] != "number")
  {
    throw new ValueError("An argument (or both) are empty. Please try again.");
  }

  // Code

  let total = 0;

  weights.forEach((weight) => {
    total += weight;
  });

  const randomWeight = Math.ceil(Math.random() * total);

  let cursor = 0;
  for (let i = 0; i < weights.length; i++) {
    cursor += weights[i];
    if (cursor >= randomWeight) {
      return items[i];
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Rarity error");
  }
}
