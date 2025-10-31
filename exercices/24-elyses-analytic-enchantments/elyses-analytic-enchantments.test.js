import { describe, expect, test } from "vitest";
import {
  getCardPosition,
  doesStackIncludeCard,
  isEachCardEven,
  doesStackIncludeOddCard,
  getFirstOddCard,
  getFirstEvenCardPosition,
} from "./elyses-analytic-enchantments";

describe("getCardPosition", () => {
  test("quand c’est la première carte", () => {
    expect(getCardPosition([1, 2, 3], 1)).toBe(0);
  });
  test("quand la carte est absente", () => {
    expect(getCardPosition([1, 2, 3], 4)).toBe(-1);
  });
});

describe("doesStackIncludeCard", () => {
  test("retourne true si la carte est présente", () => {
    expect(doesStackIncludeCard([1, 2, 3], 1)).toBe(true);
  });
  test("retourne false si la carte est absente", () => {
    expect(doesStackIncludeCard([1, 2, 3], 4)).toBe(false);
  });
});

describe("isEachCardEven", () => {
  test("true si toutes les cartes sont paires", () => {
    expect(isEachCardEven([2, 4, 6])).toBe(true);
  });
  test("false si au moins une carte est impaire", () => {
    expect(isEachCardEven([2, 5, 6])).toBe(false);
  });
});

describe("doesStackIncludeOddCard", () => {
  test("true si une carte impaire est trouvée", () => {
    expect(doesStackIncludeOddCard([2, 5])).toBe(true);
  });
  test("false si aucune carte impaire n’est trouvée", () => {
    expect(doesStackIncludeOddCard([2, 4, 6])).toBe(false);
  });
});

describe("getFirstOddCard", () => {
  test("retourne la première carte impaire rencontrée", () => {
    expect(getFirstOddCard([2, 4, 1, 3])).toBe(1);
  });
  test("retourne undefined si aucune carte impaire", () => {
    expect(getFirstOddCard([4, 2, 6])).toBeUndefined();
  });
});

describe("getFirstEvenCardPosition", () => {
  test("retourne la position de la première carte paire", () => {
    expect(getFirstEvenCardPosition([2, 4, 1, 3])).toBe(0);
  });
  test("retourne -1 si aucune carte paire", () => {
    expect(getFirstEvenCardPosition([1, 3, 5])).toBe(-1);
  });
});
