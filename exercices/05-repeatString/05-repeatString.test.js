import { test, expect } from "vitest";
import { repeatString } from "./05-repeatString.js";

test('"yo" répété 3 fois', () => {
  expect(repeatString("yo", 3)).toBe("yoyoyo");
});

test('"a" répété 0 fois', () => {
  expect(repeatString("a", 0)).toBe("");
});

test('"x" répété 5 fois', () => {
  expect(repeatString("x", 5)).toBe("xxxxx");
});
