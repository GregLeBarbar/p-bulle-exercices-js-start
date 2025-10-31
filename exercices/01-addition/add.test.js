import { test, expect } from "vitest";
import { add } from "./add.js";

test("addition de deux positifs", () => {
  expect(add(2, 3)).toBe(5);
});

test("addition avec un nombre négatif", () => {
  expect(add(-1, 4)).toBe(3);
});

test("addition de deux zéros", () => {
  expect(add(0, 0)).toBe(0);
});
