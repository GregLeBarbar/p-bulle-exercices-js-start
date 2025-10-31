import { test, expect } from "vitest";
import { countChars } from "./10-countChars.js";

test("compte les lettres d'une chaîne", () => {
  expect(countChars("abc")).toBe(3);
});

test("chaîne vide", () => {
  expect(countChars("")).toBe(0);
});
