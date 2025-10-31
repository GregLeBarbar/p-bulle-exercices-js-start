import { test, expect } from "vitest";
import { reverseString } from "./06-reverseString.js";

test("inverse une chaîne simple", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("inverse une phrase", () => {
  expect(reverseString("Exercism")).toBe("msicrexE");
});

test("chaîne vide reste vide", () => {
  expect(reverseString("")).toBe("");
});
