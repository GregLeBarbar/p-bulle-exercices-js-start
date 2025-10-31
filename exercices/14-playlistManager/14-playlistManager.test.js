import { test, expect } from "vitest";
import {
  getTrack,
  updateTrack,
  addTrackToEnd,
  removeTrackAt,
  removeLastTrack,
  addTrackToStart,
  removeFirstTrack,
  checkPlaylistSize,
} from "./14-playlistManager.js";

test("récupère un morceau par position", () => {
  expect(getTrack(["Track A", "Track B", "Track C"], 1)).toBe("Track B");
});

test("remplace un morceau à une position", () => {
  expect(updateTrack(["Track A", "Track B"], 1, "Track X")).toEqual([
    "Track A",
    "Track X",
  ]);
});

test("ajoute un morceau à la fin", () => {
  expect(addTrackToEnd(["A", "B"], "C")).toEqual(["A", "B", "C"]);
});

test("supprime un morceau à une position", () => {
  expect(removeTrackAt(["X", "Y", "Z"], 1)).toEqual(["X", "Z"]);
});

test("supprime le dernier morceau", () => {
  expect(removeLastTrack(["One", "Two"])).toEqual(["One"]);
});

test("ajoute un morceau au début", () => {
  expect(addTrackToStart(["B", "C"], "A")).toEqual(["A", "B", "C"]);
});

test("supprime le premier morceau", () => {
  expect(removeFirstTrack(["Intro", "Main"])).toEqual(["Main"]);
});

test("vérifie la taille de la playlist", () => {
  expect(checkPlaylistSize(["A", "B", "C"], 3)).toBe(true);
  expect(checkPlaylistSize(["A", "B"], 3)).toBe(false);
});
