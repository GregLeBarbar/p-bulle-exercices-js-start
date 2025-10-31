import { describe, expect, test } from 'vitest';
import { cardTypeCheck, determineOddEvenCards } from './enchantments.js';

const TYPE_IS_ODD = false;
const TYPE_IS_EVEN = true;

describe('cardTypeCheck', () => {
  test('une seule carte correspondante', () => {
    expect(cardTypeCheck([1], 1)).toBe(1);
  });

  test('une seule carte correspondante parmi plusieurs', () => {
    expect(cardTypeCheck([7, 4, 7, 3, 1, 2], 1)).toBe(1);
  });

  test('une seule carte non correspondante', () => {
    expect(cardTypeCheck([1], 2)).toBe(0);
  });

  test('plusieurs cartes correspondantes', () => {
    expect(cardTypeCheck([7, 7, 7], 7)).toBe(3);
  });

  test('plusieurs cartes correspondantes parmi beaucoup', () => {
    expect(cardTypeCheck([1, 2, 3, 7, 7, 7, 3, 2, 1], 7)).toBe(3);
  });

  test('aucune carte correspondante', () => {
    expect(cardTypeCheck([1, 2, 3, 4, 5, 4, 3, 2, 1], 7)).toBe(0);
  });
});

describe('determineOddEvenCards', () => {
  test('une carte impaire', () => {
    expect(determineOddEvenCards([1], TYPE_IS_ODD)).toBe(1);
    expect(determineOddEvenCards([1], TYPE_IS_EVEN)).toBe(0);
  });

  test('une carte paire', () => {
    expect(determineOddEvenCards([2], TYPE_IS_ODD)).toBe(0);
    expect(determineOddEvenCards([2], TYPE_IS_EVEN)).toBe(1);
  });

  test('plusieurs cartes impaires', () => {
    expect(determineOddEvenCards([1, 3, 5], TYPE_IS_ODD)).toBe(3);
    expect(determineOddEvenCards([1, 3, 5], TYPE_IS_EVEN)).toBe(0);
  });

  test('plusieurs cartes paires', () => {
    expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_ODD)).toBe(0);
    expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_EVEN)).toBe(5);
  });

  test('mélange de cartes impaires et paires', () => {
    expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_ODD)).toBe(5);
    expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_EVEN)).toBe(2);
  });
});
