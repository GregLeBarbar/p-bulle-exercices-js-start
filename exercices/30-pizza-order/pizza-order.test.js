import { describe, expect, test } from 'vitest';
import { orderPrice, pizzaPrice } from './pizza-order.js';

// Petite classe utilitaire pour créer des commandes immuables comme dans l'énoncé
class PizzaOrder {
  /**
   * @param {Pizza} pizza
   * @param {...Extra} extras
   */
  constructor(pizza, ...extras) {
    this.pizza = pizza;
    this.extras = Object.freeze(extras);
    Object.freeze(this);
  }
}

describe('Prix par pizza', () => {
  test("pizzaPrice('Margherita')", () => {
    expect(pizzaPrice('Margherita')).toBe(7);
  });

  test("pizzaPrice('Formaggio')", () => {
    expect(pizzaPrice('Formaggio')).toBe(10);
  });

  test("pizzaPrice('Caprese')", () => {
    expect(pizzaPrice('Caprese')).toBe(9);
  });

  test("pizzaPrice('Margherita', 'ExtraSauce')", () => {
    expect(pizzaPrice('Margherita', 'ExtraSauce')).toBe(8);
  });

  test("pizzaPrice('Caprese', 'ExtraToppings')", () => {
    expect(pizzaPrice('Caprese', 'ExtraToppings')).toBe(11);
  });

  test("pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings')", () => {
    expect(pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings')).toBe(13);
  });

  test("pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')", () => {
    expect(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')).toBe(12);
  });

  test("pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')", () => {
    expect(pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')).toBe(17);
  });
});

describe('Prix total de commande', () => {
  test('orderPrice([]) = 0', () => {
    expect(orderPrice([])).toBe(0);
  });

  test("orderPrice([PizzaOrder('Caprese')])", () => {
    const order = new PizzaOrder('Caprese');
    expect(orderPrice([order])).toBe(9);
  });

  test("orderPrice([PizzaOrder('Formaggio', 'ExtraSauce')])", () => {
    const order = new PizzaOrder('Formaggio', 'ExtraSauce');
    expect(orderPrice([order])).toBe(11);
  });

  test("orderPrice([PizzaOrder('Margherita'), PizzaOrder('Caprese', 'ExtraToppings')])", () => {
    const margherita = new PizzaOrder('Margherita');
    const caprese = new PizzaOrder('Caprese', 'ExtraToppings');
    expect(orderPrice([margherita, caprese])).toBe(18);
    expect(orderPrice([caprese, margherita])).toBe(18); // ordre indifférent
  });

  test("orderPrice([... beaucoup ...])", () => {
    const saucyMargherita = new PizzaOrder('Margherita', 'ExtraSauce', 'ExtraSauce', 'ExtraSauce');
    const toppedCaprese = new PizzaOrder('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings');
    expect(orderPrice([saucyMargherita, toppedCaprese])).toBe(27);

    const margherita = new PizzaOrder('Margherita');
    const margherita2 = new PizzaOrder('Margherita', 'ExtraSauce');
    const caprese = new PizzaOrder('Caprese');
    const caprese2 = new PizzaOrder('Caprese', 'ExtraToppings');
    const formaggio = new PizzaOrder('Formaggio');
    const formaggio2 = new PizzaOrder('Formaggio', 'ExtraSauce');
    const formaggio3 = new PizzaOrder('Formaggio', 'ExtraSauce', 'ExtraToppings');
    const formaggio4 = new PizzaOrder('Formaggio', 'ExtraToppings', 'ExtraSauce', 'ExtraToppings', 'ExtraSauce');
    const actual = orderPrice([margherita, margherita2, caprese, caprese2, formaggio, formaggio2, formaggio3, formaggio4]);
    expect(actual).toBe(85);
  });

  test('commande géante : 100k margheritas', () => {
    const allTheMargheritas = Array(100 * 1000).fill(new PizzaOrder('Margherita'));
    expect(orderPrice(allTheMargheritas)).toBe(700 * 1000);
  });
});
