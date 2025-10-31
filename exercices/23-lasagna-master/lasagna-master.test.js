import { describe, expect, test } from 'vitest';
import {
  addSecretIngredient,
  cookingStatus,
  preparationTime,
  quantities,
  scaleRecipe,
} from './lasagna-master.js';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

describe('cookingStatus', () => {
  test('reconnaît qu’il reste du temps', () => {
    const attendu = 'Not done, please wait.';
    expect(cookingStatus(1)).toBe(attendu);
    expect(cookingStatus(42)).toBe(attendu);
    expect(cookingStatus(8.5)).toBe(attendu);
    expect(cookingStatus(0.1)).toBe(attendu);
  });

  test('reconnaît quand le minuteur est à zéro', () => {
    expect(cookingStatus(0)).toBe('Lasagna is done.');
  });

  test('renvoie un message spécial si le minuteur est absent', () => {
    const attendu = 'You forgot to set the timer.';
    expect(cookingStatus()).toBe(attendu);
    expect(cookingStatus(undefined)).toBe(attendu);
  });
});

describe('preparationTime', () => {
  test('applique un temps moyen personnalisé par couche', () => {
    const manyLayers = [
      'sauce',
      'noodles',
      'béchamel',
      'meat',
      'mozzarella',
      'noodles',
      'ricotta',
      'eggplant',
      'béchamel',
      'noodles',
      'sauce',
      'mozzarella',
    ];
    expect(preparationTime(manyLayers, 1)).toBe(12);

    const fewLayers = ['sauce', 'noodles'];
    expect(preparationTime(fewLayers, 3.5)).toBe(7);
  });

  test('utilise la valeur par défaut si aucun temps personnalisé n’est passé', () => {
    const manyLayers = [
      'sauce',
      'noodles',
      'béchamel',
      'meat',
      'mozzarella',
      'noodles',
      'ricotta',
      'eggplant',
      'béchamel',
      'noodles',
      'sauce',
      'mozzarella',
    ];
    expect(preparationTime(manyLayers)).toBe(24);

    const fewLayers = ['sauce', 'noodles'];
    expect(preparationTime(fewLayers)).toBe(4);
  });

  test('fonctionne avec un tableau vide', () => {
    expect(preparationTime([])).toBe(0);
  });
});

describe('quantities', () => {
  test('calcule correctement les quantités de noodles et de sauce', () => {
    const fewLayers = ['noodles', 'sauce', 'noodles'];
    expectObjectsToBeEqual(quantities(fewLayers), { noodles: 100, sauce: 0.2 });

    const manyLayers = [
      'sauce',
      'noodles',
      'béchamel',
      'meat',
      'mozzarella',
      'noodles',
      'ricotta',
      'eggplant',
      'béchamel',
      'noodles',
      'sauce',
      'mozzarella',
    ];
    expectObjectsToBeEqual(quantities(manyLayers), {
      noodles: 150,
      sauce: 0.4,
    });
  });

  test('fonctionne si on ne trouve pas noodles ou sauce', () => {
    const noNoodles = ['sauce', 'béchamel', 'sauce', 'meat', 'sauce'];
    expectObjectsToBeEqual(quantities(noNoodles), { noodles: 0, sauce: 0.6 });

    const noSauce = ['eggplant', 'béchamel', 'noodles', 'béchamel'];
    expectObjectsToBeEqual(quantities(noSauce), { noodles: 50, sauce: 0 });
  });

  test('fonctionne avec un tableau vide', () => {
    expect(quantities([])).toEqual({ noodles: 0, sauce: 0 });
  });
});

describe('addSecretIngredient', () => {
  test("ajoute l'ingrédient secret (dernier de la liste de l’ami) à ma liste", () => {
    const friendsList = ['sauce', 'noodles', 'béchamel', 'marjoram'];
    const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];
    addSecretIngredient(friendsList, myList);

    const attendu = ['sauce', 'noodles', 'meat', 'tomatoes', 'marjoram'];
    expect(myList).toEqual(attendu);
  });

  test("ne modifie pas la liste de l'ami", () => {
    const createFriendsList = () => [
      'noodles',
      'tomatoes',
      'sauce',
      'meat',
      'mozzarella',
      'eggplant',
      'ricotta',
      'parmesan',
    ];

    const friendsList = createFriendsList();
    const myList = ['ricotta', 'béchamel', 'sauce', 'noodles', 'meat'];
    addSecretIngredient(friendsList, myList);

    expect(friendsList).toEqual(createFriendsList());
  });

  test('ne retourne rien', () => {
    const friendsList = [
      'sauce',
      'noodles',
      'béchamel',
      'mozzarella',
      'mustard',
    ];
    const myList = ['sauce', 'noodles', 'tomatoes'];
    expect(addSecretIngredient(friendsList, myList)).toBeUndefined();
  });
});

describe('scaleRecipe', () => {
  test('augmente correctement les quantités', () => {
    const recipe1 = {
      sauce: 0.5,
      noodles: 250,
      meat: 150,
      tomatoes: 3,
      onion: 0.5,
    };

    const expected1 = {
      sauce: 1.5,
      noodles: 750,
      meat: 450,
      tomatoes: 9,
      onion: 1.5,
    };

    expectObjectsToBeEqual(scaleRecipe(recipe1, 6), expected1);

    // prettier-ignore
    const recipe2 = {
      'sauce': 0.6,
      'noodles': 300,
      'carrots': 1,
      'mozzarella': 0.5,
      'ricotta': 50,
      'béchamel': 0.1,
      'tofu': 100,
    };

    // prettier-ignore
    const expected2 = {
      'sauce': 0.9,
      'noodles': 450,
      'carrots': 1.5,
      'mozzarella': 0.75,
      'ricotta': 75,
      'béchamel': 0.15,
      'tofu': 150,
    };

    expectObjectsToBeEqual(scaleRecipe(recipe2, 3), expected2);
  });

  test('diminue correctement les quantités', () => {
    const recipe = {
      sauce: 0.5,
      noodles: 250,
      meat: 150,
      tomatoes: 3,
      onion: 0.5,
    };

    const expected = {
      sauce: 0.25,
      noodles: 125,
      meat: 75,
      tomatoes: 1.5,
      onion: 0.25,
    };
    expectObjectsToBeEqual(scaleRecipe(recipe, 1), expected);
  });

  test('fonctionne avec une recette vide', () => {
    expect(scaleRecipe({})).toEqual({});
  });

  test("ne modifie pas l'objet d'origine", () => {
    const recipe = {
      sauce: 1,
      noodles: 250,
      meat: 150,
      tomatoes: 3,
      onion: 2,
    };

    const copy = { ...recipe };

    scaleRecipe(recipe, 4);
    expect(recipe).toEqual(copy);
  });
});

/**
 * Vitest / Jest : helper pour comparer des objets dont les valeurs
 * sont des nombres flottants, en utilisant toBeCloseTo pour chaque clé.
 */
function expectObjectsToBeEqual(actualObj, expectedObj) {
  for (const key in expectedObj) {
    expect(actualObj[key]).toBeCloseTo(
      expectedObj[key],
      DIFFERENCE_PRECISION_IN_DIGITS,
    );
  }
  expect(Object.keys(actualObj).length).toBe(Object.keys(expectedObj).length);
}
