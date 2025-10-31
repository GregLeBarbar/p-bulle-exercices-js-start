import { test, expect } from "vitest";
import { bothTrue } from "./09-booleanLogic.js";

test("vrai et vrai", () => {
  expect(bothTrue(true, true)).toBe(true);
});

test("vrai et faux", () => {
  expect(bothTrue(true, false)).toBe(false);
});

test("faux et faux", () => {
  expect(bothTrue(false, false)).toBe(false);
});
