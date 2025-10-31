import { test, expect } from "vitest";
import { shouldTriggerAlert } from "./12-cyberSecurity.js";

test("alerte si pare-feu inactif et activité suspecte", () => {
  expect(shouldTriggerAlert(false, true, false, false)).toBe(true);
});

test("pas d'alerte si pare-feu actif et aucune activité", () => {
  expect(shouldTriggerAlert(true, false, false, false)).toBe(false);
});

test("alerte si système comportemental actif et connexion anormale", () => {
  expect(shouldTriggerAlert(true, false, true, true)).toBe(true);
});

test("pas d'alerte si aucun des cas n'est vrai", () => {
  expect(shouldTriggerAlert(true, false, true, false)).toBe(false);
});
