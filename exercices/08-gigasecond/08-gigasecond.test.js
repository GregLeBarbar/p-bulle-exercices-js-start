import { test, expect } from "vitest";
import { gigasecond } from "./08-gigasecond.js";

test("ajoute une gigaseconde à une date UTC", () => {
  const input = new Date("2000-01-01T00:00:00Z");
  const expected = new Date("2031-09-09T01:46:40Z");
  expect(gigasecond(input).toISOString()).toBe(expected.toISOString());
});
