import { test, expect } from "vitest";
import {
  minutesUntilShow,
  totalTimeInCinema,
  dailyCinemaTime,
} from "./11-cinema.js";

test("minutes restantes avant la séance", () => {
  expect(minutesUntilShow(780, 800)).toBe(20);
});

test("temps total dans la salle (film + pubs)", () => {
  expect(totalTimeInCinema(120)).toBe(135);
});

test("temps total de projection pour plusieurs films", () => {
  expect(dailyCinemaTime([90, 120, 110])).toBe(
    90 + 15 + (120 + 15) + (110 + 15)
  );
});
