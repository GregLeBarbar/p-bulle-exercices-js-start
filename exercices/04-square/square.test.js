import { test, expect } from "vitest";
import { square } from "./square.js";

test("carré de 3", () => {
  expect(square(3)).toBe(9);
});

test("carré de -2", () => {
  expect(square(-2)).toBe(4);
});

test("carré de 0", () => {
  expect(square(0)).toBe(0);
});
