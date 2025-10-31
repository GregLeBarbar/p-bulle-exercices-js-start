import { test, expect } from "vitest";
import { isEven } from "./isEven.js";

test("4 est pair", () => {
  expect(isEven(4)).toBe(true);
});

test("7 est impair", () => {
  expect(isEven(7)).toBe(false);
});

test("0 est pair", () => {
  expect(isEven(0)).toBe(true);
});
