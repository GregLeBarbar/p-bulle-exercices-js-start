import { test, expect } from "vitest";
import {
  needsPermission,
  choosePlant,
  calculateResellValue,
} from "./16-gardenCare.js";

test("plantes nécessitant une autorisation", () => {
  expect(needsPermission("cannabis")).toBe(true);
  expect(needsPermission("palmier")).toBe(true);
  expect(needsPermission("tomate")).toBe(false);
});

test("choisir la plante par ordre alphabétique", () => {
  expect(choosePlant("basilic", "aneth")).toBe("aneth est un meilleur choix");
  expect(choosePlant("romarin", "lavande")).toBe(
    "lavande est un meilleur choix"
  );
});

test("valeur de revente selon l’âge", () => {
  expect(calculateResellValue(100, 0.5)).toBe(90); // < 1 an
  expect(calculateResellValue(100, 2)).toBe(70); // < 3 ans
  expect(calculateResellValue(100, 5)).toBe(50); // >= 3 ans
});
