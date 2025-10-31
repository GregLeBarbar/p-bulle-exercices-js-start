import { test, expect } from "vitest";
import { hello } from "./00-hello.js";

test('doit retourner "Hello, World!"', () => {
  expect(hello()).toBe("Hello, World!");
});
