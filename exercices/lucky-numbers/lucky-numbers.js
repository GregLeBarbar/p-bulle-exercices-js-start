// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i] * Math.pow(10, (array1.length - (1 + i)));
  }

  for (let i = array2.length - 1; i >= 0; i--) {
    const power = i;
    sum2 += array2[i] * Math.pow(10, (array2.length - (1 + i)));
  }

  return sum1 + sum2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let isLucky = true;
  const valueString = value.toString();

  for (let i = 0; i < valueString.length; i++) {
    const leftNumber = valueString[i];
    const rightNumber = valueString[valueString.length - (i + 1)]

    if (leftNumber != rightNumber)
    {
      isLucky = false;
      break;
    }
  }

  return isLucky;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == null || input == "" || input == undefined) {
    return "Required field";
  } else if (Number(input) == null || Number(input) == 0 || Number.isNaN(Number(input))) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
