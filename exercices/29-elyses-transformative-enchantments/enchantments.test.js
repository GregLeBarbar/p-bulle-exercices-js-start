import { describe, expect, test } from 'vitest';
import {
  middleTwo,
  perfectlyOrdered,
  reorder,
  sandwichTrick,
  seeingDouble,
  threeOfEachThree,
  twoIsSpecial,
} from './enchantments.js';

describe('seeingDouble', () => {
  test('double toutes les valeurs', () => {
    const deck1 = [1, 2, 3, 4];
    const expected1 = [2, 4, 6, 8];
    expect(seeingDouble(deck1)).toEqual(expected1);

    const deck2 = [2, 5, 1, 9];
    const expected2 = [4, 10, 2, 18];
    expect(seeingDouble(deck2)).toEqual(expected2);
  });

  test('fonctionne pour un grand paquet', () => {
    const deck = [6, 3, 7, 2, 1, 9, 8, 10, 5, 4, 7, 1, 3];
    const expected = [12, 6, 14, 4, 2, 18, 16, 20, 10, 8, 14, 2, 6];
    expect(seeingDouble(deck)).toEqual(expected);
  });

  test('fonctionne pour un paquet minimal', () => {
    expect(seeingDouble([3])).toEqual([6]);
  });

  test('gère un paquet vide', () => {
    expect(seeingDouble([])).toEqual([]);
  });

  test("ne modifie pas le paquet d'origine", () => {
    const deck = [1, 2, 3, 4];
    seeingDouble(deck);
    expect(deck).toEqual([1, 2, 3, 4]);
  });
});

describe('threeOfEachThree', () => {
  test('un seul 3 devient trois 3', () => {
    expect(threeOfEachThree([3])).toEqual([3, 3, 3]);
  });

  test('convertit aussi plusieurs 3', () => {
    const deck = [3, 10, 2, 8, 3, 4];
    const expected = [3, 3, 3, 10, 2, 8, 3, 3, 3, 4];
    expect(threeOfEachThree(deck)).toEqual(expected);
  });

  test("renvoie les mêmes éléments s'il n'y a pas de 3", () => {
    expect(threeOfEachThree([1, 2, 4])).toEqual([1, 2, 4]);
  });

  test('gère un paquet vide', () => {
    expect(threeOfEachThree([])).toEqual([]);
  });
});

describe('middleTwo', () => {
  test('extrait les deux cartes du milieu', () => {
    const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [5, 6];
    expect(middleTwo(deck)).toEqual(expected);
  });

  test('fonctionne avec un paquet non ordonné', () => {
    const deck = [6, 10, 5, 9, 4, 3, 1, 2, 6, 8];
    const expected = [4, 3];
    expect(middleTwo(deck)).toEqual(expected);
  });
});

describe('sandwichTrick', () => {
  test('déplace les deux cartes extérieures vers le milieu', () => {
    const deck = [1, 6, 7, 7, 2, 1];
    const expected = [6, 7, 1, 1, 7, 2];
    expect(sandwichTrick(deck)).toEqual(expected);
  });

  test('inverse l’ordre des deux cartes déplacées', () => {
    const deck = [3, 6, 1, 7, 2, 8];
    const expected = [6, 1, 8, 3, 7, 2];
    expect(sandwichTrick(deck)).toEqual(expected);
  });

  test('fonctionne avec un paquet de deux cartes', () => {
    expect(sandwichTrick([1, 10])).toEqual([10, 1]);
  });

  test('fonctionne avec un grand paquet', () => {
    const deck = [9, 10, 5, 9, 4, 3, 1, 2, 6, 7];
    const expected = [10, 5, 9, 4, 7, 9, 3, 1, 2, 6];
    expect(sandwichTrick(deck)).toEqual(expected);
  });
});

describe('twoIsSpecial', () => {
  test('ne garde que les 2', () => {
    const deck = [1, 2, 9, 1, 2, 2, 6, 7];
    const expected = [2, 2, 2];
    expect(twoIsSpecial(deck)).toEqual(expected);
  });

  test("retourne un paquet vide s'il n'y a pas de 2", () => {
    expect(twoIsSpecial([1, 9, 1])).toEqual([]);
  });

  test('gère un paquet vide', () => {
    expect(twoIsSpecial([])).toEqual([]);
  });
});

describe('perfectlyOrdered', () => {
  test('trie les cartes de la plus petite à la plus grande', () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [1, 2, 3, 6, 9];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('gère les doublons', () => {
    const deck = [2, 2, 6, 9, 3, 6];
    const expected = [2, 2, 3, 6, 6, 9];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('fonctionne pour un grand paquet', () => {
    const deck = [6, 10, 5, 9, 4, 3, 7, 7, 1, 2, 6, 8, 1, 3];
    const expected = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('gère un paquet vide', () => {
    expect(perfectlyOrdered([])).toEqual([]);
  });
});

describe('reorder', () => {
  test('réordonne la pile', () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [3, 9, 6, 1, 2];
    expect(reorder(deck)).toEqual(expected);
  });

  test('fonctionne pour un grand paquet', () => {
    const deck = [6, 10, 5, 9, 4, 3, 7, 7, 1, 2, 6, 8, 1, 3];
    const expected = [3, 1, 8, 6, 2, 1, 7, 7, 3, 4, 9, 5, 10, 6];
    expect(reorder(deck)).toEqual(expected);
  });

  test("modifie le paquet d'origine", () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [3, 9, 6, 1, 2];
    reorder(deck);
    expect(deck).toEqual(expected);
  });

  test('gère un paquet vide', () => {
    expect(reorder([])).toEqual([]);
  });
});
