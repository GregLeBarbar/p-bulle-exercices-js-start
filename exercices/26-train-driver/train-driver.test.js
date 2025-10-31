import { describe, test, expect } from 'vitest';
import {
  getListOfWagons,
  fixListOfWagons,
  correctListOfWagons,
  extendRouteInformation,
  separateTimeOfArrival,
} from './train-driver.js';

// Utilitaires (adaptés des specs d'origine)
const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');
const customLogSymbol = Symbol.for('exercism.javascript.util.log');

// Classe pour simuler un itérable limité (tableau enveloppé)
class LimitedArray {
  constructor(values) {
    this.values = values;
  }

  // Active le spread, for..of, etc.
  [Symbol.iterator]() {
    return this.values[Symbol.iterator]();
  }

  // Journalisation basique
  toString() {
    return this.values.toString();
  }

  // Override logging Node
  [customInspectSymbol](depth, inspectOptions, inspect) {
    const inner = this.values[customInspectSymbol]
      ? this.values[customInspectSymbol](depth, inspectOptions, inspect)
      : this.values.toString();

    return `List of (${inner})`;
  }

  // Override logging web
  [customLogSymbol](depth, inspectOptions, inspect) {
    const inner = this.values[customLogSymbol]
      ? this.values[customLogSymbol](depth, inspectOptions, inspect)
      : this.values.toString();

    return `List of (${inner})`;
  }
}

function list(...values) {
  return new LimitedArray(values);
}

// Définit une propriété non modifiable 'timeOfArrival' sur l'objet route
function time(timeOfArrival, route) {
  Object.defineProperty(route, 'timeOfArrival', {
    configurable: false,
    writable: false,
    enumerable: true,
    value: timeOfArrival,
  });

  return route;
}

describe('getListOfWagons', () => {
  test('retourne le bon tableau', () => {
    expect(getListOfWagons(1, 5, 2, 7, 4)).toStrictEqual([1, 5, 2, 7, 4]);
  });

  test('fonctionne avec peu d’arguments', () => {
    expect(getListOfWagons(1, 5)).toStrictEqual([1, 5]);
  });

  test('fonctionne avec un seul argument', () => {
    expect(getListOfWagons(1)).toStrictEqual([1]);
  });

  test('fonctionne avec beaucoup d’arguments', () => {
    expect(getListOfWagons(1, 5, 6, 3, 9, 8, 4, 14, 24, 7)).toStrictEqual([
      1, 5, 6, 3, 9, 8, 4, 14, 24, 7,
    ]);
  });
});

describe('fixListOfWagons', () => {
  test('déplace les 2 premiers wagons à la fin', () => {
    const eachWagonsID = list(3, 7, 1, 14, 10, 4, 12, 6, 23, 17, 13, 20, 8, 19);
    const attendu = [1, 14, 10, 4, 12, 6, 23, 17, 13, 20, 8, 19, 3, 7];

    expect(fixListOfWagons(eachWagonsID)).toStrictEqual(attendu);
  });

  test('fonctionne avec seulement 3 wagons', () => {
    const eachWagonsID = list(4, 2, 1);
    expect(fixListOfWagons(eachWagonsID)).toStrictEqual([1, 4, 2]);
  });

  test('fonctionne avec quelques wagons', () => {
    const eachWagonsID = list(3, 4, 1, 5, 7, 9, 10);
    expect(fixListOfWagons(eachWagonsID)).toStrictEqual([1, 5, 7, 9, 10, 3, 4]);
  });
});

describe('correctListOfWagons', () => {
  test('insère les wagons manquants après le premier', () => {
    const eachWagonsID = list(1, 6, 11, 15, 13, 14, 17, 22, 2, 16, 19, 21);
    const missingWagons = list(8, 10, 5, 9, 3, 7, 20);
    const attendu = [
      1, 8, 10, 5, 9, 3, 7, 20, 6, 11, 15, 13, 14, 17, 22, 2, 16, 19, 21,
    ];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toStrictEqual(
      attendu,
    );
  });

  test('fonctionne avec des tableaux courts', () => {
    const eachWagonsID = list(1, 7, 15, 24);
    const missingWagons = list(8, 6, 4);
    const attendu = [1, 8, 6, 4, 7, 15, 24];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toStrictEqual(
      attendu,
    );
  });

  test('fonctionne si missingWagons est plus long', () => {
    const eachWagonsID = list(1, 7, 15, 24);
    const missingWagons = list(8, 6, 4, 5, 9, 21, 2, 13);
    const attendu = [1, 8, 6, 4, 5, 9, 21, 2, 13, 7, 15, 24];

    expect(correctListOfWagons(eachWagonsID, missingWagons)).toStrictEqual(
      attendu,
    );
  });
});

describe('extendRouteInformation', () => {
  test('étend correctement les informations de trajet', () => {
    const route = { from: 'Berlin', to: 'Hamburg' };
    const moreRouteInformation = {
      timeOfArrival: '12:00',
      precipitation: '10',
      temperature: '5',
    };

    const attendu = {
      from: 'Berlin',
      to: 'Hamburg',
      timeOfArrival: '12:00',
      precipitation: '10',
      temperature: '5',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toStrictEqual(
      attendu,
    );
  });

  test("fonctionne sans 'precipitation'", () => {
    const route = { from: 'Paris', to: 'London' };
    const moreRouteInformation = { timeOfArrival: '10:30', temperature: '20' };

    const attendu = {
      from: 'Paris',
      to: 'London',
      timeOfArrival: '10:30',
      temperature: '20',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toStrictEqual(
      attendu,
    );
  });

  test('fonctionne avec un ordre différent', () => {
    const route = { from: 'Gothenburg', to: 'Copenhagen' };
    const moreRouteInformation = {
      precipitation: '1',
      timeOfArrival: '21:20',
      temperature: '-6',
    };

    const attendu = {
      from: 'Gothenburg',
      to: 'Copenhagen',
      precipitation: '1',
      timeOfArrival: '21:20',
      temperature: '-6',
    };

    expect(extendRouteInformation(route, moreRouteInformation)).toStrictEqual(
      attendu,
    );
  });
});

describe('separateTimeOfArrival', () => {
  test("sépare 'timeOfArrival' de l'objet complet", () => {
    const route = time('12:00', {
      from: 'Berlin',
      to: 'Hamburg',
      precipitation: '10',
      temperature: '5',
    });

    const attendu = [
      '12:00',
      { from: 'Berlin', to: 'Hamburg', precipitation: '10', temperature: '5' },
    ];

    expect(separateTimeOfArrival(route)).toStrictEqual(attendu);
  });

  test('sépare correctement sur un petit objet', () => {
    const route = time('10:30', {
      from: 'Paris',
      to: 'London',
      temperature: '20',
    });

    const attendu = [
      '10:30',
      { from: 'Paris', to: 'London', temperature: '20' },
    ];

    expect(separateTimeOfArrival(route)).toStrictEqual(attendu);
  });

  test('sépare avec un ordre de clés différent', () => {
    const route = time('21:20', {
      from: 'Gothenburg',
      to: 'Copenhagen',
      precipitation: '1',
      temperature: '-6',
    });

    const attendu = [
      '21:20',
      {
        from: 'Gothenburg',
        to: 'Copenhagen',
        precipitation: '1',
        temperature: '-6',
      },
    ];

    expect(separateTimeOfArrival(route)).toStrictEqual(attendu);
  });
});
