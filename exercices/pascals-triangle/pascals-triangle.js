//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (lineNumber) => {
  // For the tests to run, remove "x" from "xtest" inside of pascals-triangle.spec.js

  /**
   * @type {number[][]}
   */
  let pascalTriangle = [];

  for (let line = 1; line <= lineNumber; line++) {
    /**
     * @type {number[]}
     */
    let newLine = [];

    for (let column = 0; column < line; column++) {
      if (column === 0 || column === line - 1) {
        newLine.push(1);
      } else {
        let [first, second] = [
          pascalTriangle[line - 2][column - 1],
          pascalTriangle[line - 2][column],
        ];

        newLine.push(first + second);
      }
    }

    pascalTriangle.push(newLine);
  }

  return pascalTriangle;
};
