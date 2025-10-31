import { test, expect } from "vitest";
import { max } from "./max.js";

test("plus grand entre 2 et 3", () => {
  expect(max(2, 3)).toBe(3);
});

test("plus grand entre 5 et 1", () => {
  expect(max(5, 1)).toBe(5);
});

test("égalité entre 4 et 4", () => {
  expect(max(4, 4)).toBe(4);
});
