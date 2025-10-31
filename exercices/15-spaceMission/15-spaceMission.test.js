import { test, expect } from "vitest";
import {
  extractFrontSignal,
  formatFrontPassword,
  extractBackSignal,
  formatBackPassword,
} from "./15-spaceMission.js";

test("extrait la première lettre du message", () => {
  expect(extractFrontSignal("Mercury")).toBe("M");
});

test("formate le mot de passe à partir des signaux frontaux", () => {
  expect(formatFrontPassword("mArs")).toBe("Mars");
});

test("extrait la dernière lettre significative", () => {
  expect(extractBackSignal("Apollo ")).toBe("o");
});

test("formate le mot de passe arrière avec requête", () => {
  expect(formatBackPassword("vEnUs")).toBe("Venus - over");
});
