import { test, expect } from "vitest";
import {
  totalTemperature,
  temperatureInWeek,
  fixTemperatureLog,
} from "./17-greenhouseTemperature.js";

test("température totale", () => {
  expect(totalTemperature([20, 21, 22])).toBe(63);
});

test("température sur une semaine donnée", () => {
  const data = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  expect(temperatureInWeek(data, 1)).toBe(18 + 19 + 20 + 21 + 22 + 23 + 24);
  expect(temperatureInWeek(data, 2)).toBe(25 + 26 + 27 + 28 + 29 + 30);
});

test("corriger les températures tous les deux jours", () => {
  const input = [20, 20, 20, 20, 20];
  const corrected = fixTemperatureLog(input.slice()); // copier pour test
  expect(corrected).toEqual([21, 20, 21, 20, 21]);
});
