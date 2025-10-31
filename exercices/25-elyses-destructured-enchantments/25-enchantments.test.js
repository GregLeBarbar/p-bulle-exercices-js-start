import { describe, expect, test } from "vitest";
import {
  getFirstCard,
  getSecondCard,
  swapTwoCards,
  shiftThreeCardsAround,
  pickNamedPile,
  swapNamedPile,
} from "./25-enchantments.js";

// Utilitaires de test (reprennent la forme de l’énoncé d’origine)
const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
const customLogSymbol = Symbol.for("exercism.javascript.util.log");

class LimitedDeck {
  constructor(values) {
    this.values = values;
  }
  [Symbol.iterator]() {
    return this.values[Symbol.iterator]();
  }
  toString() {
    return this.values.toString();
  }
  [customInspectSymbol](depth, inspectOptions, inspect) {
    const inner = this.values[customInspectSymbol]
      ? this.values[customInspectSymbol](depth, inspectOptions, inspect)
      : this.values.toString();
    return `List of (${inner})`;
  }
  [customLogSymbol](depth, inspectOptions, inspect) {
    const inner = this.values[customLogSymbol]
      ? this.values[customLogSymbol](depth, inspectOptions, inspect)
      : this.values.toString();
    return `List of (${inner})`;
  }
}

function deck(...values) {
  return new LimitedDeck(values);
}

describe("getFirstCard", () => {
  test("depuis un paquet d’une seule carte", () => {
    expect(getFirstCard(deck(3))).toBe(3);
  });

  test("depuis un paquet avec plusieurs cartes", () => {
    expect(getFirstCard(deck(8, 3, 9, 5))).toBe(8);
  });

  test("depuis un paquet vide", () => {
    expect(getFirstCard(deck())).toBe(undefined);
  });
});

describe("getSecondCard", () => {
  test("depuis un paquet de deux cartes", () => {
    expect(getSecondCard(deck(10, 4))).toBe(4);
  });

  test("depuis un paquet avec plusieurs cartes", () => {
    expect(getSecondCard(deck(2, 5, 7, 6))).toBe(5);
  });

  test("depuis un paquet vide", () => {
    expect(getSecondCard(deck())).toBe(undefined);
  });

  test("depuis un paquet d’une seule carte", () => {
    expect(getSecondCard(deck(8))).toBe(undefined);
  });
});

describe("swapTwoCards", () => {
  test("échange deux cartes numérotées", () => {
    expect(swapTwoCards(deck(3, 6))).toStrictEqual([6, 3]);
  });

  test("échange une haute carte et une petite carte", () => {
    expect(swapTwoCards(deck(10, 2))).toStrictEqual([2, 10]);
  });

  test("échange une figure et une petite carte", () => {
    expect(swapTwoCards(deck("king", 3))).toStrictEqual([3, "king"]);
  });
});

describe("shiftThreeCardsAround", () => {
  test("nombres consécutifs", () => {
    expect(shiftThreeCardsAround(deck(6, 4, 5))).toStrictEqual([4, 5, 6]);
  });

  test("déplace la figure en bas du paquet", () => {
    expect(shiftThreeCardsAround(deck("king", 5, 2))).toStrictEqual([
      5,
      2,
      "king",
    ]);
  });
});

describe("pickNamedPile", () => {
  test("garde la pile choisie", () => {
    const chosen = deck(3, "jack", "queen", "king", 10, 7);
    const disregarded = deck(4, 5, 6, 8, 9);
    const piles = { chosen, disregarded };

    expect(pickNamedPile(piles)).toStrictEqual(chosen);
  });

  test("retourne la référence réelle, sans recréer", () => {
    const chosen = deck(3, "jack", "queen", "king", 10, 7);
    const disregarded = deck(4, 5, 6, 8, 9);
    const piles = { chosen, disregarded };

    const result = pickNamedPile(piles);
    chosen.values.push("joker");

    expect(result).toStrictEqual(chosen);
  });
});

describe("swapNamedPile", () => {
  test("échange correctement les piles", () => {
    const face_pile = deck(3, "jack", "queen", "king", 10, 7);
    const numbers_pile = deck(4, 5, 6, 8, 9);
    const piles = { chosen: numbers_pile, disregarded: face_pile };

    expect(swapNamedPile(piles)).toStrictEqual({
      chosen: face_pile,
      disregarded: numbers_pile,
    });
  });

  test("préserve les références des piles (pas de recréation)", () => {
    const face_pile = deck(3, "jack", "queen", "king", 10, 7);
    const numbers_pile = deck(4, 5, 6, 8, 9);
    const piles = { chosen: numbers_pile, disregarded: face_pile };

    const result = swapNamedPile(piles);

    face_pile.values.push("joker");
    numbers_pile.values.push(2);

    expect(result).toStrictEqual({
      chosen: face_pile,
      disregarded: numbers_pile,
    });
  });
});
