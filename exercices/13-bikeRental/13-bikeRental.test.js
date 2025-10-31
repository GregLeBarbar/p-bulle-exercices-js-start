import { test, expect } from "vitest";
import {
  dailyBikeRate,
  rentalDaysInBudget,
  discountedRentalPrice,
} from "./13-bikeRental.js";

test("tarif journalier pour 10€/h", () => {
  expect(dailyBikeRate(10)).toBe(80);
});

test("nombre de jours possibles avec un budget de 400€ à 10€/h", () => {
  expect(rentalDaysInBudget(400, 10)).toBe(5);
});

test("prix avec réduction de 10% sur deux semaines à 10€/h", () => {
  expect(discountedRentalPrice(10, 14, 0.1)).toBeGreaterThan(950); // 2 semaines à tarif réduit
});

test("prix sans réduction pour 3 jours à 12€/h", () => {
  expect(discountedRentalPrice(12, 3, 0.2)).toBe(288); // 3 * 96
});
