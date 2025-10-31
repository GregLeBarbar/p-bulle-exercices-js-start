import { test, expect } from "vitest";
import { isLeapYear } from "./07-leapYear.js";

test("année divisible par 4 mais pas par 100", () => {
  expect(isLeapYear(2020)).toBe(true);
});

test("année divisible par 100 mais pas par 400", () => {
  expect(isLeapYear(1900)).toBe(false);
});

test("année divisible par 400", () => {
  expect(isLeapYear(2000)).toBe(true);
});
