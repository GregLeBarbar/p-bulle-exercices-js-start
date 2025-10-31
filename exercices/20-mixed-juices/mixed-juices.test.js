import { describe, expect, test } from 'vitest';
import { limesToCut, remainingOrders, timeToMixJuice } from './mixed-juices.js';

describe('timeToMixJuice', () => {
  test("retourne le temps correct pour 'Pure Strawberry Joy'", () => {
    expect(timeToMixJuice('Pure Strawberry Joy')).toBe(0.5);
  });

  test('retourne les temps corrects pour les autres boissons du menu', () => {
    expect(timeToMixJuice('Energizer')).toBe(1.5);
    expect(timeToMixJuice('Green Garden')).toBe(1.5);
    expect(timeToMixJuice('Tropical Island')).toBe(3);
    expect(timeToMixJuice('All or Nothing')).toBe(5);
  });

  test('retourne le même temps pour toutes les autres boissons', () => {
    const defaultTime = 2.5;
    expect(timeToMixJuice('Limetime')).toBe(defaultTime);
    expect(timeToMixJuice('Manic Organic')).toBe(defaultTime);
    expect(timeToMixJuice('Papaya & Peach')).toBe(defaultTime);
  });
});

describe('limesToCut', () => {
  test('calcule le nombre de limes nécessaires pour atteindre la réserve cible', () => {
    const limes = [
      'small',
      'large',
      'large',
      'medium',
      'small',
      'large',
      'large',
      'medium',
    ];
    expect(limesToCut(42, limes)).toBe(6);

    expect(limesToCut(4, ['medium', 'small'])).toBe(1);
  });

  test("utilise toutes les limes s'il n'y en a pas assez pour atteindre l'objectif", () => {
    const limes = [
      'small',
      'large',
      'large',
      'medium',
      'small',
      'large',
      'large',
    ];

    expect(limesToCut(80, limes)).toBe(7);
  });

  test("si aucun quartier n'est requis, aucune lime n'est coupée", () => {
    expect(limesToCut(0, ['small', 'large', 'medium'])).toBe(0);
  });

  test("fonctionne même si aucune lime n'est disponible", () => {
    expect(limesToCut(10, [])).toBe(0);
  });
});

describe('remainingOrders', () => {
  test('détermine correctement les commandes restantes', () => {
    const orders = [
      'Tropical Island',
      'Energizer',
      'Limetime',
      'All or Nothing',
      'Pure Strawberry Joy',
    ];
    const expected = ['All or Nothing', 'Pure Strawberry Joy'];

    expect(remainingOrders(7, orders)).toEqual(expected);
  });

  test('gère correctement les commandes entamées quand il restait un peu de temps', () => {
    const orders = [
      'Pure Strawberry Joy',
      'Pure Strawberry Joy',
      'Vitality',
      'Tropical Island',
      'All or Nothing',
      'All or Nothing',
      'All or Nothing',
      'Green Garden',
      'Limetime',
    ];
    const expected = ['All or Nothing', 'Green Garden', 'Limetime'];

    expect(remainingOrders(13, orders)).toEqual(expected);
  });

  test('compte toutes les commandes comme réalisées si le temps est suffisant', () => {
    const orders = [
      'Energizer',
      'Green Garden',
      'Ruby Glow',
      'Pure Strawberry Joy',
      'Tropical Island',
      'Limetime',
    ];

    expect(remainingOrders(12, orders)).toEqual([]);
  });

  test("fonctionne s'il ne reste qu'un tout petit peu de temps", () => {
    const orders = ['Bananas Gone Wild', 'Pure Strawberry Joy'];
    const expected = ['Pure Strawberry Joy'];

    expect(remainingOrders(0.2, orders)).toEqual(expected);
  });
});
