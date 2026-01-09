import { describe, expect, test } from "@jest/globals";
import { weightedRandom, ValueError } from "./rarity";

describe("Weighted random", () => {
  const NumberOfRetries = 100;

  const fruits = ["Apple", "Pear", "Banana", "Dragon Fruit", "Kiwi"];
  const names = ["Bob", "Steve", "Jonathan", "Mark", "Leo"];
  const numbers = [9, 256, 42, 3, 7.5];
  const countries = ["Canada", "Sweden", "Italia", "Egypt", "Alaska"];

  describe("Error handling", () => {
    test("Cannot call the function with every argument missing", () => {
      expect(() => weightedRandom([], [])).toThrow(ValueError);
      expect(() => weightedRandom()).toThrow(ValueError);
    });

    test("Cannot call the function with any argument missing", () => {
      const normalWeight = [2, 8, 9, 5, 4];
      let nothing;

      expect(() => weightedRandom(names)).toThrow(ValueError);
      expect(() => weightedRandom(nothing, normalWeight)).toThrow(ValueError);
    });

    test("Cannot call the function with mismatched array length", () => {
      const longerWeight = [1, 2, 3, 4, 5, 6];
      const shorterWeight = [1, 2, 3];
      const emptyWeight = [];

      expect(() => weightedRandom(numbers, longerWeight)).toThrow(ValueError);
      expect(() => weightedRandom(numbers, shorterWeight)).toThrow(ValueError);
      expect(() => weightedRandom(numbers, emptyWeight)).toThrow(ValueError);
    });

    test("Giving the function a weight array that isn't a number array throws an error", () => {
      const stringWeight = ["1", "2", "3", "4", "5"];
      expect(() => weightedRandom(countries, stringWeight)).toThrow(ValueError);
    });
  });

  describe("Random value verification", () => {
    test("The weight parameter works properly", () => {
      const weight = [1, 3, 60, 1, 2];

      const results = [0, 0, 0, 0, 0];

      // Get the results of 100 times the normal amount of tests
      for (let i = 0; i < NumberOfRetries * 100; i++) {
        let item = weightedRandom(names, weight);

        results[names.indexOf(item)]++;
      }

      // Check to see if the third name is the most common
      let isRarest = true;

      for (let i = 0; i < results.length; i++) {
        if (i != 2 && results[i] > results[2]) {
          isRarest = false;
          break;
        }
      }

      expect(isRarest).toEqual(true);
    });

    test("Setting every weight value to 0 except for 1 returns the correct item", () => {
      for (let i = 0; i < NumberOfRetries; i++) {
        const randomWeight = [0, 0, 0, 0, 0];

        let randomIndex = Math.floor(Math.random() * randomWeight.length);

        randomWeight[randomIndex] = 1;

        expect(weightedRandom(fruits, randomWeight)).toStrictEqual(fruits[randomIndex]);
      }
    });

    test("Setting every weight to a small number (1) except for 1 (50'000) returns the correct item", () => {
      const riggedWeight = [1, 1, 1, 1, 50000];

      for (let i = 0; i < NumberOfRetries; i++) {
        // You would need to be incredibly unlucky if your function works and stil fail this test
        expect(weightedRandom(names, riggedWeight)).toStrictEqual(names[names.length - 1]);
      }
    });
  });
});
