import { describe, expect, test, vi } from 'vitest';
import {
  composeTransform,
  memoizeTransform,
  scale2d,
  translate2d,
} from './coordinate-transformation.js';

// Transforme factice qui renvoie [1,1] la première fois puis false
const fakeTransform = () => {
  let first = true;
  return () => {
    if (first) {
      first = false;
      return [1, 1];
    }
    return false;
  };
};

describe('translate2d', () => {
  test('retourne une fonction', () => {
    expect(typeof translate2d(0, 0)).toBe('function');
  });

  test('est prédictible', () => {
    const dx = 3;
    const dy = -5;
    const translator = translate2d(dx, dy);
    expect(translator(0, 0)).toEqual([3, -5]);
  });

  test('est réutilisable', () => {
    const dx = 3;
    const dy = -5;
    const translator = translate2d(dx, dy);
    translator(0, 0);
    expect(translator(4, 5)).toEqual([7, 0]);
  });
});

describe('scale2d', () => {
  test('retourne une fonction', () => {
    expect(typeof scale2d(0, 0)).toBe('function');
  });

  test('est prédictible', () => {
    const sx = 4;
    const sy = 2;
    const scaler = scale2d(sx, sy);
    expect(scaler(1, 1)).toEqual([4, 2]);
  });

  test('est réutilisable', () => {
    const sx = 4;
    const sy = 2;
    const scaler = scale2d(sx, sy);
    scaler(1, 1);
    expect(scaler(-2, 5)).toEqual([-8, 10]);
  });
});

describe('composeTransform', () => {
  const dx = -6;
  const dy = 10;
  const sx = 3;
  const sy = 2;

  test('retourne une fonction', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    expect(typeof composeTransform(translator, scaler)).toBe('function');
  });

  test('compose deux translations', () => {
    const translator = translate2d(dx, dy);
    const composeTranslate = composeTransform(translator, translator);
    expect(composeTranslate(0, 0)).toEqual([-12, 20]);
  });

  test('compose deux mises à l’échelle', () => {
    const scaler = scale2d(sx, sy);
    const composeScale = composeTransform(scaler, scaler);
    expect(composeScale(1, 1)).toEqual([9, 4]);
  });

  test('compose dans l’ordre g(f(x))', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(scaler, translator);
    expect(composed(0, 0)).toEqual([-6, 10]);
  });

  test('compose dans l’ordre opposé f(g(x))', () => {
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(translator, scaler);
    expect(composed(0, 0)).toEqual([-18, 20]);
  });
});

describe('memoizeTransform', () => {
  test('retourne une fonction', () => {
    expect(typeof memoizeTransform(translate2d(0, 0))).toBe('function');
  });

  test('retourne le même résultat pour la même entrée', () => {
    const memoizedTranslate = memoizeTransform(translate2d(2, 2));
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]);
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]); // cache
  });

  test('retourne des résultats différents pour des entrées différentes', () => {
    const memoizedTranslate = memoizeTransform(translate2d(1, 2));
    expect(memoizedTranslate(2, 2)).toEqual([3, 4]);
    expect(memoizedTranslate(6, 6)).toEqual([7, 8]);
  });

  test('n’appelle pas la fonction mémoïsée si l’entrée est la même', () => {
    const memoizedTransform = memoizeTransform(fakeTransform());
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
    expect(memoizedTransform(5, 5)).toEqual([1, 1]); // cache
  });

  test('ne se souvient que du dernier résultat', () => {
    const mockFunction = vi.fn((x, y) => [x * 2, y * 2]);
    const memoizedTransform = memoizeTransform(mockFunction);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(memoizedTransform(2, 2)).toEqual([4, 4]);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });

  test('recalcule quand une nouvelle fonction est fournie (instances séparées)', () => {
    const sumFunction = (x, y) => x + y;
    const differenceFunction = (x, y) => x - y;
    const memoizedSum = memoizeTransform(sumFunction);
    const memoizedDifference = memoizeTransform(differenceFunction);

    expect(memoizedSum(1, 2)).toEqual(3);
    expect(memoizedDifference(1, 2)).toEqual(-1);
  });
});
