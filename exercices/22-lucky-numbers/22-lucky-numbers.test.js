import { describe, expect, test } from "vitest";
import { twoSum, luckyNumber, errorMessage } from "./22-lucky-numbers.js";

describe("twoSum", () => {
  test("additionne correctement pour des tableaux courts", () => {
    const gauche = [2, 4];
    const droite = [1, 5, 7];
    expect(twoSum(gauche, droite)).toBe(181);
  });

  test("additionne correctement pour des tableaux longs", () => {
    const gauche = [1, 2, 4, 0, 3, 5, 2, 9];
    const droite = [3, 2, 4, 8, 1, 5, 4, 1, 8];
    expect(twoSum(gauche, droite)).toBe(337218947);
  });
});

describe("luckyNumber", () => {
  test("reconnaît les nombres palindromiques", () => {
    expect(luckyNumber(15651)).toBe(true);
    expect(luckyNumber(48911984)).toBe(true);
  });

  test("reconnaît les nombres non palindromiques", () => {
    expect(luckyNumber(156512)).toBe(false);
    expect(luckyNumber(48921984)).toBe(false);
  });

  test("fonctionne pour les petits nombres", () => {
    expect(luckyNumber(0)).toBe(true);
    expect(luckyNumber(33)).toBe(true);
    expect(luckyNumber(12)).toBe(false);
  });
});

describe("errorMessage", () => {
  test("indique qu'une valeur est requise quand l'entrée est vide", () => {
    expect(errorMessage("")).toBe("Required field");
    expect(errorMessage(null)).toBe("Required field");
    expect(errorMessage(undefined)).toBe("Required field");
  });

  test("détecte les entrées invalides", () => {
    expect(errorMessage("some text")).toBe("Must be a number besides 0");
    expect(errorMessage("86f1")).toBe("Must be a number besides 0");
    expect(errorMessage("4 2")).toBe("Must be a number besides 0");
    expect(errorMessage("0")).toBe("Must be a number besides 0");
  });

  test("retourne une chaîne vide pour les entrées valides", () => {
    expect(errorMessage("1.234")).toBe("");
    expect(errorMessage("  784   ")).toBe("");
    expect(errorMessage("5e3")).toBe("");
  });
});
