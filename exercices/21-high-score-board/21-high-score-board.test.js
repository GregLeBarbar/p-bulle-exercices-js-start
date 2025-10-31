import { describe, test, expect } from "vitest";
import {
  createScoreBoard,
  addPlayer,
  removePlayer,
  updateScore,
  applyMondayBonus,
} from "./21-high-score-board.js";

describe("createScoreBoard", () => {
  test("crée un tableau avec une entrée initiale", () => {
    const attendu = { "The Best Ever": 1_000_000 };
    expect(createScoreBoard()).toEqual(attendu);
  });
});

describe("addPlayer", () => {
  test("ajoute un joueur et son score au tableau", () => {
    const scoreBoard = { Alice: 200, Bob: 50 };
    const attendu = { Alice: 200, Bob: 50, Charlie: 500 };
    const resultat = addPlayer(scoreBoard, "Charlie", 500);
    expect(resultat).toEqual(attendu);
  });

  test("retourne le même objet (pas de copie)", () => {
    const board = {};
    const resultat = addPlayer(board, "Testeur", 123);
    expect(Object.is(resultat, board)).toBe(true);
  });
});

describe("removePlayer", () => {
  test("supprime un joueur du tableau", () => {
    const board = { Alice: 200, Bob: 50, Charlie: 500 };
    const attendu = { Alice: 200, Bob: 50 };
    const resultat = removePlayer(board, "Charlie");
    expect(resultat).toEqual(attendu);
    expect(Object.is(resultat, board)).toBe(true);
  });

  test("ne fait rien si le joueur n’existe pas", () => {
    const board = { Alice: 200, Bob: 50 };
    const resultat = removePlayer(board, "Inconnu");
    expect(resultat).toEqual(board);
    expect(Object.is(resultat, board)).toBe(true);
  });
});

describe("updateScore", () => {
  test("augmente correctement le score d’un joueur", () => {
    const board = { Alice: 200, Bob: 50 };
    const attendu = { Alice: 200, Bob: 150 };
    const resultat = updateScore(board, "Bob", 100);
    expect(resultat).toEqual(attendu);
    expect(Object.is(resultat, board)).toBe(true);
  });
});

describe("applyMondayBonus", () => {
  test("ajoute 100 points à chaque joueur", () => {
    const board = { Alice: 200, Bob: 50, Charlie: 500 };
    const attendu = { Alice: 300, Bob: 150, Charlie: 600 };
    const resultat = applyMondayBonus(board);
    expect(resultat).toEqual(attendu);
    expect(Object.is(resultat, board)).toBe(true);
  });

  test("ne fait rien si le tableau est vide", () => {
    const board = {};
    const resultat = applyMondayBonus(board);
    expect(resultat).toEqual({});
    expect(Object.is(resultat, board)).toBe(true);
  });
});
