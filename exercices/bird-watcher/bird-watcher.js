// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birdCount = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    birdCount += birdsPerDay[i];
  }

  return birdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsPerWeek = 0;

  for (let i = 0 + (7 * (week - 1)); i < birdsPerDay.length; i++) {
    if (i >= 7 * week) {
      continue;
    }
    birdsPerWeek += birdsPerDay[i];
  }

  return birdsPerWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 1) {
      continue;
    }
    birdsPerDay[i] += 1;
  }
}
